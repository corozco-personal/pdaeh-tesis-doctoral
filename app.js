const data=window.THESIS_DATA,$=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=(v="")=>String(v).replace(/[&<>\"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const field=(o,names)=>names.map(n=>o[n]).find(Boolean)||"";
const phaseNames=["Definición estratégica","Formalización conceptual","Configuración estructural","Materialización arquitectónica","Sistematización del diseño"];
const elementNames={E1:"Objetivo de la arquitectura",E2:"Contexto de la arquitectura",E3:"Grado de abstracción",E4:"Glosario de términos y definiciones",E5:"Estructuras arquitectónicas",E6:"Atributos de calidad",E7:"Estilos y patrones arquitectónicos",E8:"Patrones de diseño",E9:"Componentes estructurales",E10:"Elementos reutilizables"};
const dimensionByElement={E1:"Dimensión conceptual",E2:"Dimensión conceptual",E3:"Dimensión conceptual",E4:"Dimensión conceptual",E5:"Dimensión organizativa",E9:"Dimensión organizativa",E10:"Dimensión organizativa",E6:"Dimensión de Calidad y Diseño",E7:"Dimensión de Calidad y Diseño",E8:"Dimensión de Calidad y Diseño"};
const artifactCodes=["LBA","DOE","MTA","DCA","MSP","DPV","DNA","ITA","DVA","MAC","DEA","DCO","BER","CEP","CPD"];
const artifactNames={LBA:"Línea Base Arquitectónica",DOE:"Documento de objetivos estratégicos",MTA:"Matriz de trazabilidad objetivos-arquitectura",DCA:"Documento de contexto arquitectónico",MSP:"Mapa de stakeholders y preocupaciones",DPV:"Documento de perspectivas y vistas arquitectónicas",DNA:"Documento de niveles arquitectónicos",ITA:"Inventario de términos arquitectónicos",DVA:"Diccionario de vocabulario arquitectónico",MAC:"Modelo de atributos de calidad",DEA:"Documento de estructuras arquitectónicas",DCO:"Documento de componentes estructurales",BER:"Biblioteca de elementos reutilizables",CEP:"Catálogo de estilos y patrones arquitectónicos",CPD:"Catálogo de patrones de diseño"};

function cleanText(value=""){
  let s=String(value).replace(/\s+/g," ").trim();
  artifactCodes.concat(["OGA","AEP","ASP","AIP","ADP","ASecP","GPA","ETC"]).forEach(code=>{s=s.replace(new RegExp(`\\b${code.split("").join("\\s+")}\\b`,"gi"),code)});
  const fixes={"ó rgano":"órgano","g obierno":"gobierno","a rquitectónico":"arquitectónico","o bjetivos":"objetivos","organizació n":"organización","relació n":"relación","evaluació n":"evaluación","alineació n":"alineación","definició n":"definición","documentad a":"documentada","cuántic o":"cuántico","T odos":"Todos","E l":"El","A rtefacto":"Artefacto","d efine":"define","d efinición":"definición","a rquitectura":"arquitectura","a rquitecturas":"arquitecturas","e mpresariales":"empresariales","h íbridas":"híbridas","necesidades de l a organización":"necesidades de la organización","nivel es":"niveles","objetivo ambiguos":"objetivos ambiguos"};
  Object.entries(fixes).forEach(([a,b])=>s=s.replaceAll(a,b));
  return s.replace(/IC-F(\d+)-0\s+(\d+)/g,"IC-F$1-0$2").replace(/\s+([,.;:])/g,"$1").replace(/:\s*/g,": ").replace(/\s{2,}/g," ").trim();
}
function elementCode(e){return (cleanText(field(e,["Código"])).replace(/\s/g,"").match(/E\d+/)||e.caption.match(/E\d+/)||[])[0]}
function splitItems(value="",mode="general"){
  const s=cleanText(value); if(!s)return[];
  if(mode==="indicators"){const parts=s.includes("IC-F")?s.split(/(?=IC-F\d+-\d+)/):s.split(/\.\s+(?=[A-ZÁÉÍÓÚÑ])/);return parts.map(cleanText).filter(Boolean)}
  const codePattern=`(?:LBA-F\\d+|${artifactCodes.filter(x=>x!=="LBA").join("|")}|E\\d+)`;
  const coded=s.split(new RegExp(`(?=${codePattern}\\s*:)`)).map(cleanText).filter(Boolean);
  if(coded.length>1)return coded;
  return s.split(/\.\s+(?=[A-ZÁÉÍÓÚÑ])/).map(x=>cleanText(x).replace(/\.$/,"")).filter(Boolean);
}
function artifactCodeFrom(text=""){const m=cleanText(text).match(/\b(?:LBA(?:-F\d+)?|DOE|MTA|DCA|MSP|DPV|DNA|ITA|DVA|MAC|DEA|DCO|BER|CEP|CPD)\b/);return m?m[0].split("-")[0]:null}
function artifactLink(code,label=code){return `<a class="artifact-link" href="plantilla.html?id=${code}">${esc(label)}</a>`}
function richArtifactItem(text){const s=cleanText(text),code=artifactCodeFrom(s);if(!code)return esc(s);const colon=s.indexOf(":");if(colon<0)return artifactLink(code,s);const title=s.slice(0,colon),desc=s.slice(colon+1).trim();return `<strong>${artifactLink(code,title)}:</strong> ${esc(desc)}`}
function list(value,mode="general",artifacts=false){return `<ul class="structured-list">${splitItems(value,mode).map(x=>`<li>${artifacts?richArtifactItem(x):esc(x)}</li>`).join("")}</ul>`}
function indicatorList(value){return `<ul class="structured-list indicators">${splitItems(value,"indicators").map(x=>{const i=x.indexOf(":");return `<li>${i>0?`<strong>${esc(x.slice(0,i))}:</strong> ${esc(x.slice(i+1).trim())}`:`<strong>${esc(x)}</strong>`}</li>`}).join("")}</ul>`}

function cleanNoAcronyms(str = "") {
  let s = cleanText(str);
  const map = [
    [/\(DOE\)/g, ""],
    [/\(MTA\)/g, ""],
    [/\(DCA\)/g, ""],
    [/\(MSP\)/g, ""],
    [/\(DPV\)/g, ""],
    [/\(DNA\)/g, ""],
    [/\(ITA\)/g, ""],
    [/\(DVA\)/g, ""],
    [/\(MAC\)/g, ""],
    [/\(DEA\)/g, ""],
    [/\(DCO\)/g, ""],
    [/\(BER\)/g, ""],
    [/\(CEP\)/g, ""],
    [/\(CPD\)/g, ""],
    [/\(LBA\)/g, ""],
    [/\bEl OGA\b/g, "El Órgano de Gobierno Arquitectónico"],
    [/\bel OGA\b/g, "el Órgano de Gobierno Arquitectónico"],
    [/\bdel OGA\b/g, "del Órgano de Gobierno Arquitectónico"],
    [/\bal OGA\b/g, "al Órgano de Gobierno Arquitectónico"],
    [/\bOGA\b/g, "Órgano de Gobierno Arquitectónico"],
    [/\bla fase F2\b/g, "la segunda fase del proceso"],
    [/\bla fase F3\b/g, "la tercera fase del proceso"],
    [/\bla fase F4\b/g, "la cuarta fase del proceso"],
    [/\bla fase F5\b/g, "la quinta fase del proceso"],
    [/\ben F2\b/g, "en la fase de formalización conceptual"],
    [/\ben F3\b/g, "en la fase de configuración estructural"],
    [/\ben F4\b/g, "en la fase de materialización arquitectónica"],
    [/\ben F5\b/g, "en la fase de sistematización del diseño"],
    [/\bde F3\b/g, "de la fase de configuración estructural"],
    [/\bde F4\b/g, "de la fase de materialización arquitectónica"],
    [/\bde F5\b/g, "de la fase de sistematización del diseño"],
    [/\bel DCO\b/g, "el documento de componentes estructurales"],
    [/\bEl DCO\b/g, "El documento de componentes estructurales"],
    [/\bel BER\b/g, "la biblioteca de elementos reutilizables"],
    [/\bEl BER\b/g, "La biblioteca de elementos reutilizables"],
    [/\bel CEP\b/g, "el catálogo de estilos y patrones arquitectónicos"],
    [/\bEl CEP\b/g, "El catálogo de estilos y patrones arquitectónicos"],
    [/\bel CPD\b/g, "el catálogo de patrones de diseño"],
    [/\bEl CPD\b/g, "El catálogo de patrones de diseño"],
    [/\bFase 1\b/g, "primera fase"],
    [/\bElemento E3\b/g, "tercer elemento"],
    [/\bE9\b/g, "el elemento de componentes estructurales"],
    [/\bE7\b/g, "el elemento de estilos y patrones"]
  ];
  for (const [re, repl] of map) {
    s = s.replace(re, repl);
  }
  return s.replace(/\s{2,}/g, " ").trim();
}

function splitCriterios(text = "") {
  const s = cleanNoAcronyms(text);
  if (!s) return [];
  return s.split(/\.\s+(?=[A-ZÁÉÍÓÚÑ])/).map(x => cleanText(x).replace(/\.$/, "")).filter(Boolean);
}

function renderResearch(){
  $("#generalObjective").textContent=cleanText(data.research.generalObjective);
  const dims=[["Dimensión conceptual (DC)","Define el propósito, el contexto, el grado de abstracción y el vocabulario común del modelo.",["E1","E2","E3","E4"]],["Dimensión organizativa (DO)","Materializa la estructura del modelo mediante estructuras, componentes y mecanismos de reutilización.",["E5","E9","E10"]],["Dimensión de Calidad y Diseño (DCD)","Orienta las decisiones sobre atributos de calidad, estilos arquitectónicos y patrones de diseño.",["E6","E7","E8"]]];
  $("#dimensions").innerHTML=dims.map(([name,desc,codes])=>`<article><h3>${name}</h3><p>${desc}</p><ul>${codes.map(c=>`<li><b>${c}</b> ${elementNames[c]}</li>`).join("")}</ul></article>`).join("");
  const ordered=["E1","E2","E3","E4","E5","E6","E7","E8","E9","E10"];
  
  // Mapa de definiciones exactas e integradas de la tesis (Tabla 40 y tablas de documentación E1-E10)
  const fullElementDetails = {};
  if (data.integratedModel && data.integratedModel.elements && data.integratedModel.elements.rows) {
    data.integratedModel.elements.rows.slice(1).forEach(r => {
      const code = cleanText(r[0]);
      fullElementDetails[code] = {
        name: cleanText(r[1]),
        defOriginal: cleanText(r[2]),
        defIntegrada: cleanText(r[3]),
        estudios: cleanText(r[4])
      };
    });
  }

  $("#elementsExplained").innerHTML = `<h3>Elementos de la arquitectura de referencia</h3>
    <p style="margin-bottom:1.5rem;color:var(--ink);line-height:1.7;">A continuación se presenta la caracterización de cada uno de los diez elementos arquitectónicos del proceso PDAEH, mostrando su propósito y su descripción final consolidada, junto con sus objetivos, productos generados y criterios de aceptación:</p>
    <div class="element-accordion">${ordered.map(code => {
      const e = data.elements.find(x => elementCode(x) === code);
      const meta = fullElementDetails[code] || {};
      const proposito = esc(cleanNoAcronyms(field(e, ["Propósito", "Propósito del elemento"])));
      const descripcion = meta.defIntegrada ? `<div style="margin-bottom:1.2rem;"><strong style="color:var(--green);">Descripción:</strong><p style="margin-top:0.3rem;">${esc(cleanNoAcronyms(meta.defIntegrada))}</p></div>` : "";
      const objEsp = field(e, ["Objetivos específicos"]) ? `<div style="margin-bottom:1rem;"><strong style="color:var(--green);">Objetivos específicos del elemento:</strong>${list(cleanNoAcronyms(field(e, ["Objetivos específicos"])), "general", false)}</div>` : "";
      const productos = field(e, ["Productos generados"]) ? `<div style="margin-bottom:1rem;"><strong style="color:var(--green);">Productos generados / Artefactos:</strong><ul class="structured-list">${splitItems(cleanNoAcronyms(field(e, ["Productos generados"]))).map(p => `<li>${esc(p)}</li>`).join("")}</ul></div>` : "";
      
      // Bullets for Criterios de aceptación
      const criteriosRaw = field(e, ["Criterios de aceptación"]);
      const criteriosList = splitCriterios(criteriosRaw);
      const criterios = criteriosList.length ? `<div style="margin-bottom:0.8rem;"><strong style="color:var(--green);">Criterios de aceptación:</strong><ul class="structured-list">${criteriosList.map(c => `<li>${esc(c)}.</li>`).join("")}</ul></div>` : "";

      return `<details>
        <summary><span><b>${code}:</b> ${elementNames[code]}</span></summary>
        <div class="element-summary-body" style="padding-top:1.2rem;">
          <div style="margin-bottom:1.2rem;">
            <strong style="color:var(--green);">Propósito:</strong>
            <p style="margin-top:0.3rem;">${proposito}</p>
          </div>
          ${descripcion}
          ${objEsp}
          ${productos}
          ${criterios}
        </div>
      </details>`;
    }).join("")}</div>`;
}

function renderMacro(){const order=["Nombre","Identificador","Propósito","Alcance","Dimensiones involucradas","Subconjuntos estructurales de origen","Entradas globales","Salidas globales","Criterios de inicio","Criterios de cierre","Indicadores globales","Autoridad de aprobación"];$("#macroGrid").innerHTML=order.filter(k=>data.macro[k]).map(k=>`<div><dt>${k}</dt><dd>${["Nombre","Identificador","Propósito","Alcance","Autoridad de aprobación"].includes(k)?esc(cleanText(data.macro[k])):k.includes("Indicadores")?list(data.macro[k],"indicators"):list(data.macro[k],"general",k.includes("Salidas"))}</dd></div>`).join("")}

let tableNumber = 2; // Inicia en 2 porque Tabla 1 y Tabla 2 son las tablas estáticas de la RSL y exploratorio
function table(title, headers, rows) {
  const n = ++tableNumber;
  return `<section class="numbered-table"><h4>Tabla ${n}. ${esc(title)}</h4><div class="table-shell"><table><thead><tr>${headers.map(h=>`<th>${esc(cleanText(h))}</th>`).join("")}</tr></thead><tbody>${rows.join("")}</tbody></table></div></section>`;
}
function initials(name){return cleanText(name).split(/\s+/).filter(x=>!/[()]/.test(x)).slice(0,2).map(x=>x[0]).join("").toUpperCase()}
function renderRoles(index=0){
  const labels=["Roles definidos en el proceso","Microempresa o startup","Pequeña y mediana empresa","Gran empresa o corporación"], t=data.roles[index];
  $("#roleTabs").innerHTML=labels.map((x,i)=>`<button class="${i===index?"active":""}" data-i="${i}">${x}</button>`).join("");
  const rawHeaders = t.rows[0];
  const headers = ["Perfil"].concat(rawHeaders);

  const isShortOrDash = (str, headerName = "") => {
    const h = cleanText(headerName).toLowerCase();
    if (h.includes("nivel") || h.includes("intervenci")) return true;
    const val = cleanText(str).trim();
    if (!val || val === "—" || val === "-" || val === "–" || val === "N/A" || val === "n/a") return true;
    // Check if it's an acronym or list of acronyms like 'AEP', 'ASP, AIP, OGA ASecP y GPA'
    const words = val.split(/[\s,y\/]+/);
    const allUpper = words.every(w => w.length <= 6 && (w === w.toUpperCase() || w === "y" || w === "/"));
    return allUpper && val.length <= 35;
  };

  let rowsHtml = [];
  if (index === 0) {
    const rawRows = t.rows.slice(1);
    const tipoIdx = rawHeaders.findIndex(h => cleanText(h).toLowerCase() === "tipo");
    const spans = {};
    let curCount = 0, startIdx = 0;
    rawRows.forEach((r, idx) => {
      const val = cleanText(r[tipoIdx] || "");
      if (val !== "") {
        if (curCount > 0) spans[startIdx] = curCount;
        curCount = 1;
        startIdx = idx;
      } else {
        curCount++;
      }
    });
    if (curCount > 0) spans[startIdx] = curCount;

    rowsHtml = rawRows.map((r, idx) => {
      let cells = `<td><span class="role-avatar" aria-hidden="true">${initials(r[0])}</span></td>`;
      r.forEach((c, cIdx) => {
        const cleaned = esc(cleanText(c));
        const centerStyle = isShortOrDash(c, rawHeaders[cIdx]) ? ' style="text-align:center !important;vertical-align:middle !important;"' : '';
        if (cIdx === tipoIdx) {
          if (spans[idx]) {
            cells += `<td rowspan="${spans[idx]}" style="vertical-align:middle;font-weight:700;background:#fff;text-align:center !important;">${cleaned}</td>`;
          }
        } else {
          cells += `<td${centerStyle}>${cleaned}</td>`;
        }
      });
      return `<tr>${cells}</tr>`;
    });
  } else {
    rowsHtml = t.rows.slice(1).map(r => {
      let cells = `<td><span class="role-avatar" aria-hidden="true">${initials(r[0])}</span></td>`;
      r.forEach((c, cIdx) => {
        const cleaned = esc(cleanText(c));
        const centerStyle = isShortOrDash(c, rawHeaders[cIdx]) ? ' style="text-align:center !important;vertical-align:middle !important;"' : '';
        cells += `<td${centerStyle}>${cleaned}</td>`;
      });
      return `<tr>${cells}</tr>`;
    });
  }
  tableNumber = 2; // Mantener la secuencia global: las pestañas de roles actualizan la Tabla 3
  $("#roleTable").innerHTML = table(labels[index], headers, rowsHtml);
  $$("#roleTabs button").forEach(b => b.onclick = () => renderRoles(+b.dataset.i));
}
function renderGovernance(){$("#ogaSteps").innerHTML=data.governance.rows.slice(1).map((r,i)=>`<article><b>${i+1}</b><div><h4>${esc(cleanText(r[1]||r[0]))}</h4><p>${esc(cleanText(r[2]||""))}</p></div></article>`).join("")}
function renderPhases(){$("#phasePanel").innerHTML=data.phases.map((p,i)=>`<article class="phase-card"><span>F${i+1}</span><div><h3>${phaseNames[i]}</h3><p>${esc(cleanText(field(p,["Propósito"])))}</p><a href="fase.html?id=${i+1}">Consultar la fase completa <span aria-hidden="true">→</span></a></div></article>`).join("")}

const artifactInfo = {
  LBA: {
    queEs: "Línea Base Arquitectónica integral.",
    paraQueSirve: "Consolida formalmente el estado aprobado de los elementos arquitectónicos tras la verificación del Órgano de Gobierno Arquitectónico (OGA), asegurando trazabilidad y evolución controlada."
  },
  DOE: {
    queEs: "Documento de Objetivos Estratégicos.",
    paraQueSirve: "Formaliza los objetivos de negocio y directrices corporativas que justifican la adopción cuántica, guiando todas las decisiones técnicas posteriores."
  },
  MTA: {
    queEs: "Matriz de Trazabilidad Objetivos-Arquitectura.",
    paraQueSirve: "Garantiza la correspondencia biunívoca entre las metas estratégicas de la empresa y los componentes o decisiones arquitectónicas implementadas."
  },
  DCA: {
    queEs: "Documento de Contexto Arquitectónico.",
    paraQueSirve: "Caracteriza el entorno organizacional, operativo y normativo, evaluando la arquitectura actual (AS-IS) y delimitando el potencial híbrido institucional."
  },
  MSP: {
    queEs: "Mapa de Stakeholders y Preocupaciones.",
    paraQueSirve: "Identifica a todas las partes interesadas, clasifica su influencia e interés, y mapea sus expectativas técnicas y de negocio para orientar el diseño."
  },
  DPV: {
    queEs: "Documento de Perspectivas y Vistas Arquitectónicas.",
    paraQueSirve: "Define los puntos de vista y representaciones multidimensionales requeridos para comunicar y validar la arquitectura ante audiencias diversas."
  },
  DNA: {
    queEs: "Documento de Niveles Arquitectónicos.",
    paraQueSirve: "Establece la jerarquía de abstracción y granularidad del sistema, conectando la visión de negocio con las capas lógicas y técnicas."
  },
  ITA: {
    queEs: "Inventario de Términos Arquitectónicos.",
    paraQueSirve: "Recopila y clasifica el léxico clave de computación cuántica y arquitectura clásica para homologar el entendimiento entre equipos interdisciplinarios."
  },
  DVA: {
    queEs: "Diccionario de Vocabulario Arquitectónico.",
    paraQueSirve: "Provee definiciones semánticas formales y consensuadas para resolver ambigüedades operativas y técnicas en la organización."
  },
  MAC: {
    queEs: "Modelo de Atributos de Calidad.",
    paraQueSirve: "Especifica escenarios verificables para atributos críticos (rendimiento, seguridad, interoperabilidad, latencia) y pondera los compromisos de diseño (trade-offs)."
  },
  DEA: {
    queEs: "Documento de Estructuras Arquitectónicas.",
    paraQueSirve: "Describe la organización de módulos, esquemas de descomposición y mecanismos de orquestación e interacción entre el software clásico y los recursos cuánticos."
  },
  DCO: {
    queEs: "Documento de Componentes Estructurales.",
    paraQueSirve: "Detalla la especificación técnica de contratos, interfaces, dependencias y datos gestionados por cada componente de la solución híbrida."
  },
  BER: {
    queEs: "Biblioteca de Elementos Reutilizables.",
    paraQueSirve: "Cataloga patrones, módulos conectores, adaptadores y algoritmos verificados para optimizar costos y acelerar futuras implementaciones."
  },
  CEP: {
    queEs: "Catálogo de Estilos y Patrones Arquitectónicos.",
    paraQueSirve: "Documenta los estilos estructurales adoptados (microservicios, pipeline híbrido, acelerador cuántico) y justifica su pertinencia frente a los atributos de calidad."
  },
  CPD: {
    queEs: "Catálogo de Patrones de Diseño.",
    paraQueSirve: "Estandariza soluciones recurrentes para problemas específicos de interacción híbrida (gestión de circuitos, mitigación de errores, procesamiento por lotes)."
  }
};

function renderArtifacts() {
  const container = $("#artifactTemplates");
  if (!container) return;
  const rows = artifactCodes.map(code => {
    const info = artifactInfo[code] || { queEs: artifactNames[code], paraQueSirve: "Plantilla estandarizada del proceso." };
    const desc = `${info.queEs} ${info.paraQueSirve}`;
    return `<tr>
      <td style="text-align:center;vertical-align:middle;font-weight:700;"><a href="plantilla.html?id=${code}" style="color:var(--green);text-decoration:none;">${code}</a></td>
      <td style="vertical-align:middle;font-weight:600;"><a href="plantilla.html?id=${code}" class="artifact-link">${artifactNames[code]}</a></td>
      <td style="vertical-align:middle;text-align:justify;">${desc}</td>
      <td style="vertical-align:middle;text-align:center;white-space:nowrap;">
        <div style="display:inline-flex;gap:8px;align-items:center;justify-content:center;flex-wrap:wrap;">
          <a href="plantilla.html?id=${code}" class="artifact-link" style="font-weight:700;font-size:0.85rem;margin-right:4px;">Ver</a>
          <a href="assets/descargas/markdown/Plantilla_${code}.md" download title="Descargar plantilla Markdown (.MD)" style="padding:4px 8px;border:1px solid var(--line);border-radius:4px;background:#f8faf9;color:var(--ink);text-decoration:none;font-size:0.8rem;font-weight:600;">.MD</a>
          <a href="assets/descargas/docx/Plantilla_${code}.docx" download title="Descargar plantilla Word (.DOCX)" style="padding:4px 8px;border:1px solid var(--line);border-radius:4px;background:#f8faf9;color:var(--ink);text-decoration:none;font-size:0.8rem;font-weight:600;">.DOCX</a>
          <a href="assets/descargas/latex/Plantilla_${code}.tex" download title="Descargar plantilla LaTeX (.TEX)" style="padding:4px 8px;border:1px solid var(--line);border-radius:4px;background:#f8faf9;color:var(--ink);text-decoration:none;font-size:0.8rem;font-weight:600;">.TEX</a>
        </div>
      </td>
    </tr>`;
  }).join("");

  container.innerHTML = `<section class="numbered-table" style="margin-top:1.5rem;">
    <h4 style="font-family:Newsreader,serif;font-size:1.35rem;font-weight:600;margin:0 0 1rem;text-align:center;color:var(--ink);">Tabla 5. Catálogo de plantillas normalizadas de artefactos arquitectónicos</h4>
    <div class="table-shell">
      <table style="width:100%;border-collapse:collapse;background:#fff;font-size:0.92rem;">
        <thead>
          <tr style="background:#eaf1fb;color:#1f2a44;">
            <th style="padding:10px;border:1px solid var(--line);width:90px;text-align:center;vertical-align:middle;">Identificador</th>
            <th style="padding:10px;border:1px solid var(--line);width:26%;text-align:left;vertical-align:middle;">Nombre</th>
            <th style="padding:10px;border:1px solid var(--line);text-align:left;vertical-align:middle;">Descripción</th>
            <th style="padding:10px;border:1px solid var(--line);width:240px;text-align:center;vertical-align:middle;">Plantillas</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    </div>
  </section>`;
}
function renderGlossary() {
  if (!data.glossaries?.length) return;
  const target = $("#glossaryTables");
  tableNumber = 5; // Tabla 5 es el catálogo de artefactos; las tablas del glosario continuarán en Tabla 6 y Tabla 7
  target.innerHTML = data.glossaries.map(g => {
    const keep = g.rows[0].map((h, i) => ({h, i})).filter(x => !cleanText(x.h).toLocaleLowerCase().includes("fuente"));
    return table(cleanText(g.caption.replace(/^Tabla\s+\d+\.\s*/, "")), keep.map(x => x.h), g.rows.slice(1).map(r => `<tr>${keep.map(x => `<td>${esc(cleanText(r[x.i] || ""))}` + `</td>`).join("")}</tr>`));
  }).join("");
}
function setupSearch(){const dialog=$("#searchDialog"),input=$("#searchInput"),results=$("#searchResults");$("#searchTrigger").onclick=()=>{dialog.showModal();input.focus()};input.oninput=()=>{const q=input.value.toLocaleLowerCase().trim();if(q.length<2){results.innerHTML="";return}const hits=[...Object.entries(elementNames).map(([code,name])=>({code,name,url:"#modelo"})),...phaseNames.map((name,i)=>({code:`F${i+1}`,name,url:`fase.html?id=${i+1}`})),...artifactCodes.map(code=>({code,name:artifactNames[code],url:`plantilla.html?id=${code}`}))].filter(x=>(x.code+x.name).toLocaleLowerCase().includes(q));results.innerHTML=hits.map(h=>`<a href="${h.url}"><b>${h.code}</b><span>${h.name}</span></a>`).join("")}}

function renderTraceabilityMatrix() {
  const container = $("#traceabilityMatrixContainer");
  if (!container) return;

  const matrixData = [
    {
      fase: "F1: Definición estratégica",
      elementos: "E1 (Objetivo de la arquitectura), E2 (Contexto de la arquitectura)",
      artefactos: ["DOE", "MTA", "DCA"],
      rolesResp: "AEP (Principal), LNP (Negocio)",
      rolesConsult: "ASP, OGA, GPA",
      puntoOGA: "OGA-1",
      criterioOGA: "Aprobación formal del caso de uso cuántico, objetivos de negocio (DOE) y restricciones de contexto (DCA)."
    },
    {
      fase: "F2: Formalización conceptual",
      elementos: "E3 (Grado de abstracción), E4 (Glosario de términos y definiciones)",
      artefactos: ["MSP", "DPV", "DNA"],
      rolesResp: "AEP (Principal), ASP (Solución)",
      rolesConsult: "LNP, EQP, GEP",
      puntoOGA: "OGA-2",
      criterioOGA: "Validación de expectativas de stakeholders (MSP), vistas conceptuales (DPV) y niveles de abstracción (DNA)."
    },
    {
      fase: "F3: Configuración estructural",
      elementos: "E5 (Estructuras arquitectónicas), E6 (Atributos de calidad)",
      artefactos: ["ITA", "DVA", "MAC"],
      rolesResp: "ASP (Solución), AIP (Infraestructura)",
      rolesConsult: "AEP, ASecP, EQP",
      puntoOGA: "OGA-3",
      criterioOGA: "Certificación de escenarios de atributos de calidad (MAC), estructuras arquitectónicas (ITA/DVA) y esquema de gobierno."
    },
    {
      fase: "F4: Materialización arquitectónica",
      elementos: "E9 (Componentes estructurales), E10 (Elementos reutilizables)",
      artefactos: ["DEA", "DCO", "BER"],
      rolesResp: "ASP (Solución), EQP (Especialista cuántico)",
      rolesConsult: "AIP, ASecP, GPA",
      puntoOGA: "OGA-4",
      criterioOGA: "Aprobación de estructuras de descomposición (DEA), contratos de componentes (DCO) y módulos reusables (BER)."
    },
    {
      fase: "F5: Sistematización del diseño",
      elementos: "E7 (Estilos y patrones arquitectónicos), E8 (Patrones de diseño)",
      artefactos: ["CEP", "CPD", "LBA"],
      rolesResp: "AEP (Principal), ASP (Solución)",
      rolesConsult: "Todos los roles involucrados",
      puntoOGA: "OGA-5",
      criterioOGA: "Aprobación definitiva de catálogos CEP/CPD y formalización de la Línea Base Arquitectónica integral (LBA)."
    }
  ];

  const rows = matrixData.map(item => `
    <tr>
      <td style="vertical-align:middle;font-weight:700;color:var(--green);">${item.fase}</td>
      <td style="vertical-align:middle;">${item.elementos}</td>
      <td style="vertical-align:middle;text-align:center;text-align:-webkit-center;">
        ${item.artefactos.map(code => `<a href="plantilla.html?id=${code}" class="artifact-link" style="font-weight:700;margin:0 3px;">${code}</a>`).join(" · ")}
      </td>
      <td style="vertical-align:middle;"><small><b>Resp:</b> ${item.rolesResp}<br><b>Cons:</b> ${item.rolesConsult}</small></td>
      <td style="vertical-align:middle;text-align:center;text-align:-webkit-center;font-weight:700;background:#f9fbfa;"><span style="color:var(--navy);">${item.puntoOGA}</span></td>
      <td style="vertical-align:middle;font-size:0.88rem;line-height:1.5;">${item.criterioOGA}</td>
    </tr>
  `).join("");

  container.innerHTML = `
    <section class="numbered-table" style="margin-top:1.5rem;">
      <h4 style="font-family:Newsreader,serif;font-size:1.35rem;font-weight:600;margin:0 0 1rem;text-align:center;color:var(--ink);">Tabla 4. Matriz de trazabilidad cruzada del proceso PDAEH</h4>
      <div class="table-shell" style="margin-top:0.5rem;">
        <table style="width:100%;border-collapse:collapse;background:#fff;font-size:0.92rem;">
          <thead>
            <tr style="background:#eaf1fb;color:#1f2a44;">
              <th style="padding:10px;border:1px solid var(--line);width:20%;text-align:left;">Fase del proceso</th>
              <th style="padding:10px;border:1px solid var(--line);width:22%;text-align:left;">Elementos cubiertos</th>
              <th style="padding:10px;border:1px solid var(--line);width:15%;text-align:center;">Artefactos vinculados</th>
              <th style="padding:10px;border:1px solid var(--line);width:20%;text-align:left;">Asignación de roles</th>
              <th style="padding:10px;border:1px solid var(--line);width:90px;text-align:center;">Compuerta OGA</th>
              <th style="padding:10px;border:1px solid var(--line);text-align:left;">Criterio de aprobación</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function setupAgentDemo() {
  const btn = $("#btnRunDemo");
  const selectSize = $("#demoOrgSize");
  const txtUseCase = $("#demoUseCase");
  const txtStack = $("#demoStack");
  const outContainer = $("#demoOutputContainer");
  const statusTag = $("#demoStatusTag");

  if (!btn || !selectSize || !outContainer) return;

  const multiPresets = {
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
    const lang = (window.PDAEH_I18N && window.PDAEH_I18N.getLang) ? window.PDAEH_I18N.getLang() : (localStorage.getItem("pdaeh_user_lang") || "es");
    const size = selectSize.value;
    const cat = multiPresets[size];
    if (cat) {
      const data = cat[lang] || cat["es"];
      txtUseCase.value = data.useCase;
      txtStack.value = data.stack;
    }
  };



  selectSize.onchange = () => {
    updateInputsForLangAndSize();
  };

  // Listen to global topbar language changes
  window.addEventListener('pdaeh:languageChanged', (e) => {
    updateInputsForLangAndSize();
  });

  // Initial call on load
  updateInputsForLangAndSize();

  let streamInterval = null;

  const runEvaluation = () => {
    const size = selectSize.value;
    const lang = (window.PDAEH_I18N && window.PDAEH_I18N.getLang) ? window.PDAEH_I18N.getLang() : (localStorage.getItem("pdaeh_user_lang") || "es");
    const useCase = (txtUseCase.value || "").trim();
    const stack = (txtStack.value || "").trim();

    if (!useCase) {
      alert("Por favor ingrese o seleccione una descripción del problema o caso de uso.");
      return;
    }

    if (streamInterval) clearInterval(streamInterval);

    btn.disabled = true;
    btn.style.opacity = "0.6";
    statusTag.textContent = "Analizando Arquitectura y Conectando Fuentes...";
    statusTag.style.background = "#fff3cd";
    statusTag.style.color = "#856404";
    outContainer.innerHTML = "";

    // Caso de descarte metodológico (No apto para aceleración cuántica)
    if (size === "inadecuado") {
      const discardHtml = `
        <div style="font-family:inherit;line-height:1.75;font-size:0.95rem;color:var(--ink);text-align:justify;">
          <div style="display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--line);padding-bottom:0.8rem;margin-bottom:1.2rem;flex-wrap:wrap;gap:0.5rem;">
            <div>
              <span style="font-size:0.75rem;font-weight:700;color:#c53030;text-transform:uppercase;letter-spacing:0.08em;display:block;">Diagnóstico Arquitectónico Negativo</span>
              <h4 style="margin:0.2rem 0 0;font-size:1.25rem;font-family:Newsreader,serif;color:var(--ink);">Caso Descartado: Sin Justificación de Aceleración Cuántica</h4>
            </div>
            <span style="padding:4px 10px;background:#fed7d7;color:#9b2c2c;font-size:0.78rem;font-weight:700;border-radius:4px;">No Viable para PDAEH</span>
          </div>

          <p style="margin-bottom:1rem;">
            A partir del análisis del problema planteado (<em>"${esc(useCase)}"</em>) y del stack tecnológico As-Is reportado (<em>"${esc(stack)}"</em>), el marco metodológico concluye que <strong>el problema no exhibe complejidad exponencial ni características compatibles con aceleración cuántica</strong>.
          </p>

          <div style="background:#fff5f5;border-left:4px solid #e53e3e;padding:1.1rem 1.3rem;margin:1.4rem 0;border-radius:4px;">
            <h5 style="margin:0 0 0.5rem;font-size:0.98rem;color:#9b2c2c;font-weight:700;">Fundamento de Descarte Técnico y Arquitectónico</h5>
            <p style="margin:0 0 0.6rem;font-size:0.93rem;line-height:1.7;">
              Los sistemas de transaccionalidad web convencional, comercio electrónico, CRUD y persistencia relacional/documental son problemas deterministas de complejidad polinomial \\(O(1)\\) u \\(O(n)\\), óptimamente resueltos por arquitecturas clásicas de software empresarial (microservicios, cachés distribuidos, bases de datos ACID y CDNs).
            </p>
            <ul style="padding-left:1.3rem;margin:0;line-height:1.7;">
              <li><strong>Incompatibilidad de Complejidad:</strong> La computación cuántica no acelera la velocidad de cómputo secuencial clásica ni operaciones de I/O masivo; su ventaja radica en la reducción de clases de complejidad (como BQP vs. BPP) mediante interferencia cuántica.</li>
              <li><strong>Sobrecarga Operativa y Latencia Inaceptable:</strong> Introducir colas de despacho hacia una QPU remota incrementaría la latencia de respuesta de milisegundos a segundos o minutos, destruyendo la experiencia de usuario.</li>
              <li><strong>Riesgo Económico Injustificado:</strong> El costo financiero de cuotas de ejecución en nubes cuánticas no aportaría ninguna ventaja competitiva ni mejora algorítmica demostrable.</li>
            </ul>
          </div>

          <div style="background:#f8fafc;border:1px solid var(--line);border-radius:4px;padding:1.1rem 1.3rem;margin-top:1.4rem;">
            <h5 style="margin:0 0 0.4rem;font-size:0.95rem;color:var(--navy);font-weight:700;">Recomendación y Principio Arquitectónico Sugerido</h5>
            <p style="margin:0;font-size:0.93rem;line-height:1.65;">
              <strong>Principio de Parquedad Tecnológica:</strong> Mantener y optimizar la arquitectura clásica existente. Utilizar patrones clásicos consolidados: escalabilidad horizontal sin estado (Stateless Microservices), sharding de bases de datos, colas de mensajería asíncrona (RabbitMQ/Kafka) y capas de caché distribuido en memoria (Redis). Se desaconseja iniciar la ejecución del proceso PDAEH para este caso de uso.
            </p>
          </div>
        </div>
      `;

      let currentLen = 0;
      streamInterval = setInterval(() => {
        currentLen += 40;
        if (currentLen >= discardHtml.length) {
          clearInterval(streamInterval);
          outContainer.innerHTML = discardHtml;
          statusTag.textContent = "Evaluación Finalizada (No Apto)";
          statusTag.style.background = "#fed7d7";
          statusTag.style.color = "#9b2c2c";
          btn.disabled = false;
          btn.style.opacity = "1";
        } else {
          outContainer.innerHTML = discardHtml.slice(0, currentLen) + ' <span style="display:inline-block;width:8px;height:14px;background:#c53030;animation:blink 0.8s infinite;"></span>';
        }
      }, 12);
      return;
    }

    let scaleLabel = "";
    let familyTitle = "";
    let algRationale = "";
    let qualityRationale = "";
    let roleNarrative = "";
    let roadmapNarrative = "";
    let immediateAction = "";
    let diagramSvg = "";
    let architecturalSynthesis = "";

    if (size === "startup") {
      scaleLabel = "Microempresa o Startup (< 20 colaboradores)";
      familyTitle = "Quantum Machine Learning (QML con QSVM y Circuitos Variacionales Parametrizados)";
      
      algRationale = `
        El caso planteado se clasifica rigurosamente dentro del dominio de <strong>Quantum Machine Learning (QML)</strong>. En problemas de clasificación crediticia o análisis de riesgo financiero con variables altamente entrelazadas y distribuciones multimodales, los modelos clásicos (como Random Forest o XGBoost) pueden saturarse al mapear fronteras de decisión no lineales complejas. La solución híbrida proyectada formula un clasificador de vectores de soporte cuántico (<strong>Quantum Support Vector Machine - QSVM</strong>) y circuitos cuánticos variacionales (<strong>VQC</strong>), donde los datos clásicos se proyectan en un espacio de Hilbert de alta dimensionalidad mediante compuertas de rotación parametrizadas (Feature Map de entrelazamiento completo).
      `;

      architecturalSynthesis = `
        <!-- SECCIÓN 1: RECOMENDACIONES ARQUITECTÓNICAS -->
        <div style="margin:1.4rem 0;">
          <h5 style="margin:0 0 0.6rem;font-size:1.02rem;color:var(--navy);font-weight:700;">1. Recomendaciones Arquitectónicas Estratégicas</h5>
          <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
            <li><strong>Desacoplamiento Estricto Clásico-Cuántico:</strong> Proteger el núcleo operativo del cliente evitando llamadas síncronas bloqueantes a la QPU; toda inferencia cuántica debe procesarse de manera asíncrona desacoplada mediante un patrón Broker / Cola de Trabajo.</li>
            <li><strong>Régimen Operativo Progresivo (Simulación primero):</strong> En la era NISQ, ejecutar el 90% de las calibraciones y pruebas algorítmicas en simuladores locales con ruido térmico emulado (Statevector con ruido en PennyLane o Qiskit Aer), y canalizar a la QPU física en la nube únicamente los lotes finales de validación de kernel.</li>
            <li><strong>Gobernanza Proporcional a Escala:</strong> Ajustar la rigurosidad del gobierno arquitectónico sin imponer sobrecarga documental que asfixie la velocidad de entrega de la startup.</li>
          </ul>
        </div>

        <!-- SECCIÓN 2: PATRONES ARQUITECTÓNICOS Y DE DISEÑO -->
        <div style="margin:1.4rem 0;background:#f9fbfa;border:1px solid var(--line);border-radius:5px;padding:1.2rem;">
          <h5 style="margin:0 0 0.6rem;font-size:1.02rem;color:var(--green);font-weight:700;">2. Patrones Arquitectónicos y de Diseño Híbrido Aplicables</h5>
          <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
            <li><strong>Patrón Estratégico (Strategy Pattern):</strong> Permite al servicio de scoring seleccionar dinámicamente entre el modelo clásico (XGBoost) y el kernel cuántico (QSVM) en tiempo de ejecución, en función del tamaño del vector y la disponibilidad presupuestal de la QPU.</li>
            <li><strong>Patrón Fachada / Adaptador Cuántico (Quantum Adapter & Facade):</strong> Homogeneiza las interfaces propietarias de los proveedores de nube cuántica (IBM Quantum, AWS Braket, Google Quantum AI), aislando el código de negocio frente a cambios en los SDKs o desaprobación de backends.</li>
            <li><strong>Patrón Retry con Retroceso Exponencial y Fallback Clásico:</strong> Si la cola de espera de la QPU excede el SLA establecido o la tasa de error por ruido supera el umbral de fidelidad tolerado, el sistema conmuta automáticamente y sin interrupción al scoring clásico de contingencia.</li>
            <li><strong>Patrón Data Mapper Cuántico:</strong> Normaliza y comprime las variables crediticias clásicas en el rango [0, 2π] para su codificación directa en los ángulos de rotación de los cúbits (ZFeatureMap / ZZFeatureMap).</li>
          </ul>
        </div>

        <!-- SECCIÓN 3: PRINCIPIOS ARQUITECTÓNICOS -->
        <div style="margin:1.4rem 0;">
          <h5 style="margin:0 0 0.6rem;font-size:1.02rem;color:var(--navy);font-weight:700;">3. Principios Rectores de la Arquitectura</h5>
          <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
            <li><strong>Principio de Conciencia de NISQ (Noise-Awareness):</strong> La arquitectura debe asumir inherentemente que las computadoras cuánticas actuales no disponen de corrección de errores tolerante a fallos; por ende, toda compuerta debe incorporar técnicas activas de mitigación de ruido de lectura (Readout Error Mitigation) y limitación de profundidad de circuito.</li>
            <li><strong>Principio de Parsimonia en Cómputo Cuántico:</strong> Delegar a la QPU estrictamente las operaciones en donde reside la complejidad del kernel de Hilbert; la ingesta, validación, limpieza y agregación de variables deben permanecer en el stack clásico.</li>
            <li><strong>Principio de Aislamiento de Vendor Lock-in:</strong> El diseño no debe atarse a un hardware específico de superconductores o iones atrapados; la arquitectura debe soportar sustitución transparente del proveedor de hardware mediante capas de abstracción OpenQASM o QIR.</li>
          </ul>
        </div>

        <!-- SECCIÓN 4: MODELOS Y TECNOLOGÍAS SUGERIDAS -->
        <div style="margin:1.4rem 0;background:#f8fafc;border:1px solid var(--line);border-radius:5px;padding:1.2rem;">
          <h5 style="margin:0 0 0.6rem;font-size:1.02rem;color:#1e40af;font-weight:700;">4. Modelos Algorítmicos y Tecnologías Recomendadas</h5>
          <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
            <li><strong>Modelos Algorítmicos Cuánticos:</strong> Quantum Support Vector Classifier (QSVC) con mapeo de características ZZ; Circuitos Variacionales Cuánticos (VQC) basados en el optimizador clásico COBYLA o Adam.</li>
            <li><strong>SDKs y Frameworks de Desarrollo Híbrido:</strong> PennyLane (Xanadu) para diferenciación automática híbrida clásico-cuántica; Qiskit Machine Learning (IBM); Cirq y TensorFlow Quantum (TFQ).</li>
            <li><strong>Infraestructura y Plataforma de Ejecución:</strong> Qiskit Runtime Primitives (Sampler y Estimator) ejecutando sesiones dedicadas; AWS Braket Hybrid Jobs para orquestación de contenedores híbridos sin bloqueo.</li>
            <li><strong>Mecanismos de Conectividad Clásica:</strong> APIs REST/gRPC sobre FastAPI en Python, colas Celery/Redis para asincronía y Cloud Run para escalabilidad sin servidor.</li>
          </ul>
        </div>

        <!-- SECCIÓN 5: ARQUITECTURAS IMPLEMENTADAS EN EMPRESAS SIMILARES -->
        <div style="margin:1.4rem 0;background:#fefbf3;border-left:4px solid #d4a017;padding:1.2rem;border-radius:4px;">
          <h5 style="margin:0 0 0.5rem;font-size:1.02rem;color:#7f5a00;font-weight:700;">5. Casos de Estudio y Arquitecturas Referenciadas en la Industria Financiera</h5>
          <p style="margin:0 0 0.7rem;font-size:0.93rem;line-height:1.7;">
            Diversas instituciones financieras pioneras han desplegado y validado arquitecturas híbridas análogas reportadas en reportes técnicos y literatura científica de referencia:
          </p>
          <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
            <li><strong>JPMorgan Chase & Co. & Toshiba / Quantinuum:</strong> Implementó un pipeline híbrido para detección de anomalías y optimización de portafolios en el que un clúster clásico en la nube preprocesa terabytes de datos de mercado y deriva subconjuntos de covarianza complejos a procesadores cuánticos mediante Qiskit Runtime y Azure Quantum. Demostró la indispensabilidad de un orquestador híbrido con conmutación automática ante demoras en las colas de la QPU.</li>
            <li><strong>BBVA Quantum Lab:</strong> En sus estudios pioneros sobre crédito y diversificación de cartera mediante algoritmos variacionales, adoptó un modelo arquitectónico desacoplado de microservicios con un conector genérico (Quantum Cloud Connector), permitiendo contrastar dinámicamente la precisión de algoritmos clásicos de machine learning frente a modelos variacionales cuánticos en hardware NISQ.</li>
            <li><strong>Ecosistema PlanQK (Plataforma Cuántica Abierta):</strong> Demuestra la viabilidad de empaquetar algoritmos cuánticos como servicios web estandarizados (Quantum Algorithms as a Service - QAaaS), permitiendo a pequeñas empresas consumir cómputo cuántico sin requerir infraestructura propietaria local.</li>
          </ul>
        </div>
      `;

      qualityRationale = `
        <p style="margin:0 0 0.6rem;">Conforme a las directrices de diseño para esta escala, los escenarios de calidad prioritarios son:</p>
        <ul style="padding-left:1.3rem;margin:0 0 0.4rem;line-height:1.7;">
          <li><strong>Fidelidad y Mitigación de Ruido (Dimensión DCD - E6):</strong> Control riguroso de la tasa de error por compuerta de dos cúbits y atenuación de ruido de lectura (Readout Error Mitigation) para asegurar clasificaciones fiables.</li>
          <li><strong>Eficiencia Económica y Control de Costos:</strong> Restricción de llamadas a QPUs comerciales de pago por uso mediante filtrado y reducción dimensional previa (PCA cuántico o clásico) en el stack clásico.</li>
          <li><strong>Latencia y Asincronía de Inferencia:</strong> Desacoplamiento mediante colas de mensajes para evitar bloqueos en el hilo de ejecución del usuario durante la compilación y ejecución de circuitos cuánticos.</li>
        </ul>
        <p style="margin:0.4rem 0 0;font-size:0.88rem;color:var(--muted);">Estos atributos se formalizan y ponderan en el artefacto <a href="plantilla.html?id=MAC" style="color:var(--green);font-weight:700;">MAC (Marco de Evaluación de Atributos)</a>.</p>
      `;

      roleNarrative = `
        <p style="margin:0 0 0.6rem;">Para una microempresa o startup, la asignación de responsabilidades se compacta en roles multifuncionales:</p>
        <ul style="padding-left:1.3rem;margin:0;line-height:1.7;">
          <li><strong>Arquitecto(a) Empresarial del Proceso Integrado (AEP):</strong> Figura central que asume la dirección estratégica, el diseño de la solución (ASP), la integración tecnológica (AIP), la ciberseguridad (ASecP) y la gestión del portafolio (GPA).</li>
          <li><strong>Órgano de Gobierno Arquitectónico (OGA):</strong> Opera de forma simplificada a través de revisiones colegiadas entre el AEP y los fundadores de la empresa en cada compuerta de decisión.</li>
          <li><strong>Arquitecto(a) de Datos del Proceso (ADP):</strong> Asumido por el ingeniero de datos o mediante un perfil técnico compartido.</li>
          <li><strong>Especialista Tecnológico Cuántico (ETC):</strong> Incorporado bajo demanda mediante consultoría externa o asesoría científica por horas.</li>
        </ul>
      `;

      roadmapNarrative = `
        <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
          <li><strong>Fase 1 (Definición estratégica):</strong> Formalizar el <a href="plantilla.html?id=DOE" style="color:var(--green);font-weight:700;">DOE (Objetivos Estratégicos)</a> cuantificando el valor de negocio de la ventaja cuántica y el <a href="plantilla.html?id=DCA" style="color:var(--green);font-weight:700;">DCA (Contexto y Restricciones)</a> delimitando techos de gasto. Aprobación en <strong>Compuerta OGA-1</strong>.</li>
          <li><strong>Fase 2 (Formalización conceptual):</strong> Diseñar la vista funcional en el <a href="plantilla.html?id=DPV" style="color:var(--green);font-weight:700;">DPV (Puntos de Vista)</a> separando preprocesamiento clásico y cómputo de kernel cuántico, y documentar niveles en el <a href="plantilla.html?id=DNA" style="color:var(--green);font-weight:700;">DNA</a>. Aprobación en <strong>Compuerta OGA-2</strong>.</li>
          <li><strong>Fase 3 (Configuración estructural):</strong> Ponderar escenarios de fidelidad, costos y latencia en el <a href="plantilla.html?id=MAC" style="color:var(--green);font-weight:700;">MAC</a> junto con las estructuras arquitectónicas base. Aprobación en <strong>Compuerta OGA-3</strong>.</li>
          <li><strong>Fase 4 (Materialización arquitectónica):</strong> Descomponer el orquestador híbrido en el <a href="plantilla.html?id=DEA" style="color:var(--green);font-weight:700;">DEA</a> y formalizar los contratos de interfaz API en el <a href="plantilla.html?id=DCO" style="color:var(--green);font-weight:700;">DCO</a>. Aprobación en <strong>Compuerta OGA-4</strong>.</li>
          <li><strong>Fase 5 (Sistematización del diseño):</strong> Consolidar el Catálogo de Estilos y Patrones (<a href="plantilla.html?id=CEP" style="color:var(--green);font-weight:700;">CEP</a>) con el patrón Broker y el Strategy de contingencia, aprobando la <strong>Compuerta OGA-5</strong>.</li>
        </ul>
      `;

      immediateAction = `Convocar a los fundadores técnicos y redactar inmediatamente la plantilla del <a href="plantilla.html?id=DOE" style="color:var(--green);font-weight:700;">Documento de Objetivos Estratégicos (DOE)</a>, estableciendo la métrica de precisión y latencia contra la cual se medirá el éxito de la integración híbrida frente al modelo clásico actual.`;

      diagramSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 620" width="100%" height="auto" style="background:#ffffff;border:1px solid var(--line);border-radius:6px;font-family:system-ui,-apple-system,sans-serif;margin:1rem 0;box-shadow:0 1px 3px rgba(0,0,0,0.03);">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#18796e" />
            </marker>
            <marker id="arrow-gold" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#ca8a04" />
            </marker>
            <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#2563eb" />
            </marker>
          </defs>

          <!-- ENCABEZADO SUPERIOR DEL DIAGRAMA -->
          <rect x="20" y="15" width="880" height="34" rx="4" fill="#0f2e2b" />
          <text x="35" y="37" font-size="12" font-weight="700" fill="#ffffff" letter-spacing="0.05em">ARQUITECTURA EMPRESARIAL HÍBRIDA PRELIMINAR (PDAEH) · MICROEMPRESA / STARTUP: SCORING Y QML EN CLOUD SERVERLESS</text>

          <!-- NIVEL 1: GOBERNANZA, ESTRATEGIA Y CONCEPTUALIZACIÓN (FASE 1 Y FASE 2) -->
          <rect x="20" y="58" width="880" height="92" rx="5" fill="#f2f7f4" stroke="#18796e" stroke-width="1.5" />
          <rect x="30" y="66" width="310" height="22" rx="3" fill="#18796e" />
          <text x="38" y="81" font-size="11" font-weight="700" fill="#ffffff">CAPA 1: GOBIERNO, ESTRATEGIA & CONCEPTUALIZACIÓN</text>
          <text x="350" y="81" font-size="10.5" font-weight="600" fill="#123b43">Roles: AEP (Rol Central Multifuncional: CTO / Lead Architect) · Revisión colegiada con Dirección</text>
          
          <!-- Elementos E1, E2, E3, E4 -->
          <rect x="30" y="93" width="415" height="48" rx="4" fill="#ffffff" stroke="#cbd5e1" />
          <text x="40" y="110" font-size="10.5" font-weight="700" fill="#0f172a">Fase 1: Elementos E1 (Objetivo) & E2 (Contexto)</text>
          <text x="40" y="126" font-size="9.5" fill="#475569">DOE-v1 (Objetivos y Precisión Scoring) | DCA-v1 (Presupuesto Cloud y Cuotas API)</text>
          
          <rect x="455" y="93" width="435" height="48" rx="4" fill="#ffffff" stroke="#cbd5e1" />
          <text x="465" y="110" font-size="10.5" font-weight="700" fill="#0f172a">Fase 2: Elementos E3 (Abstracción) & E4 (Glosario)</text>
          <text x="465" y="126" font-size="9.5" fill="#475569">DPV-v1 (Vistas: Funcional Clásica / Kernel Cuántico) | DNA-v1 (Abstracción) | GDA-v1</text>

          <!-- LÍNEA DE FLUJO DE GOBIERNO A EJECUCIÓN -->
          <line x1="460" y1="150" x2="460" y2="168" stroke="#18796e" stroke-width="2" marker-end="url(#arrow)" />

          <!-- NIVEL 2: ECOSISTEMA EMPRESARIAL CLÁSICO AS-IS (ESTRUCTURA E5 BASE) -->
          <rect x="20" y="172" width="415" height="150" rx="5" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5" />
          <rect x="30" y="180" width="260" height="20" rx="3" fill="#475569" />
          <text x="38" y="194" font-size="10.5" font-weight="700" fill="#ffffff">CAPA 2: ECOSISTEMA CLÁSICO EXISTENTE (As-Is)</text>

          <rect x="30" y="206" width="395" height="48" rx="4" fill="#ffffff" stroke="#cbd5e1" />
          <text x="40" y="224" font-size="10.5" font-weight="600" fill="#1e293b">Capa Clásica: Ingesta Serverless & APIs (As-Is)</text>
          <text x="40" y="240" font-size="9.5" fill="#64748b">FastAPI en Cloud Run · Autenticación JWT · Validación de solicitudes</text>

          <rect x="30" y="260" width="395" height="52" rx="4" fill="#ffffff" stroke="#cbd5e1" />
          <text x="40" y="278" font-size="10.5" font-weight="600" fill="#1e293b">Pipeline ETL y Normalización Clásica</text>
          <text x="40" y="296" font-size="9.5" fill="#64748b">Limpieza de datos, escalado MinMax a [0, 2pi], reducción PCA previa</text>

          <!-- CONEXIÓN CLÁSICO A CONECTOR HÍBRIDO -->
          <line x1="435" y1="247" x2="465" y2="247" stroke="#ca8a04" stroke-width="2" marker-end="url(#arrow-gold)" />

          <!-- NIVEL 3: CAPA DE INTEGRACIÓN HÍBRIDA & DESACOPLAMIENTO PDAEH -->
          <rect x="475" y="172" width="425" height="150" rx="5" fill="#fefce8" stroke="#ca8a04" stroke-width="1.5" />
          <rect x="485" y="180" width="320" height="20" rx="3" fill="#ca8a04" />
          <text x="493" y="194" font-size="10.5" font-weight="700" fill="#ffffff">CAPA 3: INTEGRACIÓN HÍBRIDA (Fases 3 y 4 · DCO / DEA)</text>

          <rect x="485" y="206" width="405" height="48" rx="4" fill="#ffffff" stroke="#fde047" />
          <text x="495" y="224" font-size="10.5" font-weight="700" fill="#854d0e">Conector Híbrido Asíncrono (DEA / DCO / CEP)</text>
          <text x="495" y="240" font-size="9.5" fill="#a16207">Cola Celery / Redis Broker · Fallback automático a XGBoost clásico por timeout</text>

          <rect x="485" y="260" width="405" height="52" rx="4" fill="#ffffff" stroke="#fde047" />
          <text x="495" y="278" font-size="10.5" font-weight="700" fill="#854d0e">Codificador de Características Cuánticas (QML)</text>
          <text x="495" y="296" font-size="9.5" fill="#a16207">Transformador a Feature Map ZZ (Espacio de Hilbert de alta dimensionalidad)</text>

          <!-- NIVEL TRANSVERSAL INTERMEDIO: ATRIBUTOS DE CALIDAD (E6), PATRONES (E7/E8), COMPONENTES (E9) Y REUTILIZACIÓN (E10) -->
          <rect x="20" y="332" width="880" height="90" rx="5" fill="#f0f7ff" stroke="#2563eb" stroke-width="1.5" />
          <rect x="30" y="340" width="360" height="20" rx="3" fill="#2563eb" />
          <text x="38" y="354" font-size="10.5" font-weight="700" fill="#ffffff">CAPA TRANSVERSAL: DIMENSIÓN DE CALIDAD & SISTEMATIZACIÓN</text>

          <!-- Caja E6, E7, E8 -->
          <rect x="30" y="366" width="415" height="48" rx="4" fill="#ffffff" stroke="#bfdbfe" />
          <text x="40" y="383" font-size="10.5" font-weight="700" fill="#1e3a8a">Dimensión DCD (Fase 3 & Fase 5): Atributos y Patrones</text>
          <text x="40" y="400" font-size="9.5" fill="#1e40af">E6: MAC (Fidelidad, Costo por llamada, Latencia) · E7/E8: CEP (Broker, Strategy, Adapter)</text>

          <!-- Caja E9, E10 -->
          <rect x="455" y="366" width="435" height="48" rx="4" fill="#ffffff" stroke="#bfdbfe" />
          <text x="465" y="383" font-size="10.5" font-weight="700" fill="#1e3a8a">Fase 4: Catálogo y Reutilización (DEA / DCO / BER)</text>
          <text x="465" y="400" font-size="9.5" fill="#1e40af">E9: Contratos OpenAPI/gRPC para inferencia · E10: Conectores SDK reutilizables en BER</text>

          <!-- CONEXIÓN CONECTOR A INFRAESTRUCTURA CUÁNTICA -->
          <line x1="685" y1="322" x2="685" y2="430" stroke="#18796e" stroke-width="2" stroke-dasharray="4" marker-end="url(#arrow)" />

          <!-- NIVEL 4: CAPA DE ACELERACIÓN CUÁNTICA NISQ (FÍSICA & SIMULADA) -->
          <rect x="20" y="432" width="880" height="98" rx="5" fill="#f9fafb" stroke="#374151" stroke-width="1.5" />
          <rect x="30" y="440" width="290" height="20" rx="3" fill="#374151" />
          <text x="38" y="454" font-size="10.5" font-weight="700" fill="#ffffff">CAPA 4: ACELERACIÓN CUÁNTICA (Era NISQ · E5 / E9)</text>

          <rect x="30" y="466" width="415" height="54" rx="4" fill="#ffffff" stroke="#d1d5db" />
          <text x="40" y="485" font-size="10.5" font-weight="700" fill="#111827">1. Simulación Local NISQ con Ruido (90% cargas)</text>
          <text x="40" y="503" font-size="9.5" fill="#4b5563">PennyLane / Qiskit Aer con emulación de ruido térmico y lectura</text>

          <rect x="455" y="466" width="435" height="54" rx="4" fill="#ffffff" stroke="#d1d5db" />
          <text x="465" y="485" font-size="10.5" font-weight="700" fill="#111827">2. Coprocesador Físico QPU Cloud (Validación)</text>
          <text x="465" y="503" font-size="9.5" fill="#4b5563">IBM Quantum / AWS Braket · Lotes reducidos para cómputo de kernel cuántico</text>

          <!-- NIVEL INFERIOR: GOBERNANZA TRANSVERSAL Y COMPUERTAS OGA (F1 a F5) -->
          <rect x="20" y="540" width="880" height="65" rx="5" fill="#fcf8f2" stroke="#854d0e" stroke-width="1.2" />
          <text x="35" y="560" font-size="10.5" font-weight="700" fill="#854d0e">GOBERNANZA TRANSVERSAL DE LA ARQUITECTURA (Órgano de Gobierno Arquitectónico - OGA)</text>
          <text x="35" y="579" font-size="9.8" fill="#713f12">Compuertas de Control del Gobierno Arquitectónico: OGA-1 (Estratégico) -> OGA-2 (Conceptual) -> OGA-3 (Estructural) -> OGA-4 (Materialización) -> OGA-5 (Sistematización y Cierre)</text>
          <text x="35" y="595" font-size="9" fill="#a16207">Trazabilidad Total: Matriz MTA (Fase 1) -> Modelo MAQ (Fase 3) -> Catálogo CEP y Biblioteca BER (Fase 5) garantizan evolución normada.</text>
        </svg>`;

    } else if (size === "corporacion") {
      scaleLabel = "Gran Empresa o Corporación (> 200 colaboradores)";
      familyTitle = "Simulación Molecular y Materiales (VQE y Algoritmos Variacionales Hamiltonianos)";
      
      algRationale = `
        El caso presentado pertenece a la familia de <strong>Simulación Cuántica de Sistemas Moleculares y Materiales Complejos</strong>. Modelar la estructura electrónica y predecir afinidades moleculares es intratable clásicamente debido al crecimiento exponencial de la función de onda en función del número de electrones. La formulación matemática adecuada corresponde al <strong>Variational Quantum Eigensolver (VQE)</strong> y a algoritmos variacionales hamiltonianos fermiónicos, combinados con técnicas avanzadas de <em>Zero-Noise Extrapolation (ZNE)</em> y mitigación de errores de lectura. La arquitectura integra un clúster de supercomputación clásico (HPC) con coprocesadores cuánticos dedicados de alto rendimiento en un bucle cerrado continuo de recirculación de parámetros cuántico-clásico.
      `;

      architecturalSynthesis = `
        <!-- SECCIÓN 1: RECOMENDACIONES ARQUITECTÓNICAS -->
        <div style="margin:1.4rem 0;">
          <h5 style="margin:0 0 0.6rem;font-size:1.02rem;color:var(--navy);font-weight:700;">1. Recomendaciones Arquitectónicas Estratégicas</h5>
          <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
            <li><strong>Arquitectura HPC Híbrida Co-Diseñada:</strong> Conectar la infraestructura de supercómputo clásica on-premise con las unidades QPU mediante canales de ultra-baja latencia y alto ancho de banda (InfiniBand / RDMA / MPI) para minimizar la sobrecarga en el bucle iterativo variacional.</li>
            <li><strong>Gobernanza Colegiada y Segregación de Responsabilidades:</strong> Institucionalizar el Órgano de Gobierno Arquitectónico (OGA) como un Architecture Review Board (ARB) formal y vinculante, auditando la conformidad criptográfica y el retorno de inversión en cada compuerta.</li>
            <li><strong>Preparación para Criptografía Poscuántica (PQC):</strong> Garantizar que todos los canales de transferencia de fórmulas químicas protegidas por patentes incorporen algoritmos de cifrado resistentes a computación cuántica conforme a los estándares NIST FIPS (ML-KEM y ML-DSA).</li>
          </ul>
        </div>

        <!-- SECCIÓN 2: PATRONES ARQUITECTÓNICOS Y DE DISEÑO -->
        <div style="margin:1.4rem 0;background:#f9fbfa;border:1px solid var(--line);border-radius:5px;padding:1.2rem;">
          <h5 style="margin:0 0 0.6rem;font-size:1.02rem;color:var(--green);font-weight:700;">2. Patrones Arquitectónicos y de Diseño Híbrido Aplicables</h5>
          <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
            <li><strong>Patrón Co-Procesador / Acelerador Cuántico Híbrido:</strong> El clúster clásico actúa como nodo maestro (host), ejecutando la optimización no lineal clásica de gradientes (L-BFGS-B, SPSA), mientras la QPU actúa como dispositivo acelerador exclusivo de cálculo de valores esperados cuánticos.</li>
            <li><strong>Patrón Pipe and Filter Cuántico-Clásico:</strong> Estructura el pipeline de simulación en etapas estrictamente tipadas: (1) Mapeo fermiónico clásico (Jordan-Wigner / Bravyi-Kitaev), (2) Truncamiento y reducción activa de espacio de orbitales, (3) Compilación y transpilación en la QPU, (4) Mitigación de errores ZNE y (5) Re-optimización de gradientes.</li>
            <li><strong>Patrón Observador de Telemetría y Calibración Continua:</strong> Monitorea en tiempo real los niveles de deriva térmica y decoherencia en los cúbits de la QPU física, disparando re-calibraciones automáticas o conmutación dinámica de backend.</li>
            <li><strong>Patrón Circuit Validator y Mitigador de Ruido (Decorator):</strong> Envuelve la ejecución del circuito inyectando factores de escala de ruido para extrapolar el valor esperado a nivel de ruido cero de manera transparente para el modelo de negocio.</li>
          </ul>
        </div>

        <!-- SECCIÓN 3: PRINCIPIOS ARQUITECTÓNICOS -->
        <div style="margin:1.4rem 0;">
          <h5 style="margin:0 0 0.6rem;font-size:1.02rem;color:var(--navy);font-weight:700;">3. Principios Rectores de la Arquitectura</h5>
          <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
            <li><strong>Principio de Localidad de Cómputo Variacional:</strong> El optimizador clásico y el controlador de pulsos de la QPU deben estar físicamente co-localizados o interconectados con latencia inferior a microsegundos para evitar que el tiempo de red domine el costo computacional total.</li>
            <li><strong>Principio de Soberanía y Confidencialidad de la Propiedad Intelectual:</strong> Los datos moleculares y los operadores hamiltonianos constituyen secretos comerciales; ninguna representación descubierta puede almacenarse en repositorios de terceros sin aislamiento criptográfico y acuerdos de gobernanza validados en la compuerta OGA-1.</li>
            <li><strong>Principio de Trazabilidad Integral de Decisión Arquitectónica:</strong> Cada decisión de diseño, selección de optimizador y compromiso entre precisión química y recursos debe estar vinculada en la Matriz de Trazabilidad Cruzada y el Catálogo de Componentes.</li>
          </ul>
        </div>

        <!-- SECCIÓN 4: MODELOS Y TECNOLOGÍAS SUGERIDAS -->
        <div style="margin:1.4rem 0;background:#f8fafc;border:1px solid var(--line);border-radius:5px;padding:1.2rem;">
          <h5 style="margin:0 0 0.6rem;font-size:1.02rem;color:#1e40af;font-weight:700;">4. Modelos Algorítmicos y Tecnologías Recomendadas</h5>
          <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
            <li><strong>Modelos y Algoritmos Cuánticos:</strong> VQE adaptativo (ADAPT-VQE); Ansatzes químicamente inspirados (Unitary Coupled Cluster Singles and Doubles - UCCSD); Mapeo fermiónico Bravyi-Kitaev; Algoritmo de Estimación de Fase Cuántica (QPE) para evaluación a largo plazo.</li>
            <li><strong>SDKs y Plataformas de Simulación Científica:</strong> Qiskit Nature (IBM Quantum); Cirq Chemistry y OpenFermion (Google Quantum AI); CUDA-Q (NVIDIA) para aceleración clásica-cuántica masiva de GPU acoplada a QPU.</li>
            <li><strong>Infraestructura HPC y Orquestación:</strong> Gestor Slurm con particiones híbridas dedicadas; OpenMPI con extensiones cuánticas; Qiskit Runtime Server on-premise o en nube privada dedicada.</li>
            <li><strong>Bibliotecas de Mitigación de Errores:</strong> Mitiq (Unitary Fund) para Zero-Noise Extrapolation (ZNE) y Probabilistic Error Cancellation (PEC).</li>
          </ul>
        </div>

        <!-- SECCIÓN 5: ARQUITECTURAS IMPLEMENTADAS EN EMPRESAS SIMILARES -->
        <div style="margin:1.4rem 0;background:#fefbf3;border-left:4px solid #d4a017;padding:1.2rem;border-radius:4px;">
          <h5 style="margin:0 0 0.5rem;font-size:1.02rem;color:#7f5a00;font-weight:700;">5. Casos de Estudio y Arquitecturas Referenciadas en la Industria Global</h5>
          <p style="margin:0 0 0.7rem;font-size:0.93rem;line-height:1.7;">
            Corporaciones farmacéuticas, químicas y automotrices de escala global han documentado arquitecturas de simulación molecular e investigación de materiales:
          </p>
          <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
            <li><strong>Boeing & BASF en colaboración con Google Quantum AI:</strong> Diseñaron una arquitectura híbrida integrando clústeres HPC basados en MPI con dispositivos cuánticos Sycamore de 69 cúbits para simular modelos de magnetismo físico y catalizadores químicos complejos, utilizando descomposiciones variacionales y mitigación activa de ruido analógico-digital.</li>
            <li><strong>BMW Group & Quantinuum:</strong> Implementaron una arquitectura de simulación de química cuántica orientada a modelar la cinética de reducción de oxígeno en baterías de vehículos eléctricos. Utilizaron un esquema híbrido acoplado con procesadores de iones atrapados (H1-Series) y middleware de computación integrada de Azure Quantum, demostrando la necesidad de compuertas de gobernanza estrictas para validar la fidelidad química frente al método clásico DFT.</li>
            <li><strong>Roche & Cambridge Quantum (Quantinuum):</strong> Desarrollaron un marco arquitectónico para el diseño de fármacos contra la enfermedad de Alzheimer, integrando modelado molecular asistido por grafos de conocimiento clásico y algoritmos VQE acelerados en hardware cuántico heterogéneo.</li>
          </ul>
        </div>
      `;

      qualityRationale = `
        <p style="margin:0 0 0.6rem;">En el entorno corporativo, los atributos de calidad del sistema son estrictos y no negociables:</p>
        <ul style="padding-left:1.3rem;margin:0 0 0.4rem;line-height:1.7;">
          <li><strong>Fidelidad Cuántica y Calibración Continua:</strong> Ejecución de protocolos activos de Zero-Noise Extrapolation para mitigar la decoherencia sin interrumpir flujos por lotes.</li>
          <li><strong>Interoperabilidad de Alta Velocidad (HPC-QPU):</strong> Uso de protocolos de baja latencia (MPI sobre InfiniBand / CUDA-Q) para optimizar la recirculación de parámetros en el bucle cerrado variacional.</li>
          <li><strong>Seguridad y Soberanía Criptográfica:</strong> Cifrado de extremo a extremo de moléculas candidatas y preparación de contratos seguros ante amenazas de criptoanálisis cuántico (estándares NIST PQC).</li>
        </ul>
        <p style="margin:0.4rem 0 0;font-size:0.88rem;color:var(--muted);">Estos atributos se parametrizan cuantitativamente en el artefacto <a href="plantilla.html?id=MAC" style="color:var(--green);font-weight:700;">MAC (Marco de Evaluación de Atributos)</a>.</p>
      `;

      roleNarrative = `
        <p style="margin:0 0 0.6rem;">Dada la madurez y envergadura de la corporación, los roles se despliegan con dedicación formal especializada:</p>
        <ul style="padding-left:1.3rem;margin:0;line-height:1.7;">
          <li><strong>Arquitecto(a) Empresarial del Proceso (AEP):</strong> Autoridad transversal que lidera la gobernanza y asegura la alineación con el mapa de capacidades del negocio.</li>
          <li><strong>Arquitecto(a) de Solución del Proceso (ASP):</strong> Especialista en computación cuántica responsable del diseño de la solución híbrida.</li>
          <li><strong>Arquitecto(a) de Integración del Proceso (AIP):</strong> Equipo dedicado a la orquestación híbrida entre el clúster HPC y los servicios de cómputo cuántico.</li>
          <li><strong>Arquitecto(a) de Datos (ADP) y Seguridad (ASecP):</strong> Unidades formales encargadas del gobierno de datos, telemetría y criptografía poscuántica.</li>
          <li><strong>Órgano de Gobierno Arquitectónico (OGA):</strong> Comité colegiado formal (Architecture Review Board) con capacidad de auditoría y aprobación vinculante.</li>
          <li><strong>Especialista Tecnológico Cuántico (ETC):</strong> Equipo interno de investigación o alianza estratégica permanente con laboratorios tecnológicos.</li>
        </ul>
      `;

      roadmapNarrative = `
        <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
          <li><strong>Fase 1 (Definición estratégica):</strong> Formalización corporativa de objetivos en el <a href="plantilla.html?id=DOE" style="color:var(--green);font-weight:700;">DOE</a> y restricciones regulatorias y de propiedad intelectual en el <a href="plantilla.html?id=DCA" style="color:var(--green);font-weight:700;">DCA</a>. Certificación formal en <strong>Compuerta OGA-1</strong>.</li>
          <li><strong>Fase 2 (Formalización conceptual):</strong> Modelado de vistas conceptuales en el <a href="plantilla.html?id=DPV" style="color:var(--green);font-weight:700;">DPV</a> y partición de niveles en el <a href="plantilla.html?id=DNA" style="color:var(--green);font-weight:700;">DNA</a>. Certificación en <strong>Compuerta OGA-2</strong>.</li>
          <li><strong>Fase 3 (Configuración estructural):</strong> Ponderación de fidelidad cuántica, disponibilidad de infraestructura y escenarios críticos en el <a href="plantilla.html?id=MAC" style="color:var(--green);font-weight:700;">MAC</a>. Aprobación en <strong>Compuerta OGA-3</strong>.</li>
          <li><strong>Fase 4 (Materialización arquitectónica):</strong> Despliegue del conector de integración de alta velocidad en el <a href="plantilla.html?id=DEA" style="color:var(--green);font-weight:700;">DEA</a> y contratos gRPC/MPI en el <a href="plantilla.html?id=DCO" style="color:var(--green);font-weight:700;">DCO</a>. Validación en <strong>Compuerta OGA-4</strong>.</li>
          <li><strong>Fase 5 (Sistematización del diseño):</strong> Institucionalización del Catálogo corporativo de Estilos y Patrones (<a href="plantilla.html?id=CEP" style="color:var(--green);font-weight:700;">CEP</a>) y registro en la Biblioteca de Elementos Reutilizables (<a href="plantilla.html?id=BER" style="color:var(--green);font-weight:700;">BER</a>). Aprobación definitiva en <strong>Compuerta OGA-5</strong>.</li>
        </ul>
      `;

      immediateAction = `Iniciar formalmente los talleres de trabajo interdisciplinario para completar el <a href="plantilla.html?id=DOE" style="color:var(--green);font-weight:700;">Documento de Objetivos Estratégicos (DOE)</a> y presentar ante el comité OGA-1 las restricciones de seguridad y licenciamiento de la infraestructura cuántica.`;

      diagramSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 620" width="100%" height="auto" style="background:#ffffff;border:1px solid var(--line);border-radius:6px;font-family:system-ui,-apple-system,sans-serif;margin:1rem 0;box-shadow:0 1px 3px rgba(0,0,0,0.03);">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#18796e" />
            </marker>
            <marker id="arrow-gold" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#ca8a04" />
            </marker>
            <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#2563eb" />
            </marker>
          </defs>

          <!-- ENCABEZADO SUPERIOR DEL DIAGRAMA -->
          <rect x="20" y="15" width="880" height="34" rx="4" fill="#0f2e2b" />
          <text x="35" y="37" font-size="12" font-weight="700" fill="#ffffff" letter-spacing="0.05em">ARQUITECTURA EMPRESARIAL HÍBRIDA PRELIMINAR (PDAEH) · GRAN EMPRESA / CORPORACIÓN: QUÍMICA CUÁNTICA & HPC HÍBRIDO CO-DISEÑADO</text>

          <!-- NIVEL 1: GOBERNANZA, ESTRATEGIA Y CONCEPTUALIZACIÓN (FASE 1 Y FASE 2) -->
          <rect x="20" y="58" width="880" height="92" rx="5" fill="#f2f7f4" stroke="#18796e" stroke-width="1.5" />
          <rect x="30" y="66" width="310" height="22" rx="3" fill="#18796e" />
          <text x="38" y="81" font-size="11" font-weight="700" fill="#ffffff">CAPA 1: GOBIERNO, ESTRATEGIA & CONCEPTUALIZACIÓN</text>
          <text x="350" y="81" font-size="10.5" font-weight="600" fill="#123b43">Roles: AEP + ASP + AIP + ADP + ASecP + GPA + SE dedicados · ARB (Architecture Review Board formal)</text>
          
          <!-- Elementos E1, E2, E3, E4 -->
          <rect x="30" y="93" width="415" height="48" rx="4" fill="#ffffff" stroke="#cbd5e1" />
          <text x="40" y="110" font-size="10.5" font-weight="700" fill="#0f172a">Fase 1: Elementos E1 (Objetivo) & E2 (Contexto)</text>
          <text x="40" y="126" font-size="9.5" fill="#475569">DOE-v1 (Afinidad Molecular y ROI) | DCA-v1 (Soberanía y Compliance) | MSP-v1</text>
          
          <rect x="455" y="93" width="435" height="48" rx="4" fill="#ffffff" stroke="#cbd5e1" />
          <text x="465" y="110" font-size="10.5" font-weight="700" fill="#0f172a">Fase 2: Elementos E3 (Abstracción) & E4 (Glosario)</text>
          <text x="465" y="126" font-size="9.5" fill="#475569">DPV-v1 (Vistas HPC/QPU) | DNA-v1 (Abstracción en capas) | GDA-v1 (Léxico Cuántico)</text>

          <!-- LÍNEA DE FLUJO DE GOBIERNO A EJECUCIÓN -->
          <line x1="460" y1="150" x2="460" y2="168" stroke="#18796e" stroke-width="2" marker-end="url(#arrow)" />

          <!-- NIVEL 2: ECOSISTEMA EMPRESARIAL CLÁSICO AS-IS (ESTRUCTURA E5 BASE) -->
          <rect x="20" y="172" width="415" height="150" rx="5" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5" />
          <rect x="30" y="180" width="260" height="20" rx="3" fill="#475569" />
          <text x="38" y="194" font-size="10.5" font-weight="700" fill="#ffffff">CAPA 2: ECOSISTEMA CLÁSICO EXISTENTE (As-Is)</text>

          <rect x="30" y="206" width="395" height="48" rx="4" fill="#ffffff" stroke="#cbd5e1" />
          <text x="40" y="224" font-size="10.5" font-weight="600" fill="#1e293b">Clúster HPC Corporativo: Gestor Slurm & MPI (As-Is)</text>
          <text x="40" y="240" font-size="9.5" fill="#64748b">Jobs paralelos de memoria compartida · Orquestación masiva distribuida</text>

          <rect x="30" y="260" width="395" height="52" rx="4" fill="#ffffff" stroke="#cbd5e1" />
          <text x="40" y="278" font-size="10.5" font-weight="600" fill="#1e293b">Optimizador Clásico de Gradientes Químicos</text>
          <text x="40" y="296" font-size="9.5" fill="#64748b">Algoritmos COBYLA / SPSA / L-BFGS-B ejecutados en nodos de alta frecuencia</text>

          <!-- CONEXIÓN CLÁSICO A CONECTOR HÍBRIDO -->
          <line x1="435" y1="247" x2="465" y2="247" stroke="#ca8a04" stroke-width="2" marker-end="url(#arrow-gold)" />

          <!-- NIVEL 3: CAPA DE INTEGRACIÓN HÍBRIDA & DESACOPLAMIENTO PDAEH -->
          <rect x="475" y="172" width="425" height="150" rx="5" fill="#fefce8" stroke="#ca8a04" stroke-width="1.5" />
          <rect x="485" y="180" width="320" height="20" rx="3" fill="#ca8a04" />
          <text x="493" y="194" font-size="10.5" font-weight="700" fill="#ffffff">CAPA 3: INTEGRACIÓN HÍBRIDA (Fases 3 y 4 · DCO / DEA)</text>

          <rect x="485" y="206" width="405" height="48" rx="4" fill="#ffffff" stroke="#fde047" />
          <text x="495" y="224" font-size="10.5" font-weight="700" fill="#854d0e">Bus de Integración Híbrida HPC-QPU (DEA / DCO)</text>
          <text x="495" y="240" font-size="9.5" fill="#a16207">Canales de latencia sub-microsegundo (CUDA-Q / MPI) con cifrado poscuántico ML-KEM</text>

          <rect x="485" y="260" width="405" height="52" rx="4" fill="#ffffff" stroke="#fde047" />
          <text x="495" y="278" font-size="10.5" font-weight="700" fill="#854d0e">Compilador VQE y Mitigador de Ruido Activo</text>
          <text x="495" y="296" font-size="9.5" fill="#a16207">Mapeo fermiónico Bravyi-Kitaev · Zero-Noise Extrapolation (ZNE / Mitiq)</text>

          <!-- NIVEL TRANSVERSAL INTERMEDIO: ATRIBUTOS DE CALIDAD (E6), PATRONES (E7/E8), COMPONENTES (E9) Y REUTILIZACIÓN (E10) -->
          <rect x="20" y="332" width="880" height="90" rx="5" fill="#f0f7ff" stroke="#2563eb" stroke-width="1.5" />
          <rect x="30" y="340" width="360" height="20" rx="3" fill="#2563eb" />
          <text x="38" y="354" font-size="10.5" font-weight="700" fill="#ffffff">CAPA TRANSVERSAL: DIMENSIÓN DE CALIDAD & SISTEMATIZACIÓN</text>

          <!-- Caja E6, E7, E8 -->
          <rect x="30" y="366" width="415" height="48" rx="4" fill="#ffffff" stroke="#bfdbfe" />
          <text x="40" y="383" font-size="10.5" font-weight="700" fill="#1e3a8a">Dimensión DCD (Fase 3 & Fase 5): Atributos y Patrones</text>
          <text x="40" y="400" font-size="9.5" fill="#1e40af">E6: MAC (Fidelidad ZNE, Latencia RDMA, PQC) · E7/E8: CEP (Co-Procesador, Pipe & Filter)</text>

          <!-- Caja E9, E10 -->
          <rect x="455" y="366" width="435" height="48" rx="4" fill="#ffffff" stroke="#bfdbfe" />
          <text x="465" y="383" font-size="10.5" font-weight="700" fill="#1e3a8a">Fase 4: Catálogo y Reutilización (DEA / DCO / BER)</text>
          <text x="465" y="400" font-size="9.5" fill="#1e40af">E9: Componentes estructurales de simulación molecular · E10: Microservicios en BER corporativa</text>

          <!-- CONEXIÓN CONECTOR A INFRAESTRUCTURA CUÁNTICA -->
          <line x1="685" y1="322" x2="685" y2="430" stroke="#18796e" stroke-width="2" stroke-dasharray="4" marker-end="url(#arrow)" />

          <!-- NIVEL 4: CAPA DE ACELERACIÓN CUÁNTICA NISQ (FÍSICA & SIMULADA) -->
          <rect x="20" y="432" width="880" height="98" rx="5" fill="#f9fafb" stroke="#374151" stroke-width="1.5" />
          <rect x="30" y="440" width="290" height="20" rx="3" fill="#374151" />
          <text x="38" y="454" font-size="10.5" font-weight="700" fill="#ffffff">CAPA 4: ACELERACIÓN CUÁNTICA (Era NISQ · E5 / E9)</text>

          <rect x="30" y="466" width="415" height="54" rx="4" fill="#ffffff" stroke="#d1d5db" />
          <text x="40" y="485" font-size="10.5" font-weight="700" fill="#111827">1. Simulador Cuántico GPU Masivo (CUDA-Q)</text>
          <text x="40" y="503" font-size="9.5" fill="#4b5563">Validación de circuitos hamiltonianos de hasta 40 cúbits con emulación sin pérdidas</text>

          <rect x="455" y="466" width="435" height="54" rx="4" fill="#ffffff" stroke="#d1d5db" />
          <text x="465" y="485" font-size="10.5" font-weight="700" fill="#111827">2. QPU Física Dedicada (Superconductora / Trampas de Iones)</text>
          <text x="465" y="503" font-size="9.5" fill="#4b5563">Hardware cuántico comercial (IBM Quantum / Quantinuum / Google Quantum AI)</text>

          <!-- NIVEL INFERIOR: GOBERNANZA TRANSVERSAL Y COMPUERTAS OGA (F1 a F5) -->
          <rect x="20" y="540" width="880" height="65" rx="5" fill="#fcf8f2" stroke="#854d0e" stroke-width="1.2" />
          <text x="35" y="560" font-size="10.5" font-weight="700" fill="#854d0e">GOBERNANZA TRANSVERSAL DE LA ARQUITECTURA (Órgano de Gobierno Arquitectónico - OGA)</text>
          <text x="35" y="579" font-size="9.8" fill="#713f12">Compuertas Colegiadas Vinculantes: OGA-1 (Aprobación Estratégica) -> OGA-2 (Aval Conceptual) -> OGA-3 (Aval Estructural) -> OGA-4 (Línea Base Materializada) -> OGA-5 (Certificación y Cierre)</text>
          <text x="35" y="595" font-size="9" fill="#a16207">Trazabilidad Total: Matriz MTA (Fase 1) -> Modelo MAQ (Fase 3) -> Catálogo CEP y Biblioteca BER (Fase 5) garantizan evolución normada.</text>
        </svg>`;

    } else {
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

      diagramSvg = `<svg width="100%" height="auto" viewBox="0 0 1800 1204" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" font-family="system-ui,-apple-system,sans-serif" overflow="hidden"><rect x="0" y="0" rx="0" width="1800" height="1204" stroke="none" stroke-width="1.6" fill="#FFFFFF"/><rect x="20" y="16" rx="0" width="440" height="360" stroke="none" stroke-width="1.6" fill="#EEF5FC"/><path d="M20 68 20 30C20 20.6667 24.6667 16 34 16L446 16C455.333 16 460 20.6667 460 30L460 68Z" fill="#CFE3F7"/><rect x="20" y="16" rx="14" width="440" height="360" stroke="#A8C8EA" stroke-width="1.8" fill="none"/><text fill="#1B2B48" font-style="normal" font-weight="700" font-size="27" text-anchor="start" x="40" y="52">1. Organization and Context</text><rect x="516" y="16" rx="0" width="460" height="360" stroke="none" stroke-width="1.6" fill="#F1F9F2"/><path d="M516 68 516 30C516 20.6667 520.667 16 530 16L962 16C971.333 16 976 20.6667 976 30L976 68Z" fill="#CFE8D3"/><rect x="516" y="16" rx="14" width="460" height="360" stroke="#9AD1A8" stroke-width="1.8" fill="none"/><text fill="#1B2B48" font-style="normal" font-weight="700" font-size="27" text-anchor="start" x="536" y="52">2. Business Need</text><rect x="1032" y="16" rx="0" width="748" height="360" stroke="none" stroke-width="1.6" fill="#F6F2FD"/><path d="M1032 68 1032 30C1032 20.6667 1036.67 16 1046 16L1766 16C1775.33 16 1780 20.6667 1780 30L1780 68Z" fill="#DCD0F4"/><rect x="1032" y="16" rx="14" width="748" height="360" stroke="#BBA8E6" stroke-width="1.8" fill="none"/><text fill="#1B2B48" font-style="normal" font-weight="700" font-size="27" text-anchor="start" x="1052" y="52">3. Target Vision: Hybrid Architecture</text><path d="M466 180.4 482.8 180.4 482.8 169.6 504.4 196 482.8 222.4 482.8 211.6 466 211.6Z" fill="#8A8F98"/><path d="M982 180.4 998.8 180.4 998.8 169.6 1020.4 196 998.8 222.4 998.8 211.6 982 211.6Z" fill="#8A8F98"/><g transform="matrix(1.75 0 0 1.75 98 126)"><g fill="#1B2B48"><path d="M-30-13 0-33 30-13Z"/><rect x="-30" y="-10" width="60" height="5"/><rect x="-24" y="-3" width="9" height="24"/><rect x="-4.5" y="-3" width="9" height="24"/><rect x="15" y="-3" width="9" height="24"/><rect x="-32" y="22" width="64" height="5"/><rect x="-28" y="29" width="56" height="4"/></g><circle cx="0" cy="-17" r="3" fill="#FFFFFF"/></g><text fill="#1B2B48" font-style="normal" font-weight="700" font-size="48" text-anchor="start" x="170" y="130">FinNova</text><text fill="#3A4560" font-style="normal" font-weight="400" font-size="20" text-anchor="start" x="170" y="160">Mid-sized financial-services</text><text fill="#3A4560" font-style="normal" font-weight="400" font-size="20" text-anchor="start" x="170" y="183">firm (SME)</text><rect x="36" y="198" rx="10" width="408" height="170" stroke="#C9DAEC" stroke-width="1.4" fill="#E6EFF8"/><circle cx="54" cy="220" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18.5" text-anchor="start" x="66" y="226">Investment-management and</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18.5" text-anchor="start" x="66" y="248">portfolio-analysis services</text><circle cx="54" cy="272" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18.5" text-anchor="start" x="66" y="278">Established classical risk-analytics</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18.5" text-anchor="start" x="66" y="300">platform</text><circle cx="54" cy="324" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18.5" text-anchor="start" x="66" y="330">Clients: institutional and professional</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18.5" text-anchor="start" x="66" y="352">investors</text><g transform="matrix(1.25 0 0 1.25 578 118)"><g fill="#14442F"><rect x="-22" y="8" rx="2" width="9" height="14"/><rect x="-9" y="-2" rx="2" width="9" height="24"/><rect x="4" y="-14" rx="2" width="9" height="36"/><rect x="17" y="-26" rx="2" width="9" height="48"/></g></g><text fill="#1B2B48" font-style="normal" font-weight="700" font-size="26" text-anchor="start" x="634" y="126">Computational challenge</text><circle cx="546" cy="190" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="20.5" text-anchor="start" x="560" y="196">Portfolio rebalancing becomes</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="20.5" text-anchor="start" x="560" y="220">increasingly demanding as the number</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="20.5" text-anchor="start" x="560" y="244">of assets and constraints grows.</text><circle cx="546" cy="272" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="20.5" text-anchor="start" x="560" y="278">Explore a quantum-assisted</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="20.5" text-anchor="start" x="560" y="302">optimization capability.</text><circle cx="546" cy="330" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="20.5" text-anchor="start" x="560" y="336">Complement the existing classical</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="20.5" text-anchor="start" x="560" y="360">platform (not a replacement).</text><rect x="1046" y="76" rx="8" width="190" height="48" stroke="#A9CBD9" stroke-width="1.5" fill="#E6F2F8"/><g transform="matrix(0.74 0 0 0.74 1072 100)"><g stroke="#2F5F8F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><ellipse cx="0" cy="-10" rx="12" ry="5"/><path d="M-12-10-12 10C-12 12.7614-6.62742 15 1.21758e-16 15 6.62742 15 12 12.7614 12 10L12-10M-12 0C-12 2.76142-6.62742 5 1.21758e-16 5 6.62742 5 12 2.76142 12 -5.07327e-17"/></g></g><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="16.5" text-anchor="start" x="1096" y="97">Market Data</text><text fill="#3A4560" font-style="normal" font-weight="400" font-size="15.5" text-anchor="start" x="1096" y="116">Services</text><rect x="1046" y="132" rx="8" width="190" height="48" stroke="#A9CBD9" stroke-width="1.5" fill="#E6F2F8"/><g transform="matrix(0.74 0 0 0.74 1072 156)"><g fill="#2F5F8F"><rect x="-13" y="2" rx="1" width="6" height="14"/><rect x="-3" y="-6" rx="1" width="6" height="22"/><rect x="7" y="-15" rx="1" width="6" height="31"/></g></g><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="16.5" text-anchor="start" x="1096" y="162">Portfolio Services</text><rect x="1046" y="188" rx="8" width="190" height="48" stroke="#A9CBD9" stroke-width="1.5" fill="#E6F2F8"/><g transform="matrix(0.74 0 0 0.74 1072 212)"><circle cx="0" cy="0" r="11.05" stroke="#2F5F8F" stroke-width="5.85" stroke-dasharray="4.34 4.34" fill="none"/><circle cx="0" cy="0" r="8.84" fill="#2F5F8F"/><circle cx="0" cy="0" r="3.64" fill="#FFFFFF"/></g><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="16.5" text-anchor="start" x="1096" y="209">Risk &amp; Analytics</text><text fill="#3A4560" font-style="normal" font-weight="400" font-size="15.5" text-anchor="start" x="1096" y="228">(Existing)</text><rect x="1046" y="244" rx="8" width="190" height="48" stroke="#A9CBD9" stroke-width="1.5" fill="#E6F2F8"/><g transform="matrix(0.74 0 0 0.74 1072 268)"><g stroke="#2F5F8F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M0-17 13-11 13 3C13 9.66667 8.66667 14.6667 0 18-8.66667 14.6667-13 9.66667-13 3L-13-11Z"/><path d="M0-17 0 18"/></g></g><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="16.5" text-anchor="start" x="1096" y="265">Compliance</text><text fill="#3A4560" font-style="normal" font-weight="400" font-size="15.5" text-anchor="start" x="1096" y="284">Services</text><rect x="1046" y="300" rx="8" width="190" height="48" stroke="#A9CBD9" stroke-width="1.5" fill="#E6F2F8"/><g transform="matrix(0.74 0 0 0.74 1072 324)"><g stroke="#2F5F8F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M-11-17 3-17 12-8 12 17-11 17Z"/><path d="M3-17 3-8 12-8"/><path d="M-5 0 6 0M-5 6 6 6M-5 12 1 12"/></g></g><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="16.5" text-anchor="start" x="1096" y="330">Reporting Services</text><line x1="1258" y1="100" x2="1258" y2="324" stroke="#4F6F92" stroke-width="2.4"/><line x1="1237" y1="100" x2="1258" y2="100" stroke="#4F6F92" stroke-width="2.4"/><path d="M1246 95 1246 105 1237 100Z" fill="#4F6F92"/><line x1="1237" y1="156" x2="1258" y2="156" stroke="#4F6F92" stroke-width="2.4"/><path d="M1246 151 1246 161 1237 156Z" fill="#4F6F92"/><line x1="1237" y1="212" x2="1258" y2="212" stroke="#4F6F92" stroke-width="2.4"/><path d="M1246 207 1246 217 1237 212Z" fill="#4F6F92"/><line x1="1237" y1="268" x2="1258" y2="268" stroke="#4F6F92" stroke-width="2.4"/><path d="M1246 263 1246 273 1237 268Z" fill="#4F6F92"/><line x1="1237" y1="324" x2="1258" y2="324" stroke="#4F6F92" stroke-width="2.4"/><path d="M1246 319 1246 329 1237 324Z" fill="#4F6F92"/><line x1="1258" y1="211" x2="1276" y2="211" stroke="#4F6F92" stroke-width="2.4"/><path d="M1267 206 1267 216 1276 211Z" fill="#4F6F92"/><rect x="1278" y="116" rx="12" width="140" height="190" stroke="#6FA8DC" stroke-width="2" fill="#C3DEF7"/><g transform="translate(1348 152)"><g fill="#1B2B48"><rect x="-17" y="-20" rx="3" width="34" height="11"/><rect x="-17" y="-5" rx="3" width="34" height="11"/><rect x="-17" y="10" rx="3" width="34" height="11"/></g><g fill="#FFFFFF"><circle cx="-10" cy="-14.5" r="2"/><circle cx="-10" cy="0.5" r="2"/><circle cx="-10" cy="15.5" r="2"/><rect x="2" y="-15.5" width="11" height="2.2"/><rect x="2" y="-0.5" width="11" height="2.2"/><rect x="2" y="14.5" width="11" height="2.2"/></g></g><text fill="#1B2B48" font-style="normal" font-weight="700" font-size="22" text-anchor="middle" x="1348" y="204">Classical</text><text fill="#1B2B48" font-style="normal" font-weight="700" font-size="22" text-anchor="middle" x="1348" y="228">Analytics</text><text fill="#1B2B48" font-style="normal" font-weight="700" font-size="22" text-anchor="middle" x="1348" y="252">Platform</text><text fill="#3A4560" font-style="normal" font-weight="400" font-size="17" text-anchor="middle" x="1348" y="288">(Existing)</text><line x1="1429" y1="211" x2="1453" y2="211" stroke="#4F6F92" stroke-width="2.6"/><path d="M1433 205 1433 217 1421 211Z" fill="#4F6F92"/><path d="M1449 205 1449 217 1461 211Z" fill="#4F6F92"/><rect x="1464" y="144" rx="10" width="120" height="134" stroke="#B5A0E4" stroke-width="2" fill="#E4D9F8"/><g transform="translate(1524 176)"><g stroke="#1B2B48" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M0-4-13 11M0-4 13 11M-13 11 13 11M0-4 0-14"/></g><g stroke="#1B2B48" stroke-width="3" fill="#FFFFFF"><circle cx="0" cy="-3" r="5"/><circle cx="0" cy="-15" r="3.5"/><circle cx="-13" cy="12" r="4.5"/><circle cx="13" cy="12" r="4.5"/></g></g><text fill="#1B2B48" font-style="normal" font-weight="700" font-size="19.5" text-anchor="middle" x="1524" y="216">Quantum</text><text fill="#1B2B48" font-style="normal" font-weight="700" font-size="19.5" text-anchor="middle" x="1524" y="237">Integration</text><text fill="#1B2B48" font-style="normal" font-weight="700" font-size="19.5" text-anchor="middle" x="1524" y="258">Layer</text><line x1="1595" y1="211" x2="1621" y2="211" stroke="#4F6F92" stroke-width="2.6"/><path d="M1599 205 1599 217 1587 211Z" fill="#4F6F92"/><path d="M1617 205 1617 217 1629 211Z" fill="#4F6F92"/><g transform="matrix(0.92 0 0 0.92 1700 189)"><path d="M-52 26C-66.6667 26-74 18.6667-74 4-74-8.66667-66.6667-16-52-18-49.3333-35.3333-38.6667-44.3333-20-45-8-51 4-49.3333 16-40 34.6667-42.6667 46-35.3333 50-18 66-15.3333 74-7.33333 74 6 74 19.3333 66 26 50 26Z" stroke="#2F6DB5" stroke-width="3" fill="#F0F8FE"/></g><g transform="matrix(0.95 0 0 0.95 1700 185)"><g stroke="#2F6DB5" stroke-width="2.6" fill="none"><ellipse cx="0" cy="0" rx="22" ry="8.5"/><ellipse cx="0" cy="0" rx="22" ry="8.5" transform="matrix(0.5 0.866025 -0.866025 0.5 0 0)"/><ellipse cx="0" cy="0" rx="22" ry="8.5" transform="matrix(0.5 -0.866025 0.866025 0.5 0 0)"/></g><circle cx="0" cy="0" r="4" fill="#2F6DB5"/></g><text fill="#1B2B48" font-style="normal" font-weight="700" font-size="19" text-anchor="middle" x="1700" y="251">External</text><text fill="#1B2B48" font-style="normal" font-weight="700" font-size="19" text-anchor="middle" x="1700" y="273">Quantum Service</text><text fill="#3A4560" font-style="normal" font-weight="400" font-size="16.5" text-anchor="middle" x="1700" y="293">(provider-agnostic)</text><path d="M1524 278 1524 336 1348 336 1348 320" stroke="#4F6F92" stroke-width="2.4" stroke-dasharray="6 5" fill="none"/><path d="M1342 320 1354 320 1348 308Z" fill="#4F6F92"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="middle" x="1436" y="360">Results (optimized solutions)</text><rect x="20" y="402" rx="0" width="1760" height="556" stroke="none" stroke-width="1.6" fill="#F1F6FB"/><path d="M20 450 20 416C20 406.667 24.6667 402 34 402L1766 402C1775.33 402 1780 406.667 1780 416L1780 450Z" fill="#D5E3F1"/><rect x="20" y="402" rx="14" width="1760" height="556" stroke="#BFD0E6" stroke-width="1.8" fill="none"/><text fill="#1B2B48" font-style="normal" font-weight="700" font-size="27" text-anchor="start" x="40" y="436">4. Application of PDAEH (Five Phases)</text><rect x="36" y="466" rx="12" width="313.6" height="476" stroke="#9ECAEF" stroke-width="1.8" fill="#F2F9FE"/><path d="M36 548 36 478C36 470 40 466 48 466L337.6 466C345.6 466 349.6 470 349.6 478L349.6 548Z" fill="#CDE6FA"/><rect x="36" y="466" rx="12" width="313.6" height="476" stroke="#9ECAEF" stroke-width="1.8" fill="none"/><g transform="matrix(1.35 0 0 1.35 76 504)"><g stroke="#1B2B48" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><circle cx="0" cy="0" r="15"/><circle cx="0" cy="0" r="8"/><path d="M2-2 17-17M12-19 12-12 19-12"/></g><circle cx="0" cy="0" r="3" fill="#1B2B48"/></g><text fill="#1B2B48" font-style="normal" font-weight="700" font-size="25" text-anchor="start" x="116" y="498">Phase 1</text><text fill="#1B2B48" font-style="normal" font-weight="700" font-size="17.5" text-anchor="start" x="116" y="522">Strategic Definition</text><circle cx="56" cy="572" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="68" y="578">Analyze organizational context</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="68" y="599.5">and drivers</text><circle cx="56" cy="622" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="68" y="628">Identify and engage stakeholders</text><circle cx="56" cy="650.5" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="68" y="656.5">Define scope, objectives,</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="68" y="678">and constraints</text><circle cx="56" cy="700.5" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="68" y="706.5">Align with business and</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="68" y="728">regulatory requirements</text><circle cx="56" cy="750.5" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="68" y="756.5">Submit artifacts to OGA</text><rect x="50" y="846" rx="10" width="285.6" height="82" stroke="none" stroke-width="1.6" fill="#CBE4F7"/><text fill="#1B2B48" font-style="normal" font-weight="700" font-size="18" text-anchor="middle" x="192.8" y="872">Key output:</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="17.5" text-anchor="middle" x="192.8" y="895">Strategic architecture definition</text><path d="M353.6 692.3 366.2 692.3 366.2 684.2 382.4 704 366.2 723.8 366.2 715.7 353.6 715.7Z" fill="#8A8F98"/><rect x="389.6" y="466" rx="12" width="313.6" height="476" stroke="#93CFA4" stroke-width="1.8" fill="#F3FAF4"/><path d="M389.6 548 389.6 478C389.6 470 393.6 466 401.6 466L691.2 466C699.2 466 703.2 470 703.2 478L703.2 548Z" fill="#CDEBD4"/><rect x="389.6" y="466" rx="12" width="313.6" height="476" stroke="#93CFA4" stroke-width="1.8" fill="none"/><g transform="matrix(1.35 0 0 1.35 429.6 504)"><g stroke="#1B2B48" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M-11-17 3-17 12-8 12 17-11 17Z"/><path d="M3-17 3-8 12-8"/><path d="M-5 0 6 0M-5 6 6 6M-5 12 1 12"/></g></g><text fill="#1B2B48" font-style="normal" font-weight="700" font-size="25" text-anchor="start" x="469.6" y="498">Phase 2</text><text fill="#1B2B48" font-style="normal" font-weight="700" font-size="17.5" text-anchor="start" x="469.6" y="522">Conceptual Foundations</text><circle cx="409.6" cy="572" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="421.6" y="578">Define abstraction degree</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="421.6" y="599.5">and viewpoints</text><circle cx="409.6" cy="622" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="421.6" y="628">Establish architectural perspectives</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="421.6" y="649.5">(business, data, application,</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="421.6" y="671">technology, security)</text><circle cx="409.6" cy="693.5" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="421.6" y="699.5">Build and validate unified</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="421.6" y="721">vocabulary</text><circle cx="409.6" cy="743.5" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="421.6" y="749.5">Create glossary of terms</text><circle cx="409.6" cy="772" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="421.6" y="778">Submit artifacts to OGA</text><rect x="403.6" y="846" rx="10" width="285.6" height="82" stroke="none" stroke-width="1.6" fill="#CBE8D2"/><text fill="#1B2B48" font-style="normal" font-weight="700" font-size="18" text-anchor="middle" x="546.4" y="872">Key output:</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="17.5" text-anchor="middle" x="546.4" y="895">Conceptual architecture model</text><path d="M707.2 692.3 719.8 692.3 719.8 684.2 736 704 719.8 723.8 719.8 715.7 707.2 715.7Z" fill="#8A8F98"/><rect x="743.2" y="466" rx="12" width="313.6" height="476" stroke="#EBC36E" stroke-width="1.8" fill="#FFF9EC"/><path d="M743.2 548 743.2 478C743.2 470 747.2 466 755.2 466L1044.8 466C1052.8 466 1056.8 470 1056.8 478L1056.8 548Z" fill="#FBE2B0"/><rect x="743.2" y="466" rx="12" width="313.6" height="476" stroke="#EBC36E" stroke-width="1.8" fill="none"/><g transform="matrix(1.35 0 0 1.35 783.2 504)"><g stroke="#1B2B48" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M0-8 0 0M-13 0 13 0M-13 0-13 6M13 0 13 6M0 0 0 6"/></g><g fill="#1B2B48"><rect x="-7" y="-18" rx="1.5" width="14" height="10"/><rect x="-19" y="6" rx="1.5" width="12" height="10"/><rect x="-6" y="6" rx="1.5" width="12" height="10"/><rect x="7" y="6" rx="1.5" width="12" height="10"/></g></g><text fill="#1B2B48" font-style="normal" font-weight="700" font-size="25" text-anchor="start" x="823.2" y="498">Phase 3</text><text fill="#1B2B48" font-style="normal" font-weight="700" font-size="17.5" text-anchor="start" x="823.2" y="518">Structures and Quality</text><text fill="#1B2B48" font-style="normal" font-weight="700" font-size="17.5" text-anchor="start" x="823.2" y="537">Attributes</text><circle cx="763.2" cy="572" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="775.2" y="578">Define architecture drivers</text><circle cx="763.2" cy="600.5" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="775.2" y="606.5">Specify quality attributes</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="775.2" y="628">(cross-cutting, integration,</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="775.2" y="649.5">security)</text><circle cx="763.2" cy="672" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="775.2" y="678">Define architectural structures</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="775.2" y="699.5">(cross-cutting, integration, data,</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="775.2" y="721">security)</text><circle cx="763.2" cy="743.5" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="775.2" y="749.5">Consolidate attribute and</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="775.2" y="771">structural models</text><circle cx="763.2" cy="793.5" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="775.2" y="799.5">Submit artifacts to OGA</text><rect x="757.2" y="846" rx="10" width="285.6" height="82" stroke="none" stroke-width="1.6" fill="#FBE0AE"/><text fill="#1B2B48" font-style="normal" font-weight="700" font-size="18" text-anchor="middle" x="900" y="872">Key output:</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="17.5" text-anchor="middle" x="900" y="895">Validated architecture structure</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="17.5" text-anchor="middle" x="900" y="916">and quality model</text><path d="M1060.8 692.3 1073.4 692.3 1073.4 684.2 1089.6 704 1073.4 723.8 1073.4 715.7 1060.8 715.7Z" fill="#8A8F98"/><rect x="1096.8" y="466" rx="12" width="313.6" height="476" stroke="#EE9AA2" stroke-width="1.8" fill="#FFF4F4"/><path d="M1096.8 548 1096.8 478C1096.8 470 1100.8 466 1108.8 466L1398.4 466C1406.4 466 1410.4 470 1410.4 478L1410.4 548Z" fill="#F9C9CD"/><rect x="1096.8" y="466" rx="12" width="313.6" height="476" stroke="#EE9AA2" stroke-width="1.8" fill="none"/><g transform="matrix(1.35 0 0 1.35 1136.8 504)"><path d="M0-19 8.7-14 8.7-4 0 1-8.7-4-8.7-14Z" stroke="#FFFFFF" stroke-width="1.2" fill="#1B2B48"/><path d="M-8.7-14 0-9 8.7-14M0-9 0 1" stroke="#FFFFFF" stroke-width="1.8" fill="none"/><path d="M-10-2-1.3 3-1.3 13-10 18-18.7 13-18.7 3Z" stroke="#FFFFFF" stroke-width="1.2" fill="#1B2B48"/><path d="M-18.7 3-10 8-1.3 3M-10 8-10 18" stroke="#FFFFFF" stroke-width="1.8" fill="none"/><path d="M10-2 18.7 3 18.7 13 10 18 1.3 13 1.3 3Z" stroke="#FFFFFF" stroke-width="1.2" fill="#1B2B48"/><path d="M1.3 3 10 8 18.7 3M10 8 10 18" stroke="#FFFFFF" stroke-width="1.8" fill="none"/></g><text fill="#1B2B48" font-style="normal" font-weight="700" font-size="25" text-anchor="start" x="1176.8" y="498">Phase 4</text><text fill="#1B2B48" font-style="normal" font-weight="700" font-size="17.5" text-anchor="start" x="1176.8" y="522">Components and Reuse</text><circle cx="1116.8" cy="572" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="1128.8" y="578">Define component framework</text><circle cx="1116.8" cy="600.5" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="1128.8" y="606.5">Specify components (cross-cutting,</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="1128.8" y="628">integration, data, security)</text><circle cx="1116.8" cy="650.5" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="1128.8" y="656.5">Identify classical and quantum</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="1128.8" y="678">components</text><circle cx="1116.8" cy="700.5" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="1128.8" y="706.5">Define reusable elements</text><circle cx="1116.8" cy="729" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="1128.8" y="735">Build reusable-element library</text><circle cx="1116.8" cy="757.5" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="1128.8" y="763.5">Consolidate catalogs</text><circle cx="1116.8" cy="786" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="1128.8" y="792">Submit artifacts to OGA</text><rect x="1110.8" y="846" rx="10" width="285.6" height="82" stroke="none" stroke-width="1.6" fill="#F8C6CB"/><text fill="#1B2B48" font-style="normal" font-weight="700" font-size="18" text-anchor="middle" x="1253.6" y="872">Key output:</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="17.5" text-anchor="middle" x="1253.6" y="895">Component catalog and</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="17.5" text-anchor="middle" x="1253.6" y="916">reusable-element library</text><path d="M1414.4 692.3 1427 692.3 1427 684.2 1443.2 704 1427 723.8 1427 715.7 1414.4 715.7Z" fill="#8A8F98"/><rect x="1450.4" y="466" rx="12" width="313.6" height="476" stroke="#B8A5E6" stroke-width="1.8" fill="#F7F3FD"/><path d="M1450.4 548 1450.4 478C1450.4 470 1454.4 466 1462.4 466L1752 466C1760 466 1764 470 1764 478L1764 548Z" fill="#DCD0F5"/><rect x="1450.4" y="466" rx="12" width="313.6" height="476" stroke="#B8A5E6" stroke-width="1.8" fill="none"/><g transform="matrix(1.1 0 0 1.1 1490.4 504)"><circle cx="0" cy="0" r="13.6" stroke="#1B2B48" stroke-width="7.2" stroke-dasharray="5.34 5.34" fill="none"/><circle cx="0" cy="0" r="10.88" fill="#1B2B48"/><circle cx="0" cy="0" r="4.48" fill="#FFFFFF"/></g><text fill="#1B2B48" font-style="normal" font-weight="700" font-size="25" text-anchor="start" x="1530.4" y="498">Phase 5</text><text fill="#1B2B48" font-style="normal" font-weight="700" font-size="17.5" text-anchor="start" x="1530.4" y="518">Styles, Patterns,</text><text fill="#1B2B48" font-style="normal" font-weight="700" font-size="17.5" text-anchor="start" x="1530.4" y="537">and Baseline</text><circle cx="1470.4" cy="572" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="1482.4" y="578">Define architectural styles</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="1482.4" y="599.5">and patterns</text><circle cx="1470.4" cy="622" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="1482.4" y="628">Specify design patterns</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="1482.4" y="649.5">(cross-cutting, integration,</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="1482.4" y="671">security)</text><circle cx="1470.4" cy="693.5" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="1482.4" y="699.5">Consolidate styles-and-patterns</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="1482.4" y="721">catalog</text><circle cx="1470.4" cy="743.5" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="1482.4" y="749.5">Establish architectural baseline</text><circle cx="1470.4" cy="772" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="1482.4" y="778">Ensure traceability of design</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="1482.4" y="799.5">decisions</text><circle cx="1470.4" cy="822" r="2.8" fill="#1B2B48"/><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="18" text-anchor="start" x="1482.4" y="828">Submit artifacts to OGA</text><rect x="1464.4" y="846" rx="10" width="285.6" height="82" stroke="none" stroke-width="1.6" fill="#DACDF3"/><text fill="#1B2B48" font-style="normal" font-weight="700" font-size="18" text-anchor="middle" x="1607.2" y="872">Key output:</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="17.5" text-anchor="middle" x="1607.2" y="895">Styles and patterns catalog</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="17.5" text-anchor="middle" x="1607.2" y="916">and architectural baseline</text><rect x="20" y="978" rx="0" width="1760" height="206" stroke="none" stroke-width="1.6" fill="#F1F6FB"/><path d="M20 1024 20 992C20 982.667 24.6667 978 34 978L1766 978C1775.33 978 1780 982.667 1780 992L1780 1024Z" fill="#D5E3F1"/><rect x="20" y="978" rx="14" width="1760" height="206" stroke="#BFD0E6" stroke-width="1.8" fill="none"/><text fill="#1B2B48" font-style="normal" font-weight="700" font-size="27" text-anchor="start" x="40" y="1010">5. Main Artifacts Produced (illustrative)</text><rect x="36" y="1036" rx="8" width="158.4" height="78" stroke="#C9D8EA" stroke-width="1.6" fill="#FFFFFF"/><g transform="matrix(0.8 0 0 0.8 61 1075)"><g stroke="#1B2B48" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M-11-17 3-17 12-8 12 17-11 17Z"/><path d="M3-17 3-8 12-8"/><path d="M-5 0 6 0M-5 6 6 6M-5 12 1 12"/></g></g><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="15.5" text-anchor="start" x="84" y="1062">Strategic</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="15.5" text-anchor="start" x="84" y="1080">Architecture</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="15.5" text-anchor="start" x="84" y="1098">Document</text><path d="M196.4 1069 196.4 1081 208.4 1075Z" fill="#7A8CA5"/><rect x="210.4" y="1036" rx="8" width="158.4" height="78" stroke="#C9D8EA" stroke-width="1.6" fill="#FFFFFF"/><g transform="matrix(0.8 0 0 0.8 235.4 1075)"><g stroke="#1B2B48" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><circle cx="0" cy="0" r="16"/></g><g fill="#1B2B48"><circle cx="0" cy="-4" r="5.5"/><path d="M-10 11C-10 5.66667-6.66667 3 0 3 6.66667 3 10 5.66667 10 11Z"/></g></g><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="15.5" text-anchor="start" x="258.4" y="1071">Stakeholder</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="15.5" text-anchor="start" x="258.4" y="1089">Map</text><path d="M370.8 1069 370.8 1081 382.8 1075Z" fill="#7A8CA5"/><rect x="384.8" y="1036" rx="8" width="158.4" height="78" stroke="#C9D8EA" stroke-width="1.6" fill="#FFFFFF"/><g transform="matrix(0.8 0 0 0.8 409.8 1075)"><g stroke="#1B2B48" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><rect x="-14" y="-17" rx="2" width="28" height="34"/><path d="M-14-3 14-3M0-17 0 17"/></g></g><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="15.5" text-anchor="start" x="432.8" y="1062">Architectural</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="15.5" text-anchor="start" x="432.8" y="1080">Views and</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="15.5" text-anchor="start" x="432.8" y="1098">Models</text><path d="M545.2 1069 545.2 1081 557.2 1075Z" fill="#7A8CA5"/><rect x="559.2" y="1036" rx="8" width="158.4" height="78" stroke="#C9D8EA" stroke-width="1.6" fill="#FFFFFF"/><g transform="matrix(0.8 0 0 0.8 584.2 1075)"><g stroke="#1B2B48" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M-11-17 3-17 12-8 12 17-11 17Z"/><path d="M3-17 3-8 12-8"/><path d="M-5 0 6 0M-5 6 6 6M-5 12 1 12"/></g></g><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="15.5" text-anchor="start" x="607.2" y="1071">Glossary</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="15.5" text-anchor="start" x="607.2" y="1089">of Terms</text><path d="M719.6 1069 719.6 1081 731.6 1075Z" fill="#7A8CA5"/><rect x="733.6" y="1036" rx="8" width="158.4" height="78" stroke="#C9D8EA" stroke-width="1.6" fill="#FFFFFF"/><g transform="matrix(0.8 0 0 0.8 758.6 1075)"><g stroke="#1B2B48" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><rect x="-14" y="-16" rx="3" width="28" height="32"/><path d="M-7-6 7-6M-7 1 7 1M-7 8 3 8"/></g></g><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="15.5" text-anchor="start" x="781.6" y="1062">Quality</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="15.5" text-anchor="start" x="781.6" y="1080">Attribute</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="15.5" text-anchor="start" x="781.6" y="1098">Catalog</text><path d="M894 1069 894 1081 906 1075Z" fill="#7A8CA5"/><rect x="908" y="1036" rx="8" width="158.4" height="78" stroke="#C9D8EA" stroke-width="1.6" fill="#FFFFFF"/><g transform="matrix(0.8 0 0 0.8 933 1075)"><g stroke="#1B2B48" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M0-8 0 0M-13 0 13 0M-13 0-13 6M13 0 13 6M0 0 0 6"/></g><g fill="#1B2B48"><rect x="-7" y="-18" rx="1.5" width="14" height="10"/><rect x="-19" y="6" rx="1.5" width="12" height="10"/><rect x="-6" y="6" rx="1.5" width="12" height="10"/><rect x="7" y="6" rx="1.5" width="12" height="10"/></g></g><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="15.5" text-anchor="start" x="956" y="1062">Structural</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="15.5" text-anchor="start" x="956" y="1080">Architecture</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="15.5" text-anchor="start" x="956" y="1098">Model</text><path d="M1068.4 1069 1068.4 1081 1080.4 1075Z" fill="#7A8CA5"/><rect x="1082.4" y="1036" rx="8" width="158.4" height="78" stroke="#C9D8EA" stroke-width="1.6" fill="#FFFFFF"/><g transform="matrix(0.8 0 0 0.8 1107.4 1075)"><g stroke="#1B2B48" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M0-17 15-9 15 8 0 17-15 8-15-9ZM-15-9 0 0 15-9M0 0 0 17"/></g></g><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="15.5" text-anchor="start" x="1130.4" y="1071">Component</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="15.5" text-anchor="start" x="1130.4" y="1089">Catalog</text><path d="M1242.8 1069 1242.8 1081 1254.8 1075Z" fill="#7A8CA5"/><rect x="1256.8" y="1036" rx="8" width="158.4" height="78" stroke="#C9D8EA" stroke-width="1.6" fill="#FFFFFF"/><g transform="matrix(0.8 0 0 0.8 1281.8 1075)"><g stroke="#1B2B48" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><path d="M0-15 16-7 0 1-16-7ZM-16 1 0 9 16 1M-16 9 0 17 16 9"/></g></g><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="15.5" text-anchor="start" x="1304.8" y="1062">Reusable</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="15.5" text-anchor="start" x="1304.8" y="1080">Element</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="15.5" text-anchor="start" x="1304.8" y="1098">Library</text><path d="M1417.2 1069 1417.2 1081 1429.2 1075Z" fill="#7A8CA5"/><rect x="1431.2" y="1036" rx="8" width="158.4" height="78" stroke="#C9D8EA" stroke-width="1.6" fill="#FFFFFF"/><g transform="matrix(0.8 0 0 0.8 1456.2 1075)"><g stroke="#1B2B48" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><rect x="-15" y="-15" rx="3" width="30" height="30"/><path d="M-7 0-1 6 9-7"/></g></g><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="15.5" text-anchor="start" x="1479.2" y="1062">Styles and</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="15.5" text-anchor="start" x="1479.2" y="1080">Patterns</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="15.5" text-anchor="start" x="1479.2" y="1098">Catalog</text><path d="M1591.6 1069 1591.6 1081 1603.6 1075Z" fill="#7A8CA5"/><rect x="1605.6" y="1036" rx="8" width="158.4" height="78" stroke="#7DB5E6" stroke-width="1.6" fill="#CFE6FA"/><g transform="matrix(0.8 0 0 0.8 1630.6 1075)"><g stroke="#1B2B48" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"><ellipse cx="0" cy="-10" rx="12" ry="5"/><path d="M-12-10-12 10C-12 12.7614-6.62742 15 1.21758e-16 15 6.62742 15 12 12.7614 12 10L12-10M-12 0C-12 2.76142-6.62742 5 1.21758e-16 5 6.62742 5 12 2.76142 12 -5.07327e-17"/></g></g><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="15.5" text-anchor="start" x="1653.6" y="1062">Consolidated</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="15.5" text-anchor="start" x="1653.6" y="1080">Architectural</text><text fill="#1B2B48" font-style="normal" font-weight="400" font-size="15.5" text-anchor="start" x="1653.6" y="1098">Baseline</text><rect x="36" y="1126" rx="8" width="1728" height="46" stroke="none" stroke-width="1.6" fill="#1B4F82"/><text fill="#FFFFFF" font-weight="700" font-size="23" x="386.9" y="1157">Outcome:</text><text fill="#FFFFFF" font-size="23" xml:space="preserve" x="483.9" y="1157"> A hybrid classical-quantum enterprise architecture for FinNova, with traceable and reusable artifacts</text></svg>`;
    }

    const fullHtml = `
      <div style="font-family:inherit;line-height:1.75;font-size:0.95rem;color:var(--ink);text-align:justify;">
        <!-- Encabezado del dictamen -->
        <div style="display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--line);padding-bottom:0.8rem;margin-bottom:1.2rem;flex-wrap:wrap;gap:0.5rem;">
          <div>
            <span style="font-size:0.75rem;font-weight:700;color:var(--green);text-transform:uppercase;letter-spacing:0.08em;display:block;">Dictamen Arquitectónico PDAEH</span>
            <h4 style="margin:0.2rem 0 0;font-size:1.25rem;font-family:Newsreader,serif;color:var(--ink);">Diagnóstico del caso: ${familyTitle}</h4>
          </div>
          <span style="padding:4px 10px;background:#eaf1fb;color:#1f2a44;font-size:0.78rem;font-weight:700;border-radius:4px;">${scaleLabel}</span>
        </div>

        <!-- Síntesis inicial y justificación algorítmica -->
        <p style="margin-bottom:1rem;">
          He procesado la caracterización del caso organizacional. A partir del problema de negocio provisto (<em>"${esc(useCase)}"</em>) y de las tecnologías de base reportadas en el stack As-Is (<em>"${esc(stack)}"</em>), el proceso metodológico confirma la <strong>viabilidad e idoneidad técnica para iniciar la adopción de una arquitectura híbrida clásico-cuántica</strong>.
        </p>

        <p style="margin-bottom:1.2rem;">
          ${algRationale}
        </p>

        <!-- Diagrama General de la Arquitectura Empresarial Preliminar -->
        <div style="margin:1.6rem 0;background:#ffffff;border:1px solid var(--line);padding:1.4rem;border-radius:6px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.8rem;flex-wrap:wrap;gap:0.5rem;">
            <div>
              <span style="font-size:0.75rem;font-weight:700;color:var(--green);text-transform:uppercase;letter-spacing:0.08em;display:block;">Vista de Estructura Preliminar (Elemento E5)</span>
              <h5 style="margin:0.2rem 0 0;font-size:1.1rem;font-family:Newsreader,serif;color:var(--ink);">Diagrama general de la arquitectura empresarial híbrida preliminar esperada</h5>
            </div>
            <span style="font-size:0.78rem;background:#f0f5f3;color:var(--green);padding:3px 8px;border-radius:3px;font-weight:600;">Generado dinámicamente</span>
          </div>
          <p style="font-size:0.88rem;color:var(--muted);margin:0 0 1rem;line-height:1.6;">
            Este diagrama ilustra la articulación entre las capacidades de negocio (Capa 1), los servicios clásicos existentes (Capa 2), el desacoplamiento mediante componentes híbridos de integración (Capa 3) y los motores de aceleración cuántica NISQ (Capa 4).
          </p>
          ${diagramSvg}
        </div>

        <!-- BLOQUE ARQUITECTÓNICO COMPLETO: RECOMENDACIONES, PATRONES, PRINCIPIOS, MODELOS, TECNOLOGÍAS Y CASOS DE ÉXITO -->
        ${architecturalSynthesis}

        <!-- Ponderación de Atributos de Calidad (Elemento E6) -->
        <div style="background:#fefbf3;border-left:4px solid #d4a017;padding:1.1rem 1.3rem;margin:1.4rem 0;border-radius:4px;">
          <h5 style="margin:0 0 0.5rem;font-size:0.98rem;color:#7f5a00;font-weight:700;">Atributos de calidad críticos del sistema (Elemento E6 - Dimensión DCD)</h5>
          ${qualityRationale}
        </div>

        <!-- Distribución de roles adaptada a escala -->
        <div style="background:#f2f7f4;border-left:4px solid var(--green);padding:1.1rem 1.3rem;margin:1.4rem 0;border-radius:4px;">
          <h5 style="margin:0 0 0.5rem;font-size:0.98rem;color:var(--navy);font-weight:700;">Asignación de roles y gobernanza organizacional (Modelo de Roles PDAEH)</h5>
          ${roleNarrative}
        </div>

        <!-- Hoja de ruta secuencial con compuertas OGA -->
        <div style="margin:1.4rem 0;">
          <h5 style="margin:0 0 0.6rem;font-size:1rem;color:var(--navy);font-weight:700;">Hoja de ruta metodológica y compuertas del Órgano de Gobierno (OGA)</h5>
          ${roadmapNarrative}
        </div>

        <!-- Directriz de acción inmediata -->
        <div style="background:#f9fbfa;border:1px solid var(--line);border-radius:4px;padding:1.1rem 1.3rem;margin-top:1.4rem;">
          <h5 style="margin:0 0 0.4rem;font-size:0.95rem;color:var(--green);font-weight:700;">Directriz de acción inmediata recomendada</h5>
          <p style="margin:0;font-size:0.93rem;line-height:1.65;">
            ${immediateAction}
          </p>
        </div>
      </div>
    `;

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

  btn.onclick = runEvaluation;

  // language handled via selectLang
  // No ejecutar automáticamente al cargar para mantener el panel limpio hasta que el usuario lo solicite
}

function setupDynamicBreadcrumbs() {
  const activeLabel = $("#activeSectionName");
  if (!activeLabel) return;

  const sections = [
    { id: "informacion-general", name: "Información general del proyecto" },
    { id: "guia-evaluacion", name: "Guía para evaluadores expertos" },
    { id: "revision", name: "Revisión sistemática de la literatura" },
    { id: "sintesis", name: "Síntesis de la evidencia" },
    { id: "armonizacion", name: "Armonización formal (DSM)" },
    { id: "modelo", name: "Modelo integrado y dimensiones" },
    { id: "proceso", name: "Caracterización del proceso PDAEH" },
    { id: "roles", name: "Definición y consolidación de roles" },
    { id: "fases", name: "Fases del proceso (F1–F5)" },
    { id: "actividad-transversal", name: "Actividad transversal y compuertas OGA" },
    { id: "matriz-trazabilidad", name: "Matriz de trazabilidad cruzada" },
    { id: "artefactos", name: "Catálogo de plantillas de artefactos" },
    { id: "consultor-demo", name: "Simulador del agente PDAEH Advisor" },
    { id: "glosario", name: "Glosario de términos arquitectónicos" },
    { id: "referencias", name: "Referencias bibliográficas" }
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sec = sections.find(s => s.id === entry.target.id);
        if (sec) {
          activeLabel.textContent = sec.name;
        }
      }
    });
  }, {
    rootMargin: "-20% 0px -65% 0px",
    threshold: 0
  });

  sections.forEach(sec => {
    const el = document.getElementById(sec.id);
    if (el) observer.observe(el);
  });
}

renderResearch();renderMacro();renderRoles();renderGovernance();renderPhases();renderTraceabilityMatrix();renderArtifacts();renderGlossary();setupAgentDemo();setupSearch();setupDynamicBreadcrumbs();
window.PDAEH={data,cleanText,splitItems,list,indicatorList,artifactLink,richArtifactItem,elementCode,elementNames,phaseNames,artifactCodes,artifactNames,field,esc};
