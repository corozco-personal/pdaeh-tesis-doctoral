(() => {
  const $ = (id) => document.getElementById(id);
  const status = $("advisorCopyStatus");
  const copy = async (text, message) => {
    try {
      await navigator.clipboard.writeText(text);
      status.textContent = message;
    } catch {
      status.textContent = "No se pudo acceder al portapapeles. Seleccione y copie el texto manualmente.";
    }
  };
  const buildCase = () => [
    "$pdaeh-advisor",
    "",
    "Realiza un diagnóstico PDAEH basado exclusivamente en el contexto siguiente. No uses una respuesta genérica ni asumas datos ausentes; identifica vacíos, formula preguntas cuando sean necesarios y justifica cada recomendación.",
    "",
    `Tamaño de la organización: ${$("advisorOrgSize").value}`,
    "",
    `Problema de negocio o caso de uso:\n${$("advisorUseCase").value.trim() || "[No especificado]"}`,
    "",
    `Arquitectura clásica actual (As-Is):\n${$("advisorStack").value.trim() || "[No especificada]"}`,
    "",
    `Resultado esperado:\n${$("advisorGoal").value.trim()}`,
    "",
    "Entrega: veredicto de viabilidad argumentado; información faltante; alcance; riesgos; roles adaptados; atributos de calidad; hoja de ruta F1–F5; artefactos; compuertas OGA; y siguiente acción concreta. Distingue hechos proporcionados, inferencias y recomendaciones."
  ].join("\n");
  $("copyAgentCommand").addEventListener("click", () => copy("$pdaeh-advisor", "Comando copiado."));
  $("copyAgentCase").addEventListener("click", () => copy(buildCase(), "Solicitud completa copiada. Péguela como un único mensaje en la sesión del agente instalado."));
})();
