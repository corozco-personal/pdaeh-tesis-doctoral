# Script to build complete clean i18n solution without reload loops or unhandled textareas
import re

# 1. Update app.js presets and updateInputsForLangAndSize
with open("app.js", "r", encoding="utf-8") as f:
    text = f.read()

# Replace presets object and updateInputsForLangAndSize
pos_presets = text.find("  const presets = {")
pos_run = text.find("  const runEvaluation = () => {")

clean_presets_and_handlers = """  const multiPresets = {
    pyme: {
      es: {
        label: "Pequeña y mediana empresa (PYME) · Caso FinNova (JIISIC 2026)",
        useCase: "Caso FinNova (Artículo JIISIC 2026): Empresa mediana de servicios financieros (PYME) especializada en gestión de inversiones y análisis de carteras para clientes institucionales y profesionales. La firma busca incorporar capacidad de optimización cuántica asistida para problemas complejos de rebalanceo dinámico de portafolio y optimización combinatoria multiobjetivo bajo restricciones de riesgo, preservando el control clásico integral sobre datos financieros, reglas de negocio, cumplimiento normativo y cálculo de riesgo fáctico.",
        stack: "Plataforma analítica clásica establecida (As-Is): Servicios de datos de mercado (Market Data Services), servicios de gestión de portafolios (Portfolio Services), motor de análisis y riesgo financiero (Risk & Analytics Services), servicios de cumplimiento normativo (Compliance Services) y generación de reportes (Reporting Services), desplegados en arquitectura de microservicios sobre clúster en la nube privada con bases de datos relacionales y series temporales."
      },
      en: {
        label: "Small and medium-sized enterprises (SMEs) · FinNova case (JIISIC 2026)",
        useCase: "FinNova Case (JIISIC 2026 Paper): Mid-sized financial-services firm (SME) specializing in investment management and portfolio analysis for institutional and professional clients. The firm seeks to complement its platform with quantum-assisted optimization for complex dynamic portfolio rebalancing and multiobjective combinatorics under risk constraints, retaining full classical control over financial data, business rules, regulatory compliance, and factual risk calculations.",
        stack: "Established classical analytics platform (As-Is): Market Data Services, Portfolio Services, Risk & Analytics Services, Compliance Services, and Reporting Services, deployed on microservices over a private cloud cluster with relational and time-series databases."
      },
      fr: {
        label: "Petites et moyennes entreprises (PME) · Cas FinNova (JIISIC 2026)",
        useCase: "Cas FinNova (Article JIISIC 2026): Entreprise moyenne de services financiers (PME) spécialisée dans la gestion de placements et l'analyse de portefeuille pour clients institutionnels et professionnels. L'entreprise cherche à intégrer une capacité d'optimisation quantique assistée pour le rééquilibrage dynamique de portefeuille sous contraintes de risque, en conservant le contrôle classique intégral sur les données financières, les règles métier, la conformité réglementaire et les calculs de risque.",
        stack: "Plateforme analytique classique établie (As-Is): Services de données de marché, services de portefeuille, moteur de risque et d'analyse financière, services de conformité et de génération de rapports, déployés en microservices sur un cluster cloud privé avec bases relationnelles et temporelles."
      }
    },
    startup: {
      es: {
        label: "Microempresa o startup (< 20 colaboradores)",
        useCase: "Scoring y cálculo de riesgo crediticio no lineal mediante Quantum Machine Learning (QSVM variacional).",
        stack: "Arquitectura Serverless en GCP (Cloud Run, BigQuery) y Python FastAPI."
      },
      en: {
        label: "Micro-enterprise or startup (< 20 employees)",
        useCase: "Non-linear credit scoring and risk assessment through Quantum Machine Learning (Variational QSVM).",
        stack: "Serverless architecture on GCP (Cloud Run, BigQuery) and Python FastAPI."
      },
      fr: {
        label: "Micro-entreprise ou startup (< 20 employés)",
        useCase: "Scoring et calcul du risque de crédit non linéaire via Quantum Machine Learning (QSVM variationnelle).",
        stack: "Architecture Serverless sur GCP (Cloud Run, BigQuery) et Python FastAPI."
      }
    },
    corporacion: {
      es: {
        label: "Gran empresa o corporación (> 200 colaboradores)",
        useCase: "Simulación de reactividad y afinidad molecular para descubrimiento acelerado de principios activos farmacéuticos.",
        stack: "Clúster HPC híbrido on-premise + Slurm, interconectado con nubes privadas mediante MPI."
      },
      en: {
        label: "Large enterprise or corporation (> 200 employees)",
        useCase: "Molecular reactivity and affinity simulation for accelerated pharmaceutical drug discovery.",
        stack: "Hybrid on-premise HPC cluster + Slurm, interconnected with private clouds via MPI."
      },
      fr: {
        label: "Grande entreprise ou corporation (> 200 employés)",
        useCase: "Simulation de réactivité et d'affinité moléculaire pour la découverte accélérée de principes actifs pharmaceutiques.",
        stack: "Cluster HPC hybride sur site + Slurm, interconnecté avec des clouds privés via MPI."
      }
    },
    inadecuado: {
      es: {
        label: "Caso Inadecuado / Fuera de alcance cuántico",
        useCase: "Desarrollo de un portal de comercio electrónico con carrito de compras, catálogo de productos y pasarela de pagos.",
        stack: "Next.js con Node.js, base de datos MongoDB y hosting en Vercel."
      },
      en: {
        label: "Inappropriate case / Outside quantum scope",
        useCase: "Development of an e-commerce portal with shopping cart, product catalog, and payment gateway.",
        stack: "Next.js with Node.js, MongoDB database, and hosting on Vercel."
      },
      fr: {
        label: "Cas inapproprié / Hors de portée quantique",
        useCase: "Développement d'un portail de commerce électronique avec panier d'achat, catalogue de produits et passerelle de paiement.",
        stack: "Next.js avec Node.js, base de données MongoDB et hébergement sur Vercel."
      }
    }
  };

  const updateInputsForLangAndSize = () => {
    // Current language can come from topbar switcher or agent selectLang
    const lang = (selectLang && selectLang.value) ? selectLang.value : (localStorage.getItem('pdaeh_user_lang') || 'es');
    if (selectLang && selectLang.value !== lang) {
      selectLang.value = lang;
    }
    const size = selectSize.value;
    const cat = multiPresets[size];
    if (cat) {
      const data = cat[lang] || cat['es'];
      txtUseCase.value = data.useCase;
      txtStack.value = data.stack;
    }
  };

  if (selectLang) {
    selectLang.onchange = () => {
      // also notify global app
      if (window.PDAEH_SET_LANG) {
        window.PDAEH_SET_LANG(selectLang.value);
      }
      updateInputsForLangAndSize();
    };
  }

  selectSize.onchange = () => {
    updateInputsForLangAndSize();
  };

  // Listen to global topbar language changes
  window.addEventListener('pdaeh:languageChanged', (e) => {
    if (selectLang) selectLang.value = e.detail.lang;
    updateInputsForLangAndSize();
  });

  // Initial call on load
  updateInputsForLangAndSize();

  let streamInterval = null;
"""

text = text[:pos_presets] + clean_presets_and_handlers + "\n" + text[pos_run:]

with open("app.js", "w", encoding="utf-8") as f:
    f.write(text)

print("Updated app.js with multiPresets. Length:", len(text))
