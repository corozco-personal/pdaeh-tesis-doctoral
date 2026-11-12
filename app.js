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
    if (streamInterval) clearInterval(streamInterval);

    // Restablecer estilos de contenedor para renderizado del roadmap
    outContainer.style.display = "block";
    outContainer.style.border = "none";
    outContainer.style.background = "transparent";
    outContainer.style.padding = "0";

    const size = selectSize.value;
    const useCase = txtUseCase.value.trim();
    const stack = txtStack.value.trim();

    statusTag.textContent = "Procesando...";
    statusTag.style.background = "#fff3cd";
    statusTag.style.color = "#856404";
    btn.disabled = true;
    btn.style.opacity = "0.7";

    if (size === "inadecuado") {
      const fullHtml = `
        <div style="line-height:1.75;font-size:0.95rem;color:var(--ink);text-align:justify;">
          <div style="display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--line);padding-bottom:0.8rem;margin-bottom:1.2rem;">
            <div>
              <span style="font-size:0.75rem;font-weight:700;color:#c53030;text-transform:uppercase;letter-spacing:0.08em;display:block;">Dictamen de Pertinencia Tecnológica</span>
              <h4 style="margin:0.2rem 0 0;font-size:1.25rem;font-family:Newsreader,serif;color:var(--ink);">Evaluación de Realismo NISQ: Caso no viable para aceleración cuántica</h4>
            </div>
            <span style="padding:4px 10px;background:#fed7d7;color:#9b2c2c;font-size:0.78rem;font-weight:700;border-radius:4px;">RECHAZO TÉCNICO FORMAL</span>
          </div>

          <p style="margin-bottom:1rem;">
            He analizado en detalle la solicitud enviada. A partir de la descripción funcional provista (<em>"${esc(useCase)}"</em>) y del stack de infraestructura técnica reportado (<em>"${esc(stack)}"</em>), el dictamen metodológico del proceso PDAEH concluye de manera categórica que <strong>el problema no presenta características matemáticas, combinatorias ni de simulación hamiltoniana</strong> que justifiquen su migración o acoplamiento con coprocesadores cuánticos (QPU).
          </p>

          <p style="margin-bottom:1rem;">
            La carga de trabajo descrita corresponde estrictamente a patrones transaccionales convencionales de ingeniería de software (arquitectura web, gestión de estados, persistencia relacional o documental y reglas de negocio deterministas estándar). Incorporar llamadas a simuladores o circuitos cuánticos en este escenario introduciría una latencia de red contraproducente, tiempos de cola en nubes cuánticas, elevados costos computacionales y una complejidad arquitectónica injustificada, sin brindar ningún tipo de ventaja cuántica o beneficio de escalabilidad algorítmica.
          </p>

          <p style="margin-bottom:1.2rem;">
            <strong>Recomendación arquitectónica y directriz de gobernanza:</strong> El Órgano de Gobierno Arquitectónico (OGA) <strong>no autoriza</strong> la apertura de la Fase 1 (Definición estratégica) ni la generación de artefactos del proceso PDAEH. Se recomienda enfáticamente continuar operando y optimizando el sistema bajo una arquitectura 100% clásica convencional, asegurando la escalabilidad horizontal y la resiliencia en la capa de servicios existente.
          </p>

          <div style="background:#fffaf0;border-left:4px solid #dd6b20;padding:1rem 1.2rem;border-radius:4px;font-size:0.9rem;">
            <strong>Orientación metodológica:</strong> Para que un caso organizacional califique válidamente para el proceso PDAEH, debe formularse alrededor de problemas intratables clásicamente como optimización combinatoria NP-hard (QAOA/Annealing), simulación de sistemas moleculares/materiales (VQE), o aprendizaje automático cuántico asistido por kernels en espacios de Hilbert de alta dimensionalidad (QML).
          </div>
        </div>
      `;

      let currentLen = 0;
      outContainer.innerHTML = '<span class="typing-cursor" style="color:var(--green);font-weight:700;">Analizando caso y evaluando pertinencia bajo la base del conocimiento PDAEH...</span>';
      
      streamInterval = setInterval(() => {
        currentLen += 35;
        if (currentLen >= fullHtml.length) {
          clearInterval(streamInterval);
          outContainer.innerHTML = fullHtml;
          statusTag.textContent = "Dictamen Emitido";
          statusTag.style.background = "#fed7d7";
          statusTag.style.color = "#9b2c2c";
          btn.disabled = false;
          btn.style.opacity = "1";
        } else {
          outContainer.innerHTML = fullHtml.slice(0, currentLen) + ' <span style="display:inline-block;width:8px;height:14px;background:var(--green);animation:blink 0.8s infinite;"></span>';
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

    if (size === "startup") {
      scaleLabel = "Microempresa o Startup (< 20 colaboradores)";
      familyTitle = "Quantum Machine Learning (QML con QSVM y clasificadores variacionales)";
      algRationale = `El caso descrito encaja con precisión en la familia algorítmica de <strong>Quantum Machine Learning</strong>. Dado que el volumen de datos o variables presenta correlaciones no lineales complejas, el enfoque más costo-eficiente durante la era NISQ consiste en formular un clasificador de vectores de soporte cuántico (Quantum Support Vector Machine - QSVM) o circuitos variacionales parametrizados (VQC). En la etapa actual, se prescribe iniciar con simulación clásica con ruido emulado (Qiskit Aer o PennyLane) y reservar las ejecuciones en procesadores cuánticos físicos (QPU en nube) exclusivamente para lotes reducidos de validación de kernel.`;
      qualityRationale = `Bajo el elemento estructural <strong>E6 (Atributos de calidad)</strong> y el marco de evaluación de la Fase 3, los drivers críticos que gobernarán esta arquitectura son: <em>Fidelidad y Mitigación de Ruido</em> (evaluando la tasa de error por compuerta cuántica de dos cúbits), <em>Costo y Eficiencia Económica</em> (evitando consumo desmedido de créditos en nubes cuánticas mediante preprocesamiento clásico previo), y <em>Latencia de Inferencia</em> (implementando colas asíncronas para absorber los tiempos de espera y ejecución en la QPU). Estos atributos se modelan formalmente en el artefacto <a href="plantilla.html?id=MAC" style="color:var(--green);font-weight:700;">MAC (Marco de Evaluación de Atributos)</a>.`;
      roleNarrative = `Conforme a la <strong>Tabla 76 de la monografía doctoral</strong> (<em>Roles aplicables en una microempresa/startup</em>), la estructura organizacional se sintetiza para maximizar la agilidad y viabilidad económica: La figura central es el <strong>Arquitecto(a) Empresarial del Proceso Integrado (AEP)</strong>, quien absorbe operativamente las funciones de los roles ASP, AIP, ASecP y GPA. Debido a que en esta escala no existe capacidad para constituir un comité formal colegiado permanente, las responsabilidades de verificación del <strong>Órgano de Gobierno Arquitectónico (OGA)</strong> recaen directamente sobre el AEP en consulta con la dirección de la empresa. El rol de <strong>Arquitecto(a) de Datos del Proceso (ADP)</strong> opera bajo un esquema compartido o externo, y el <strong>Especialista Tecnológico Cuántico (ETC)</strong> interviene estrictamente como asesor o consultor externo contratado bajo demanda.`;
      roadmapNarrative = `Para avanzar de manera controlada y metódica, el proceso PDAEH establece la siguiente hoja de ruta secuencial:
      En la <strong>Fase 1 (Definición estratégica - E1, E2)</strong>, el equipo formalizará el <em>Documento de Objetivos Estratégicos (<a href="plantilla.html?id=DOE" style="color:var(--green);font-weight:700;">DOE</a>)</em> para cuantificar el impacto comercial de la ventaja cuántica y el <em>Documento de Contexto y Restricciones (<a href="plantilla.html?id=DCA" style="color:var(--green);font-weight:700;">DCA</a>)</em> para fijar techos presupuestales y cuotas de inferencia, concluyendo con la aprobación formal en la <strong>Compuerta OGA-1</strong>.
      Posteriormente, en la <strong>Fase 2 (Formalización conceptual - E3, E4)</strong>, se diseñará la vista funcional en el <em>Documento de Puntos de Vista (<a href="plantilla.html?id=DPV" style="color:var(--green);font-weight:700;">DPV</a>)</em> delimitando el preprocesamiento clásico y el cómputo de kernel cuántico, y se unificará el léxico del dominio, superando la <strong>Compuerta OGA-2</strong>.
      En la <strong>Fase 3 (Configuración estructural - E5, E6)</strong>, se estructurarán los escenarios del elemento <strong>E6 (Atributos de calidad)</strong> mediante el <em>Marco de Evaluación de Atributos (<a href="plantilla.html?id=MAC" style="color:var(--green);font-weight:700;">MAC</a>)</em>, ponderando disponibilidad, latencia y costos por llamada antes de autorizar la <strong>Compuerta OGA-3</strong>.
      En la <strong>Fase 4 (Materialización arquitectónica - E9, E10)</strong>, se detallará el desacoplamiento asíncrono en el <em>Documento de Estructura (<a href="plantilla.html?id=DEA" style="color:var(--green);font-weight:700;">DEA</a>)</em> y las especificaciones OpenAPI/gRPC en el <em>Documento de Contratos (<a href="plantilla.html?id=DCO" style="color:var(--green);font-weight:700;">DCO</a>)</em> hasta validar la <strong>Compuerta OGA-4</strong>.
      Finalmente, en la <strong>Fase 5 (Sistematización del diseño - E7, E8)</strong>, se documentarán los patrones emergentes en el <a href="plantilla.html?id=CPD" style="color:var(--green);font-weight:700;">CPD</a> y se consolidará la <em>Línea Base Integral (<a href="plantilla.html?id=LBA" style="color:var(--green);font-weight:700;">LBA</a>)</em> para cerrar en la <strong>Compuerta OGA-5</strong>.`;
      immediateAction = `Convocar a los fundadores técnicos y redactar inmediatamente la plantilla del <a href="plantilla.html?id=DOE" style="color:var(--green);font-weight:700;">Documento de Objetivos Estratégicos (DOE)</a>, estableciendo la métrica de precisión y latencia contra la cual se medirá el éxito de la integración híbrida frente al modelo clásico actual.`;
    } else if (size === "corporacion") {
      scaleLabel = "Gran Empresa o Corporación (> 200 colaboradores)";
      familyTitle = "Simulación Molecular y Materiales (VQE y Algoritmos Variacionales Hamiltonianos)";
      algRationale = `El caso de uso presentado exige modelar interacciones atómicas y orbitales de alta complejidad, un problema exponencialmente intratable para los clústeres de supercómputo convencionales debido al crecimiento dimensional del espacio de Hilbert. La formulación matemática adecuada corresponde a la familia de <strong>Variational Quantum Eigensolver (VQE)</strong> complementada con técnicas activas de mitigación de errores (Zero-Noise Extrapolation y Readout Error Mitigation). El régimen de integración arquitectónica se apoyará en una infraestructura de alto rendimiento (HPC híbrido), delegando la evaluación de operadores fermiónicos al procesador cuántico y conservando la optimización no lineal de parámetros clásicos en el clúster local.`;
      qualityRationale = `En el marco del elemento <strong>E6 (Atributos de calidad)</strong> evaluado en la Fase 3, los atributos arquitectónicos no negociables son: <em>Fidelidad Cuántica y Tolerancia a Fallos</em> (requiriendo calibración periódica de qubits y protocolos de Zero-Noise Extrapolation), <em>Interoperabilidad de Alta Velocidad</em> (canales dedicados MPI / InfiniBand para la comunicación entre el clúster HPC clásico y el runtime cuántico), y <em>Seguridad y Soberanía de Datos</em> (cifrado en tránsito y aislamiento de modelos de propiedad intelectual farmacéutica). Estos criterios se parametrizan rigurosamente en el artefacto <a href="plantilla.html?id=MAC" style="color:var(--green);font-weight:700;">MAC</a>.`;
      roleNarrative = `De acuerdo con la <strong>Tabla 78 de la monografía doctoral</strong> (<em>Roles aplicables en una empresa grande o corporación</em>), la envergadura y madurez organizacional exigen la segregación e institucionalización formal de todos los roles: El <strong>Arquitecto(a) Empresarial del Proceso (AEP)</strong> actúa como la autoridad estratégica transversal responsable del marco completo de arquitectura híbrida. Se despliegan <strong>Arquitectos(as) de Solución (ASP)</strong> dedicados por línea de negocio o dominio científico; un equipo formal de <strong>Arquitectura de Integración (AIP)</strong> para la interoperabilidad multiplataforma HPC-QPU; una unidad especializada de <strong>Arquitectura de Datos (ADP)</strong> para gobierno y analítica; y <strong>Arquitectos de Seguridad (ASecP)</strong> para riesgos clásicos y transición criptográfica poscuántica. El <strong>Gestor de Portafolio (GPA)</strong> administra las inversiones corporativas en cómputo avanzado, mientras que el <strong>Especialista Tecnológico Cuántico (ETC)</strong> se estructura como un equipo interno o alianza tecnológica estratégica permanente. La conformidad se regula formalmente mediante el <strong>Órgano de Gobierno Arquitectónico (OGA)</strong> corporativo y la participación institucional de <strong>Stakeholders Empresariales (SE)</strong>.`;
      roadmapNarrative = `El proceso de adopción en un entorno corporativo se ejecuta con rigurosa verificación formal en cada compuerta del proceso PDAEH:
      Durante la <strong>Fase 1 (Definición estratégica - E1, E2)</strong>, el AEP formalizará el <em>Documento de Objetivos Estratégicos (<a href="plantilla.html?id=DOE" style="color:var(--green);font-weight:700;">DOE</a>)</em> y las limitaciones de propiedad intelectual y soberanía de datos en el <em>Documento de Contexto (<a href="plantilla.html?id=DCA" style="color:var(--green);font-weight:700;">DCA</a>)</em>, sometiéndose a dictamen vinculante en la <strong>Compuerta OGA-1</strong>.
      En la <strong>Fase 2 (Formalización conceptual - E3, E4)</strong>, el ASP modelará la descomposición del circuito variacional en el <em>Documento de Puntos de Vista (<a href="plantilla.html?id=DPV" style="color:var(--green);font-weight:700;">DPV</a>)</em> y la partición funcional en el <em>Documento de Niveles de Abstracción (<a href="plantilla.html?id=DNA" style="color:var(--green);font-weight:700;">DNA</a>)</em>, logrando la aprobación en la <strong>Compuerta OGA-2</strong>.
      En la <strong>Fase 3 (Configuración estructural - E5, E6)</strong>, se utilizará el <em>Marco de Evaluación de Atributos (<a href="plantilla.html?id=MAC" style="color:var(--green);font-weight:700;">MAC</a>)</em> para ponderar cuantitativamente los atributos de calidad del elemento <strong>E6</strong> (fidelidad cuántica, tiempos de ejecución y disponibilidad de infraestructura) previa a la <strong>Compuerta OGA-3</strong>.
      En la <strong>Fase 4 (Materialización arquitectónica - E9, E10)</strong>, se detallará la arquitectura del orquestador híbrido en el <em>Documento de Estructura (<a href="plantilla.html?id=DEA" style="color:var(--green);font-weight:700;">DEA</a>)</em> y las especificaciones formales de integración en el <em>Documento de Contratos (<a href="plantilla.html?id=DCO" style="color:var(--green);font-weight:700;">DCO</a>)</em>, superando la <strong>Compuerta OGA-4</strong>.
      Por último, en la <strong>Fase 5 (Sistematización del diseño - E7, E8)</strong>, se estandarizarán los patrones reutilizables en el <a href="plantilla.html?id=CPD" style="color:var(--green);font-weight:700;">CPD</a> y se consolidará la <em>Línea Base Arquitectónica (<a href="plantilla.html?id=LBA" style="color:var(--green);font-weight:700;">LBA</a>)</em> aprobada formalmente en la <strong>Compuerta OGA-5</strong>.`;
      immediateAction = `Iniciar formalmente los talleres de trabajo interdisciplinario para completar el <a href="plantilla.html?id=DOE" style="color:var(--green);font-weight:700;">Documento de Objetivos Estratégicos (DOE)</a> y presentar ante el comité OGA-1 las restricciones de seguridad y licenciamiento de la infraestructura cuántica.`;
    } else {
      scaleLabel = "Pequeña y Mediana Empresa (PYME)";
      familyTitle = "Optimización Combinatoria (QAOA y Quantum Annealing)";
      algRationale = `El caso de negocio planteado exhibe una estructura de optimización combinatoria restringida (como ruteo de vehículos, asignación de recursos o empaquetamiento). En la era NISQ, estos problemas se modelan naturalmente mediante formulaciones Quadratic Unconstrained Binary Optimization (QUBO) para su resolución a través de <strong>Quantum Approximate Optimization Algorithm (QAOA)</strong> en QPUs de compuertas o recocido cuántico (Quantum Annealing). El régimen operativo óptimo consiste en un bucle cerrado híbrido: los algoritmos heurísticos clásicos existentes continúan realizando el preprocesamiento y clustering geográfico, derivando al coprocesador cuántico únicamente los subproblemas de alta combinatoria donde las heurísticas convencionales se estancan en mínimos locales.`;
      qualityRationale = `Conforme al elemento estructural <strong>E6 (Atributos de calidad)</strong> y el marco de decisiones de la Fase 3, los atributos de calidad esenciales para este caso son: <em>Rendimiento y Calidad de Solución</em> (garantizando un ratio de aproximación competitivo frente al solver clásico), <em>Disponibilidad y Confiabilidad Operativa</em> (diseño de mecanismos de fallback automático al optimizador clásico en caso de indisponibilidad de la QPU), y <em>Mantenibilidad e Interoperabilidad</em> (estandarización de contratos de datos para desacoplar el motor cuántico de los microservicios actuales). La priorización formal de estos atributos se consolida en el artefacto <a href="plantilla.html?id=MAC" style="color:var(--green);font-weight:700;">MAC (Marco de Evaluación de Atributos)</a>.`;
      roleNarrative = `Con base en la <strong>Tabla 77 de la monografía doctoral</strong> (<em>Roles aplicables en una pequeña y mediana empresa</em>), el esquema de roles equilibra la capacidad técnica y operativa: El <strong>Arquitecto(a) Empresarial del Proceso (AEP)</strong> asume la responsabilidad formal de la alineación estratégica y coherencia transversal, pudiendo absorber al Arquitecto de Datos (ADP). El <strong>Arquitecto(a) de Integración del Proceso (AIP)</strong> gestiona la interoperabilidad técnica entre componentes clásicos y cuánticos, pudiendo absorber al Arquitecto de Seguridad (ASecP). El <strong>Gestor de Portafolio (GPA)</strong> coordina iniciativas y prioriza inversiones; el <strong>Órgano de Gobierno Arquitectónico (OGA)</strong> opera en modalidad simplificada como comité técnico periódico de revisión; el <strong>Especialista Tecnológico Cuántico (ETC)</strong> participa como consultor recurrente o a tiempo parcial; y los <strong>Stakeholders Empresariales (SE)</strong> intervienen en la validación de impacto y decisiones clave.`;
      roadmapNarrative = `La adopción estructurada del proceso PDAEH se articulará a lo largo de las siguientes etapas operativas:
      En la <strong>Fase 1 (Definición estratégica - E1, E2)</strong>, la gerencia y el equipo técnico formalizarán los objetivos operacionales en el <em>Documento de Objetivos Estratégicos (<a href="plantilla.html?id=DOE" style="color:var(--green);font-weight:700;">DOE</a>)</em> y las restricciones de infraestructura y conectividad en el <em>Documento de Contexto (<a href="plantilla.html?id=DCA" style="color:var(--green);font-weight:700;">DCA</a>)</em>, logrando el aval en la <strong>Compuerta OGA-1</strong>.
      En la <strong>Fase 2 (Formalización conceptual - E3, E4)</strong>, se definirá el flujo de ingestión y respuesta en el <em>Documento de Puntos de Vista (<a href="plantilla.html?id=DPV" style="color:var(--green);font-weight:700;">DPV</a>)</em> y la separación de responsabilidades entre el solver clásico y el cuántico en el <em>Documento de Niveles (<a href="plantilla.html?id=DNA" style="color:var(--green);font-weight:700;">DNA</a>)</em>, superando la <strong>Compuerta OGA-2</strong>.
      En la <strong>Fase 3 (Configuración estructural - E5, E6)</strong>, se aplicará el <em>Marco de Evaluación de Atributos (<a href="plantilla.html?id=MAC" style="color:var(--green);font-weight:700;">MAC</a>)</em> para cuantificar los atributos de calidad del elemento <strong>E6</strong>, comparando el trade-off entre calidad de la solución encontrada, tiempo de respuesta y coste por simulación, obteniendo la aprobación en la <strong>Compuerta OGA-3</strong>.
      En la <strong>Fase 4 (Materialización arquitectónica - E9, E10)</strong>, se especificará el conector híbrido en el <em>Documento de Estructura (<a href="plantilla.html?id=DEA" style="color:var(--green);font-weight:700;">DEA</a>)</em> y los esquemas de eventos o colas asíncronas en el <em>Documento de Contratos (<a href="plantilla.html?id=DCO" style="color:var(--green);font-weight:700;">DCO</a>)</em>, validando la <strong>Compuerta OGA-4</strong>.
      En la <strong>Fase 5 (Sistematización del diseño - E7, E8)</strong>, se catalogarán las buenas prácticas en el <a href="plantilla.html?id=CPD" style="color:var(--green);font-weight:700;">CPD</a> y se sellará la arquitectura definitiva en la <em>Línea Base Integral (<a href="plantilla.html?id=LBA" style="color:var(--green);font-weight:700;">LBA</a>)</em> en la <strong>Compuerta OGA-5</strong>.`;
      immediateAction = `Formalizar el <a href="plantilla.html?id=DOE" style="color:var(--green);font-weight:700;">Documento de Objetivos Estratégicos (DOE)</a> en conjunto con el área de operaciones para delimitar las ventanas horarias y métricas de ahorro que justificarán la inversión ante la compuerta OGA-1.`;
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

        <!-- Ponderación de Atributos de Calidad (Elemento E6) -->
        <div style="background:#fefbf3;border-left:4px solid #d4a017;padding:1.1rem 1.3rem;margin:1.4rem 0;border-radius:4px;">
          <h5 style="margin:0 0 0.5rem;font-size:0.98rem;color:#7f5a00;font-weight:700;">Atributos de calidad críticos del sistema (Elemento E6 - Dimensión DCD)</h5>
          <p style="margin:0;font-size:0.93rem;line-height:1.7;color:var(--ink);">
            ${qualityRationale}
          </p>
        </div>

        <!-- Distribución de roles adaptada a escala -->
        <div style="background:#f2f7f4;border-left:4px solid var(--green);padding:1.1rem 1.3rem;margin:1.4rem 0;border-radius:4px;">
          <h5 style="margin:0 0 0.5rem;font-size:0.98rem;color:var(--navy);font-weight:700;">Asignación de roles y gobernanza organizacional (Modelo de Roles PDAEH)</h5>
          <p style="margin:0;font-size:0.93rem;line-height:1.7;">
            ${roleNarrative}
          </p>
        </div>

        <!-- Hoja de ruta secuencial narrada con compuertas OGA -->
        <div style="margin:1.4rem 0;">
          <h5 style="margin:0 0 0.6rem;font-size:1rem;color:var(--navy);font-weight:700;">Hoja de ruta metodológica y compuertas del Órgano de Gobierno (OGA)</h5>
          <p style="margin-bottom:0.8rem;">
            ${roadmapNarrative}
          </p>
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
