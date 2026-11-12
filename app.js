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

  const presets = {
    pyme: {
      useCase: "Optimización combinatoria de flota de vehículos para entrega de última milla con ventanas horarias y restricciones de carga dinámica.",
      stack: "Microservicios en AWS (EKS), bases de datos PostgreSQL y colas Kafka."
    },
    startup: {
      useCase: "Scoring y cálculo de riesgo crediticio no lineal mediante Quantum Machine Learning (QSVM variacional).",
      stack: "Arquitectura Serverless en GCP (Cloud Run, BigQuery) y Python FastAPI."
    },
    corporacion: {
      useCase: "Simulación de reactividad y afinidad molecular para descubrimiento acelerado de principios activos farmacéuticos.",
      stack: "Clúster HPC híbrido on-premise + Slurm, interconectado con nubes privadas mediante MPI."
    },
    inadecuado: {
      useCase: "Desarrollo de un portal de comercio electrónico con carrito de compras, catálogo de productos y pasarela de pagos.",
      stack: "Next.js con Node.js, base de datos MongoDB y hosting en Vercel."
    }
  };

  selectSize.onchange = () => {
    const p = presets[selectSize.value];
    if (p) {
      txtUseCase.value = p.useCase;
      txtStack.value = p.stack;
    }
  };

  let streamInterval = null;

  const runEvaluation = () => {
    const size = selectSize.value;
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

      diagramSvg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 380" width="100%" height="auto" style="background:#ffffff;border:1px solid var(--line);border-radius:6px;font-family:system-ui,-apple-system,sans-serif;margin:1rem 0;box-shadow:0 1px 3px rgba(0,0,0,0.02);">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#18796e" />
            </marker>
          </defs>
          <rect x="25" y="20" width="810" height="60" rx="5" fill="#f2f7f4" stroke="#18796e" stroke-width="1.5" />
          <text x="45" y="45" font-size="13" font-weight="700" fill="#123b43">CAPA 1: ESTRATEGIA Y GOBERNANZA LIGERA (Fases 1 y 2 · OGA-1 / OGA-2)</text>
          <text x="45" y="64" font-size="11" fill="#5c7074">Roles fusionados: AEP (CTO / Lead) + OGA Simplificado · Artefactos: DOE (Objetivos) y DCA (Restricciones presupuestales)</text>
          
          <rect x="25" y="105" width="385" height="155" rx="5" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5" />
          <text x="40" y="130" font-size="12" font-weight="700" fill="#0f172a">CAPA CLÁSICA ACTUAL (As-Is)</text>
          <rect x="40" y="145" width="355" height="42" rx="4" fill="#ffffff" stroke="#cbd5e1" />
          <text x="50" y="165" font-size="11" font-weight="600" fill="#334155">Servicios Backend / APIs Serverless</text>
          <text x="50" y="178" font-size="10" fill="#64748b">Ingestión de datos, validación de negocio y auth</text>
          <rect x="40" y="198" width="355" height="45" rx="4" fill="#ffffff" stroke="#cbd5e1" />
          <text x="50" y="218" font-size="11" font-weight="600" fill="#334155">Pipeline de Extracción y Preprocesamiento de Datos</text>
          <text x="50" y="232" font-size="10" fill="#64748b">Limpieza clásica y normalización de vectores de entrada</text>

          <rect x="450" y="105" width="385" height="155" rx="5" fill="#fefce8" stroke="#ca8a04" stroke-width="1.5" />
          <text x="465" y="130" font-size="12" font-weight="700" fill="#713f12">INTEGRACIÓN HÍBRIDA PDAEH (Fases 3 y 4 · DCO / DEA)</text>
          <rect x="465" y="145" width="355" height="42" rx="4" fill="#ffffff" stroke="#fde047" />
          <text x="475" y="165" font-size="11" font-weight="600" fill="#854d0e">Gestor de Inferencia y Encolamiento Asíncrono</text>
          <text x="475" y="178" font-size="10" fill="#a16207">Patrón Broker de trabajos y fallback clásico por timeout</text>
          <rect x="465" y="198" width="355" height="45" rx="4" fill="#ffffff" stroke="#fde047" />
          <text x="475" y="218" font-size="11" font-weight="600" fill="#854d0e">Codificador de Kernel Cuántico (QSVM Embedding)</text>
          <text x="475" y="232" font-size="10" fill="#a16207">Mapeo de características clásicas a espacio de Hilbert</text>

          <line x1="410" y1="180" x2="445" y2="180" stroke="#18796e" stroke-width="2" marker-end="url(#arrow)" />

          <rect x="25" y="285" width="810" height="75" rx="5" fill="#f3f4f6" stroke="#4b5563" stroke-width="1.5" />
          <text x="45" y="310" font-size="12" font-weight="700" fill="#111827">ACELERACIÓN COMPUTACIONAL CUÁNTICA (Era NISQ)</text>
          <rect x="45" y="322" width="355" height="30" rx="4" fill="#ffffff" stroke="#9ca3af" />
          <text x="55" y="342" font-size="11" fill="#374151">1. Simulación Clásica Local con Ruido (PennyLane / Qiskit Aer)</text>
          <rect x="445" y="322" width="375" height="30" rx="4" fill="#ffffff" stroke="#9ca3af" />
          <text x="455" y="342" font-size="11" fill="#374151">2. Procesador Cuántico Físico en Nube (QPU Cloud - Acceso API)</text>

          <line x1="642" y1="260" x2="642" y2="280" stroke="#18796e" stroke-width="2" marker-end="url(#arrow)" />
        </svg>
      `;

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

      diagramSvg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 390" width="100%" height="auto" style="background:#ffffff;border:1px solid var(--line);border-radius:6px;font-family:system-ui,-apple-system,sans-serif;margin:1rem 0;box-shadow:0 1px 3px rgba(0,0,0,0.02);">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#18796e" />
            </marker>
          </defs>
          <rect x="25" y="20" width="810" height="60" rx="5" fill="#f2f7f4" stroke="#18796e" stroke-width="1.5" />
          <text x="45" y="45" font-size="13" font-weight="700" fill="#123b43">CAPA 1: GOBIERNO CORPORATIVO Y ARB (Fases 1 y 2 · OGA-1 / OGA-2)</text>
          <text x="45" y="64" font-size="11" fill="#5c7074">Estructura segregada: AEP + ASP + OGA Institucional (Architecture Review Board) · Artefactos: DOE, DCA y MSP</text>
          
          <rect x="25" y="105" width="385" height="160" rx="5" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5" />
          <text x="40" y="130" font-size="12" font-weight="700" fill="#0f172a">CLÚSTER HPC CORPORATIVO (As-Is)</text>
          <rect x="40" y="145" width="355" height="42" rx="4" fill="#ffffff" stroke="#cbd5e1" />
          <text x="50" y="165" font-size="11" font-weight="600" fill="#334155">Gestor de Cargas de Trabajo (Slurm / PBS Pro)</text>
          <text x="50" y="178" font-size="10" fill="#64748b">Planificación masiva de jobs paralelos y memoria compartida</text>
          <rect x="40" y="198" width="355" height="48" rx="4" fill="#ffffff" stroke="#cbd5e1" />
          <text x="50" y="218" font-size="11" font-weight="600" fill="#334155">Optimizador Clásico de Parámetros Variacionales</text>
          <text x="50" y="233" font-size="10" fill="#64748b">Algoritmos de gradiente (COBYLA / SPSA / L-BFGS-B)</text>

          <rect x="450" y="105" width="385" height="160" rx="5" fill="#fefce8" stroke="#ca8a04" stroke-width="1.5" />
          <text x="465" y="130" font-size="12" font-weight="700" fill="#713f12">PLATAFORMA DE ORQUESTACIÓN HÍBRIDA (Fases 3 y 4 · DEA / DCO)</text>
          <rect x="465" y="145" width="355" height="42" rx="4" fill="#ffffff" stroke="#fde047" />
          <text x="475" y="165" font-size="11" font-weight="600" fill="#854d0e">Bus de Integración de Alta Velocidad (MPI / gRPC)</text>
          <text x="475" y="178" font-size="10" fill="#a16207">Canales seguros con cifrado de estado cuántico intermedio</text>
          <rect x="465" y="198" width="355" height="48" rx="4" fill="#ffffff" stroke="#fde047" />
          <text x="475" y="218" font-size="11" font-weight="600" fill="#854d0e">Módulo de Mitigación de Ruido y Compilación VQE</text>
          <text x="475" y="233" font-size="10" fill="#a16207">Zero-Noise Extrapolation (ZNE) y descomposición de Pauli</text>

          <line x1="410" y1="185" x2="445" y2="185" stroke="#18796e" stroke-width="2" marker-end="url(#arrow)" />

          <rect x="25" y="290" width="810" height="75" rx="5" fill="#f3f4f6" stroke="#4b5563" stroke-width="1.5" />
          <text x="45" y="315" font-size="12" font-weight="700" fill="#111827">INFRAESTRUCTURA CUÁNTICA DE ALTO RENDIMIENTO (QPU NISQ)</text>
          <rect x="45" y="327" width="385" height="30" rx="4" fill="#ffffff" stroke="#9ca3af" />
          <text x="55" y="347" font-size="11" fill="#374151">Evaluador de Circuitos Cuánticos de Estado Fundamental</text>
          <rect x="450" y="327" width="370" height="30" rx="4" fill="#ffffff" stroke="#9ca3af" />
          <text x="460" y="347" font-size="11" fill="#374151">Conexión dedicada QPU Superconductora / Iones Atrapados</text>

          <line x1="642" y1="265" x2="642" y2="285" stroke="#18796e" stroke-width="2" marker-end="url(#arrow)" />
        </svg>
      `;

    } else {
      scaleLabel = "Pequeña y Mediana Empresa (PYME)";
      familyTitle = "Optimización Combinatoria (QAOA y Quantum Annealing)";
      
      algRationale = `
        El caso planteado se clasifica formalmente como un problema de <strong>Optimización Combinatoria NP-Hard</strong> (ruteo dinámico de flota con ventanas de tiempo - VRPTW, asignación de carga o secuenciamiento logístico). La complejidad de este tipo de problemas crece de manera super-polinomial cuando se multiplican los nodos de entrega y las restricciones operativas. La formulación matemática adecuada transforma las restricciones de capacidad y distancia en un modelo <strong>Quadratic Unconstrained Binary Optimization (QUBO)</strong> o Hamiltoniano de Ising. En la era NISQ, el enfoque híbrido ideal distribuye el trabajo: el solver clásico existente realiza el preprocesamiento, filtrado topológico y clustering territorial, derivando al coprocesador cuántico (QAOA o Quantum Annealer) únicamente los grafos de alta combinatoria donde las heurísticas clásicas sufren de estancamiento en mínimos locales.
      `;

      architecturalSynthesis = `
        <!-- SECCIÓN 1: RECOMENDACIONES ARQUITECTÓNICAS -->
        <div style="margin:1.4rem 0;">
          <h5 style="margin:0 0 0.6rem;font-size:1.02rem;color:var(--navy);font-weight:700;">1. Recomendaciones Arquitectónicas Estratégicas</h5>
          <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
            <li><strong>Despliegue de Arquitectura Híbrida de Co-Procesamiento Asíncrono:</strong> Implementar un conector desacoplado en la Capa 3 que traduzca las rutas del ERP/TMS clásico a formato QUBO, encolando los jobs en la QPU y manteniendo el despacho operativo sin caídas mediante un patrón de redundancia activa.</li>
            <li><strong>Resiliencia Operativa mediante Conmutación Automática (Fallback Clásico):</strong> La PYME no puede paralizar su operación logística si la QPU experimenta latencia o mantenimiento; el orquestador debe disponer de un conmutador transparente que ejecute solvers heurísticos clásicos (OR-Tools, algoritmos genéticos o simulated annealing) si el SLA cuántico expira.</li>
            <li><strong>Estructura Organizacional Equilibrada:</strong> Diferenciar formalmente el rol de Solución (ASP) e Integración (AIP), integrando temporalmente las responsabilidades de datos (ADP) y seguridad (ASecP) para mantener la agilidad operativa.</li>
          </ul>
        </div>

        <!-- SECCIÓN 2: PATRONES ARQUITECTÓNICOS Y DE DISEÑO -->
        <div style="margin:1.4rem 0;background:#f9fbfa;border:1px solid var(--line);border-radius:5px;padding:1.2rem;">
          <h5 style="margin:0 0 0.6rem;font-size:1.02rem;color:var(--green);font-weight:700;">2. Patrones Arquitectónicos y de Diseño Híbrido Aplicables</h5>
          <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
            <li><strong>Patrón Mediador y Orquestador de Bucle Cerrado (Hybrid Mediator):</strong> Coordina el ciclo de optimización: recibe las coordenadas y restricciones desde los microservicios clásicos, construye la matriz QUBO, despacha la ejecución cuántica y reconstruye la ruta óptima para el usuario.</li>
            <li><strong>Patrón Circuit Breaker Cuántico:</strong> Si el proveedor de computación cuántica presenta tasas elevadas de error o tiempos de encolamiento inaceptables, el interruptor se abre y conmuta inmediatamente el tráfico hacia los algoritmos heurísticos clásicos.</li>
            <li><strong>Patrón Transformador / Traductor Matemático (QUBO Data Mapper):</strong> Encapsula la lógica de conversión matemática entre las entidades del dominio de negocio (camiones, clientes, paquetes, horarios) y las representaciones matriciales binarias x_i ∈ {0, 1}.</li>
            <li><strong>Patrón Estratégico Multi-Backend:</strong> Permite configurar si la resolución QUBO se deriva a un procesador de recocido cuántico comercial (D-Wave Advantage) o a una QPU de compuertas ejecutando QAOA en la nube (AWS Braket / Azure Quantum / IBM Quantum).</li>
          </ul>
        </div>

        <!-- SECCIÓN 3: PRINCIPIOS ARQUITECTÓNICOS -->
        <div style="margin:1.4rem 0;">
          <h5 style="margin:0 0 0.6rem;font-size:1.02rem;color:var(--navy);font-weight:700;">3. Principios Rectores de la Arquitectura</h5>
          <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
            <li><strong>Principio de Separación de Cómputo Determinista y Probabilístico:</strong> Los microservicios clásicos gestionan los datos fácticos y la lógica transaccional; el componente cuántico actúa exclusivamente como motor acelerador de inferencia probabilística de optimización.</li>
            <li><strong>Principio de Idoneidad Económica y Retorno Operativo:</strong> Solo deben derivarse a la QPU subproblemas en los que la reducción de kilómetros o combustible justifique el costo de consumo de créditos cuánticos, filtrando rutas triviales en el motor clásico.</li>
            <li><strong>Principio de Continuidad del Servicio (Zero Single Point of Failure):</strong> Ningún componente cuántico externo puede convertirse en punto único de fallo para el despacho de la flota vehicular.</li>
          </ul>
        </div>

        <!-- SECCIÓN 4: MODELOS Y TECNOLOGÍAS SUGERIDAS -->
        <div style="margin:1.4rem 0;background:#f8fafc;border:1px solid var(--line);border-radius:5px;padding:1.2rem;">
          <h5 style="margin:0 0 0.6rem;font-size:1.02rem;color:#1e40af;font-weight:700;">4. Modelos Algorítmicos y Tecnologías Recomendadas</h5>
          <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
            <li><strong>Modelos y Algoritmos Cuánticos:</strong> Quantum Approximate Optimization Algorithm (QAOA); Recocido Cuántico (Quantum Annealing); Algoritmo Cuántico Híbrido Particionado (Quantum-assisted Genetic Algorithm / Tabu Search).</li>
            <li><strong>Frameworks y Herramientas Cuánticas:</strong> Ocean SDK (D-Wave) para formulación e incrustación de grafos QUBO; Qiskit Optimization (IBM); Azure Quantum Optimization Solver; Amazon Braket Hybrid Jobs.</li>
            <li><strong>Stack Clásico y Middleware de Integración:</strong> Apache Kafka / RabbitMQ para la cola asíncrona de solicitudes; Docker y Kubernetes (EKS / GKE) para microservicios de ruteo; PostgreSQL / PostGIS para almacenamiento geoespacial.</li>
            <li><strong>Solvers Heurísticos Clásicos de Soporte y Fallback:</strong> Google OR-Tools, SCIP, VRP-CLI o PyVRP integrados en el pipeline de contingencia.</li>
          </ul>
        </div>

        <!-- SECCIÓN 5: ARQUITECTURAS IMPLEMENTADAS EN EMPRESAS SIMILARES -->
        <div style="margin:1.4rem 0;background:#fefbf3;border-left:4px solid #d4a017;padding:1.2rem;border-radius:4px;">
          <h5 style="margin:0 0 0.5rem;font-size:1.02rem;color:#7f5a00;font-weight:700;">5. Casos de Estudio y Arquitecturas Referenciadas en Empresas Logísticas</h5>
          <p style="margin:0 0 0.7rem;font-size:0.93rem;line-height:1.7;">
            Compañías líderes de logística global y automoción han implementado arquitecturas de ruteo híbridas análogas:
          </p>
          <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
            <li><strong>Volkswagen Group (Lisboa & Smart City Mobility):</strong> Implementó una arquitectura híbrida en producción piloto para la optimización de tráfico y rutas de autobuses en Lisboa en tiempo real. Utilizó una capa de microservicios clásicos conectados a través de APIs REST al procesador de recocido cuántico de D-Wave, resolviendo la congestión vehicular mediante partición de flujo y fallback clásico dinámico.</li>
            <li><strong>Toyota Tsusho Corporation & Jij Inc.:</strong> Desarrollaron una plataforma arquitectónica para optimización de semáforos y rutas de entrega de última milla. La arquitectura integra un mediador clásico en la nube que transforma mapas geográficos en matrices QUBO y balancea la carga entre solvers clásicos (Simulated Annealing) y procesadores cuánticos físicos.</li>
            <li><strong>DHL Supply Chain & D-Wave:</strong> Probaron arquitecturas de empaquetamiento tridimensional y ruteo de contenedores, confirmando que la articulación híbrida con colas de procesamiento por lotes permite a las empresas logísticas mitigar el costo y obtener soluciones óptimas en tiempos compatibles con la operación diaria.</li>
          </ul>
        </div>
      `;

      qualityRationale = `
        <p style="margin:0 0 0.6rem;">Para garantizar un equilibrio entre calidad de resultados y viabilidad operativa en la PYME, se priorizan los siguientes atributos:</p>
        <ul style="padding-left:1.3rem;margin:0 0 0.4rem;line-height:1.7;">
          <li><strong>Rendimiento y Ratio de Aproximación:</strong> Asegurar que la solución híbrida mejore el costo de ruteo frente a heurísticas clásicas (solver genético o tabu search).</li>
          <li><strong>Disponibilidad y Resiliencia con Fallback:</strong> En caso de degradación o indisponibilidad del servicio cuántico, conmutar transparentemente al optimizador clásico.</li>
          <li><strong>Interoperabilidad y Mantenibilidad:</strong> Uso de formatos estándar (JSON/Protobuf) para los vectores de variables binarias QUBO.</li>
        </ul>
        <p style="margin:0.4rem 0 0;font-size:0.88rem;color:var(--muted);">La ponderación de estos drivers se registra en el artefacto <a href="plantilla.html?id=MAC" style="color:var(--green);font-weight:700;">MAC (Marco de Evaluación de Atributos)</a>.</p>
      `;

      roleNarrative = `
        <p style="margin:0 0 0.6rem;">El modelo organizativo balanceado para una PYME distribuye las responsabilidades en perfiles clave:</p>
        <ul style="padding-left:1.3rem;margin:0;line-height:1.7;">
          <li><strong>Arquitecto(a) Empresarial del Proceso (AEP):</strong> Liderado por el CTO o Líder de Tecnología, asumiendo la dirección estratégica y pudiendo absorber funciones de datos (ADP).</li>
          <li><strong>Arquitecto(a) de Integración del Proceso (AIP):</strong> Liderado por el Ingeniero DevOps / Infraestructura, gestionando la conectividad y pudiendo absorber ciberseguridad (ASecP).</li>
          <li><strong>Arquitecto(a) de Solución del Proceso (ASP):</strong> Ingeniero de Software Principal que adapta los microservicios actuales para interactuar con el módulo cuántico.</li>
          <li><strong>Gestor de Portafolio (GPA) y OGA Simplificado:</strong> Comité técnico periódico conformado por la gerencia, operaciones y tecnología.</li>
          <li><strong>Especialista Tecnológico Cuántico (ETC):</strong> Consultor especialista contratado de forma recurrente o a tiempo parcial.</li>
        </ul>
      `;

      roadmapNarrative = `
        <ul style="padding-left:1.3rem;margin:0;line-height:1.75;">
          <li><strong>Fase 1 (Definición estratégica):</strong> Formalizar objetivos operativos en el <a href="plantilla.html?id=DOE" style="color:var(--green);font-weight:700;">DOE</a> y restricciones de conectividad y costos en el <a href="plantilla.html?id=DCA" style="color:var(--green);font-weight:700;">DCA</a>. Aval en <strong>Compuerta OGA-1</strong>.</li>
          <li><strong>Fase 2 (Formalización conceptual):</strong> Definir el flujo de datos en el <a href="plantilla.html?id=DPV" style="color:var(--green);font-weight:700;">DPV</a> y la separación de responsabilidades entre solver clásico y cuántico en el <a href="plantilla.html?id=DNA" style="color:var(--green);font-weight:700;">DNA</a>. Aval en <strong>Compuerta OGA-2</strong>.</li>
          <li><strong>Fase 3 (Configuración estructural):</strong> Ponderar calidad de solución, tiempos de respuesta y costo en el <a href="plantilla.html?id=MAC" style="color:var(--green);font-weight:700;">MAC</a>. Aval en <strong>Compuerta OGA-3</strong>.</li>
          <li><strong>Fase 4 (Materialización arquitectónica):</strong> Diseñar el conector híbrido en el <a href="plantilla.html?id=DEA" style="color:var(--green);font-weight:700;">DEA</a> y los contratos de mensajería en el <a href="plantilla.html?id=DCO" style="color:var(--green);font-weight:700;">DCO</a>. Aval en <strong>Compuerta OGA-4</strong>.</li>
          <li><strong>Fase 5 (Sistematización del diseño):</strong> Registrar los patrones de mediador y fallback en el <a href="plantilla.html?id=CEP" style="color:var(--green);font-weight:700;">CEP</a> e indexar componentes en la <a href="plantilla.html?id=BER" style="color:var(--green);font-weight:700;">BER</a>. Cierre en <strong>Compuerta OGA-5</strong>.</li>
        </ul>
      `;

      immediateAction = `Formalizar el <a href="plantilla.html?id=DOE" style="color:var(--green);font-weight:700;">Documento de Objetivos Estratégicos (DOE)</a> definiendo el porcentaje meta de reducción de costo por kilómetro y el tiempo máximo de espera admisible en la cola de inferencia para someterlo a aprobación en la Compuerta OGA-1.`;

      diagramSvg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 380" width="100%" height="auto" style="background:#ffffff;border:1px solid var(--line);border-radius:6px;font-family:system-ui,-apple-system,sans-serif;margin:1rem 0;box-shadow:0 1px 3px rgba(0,0,0,0.02);">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#18796e" />
            </marker>
          </defs>
          <rect x="25" y="20" width="810" height="60" rx="5" fill="#f2f7f4" stroke="#18796e" stroke-width="1.5" />
          <text x="45" y="45" font-size="13" font-weight="700" fill="#123b43">CAPA 1: GOBERNANZA OPERATIVA Y COMITÉ TÉCNICO (Fases 1 y 2 · OGA-1 / OGA-2)</text>
          <text x="45" y="64" font-size="11" fill="#5c7074">Estructura equilibrada: AEP (CTO) + ASP (Dev Lead) + OGA Simplificado · Artefactos: DOE (Ahorro/Ventanas) y DCA</text>
          
          <rect x="25" y="105" width="385" height="155" rx="5" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5" />
          <text x="40" y="130" font-size="12" font-weight="700" fill="#0f172a">ECOSISTEMA EMPRESARIAL CLÁSICO (As-Is)</text>
          <rect x="40" y="145" width="355" height="42" rx="4" fill="#ffffff" stroke="#cbd5e1" />
          <text x="50" y="165" font-size="11" font-weight="600" fill="#334155">Microservicios de Logística / Ruteo y APIs</text>
          <text x="50" y="178" font-size="10" fill="#64748b">Ingestión de pedidos, clientes y gestión de flota vehicular</text>
          <rect x="40" y="198" width="355" height="45" rx="4" fill="#ffffff" stroke="#cbd5e1" />
          <text x="50" y="218" font-size="11" font-weight="600" fill="#334155">Solver Heurístico Clásico (Pre-Clustering)</text>
          <text x="50" y="232" font-size="10" fill="#64748b">Segmentación geográfica y resolución de casos rutinarios</text>

          <rect x="450" y="105" width="385" height="155" rx="5" fill="#fefce8" stroke="#ca8a04" stroke-width="1.5" />
          <text x="465" y="130" font-size="12" font-weight="700" fill="#713f12">CONECTOR HÍBRIDO PDAEH (Fases 3 y 4 · DCO / DEA)</text>
          <rect x="465" y="145" width="355" height="42" rx="4" fill="#ffffff" stroke="#fde047" />
          <text x="475" y="165" font-size="11" font-weight="600" fill="#854d0e">Orquestador de Bucle Cerrado y Fallback Clásico</text>
          <text x="475" y="178" font-size="10" fill="#a16207">Conmutador automático a solver clásico si QPU se satura</text>
          <rect x="465" y="198" width="355" height="45" rx="4" fill="#ffffff" stroke="#fde047" />
          <text x="475" y="218" font-size="11" font-weight="600" fill="#854d0e">Traductor Matemático QUBO / Ising</text>
          <text x="475" y="232" font-size="10" fill="#a16207">Transformación de restricciones de carga y ruta en grafo binario</text>

          <line x1="410" y1="180" x2="445" y2="180" stroke="#18796e" stroke-width="2" marker-end="url(#arrow)" />

          <rect x="25" y="285" width="810" height="75" rx="5" fill="#f3f4f6" stroke="#4b5563" stroke-width="1.5" />
          <text x="45" y="310" font-size="12" font-weight="700" fill="#111827">CAPA DE OPTIMIZACIÓN CUÁNTICA (Era NISQ)</text>
          <rect x="45" y="322" width="375" height="30" rx="4" fill="#ffffff" stroke="#9ca3af" />
          <text x="55" y="342" font-size="11" fill="#374151">QAOA en Simulador Cuántico / QPU basada en Compuertas</text>
          <rect x="445" y="322" width="375" height="30" rx="4" fill="#ffffff" stroke="#9ca3af" />
          <text x="455" y="342" font-size="11" fill="#374151">Quantum Annealing / Recocido Cuántico en la Nube</text>

          <line x1="642" y1="260" x2="642" y2="280" stroke="#18796e" stroke-width="2" marker-end="url(#arrow)" />
        </svg>
      `;
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
