import json
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
BLOCKS = json.loads((ROOT / "analysis" / "blocks.json").read_text(encoding="utf-8"))
OUT = ROOT / "pdaeh-evaluacion-expertos" / "dist" / "thesis-content.js"


def clean(value):
    return re.sub(r"\s+", " ", value or "").strip()


tables = []
caption = ""
for block in BLOCKS:
    if block["type"] == "paragraph" and block.get("style") == "Caption":
        caption = clean(block.get("text"))
    elif block["type"] == "table":
        number = None
        match = re.search(r"Tabla\s+(\d+)", caption)
        if match:
            number = int(match.group(1))
        rows = [[clean(cell) for cell in row] for row in block["rows"]]
        tables.append({"number": number, "caption": caption, "rows": rows})


def field_map(rows):
    result = {}
    for row in rows[1:]:
        if len(row) >= 2 and row[0]:
            result[clean(row[0])] = clean(" ".join(row[1:]))
    return result


phases, elements, activities = [], [], []
# The manuscript contains a handful of typographical code inconsistencies in
# the F3/F4 activity tables. These aliases preserve every activity while
# placing it under the phase and element described by its surrounding section.
code_corrections = {
    109: "F3.E6.A4", 110: "F3.E6.A5",
    111: "F3.E5.A1", 112: "F3.E5.A2", 113: "F3.E5.A3", 114: "F3.E5.A4",
    124: "F4.E9.A4", 126: "F4.E10.A1",
}
code_corrections = {
    109: "F3.E6.A4", 110: "F3.E6.A5",
    111: "F3.E5.A1", 112: "F3.E5.A2", 113: "F3.E5.A3", 114: "F3.E5.A4",
    124: "F4.E9.A4", 126: "F4.E10.A1",
}
for table in tables:
    n = table["number"]
    if not n or not 81 <= n <= 151:
        continue
    fields = field_map(table["rows"])
    cap = table["caption"]
    if "Documentación de la Fase" in cap:
        phases.append({"table": n, "caption": cap, **fields})
    elif "Documentación del elemento" in cap:
        elements.append({"table": n, "caption": cap, **fields})
    elif "Actividad" in cap or re.search(r"Tabla\s+\d+\.\s+F\d", cap):
        raw_code = fields.get("Código", "")
        if not raw_code:
            match = re.search(r"Actividad\s+(F\s*\d[^.]*\.\s*E\s*\d+\s*\.\s*[AE]\s*\d+)", cap)
            raw_code = match.group(1) if match else ""
        normalized = re.sub(r"\s+", "", raw_code)
        activities.append({"table": n, "caption": cap, "code": code_corrections.get(n, normalized), **fields})


def table_by_number(number):
    return next(table for table in tables if table["number"] == number)


data = {
    "meta": {
        "name": "Proceso para la Definición de Arquitecturas Empresariales Híbridas",
        "acronym": "PDAEH",
        "version": "versión documentada en la monografía",
        "source": "monografia-phd.docx",
        "generatedFromTables": "49–151",
    },
    "macro": field_map(table_by_number(79)["rows"]),
    "research": {
        "generalObjective": "Desarrollar una arquitectura de referencia adaptada a las necesidades emergentes de la Ingeniería de Software Cuántica, que apoye el diseño e implementación de arquitecturas de software empresariales híbridas en la industria de software.",
        "specificObjectives": table_by_number(1),
    },
    "integratedModel": {
        "elements": table_by_number(40),
        "dimensions": table_by_number(47),
    },
    "phases": phases,
    "elements": elements,
    "activities": activities,
    "dependencies": [table_by_number(n) for n in (49, 50, 51, 52, 53, 54, 55, 56, 58, 59, 60)],
    "templates": [table_by_number(n) for n in range(63, 68)],
    "glossaries": [table_by_number(n) for n in range(68, 70)],
    "roles": [table_by_number(n) for n in (74, 76, 77, 78)],
    "governance": table_by_number(80),
}

OUT.write_text(
    "window.THESIS_DATA = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n",
    encoding="utf-8",
)
print(json.dumps({k: len(data[k]) for k in ("phases", "elements", "activities", "roles")}))
