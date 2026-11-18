const D=window.THESIS_DATA,$=s=>document.querySelector(s),$$=s=>Array.from(document.querySelectorAll(s)),esc=(v="")=>String(v).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const field=(o,n)=>n.map(k=>o[k]).find(Boolean)||"",phaseNames=["Definición estratégica","Formalización conceptual","Configuración estructural","Materialización arquitectónica","Sistematización del diseño"],elementNames={E1:"Objetivo de la arquitectura",E2:"Contexto de la arquitectura",E3:"Grado de abstracción",E4:"Glosario de términos y definiciones",E5:"Estructuras arquitectónicas",E6:"Atributos de calidad",E7:"Estilos y patrones arquitectónicos",E8:"Patrones de diseño",E9:"Componentes estructurales",E10:"Elementos reutilizables"};
const codes=["LBA","DOE","MTA","DCA","MSP","DPV","DNA","ITA","DVA","MAC","DEA","DCO","BER","CEP","CPD"],figs=[26,29,32,35,38],elementFigs={E1:27,E2:28,E3:30,E4:31,E6:33,E5:34,E9:36,E10:37,E7:39,E8:40};

const artifactInfo = {
  LBA: { queEs: "Línea Base Arquitectónica integral.", paraQueSirve: "Consolida formalmente el estado aprobado de los elementos arquitectónicos tras la verificación del Órgano de Gobierno Arquitectónico (OGA), asegurando trazabilidad y evolución controlada." },
  DOE: { queEs: "Documento de Objetivos Estratégicos.", paraQueSirve: "Formaliza los objetivos de negocio y directrices corporativas que justifican la adopción cuántica, guiando todas las decisiones técnicas posteriores." },
  MTA: { queEs: "Matriz de Trazabilidad Objetivos-Arquitectura.", paraQueSirve: "Garantiza la correspondencia biunívoca entre las metas estratégicas de la empresa y los componentes o decisiones arquitectónicas implementadas." },
  DCA: { queEs: "Documento de Contexto Arquitectónico.", paraQueSirve: "Caracteriza el entorno organizacional, operativo y normativo, evaluando la arquitectura actual (AS-IS) y delimitando el potencial híbrido institucional." },
  MSP: { queEs: "Mapa de Stakeholders y Preocupaciones.", paraQueSirve: "Identifica a todas las partes interesadas, clasifica su influencia e interés, y mapea sus expectativas técnicas y de negocio para orientar el diseño." },
  DPV: { queEs: "Documento de Perspectivas y Vistas Arquitectónicas.", paraQueSirve: "Define los puntos de vista y representaciones multidimensionales requeridos para comunicar y validar la arquitectura ante audiencias diversas." },
  DNA: { queEs: "Documento de Niveles Arquitectónicos.", paraQueSirve: "Establece la jerarquía de abstracción y granularidad del sistema, conectando la visión de negocio con las capas lógicas y técnicas." },
  ITA: { queEs: "Inventario de Términos Arquitectónicos.", paraQueSirve: "Recopila y clasifica el léxico clave de computación cuántica y arquitectura clásica para homologar el entendimiento entre equipos interdisciplinarios." },
  DVA: { queEs: "Diccionario de Vocabulario Arquitectónico.", paraQueSirve: "Provee definiciones semánticas formales y consensuadas para resolver ambigüedades operativas y técnicas en la organización." },
  MAC: { queEs: "Modelo de Atributos de Calidad.", paraQueSirve: "Especifica escenarios verificables para atributos críticos (rendimiento, seguridad, interoperabilidad, latencia) y pondera los compromisos de diseño (trade-offs)." },
  DEA: { queEs: "Documento de Estructuras Arquitectónicas.", paraQueSirve: "Describe la organización de módulos, esquemas de descomposición y mecanismos de orquestación e interacción entre el software clásico y los recursos cuánticos." },
  DCO: { queEs: "Documento de Componentes Estructurales.", paraQueSirve: "Detalla la especificación técnica de contratos, interfaces, dependencias y datos gestionados por cada componente de la solución híbrida." },
  BER: { queEs: "Biblioteca de Elementos Reutilizables.", paraQueSirve: "Cataloga patrones, módulos conectores, adaptadores y algoritmos verificados para optimizar costos y acelerar futuras implementaciones." },
  CEP: { queEs: "Catálogo de Estilos y Patrones Arquitectónicos.", paraQueSirve: "Documenta los estilos estructurales adoptados (microservicios, pipeline híbrido, acelerador cuántico) y justifica su pertinencia frente a los atributos de calidad." },
  CPD: { queEs: "Catálogo de Patrones de Diseño.", paraQueSirve: "Estandariza soluciones recurrentes para problemas específicos de interacción híbrida (gestión de circuitos, mitigación de errores, procesamiento por lotes)." }
};

