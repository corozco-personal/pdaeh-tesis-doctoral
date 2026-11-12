import sys
sys.path.append("scratch")
from gen_rich_diagram import get_rich_diagram

with open("app.js", "r", encoding="utf-8") as f:
    text = f.read()

pos_run = text.find("const runEvaluation = () => {")
pos_startup = text.find("if (size === \"startup\") {", pos_run)
pos_corp = text.find("} else if (size === \"corporacion\") {", pos_run)
pos_pyme = text.find("} else {", pos_corp)

diag1_start = text.find("diagramSvg = `", pos_startup)
diag1_end = text.find("`;", diag1_start) + 2

diag2_start = text.find("diagramSvg = `", pos_corp)
diag2_end = text.find("`;", diag2_start) + 2

diag3_start = text.find("diagramSvg = `", pos_pyme)
diag3_end = text.find("`;", diag3_start) + 2

startup_diag = get_rich_diagram("startup")
corp_diag = get_rich_diagram("corporacion")
pyme_diag = get_rich_diagram("pyme")

# Replace from right to left
t = text[:diag3_start] + "diagramSvg = `" + pyme_diag.strip() + "`;" + text[diag3_end:]
t = t[:diag2_start] + "diagramSvg = `" + corp_diag.strip() + "`;" + t[diag2_end:]
t = t[:diag1_start] + "diagramSvg = `" + startup_diag.strip() + "`;" + t[diag1_end:]

with open("app.js", "w", encoding="utf-8") as f:
    f.write(t)

print("Replacement successful. New length:", len(t))
