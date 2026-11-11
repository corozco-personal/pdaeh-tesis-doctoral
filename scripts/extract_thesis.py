from __future__ import annotations

import json
import sys
import zipfile
from collections import Counter
from pathlib import Path

from docx import Document
from docx.table import Table
from docx.text.paragraph import Paragraph


def iter_block_items(doc: Document):
    body = doc.element.body
    for child in body.iterchildren():
        if child.tag.endswith("}p"):
            yield Paragraph(child, doc)
        elif child.tag.endswith("}tbl"):
            yield Table(child, doc)


def main() -> None:
    source = Path(sys.argv[1]).resolve()
    output = Path(sys.argv[2]).resolve()
    output.mkdir(parents=True, exist_ok=True)
    doc = Document(source)
    lines: list[str] = []
    records: list[dict] = []
    table_index = 0
    paragraph_index = 0

    for block_index, block in enumerate(iter_block_items(doc)):
        if isinstance(block, Paragraph):
            text = block.text.strip()
            record = {
                "block": block_index,
                "type": "paragraph",
                "paragraph": paragraph_index,
                "style": block.style.name,
                "text": text,
            }
            records.append(record)
            paragraph_index += 1
            if not text:
                continue
            if block.style.name == "Heading 1":
                lines.extend(["", f"# {text}", ""])
            elif block.style.name == "Heading 2":
                lines.extend(["", f"## {text}", ""])
            elif block.style.name == "Caption":
                lines.append(f"**{text}**")
            elif block.style.name.startswith("List Bullet"):
                lines.append(f"- {text}")
            elif block.style.name.startswith("List Number"):
                lines.append(f"1. {text}")
            else:
                lines.append(text)
        else:
            table_index += 1
            rows = []
            for row in block.rows:
                # Some thesis tables contain irregular vertical merges that
                # cannot be expanded through the public row.cells accessor.
                values = [
                    " ".join(" ".join((node.text or "") for node in tc.xpath(".//w:t")).split())
                    for tc in row._tr.tc_lst
                ]
                rows.append(values)
            records.append({
                "block": block_index,
                "type": "table",
                "table": table_index,
                "rows": rows,
            })
            lines.extend(["", f"### Tabla extraída {table_index}", ""])
            if rows:
                width = max(len(row) for row in rows)
                normalized = [row + [""] * (width - len(row)) for row in rows]
                lines.append("| " + " | ".join(normalized[0]) + " |")
                lines.append("| " + " | ".join(["---"] * width) + " |")
                for row in normalized[1:]:
                    lines.append("| " + " | ".join(row) + " |")
            lines.append("")

    (output / "thesis.md").write_text("\n".join(lines), encoding="utf-8")
    (output / "blocks.json").write_text(json.dumps(records, ensure_ascii=False, indent=2), encoding="utf-8")

    with zipfile.ZipFile(source) as archive:
        names = archive.namelist()
        xml_text = ""
        for name in names:
            if name.startswith("word/") and name.endswith(".xml"):
                xml_text += archive.read(name).decode("utf-8", errors="ignore")
        stats = {
            "source": str(source),
            "paragraphs": len(doc.paragraphs),
            "tables": len(doc.tables),
            "sections": len(doc.sections),
            "inline_shapes": len(doc.inline_shapes),
            "styles": Counter(p.style.name for p in doc.paragraphs),
            "zip_entries": len(names),
            "has_comments": "word/comments.xml" in names,
            "tracked_insertions": xml_text.count("<w:ins"),
            "tracked_deletions": xml_text.count("<w:del"),
        }
        (output / "stats.json").write_text(
            json.dumps(stats, ensure_ascii=False, indent=2, default=dict),
            encoding="utf-8",
        )


if __name__ == "__main__":
    main()