function clean(v=""){let s=String(v).replace(/\s+/g," ").trim();codes.concat(["OGA","AEP","ASP","AIP","ADP","ASecP","GPA","ETC"]).forEach(c=>s=s.replace(new RegExp(`\\b${c.split("").join("\\s+")}\\b`,"gi"),c));const f={"ó rgano":"órgano","g obierno":"gobierno","a rquitectónico":"arquitectónico","o bjetivos":"objetivos","organizació n":"organización","relació n":"relación","evaluació n":"evaluación","alineació n":"alineación","definició n":"definición","documentad a":"documentada","cuántic o":"cuántico","T odos":"Todos","E l":"El","A rtefacto":"Artefacto","d efinición":"definición","h íbridas":"híbridas","necesidades de l a organización":"necesidades de la organización","nivel es":"niveles","objetivo ambiguos":"objetivos ambiguos"};Object.entries(f).forEach(([a,b])=>s=s.replaceAll(a,b));return s.replace(/IC-F(\d+)-0\s+(\d+)/g,"IC-F$1-0$2").replace(/\s+([,.;:])/g,"$1").replace(/:\s*/g,": ").trim()}
function ecode(e){return (clean(field(e,["Código"])).replace(/\s/g,"").match(/E\d+/)||e.caption.match(/E\d+/)||[])[0]}
function acode(a){return clean(a.code||field(a,["Código"])||"Actividad")}
function split(v="",mode="general"){const s=clean(v);if(!s)return[];if(mode==="ind"){const parts=s.includes("IC-F")?s.split(/(?=IC-F\d+-\d+)/):s.split(/\.\s+(?=[A-ZÁÉÍÓÚÑ])/);return parts.map(clean).filter(Boolean)}const p=`(?:LBA-F\\d+|${codes.filter(x=>x!=="LBA").join("|")}|E\\d+)`;const a=s.split(new RegExp(`(?=${p}\\s*:)`)).map(clean).filter(Boolean);if(a.length>1)return a;return s.split(/\.\s+(?=[A-ZÁÉÍÓÚÑ])/).map(x=>clean(x).replace(/\.$/,"")).filter(Boolean)}
function artifactCode(t){const m=clean(t).match(/\b(?:LBA(?:-F\d+)?|DOE|MTA|DCA|MSP|DPV|DNA|ITA|DVA|MAC|DEA|DCO|BER|CEP|CPD)\b/);return m?m[0].split("-")[0]:null}
function item(t,links=false){const s=clean(t),c=artifactCode(s);if(!links||!c)return esc(s);const i=s.indexOf(":");if(i<0)return `<a href="plantilla.html?id=${c}">${esc(s)}</a>`;return `<strong><a href="plantilla.html?id=${c}">${esc(s.slice(0,i))}</a>:</strong> ${esc(s.slice(i+1).trim())}`}
function list(v,mode="general",links=false){return `<ul class="structured-list">${split(v,mode).map(x=>`<li>${mode==="ind"?indicator(x):item(x,links)}</li>`).join("")}</ul>`}
function indicator(x){const i=x.indexOf(":");return i>0?`<strong>${esc(x.slice(0,i))}:</strong> ${esc(x.slice(i+1).trim())}`:`<strong>${esc(x)}</strong>`}

function activity(a){
  const code=acode(a),name=clean(field(a,["Nombre"])||a.caption.replace(/^Tabla \d+\.\s*/,""));
  const block=(label,key,wide=false,links=false)=>{const value=field(a,[key]);return value?`<div class="activity-detail ${wide?"wide":""}"><h5>${label}</h5>${list(value,"general",links)}</div>`:""};
  const normCode = code.replace(/\s+/g,"");
  return `<details class="activity" id="act-${normCode}" data-activity-code="${normCode}"><summary><code>${esc(code)}</code><strong>${esc(name)}</strong></summary><div class="activity-content"><h5>Objetivo</h5><p>${esc(clean(field(a,["Objetivo"])))}</p><div class="activity-details"><div class="activity-detail wide"><h5>Descripción</h5><p>${esc(clean(field(a,["Descripción"])))}</p></div>${block("Entradas","Entradas")}${block("Salidas y artefactos","Salidas",false,true)}${block("Responsables","Responsable")}${block("Herramientas","Herramientas")}${block("Punto de validación","Punto de validación",true)}${block("Tareas","Tareas",true)}</div></div></details>`;
}

