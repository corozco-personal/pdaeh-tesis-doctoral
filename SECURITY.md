# Política de seguridad: Repositorio PDAEH

## Versiones soportadas

| Proyecto / Componente | Versión soportada | Estado |
| :--- | :--- | :--- |
| Marco metodológico PDAEH | v1.0.x | Activo |
| Portal web interactivo PDAEH | v1.0.x | Activo |
| Agente consultor PDAEH Advisor | v1.0.x | Activo |

---

## Reporte de vulnerabilidades

La seguridad, la integridad metodológica y la protección de datos en el marco PDAEH, sus recursos web y las herramientas de asistencia basadas en inteligencia artificial son prioritarias para el equipo de investigación.

Si identificas alguna vulnerabilidad de seguridad, fuga de información sensible o exposición indebida de credenciales en este repositorio, te solicitamos **NO** abrir una incidencia pública (*issue*).

### Procedimiento para el reporte:
1. Contacta directamente al investigador principal por correo electrónico:
   - **Carlos Eduardo Orozco Garcés**: `carlosorozco@unicauca.edu.co`
2. Incluye en tu mensaje:
   - Descripción técnica detallada del hallazgo.
   - Archivo, componente o ruta afectada.
   - Pasos para reproducir la vulnerabilidad o prueba de concepto (PoC).
   - Evaluación del impacto potencial sobre la arquitectura clásica o la infraestructura cuántica.

---

## Restricciones de seguridad y buenas prácticas en implementaciones PDAEH

1. **Preparación para Criptografía Post-Cuántica (PQC):**
   - Toda decisión arquitectónica que involucre canales de comunicación entre sistemas clásicos y procesadores cuánticos (QPU) debe prever la adopción de algoritmos post-cuánticos estandarizados por el NIST (ML-KEM / Crystals-Kyber, ML-DSA / Crystals-Dilithium, SLH-DSA / SPHINCS+), mitigando riesgos de almacenamiento previo y descifrado futuro (*Harvest Now, Decrypt Later*).
2. **Control de acceso y claves de API:**
   - Las claves de API y credenciales de acceso a proveedores cuánticos en la nube (IBM Quantum, AWS Braket, Azure Quantum) **jamás** deben quedar registradas en repositorios de código, configuraciones públicas ni scripts cliente.
   - Deben gestionarse mediante bóvedas seguras de secretos (*Secret Managers*) y proxies de backend autenticados.
3. **Guardrails y gobernanza estricta del agente consultor:**
   - Toda instancia del agente PDAEH Advisor debe ceñirse a las especificaciones formales inmutables (`agente-pdaeh-consultor/PDAEH_SPECIFICATION_V1.md` y `PDAEH_SPECIFICATION_V1.json`) para impedir alucinaciones arquitectónicas, garantizar la inmunidad frente a inyecciones de instrucciones (*jailbreaks*) y respetar taxativamente los puntos de control del Órgano de Gobierno Arquitectónico (OGA-1 a OGA-5).
