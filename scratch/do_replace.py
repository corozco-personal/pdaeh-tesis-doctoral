import sys

with open("scratch/apply_enhancement.py", "r", encoding="utf-8") as f:
    enhancer_content = f.read()

# Extract `new_func` string from enhancer_content
start_delim = "new_func = r'''"
end_delim = "'''\n\nwith open(\"app.js\""
start_idx = enhancer_content.find(start_delim) + len(start_delim)
end_idx = enhancer_content.find(end_delim)
new_run_evaluation = enhancer_content[start_idx:end_idx]

# We need the full runEvaluation including the streamInterval part
# Let us check what new_run_evaluation ends with
print("new_run_evaluation ends with:", repr(new_run_evaluation[-80:]))

full_run_eval = new_run_evaluation + """
    let currentLen = 0;
    outContainer.innerHTML = '<span class="typing-cursor" style="color:var(--green);font-weight:700;">Procesando variables, aplicando reglas ontológicas y redactando dictamen metodológico...</span>';

    streamInterval = setInterval(() => {
      currentLen += 38;
      if (currentLen >= fullHtml.length) {
        clearInterval(streamInterval);
        outContainer.innerHTML = fullHtml;
        statusTag.textContent = "Diagnóstico y Hoja de Ruta Generados";
        statusTag.style.background = "#eaf1fb";
        statusTag.style.color = "#1f2a44";
        btn.disabled = false;
        btn.style.opacity = "1";
      } else {
        outContainer.innerHTML = fullHtml.slice(0, currentLen) + ' <span style="display:inline-block;width:8px;height:14px;background:var(--green);animation:blink 0.8s infinite;"></span>';
      }
    }, 12);
  };
"""

with open("app.js", "r", encoding="utf-8") as f:
    orig = f.read()

p1 = orig.find("  const runEvaluation = () => {")
p2 = orig.find("  btn.onclick = runEvaluation;")

if p1 == -1 or p2 == -1:
    print("Could not find delimiters")
    sys.exit(1)

updated = orig[:p1] + full_run_eval + "\n" + orig[p2:]

with open("app.js", "w", encoding="utf-8") as f:
    f.write(updated)

print("Replacement complete. Length:", len(updated))