function element(e,phase){
  const c=ecode(e),acts=D.activities.filter(a=>acode(a).replace(/\s/g,"").startsWith(`${phase}.${c}`));
  const bpmnFile = `pdaeh_${phase.toLowerCase()}_${c.toLowerCase()}_bpmn.bpmn`;
  const containerId = `bpmn-canvas-${c.toLowerCase()}`;
  const resetBtnId = `btn-reset-${c.toLowerCase()}`;

  return `<section class="element-section">
    <header>
      <h2>${c} - ${elementNames[c]}</h2>
      <p>${esc(clean(field(e,["Propósito","Propósito del elemento"])))}</p>
    </header>
    <dl class="element-data">
      <div><dt>Productos generados</dt><dd>${list(field(e,["Productos generados"]),"general",true)}</dd></div>
      <div><dt>Criterios de aceptación</dt><dd>${list(field(e,["Criterios de aceptación"]))}</dd></div>
      <div><dt>Dependencias estructurales</dt><dd>${list(field(e,["Dependencias estructurales"]))}</dd></div>
    </dl>
    
    <!-- Contenedor BPMN interactivo de Camunda -->
    <div class="interactive-diagram-container" style="background:#ffffff;border:1px solid var(--line);border-radius:8px;padding:1.4rem;margin:1.8rem 0;box-shadow:0 2px 8px rgba(0,0,0,0.03);">
      <div style="margin-bottom:1rem;border-bottom:1px solid #eef2f0;padding-bottom:0.8rem;">
        <h4 style="margin:0 0 0.35rem;font-size:1.2rem;color:var(--navy);font-family:Newsreader,serif;font-weight:600;">Flujo interactivo de actividades y artefactos de ${c}</h4>
        <p style="margin:0;font-size:0.92rem;color:var(--ink-light);line-height:1.65;text-align:justify;">
          A continuación se presenta el modelo BPMN formal del elemento. Haz click sobre cualquier <strong>actividad</strong> (resaltada en verde) o sobre los <strong>artefactos y plantillas</strong> (resaltados en morado) para inspeccionar directamente su ficha técnica o consultar su plantilla oficial.
        </p>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.6rem;margin-bottom:0.6rem;font-size:0.82rem;color:var(--muted);">
        <span>💡 <em>Arrastra para explorar el diagrama, usa la rueda o trackpad para zoom, o haz click en cualquier nodo para abrir su detalle.</em></span>
        <button id="${resetBtnId}" type="button" style="display:inline-flex;align-items:center;gap:0.35rem;padding:5px 12px;font-size:0.8rem;font-weight:600;color:var(--ink);background:#ffffff;border:1px solid #c2dbd4;border-radius:20px;cursor:pointer;box-shadow:0 1px 3px rgba(0,0,0,0.04);transition:all 0.15s ease;">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
            <path d="M3 3v5h5"/>
          </svg>
          <span>Restablecer zoom</span>
        </button>
      </div>
      <div id="${containerId}" class="bpmn-phase-canvas" data-bpmn-src="assets/diagramas/${bpmnFile}" data-reset-btn="${resetBtnId}" style="width:100%;height:380px;background:#fbfcfb;border:1px solid var(--line);border-radius:6px;overflow:hidden;position:relative;"></div>
    </div>

    <h3>Actividades asociadas con ${c}</h3>
    ${acts.map(activity).join("")}
  </section>`;
}

const n=Math.min(5,Math.max(1,Number(new URLSearchParams(location.search).get("id"))||1)),p=D.phases[n-1],phase=`F${n}`,els=D.elements.filter(e=>clean(field(e,["Fase asociada","F ase asociada"])).replace(/\s/g,"").includes(phase));
document.title=`${phase} - ${phaseNames[n-1]} | PDAEH`;

const phaseBpmnFile = `pdaeh_${phase.toLowerCase()}_bpmn.bpmn`;
const phaseResetBtnId = `btn-reset-${phase.toLowerCase()}`;
const phaseCanvasId = `bpmn-canvas-${phase.toLowerCase()}`;

