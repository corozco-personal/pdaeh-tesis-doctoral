import re

with open("app.js", "r", encoding="utf-8") as f:
    text = f.read()

# Let us update FinNova branch in app.js to generate English and French when selected!
pos_pyme = text.find('scaleLabel = "Pequeña y Mediana Empresa (PYME) · Caso FinNova (JIISIC 2026)";')
if pos_pyme == -1:
    print("Could not find scaleLabel in app.js")
    exit(1)

# Find the start of the branch:
branch_start = text.rfind("} else {", 0, pos_pyme)
branch_end = text.find("const fullHtml = `", pos_pyme)

finnova_multilingual = """} else {
      if (lang === "en") {
        scaleLabel = "Mid-sized Enterprise (SME) · FinNova Case (JIISIC 2026)";
        familyTitle = "Financial Portfolio Optimization (QAOA & Quantum Annealing · FinNova Case)";
        
        algRationale = `The case of <strong>FinNova</strong>, published in the research proceedings of <strong>JIISIC 2026</strong>, represents the baseline scenario for a financial-services SME tackling <strong>dynamic portfolio rebalancing</strong>. Asset selection combinatorics under regulatory constraints, turnover limits, and non-linear covariances exceed the capability of classical quadratic solvers when the asset universe expands. The problem is naturally formulated as a <strong>Quadratic Unconstrained Binary Optimization (QUBO)</strong> or Ising Hamiltonian, solved through <em>Quantum Approximate Optimization Algorithm (QAOA)</em> or <em>Quantum Annealing</em>. The guiding design principle prescribes a <strong>decoupled hybrid co-processing model</strong>: FinNova's classical platform retains data governance, regulatory compliance, and factual risk calculations, delegating only the combinatorial stochastic core to external quantum co-processors.`;

        architecturalSynthesis = `
          <!-- SECTION 1: ARCHITECTURAL RECOMMENDATIONS -->
          <div style="margin:1.4rem 0;">
            <h5 style="margin:0 0 0.6rem;font-size:1.02rem;color:var(--navy);font-weight:700;">1. Strategic Architectural Recommendations for FinNova (JIISIC 2026)</h5>
            <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
              <li><strong>Provider-Agnostic Quantum Integration Layer:</strong> Introduce a neutral middleware between FinNova's classical microservices and cloud quantum hardware to prevent proprietary vendor lock-in.</li>
              <li><strong>Preservation of Classical Operational Sovereignty:</strong> Keep market data services, regulatory compliance, risk calculations, and reporting entirely within FinNova's classical infrastructure; quantum computing serves as a specialized accelerator, not a replacement.</li>
              <li><strong>Proportional Governance and Decision Traceability:</strong> Enforce PDAEH's 5 OGA checkpoints ensuring every artifact maintains full bidirectional traceability and becomes a reusable corporate asset.</li>
            </ul>
          </div>

          <!-- SECTION 2: ARCHITECTURAL AND DESIGN PATTERNS -->
          <div style="margin:1.4rem 0;background:#f9fbfa;border:1px solid var(--line);border-radius:5px;padding:1.2rem;">
            <h5 style="margin:0 0 0.6rem;font-size:1.02rem;color:var(--green);font-weight:700;">2. Applicable Hybrid Architectural and Design Patterns</h5>
            <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
              <li><strong>Hybrid Quantum Mediator Pattern:</strong> Decouples portfolio optimization requests; orchestrates preprocessing, generates the QUBO formulation, monitors cloud QPU queues, and reconstructs optimal asset weights for portfolio managers.</li>
              <li><strong>Circuit Breaker and Classical Fallback Pattern:</strong> If the quantum cloud service experiences queue delays exceeding SLA thresholds or elevated decoherence noise, the system instantly switches to classical quadratic solvers (SLSQP / Markowitz).</li>
              <li><strong>Multi-Backend Quantum Adapter:</strong> Standardizes calls to gate-based QPUs (IBM Quantum, Azure Quantum) or quantum annealers (D-Wave Advantage) via open contract specifications (OpenQASM / QIR).</li>
              <li><strong>QUBO Data Mapper Pattern:</strong> Maps investment constraints (cardinality, exposure limits, liquidity) into penalty matrices over binary variables.</li>
            </ul>
          </div>

          <!-- SECTION 3: ARCHITECTURAL PRINCIPLES -->
          <div style="margin:1.4rem 0;">
            <h5 style="margin:0 0 0.6rem;font-size:1.02rem;color:var(--navy);font-weight:700;">3. Guiding Principles of FinNova Enterprise Architecture</h5>
            <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
              <li><strong>Principle of Architectural Complementarity:</strong> Quantum resources operate strictly as co-processors; operational state and transaction controls reside permanently on FinNova's classical platform.</li>
              <li><strong>Principle of Infrastructure Neutrality (Zero Vendor Lock-in):</strong> Software interfaces are never coded against vendor-proprietary APIs; all interactions are encapsulated in the Quantum Integration Layer.</li>
              <li><strong>Principle of Privacy and Compliance by Design:</strong> Identifiable client portfolio data never leaves FinNova's security perimeter; only abstract mathematical optimization matrices are transmitted to external QPUs.</li>
            </ul>
          </div>

          <!-- SECTION 4: MODELS AND TECHNOLOGIES -->
          <div style="margin:1.4rem 0;background:#f8fafc;border:1px solid var(--line);border-radius:5px;padding:1.2rem;">
            <h5 style="margin:0 0 0.6rem;font-size:1.02rem;color:#1e40af;font-weight:700;">4. Recommended Models and Technologies for FinNova</h5>
            <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
              <li><strong>Models and Algorithms:</strong> QAOA; Quantum Annealing; Classical quadratic fallback solvers (SLSQP / COBYLA).</li>
              <li><strong>Quantum Frameworks:</strong> D-Wave Ocean SDK; Qiskit Optimization; Azure Quantum Workspace.</li>
              <li><strong>Classical Platform:</strong> Python/Java microservices deployed on private Kubernetes; PostgreSQL and TimescaleDB; RabbitMQ / Kafka asynchronous message queues.</li>
            </ul>
          </div>

          <!-- SECTION 5: INDUSTRY CASE STUDIES -->
          <div style="margin:1.4rem 0;background:#fefbf3;border-left:4px solid #d4a017;padding:1.2rem;border-radius:4px;">
            <h5 style="margin:0 0 0.5rem;font-size:1.02rem;color:#7f5a00;font-weight:700;">5. Referenced Industry Case Studies in Financial Services (JIISIC 2026)</h5>
            <p style="margin:0 0 0.7rem;font-size:0.93rem;line-height:1.7;">
              FinNova's architecture is aligned with empirical patterns documented across leading financial institutions:
            </p>
            <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
              <li><strong>FinNova Scenario (JIISIC 2026):</strong> Demonstrates how an SME financial firm establishes a governed architectural baseline using 5 phases and 10 standardized elements, achieving end-to-end traceability between investment goals and hybrid software contracts.</li>
              <li><strong>BBVA Quantum Lab:</strong> Deployed a generic cloud connector to evaluate asset selection via classical solvers versus quantum annealing, demonstrating the necessity of decoupling core banking platforms.</li>
              <li><strong>JPMorgan Chase & Co.:</strong> Designed asynchronous pipelines for high-dimensional portfolio optimization, proving the indispensability of automated classical fallback switches.</li>
            </ul>
          </div>
        `;

        qualityRationale = `
          <p style="margin:0 0 0.6rem;">According to FinNova's specification (JIISIC 2026), the critical architectural quality attributes (Element E6 - DCD Dimension) are:</p>
          <ul style="padding-left:1.3rem;margin:0 0 0.4rem;line-height:1.7;">
            <li><strong>Provider Independence:</strong> Zero proprietary dependency, enabling dynamic switching among QPU providers without refactoring classical microservices.</li>
            <li><strong>Financial Data Governance & Privacy:</strong> Raw client holdings never leave FinNova's classical boundary; only anonymized indices and QUBO matrices are dispatched.</li>
            <li><strong>Operational Resilience & Classical Fallback:</strong> Automatic failover to classical Markowitz/quadratic solvers if cloud quantum queues exceed SLAs.</li>
            <li><strong>Auditability & Regulatory Traceability:</strong> Immutable audit logs of every optimization run for regulatory compliance.</li>
          </ul>
          <p style="margin:0.4rem 0 0;font-size:0.88rem;color:var(--muted);">These drivers are formalized in the <a href="plantilla.html?id=MAC" style="color:var(--green);font-weight:700;">MAC (Quality Attribute Evaluation Framework)</a> artifact.</p>
        `;

        roleNarrative = `
          <p style="margin:0 0 0.6rem;">In accordance with the SME organizational profile from JIISIC 2026, FinNova deploys a balanced role allocation:</p>
          <ul style="padding-left:1.3rem;margin:0;line-height:1.7;">
            <li><strong>Process Enterprise Architect (AEP):</strong> Leads the overall hybrid architecture and covers Data Architect (ADP) responsibilities.</li>
            <li><strong>Process Integration Architect (AIP):</strong> Coordinates technical integration between classical microservices and the quantum layer, covering Security (ASecP).</li>
            <li><strong>Architectural Portfolio Manager (GPA):</strong> Connects the initiative with corporate investment priorities.</li>
            <li><strong>Quantum Technology Specialist (ETC):</strong> External specialist contracted on-demand for quantum algorithm and circuit design.</li>
            <li><strong>Architectural Governance Body (OGA):</strong> Operates as a periodic committee review rather than a heavy permanent body.</li>
          </ul>
        `;

        roadmapNarrative = `
          <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
            <li><strong>Phase 1 (Strategic Definition - E1, E2):</strong> Defines FinNova's objectives (<a href="plantilla.html?id=DOE" style="color:var(--green);font-weight:700;">DOE</a>) and constraints (<a href="plantilla.html?id=DCA" style="color:var(--green);font-weight:700;">DCA</a>). Approval at <strong>Gate OGA-1</strong>.</li>
            <li><strong>Phase 2 (Conceptual Formalization - E3, E4):</strong> Establishes abstraction views (<a href="plantilla.html?id=DNA" style="color:var(--green);font-weight:700;">DNA</a> / <a href="plantilla.html?id=DPV" style="color:var(--green);font-weight:700;">DPV</a>) and unified glossary (<a href="plantilla.html?id=GDA" style="color:var(--green);font-weight:700;">GDA</a>). Approval at <strong>Gate OGA-2</strong>.</li>
            <li><strong>Phase 3 (Structural Configuration - E5, E6):</strong> Models quality attributes (<a href="plantilla.html?id=MAC" style="color:var(--green);font-weight:700;">MAC</a>) and decoupled integration structures (<a href="plantilla.html?id=MEA" style="color:var(--green);font-weight:700;">MEA</a>). Approval at <strong>Gate OGA-3</strong>.</li>
            <li><strong>Phase 4 (Architectural Materialization - E9, E10):</strong> Catalogs structural components (<a href="plantilla.html?id=DEA" style="color:var(--green);font-weight:700;">DEA</a> / <a href="plantilla.html?id=DCO" style="color:var(--green);font-weight:700;">DCO</a>) and indexes reusable assets in the <a href="plantilla.html?id=BER" style="color:var(--green);font-weight:700;">BER</a> library. Approval at <strong>Gate OGA-4</strong>.</li>
            <li><strong>Phase 5 (Design Systematization - E7, E8):</strong> Formalizes the Styles & Patterns Catalog (<a href="plantilla.html?id=CEP" style="color:var(--green);font-weight:700;">CEP</a>) and consolidates the Governed Architectural Baseline after approval at <strong>Gate OGA-5</strong>.</li>
          </ul>
        `;

        immediateAction = `Convene FinNova's simplified OGA committee (AEP, AIP, GPA, and Financial Executive) to formalize the Phase 1 Baseline by drafting the <a href="plantilla.html?id=DOE" style="color:var(--green);font-weight:700;">Strategic Objectives Document (DOE)</a> and <a href="plantilla.html?id=DCA" style="color:var(--green);font-weight:700;">Context Document (DCA)</a>.`;

      } else if (lang === "fr") {
        scaleLabel = "Moyenne Entreprise (PME) · Cas FinNova (JIISIC 2026)";
        familyTitle = "Optimisation de Portefeuilles Financiers (QAOA et Recuit Quantique · Cas FinNova)";
        
        algRationale = `Le cas de <strong>FinNova</strong>, publié dans les actes de recherche de <strong>JIISIC 2026</strong>, constitue le scénario de référence pour une PME de services financiers abordant le <strong>rééquilibrage dynamique de portefeuille</strong>. La combinatoire de sélection d'actifs sous contraintes réglementaires et de risque dépasse les capacités des solveurs quadratiques classiques à grande échelle. Le problème est formulé sous forme d'<strong>Optimisation Binaire Quadratique Non Contrainte (QUBO)</strong> résolue via <em>QAOA</em> ou <em>Recuit Quantique</em>. Le principe d'architecture fondamental impose un <strong>modèle hybride découplé</strong>: la plateforme classique de FinNova conserve la gouvernance des données, la conformité réglementaire et les calculs de risque déterministes, ne déléguant au coprocesseur quantique que le cœur combinatoire stochastique.`;

        architecturalSynthesis = `
          <!-- SECTION 1: RECOMMANDATIONS ARCHITECTURALES -->
          <div style="margin:1.4rem 0;">
            <h5 style="margin:0 0 0.6rem;font-size:1.02rem;color:var(--navy);font-weight:700;">1. Recommandations Architecturales Stratégiques pour FinNova (JIISIC 2026)</h5>
            <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
              <li><strong>Couche d'Intégration Quantique Neutre:</strong> Déployer un middleware agnostique entre les microservices classiques de FinNova et les ressources quantiques cloud afin d'éviter tout verrouillage propriétaire.</li>
              <li><strong>Préservation de la Souveraineté Opérationnelle Classique:</strong> Conserver les données de marché, le calcul de risque et la conformité sur la plateforme classique; le quantique intervient comme accélérateur complémentaire.</li>
              <li><strong>Gouvernance Proportionnelle et Traçabilité des Décisions:</strong> Appliquer les 5 points de contrôle OGA garantissant une traçabilité bidirectionnelle complète.</li>
            </ul>
          </div>

          <!-- SECTION 2: PATRONS ARCHITECTURAUX -->
          <div style="margin:1.4rem 0;background:#f9fbfa;border:1px solid var(--line);border-radius:5px;padding:1.2rem;">
            <h5 style="margin:0 0 0.6rem;font-size:1.02rem;color:var(--green);font-weight:700;">2. Patrons d'Architecture et de Conception Hybride</h5>
            <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
              <li><strong>Patron Médiateur Hybride:</strong> Découple les requêtes d'optimisation, construit le problème QUBO et reconstruit les poids d'actifs optimaux.</li>
              <li><strong>Patron Disjoncteur et Repli Classique (Circuit Breaker):</strong> Bascule instantanément vers les solveurs classiques quadratiques en cas de latence excessive du cloud quantique.</li>
              <li><strong>Adaptateur Multi-Fournisseur Quantique:</strong> Standardise les appels vers différentes QPU via des spécifications de contrats ouverts (OpenQASM / QIR).</li>
            </ul>
          </div>

          <!-- SECTION 3: PRINCIPES ARCHITECTURAUX -->
          <div style="margin:1.4rem 0;">
            <h5 style="margin:0 0 0.6rem;font-size:1.02rem;color:var(--navy);font-weight:700;">3. Principes Directeurs de l'Architecture FinNova</h5>
            <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
              <li><strong>Principe de Complémentarité Architecturale:</strong> Les ressources quantiques agissent comme coprocesseurs spécialisés.</li>
              <li><strong>Principe de Neutralité Technologique:</strong> Aucune interface logicielle n'est codée contre des API propriétaires directes.</li>
              <li><strong>Principe de Confidentialité dès la Conception:</strong> Les données identifiables de portefeuille ne quittent jamais le périmètre classique de FinNova.</li>
            </ul>
          </div>

          <!-- SECTION 4: MODÈLES ET TECHNOLOGIES -->
          <div style="margin:1.4rem 0;background:#f8fafc;border:1px solid var(--line);border-radius:5px;padding:1.2rem;">
            <h5 style="margin:0 0 0.6rem;font-size:1.02rem;color:#1e40af;font-weight:700;">4. Modèles et Technologies Recommandés</h5>
            <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
              <li><strong>Algorithmes:</strong> QAOA, Recuit Quantique, solveurs quadratiques classiques de repli (SLSQP / Markowitz).</li>
              <li><strong>Frameworks:</strong> D-Wave Ocean SDK, Qiskit Optimization, Azure Quantum Workspace.</li>
              <li><strong>Plateforme Classique:</strong> Microservices Kubernetes, PostgreSQL, TimescaleDB, files RabbitMQ / Kafka.</li>
            </ul>
          </div>

          <!-- SECTION 5: ÉTUDES DE CAS -->
          <div style="margin:1.4rem 0;background:#fefbf3;border-left:4px solid #d4a017;padding:1.2rem;border-radius:4px;">
            <h5 style="margin:0 0 0.5rem;font-size:1.02rem;color:#7f5a00;font-weight:700;">5. Études de Cas Référencées dans l'Industrie (JIISIC 2026)</h5>
            <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
              <li><strong>Cas FinNova (JIISIC 2026):</strong> Démontre la construction d'une ligne de base architecturale gouvernée en 5 phases et 10 éléments normalisés.</li>
              <li><strong>BBVA Quantum Lab:</strong> Connecteur cloud générique pour contraster solveurs classiques et quantiques.</li>
              <li><strong>JPMorgan Chase & Co.:</strong> Pipelines asynchrones pour portefeuilles de haute dimension avec repli automatique.</li>
            </ul>
          </div>
        `;

        qualityRationale = `
          <p style="margin:0 0 0.6rem;">Attributs de qualité critiques pour FinNova (Élément E6 - Dimension DCD):</p>
          <ul style="padding-left:1.3rem;margin:0 0 0.4rem;line-height:1.7;">
            <li><strong>Indépendance vis-à-vis des Fournisseurs:</strong> Neutralité logicielle permettant de changer de backend quantique sans impact classique.</li>
            <li><strong>Gouvernance et Sécurité des Données Financières:</strong> Aucune donnée client brute n'est transmise aux QPU.</li>
            <li><strong>Résilience Opérationnelle et Repli Classique:</strong> Basculement automatique en cas de panne du service quantique.</li>
          </ul>
          <p style="margin:0.4rem 0 0;font-size:0.88rem;color:var(--muted);">Formalisés dans le cadre d'évaluation <a href="plantilla.html?id=MAC" style="color:var(--green);font-weight:700;">MAC</a>.</p>
        `;

        roleNarrative = `
          <p style="margin:0 0 0.6rem;">Configuration des rôles selon le profil PME de JIISIC 2026:</p>
          <ul style="padding-left:1.3rem;margin:0;line-height:1.7;">
            <li><strong>Architecte d'Entreprise du Processus (AEP):</strong> Responsabilité globale de l'architecture hybride et rôle Données (ADP).</li>
            <li><strong>Architecte d'Intégration du Processus (AIP):</strong> Intégration technique et rôle Sécurité (ASecP).</li>
            <li><strong>Gestionnaire de Portefeuille Architectural (GPA):</strong> Alignement sur les investissements stratégiques.</li>
            <li><strong>Spécialiste Technologique Quantique (ETC):</strong> Expert externe à la demande.</li>
            <li><strong>Organe de Gouvernance Architecturale (OGA):</strong> Revue périodique collégiale aux points de contrôle.</li>
          </ul>
        `;

        roadmapNarrative = `
          <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
            <li><strong>Phase 1 (Définition Stratégique - E1, E2):</strong> Objectifs (<a href="plantilla.html?id=DOE" style="color:var(--green);font-weight:700;">DOE</a>) et contraintes (<a href="plantilla.html?id=DCA" style="color:var(--green);font-weight:700;">DCA</a>). Approbation au <strong>Point OGA-1</strong>.</li>
            <li><strong>Phase 2 (Formalisation Conceptuelle - E3, E4):</strong> Vues (<a href="plantilla.html?id=DNA" style="color:var(--green);font-weight:700;">DNA</a> / <a href="plantilla.html?id=DPV" style="color:var(--green);font-weight:700;">DPV</a>) et glossaire (<a href="plantilla.html?id=GDA" style="color:var(--green);font-weight:700;">GDA</a>). Approbation au <strong>Point OGA-2</strong>.</li>
            <li><strong>Phase 3 (Configuration Structurelle - E5, E6):</strong> Attributs de qualité (<a href="plantilla.html?id=MAC" style="color:var(--green);font-weight:700;">MAC</a>) et intégration (<a href="plantilla.html?id=MEA" style="color:var(--green);font-weight:700;">MEA</a>). Approbation au <strong>Point OGA-3</strong>.</li>
            <li><strong>Phase 4 (Matérialisation Architecturale - E9, E10):</strong> Composants (<a href="plantilla.html?id=DEA" style="color:var(--green);font-weight:700;">DEA</a> / <a href="plantilla.html?id=DCO" style="color:var(--green);font-weight:700;">DCO</a>) et éléments réutilisables dans la <a href="plantilla.html?id=BER" style="color:var(--green);font-weight:700;">BER</a>. Approbation au <strong>Point OGA-4</strong>.</li>
            <li><strong>Phase 5 (Systématisation de la Conception - E7, E8):</strong> Catalogue de Styles et Patrons (<a href="plantilla.html?id=CEP" style="color:var(--green);font-weight:700;">CEP</a>) et ligne de base architecturale après le <strong>Point OGA-5</strong>.</li>
          </ul>
        `;

        immediateAction = `Réunir le comité OGA de FinNova et formaliser la Ligne de Base de la Phase 1 en complétant le <a href="plantilla.html?id=DOE" style="color:var(--green);font-weight:700;">DOE</a> et le <a href="plantilla.html?id=DCA" style="color:var(--green);font-weight:700;">DCA</a>.`;

      } else {
        scaleLabel = "Pequeña y Mediana Empresa (PYME) · Caso FinNova (JIISIC 2026)";
        familyTitle = "Optimización de Portafolios Financieros (QAOA y Quantum Annealing · Caso FinNova)";
        
        algRationale = `El caso de <strong>FinNova</strong>, documentado en el artículo de investigación de las <strong>JIISIC 2026</strong>, representa el escenario de referencia para una mediana empresa de servicios financieros (PYME) que aborda el <strong>rebalanceo dinámico de carteras de inversión</strong>. La combinatoria de selección de activos bajo restricciones regulatorias, costos de transacción y covarianzas no lineales excede la capacidad de respuesta de los métodos cuadráticos clásicos cuando el universo de activos y horizontes temporales escala. La formulación matemática adecuada modela el problema como una <strong>Optimización Binaria Cuadrática No Restringida (QUBO)</strong> o Hamiltoniano de Ising, solucionable mediante <em>Quantum Approximate Optimization Algorithm (QAOA)</em> o <em>Quantum Annealing</em>. El principio rector de diseño prescribe un <strong>enfoque híbrido de co-procesamiento desacoplado</strong>: la plataforma clásica de FinNova preserva el gobierno de datos sensibles, el cumplimiento normativo y el cálculo de riesgo determinista, derivando al coprocesador cuántico externo únicamente la resolución del núcleo combinatorio estocástico.`;

        architecturalSynthesis = `
          <!-- SECCIÓN 1: RECOMENDACIONES ARQUITECTÓNICAS -->
          <div style="margin:1.4rem 0;">
            <h5 style="margin:0 0 0.6rem;font-size:1.02rem;color:var(--navy);font-weight:700;">1. Recomendaciones Arquitectónicas Estratégicas para FinNova (JIISIC 2026)</h5>
            <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
              <li><strong>Capa de Integración Cuántica Neutral (Provider-Agnostic Layer):</strong> Interponer una capa middleware de integración cuántica entre la plataforma clásica de FinNova y las nubes cuánticas externas para evitar el bloqueo tecnológico con proveedores propietarios.</li>
              <li><strong>Preservación de Soberanía Operativa Clásica:</strong> Mantener los servicios de datos de mercado, cálculo de riesgo regulatorio, cumplimiento y generación de informes íntegramente en la plataforma clásica de FinNova; la computación cuántica se incorpora como servicio complementario de aceleración, no como reemplazo.</li>
              <li><strong>Gobernanza Proporcional y Trazabilidad de Decisiones:</strong> Aplicar las 5 compuertas OGA de PDAEH asegurando que cada artefacto (desde el DOE hasta el CEP) conserve trazabilidad estricta y sirva como activo reutilizable para futuras iniciativas cuánticas de la firma.</li>
            </ul>
          </div>

          <!-- SECCIÓN 2: PATRONES ARQUITECTÓNICOS Y DE DISEÑO -->
          <div style="margin:1.4rem 0;background:#f9fbfa;border:1px solid var(--line);border-radius:5px;padding:1.2rem;">
            <h5 style="margin:0 0 0.6rem;font-size:1.02rem;color:var(--green);font-weight:700;">2. Patrones Arquitectónicos y de Diseño Híbrido Aplicables</h5>
            <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
              <li><strong>Patrón Mediador Híbrido Cuántico-Clásico (Hybrid Quantum Mediator):</strong> Desacopla la invocación de rebalanceo de carteras; orquesta el preprocesamiento de series temporales, construye la formulación QUBO, monitorea la cola en la QPU y reconstruye la asignación óptima de pesos para el gestor financiero.</li>
              <li><strong>Patrón Circuit Breaker y Fallback Clásico:</strong> Si el proveedor cuántico presenta latencias superiores a las toleradas en la ventana de negociación o errores de decoherencia elevados, conmuta instantáneamente al optimizador clásico cuadrático de contingencia.</li>
              <li><strong>Patrón Adaptador Multi-Plataforma (Quantum Multi-Backend Adapter):</strong> Estandariza la invocación hacia diversos procesadores cuánticos físicos o simuladores (D-Wave Advantage, IBM Quantum Runtime, Azure Quantum) a través de contratos de interfaz unificados (OpenQASM / QIR).</li>
              <li><strong>Patrón Mapeador de Restricciones QUBO (QUBO Data Mapper):</strong> Traduce las restricciones financieras de inversión (mínimos/máximos de exposición, límites sectoriales, liquidez) en términos de penalización cuadrática sobre variables binarias.</li>
            </ul>
          </div>

          <!-- SECCIÓN 3: PRINCIPIOS ARQUITECTÓNICOS -->
          <div style="margin:1.4rem 0;">
            <h5 style="margin:0 0 0.6rem;font-size:1.02rem;color:var(--navy);font-weight:700;">3. Principios Rectores de la Arquitectura Empresarial de FinNova</h5>
            <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
              <li><strong>Principio de Complementariedad Arquitectónica:</strong> El componente cuántico actúa como acelerador especializado; el control operativo, la validación de negocio y el almacenamiento de posiciones residen siempre en la plataforma clásica de FinNova.</li>
              <li><strong>Principio de Neutralidad de Infraestructura (Zero Vendor Locking):</strong> Ninguna interfaz de software de FinNova se codifica contra contratos propietarios de hardware cuántico; toda interacción se encapsula en la Capa de Integración Cuántica.</li>
              <li><strong>Principio de Privacidad y Cumplimiento por Diseño:</strong> Los datos identificables de carteras de clientes jamás abandonan el perímetro de seguridad clásico de FinNova; únicamente se transfieren matrices matemáticas abstractas de optimización.</li>
            </ul>
          </div>

          <!-- SECCIÓN 4: MODELOS Y TECNOLOGÍAS SUGERIDAS -->
          <div style="margin:1.4rem 0;background:#f8fafc;border:1px solid var(--line);border-radius:5px;padding:1.2rem;">
            <h5 style="margin:0 0 0.6rem;font-size:1.02rem;color:#1e40af;font-weight:700;">4. Modelos Algorítmicos y Tecnologías Recomendadas para FinNova</h5>
            <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
              <li><strong>Modelos y Algoritmos:</strong> Quantum Approximate Optimization Algorithm (QAOA); Recocido Cuántico (Quantum Annealing); Optimizadores Cuadráticos Clásicos de Soporte (Markowitz / SLSQP / COBYLA).</li>
              <li><strong>Frameworks Cuánticos:</strong> D-Wave Ocean SDK; Qiskit Optimization (IBM); Azure Quantum Workspace con conectores neutrales.</li>
              <li><strong>Plataforma Clásica:</strong> Microservicios en Python/Java sobre clúster Kubernetes; PostgreSQL para transaccionalidad y TimescaleDB para series temporales de activos financieros; Colas asíncronas RabbitMQ / Kafka.</li>
            </ul>
          </div>

          <!-- SECCIÓN 5: ARQUITECTURAS IMPLEMENTADAS EN EMPRESAS SIMILARES -->
          <div style="margin:1.4rem 0;background:#fefbf3;border-left:4px solid #d4a017;padding:1.2rem;border-radius:4px;">
            <h5 style="margin:0 0 0.5rem;font-size:1.02rem;color:#7f5a00;font-weight:700;">5. Casos de Estudio y Arquitecturas Referenciadas en Finanzas (JIISIC 2026)</h5>
            <p style="margin:0 0 0.7rem;font-size:0.93rem;line-height:1.7;">
              El escenario de FinNova sintetiza las decisiones arquitectónicas observadas en instituciones financieras y plataformas de referencia:
            </p>
            <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
              <li><strong>Caso FinNova (JIISIC 2026):</strong> Demuestra cómo una PYME de servicios financieros estructura una línea base arquitectónica gobernada mediante 5 fases y 10 elementos normalizados, consolidando roles y logrando trazabilidad integral entre objetivos de inversión y contratos de software híbrido.</li>
              <li><strong>BBVA Quantum Lab:</strong> Adoptó un conector genérico en la nube para contrastar la selección de activos clásica frente a recocido cuántico y QAOA, validando la necesidad de desacoplar los sistemas transaccionales bancarios.</li>
              <li><strong>JPMorgan Chase & Co.:</strong> Diseñó pipelines asíncronos para optimización de portafolios de alta dimensión, confirmando la indispensabilidad de patrones de conmutación de contingencia clásica (fallback).</li>
            </ul>
          </div>
        `;

        qualityRationale = `
          <p style="margin:0 0 0.6rem;">Conforme a la especificación del caso FinNova (JIISIC 2026), los drivers y atributos de calidad arquitectónicos críticos (Elemento E6 - Dimensión DCD) son:</p>
          <ul style="padding-left:1.3rem;margin:0 0 0.4rem;line-height:1.7;">
            <li><strong>Independencia de Proveedor Cuántico (Provider Independence):</strong> La arquitectura no debe depender de una plataforma o SDK propietario (IBM, AWS, D-Wave o Microsoft); debe incorporar una capa de integración neutral que permita intercambiar el backend cuántico sin alterar el core financiero de FinNova.</li>
            <li><strong>Gobernanza y Privacidad de Datos Financieros:</strong> Los datos de tenencia de clientes institucionales y las matrices de riesgo confidenciales jamás se transfieren en crudo a la QPU; se extraen únicamente índices anonimizados y matrices de covarianza normalizadas para el modelo QUBO.</li>
            <li><strong>Resiliencia Operativa y Fallback Clásico:</strong> Si la cola del servicio cuántico en la nube supera el SLA establecido o experimenta indisponibilidad, el sistema conmuta automáticamente a optimizadores clásicos cuadráticos (SLSQP / Markowitz clásico) sin interrumpir la operación del gestor de inversiones.</li>
            <li><strong>Trazabilidad y Cumplimiento Normativo (Auditoría Financiera):</strong> Registro inmutable de cada decisión de optimización, parámetros de ejecución en la QPU y resultados aproximados para responder ante auditorías de los entes reguladores de valores.</li>
          </ul>
          <p style="margin:0.4rem 0 0;font-size:0.88rem;color:var(--muted);">Estos atributos se formalizan y ponderan en el artefacto <a href="plantilla.html?id=MAC" style="color:var(--green);font-weight:700;">MAC (Marco de Evaluación de Atributos)</a>.</p>
        `;

        roleNarrative = `
          <p style="margin:0 0 0.6rem;">En concordancia con el perfil organizacional para PYMEs validado en el artículo JIISIC 2026, FinNova despliega una estructura de responsabilidades balanceada y adaptada a sus capacidades:</p>
          <ul style="padding-left:1.3rem;margin:0;line-height:1.7;">
            <li><strong>Arquitecto(a) Empresarial del Proceso (AEP):</strong> Asume la responsabilidad global de la arquitectura híbrida y cubre operativamente las funciones de Arquitecto(a) de Datos (ADP).</li>
            <li><strong>Arquitecto(a) de Integración del Proceso (AIP):</strong> Coordina la integración técnica entre los microservicios clásicos y la capa cuántica, cubriendo operativamente las funciones de seguridad (ASecP).</li>
            <li><strong>Gestor de Portafolio Arquitectónico (GPA):</strong> Conecta y alinea la iniciativa cuántica con las prioridades de inversión estratégica del negocio de inversión.</li>
            <li><strong>Especialista Tecnológico Cuántico (ETC):</strong> Experto externo contratado bajo demanda para el diseño del algoritmo cuántico y la compilación de circuitos.</li>
            <li><strong>Órgano de Gobierno Arquitectónico (OGA):</strong> Opera mediante un esquema de revisión periódica colegiada (Comité Técnico de FinNova) en cada una de las compuertas de decisión, en lugar de un órgano permanente pesado.</li>
          </ul>
        `;

        roadmapNarrative = `
          <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
            <li><strong>Fase 1 (Definición estratégica - E1, E2):</strong> Define el objetivo arquitectónico de FinNova (E1) enfocado en optimización asistida sin reemplazar la plataforma clásica, y el contexto y restricciones (E2) en los artefactos <a href="plantilla.html?id=DOE" style="color:var(--green);font-weight:700;">DOE</a> y <a href="plantilla.html?id=DCA" style="color:var(--green);font-weight:700;">DCA</a>. Aprobación en <strong>Compuerta OGA-1</strong>.</li>
            <li><strong>Fase 2 (Formalización conceptual - E3, E4):</strong> Establece el marco conceptual común separando las perspectivas de negocio, arquitectura y tecnología (<a href="plantilla.html?id=DNA" style="color:var(--green);font-weight:700;">DNA</a> / <a href="plantilla.html?id=DPV" style="color:var(--green);font-weight:700;">DPV</a>) y consolida el vocabulario unificado financiero-cuántico (<a href="plantilla.html?id=GDA" style="color:var(--green);font-weight:700;">GDA</a>). Aprobación en <strong>Compuerta OGA-2</strong>.</li>
            <li><strong>Fase 3 (Configuración estructural - E5, E6):</strong> Modela los atributos de calidad (<a href="plantilla.html?id=MAC" style="color:var(--green);font-weight:700;">MAC</a>) y las estructuras de integración desacoplada y seguridad independiente del proveedor (<a href="plantilla.html?id=MEA" style="color:var(--green);font-weight:700;">MEA</a>). Aprobación en <strong>Compuerta OGA-3</strong>.</li>
            <li><strong>Fase 4 (Materialización arquitectónica - E9, E10):</strong> Cataloga los componentes de software clásicos, de orquestación y de integración cuántica (<a href="plantilla.html?id=DEA" style="color:var(--green);font-weight:700;">DEA</a> / <a href="plantilla.html?id=DCO" style="color:var(--green);font-weight:700;">DCO</a>) e indexa los elementos reutilizables en la <a href="plantilla.html?id=BER" style="color:var(--green);font-weight:700;">BER</a>. Aprobación en <strong>Compuerta OGA-4</strong>.</li>
            <li><strong>Fase 5 (Sistematización del diseño - E7, E8):</strong> Formaliza el Catálogo de Estilos y Patrones (<a href="plantilla.html?id=CEP" style="color:var(--green);font-weight:700;">CEP</a>) con el patrón Mediador y Fallback Clásico, estableciendo la Línea Base Arquitectónica consolidada de FinNova tras la aprobación en la <strong>Compuerta OGA-5</strong>.</li>
          </ul>
        `;

        immediateAction = `Convocar al comité OGA simplificado de FinNova (AEP, AIP, GPA y Dirección Financiera) y formalizar la Línea Base de la Fase 1 completando las plantillas de <a href="plantilla.html?id=DOE" style="color:var(--green);font-weight:700;">DOE (Objetivos Estratégicos)</a> y <a href="plantilla.html?id=DCA" style="color:var(--green);font-weight:700;">DCA (Contexto y Restricciones)</a>, fijando la meta de mejora de latencia de rebalanceo y los criterios de independencia de proveedor cuántico.`;
      }

      diagramSvg = `""" + open("scratch/finnova_diagram.svg").read().strip() + """`;
    }\n\n    """

text = text[:branch_start] + finnova_multilingual + text[branch_end:]

with open("app.js", "w", encoding="utf-8") as f:
    f.write(text)

print("Updated app.js with multilingual FinNova generator successfully. File length:", len(text))
