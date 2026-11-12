import re

with open("app.js", "r", encoding="utf-8") as f:
    text = f.read()

# Let us insert language detection in runEvaluation:
old_start = """  const runEvaluation = () => {
    const size = selectSize.value;
    const useCase = (txtUseCase.value || "").trim();
    const stack = (txtStack.value || "").trim();"""

new_start = """  const runEvaluation = () => {
    const size = selectSize.value;
    const useCase = (txtUseCase.value || "").trim();
    const stack = (txtStack.value || "").trim();
    const currentLang = (window.PDAEH_I18N && window.PDAEH_I18N.getLang) ? window.PDAEH_I18N.getLang() : "es";"""

if old_start in text:
    text = text.replace(old_start, new_start, 1)
    print("Injected currentLang in runEvaluation.")
else:
    print("Could not find old_start")

# Let us also update presets on language switch:
old_onclick = "  btn.onclick = runEvaluation;"
new_onclick = """  btn.onclick = runEvaluation;

  window.addEventListener('pdaeh:languageChanged', (e) => {
    const lang = e.detail.lang;
    const p = presets[selectSize.value];
    if (p) {
      if (lang === 'en') {
        if (selectSize.value === 'pyme') {
          txtUseCase.value = "FinNova Case (JIISIC 2026 Paper): Mid-sized financial-services firm (SME) specializing in investment management and portfolio analysis. The firm seeks to complement its platform with quantum-assisted optimization for complex portfolio rebalancing and multiobjective combinatorics, retaining classical control over financial data, business rules, regulatory compliance, and risk calculations.";
          txtStack.value = "Established classical analytics platform (As-Is): Market Data Services, Portfolio Services, Risk & Analytics Services, Compliance Services, and Reporting Services, deployed on microservices over a private cloud cluster with relational and time-series databases.";
        }
      } else if (lang === 'fr') {
        if (selectSize.value === 'pyme') {
          txtUseCase.value = "Cas FinNova (Article JIISIC 2026): Entreprise moyenne de services financiers (PME) spécialisée dans la gestion de placements et l'analyse de portefeuille. L'entreprise cherche à intégrer une capacité d'optimisation quantique assistée pour le rééquilibrage dynamique de portefeuille sous contraintes de risque, en conservant le contrôle classique intégral sur les données financières, les règles métier, la conformité réglementaire et les calculs de risque.";
          txtStack.value = "Plateforme analytique classique établie (As-Is): Services de données de marché, services de portefeuille, moteur de risque et d'analyse financière, services de conformité et de génération de rapports, déployés en microservices sur un cluster cloud privé avec bases relationnelles et temporelles.";
        }
      } else {
        txtUseCase.value = p.useCase;
        txtStack.value = p.stack;
      }
    }
  });"""

if old_onclick in text:
    text = text.replace(old_onclick, new_onclick, 1)
    print("Injected language listener in setupAgentDemo.")
else:
    print("Could not find old_onclick")

with open("app.js", "w", encoding="utf-8") as f:
    f.write(text)

print("Updated app.js successfully. Length:", len(text))