$("#phasePage").innerHTML=`<nav class="breadcrumb-bar" aria-label="Miga de pan" style="position:static;padding:0.75rem 0;margin-bottom:1.5rem;background:transparent;border-bottom:1px solid var(--line);"><div class="breadcrumb-nav"><a href="index.html">🏠 Inicio</a><span class="breadcrumb-separator">/</span><a href="index.html#proceso">Proceso PDAEH</a><span class="breadcrumb-separator">/</span><a href="index.html#fases">Fases</a><span class="breadcrumb-separator">/</span><span class="breadcrumb-current">Fase ${n}: ${phaseNames[n-1]}</span></div></nav>
<header class="detail-hero"><p>Fase ${n} de 5</p><h1>${phase} - ${phaseNames[n-1]}</h1><p>${esc(clean(field(p,["Propósito"])))}</p></header>
<nav class="phase-nav">${phaseNames.map((x,i)=>`<a class="${i+1===n?"active":""}" href="fase.html?id=${i+1}">F${i+1}</a>`).join("")}</nav>
<section class="phase-overview">
  <dl class="phase-data">
    <div><dt>Elementos incluidos</dt><dd>${list(field(p,["Elementos incluidos"]))}</dd></div>
    <div><dt>Entradas</dt><dd>${list(field(p,["Entradas"]),"general",true)}</dd></div>
    <div><dt>Salidas y artefactos</dt><dd>${list(field(p,["Salidas"]),"general",true)}</dd></div>
    <div><dt>Punto de control</dt><dd>${list(field(p,["Punto de control"]))}</dd></div>
    <div class="wide"><dt>Indicadores de cumplimiento</dt><dd>${list(field(p,["Indicadores de cumplimiento"]),"ind")}</dd></div>
  </dl>
  
  <!-- Contenedor BPMN interactivo general de la Fase -->
  <div class="interactive-diagram-container" style="background:#ffffff;border:1px solid var(--line);border-radius:8px;padding:1.4rem;margin:1.8rem 0;box-shadow:0 2px 8px rgba(0,0,0,0.03);">
    <div style="margin-bottom:1rem;border-bottom:1px solid #eef2f0;padding-bottom:0.8rem;">
      <h4 style="margin:0 0 0.35rem;font-size:1.25rem;color:var(--navy);font-family:Newsreader,serif;font-weight:600;">Flujo macro interactivo de actividades y artefactos de ${phase}</h4>
      <p style="margin:0;font-size:0.92rem;color:var(--ink-light);line-height:1.65;text-align:justify;">
        A continuación se presenta el flujo macro BPMN de la fase y su interacción con las compuertas del Órgano de Gobierno Arquitectónico (OGA). Puedes hacer click sobre cualquier <strong>actividad o subproceso</strong> (resaltado en verde) o sobre los <strong>artefactos y líneas base</strong> (resaltados en morado) para inspeccionar directamente su ficha técnica o consultar su plantilla.
      </p>
    </div>
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.6rem;margin-bottom:0.6rem;font-size:0.82rem;color:var(--muted);">
      <span>💡 <em>Arrastra para explorar el diagrama, usa la rueda o trackpad para zoom, o haz click en cualquier nodo para abrir su detalle.</em></span>
      <button id="${phaseResetBtnId}" type="button" style="display:inline-flex;align-items:center;gap:0.35rem;padding:5px 12px;font-size:0.8rem;font-weight:600;color:var(--ink);background:#ffffff;border:1px solid #c2dbd4;border-radius:20px;cursor:pointer;box-shadow:0 1px 3px rgba(0,0,0,0.04);transition:all 0.15s ease;">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
          <path d="M3 3v5h5"/>
        </svg>
        <span>Restablecer zoom</span>
      </button>
    </div>
    <div id="${phaseCanvasId}" class="bpmn-phase-canvas" data-bpmn-src="assets/diagramas/${phaseBpmnFile}" data-reset-btn="${phaseResetBtnId}" style="width:100%;height:400px;background:#fbfcfb;border:1px solid var(--line);border-radius:6px;overflow:hidden;position:relative;"></div>
  </div>
</section>
${els.map(e=>element(e,phase)).join("")}
<section class="phase-pagination" id="cierre">${n>1?`<a href="fase.html?id=${n-1}">← Fase anterior</a>`:"<span></span>"}${n<5?`<a href="fase.html?id=${n+1}">Siguiente fase →</a>`:`<a href="index.html#artefactos">Consultar artefactos →</a>`}</section>`;

