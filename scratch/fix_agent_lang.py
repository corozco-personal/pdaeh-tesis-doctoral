import re

with open("app.js", "r", encoding="utf-8") as f:
    text = f.read()

# 1. Update setupAgentDemo variables to read selectLang
p_vars = text.find("const selectSize = $(\"#demoOrgSize\");")
old_vars = """  const btn = $("#btnRunDemo");
  const selectSize = $("#demoOrgSize");
  const txtUseCase = $("#demoUseCase");
  const txtStack = $("#demoStack");
  const outContainer = $("#demoOutputContainer");
  const statusTag = $("#demoStatusTag");"""

new_vars = """  const btn = $("#btnRunDemo");
  const selectSize = $("#demoOrgSize");
  const selectLang = $("#demoAgentLang");
  const txtUseCase = $("#demoUseCase");
  const txtStack = $("#demoStack");
  const outContainer = $("#demoOutputContainer");
  const statusTag = $("#demoStatusTag");"""

text = text.replace(old_vars, new_vars, 1)

# 2. Add language onchange handler inside setupAgentDemo:
target_onchange = "  selectSize.onchange = () => {"
replacement_onchange = """  const updateInputsForLangAndSize = () => {
    const lang = selectLang ? selectLang.value : "es";
    const size = selectSize.value;
    
    if (size === "pyme") {
      if (lang === "en") {
        txtUseCase.value = "FinNova Case (JIISIC 2026 Paper): Mid-sized financial-services firm (SME) specializing in investment management and portfolio analysis for institutional and professional clients. The firm seeks to complement its platform with quantum-assisted optimization for complex dynamic portfolio rebalancing and multiobjective combinatorics under risk constraints, retaining full classical control over financial data, business rules, regulatory compliance, and factual risk calculations.";
        txtStack.value = "Established classical analytics platform (As-Is): Market Data Services, Portfolio Services, Risk & Analytics Services, Compliance Services, and Reporting Services, deployed on microservices over a private cloud cluster with relational and time-series databases.";
      } else if (lang === "fr") {
        txtUseCase.value = "Cas FinNova (Article JIISIC 2026): Entreprise moyenne de services financiers (PME) spécialisée dans la gestion de placements et l'analyse de portefeuille pour clients institutionnels et professionnels. L'entreprise cherche à intégrer une capacité d'optimisation quantique assistée pour le rééquilibrage dynamique de portefeuille sous contraintes de risque, en conservant le contrôle classique intégral sur les données financières, les règles métier, la conformité réglementaire et les calculs de risque.";
        txtStack.value = "Plateforme analytique classique établie (As-Is): Services de données de marché, services de portefeuille, moteur de risque et d'analyse financière, services de conformité et de génération de rapports, déployés en microservices sur un cluster cloud privé avec bases relationnelles et temporelles.";
      } else {
        const p = presets[size];
        if (p) { txtUseCase.value = p.useCase; txtStack.value = p.stack; }
      }
    } else {
      const p = presets[size];
      if (p) { txtUseCase.value = p.useCase; txtStack.value = p.stack; }
    }
  };

  if (selectLang) {
    selectLang.onchange = updateInputsForLangAndSize;
  }

  selectSize.onchange = () => {
    updateInputsForLangAndSize();"""

text = text.replace(target_onchange, replacement_onchange, 1)

# 3. Read lang inside runEvaluation:
target_run_eval = """  const runEvaluation = () => {
    const size = selectSize.value;
    const useCase = (txtUseCase.value || "").trim();
    const stack = (txtStack.value || "").trim();
    const currentLang = (window.PDAEH_I18N && window.PDAEH_I18N.getLang) ? window.PDAEH_I18N.getLang() : "es";"""

replacement_run_eval = """  const runEvaluation = () => {
    const size = selectSize.value;
    const lang = selectLang ? selectLang.value : "es";
    const useCase = (txtUseCase.value || "").trim();
    const stack = (txtStack.value || "").trim();"""

text = text.replace(target_run_eval, replacement_run_eval, 1)

# Clean up any residual window.addEventListener('pdaeh:languageChanged'...)
p_listener = text.find("window.addEventListener('pdaeh:languageChanged'")
if p_listener != -1:
    end_listener = text.find("});", p_listener) + 3
    text = text[:p_listener] + "// language handled via selectLang" + text[end_listener:]

with open("app.js", "w", encoding="utf-8") as f:
    f.write(text)

print("app.js updated successfully with selectLang support. Length:", len(text))
