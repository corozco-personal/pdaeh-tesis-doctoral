from pathlib import Path
from zipfile import ZipFile


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT.parents[1] / "monografia-phd.docx"
OUT = ROOT / "pdaeh-evaluacion-expertos" / "dist" / "assets" / "figures"

FIGURES = {
    2: "image3.png",
    16: "image17.png",
    22: "image23.png",
    23: "image24.png",
    24: "image25.png",
    25: "image26.png",
    26: "image28.png",
    27: "image30.png",
    28: "image32.png",
    29: "image34.png",
    30: "image36.png",
    31: "image38.png",
    32: "image40.png",
    33: "image42.png",
    34: "image44.png",
    35: "image46.png",
    36: "image48.png",
    37: "image50.png",
    38: "image52.png",
    39: "image54.png",
    40: "image56.png",
}

OUT.mkdir(parents=True, exist_ok=True)
with ZipFile(SOURCE) as archive:
    for number, media_name in FIGURES.items():
        target = OUT / f"figura-{number}.png"
        target.write_bytes(archive.read(f"word/media/{media_name}"))
        print(f"{number}: {target.name} ({target.stat().st_size} bytes)")