// -------------------------------------------------------------
// Inicializador interactivo para todos los visores BPMN de la Fase
// -------------------------------------------------------------
function setupPhaseBpmnViewers() {
  const modal = document.getElementById("activityDetailModal");
  const modalCode = document.getElementById("modalActivityCode");
  const modalTitle = document.getElementById("modalActivityTitle");
  const modalBody = document.getElementById("modalActivityBody");
  const btnClose = document.getElementById("btnCloseActivityModal");
  const btnScrollToList = document.getElementById("btnModalScrollToList");

  if (!modal) return;
  if (btnClose) btnClose.onclick = () => modal.close();
  modal.onclick = (e) => { if (e.target === modal) modal.close(); };

  let currentActivityTargetId = null;

  function findActivityData(nameOrCode) {
    if (!nameOrCode) return null;
    const cleanStr = String(nameOrCode).replace(/\s+/g, " ").trim();
    // 1. Match directo por código en activities
    for (const a of D.activities) {
      const code = acode(a).replace(/\s+/g, "");
      const cleanCode = cleanStr.replace(/\s+/g, "");
      if (cleanCode.includes(code) || code.includes(cleanCode)) {
        return a;
      }
    }
    // 2. Match por nombre
    for (const a of D.activities) {
      const aName = clean(field(a, ["Nombre"]) || a.caption).toLowerCase();
      if (aName.length > 5 && (cleanStr.toLowerCase().includes(aName) || aName.includes(cleanStr.toLowerCase()))) {
        return a;
      }
    }
    // 3. Revisar si es actividad del OGA (governance)
    if (D.governance && D.governance.rows) {
      for (const r of D.governance.rows.slice(1)) {
        const gCode = clean(r[0] || "");
        const gName = clean(r[1] || "");
        if (cleanStr.includes(gCode) || cleanStr.toLowerCase().includes(gName.toLowerCase())) {
          return {
            isOga: true,
            code: gCode,
            name: gName,
            desc: clean(r[2] || ""),
            responsable: "OGA: Órgano de Gobierno Arquitectónico",
            herramientas: "Matriz de trazabilidad cruzada y repositorio documental.",
            validacion: "Aprobación colegiada del Órgano de Gobierno Arquitectónico."
          };
        }
      }
    }
    return null;
  }

  function showActivityModalFromData(act, rawName) {
    if (!act) {
      // Fallback si no tiene entrada directa en la tabla de actividades
      modalCode.textContent = "Actividad";
      modalCode.style.background = "rgba(255,255,255,0.18)";
      modalCode.style.color = "#ffffff";
      modalTitle.textContent = rawName;
      modalBody.innerHTML = `<div style="background:#f4f9f7;border-left:4px solid var(--green);padding:1rem 1.2rem;border-radius:4px;"><p style="margin:0;font-size:0.95rem;color:var(--ink);">${esc(rawName)}</p></div>`;
      if (btnScrollToList) btnScrollToList.style.display = "none";
      modal.showModal();
      return;
    }

    if (act.isOga) {
      modalCode.textContent = act.code;
      modalCode.style.background = "rgba(255,255,255,0.18)";
      modalCode.style.color = "#ffffff";
      modalTitle.textContent = act.name;
      modalBody.innerHTML = `
        <div style="background:#f4f9f7;border-left:4px solid var(--green);padding:0.9rem 1.2rem;border-radius:4px;margin-bottom:1.4rem;">
          <strong style="color:var(--green);font-size:0.85rem;text-transform:uppercase;letter-spacing:0.04em;display:block;margin-bottom:0.25rem;">Propósito y alcance</strong>
          <p style="margin:0;font-size:1.02rem;color:var(--ink);line-height:1.6;text-align:justify;">${esc(act.desc)}</p>
        </div>
        <div style="background:#fff;border:1px solid var(--line);border-radius:6px;padding:0.9rem 1.1rem;margin-bottom:1rem;">
          <h5 style="margin:0 0 0.4rem;font-size:0.85rem;color:var(--navy);text-transform:uppercase;letter-spacing:0.04em;">Responsable</h5>
          <p style="margin:0;font-size:0.9rem;color:var(--ink);">${esc(act.responsable)}</p>
        </div>
      `;
      if (btnScrollToList) btnScrollToList.style.display = "none";
      modal.showModal();
      return;
    }

    const code = acode(act);
    const name = clean(field(act, ["Nombre"]) || act.caption.replace(/^Tabla \d+\.\s*/, ""));
    const desc = clean(field(act, ["Descripción"]));
    const obj = clean(field(act, ["Objetivo"]));
    const entradas = field(act, ["Entradas"]);
    const salidas = field(act, ["Salidas"]);
    const resp = clean(field(act, ["Responsable"]));
    const tools = clean(field(act, ["Herramientas"]));
    const valid = clean(field(act, ["Punto de validación"]));
    const tareas = field(act, ["Tareas"]);

    currentActivityTargetId = `act-${code.replace(/\s+/g, "")}`;

    modalCode.textContent = code;
    modalCode.style.background = "rgba(255,255,255,0.18)";
    modalCode.style.color = "#ffffff";
    modalTitle.textContent = name;

    modalBody.innerHTML = `
      <div style="background:#f4f9f7;border-left:4px solid var(--green);padding:0.9rem 1.2rem;border-radius:4px;margin-bottom:1.4rem;">
        <strong style="color:var(--green);font-size:0.85rem;text-transform:uppercase;letter-spacing:0.04em;display:block;margin-bottom:0.25rem;">Objetivo de la actividad</strong>
        <p style="margin:0;font-size:1.02rem;color:var(--ink);line-height:1.6;text-align:justify;">${esc(obj)}</p>
      </div>

      ${desc ? `
      <div style="background:#fff;border:1px solid var(--line);border-radius:6px;padding:0.9rem 1.1rem;margin-bottom:1.2rem;">
        <h5 style="margin:0 0 0.4rem;font-size:0.85rem;color:var(--navy);text-transform:uppercase;letter-spacing:0.04em;">Descripción operativa</h5>
        <p style="margin:0;font-size:0.92rem;color:var(--ink);line-height:1.6;text-align:justify;">${esc(desc)}</p>
      </div>
      ` : ''}

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem;margin-bottom:1.2rem;">
        <div style="background:#fff;border:1px solid var(--line);border-radius:6px;padding:0.9rem 1.1rem;">
          <h5 style="margin:0 0 0.5rem;font-size:0.85rem;color:var(--navy);text-transform:uppercase;letter-spacing:0.04em;">Entradas de la actividad</h5>
          ${entradas ? list(entradas, "general", true) : '<p style="margin:0;font-size:0.88rem;color:var(--muted);">No especificadas.</p>'}
        </div>
        <div style="background:#fff;border:1px solid var(--line);border-radius:6px;padding:0.9rem 1.1rem;">
          <h5 style="margin:0 0 0.5rem;font-size:0.85rem;color:var(--navy);text-transform:uppercase;letter-spacing:0.04em;">Salidas y artefactos</h5>
          ${salidas ? list(salidas, "general", true) : '<p style="margin:0;font-size:0.88rem;color:var(--muted);">No especificadas.</p>'}
        </div>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem;margin-bottom:1.2rem;">
        <div style="background:#fff;border:1px solid var(--line);border-radius:6px;padding:0.9rem 1.1rem;">
          <h5 style="margin:0 0 0.4rem;font-size:0.85rem;color:var(--navy);text-transform:uppercase;letter-spacing:0.04em;">Responsable</h5>
          <p style="margin:0;font-size:0.9rem;color:var(--ink);">${esc(resp || "AEP")}</p>
        </div>
        <div style="background:#fff;border:1px solid var(--line);border-radius:6px;padding:0.9rem 1.1rem;">
          <h5 style="margin:0 0 0.4rem;font-size:0.85rem;color:var(--navy);text-transform:uppercase;letter-spacing:0.04em;">Herramientas y mecanismos</h5>
          <p style="margin:0;font-size:0.9rem;color:var(--ink);">${esc(tools || "Repositorio de arquitectura")}</p>
        </div>
      </div>

      ${valid ? `
      <div style="background:#fff;border:1px solid var(--line);border-left:4px solid #7c3aed;border-radius:6px;padding:0.9rem 1.1rem;margin-bottom:1.2rem;">
        <h5 style="margin:0 0 0.4rem;font-size:0.85rem;color:#7c3aed;text-transform:uppercase;letter-spacing:0.04em;">Punto de validación</h5>
        <p style="margin:0;font-size:0.9rem;color:var(--ink);">${esc(valid)}</p>
      </div>
      ` : ''}

      ${tareas ? `
      <div style="background:#fff;border:1px solid var(--line);border-radius:6px;padding:0.9rem 1.1rem;">
        <h5 style="margin:0 0 0.5rem;font-size:0.85rem;color:var(--navy);text-transform:uppercase;letter-spacing:0.04em;">Tareas detalladas</h5>
        ${list(tareas, "general", false)}
      </div>
      ` : ''}
    `;

    if (btnScrollToList) {
      btnScrollToList.style.display = "inline-block";
      btnScrollToList.textContent = "Ver en la lista desplegable ↓";
      btnScrollToList.onclick = () => {
        modal.close();
        if (currentActivityTargetId) {
          const target = document.getElementById(currentActivityTargetId);
          if (target) {
            target.open = true;
            target.scrollIntoView({ behavior: "smooth", block: "center" });
            target.style.outline = "2px solid var(--green)";
            setTimeout(() => { target.style.outline = "none"; }, 2500);
          }
        }
      };
    }

    modal.showModal();
  }

  function showArtifactModalFromData(artCode, rawName) {
    currentActivityTargetId = null;
    const isTemplate = codes.includes(artCode);
    const info = artifactInfo[artCode] || { queEs: rawName, paraQueSirve: "Artefacto o producto de trabajo generado en el proceso PDAEH." };

    modalCode.textContent = artCode;
    modalCode.style.background = "#7c3aed";
    modalCode.style.color = "#ffffff";
    modalTitle.textContent = isTemplate ? `${artCode}: ${info.queEs}` : rawName;

    const templateBtn = isTemplate ? `<a href="plantilla.html?id=${artCode}" target="_blank" style="display:inline-flex;align-items:center;gap:0.4rem;padding:7px 16px;background:var(--green);color:#ffffff;text-decoration:none;font-weight:700;font-size:0.88rem;border-radius:4px;box-shadow:0 2px 6px rgba(24,121,110,0.25);"><span>Consultar plantilla oficial (${artCode})</span> <span aria-hidden="true">↗</span></a>` : '';

    modalBody.innerHTML = `
      <div style="background:#f5f3ff;border-left:4px solid #7c3aed;padding:1rem 1.3rem;border-radius:4px;margin-bottom:1.4rem;">
        <strong style="color:#7c3aed;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.04em;display:block;margin-bottom:0.35rem;">Descripción del artefacto / producto de trabajo</strong>
        <p style="margin:0;font-size:1.02rem;color:var(--ink);line-height:1.65;text-align:justify;">${esc(info.paraQueSirve)}</p>
      </div>

      <div style="display:grid;grid-template-columns:1fr;gap:1rem;margin-bottom:1.4rem;">
        <div style="background:#fff;border:1px solid var(--line);border-radius:6px;padding:1rem 1.2rem;">
          <h5 style="margin:0 0 0.4rem;font-size:0.85rem;color:var(--navy);text-transform:uppercase;letter-spacing:0.04em;">¿Qué es este artefacto?</h5>
          <p style="margin:0 0 0.8rem;font-size:0.92rem;color:var(--ink);line-height:1.6;text-align:justify;">${esc(info.queEs)}</p>
          <h5 style="margin:0 0 0.4rem;font-size:0.85rem;color:var(--navy);text-transform:uppercase;letter-spacing:0.04em;">Función en el proceso PDAEH</h5>
          <p style="margin:0;font-size:0.92rem;color:var(--ink);line-height:1.6;text-align:justify;">${esc(info.paraQueSirve)}</p>
        </div>
      </div>

      ${templateBtn ? `
      <div style="background:#f8faf9;border:1px solid #d8dfdc;border-radius:6px;padding:1rem 1.2rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.8rem;">
        <div>
          <strong style="font-size:0.92rem;color:var(--navy);display:block;">Plantilla normalizada de la tesis doctoral</strong>
          <span style="font-size:0.84rem;color:var(--muted);">Accede a la estructura formal de campos, ejemplos ilustrativos y descargas en Word / LaTeX / Markdown.</span>
        </div>
        ${templateBtn}
      </div>
      ` : `
      <div style="background:#f8faf9;border:1px solid var(--line);border-radius:6px;padding:0.9rem 1.1rem;font-size:0.88rem;color:var(--muted);">
        <strong>Nota metodológica:</strong> Este documento corresponde a un producto intermedio o registro emitido en la fase para garantizar trazabilidad.
      </div>
      `}
    `;

    if (btnScrollToList) {
      btnScrollToList.style.display = isTemplate ? "inline-block" : "none";
      btnScrollToList.textContent = "Ver todas las plantillas (Inicio) →";
      btnScrollToList.onclick = () => {
        window.location.href = "index.html#artefactos";
      };
    }

    modal.showModal();
  }

  // Inicializar cada lienzo BPMN en la página de la fase
  const canvasElements = $$(".bpmn-phase-canvas");
  canvasElements.forEach(canvas => {
    const src = canvas.dataset.bpmnSrc;
    const resetBtn = document.getElementById(canvas.dataset.resetBtn);
    if (!src || typeof BpmnJS === "undefined") return;

    const viewer = new BpmnJS({ container: canvas });

    fetch(src).then(r => r.text()).then(xml => {
      return viewer.importXML(xml);
    }).then(() => {
      const view = viewer.get("canvas");
      view.zoom("fit-viewport");

      const eventBus = viewer.get("eventBus");
      const elementRegistry = viewer.get("elementRegistry");

      // Bounding box y límites estrictos de arrastre/zoom
      const defaultViewbox = JSON.parse(JSON.stringify(view.viewbox()));
      const minZoom = defaultViewbox.scale; // No permitir alejar más que la vista por defecto
      const maxZoom = defaultViewbox.scale * 3.0; // Zoom máximo

      if (resetBtn) {
        resetBtn.onclick = () => {
          view.zoom("fit-viewport");
        };
      }

      let isAdjusting = false;
      eventBus.on("canvas.viewbox.changed", (e) => {
        if (isAdjusting) return;
        const vb = e.viewbox;
        if (!vb || !defaultViewbox.inner || !defaultViewbox.outer) return;

        let needsAdjustment = false;
        let newScale = vb.scale;

        // Limitar escala de zoom
        if (newScale < minZoom) {
          newScale = minZoom;
          needsAdjustment = true;
        } else if (newScale > maxZoom) {
          newScale = maxZoom;
          needsAdjustment = true;
        }

        const width = defaultViewbox.outer.width / newScale;
        const height = defaultViewbox.outer.height / newScale;
        const inner = defaultViewbox.inner;

        let newX = vb.x;
        let newY = vb.y;

        // Eje Horizontal: si cabe en el viewport (ej. tamaño por defecto), fijar en el centro y no permitir mover
        if (inner.width <= width) {
          const targetX = inner.x - (width - inner.width) / 2;
          if (Math.abs(newX - targetX) > 0.5) {
            newX = targetX;
            needsAdjustment = true;
          }
        } else {
          // Con zoom ampliado: solo permitir desplazarse dentro del límite del diagrama
          const minX = inner.x;
          const maxX = inner.x + inner.width - width;
          if (newX < minX) { newX = minX; needsAdjustment = true; }
          else if (newX > maxX) { newX = maxX; needsAdjustment = true; }
        }

        // Eje Vertical: si cabe en el viewport, fijar en el centro
        if (inner.height <= height) {
          const targetY = inner.y - (height - inner.height) / 2;
          if (Math.abs(newY - targetY) > 0.5) {
            newY = targetY;
            needsAdjustment = true;
          }
        } else {
          // Con zoom ampliado: solo permitir desplazarse dentro del límite del diagrama
          const minY = inner.y;
          const maxY = inner.y + inner.height - height;
          if (newY < minY) { newY = minY; needsAdjustment = true; }
          else if (newY > maxY) { newY = maxY; needsAdjustment = true; }
        }

        if (needsAdjustment) {
          isAdjusting = true;
          view.viewbox({ x: newX, y: newY, width: width, height: height });
          isAdjusting = false;
        }
      });

      // Estilizar cursores y hover para todos los nodos interactivos
      elementRegistry.forEach(el => {
        const type = el.type || "";
        const isTask = type.includes("Task") || type.includes("Activity") || type.includes("SubProcess");
        const isDataObject = type.includes("DataObject") || type.includes("DataStore");

        if (isTask || isDataObject) {
          const gfx = view.getGraphics(el);
          if (gfx) {
            gfx.style.cursor = "pointer";
            const markerClass = isTask ? "highlight-activity" : "highlight-artifact";
            gfx.addEventListener("mouseenter", () => { view.addMarker(el.id, markerClass); });
            gfx.addEventListener("mouseleave", () => { view.removeMarker(el.id, markerClass); });
          }
        }
        if (type.includes("Label") && el.labelTarget) {
          const targetType = el.labelTarget.type || "";
          if (targetType.includes("DataObject") || targetType.includes("Task") || targetType.includes("Activity")) {
            const labelGfx = view.getGraphics(el);
            if (labelGfx) {
              labelGfx.style.cursor = "pointer";
              const markerClass = targetType.includes("Task") || targetType.includes("Activity") ? "highlight-activity" : "highlight-artifact";
              labelGfx.addEventListener("mouseenter", () => { view.addMarker(el.labelTarget.id, markerClass); });
              labelGfx.addEventListener("mouseleave", () => { view.removeMarker(el.labelTarget.id, markerClass); });
            }
          }
        }
      });

      // Evento Click unificado
      eventBus.on("element.click", (event) => {
        let el = event.element;
        if (!el) return;
        if (el.labelTarget) el = el.labelTarget;

        const type = el.type || "";
        const bObj = el.businessObject || {};
        const rawName = bObj.name || "";

        if (type.includes("Task") || type.includes("Activity") || type.includes("SubProcess") || type.includes("CallActivity")) {
          const act = findActivityData(rawName);
          showActivityModalFromData(act, rawName);
        } else if (type.includes("DataObject") || type.includes("DataStore")) {
          const artCode = artifactCode(rawName) || (rawName.match(/\b([A-Z]{3,4})\b/)||[])[1] || "ARTEFACTO";
          showArtifactModalFromData(artCode, rawName);
        }
      });

    }).catch(err => {
      console.warn("No se pudo cargar el diagrama BPMN:", src, err);
    });
  });
}

setupPhaseBpmnViewers();
