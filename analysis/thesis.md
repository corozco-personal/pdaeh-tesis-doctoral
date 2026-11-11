Arquitectura de referencia para la definición e implementación de arquitecturas de software empresariales híbridas, adaptado a las necesidades emergentes de la Ingeniería de Software Cuántica
Carlos Eduardo Orozco Garcés
Director:
PhD. MSc. César Jesús Pardo Calvache
Universidad del Cauca
Facultad de Ingeniería Electrónica y Telecomunicaciones
Departamento de Sistemas
1Grupo de I+D en Tecnologías de la información (GTI)
2Grupo de I+D en Ingeniería de Software (IDIS)
Medellín, XXX de XXX
Arquitectura de referencia para la definición e implementación de arquitecturas de software empresariales híbridas, adaptado a las necesidades emergentes de la Ingeniería de Software Cuántica
Tesis presentada a la Facultad de Ingeniería
Electrónica y Telecomunicaciones de la
Universidad del Cauca para obtener el
Título de:
Doctorado en
Ciencias de la Computación
Director:
PhD. MSc. César Jesús Pardo Calvache
Popayán
202X
Nota de Aceptación
_______________________
_______________________
_______________________
_______________________
Presidente del jurado
_______________________
Jurado
Agradecimientos
A la vida, por ser suficientemente larga para permitir que ocupe cuatro años de mi vida escribiendo sobre temas absurdamente complejos.
Carlos Eduardo Orozco, Medellín, Antioquia.
XXX de 202X
Tabla de contenido

# Índice de Tablas

Tabla 1. Objetivos específicos de la investigación.	21
Tabla 2. Objetivos de investigación planteados para la RSL.	38
Tabla 3. Preguntas de investigación planteadas para la RSL.	38
Tabla 4. Cadena de búsqueda genérica.	40
Tabla 5. Cadena de búsqueda adaptada.	40
Tabla 6. Criterios de inclusión.	41
Tabla 7. Criterios de exclusión.	41
Tabla 8. Categorías para la evaluación de la pertinencia de los estudios.	42
Tabla 9. Criterios definidos para la evaluación de la pertinencia de los estudios.	42
Tabla 10. Resultados obtenidos luego de aplicar la cadena de búsqueda.	43
Tabla 11. Resumen de los estudios primarios.	44
Tabla 12. Resultados obtenidos durante la evaluación de la pertinencia.	45
Tabla 13. Estudios teóricos.	49
Tabla 14. Soluciones metodológicas.	49
Tabla 15. Soluciones híbridas.	50
Tabla 16. Tipos de arquitecturas identificados en la literatura.	50
Tabla 17. Desafíos concretos identificados en la literatura.	54
Tabla 18. Requisitos no funcionales identificados en la literatura.	54
Tabla 19. Desafíos y estrategias sugeridos para abordarlos.	55
Tabla 20. Líneas de trabajo futuro identificadas en la literatura.	56
Tabla 21. Hallazgos principales.	57
Tabla 22. Sesgos y limitaciones.	61
Tabla 23. Estudios de caso y proyectos piloto identificados.	62
Tabla 24. Reportes técnicos publicados por empresas.	63
Tabla 25. Sesgos y limitaciones del estudio exploratorio.	64
Tabla 26. Sesgos y limitaciones operativas.	65
Tabla 27. Estudios que proponen lineamientos para definir arquitecturas de referencia.	67
Tabla 28. Plantilla para la adquisición de conocimiento.	68
Tabla 29. Conocimiento adquirido en los estudios analizados.	68
Tabla 30. Elementos identificados durante la homogeneización.	71
Tabla 31. Análisis de correspondencia entre estudios y elementos identificados.	72
Tabla 32. Estudios/propuestas identificados para la comparación.	74
Tabla 33. Plantilla de comparación.	75
Tabla 34. Comparación entre elementos (E1-E10) y estudios (S1-S17).	75
Tabla 35. Comparación entre elementos (E1-E10) y estudios piloto (S18-S20).	91
Tabla 36. Comparación entre elementos (E1-E10) y reportes (S21-S24).	93
Tabla 37. Plantilla de términos de integración (tomado de [28]).	101
Tabla 38. Plantilla que describe un elemento unificado (tomado de [28]).	101
Tabla 39. Resultados obtenidos durante la integración de elementos.	102
Tabla 40. Modelo integrado que incorpora ajustes y/o extensiones.	103
Tabla 41. Artefacto de preparación: unidades de significado por elemento.	107
Tabla 42. Artefacto de codificación abierta: códigos iniciales por elemento.	107
Tabla 43. Catálogo de códigos (artefacto de control semántico).	108
Tabla 44. Análisis de coocurrencia y afinidad semántica entre códigos abiertos.	108
Tabla 45. Categorías axiales identificadas.	109
Tabla 46. Relación entre categorías axiales y dimensiones.	109
Tabla 47. Relación entre dimensiones y elementos.	109
Tabla 48. Sesgos identificados y estrategias de mitigación.	112
Tabla 49. Tipos de dependencias definidos en DSM.	114
Tabla 50. Dependencias identificadas entre elementos y dimensiones.	115
Tabla 51. Cantidad de dependencias identificadas por elemento.	117
Tabla 52. Reordenamiento de elementos.	119
Tabla 53. Matriz de precedencias.	119
Tabla 54. Análisis de correspondencias consecutivas.	120
Tabla 55. Criterios de agregación.	121
Tabla 56. Aplicación de criterios por subconjunto.	121
Tabla 57. Criterios de reinterpretación entre estructura y proceso.	122
Tabla 58. Identificación del propósito dominante.	123
Tabla 59. Correspondencia con marcos de referencia.	123
Tabla 60. Evaluación de progresión arquitectónica.	123
Tabla 61. Denominación metodológica asignada a las fases del proceso.	124
Tabla 62. Sesgos identificados durante la derivación del proceso.	125
Tabla 63. Plantilla para documentar el proceso a nivel macro.	126
Tabla 64. Plantilla para documentar cada fase.	127
Tabla 65. Plantilla para documentar cada elemento	127
Tabla 66. Plantilla para la definición del actividades.	127
Tabla 67. Plantilla para la definición de actividades de realizadas por el OGA.	128
Tabla 68. Términos genéricos asociados a la definición de procesos	129
Tabla 69. Términos específicos del dominio metodológico propuesto.	129
Tabla 70. Identificación de roles para arquitecturas clásicas.	130
Tabla 71. Identificación de roles para arquitecturas cuánticas.	131
Tabla 72. Identificación de roles para arquitecturas híbridas.	132
Tabla 73. Roles consolidados.	134
Tabla 74. Descripción de roles definidos en el proceso.	135
Tabla 75. Clasificación de tipos de empresa.	136
Tabla 76. Roles aplicables en una microempresa/startup.	137
Tabla 77. Roles aplicables en una pequeña y mediana empresa.	138
Tabla 78. Roles aplicables en una empresa grande (corporación).	138
Tabla 79. Documentación del proceso a nivel macro.	139
Tabla 80. Actividades de verificación realizadas por el OGA en cada fase.	140
Tabla 81. Documentación de la Fase 1.	141
Tabla 82. Documentación del elemento E1: Objetivo de la arquitectura.	142
Tabla 83. Documentación del elemento E2: Contexto de la arquitectura	142
Tabla 84. Actividad F1.E1.A1. Análisis de objetivos estratégicos.	145
Tabla 85. Actividad F1.E1.A2. Validación de objetivos priorizados.	145
Tabla 86. Actividad F1.E1.A3. Formulación de objetivos arquitectónicos.	145
Tabla 87. Actividad F1.E2.A1. Levantamiento del estado actual (AS-IS).	146
Tabla 88. Actividad F1.E2.A2. Análisis de restricciones y condicionantes.	147
Tabla 89. Actividad F1.E2.A3. Mapeo de partes interesadas y preocupaciones.	147
Tabla 90. Actividad F1.E1.A4 {E2}. Preparación y envío de artefactos al OGA.	147
Tabla 91. Actividad F1.E1.A5 {E2}. Ajustar artefactos según observaciones del OGA.	148
Tabla 92. Documentación de la Fase 2.	149
Tabla 93. Documentación del elemento E3: Grado de abstracción.	150
Tabla 94. Documentación del elemento E4: Glosario de términos y definiciones.	150
Tabla 95. Actividad F2.E3.A1. Definición de perspectivas y vistas arquitectónicas.	152
Tabla 96. Actividad F2.E3.A2. Validación perspectivas niveles de abstracción.	153
Tabla 97. Actividad F2.E3.A3. Formalización del modelo de abstracción arquitectónica.	153
Tabla 98. Actividad F2.E4.A1 Recopilación de análisis terminológico.	155
Tabla 99. Actividad F2.E4.A2. Construcción del vocabulario arquitectónico unificado.	155
Tabla 100. Actividad F2.E4.A3. Validación del vocabulario arquitectónico.	156
Tabla 101. F2.E4.A4 {E3}. Preparación y envío de artefactos al OGA.	156
Tabla 102. Actividad F2.E4.A5 {E3}. Ajustar artefactos según observaciones del OGA.	156
Tabla 103. Documentación de la Fase 3.	158
Tabla 104. Documentación del elemento E6: Atributos de calidad.	159
Tabla 105. Documentación del elemento E5: Estructuras arquitectónicas.	159
Tabla 106. Actividad F3.E6.A1. Especificación de drivers de arquitectura.	162
Tabla 107. Actividad F3.E6.A2. Especificación de atributos transversales en la solución.	162
Tabla 108. Actividad F3.E6.A3. Especificación de atributos de integración clásicos y cuánticos.	163
Tabla 109. Actividad F2.E6.A4. Especificación de atributos de seguridad clásicos y cuánticos.	163
Tabla 110. Actividad F2.E6.A5. Consolidación de atributos identificados en la solución.	164
Tabla 111. Actividad F2.E5.A1. Definición del marco de estructuras arquitectónicas.	165
Tabla 112. Actividad F2.E5.A2. Especificación de estructuras transversales en la solución.	166
Tabla 113. Actividad F2.E5.A3. Especificación de estructuras de integración y datos.	167
Tabla 114. Actividad F2.E5.A4. Especificación de estructuras de seguridad.	167
Tabla 115. Actividad F3.E5.A5. Consolidación de estructuras arquitectónicas.	168
Tabla 116. F3.E6.A6 {E5}. Preparación y envío de artefactos al OGA.	169
Tabla 117. Actividad F3.E6.A7 {E6}. Ajuste de artefactos según observaciones del OGA.	169
Tabla 118. Documentación de la Fase 4.	170
Tabla 119. Documentación del elemento E9: Componentes estructurales.	170
Tabla 120. Documentación del elemento E10: Elementos reutilizables.	171
Tabla 121. Actividad F4.E9.A1. Definición del marco de componentes estructurales.	173
Tabla 122. Actividad F4.E9.A2. Especificación de componentes transversales de la solución.	174
Tabla 123. Actividad F4.E9.A3. Especificación de componentes de integración y datos.	174
Tabla 124. Actividad F4.E6.E4. Especificación de componentes de seguridad clásicos y cuánticos.	175
Tabla 125. Actividad F4.E9.A5. Consolidación del catálogo de componentes.	176
Tabla 126. Actividad F4.E10.A1. Definición del marco de elementos reutilizables.	178
Tabla 127. Actividad F4.E10.A2. Especificación de elementos reutilizables de la solución.	178
Tabla 128. Actividad F4.E10.A3. Especificación de elementos reutilizables de integración y datos.	179
Tabla 129. Actividad F4.E10.A4. Especificación de elementos reutilizables de seguridad.	179
Tabla 130. Actividad F4.E10.A5. Consolidación de la biblioteca de elementos reutilizables.	180
Tabla 131. Actividad F4.E9.A6 {E10}. Preparación y envío de artefactos al OGA.	180
Tabla 132. Actividad F4.E9.A7 {E10}. Ajuste de artefactos según observaciones del OGA.	181
Tabla 133. Documentación de la Fase 5.	182
Tabla 134. Documentación del elemento E7: Estilos y patrones arquitectónicos.	182
Tabla 135. Documentación del elemento E8: Patrones de diseño.	183
Tabla 136. Actividad F5.E7.A1. Definición del marco de estilos arquitectónicos.	185
Tabla 137. Actividad F5.E7.A2. Especificación de estilos transversales de la solución.	186
Tabla 138. Actividad F5.E7.A3. Especificación de estilos de integración.	186
Tabla 139. Actividad F5.E7.A4. Especificación de estilos de seguridad clasicos y poscuanticos.	187
Tabla 140. Actividad F5.E7.A5. Consolidación del catálogo de estilos y patrones arquitectónicos.	187
Tabla 141. Actividad F5.E8.A1. Definición del marco de patrones de diseño.	189
Tabla 142. Actividad F5.E8.A2. Especificación de patrones de diseño transversales de la solución.	189
Tabla 143. Actividad F5.E7.A3. Especificación de patrones de integración y datos clásico-cuánticos	190
Tabla 144. Actividad F5.E7.A4. Especificación de patrones de diseño de seguridad clásicos y cuánticos.	190
Tabla 145. Actividad F5.E7.A5. Consolidación del catálogo de patrones de diseño.	191
Tabla 146. Actividad F5.E7.A6 {E8}. Preparación y envío de artefactos al OGA.	191
Tabla 147. Actividad F5.E7.A7 {E8}. Ajuste de artefactos según observaciones del OGA.	191
Tabla 148. Artefactos que constituyen la línea base arquitectónica.	192
Tabla 149. Limitaciones metodológicas del proceso.	193
Tabla 150. Limitaciones estructurales del proceso.	193
Tabla 151. Sesgos identificados durante el desarrollo del proceso.	194
Tabla 152. Preguntas que orientan la evaluación.	200
Tabla 153. Criterios de selección de los evaluadores expertos.	201
Tabla 154. Estrategia de conformación del panel de expertos.	202
Tabla 155. Criterios de calidad para la validación del contenido.	202
Tabla 156. Escala de valoración empleada para calificar los criterios de calidad.	203
Tabla 157. Estructura del instrumento de validación por juicio de expertos.	203
Tabla 158. Resumen de cantidad de preguntas por sección.	204
Tabla 159. Elementos evaluados en la Sección II.	204
Tabla 160. Elementos evaluados en la Sección III.	204
Tabla 161. Elementos evaluados en la Sección IV.	205
Tabla 162. Elementos evaluados en la Sección V.	206
Tabla 163. Elementos evaluados en la Sección VI.	207
Tabla 164. Elementos evaluados en la Sección VII.	207
Tabla 165. Valoración del coeficiente Kappa.	211
Tabla 165. Garantías aplicadas al tratamiento de los datos	213
Tabla 166. Cronograma de ejecución del juicio de expertos.	214
Tabla 167. Sesgos identificados durante la validación mediante juicio de expertos.	215
Tabla 168. Amenazas a la validez de la evaluación.	216

# Índice de Figuras

Figura 1. Etapas propuestas en la metodología investigación-acción [22].	22
Figura 2. Ciclo 1. Revisión Sistemática de la Literatura.	22
Figura 3. Ciclo 2. Definición de la Arquitectura de Referencia.	23
Figura 4. Ciclo 3. Evaluación mediante juicio de expertos.	23
Figura 5. Ciclo 4. Evaluación de escenarios hipotéticos.	24
Figura 6. Ciclos para la ejecución del proyecto.	24
Figura 7. Fase de planeación.	37
Figura 8. Fase de ejecución.	43
Figura 9. Distribución de puntajes obtenidos por estudio primario.	46
Figura 10. Distribución de puntajes obtenidos por criterio y tipo de estudio.	46
Figura 11. Distribución temporal por tipo de estudio.	47
Figura 12. Distribución de estudios por tipo de investigación y de solución.	48
Figura 13. Grafo de relación entre estudios y tipos de solución.	51
Figura 14. Distribución de impacto por tipo de estudio relacionado.	52
Figura 15. Distribución de estudios por tipo de requisito no funcional.	55
Figura 16. Protocolo para la ejecución del estudio exploratorio.	62
Figura 17. Mapa de calor ordinal entre el nivel de correspondencia de elementos.	73
Figura 18. Mapa de calor entre los elementos E1-E10 y los estudios (S1-S17).	90
Figura 19. Mapa de calor entre los elementos E1-E10 y los estudios (S18-S24)	97
Figura 20. Cobertura de estudios por elemento.	99
Figura 21. Perfil promedio de cobertura por elemento.	99
Figura 22. Modelo de referencia obtenido como resultado de la armonización.	111
Figura 23. Grafo de dependencias entre elementos E1-E10.	116
Figura 24. Fases preliminares que conforman el proceso.	124
Figura 25. Flujo de actividades llevadas a cabo por el OGA al finalizar cada fase.	140
Figura 26. Flujo de actividades que conforman la Fase 1.	143
Figura 27. Flujo de actividades que conforman el elemento E1.	144
Figura 28. Flujo de actividades que conforman el elemento E2.	146
Figura 29. Flujo general de actividades que conforman la Fase 2.	151
Figura 30. Flujo de actividades que conforman el elemento E3.	152
Figura 31. Flujo general de actividades asociadas con el elemento E4.	154
Figura 32. Flujo general de actividades que conforman la Fase 3.	160
Figura 33. Flujo de actividades que conforman el elemento E6.	161
Figura 34. Flujo de actividades que conforman el elemento E6.	165
Figura 35. Flujo general de actividades que conforman la Fase 4.	172
Figura 36. Flujo de actividades que conforman el elemento E9.	173
Figura 37. Flujo de actividades que conforman el elemento E6.	177
Figura 38. Flujo general de actividades que conforman la Fase 5.	184
Figura 39. Flujo de actividades que conforman el elemento E7.	185
Figura 40. Flujo de actividades que conforman el elemento E8.	188

# Capítulo I. Introducción


## Introducción

En este capítulo se desarrolla la justificación del trabajo de investigación, se establecen los objetivos que orientan el estudio y se explica la estrategia metodológica empleada. Además, se presenta la solución propuesta y se describe la organización del documento, especificando el contenido de cada capítulo.

## Problemática y justificación

Actualmente, las compañías de desarrollo de software disponen de una alta diversidad de procesos, técnicas y marcos metodológicos diseñados para facilitar y normalizar las etapas y actividades necesarias para entregar soluciones efectivas a los clientes . Este escenario ha dado lugar a que el desarrollo de software se aborde desde dos perspectivas: por un lado, las metodologías tradicionales que delinean fases bien definidas, incluyendo: análisis, diseño, implementación, pruebas y despliegue, para la creación de software eficaz . Por otro lado, existen las metodologías ágiles, que fomentan entregas rápidas mediante iteraciones cortas, haciendo énfasis en la comunicación, la colaboración, la transparencia y una baja carga documental . Como resultado, las metodologías tradicionales y ágiles conforman lo que hoy se denomina el ciclo clásico de desarrollo de software . Sin embargo, en las últimas décadas se han realizado estudios y esfuerzos en la definición de nuevas metodologías adaptadas a las necesidades emergentes en la industria de software, que incluye retos relacionados con: la eficiencia, seguridad, escalabilidad, mejor capacidad de procesamiento, entre otros. En particular, uno de los enfoques que promete mejorar exponencialmente estos aspectos es la computación cuántica, cuyo formalismo físico y matemático fue desarrollado a principios del siglo XX. Sin embargo, no fue sino hasta la década de 1980, cuando el físico estadounidense Paul Benioff introdujo la idea de utilizar los principios de la física cuántica en la informática . Posteriormente, los esfuerzos e ideas propuestas por Richard Feynman y Yuri Manin, sentaron las bases de lo que actualmente se conoce como computación cuántica desde la perspectiva de las ciencias computacionales.
La computación cuántica aplica el formalismo físico y matemático de la mecánica cuántica para solucionar problemas computacionales, marcando un contraste significativo con el desarrollo de software convencional mediante el uso de qubits . Los qubits (también conocidos como bits cuánticos), son la unidad básica de información en la computación cuántica, análoga al bit en la computación clásica. A diferencia de un bit clásico que puede encontrarse en uno de dos estados definidos: 0 o 1, un qubit puede existir simultáneamente en múltiples estados gracias al principio de superposición cuántica, permitiendo que la información se procese de manera simultánea a un nivel sin precedentes, lo que promete revolucionar la capacidad de procesamiento de información frente a los sistemas clásicos , , .
Con el paso de los años, los avances en torno a la computación cuántica trascendieron la teoría, consolidándose como un área de interés que juega un papel de primer nivel en la agenda de la industria de software, impulsado principalmente por gigantes tecnológicos como Google , IBM  y Microsoft , que han invertido significativamente en recursos financieros, de infraestructura y talento humano para el desarrollo de computadoras cuánticas. Desde la perspectiva industrial, estos avances están motivados por la necesidad de resolver problemas múltiples áreas de interés, por ejemplo: la inteligencia artificial, la ciencia de datos, el análisis predictivo, la ciberseguridad, la optimización de procesos empresariales, entre otros . Como resultado, la integración de la computación cuántica en el desarrollo de nuevas soluciones tecnológicas se ha convertido en un punto de enfoque crítico para la industria.
Simultáneamente, el sector académico ha enfocado los esfuerzos de estudio en clarificar y sistematizar el conocimiento en torno a un campo emergente y relacionado con la computación cuántica, denominado: Ingeniería de Software Cuántica . Este esfuerzo busca adaptar los fundamentos de la Ingeniería de Software Clásica (que incluye conceptos, definiciones, prácticas, roles y actividades) a los cambios disruptivos que surgen con el avance de la computación cuántica. Para lograrlo, se han desarrollado soluciones para esbozar el ciclo de vida del desarrollo de software específico para sistemas cuánticos , que incluyen: investigaciones exploratorias para mapear el estado del arte de las distintas fases de desarrollo de software dentro del ámbito cuántico , la creación de marcos de trabajo híbridos clásico/cuántico , y el desarrollo de principios  y/o técnicas  adaptadas al desarrollo de algoritmos cuánticos. De este modo, los esfuerzos académicos complementan los avances industriales, estableciendo un puente entre la teoría y la práctica que promete acelerar la evolución y aplicación de la tecnología cuántica en el software, marcando un hito en la forma en que se enfrentan los retos tecnológicos y se desarrollan soluciones innovadoras.
En particular, una de las áreas centrales de la Ingeniería de Software Cuántica incluye la definición de estrategias y mecanismos que faciliten el diseño de sistemas desde el punto de vista de la arquitectura de software, el cual representa el objeto de estudio que orienta el desarrollo y los resultados reportados en este proyecto de investigación.
Con el propósito de establecer un panorama amplio en torno al estudio de la arquitectura de software desde el punto de vista de la computación cuántica, se llevó a cabo una Revisión Sistemática de la Literatura (RSL), cuyos resultados indican un fuerte interés en el área desde tres perspectivas: (i) la construcción de un estado del arte claro en torno a la temática; la (ii) identificación de soluciones a través de la definición de modelos, metodologías y marcos de trabajo basados en modelos de facto o herramientas que faciliten el desarrollo de soluciones híbridas y cuánticas; y (iii) el estudio de los criterios de calidad que se deben considerar para el diseño de arquitecturas de software dentro  del contexto de la computación cuántica, y su relación con la transición entre el paradigma clásico y cuántico a través de un nuevo enfoque conocido como arquitectura de software híbrida (que se refiere a aquella que integra aspectos de ambos enfoques).
En general, los resultados reportados en la literatura mostraron un panorama orientado hacia el estudio de la importancia, estructura y soluciones que se deben considerar para el desarrollo de dos tipos de arquitecturas emergentes: (i) las arquitecturas híbridas (que buscan adaptar prácticas presentes en el ciclo de vida del software clásico a las necesidades que surgen como consecuencia de la computación cuántica), y (ii) el diseño de arquitecturas puramente cuánticas, que plantean un estado del conocimiento completamente nuevo que se debe abordar desde el punto de vista de las necesidades y desafíos en el contexto de la computación cuántica.
Sin embargo, la RSL resalta que la arquitectura de software cuántica e híbrida representan áreas relativamente recientes que aún se encuentran en etapas preliminares de definición, diseño y desarrollo. De igual manera, los resultados muestran que las soluciones existentes son heterogéneas y no se han extendido lo suficiente para que puedan ser utilizadas en la industria, lo que indica que existe una alta variabilidad, disparidad o irregularidades en su estructura, composición o características. En la práctica, esta heterogeneidad podría impactar negativamente en el rendimiento, la consistencia, la comprensión, desarrollo o replicación de las arquitecturas hibridas y/o cuánticas que se quieran desarrollar en el futuro, ya que no existe un consenso general en torno a las definiciones, conceptos y elementos involucrados para la definición de arquitecturas empresariales cuánticas.
De acuerdo con lo anterior, las arquitecturas de software cuánticas son un campo/área de conocimiento sensible a mejoras, discusión y desarrollo. Además, los resultados reportados en la RSL revelan la existencia de iniciativas que tratan de adaptar el conjunto de mejores prácticas y conceptos presentes en las arquitecturas clásicas mediante el desarrollo de soluciones metodológicas híbridas que integren el conocimiento existente en la teoría actual de la arquitectura de software en el contexto de la Ingeniería de Software Cuántica .
Por otro lado, el análisis de las tendencias presentes en la industria indica que las empresas tienen un interés fuerte en adoptar e implementar soluciones que apliquen los beneficios que promete la computación cuántica. Sin embargo, la falta de soluciones generales y estandarizadas obliga a las empresas a invertir esfuerzos adicionales en adaptar las soluciones existentes propuestas por proveedores específicos a su propio modelo de negocio, generando un fenómeno conocido como vendor-locking (o dependencia con el proveedor) . Como resultado, sólo algunas multinacionales y empresas de la industria de TI como Google , IBM , Microsoft , QCI (Quantum Circuits) , IonQ , D-Wave Systems , entre otros, cuentan con la capacidad de desarrollar computadoras cuánticas de alto nivel.
No obstante, el interés de la industria en torno a este campo no se limita a la Big-Tech, algunas empresas de diversos sectores están comenzando a explorar, adquirir y utilizar computadoras cuánticas con capacidades limitadas para resolver necesidades específicas de negocio, mejorar sus operaciones y desarrollar nuevas soluciones , algunas de ellas son: Alibaba, Tencent, Nokia, Airbus, Hewlett-Packard Company, AT&T, Toshiba, Mitsubishi, SK Telecom, Thor, Lockheed, Rigetti Computing, Biogen, Volkswagen, Amgen, entre otros . De esta manera, se observa que el interés en el desarrollo de soluciones que incluyan aspectos propios de la computación cuántica hace parte de la agenda actual de muchas empresas de renombre en la industria.
Adicionalmente, se identificó una alta diversidad de estilos arquitectónicos enfocados en el diseño de soluciones tanto híbridas como cuánticas. Esta variedad refleja un panorama heterogéneo de estrategias y patrones arquitectónicos, abarcando desde arquitecturas en capas, pasando por patrones de contención recursiva, hasta llegar a configuraciones de computación cuántica universal .
Por un lado, la variedad de estilos muestra un interés creciente en proponer soluciones capaces de adaptarse a necesidades específicas, aprovechar diferentes tecnologías subyacentes o abordar problemas concretos de manera más eficiente; asimismo, la experimentación y la diversidad pueden fomentar la innovación y el descubrimiento de enfoques más efectivos. Sin embargo, la diversidad también indica que aún no existe un marco unificado que facilite la definición de arquitecturas empresariales bajo un modelo común, lo que eventualmente puede llevar a problemas importantes en términos de compatibilidad, interoperabilidad, colaboración, complejidad en el desarrollo y mantenimiento de software, inconsistencias en la calidad y desempeño de las aplicaciones, dificultad en la adopción de tecnologías cuánticas, entre otros .
Desde el punto de vista pragmático, la falta de homogeneidad de las soluciones reportadas en el análisis de la literatura hace evidente la necesidad de estandarizar el desarrollo de arquitecturas de software cuánticas. Desde el punto de vista metodológico, esto puede abordarse mediante la definición de marcos de trabajo comunes que simplifiquen su desarrollo y mantenimiento, y que faciliten la creación de soluciones híbridas y cuánticas con mayor grado de cohesión y eficiencia en el diseño de sistemas dentro de la industria del software . Para lograrlo, una propuesta orientada al diseño y caracterización de nuevas arquitecturas debe considerar (al menos), los siguientes aspectos: (i) reducir los costos de operación e infraestructura, optimizando el uso de recursos cuánticos cuyo acceso resulta considerablemente más costoso que el de la infraestructura clásica; (ii) garantizar la compatibilidad, integrando los requerimientos propios del paradigma cuántico junto con los atributos no funcionales consolidados en la computación tradicional; y (iii) facilitar la transición, migración y evolución progresiva desde entornos clásicos hacia configuraciones híbridas y cuánticas.
Adicionalmente, aunque se identificaron diversas propuestas orientadas al diseño de arquitecturas híbridas y a la incorporación de componentes cuánticos en sistemas tradicionales, estas se enfocan principalmente en aspectos técnicos o en capas específicas de la arquitectura de software. En particular, los resultados no evidencian una aproximación integral formulada explícitamente desde la perspectiva de la arquitectura empresarial que articule de manera sistemática las dimensiones estratégica, organizacional y de gobernanza con los objetivos del negocio. Esta situación pone de manifiesto un vacío significativo, ya que la adopción del paradigma cuántico en contextos reales demanda una visión estructurada que supere el ámbito técnico y se integre de forma coherente dentro del marco global de la arquitectura empresarial, asegurando alineación estratégica, sostenibilidad operativa y capacidad de evolución.
Desde la perspectiva de la arquitectura empresarial, estos elementos deben integrarse dentro de una solución estructurada que conecte explícitamente las decisiones arquitectónicas con la estrategia organizacional, los modelos de gobierno de TI y la gestión del portafolio de aplicaciones e infraestructura. En este sentido, la estandarización requiere materializarse en un marco de referencia capaz de coordinar los dominios de negocio, datos, aplicaciones y tecnología con las nuevas capacidades cuánticas, asegurando coherencia estratégica y sostenibilidad en el tiempo.
Finalmente, aunque el enfoque inicial de la RSL se orientó al análisis de las arquitecturas cuánticas desde una perspectiva general, los resultados obtenidos evidenciaron una segmentación clara de las propuestas identificadas en la literatura:
- La primera línea se concentra en el diseño, formalización y refinamiento de metodologías estrictamente cuánticas, orientadas a adaptar o extender marcos existentes hacia entornos de computación cuántica, con énfasis en modelos conceptuales, ciclos de desarrollo y estructuras arquitectónicas propias del paradigma cuántico.
- La segunda línea dirige su atención al estudio de soluciones híbridas, que buscan establecer un puente efectivo entre las metodologías clásicas de desarrollo de software y los enfoques cuánticos emergentes. Estas propuestas reconocen la coexistencia necesaria entre infraestructuras tradicionales y componentes cuánticos, planteando esquemas de integración y transición progresiva.
Luego de realizar el análisis comparativo de ambas líneas, el equipo investigador decidió orientar el estudio arquitectónico hacia la segunda perspectiva, centrada en las soluciones híbridas. Esta decisión se fundamenta en que el estado actual de la tecnología cuántica exige esquemas de integración con infraestructuras clásicas existentes, tanto a nivel de procesamiento como de gestión y gobierno de TI. Además, abordar la arquitectura desde un enfoque híbrido permite proyectar soluciones que superan el ámbito estrictamente teórico y se alinean con dinámicas reales de la industria del software, donde los componentes cuánticos comienzan a incorporarse como capacidades especializadas dentro de ecosistemas tecnológicos consolidados.
Al centrar el estudio en las arquitecturas de software híbridas, la heterogeneidad identificada en la literatura y en la industria puede ser sistematizada y estructurada mediante la definición de una arquitectura de referencia . En términos generales, una arquitectura de referencia se puede entender como una abstracción de alto nivel que encapsula características comunes y prácticas de diseño aplicables a lo largo de múltiples proyectos y contextos de software. Para lograrlo, las arquitecturas de referencia definen estructuras de software, métodos de integración y convenciones de codificación, proporcionando una base estandarizada para el desarrollo de software. Gracias a esto, las arquitecturas de referencia promueven el diseño de soluciones que siguen una base de conocimiento estructural común .
Teniendo en cuenta lo anterior, y con el propósito de definir el alcance de la investigación de acuerdo con los resultados reportados en la RSL, surge entonces la siguiente pregunta problema: ¿Cómo apoyar el diseño e implementación de arquitecturas de software empresariales adaptadas a las necesidades y desafíos presentes en la computación cuántica? Para responder esta pregunta se propone la siguiente hipótesis: El diseño de una arquitectura de referencia que incorpore un conjunto estandarizado de componentes para apoyar la definición de arquitecturas de software empresariales hibridas adaptadas a los desafíos planteados en el contexto de la computación cuántica.
La arquitectura de referencia que se busca proponer en este proyecto de investigación servirá como un modelo/patrón de referencia adaptable y/o configurable que proporcionará a las empresas de software la capacidad de: imitar, reproducir y adaptar una arquitectura empresarial de software híbrida en sus proyectos. Para lograrlo, la arquitectura de referencia se centrará en abstraer el conjunto de buenas prácticas existentes en el área de la arquitectura de software empresarial clásica y cuántica, con el objetivo de facilitar la transición entre sistemas clásicos a cuánticos, o la definición de soluciones híbridas que apliquen lo mejor de los dos enfoques de forma conjunta.

## Objetivos de la investigación

A continuación, se presentan los objetivos aprobados por el consejo de Facultad de Ingeniería Electrónica y Telecomunicaciones de la Universidad del Cauca según la resolución número 8.4.3-4.4/305 de 2024 vigente a la fecha de entrega de este documento.

## Objetivo general

Desarrollar una arquitectura de referencia adaptada a las necesidades emergentes de la Ingeniería de Software Cuántica, que apoye el diseño e implementación de arquitecturas de software empresariales híbridas en la industria de software.

## Objetivos específicos

En la Tabla 1 se presentan los objetivos específicos propuestos para la investigación, los cuales siguen los lineamientos propuestos en la taxonomía de Bloom :
**Tabla 1. Objetivos específicos de la investigación.**

### Tabla extraída 1

| Identificador | Descripción |
| --- | --- |
| OE1 | Identificar las tendencias, estudios emergentes, propuestas, alcance, limitaciones y desafíos de la arquitectura de software en el contexto de la computación cuántica, a través de una Revisión Sistemática de la Literatura que delimite un estado del cocimiento extendido en torno a esta área de interés. |
| OE2 | Diseñar una arquitectura de referencia para arquitecturas de software empresariales híbridas, que incorpore los principios de la Ingeniería de Software Cuántica y la armonización de los elementos clave identificados en el OE1 . |
| OE3 | Evaluar la arquitectura de referencia propuesta en el OE2 a través de la aplicación de la técnica de evaluación de juicio de expertos, para determinar aspectos críticos e insights significativos (información valiosa y específica) que sirvan para mejorar y depurar la propuesta. |
| OE4 | Evaluar la arquitectura de referencia propuesta en el OE2 mediante la validación de escenarios hipotéticos como método mixto de evaluación que permita determinar su grado de aplicabilidad. |


## Metodología aplicada durante la investigación

A partir del análisis realizado por el equipo investigador, se identificó que el marco más adecuado desarrollar la propuesta se adapta al formalismo que propone la metodología investigación-acción con múltiples ciclos . En general, la metodología se llevó a cabo ejecutando un conjunto de ciclos, donde cada ciclo se divide en cuatro etapas: planeación, ejecución, desarrollo y reflexión, como se muestra en la (la Figura 1):
**Figura 1. Etapas propuestas en la metodología investigación-acción .**
Como resultado de la planeación planteada para este proyecto de investigación, se identificó un total de cinco ciclos a ejecutar, los cuales son descritos a continuación.
El Ciclo 1 (ver la Figura 2) fue realizado a través de una Revisión Sistemática de la Literatura que siguió los lineamientos propuestos por Kitchenham et al. . El propósito de la revisión de la literatura fue identificar el estado del arte actualizado en torno a la temática de interés y determinar las brechas existentes que permitirán el desarrollo de la propuesta doctoral:
**Figura 2. Ciclo 1. Revisión Sistemática de la Literatura.**
Sin embargo, con el propósito de extender la fuente de evidencia y enriquecer la comprensión del fenómeno más allá del ámbito estrictamente académico, se incorporó un estudio exploratorio en la industria. Este ejercicio permitió complementar los resultados de la revisión sistemática con información proveniente de contextos organizacionales reales, identificar prácticas emergentes y reconocer limitaciones, expectativas y condiciones de adopción que no siempre se reflejan en la literatura científica. Para lograrlo, se aplicó un protocolo basado en el método de Revisión de la Literatura Multivocal (RLM)  y el marco de ingeniería de software basado en evidencia (ISBE) .
El Ciclo 2 (ver la Figura 3) se centró en la definición de la arquitectura de referencia mediante el desarrollo de un proceso de armonización de las soluciones e iniciativas identificadas en el Ciclo 1, siguiendo las actividades y protocolos propuestos por el framework de armonización de múltiples modelos definido en :
**Figura 3. Ciclo 2. Definición de la Arquitectura de Referencia.**
No obstante, el desarrollo de la propuesta puso en evidencia una limitación metodológica que restringía su aplicabilidad en contextos reales, particularmente en lo relacionado con la operacionalización de los elementos arquitectónicos definidos y su adopción dentro de entornos organizacionales concretos. Para abordar esta situación, se incorporó una actividad adicional orientada a la definición de un proceso estructurado que permitiera guiar la instanciación, adaptación e implementación de la arquitectura propuesta.
El Ciclo 3 (ver la Figura 4) se orientó a evaluar la arquitectura de referencia obtenida como resultado del Ciclo 2 aplicando el método de juicio de expertos . El propósito de esta evaluación fue analizar la validez de la propuesta desde la perspectiva de especialistas con experiencia en arquitectura empresarial, ingeniería de software y computación cuántica, y así identificar oportunidades de mejora.
**Figura 4. Ciclo 3. Evaluación mediante juicio de expertos.**
El Ciclo 4 (ver la Figura 5) tuvo por objetivo determinar la aplicabilidad de la propuesta refinada durante el Ciclo 3 en un entorno simulado y controlado. Para ello, se realizó una evaluación adaptando el método para la evaluación de arquitecturas de software a través de escenarios hipotéticos propuesto por Kazman, Bass, Abowd, y Webb , también conocido como SAAM (en inglés: Software Architecture Analysis Method). La aplicación de SAAM facilitó la construcción y evaluación de escenarios representativos que reflejan situaciones plausibles de uso, cambio y evolución del sistema, permitiendo examinar la capacidad de la arquitectura para responder a atributos de calidad como modificabilidad, interoperabilidad, desempeño y escalabilidad en contextos híbridos. Este ejercicio permitió identificar fortalezas, posibles puntos de tensión y oportunidades de mejora, aportando evidencia adicional sobre la viabilidad técnica y estructural de la arquitectura de referencia propuesta.
**Figura 5. Ciclo 4. Evaluación de escenarios hipotéticos.**
Finalmente, el Ciclo 5 incluye todas las actividades relacionadas con la documentación del proyecto y su socialización. Este ciclo es transversal y fue llevado a cabo durante todo el tiempo que duro el proyecto de investigación.
En la Figura 6 se presenta el resumen estructurado de los ciclos que se fueron ejecutados durante el desarrollo del proyecto:
**Figura 6. Ciclos para la ejecución del proyecto.**
En las siguientes subsecciones se presenta el detalle que documenta cada una de las actividades realizadas en cada ciclo.

## Ciclo 1: Revisión Sistemática de la Literatura

La Revisión de la Literatura (RSL) tuvo una duración de 14 meses, como artefacto final se obtuvo un reporte estructurado que socializó el análisis de los resultados obtenidos después de identificar, caracterizar y analizar los hallazgos obtenidos durante el análisis de la literatura. A continuación, se presenta cada una de las fases y actividades que fueron realizadas para cumplir con los objetivos propuestos en la RSL.

## Planeación

La planeación incluye todos los elementos necesarios para establecer la estrategia que permite a los autores obtener información de valor para los análisis posteriores. Para lograrlo, se realizaron las siguientes actividades.
- Definir los objetivos de la investigación (OI): Los objetivos de investigación orientan la elección de los estudios relevantes, proporcionando un marco estratégico que facilita la identificación de los componentes clave para el desarrollo efectivo de la etapa de planificación.
- Definir las preguntas de investigación (PI): Las preguntas de investigación especifican la amplitud y el tipo de resultados anticipados de la investigación.
- Definir la estrategia de búsqueda: La estrategia de búsqueda determina las actividades necesarias para garantizar la selección de estudios pertinentes de acuerdo con los objetivos y preguntas de investigación.
- Definir los criterios de inclusión y exclusión para seleccionar los estudios primarios: Los criterios de inclusión (CI) determinan los aspectos que se deben considerar para decidir si un estudio puede clasificarse como primario, es decir, es un estudio que contribuye directamente al tema de investigación. Los criterios de exclusión (CE) permiten identificar aquellos estudios que no proporcionan información suficiente para ser considerados como primarios.
- Definir los criterios para evaluar la pertinencia de los estudios primarios: La evaluación de la pertinencia proporciona una hoja de ruta que otros investigadores pueden utilizar para identificar estudios que pueden ser relevantes para sus propios estudios y/o revisiones de la literatura en el futuro.

## Ejecución

En el contexto de la RSL, la ejecución cubre las actividades relacionadas con la revisión preliminar de la literatura gris y la ejecución de la cadena de búsqueda que fue construida durante la etapa de planeación.
- Revisión de la literatura gris: La literatura gris comprende todos los estudios proporcionados por expertos, sirviendo como base para construir un estado del conocimiento inicial antes de ejecutar la cadena de búsqueda.
- Aplicación de la cadena de búsqueda: La cadena de búsqueda obtenida durante la planeación fue aplicada en cada una de las bases de datos científicas designadas para la RSL. Como resultado de esta actividad, se realizaron las tareas subsecuentes de filtrado que resultaron en los artículos primarios que fueron objeto de análisis en la siguiente etapa.

## Desarrollo

El análisis de los resultados obtenidos durante la fase de ejecución se realizó a través de dos actividades:
- Evaluación de la pertinencia de los estudios: Mediante el análisis cuantitativo de los resultados obtenidos después de aplicar los criterios para evaluar la pertinencia de los estudios definidos en la fase de planeación.
- Análisis cuantitativo y cualitativo de los estudios primarios: Esta actividad se orientó a responder las preguntas de investigación siguiendo métodos de análisis cuantitativos y cualitativos, los cuales fueron aplicados para obtener información que estuvo alineada con los objetivos de investigación.

## Reflexión

En el contexto de la RSL, la reflexión se logró a través de la discusión de los resultados obtenidos en la etapa anterior.
- Discusión de los resultados: En esta actividad, el equipo investigador identificó los aspectos más relevantes en torno a las propuestas, limitaciones y vías de trabajo futuro reportados en los estudios primarios.
- Identificación de sesgos: Esta actividad tuvo como finalidad reconocer y mitigar posibles amenazas a la validez del estudio, proporcionando una base que garantice la transparencia y la rigurosidad metodológica de los protocolos y análisis realizados durante la ejecución de la RSL.

## Ciclo 2: Definición de la arquitectura de referencia

La definición de la propuesta tuvo una duración de 20 meses, que resultó en una primera versión de la arquitectura de referencia. Para llevar a cabo esta tarea, se aplicó el formalismo propuesto por el framework para la armonización de múltiples modelos y estándares propuesto en , que describe cada una de las actividades necesarias para homogeneizar, comparar e integrar las propuestas identificadas en la RSL y un estudio complementario que fue realizado para reforzar las perspectivas en torno al área de interés desde el punto de vista de la industria. En general, el framework propuesto en  establece que la armonización se logra aplicando cuatro métodos: un (i) método de identificación, un (ii) método de homogeneización, un (iii) método de comparación y (iv) un método de integración, los cuales fueron ejecutados de acuerdo con su correspondencia con las etapas que propone la metodología de investigación-acción.

## Planeación

En el contexto de este proyecto, la planeación tiene una correspondencia directa con el método de identificación, cuya ejecución coincide con el desarrollo de la RSL y el estudio complementario.

## Ejecución

La ejecución del ciclo corresponde al desarrollo de los métodos de homogeneización y comparación, que son descritos a continuación:
- Método de homogeneización: El método de homogeneización, propuesto y descrito en , sirve para reducir la ambigüedad existente en la terminología de cada una de las soluciones identificadas en la RSL y el estudio complementario. Para lograrlo, el método define cuatro actividades: (i) adquisición de conocimiento concerniente a los modelos, (ii) análisis estructural y terminología, (iii) identificación de requerimientos necesarios para la homogeneización, (iv) identificación de la correspondencia y (v) análisis de resultados.
- Método de comparación: El proceso de comparación sigue los lineamientos descritos en , que se dividen en tres actividades: (i) analizar las soluciones existentes, (ii) diseñar la comparación y (iii) llevar a cabo la comparación.

## Desarrollo

El desarrollo de la solución se dividió en dos fases complementarias:
- Método de integración: El método de integración, que sigue los protocolos propuestos en , se aplicó con el propósito de unificar los resultados obtenidos durante la comparación bajo un marco conceptual común. Para lograrlo, se realizó un total de cinco actividades: (i) diseñar la integración, (ii) definir/establecer un criterio de integración, (iii) llevar a cabo la integración, (iv) analizar los resultados de la integración y (v) presentar el modelo integrado.
- Diseño del proceso integral: Con base en los resultados obtenidos durante la integración, se llevó a cabo la estructuración y formalización del proceso derivado, organizando roles, actividades, artefactos y relaciones dentro de una secuencia lógica y coherente. Esta definición incluyó la noción de operatividad metodológica a la propuesta, asegurando su aplicabilidad práctica y su alineación con los objetivos arquitectónicos y empresariales planteados en la investigación.

## Reflexión

Después de caracterizar y definir la solución de acuerdo con los alcances y objetivos propuestos en la armonización, se realizarán actividades de retroalimentación que permitan establecer las limitaciones, sesgos y análisis de correspondencia que permitan reducir el grado de subjetividad de la arquitectura de referencia. A continuación, se describen las actividades asociadas:
- Análisis de correspondencia: El método de armonización propone realizar un análisis de correspondencia que determine el grado de cohesión entre los elementos que fueron comparados e integrados.
- Identificar sesgos y limitaciones: Con el propósito de reducir el grado de subjetividad en la propuesta, se determinaron los sesgos potenciales durante la ejecución del método de armonización.

## Ciclo 3: Evaluación mediante juicio de expertos

La evaluación teórica de la propuesta tuvo una duración de 4 meses, que resultaron en la caracterización de una versión depurada de la arquitectura de referencia, la cual incorporó los comentarios, sugerencias y aspectos de mejora identificados por evaluadores expertos, quienes determinaron la aplicabilidad, comprensibilidad, completitud e idoneidad de la solución.

## Planeación

La planeación incluye todas las actividades relacionadas con delimitar el alcance, los objetivos y los participantes potenciales durante el proceso de evaluación:
- Definir el objetivo de la evaluación: Establecer de manera clara y concisa los objetivos que se buscan alcanzar con la evaluación. Esto puede incluir la validación de la aplicabilidad, comprensibilidad, completitud e idoneidad de la arquitectura de referencia.
- Identificación del perfil de los participantes: Determinar las características, experiencia y conocimientos requeridos de los expertos que participaron durante la evaluación de la propuesta.
- Definición de los criterios de evaluación: Determinar cuáles aspectos de la arquitectura de referencia fueron evaluados y cómo se deben medir durante los análisis estadísticos posteriores.
- Planificación logística: Organizar los detalles prácticos del proceso de evaluación, que incluyen: el calendario de actividades, las plataformas o herramientas que se utilizaron para recopilar y analizar los datos, y la coordinación de las reuniones o sesiones de trabajo con los expertos seleccionados.

## Ejecución

La ejecución involucra determinar el instrumento de evaluación, convocar a los participantes designados durante la etapa de planeación y establecer la agenda de trabajo que fue socializada a todas las partes interesadas:
- Preparación de materiales de evaluación: Desarrollar y preparar todos los materiales que fueron necesarios para la evaluación, incluidos los documentos de referencia, guías de evaluación y cualquier otro recurso pertinente.
- Determinar el instrumento de evaluación: El instrumento de evaluación fue definido considerando cuatro criterios de calidad con sus respectivos indicadores para la calificación (suficiencia, claridad, coherencia, relevancia y pertinencia).
- Convocar a los participantes: Los expertos designados para realizar la evaluación fueron citados para llevar a cabo las actividades relacionadas con la validación de la propuesta.
- Establecer la agenda de trabajo: El grupo investigador definió cada una de las subactividades necesarias para llevar a cabo la evaluación en la fecha designada.

## Desarrollo

La etapa de desarrollo se centró en la aplicación práctica del instrumento de evaluación para recoger datos críticos sobre la arquitectura de referencia.
- Aplicación del instrumento de evaluación: Utilizando el instrumento de evaluación definido previamente, se aplicó la evaluación. Esto implicó realizar un análisis detallado de cada uno de los criterios de calidad establecidos, aplicándolos de manera sistemática para recoger datos significativos durante evaluación.
- Recopilación de datos: Se recopilaron las opiniones, observaciones y calificaciones de los expertos evaluadores.
- Análisis preliminar de los resultados: Una vez recopilados los datos, el equipo investigador realizó un primer análisis para identificar tendencias, patrones y discrepancias significativas en las evaluaciones.

## Reflexión

La etapa de reflexión se centró en el analisis de los resultados obtenidos durante la etapa de desarrollo, e incluyó las siguientes actividades:
- Análisis detallado de los resultados: Se realizó un análisis más profundo para entender completamente las implicaciones de las observaciones y calificaciones de los expertos, prestando especial atención a las áreas críticas que requieren mejoras y a sugerencias específicas de los evaluadores.
- Integración de comentarios y sugerencias realizadas por los expertos: Con base en los resultados preliminares, se procedió a integrar los comentarios, sugerencias y aspectos de mejora identificados en una versión refinada de la arquitectura de referencia.
- Documentación de aprendizajes y conclusiones: En esta actividad se documentaron todos los aprendizajes obtenidos durante el proceso de evaluación, así como las conclusiones y recomendaciones para futuras iteraciones.

## Ciclo 4: Evaluación de escenarios hipotéticos

La versión obtenida durante este ciclo es el artefacto presentado en este proyecto de investigación. La evaluación fue llevada a cabo siguiendo el protocolo propuesto por el método SAAM (del inglés Software Architecture Analysis Method) . La metodología SAAM es un enfoque estructurado para la evaluación de arquitecturas de software que permite determinar la capacidad de una arquitectura para cumplir con un conjunto de requisitos no funcionales o atributos de calidad de interés.

## Planeación

Esta fase define los objetivos y el alcance de la evaluación:
- Definir el alcance de la evaluación: Determina cuales partes de la arquitectura fueron evaluadas.
- Reunir a los participantes: Se Identificó el perfil de los participantes que participaron durante del proceso de evaluación.

## Ejecución

Esta etapa buscó obtener una comprensión holística y profunda del estado actual de la arquitectura de referencia; para lograrlo, se realizaron las siguientes actividades:
- Documentación de la arquitectura de referencia: Se compiló toda la documentación relacionada con la arquitectura de referencia, incluyendo diagramas, descripciones de componentes, y especificaciones. Como resultado de esta caracterización, se obtuvo el conjunto de artefactos finales que fueron objeto de estudio durante la evaluación.
- Identificar escenarios de uso (escenarios hipotéticos): Se determinó cuáles fueron los escenarios de uso para instanciar la arquitectura de referencia. Estos escenarios ayudaron a identificar requisitos funcionales y no funcionales críticos y a entender cómo la arquitectura soporta estas interacciones.

## Desarrollo

En esta etapa se entregó la documentación correspondiente a los participantes, quienes analizaron la arquitectura con el fin de evaluar en qué medida satisface los requisitos previamente identificados y cómo responde a los escenarios de uso definidos durante la fase de preparación. Asimismo, determinaron el grado de adecuación, coherencia y viabilidad de la propuesta frente a los atributos de calidad y a las necesidades planteadas. Para llevar a cabo esta tarea, se ejecutaron las siguientes actividades:
- Identificación de atributos de calidad: Se definieron los atributos de calidad considerados prioritarios para la arquitectura. Estos atributos guiaron el proceso de evaluación y permitieron determinar el nivel de consistencia y solidez de la propuesta frente a los criterios establecidos.
- Descomposición arquitectónica: Se descompuso la arquitectura en sus componentes principales y se examinaron las interacciones entre ellos. Este análisis permitió identificar puntos críticos de integración, dependencias relevantes y posibles áreas de riesgo estructural.
- Evaluación de escenarios: Se “ejecutaron” los escenarios de uso definidos contra la arquitectura con el fin de evaluar su aplicabilidad. Esto implicó la simulación de flujos de trabajo, la revisión detallada de la documentación y la discusión de los posibles resultados desde la perspectiva de los participantes.

## Reflexión

En esta fase se llevó a cabo la identificación de oportunidades de mejora en la propuesta. Para ello, se desarrollaron las siguientes actividades:
- Análisis de sensibilidad y trade-offs: Se examinó la arquitectura con el fin de identificar componentes e interacciones especialmente sensibles a cambios, así como los compromisos asociados a decisiones de diseño.
- Identificación de problemas y oportunidades de mejora: A partir del análisis de escenarios y de sensibilidad, se determinaron áreas susceptibles de fortalecimiento dentro de la arquitectura.
- Revisión con partes interesadas: Los hallazgos de la evaluación fueron expuestos a las partes interesadas para recibir retroalimentación, lo que permitió precisar requisitos no funcionales y ajustar el alcance del análisis.
- Refinamiento y reevaluación: Con base en la retroalimentación recibida y en los resultados obtenidos, se incorporaron ajustes en la arquitectura y en el proceso de evaluación para fortalecer su consistencia y aplicabilidad.
- Documentación de la evaluación: Se elaboró un registro detallado del proceso seguido, incluyendo la metodología aplicada, los escenarios considerados, los análisis efectuados, los problemas detectados y las recomendaciones propuestas, dejando una base formal para futuras iteraciones.

## Ciclo 5: Desarrollo y documentación del proyecto

Este ciclo se llevó a cabo de manera transversal al proyecto, incluyendo todas las actividades relacionadas con:
- Elaboración de la monografía: Se desarrolló la monografía integrando los resultados obtenidos a lo largo del proceso investigativo, así como los anexos y evidencias generadas en cada uno de los ciclos metodológicos, asegurando coherencia, trazabilidad y rigor académico en la presentación del trabajo.
- Elaboración y publicación de artículos: Se redactaron artículos científicos que documentan los principales resultados y aportes de la investigación, los cuales fueron sometidos a procesos de evaluación por pares y publicados en conferencias y/o revistas especializadas del área.
- Divulgación de resultados: Los resultados de la investigación fueron expuestos en una sustentación pública, durante la cual un jurado de expertos evaluó la calidad, relevancia y contribución científica del proyecto, determinando su pertinencia para la obtención del título de PhD en Ciencias de la Computación de la Universidad del Cauca.

## Resultados obtenidos

Como resultado de este proyecto de investigación, se obtuvo un conjunto de artefactos y entregables que se presentan a continuación:
- Monografía de trabajo de grado: Documento formal que compila de manera estructurada el marco teórico, la metodología aplicada, el desarrollo de la propuesta, los resultados obtenidos y las conclusiones derivadas del proceso investigativo, constituyendo el soporte académico integral del trabajo doctoral.
- Arquitectura de referencia: Artefacto resultante que materializa la propuesta central de la investigación, representando un marco estructurado y sistemático para el diseño de arquitecturas de software híbridas con integración de capacidades clásicas y cuánticas desde la perspectiva de la arquitectura empresarial.
- Artículos científicos: Productos académicos que difunden los aportes parciales y finales de la investigación, sometidos a evaluación por pares y publicados en conferencias y/o revistas especializadas, con el propósito de validar, comunicar y posicionar los resultados en la comunidad científica.

## Organización del documento

El trabajo de investigación presentado en este documento estructura en siete (7) capítulos, donde:
- El Capítulo II presenta el marco teórico del proyecto que introduce y desarrolla los conceptos fundamentales relacionados con la temática de estudio. Para lograrlo, este capítulo expone el estado del arte obtenido como resultado de la aplicación de una Revisión Sistemática de la Literatura (RSL), complementada con un estudio exploratorio de soluciones prácticas orientadas a contrastar los hallazgos académicos con evidencias provenientes de la industria.
- El Capítulo III integra los resultados fueron identificados en el capítulo anterior mediante la aplicación de un proceso de armonización, que tuvo como propósito consolidar un conjunto coherente de elementos arquitectónicos que sirvieron como fundamento para la definición de la arquitectura de referencia.
- El Capítulo IV presenta la definición estructurada de un proceso que facilita la aplicación de la arquitectura de referencia para sistemas de software empresariales híbridos clásico–cuánticos. En este capítulo se describe el modelo integrado resultante, organizado en dimensiones conceptuales, organizacionales y de diseño y calidad, así como los mecanismos que permiten su instanciación, trazabilidad y adaptación a diferentes contextos organizacionales.
- El Capítulo V aborda la evaluación de la propuesta mediante juicio de expertos, con el fin de analizar su pertinencia y coherencia interna, completitud y aplicabilidad desde una perspectiva académica y profesional.
- El Capítulo VI presenta una evaluación adicional basada en la validación de escenarios hipotéticos representativos de contextos reales de aplicación. A través de estos escenarios, se analizó la capacidad de la arquitectura de referencia para soportar la integración de componentes clásicos y cuánticos, y responder a atributos de calidad relevantes en entornos híbridos.
- Finalmente, el Capítulo VII presenta un resumen estructurado que describe el grado de cumplimiento de los objetivos de investigación, los principales aportes del proyecto en el área de la arquitectura de software para sistemas híbridos clásico–cuánticos y las propuestas de trabajo futuro que surgieron como resultado del proceso de investigación llevado a cabo en la tesis doctoral.

# Capítulo II. Marco teórico y estado del arte


## Introducción

Este capítulo presenta los conceptos que sustentan el marco teórico de la propuesta. En primer lugar, se desarrolla el fundamento conceptual que enmarca la investigación y delimita sus principales categorías de análisis. Posteriormente, se expone un resumen estructurado con los resultados y el análisis obtenidos a partir de la Revisión Sistemática de la Literatura. Finalmente, se integra el análisis derivado de la búsqueda exploratoria en la industria, el cual complementa la evidencia académica con una perspectiva práctica y contextualizada del fenómeno estudiado.
Como resultado de este capítulo, fue posible establecer un panorama estructurado del estado del arte, identificar las principales brechas conceptuales y metodológicas, y delimitar los elementos clave que fundamentan la propuesta doctoral. Este conjunto de hallazgos se consolidó como insumo de entrada para el proceso de armonización, en el cual se abordó la unificación terminológica y estructural de las soluciones identificadas, con el propósito de construir una base coherente para el desarrollo de la arquitectura de referencia, proceso que se describe en el siguiente capítulo.

## Marco teórico

A continuación, se presentan los conceptos considerados más relevantes para comprender la base terminológica que será desarrollada en el resto del documento.

## Arquitectura de software

La arquitectura de software describe la estructura fundamental de un sistema, incluyendo sus componentes, las relaciones entre ellos y los principios que gobiernan su diseño y evolución. En el contexto de sistemas empresariales, la arquitectura actúa como un mecanismo de alineación entre los objetivos del negocio y las decisiones técnicas, permitiendo gestionar la complejidad, la evolución y los compromisos asociados a los atributos de calidad esperados en una organización .

## Descripción arquitectónica

La descripción arquitectónica determina el conjunto de artefactos utilizados para documentar una arquitectura de manera sistemática, identificando explícitamente a las partes interesadas y sus preocupaciones . Este enfoque permite estructurar la documentación arquitectónica en vistas coherentes que responden a necesidades concretas, facilitando la comunicación y el análisis arquitectónico. En arquitecturas híbridas clásico–cuánticas, esta noción cobra especial relevancia debido a la coexistencia de preocupaciones tradicionales y cuánticas .

## Vista arquitectónica

Una vista arquitectónica es una representación parcial de la arquitectura que aborda un conjunto específico de preocupaciones . El uso de múltiples vistas permite entender la complejidad de una arquitectura y asegurar que las distintas preocupaciones de las partes interesadas sean consideradas. En el dominio híbrido, esto habilita la separación entre vistas conceptuales, organizacionales y de diseño.

## Arquitectura de referencia

Una arquitectura de referencia es un artefacto arquitectónico que captura conocimiento reutilizable de un dominio específico, proporcionando una estructura base, un vocabulario común y un conjunto de decisiones arquitectónicas típicas . Su objetivo es guiar el diseño de arquitecturas concretas, promover la estandarización y facilitar la reutilización de soluciones probadas. En este estudio, la arquitectura de referencia constituye el núcleo de la propuesta, al servir como base para arquitecturas empresariales híbridas clásico–cuánticas.

## Arquitectura empresarial

La arquitectura empresarial busca describir de manera integral una organización a través de diferentes dominios, tales como negocio, información, aplicaciones y tecnología. Su propósito es garantizar la alineación entre la estrategia organizacional y las soluciones tecnológicas, facilitando la evolución controlada de los sistemas. En escenarios híbridos, esta disciplina permite justificar la incorporación de capacidades cuánticas dentro de ecosistemas empresariales existentes .

## Atributos de calidad y decisiones arquitectónicas

Los atributos de calidad representan criterios que determinan el comportamiento de un sistema más allá de su funcionalidad. En arquitecturas híbridas, los atributos de calidad incluyen aquellos que pertenecen al dominio clásico, cuántico o una combinación de ambos .

## Estilos y patrones arquitectónicos

Los estilos arquitectónicos definen principios globales de organización estructural, mientras que los patrones arquitectónicos ofrecen soluciones recurrentes a problemas comunes. Ambos constituyen mecanismos fundamentales para sistematizar el diseño y promover la reutilización de cualquier solución. En sistemas empresariales híbridos, estos estilos suelen combinarse para integrar capacidades cuánticas como servicios especializados dentro de arquitecturas clásicas .

## Computación cuántica

La computación cuántica se basa en qubits y operaciones cuánticas que explotan principios como superposición y entrelazamiento. A diferencia del cómputo clásico, los resultados de la ejecución cuántica son probabilísticos, lo que introduce desafíos conceptuales y técnicos para su integración en sistemas de software tradicionales .

## Ingeniería de software cuántica

La ingeniería de software cuántica es un campo emergente que extiende los principios, métodos y prácticas de la ingeniería de software tradicional al desarrollo de aplicaciones que incorporan computación cuántica . Su objetivo es proporcionar marcos conceptuales, procesos, lenguajes, herramientas y métricas para diseñar, construir, validar y mantener software cuántico de manera sistemática y reproducible . A diferencia del software clásico, el software cuántico introduce desafíos adicionales asociados al carácter probabilístico de la ejecución, la dependencia del hardware, la presencia de ruido y la rápida evolución tecnológica . Bajo este enfoque, la ingeniería de software cuántica enfatiza la necesidad de abstracciones adecuadas y la separación de responsabilidades entre componentes clásicos y cuánticos.

## Arquitectura de software cuántica

La arquitectura de software cuántica se refiere a la organización estructural de sistemas de software que incorporan componentes cuánticos, incluyendo la definición de módulos, interfaces, flujos de interacción y responsabilidades entre el software clásico de control y los recursos cuánticos subyacentes . Este tipo de arquitectura debe considerar explícitamente aspectos como la orquestación de ejecuciones cuánticas, la gestión de backends heterogéneos, la compilación de circuitos, la mitigación de errores y la integración de resultados probabilísticos dentro de procesos deterministas clásicos . En la práctica, la arquitectura de software cuántica rara vez se presenta de forma aislada, sino como parte de ecosistemas más amplios donde el componente cuántico actúa como un servicio especializado .

## Arquitectura de software híbrida

La arquitectura de software híbrida describe sistemas en los que componentes clásicos y cuánticos coexisten y colaboran dentro de un mismo flujo de ejecución. En este enfoque, el sistema clásico asume funciones de orquestación, preprocesamiento, posprocesamiento, control y toma de decisiones, mientras que el sistema cuántico se utiliza para resolver subproblemas específicos donde puede aportar ventajas computacionales . Desde una perspectiva arquitectónica, esto implica la definición de interfaces claras, contratos de servicio, mecanismos de desacoplamiento y estrategias para manejar latencias, fallos y resultados no deterministas. En entornos empresariales, estas arquitecturas suelen desplegarse sobre infraestructuras en la nube, integrando servicios cuánticos como recursos externos especializados.

## Ciclo de vida del software clásico, cuántico e híbrido

El ciclo de vida del software clásico comprende etapas bien establecidas como análisis de requisitos, diseño, implementación, pruebas, despliegue y mantenimiento . En el software cuántico, este ciclo se ve ampliado para incluir actividades específicas como el modelado matemático del problema, el diseño y parametrización de circuitos cuánticos, la selección de hardware o simuladores, la ejecución experimental y el análisis estadístico de resultados . En sistemas híbridos, ambos ciclos de vida se integran, dando lugar a un proceso combinado en el que el desarrollo clásico y cuántico evolucionan de manera coordinada.

## Estado del arte

A continuación, se presenta un extracto de los hallazgos obtenidos como resultado de ejecutar una Revisión Sistemática de la Literatura (RSL) publicada en , que tuvo como propósito analizar el estado del arte con relación a la definición de soluciones metodológicas y propuestas prácticas en torno al estudio de la arquitectura de software desde la perspectiva de la computación clásica/cuántica. Para el propósito de este trabajo de investigación, la RSL se llevó a cabo de acuerdo con el formalismo propuesto por , que se estructura en tres fases:
- La primera fase (planeación): Describe los criterios, procesos y técnicas que se deben aplicar para determinar el alcance, el propósito y los resultados esperados de la RSL. Como resultado de esta fase, se plantearon los objetivos y las respectivas preguntas de investigación. Se estableció la estrategia que conduciría la investigación mediante la definición de una cadena de búsqueda aplicable a diferentes motores de búsqueda científica, la definición de los criterios de inclusión y exclusión para la selección de estudios primarios, y la caracterización de un conjunto de criterios de pertinencia que proporcionan un mapa de ruta para determinar cuáles estudios pueden tener una mayor relevancia en el futuro.
- La segunda fase (ejecución): Consistió en aplicar la cadena de búsqueda obtenida en la fase anterior en cada uno de los motores de búsqueda designados durante la planeación. Como resultado de esta fase, se obtuvo un conjunto de estudios considerados primarios, que proveen información directamente relacionada con los objetivos propuestos para la investigación.
- La tercera fase (análisis y documentación): Recopiló los resultados de la fase de ejecución aplicando técnicas de análisis estadístico cualitativo y cuantitativo, que fueron aplicadas como herramienta para dar respuesta a cada una de las preguntas de investigación.
En lo que resta de esta sección, se presentará el detalle de cada fase, las actividades llevadas a cabo para dar conformidad al protocolo propuesto por , y los resultados reportados como resultado de su aplicación.

## Fase de planeación

Esta fase incluye las siguientes actividades: (i) la definición de los objetivos de la investigación, (ii) la definición de las preguntas de investigación y su relación con los objetivos, (iii) la definición de la estrategia de búsqueda, (iv) la definición de los criterios de inclusión y exclusión para la selección de estudios primarios y (v) la definición de criterios para evaluar la pertinencia de los estudios primarios. En la Figura 7 se presenta el resumen gráfico de la fase:
**Figura 7. Fase de planeación.**

## Definir los objetivos y las preguntas de investigación

Los objetivos de investigación (OI) proporcionan una hoja de ruta para llevar a cabo la planeación, aclarando el alcance, el propósito y el nuevo estado del conocimiento que se espera obtener de la RSL. Por otro lado, las preguntas de investigación (PI) definen el alcance y la naturaleza de los resultados esperados.
Para definir los objetivos de investigación (ver la Tabla 2) y las preguntas de investigación (ver la Tabla 3), se aplicó el formalismo propuesto por el enfoque goal-question-metric (GQM) , que se divide en tres niveles de abstracción: (i) un nivel conceptual, que exige definir un conjunto de objetivos claramente definidos; (ii) un nivel operacional, en el que se plantean las preguntas que los autores consideran pertinentes para el propósito del estudio; y (iii) un nivel cuantitativo, que busca asociar unidades de medida concretas a las preguntas para ampliar su alcance utilizando métodos de evaluación estadísticos.
Para el alcance de la RSL, solo se realizaron las actividades correspondientes a los niveles operacional y conceptual, ya que el estudio no buscó establecer criterios cuantitativos para ponderar las preguntas de investigación propuestas por los autores. Adicionalmente, con el propósito de extender la pertinencia de las preguntas de investigación y su correspondencia con los objetivos de investigación, se realizó una validación conformada por tres actividades: (i) evaluación por parte de un experto, que determinó si los OI cumplían con los criterios propuestos por la metodología SMART (son específicos, medibles, alcanzables, relevantes y temporales) ; (ii) validación por parte de asesores externos, quienes proporcionaron retroalimentación continua para garantizar que las preguntas fueran pertinentes y estuvieran alineadas con el contexto de la investigación; y (iii) evaluación de los OI y PI según los criterios propuestos por , que proponen evaluar los PI en términos de su pertinencia, claridad, precisión y especificidad. En la Tabla 2 se presenta el detalle de cada uno de los objetivos propuestos para la RSL y su motivación:
**Tabla 2. Objetivos de investigación planteados para la RSL.**

### Tabla extraída 2

| Id | Descripción | Motivación |
| --- | --- | --- |
| OI1 | Identificar y analizar las tendencias actuales en la definición de arquitecturas de software en el contexto de la computación cuántica, con el fin de identificar oportunidades y desafíos en el campo. | Comprender el estado actual en el campo de la computación cuántica y la arquitectura de software . Esto incluye la identificación de las publicaciones más influyentes, las metodologías predominantes y la distribución geográfica de los estudios. Este enfoque permite una comprensión profunda y holística del campo, proporcionando una perspectiva macroscópica de su desarrollo. |
| OI2 | Analizar las soluciones y tipos de arquitecturas de software en el contexto de la computación cuántica, con el objetivo de identificar las más prometedoras para futuras implementaciones. | Investigar las soluciones y los tipos de arquitectura de software que han sido específicamente diseñadas para la computación cuántica. Esto implica una exploración detallada de las aproximaciones y diseños que se han propuesto o implementado en este campo. |
| OI3 | Realizar un estudio comparativo para evaluar el impacto de las diferentes arquitecturas de software en el ámbito de la computación cuántica. | Evaluar las diferencias entre las arquitecturas de software para computación cuántica y las tradicionales, centrándose en aspectos como la eficiencia, la capacidad y la aplicabilidad. |
| OI4 | Explorar los desafíos y proyecciones futuras en el ámbito de la arquitectura de software dentro del contexto de la computación cuántica. | Identificar los desafíos contemporáneos que se presentan en el desarrollo de arquitecturas de software para la computación cuántica. Además, se busca anticipar las tendencias y oportunidades futuras en este campo. La importancia de esta área radica en su potencial para orientar la investigación futura y estimular la innovación en la tecnología cuántica. |
| Acrónimos. Id: Identificador. |  |  |

Por otro lado, las PI (presentadas en la Tabla 3) se dividen en tres categorías: (i) preguntas demográficas, que permiten identificar tendencias sobre la distribución temporal, los tipos de investigación y la distribución geográfica de los estudios. Esta información es importante porque permite conocer cuáles son los autores, instituciones y nichos que realizan mayores aportes al área de interés; (ii) preguntas relacionadas con la caracterización de arquitecturas, que buscan conocer cuáles son las soluciones propuestas por otros autores (estudios metodológicos, revisiones de la literatura, estudios de caso, entre otros); y (iii) preguntas para determinar los impactos y desafíos en el área de interés, que representan el punto de inicio para conocer la importancia, limitaciones y propuestas de trabajo futuro que surgen a partir de los estudios primarios.
**Tabla 3. Preguntas de investigación planteadas para la RSL.**

### Tabla extraída 3

| Id | Pregunta de investigación | Motivación | OI asociado | Categoría |
| --- | --- | --- | --- | --- |
| PI1 | ¿Cuáles son los tipos de investigación identificados y las contribuciones reportadas sobre el estudio de la arquitectura de software en el contexto de la computación cuántica? | El objetivo de esta pregunta es identificar los tipos de investigación según el enfoque de clasificación propuesto por Wieringa [61] : validación, evaluación, propuesta de solución, artículos filosóficos, artículos de opinión y artículos de experiencia personal, así como otros estudios que contribuyan a reconocer la diversidad de los artículos publicados . | OI1 | Pregunta demográfica |
| PI2 | ¿Qué tipo de soluciones se han definido en torno a la definición de arquitecturas de software en el contexto de la computación cuántica? | Entender las soluciones existentes proporciona una base para mejorar y desarrollar nuevas arquitecturas. Identificar técnicas, procesos, modelos, herramientas, entre otros, que buscan aportar en el conocimiento relacionado con esta temática permite establecer un panorama claro sobre los diferentes mecanismos propuestos en la literatura para la caracterización de arquitecturas de software en este contexto. | OI2 | Caracterización de arquitecturas |
| PI3 | ¿Cuáles son los tipos de arquitecturas de software en el contexto de la computación cuántica reportados en la literatura? | En la arquitectura de software clásica, existen diferentes tipos de arquitecturas que son aplicadas de acuerdo con necesidades técnicas y de negocio específicas. Estudiar cuales son los tipos de arquitecturas propuestos en el contexto de la computación cuántica permite establecer un grado de relación o diferencia entre los tipos de soluciones arquitectónicas existentes y aquellas que son propuestas en este nuevo contexto. | OI2 |  |
| PI4 | ¿Cuál es el impacto de las arquitecturas de software en el contexto de la computación cuántica en comparación con las arquitecturas clásicas? | Determinar cuál es el grado de importancia que tiene el estudio e implementación de arquitecturas de software cuántica para el sector académico y la industria de software. Este análisis facilitará el desarrollo de un estado del conocimiento claro en torno a las iniciativas e investigaciones realizadas por otros autores en este campo. Además, permitirá conocer cuál es el nivel de importancia que tiene esta temática en la actualidad. Determinar el grado de relación o diferencia que existe entre las arquitecturas de software cuánticas cuando se comparan con su contraparte clásica. Esto permitirá conocer el estado actual del conocimiento en torno a la definición, diseño e implementación de arquitecturas cuánticas, como se relacionan con las arquitecturas clásicas y cuáles son los elementos que se deben considerar para su caracterización en el futuro. Por otro lado, permite establecer un estado del conocimiento que permita determinar si el uso de arquitecturas cuánticas es maduro. Como resultado de este análisis, se espera entender cuáles son los aspectos más importantes que enfrenta el campo de la arquitectura de software cuántica en aspectos como: su grado de madurez en la industria, las habilidades que deben desarrollar los profesionales para trabajar con este tipo de arquitecturas, el grado o nivel de relación que tienen con las arquitecturas clásicas, las proyecciones futuras de su adopción extendida en la industria, entre otros. | OI3 | Impactos y desafíos |
| PI5 | ¿Cuáles son los desafíos reportados en la literatura en torno a la definición de arquitecturas de software en el contexto de la computación cuántica? | Determinar cuáles son los aspectos que se deben considerar para identificar acciones de mejora en la definición, caracterización, implementación y estudio de arquitecturas de software en el contexto de la computación cuántica. Esto incluye, pero no se limita a, la comprensión de los principios fundamentales de la computación cuántica, la elección de un modelo de computación cuántica adecuado, la evaluación de las capacidades y limitaciones de las tecnologías de hardware cuántico actuales, la consideración de las implicaciones de seguridad y privacidad, y la evaluación de las necesidades de formación y educación para los desarrolladores de software. | OI4 |  |
| PI6 | ¿Cuáles son las vías de trabajo futuro en torno a la definición e implementación de arquitecturas de software en el contexto de la computación cuántica? | Identificar temas relevantes y prometedores para la ejecución de nuevos estudios y/o revisiones en el futuro, incluyendo, pero no limitado a; avances tecnológicos, avances recientes en algoritmos cuánticos, técnicas de programación cuántica, entre otros. | OI4 |  |
| Acrónimos. Id: Identificador, PI: Pregunta de investigación, OI: Objetivo de investigación. |  |  |  |  |


## Definir la cadena y los motores de búsqueda

Para realizar una búsqueda exhaustiva de la literatura sobre el área de interés, los autores recopilaron literatura relevante sobre el tema solicitada a expertos en la materia, con el fin de establecer un estado previo del conocimiento que aportó información valiosa (esta literatura es conocida como literatura gris). Posteriormente, se construyó una cadena de búsqueda utilizando una combinación de operadores y conectores lógicos 'AND' y 'OR', aplicada a un conjunto de conceptos, términos y palabras clave relevantes para el área de estudio. La formulación de la cadena de búsqueda siguió las recomendaciones propuestas por Kitchenham en . De igual manera, las palabras clave fueron seleccionadas como resultado de varias sesiones de lluvia de ideas y la revisión de la literatura gris.
Como resultado, la cadena de búsqueda obtenida (presentada en la Tabla 4) refleja el conjunto del conocimiento de interés para la investigación:
**Tabla 4. Cadena de búsqueda genérica.**

### Tabla extraída 4

| ("quantum computing architecture" OR "quantum computing software architecture" OR "quantum software architecture" OR) AND (classification OR design OR framework OR model OR pattern OR process OR technique OR tool OR study) |
| --- |

Posteriormente, se seleccionaron los motores de búsqueda designados para aplicar la cadena. Estos motores ofrecen una cobertura amplia de la literatura académica y científica, lo que garantiza una exploración representativa del campo de estudio. Para asegurar que las bases de datos elegidas fueran adecuadas, se consideraron varios aspectos: (i) la base de datos debe estar activa; (ii) cubre estudios relacionados con la ingeniería de software; (iii) los estudios fueron revisados por pares expertos para verificar su calidad; y (iv) los motores ofrecen opciones de búsqueda avanzada para ampliar el alcance de la revisión aplicando filtros específicos. Además, la selección de los motores de búsqueda fue sometida a la evaluación de asesores expertos en la ejecución de revisiones de la literatura, quienes evaluaron la pertinencia de los motores para el propósito de la investigación. Como resultado de esta revisión y validación, se seleccionó un total de seis bases de datos: ACM Digital Library, Google Scholar, IEEE Xplore, Science Direct, Scopus y SpringerLink. Finalmente, la cadena de búsqueda fue adaptada a las características y filtros de cada base de datos, como se observa en la Tabla 5:
**Tabla 5. Cadena de búsqueda adaptada.**

### Tabla extraída 5

| No | Base de datos | Cadena adaptada | Filtros |
| --- | --- | --- | --- |
| 1 | ACM Digital Library | [[All: “quantum computing architecture”] OR [All: “quantum computing software architecture”] OR [All: “quantum software architecture”] OR [All: “quantum software enterprise architecture”]] AND [[All: classification] OR [All: design] OR [All: framework] OR [All: model] OR [All: pattern] OR [All: process] OR [All: technique] OR [All: tool] OR [All: study]] AND [E-Publication Date: (01/01/2016 TO 12/31/2024)] | La cadena incluye todos los filtros correspondientes, no es necesario realizar parametrización. |
| 2 | Scopus | ( “quantum computing architecture” OR “quantum computing software architecture” OR “quantum software architecture” OR “quantum software enterprise architecture” ) AND ( classification OR design OR framework OR model OR pattern OR process OR technique OR tool OR study ) AND ( LIMIT-TO ( LANGUAGE , "English" ) ) AND ( LIMIT-TO ( DOCTYPE , " ar " ) OR LIMIT-TO ( DOCTYPE , "cp" ) ) AND ( LIMIT-TO ( SUBJAREA , "COMP" ) OR LIMIT-TO ( SUBJAREA , "ENGI" ) ) | Language: ENG Doctype: (“ ar ”, “cp”) Subject area : COMP, ENGI |
| 3 | Google Scholar | (“quantum computing architecture” OR “quantum computing software architecture” OR “quantum software architecture” OR “quantum software enterprise architecture”) AND (classification OR design OR framework OR model OR pattern OR process OR technique OR tool OR study) | Specific interval: 2016 – 2024 Include references: No Include patents: No |
| 4 | IEEEXplore |  | Range: 2016 – 2024 |
| 5 | Science Direct |  | Range: 2016 – 2024 Subject areas: Computer Science, Engineering Article type : Research articles |
| 6 | Springer Link |  | Start year: 2016. End year: 2024. Disciplines: Computer Science |
| Acrónimos. No: Número. |  |  |  |


## Seleccionar los criterios de inclusión y exclusión

Los criterios de inclusión (CI) determinan los aspectos a considerar para decidir si un estudio puede clasificarse como primario. En la Tabla 6 se presentan los CI definidos para el alcance del estudio, junto con su descripción y propósito:
**Tabla 6. Criterios de inclusión.**

### Tabla extraída 6

| Id | Descripción | Propósito |
| --- | --- | --- |
| CI1 | Validación del título, resumen y palabras clave. | Determinar si los estudios son relevantes para la investigación. |
| CI2 | Selección de estudios en inglés. | De acuerdo con el reporte realizado por [63] , el inglés es el idioma más utilizado para publicar y socializar artículos especializados en el contexto científico. Elegir estudios escritos en inglés garantiza una gama más amplia de resultados relevantes para el tema de investigación. |
| CI3 | Selección de estudios que propongan mecanismos para definir, aplicar, evaluar y estudiar arquitecturas de software en el contexto de la computación cuántica (estudios exploratorios, procesos, modelos, técnicas y herramientas, entre otros). | Permitir un análisis integral sobre cómo se define, aplica y estudia la arquitectura de software en el ámbito emergente de la computación cuántica. Este criterio garantiza que la revisión cubra un espectro amplio de investigaciones y desarrollos en este campo. |
| CI4 | Selección de estudios que estudien o propongan diferentes tipos de arquitecturas en el contexto de la arquitectura cuántica (arquitecturas monolíticas, orientadas a servicios, cloud , entre otros). | Estudiar diferentes aproximaciones para la definición e implementación de arquitecturas en el contexto de la computación cuántica permite obtener una comprensión más amplia y detallada de las diferentes metodologías utilizadas en el área de interés. |
| CI5 | Estudios publicados desde el año 2016. | Este límite temporal asegura que la revisión sistemática se centre en los desarrollos y hallazgos más recientes y relevantes en el área de interés. Al establecer el año 2016 como punto de partida, se prioriza la investigación actual, reflejando los avances y tendencias contemporáneos del campo de estudio. |
| Acrónimos. Id: Identificador. |  |  |

Por otro lado, los criterios de exclusión (CE) sirven para identificar los estudios que no proporcionan información suficiente para ser considerados primarios, actuando como un filtro adicional que facilita la identificación de los estudios que están fuera del alcance de una RSL. En la Tabla 7 se presentan los CE definidos para el alcance del estudio:
**Tabla 7. Criterios de exclusión.**

### Tabla extraída 7

| Id | Descripción | Propósito |
| --- | --- | --- |
| CE1 | Estudios que no contribuyan a la identificación de propuestas o soluciones relacionados con el uso de procesos, técnicas, modelos o herramientas (entre otros) en el contexto de las arquitecturas de software cuánticas. | Excluir los estudios que propongan soluciones enfocadas en temáticas que no estén directamente relacionadas con los criterios de inclusión CI3 y CI4. |
| CE2 | Estudios que no contribuyan a la identificación, o estudio de arquitecturas de software en el contexto de las arquitecturas cuánticas. |  |
| CE3 | Estudios sin suficiente nivel de detalle. | Un estudio con poco nivel de detalle no ofrece información suficiente para realizar un análisis exhaustivo. |
| CE4 | Estudios de discusión presentados como resúmenes o presentaciones. | Los estudios de discusión aportan información valiosa sobre investigaciones futuras, pero están sujetos a cambios, por lo que no se garantiza que sus resultados sean replicables . |
| CE5 | Estudios sin una fecha de publicación. | Los estudios que no han sido publicados formalmente o que se encuentran en revisión pueden estar sujetos a cambios . |
| CE6 | Estudios duplicados. | Ejecutar una cadena en múltiples bases de datos científicas puede resultar en estudios duplicados. Para el alcance y propósito de la RSL, solo se report ó el primer estudio identificado y clasificado como primario , eliminando redundancias innecesarias. |
| CE7 | Estudios fuera de la franja temporal designada para la búsqueda | Aunque los estudios anteriores al año 2016 pueden aportar información interesante, este año fue el lanzamiento del servicio IBM Quantum [7], [64] , que facilitó el acceso masivo a sistemas de computación cuántica, representando un punto de inflexión importante en la evolución de la computación cuántica . |
| Acrónimos. Id: Identificador. |  |  |


## Evaluar la pertinencia de los estudios

Evaluar la pertinencia de los estudios primarios tiene dos propósitos: (i) determinar el grado de relevancia de un estudio primario para futuras investigaciones y (ii) brindar una referencia a otros investigadores para identificar estudios que se alineen con sus objetivos de investigación. Para los fines de la RSL, se implementó un cuestionario que utiliza una escala de calificación de tres puntos (-1, 0, 1), donde la suma total de los puntajes asignados a cada estudio primario refleja su nivel de pertinencia total, con resultados posibles que varían en el intervalo [-9, 9]. Los resultados obtenidos después de aplicar esta evaluación sirven como un indicador para determinar cuáles estudios pueden ser de gran relevancia en investigaciones futuras. Para lograrlo, los aspectos propuestos para la evaluación están alineados con cuatro categorías: claridad , rigor , relevancia  y credibilidad , que son descritos en la Tabla 8. Cada una de estas categorías facilita el entendimiento de la naturaleza, el alcance y la importancia de los criterios propuestos para la evaluación:
**Tabla 8. Categorías para la evaluación de la pertinencia de los estudios.**

### Tabla extraída 8

| No | Descripción | Descripción |
| --- | --- | --- |
| 1 | Claridad | Determinar la relación entre cada artículo primario y el estudio de la definición e implementación de arquitecturas de software en el contexto de la computación cuántica, teniendo en cuenta el contexto de la aplicación y los aportes realizados. |
| 2 | Rigor | Esta categoría se centra en explicar las técnicas de investigación utilizadas para garantizar la precisión de los datos, incluyendo las herramientas de recolección, las estrategias de análisis y, en consecuencia, la credibilidad de los hallazgos obtenidos. |
| 3 | Relevancia | Esta categoría ayuda a discernir el valor, el efecto y las contribuciones de la investigación dentro del ámbito de la industria del software y las comunidades científicas. |
| 4 | Credibilidad | Esta categoría evalúa si los resultados obtenidos en la investigación son confiables, claros y de relevancia. Además, examina los enfoques científicos empleados y el análisis de los descubrimientos realizados. |
| Acrónimos. No: Número. |  |  |

En la Tabla 9 se presentan los criterios de evaluación de pertinencia definidos para nuestro estudio, y su relación con las categorías asociadas:
**Tabla 9. Criterios definidos para la evaluación de la pertinencia de los estudios.**

### Tabla extraída 9

| Id | Pregunta | Categoría | Puntuación asignada |  |  |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |
| CC1 | ¿Los objetivos del estudio se describen claramente? | Claridad | Sí | Parcialmente | No |
| CC2 | ¿La metodología utilizada para realizar la investigación es clara? |  | Sí | Parcialmente | No |
| CC3 | ¿El estudio utiliza un método de validación para garantizar la conformidad de la propuesta? | Rigor | Sí | Parcialmente | No |
| CC4 | ¿El estudio expone de manera clara y detallada los resultados obtenidos? |  | Sí | Parcialmente | No |
| CC5 | ¿Los resultados presentados por los autores son replicables? |  | Sí | Parcialmente | No |
| CC6 | ¿El estudio presenta una discusión sobre los hallazgos, impactos y desafíos identificados por los autores? | Relevancia | Sí | Parcialmente | No |
| CC7 | ¿Los autores presentan las limitaciones de su estudio y posibles vías de trabajo para nuevas investigaciones? |  | Sí | Parcialmente | No |
| CC8 | ¿El estudio ha sido publicado en una revista, conferencia o congreso de alto impacto? | Credibilidad |  |  |  |
| CC9 | ¿El estudio es citado por otros autores (según el índice de citas de Google Scholar)? |  | Más de cinco autores | Entre uno y cinco autores | No ha sido citado |
| Acrónimos. Id: Identificador; CC: Criterio de evaluación de calidad. |  |  |  |  |  |


## Fase de ejecución

La selección de estudios se dividió en dos actividades: (a) la revisión de seis estudios clasificados como literatura gris y (b) la aplicación de la cadena de búsqueda en cada una de las bases de datos definidas durante la fase de planeación. Para implementar la cadena de búsqueda, se efectuaron seis iteraciones en total (una por cada base de datos). Cada iteración constó de una búsqueda inicial utilizando la cadena adaptada para cada buscador, seguida de la aplicación de tres filtros de exclusión, donde:
- El primer filtro consistió en realizar la primera iteración en Google Scholar (que arrojó la mayor cantidad de resultados), y eliminar los resultados duplicados en las búsquedas posteriores.
- El segundo filtro descartó los estudios que cumplían con uno o más criterios de exclusión. Como resultado de este filtro, se identificó un conjunto de estudios considerados relevantes.
- El tercer filtro implicó la lectura completa de cada artículo relevante para determinar si estaba alineado con las preguntas y objetivos de la investigación. Como resultado de esta filtro, se obtuvo un total de 17 artículos considerados primarios, que fueron objeto de análisis durante el resto de la revisión.
En la Figura 8 se presenta el resumen de las actividades realizadas durante la ejecución:
**Figura 8. Fase de ejecución.**
El resumen de los resultados obtenidos durante la ejecución se muestra en la Tabla 10:
**Tabla 10. Resultados obtenidos luego de aplicar la cadena de búsqueda.**

### Tabla extraída 10

| No | Base de datos | Resultados de la cadena | Primer filtro (estudios duplicados) | Segundo filtro (estudios relevantes) | Tercer filtro (estudios primarios) |
| --- | --- | --- | --- | --- | --- |
| 1 | Google Scholar | 784 | 784 | 18 | 11 |
| 2 | ACM Digital Library | 11 | 10 | 2 | 0 |
| 3 | IEEEXplore | 15 | 6 | 3 | 0 |
| 4 | ScienceDirect | 43 | 15 | 4 | 0 |
| 5 | Scopus | 322 | 317 | 8 | 2 |
| 6 | Springer Link | 31 | 28 | 7 | 1 |
| 7 | Literatura gris | 6 | 3 | 3 | 3 |
| Total | 1212 | 1164 | 45 | 17 |  |
| Acrónimos. No: Número. |  |  |  |  |  |


## Análisis demográfico de los resultados

La Tabla 11 presenta un resumen estructurado de los estudios para facilitar su validación por parte de otros autores. El propósito de la tabla es presentar una descripción corta sobre cada estudio identificado en la RSL, y asignar un identificador único a cada uno para facilitar su análisis en lo que resta de la sección:
**Tabla 11. Resumen de los estudios primarios.**

### Tabla extraída 11

| Id | Estudio | Descripción |
| --- | --- | --- |
| S1 | Software architecture for quantum computing systems — A systematic review [67] | El artículo se centra en realizar un estudio exploratorio en torno a la arquitectura de software para sistemas de computación cuántica. Mediante una revisión sistemática de la literatura, investiga aspectos como procesos arquitectónicos, notaciones de modelado, patrones de diseño de arquitectura, herramientas y marcos de apoyo, y desafíos en la arquitectura de software cuántico. |
| S2 | Towards process centered architecting for quantum software systems [68] | El estudio se centra en el proceso de arquitectura para el desarrollo de software cuántico. El trabajo investiga las actividades de arquitectura, los roles humanos y las herramientas disponibles para automatizar y personalizar el desarrollo centrado en la arquitectura de software cuántico. Mediante una revisión sistemática, identifica actividades de arquitectura y roles humanos clave en este campo emergente, y presenta un estudio de caso sobre la distribución de llaves cuánticas para validar la propuesta. |
| S3 | Engineering Reliable Hybrid Quantum Software: An Architectural-driven Approach [69] | El estudio explora un enfoque basado en la arquitectura para modelar y analizar software cuántico híbrido. Se centra en la fiabilidad de los componentes de software cuántico y su integración en arquitecturas de software híbridas. El artículo propone extender el modelo de componente Palladio [70] y el lenguaje de descripción arquitectónica cuántica ( qADL ) para predecir la fiabilidad del software cuántico . |
| S4 | Selection of quantum computing architecture using a decision tree approach [71] | El estudio propone un enfoque basado en arboles de decisión para seleccionar la arquitectura de software adecuada en proyectos de computación cuántica. Analiza varios modelos de computación cuántica, como el de annealing cuántico, simulaciones de algoritmos y sistemas cuánticos, computación cuántica universal, y ofrece ejemplos de arquitectura para cada modelo. El artículo busca facilitar la toma de decisiones en la elección de arquitecturas de software para proyectos cuánticos . |
| S5 | Quality attributes on quantum computing platforms [72] | El estudio se enfoca en explorar las características arquitectónicas significativas de las Plataformas de Computación Cuántica ( QCPs ) y su impacto en varios Atributos de Calidad ( QAs ) en el desarrollo de software. Se discuten temas como la arquitectura general de un QCP, el modelo de programación típico en el desarrollo de software para QCP, y cómo estas características afectan atributos como la mantenibilidad, la facilidad de pruebas, la fiabilidad, entre otros. El artículo ofrece una evaluación detallada del estado actual de las QCPs y propone consideraciones para el diseño de software en este campo. |
| S6 | Challenges and Opportunities in Quantum Software Architecture [73] | El artículo explora los retos y oportunidades en la arquitectura de software cuántico. Se centra en la necesidad de adaptar la arquitectura de software para integrar componentes cuánticos y clásicos en aplicaciones híbridas. El documento presenta preguntas de investigación clave sobre el diseño arquitectónico específico para software cuántico, la transferencia de conocimientos del mundo clásico al cuántico, y los procesos para ejecutar aplicaciones híbridas en recursos de cómputo diversos, proporcionando una visión comprensiva sobre el estado actual y las direcciones futuras en este campo . |
| S7 | A serverless cloud integration for quantum computing [74] | El artículo presenta un marco arquitectónico para la integración de computación cuántica en entornos de nube sin servidor ( serverless ). Se centra en superar los desafíos de accesibilidad y gestión de cargas de trabajo en la computación cuántica, utilizando tecnologías nativas de la nube como funciones serverless , contenedores y microservicios. Este enfoque facilita la ejecución de algoritmos cuánticos y su integración con arquitecturas empresariales existentes, apuntando a un uso más accesible y eficiente de la computación cuántica en aplicaciones prácticas. |
| S8 | Research on Quantum Computing Standard System Architecture Roadmap [75] | El artículo examina el estado actual de la investigación en computación cuántica. Discute la necesidad de estándares para la computación cuántica, proporcionando un esquema de arquitectura estándar y un plan de estandarización a corto, medio y largo plazo. |
| S9 | Design of classical-quantum systems with UML [76] | El estudio explora el diseño de sistemas híbridos clásico-cuánticos usando el Lenguaje Unificado de Modelado (UML). Propone un perfil de UML cuántico para facilitar el análisis y diseño de sistemas de información híbridos, destacando su aplicabilidad a través de diagramas estructurales y de comportamiento. El documento destaca la importancia de adaptar prácticas de modelado a las particularidades de la computación cuántica para mejorar la integración de componentes cuánticos y clásicos en aplicaciones híbridas. |
| S10 | Hybrid Quantum Algorithms and Quantum Software Development Frameworks [77] | El estudio examina los algoritmos cuánticos híbridos y los marcos de desarrollo de software cuántico. Se centra en los avances recientes en Algoritmos Cuánticos Variacionales ( VQAs ), analizando sus fortalezas, limitaciones y aplicaciones potenciales. Además, revisa y evalúa distintos marcos de desarrollo de software cuántico, destacando su relevancia para la implementación práctica de algoritmos cuánticos en sistemas híbridos cuántico-clásicos. |
| S11 | Quantum computing platforms: assessing the impact on quality attributes & sdlc activities [78] | El artículo aborda cómo las Plataformas de Computación Cuántica ( QCPs ) afectan diversos Atributos de Calidad y las actividades del ciclo de vida del desarrollo de software. Discute las características únicas de las QCPs , su importancia arquitectónica y cómo estos aspectos influyen en las prácticas de desarrollo de software. El documento resalta la necesidad de un cambio de paradigma en la ingeniería de software para adaptarse a las particularidades de la computación cuántica . |
| S12 | The Quantum software lifecycle [79] | El estudio introduce un ciclo de vida del software cuántico compuesto por diez fases. Este modelo abarca desde la división cuántico-clásica hasta el análisis de resultados, pasando por la selección de hardware cuántico y la mitigación de errores de lectura. El artículo destaca la necesidad de un marco unificado para el desarrollo de aplicaciones cuánticas. |
| S13 | Towards a distributed quantum computing ecosystem [80] | El artículo proporciona una visión general de los desafíos y problemas abiertos en el diseño de un ecosistema de computación cuántica distribuida. El foco se centra en la internet cuántica, que permite comunicaciones cuánticas entre nodos cuánticos remotos, esenciales para tareas críticas mediante un enfoque de computación distribuida. |
| S14 | Classical to Quantum Software Migration Journey Begins: A Conceptual Readiness Model [81] | El estudio propone un modelo de preparación conceptual para facilitar la transición de la ingeniería de software clásica a la ingeniería de software cuántica. El artículo se centra en la importancia de desarrollar un marco que ayude a las organizaciones a evaluar su capacidad para esta migración. Proporciona un análisis detallado de las áreas de proceso, los factores desafiantes y los habilitadores claves que influyen en el proceso de ingeniería de software cuántica, sugiriendo prácticas óptimas para abordar estos desafíos y facilitar la adopción del desarrollo de software cuántico. |
| S15 | Software Architecture Challenges in Integrating Hybrid Classical-Quantum Systems [82] | El artículo se centra en los retos arquitectónicos asociados a la integración de sistemas híbridos clásico-cuánticos. Aborda cómo las diferencias fundamentales en los modelos de programación y los niveles variados de madurez en herramientas y prácticas entre los dominios clásico y cuántico dificultan su integración. |
| S16 | Architecture Decisions in Quantum Software Systems: An Empirical Study on Stack Exchange and GitHub [83] | El artículo examina las decisiones de arquitectura en el desarrollo de software cuántico. Mediante el análisis de datos de GitHub y Stack Exchange , identifica patrones lingüísticos usados, tipos de decisiones de arquitectura, dominios de aplicación, atributos de calidad considerados, desafíos y limitaciones en estas decisiones. |
| S17 | Patterns for Quantum Software Development [84] | El estudio ofrece una perspectiva sobre el desarrollo de software cuántico. Se enfoca en identificar y describir patrones efectivos para abordar los retos de modularización , integración y traducción en la implementación de algoritmos cuánticos. El trabajo propone cinco patrones nuevos que abordan estos aspectos . |
| Acrónimos. Id: Identificador. |  |  |

En la Tabla 12 se presentan los resultados obtenidos y el análisis de las relaciones y comportamientos observados durante la evaluación de cada criterio para la evaluación de la pertinencia de los estudios:
**Tabla 12. Resultados obtenidos durante la evaluación de la pertinencia.**

### Tabla extraída 12

| Id | CC1 | CC2 | CC3 | CC4 | CC5 | CC6 | CC7 | CC8 | CC9 | Puntaje total |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| S1 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 8 |
| S2 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| S3 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | -1 | 5 |
| S4 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 8 |
| S5 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | -1 | 1 | 6 |
| S6 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | -1 | 0 | 5 |
| S7 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | -1 | 1 | 6 |
| S8 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | 1 | 0 | 7 |
| S9 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 9 |
| S10 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | -1 | 0 | 5 |
| S11 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 1 | 8 |
| S12 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 1 | 8 |
| S13 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | 0 | 1 | 8 |
| S14 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 1 | 8 |
| S15 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | -1 | -1 | 4 |
| S16 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | -1 | -1 | 5 |
| S17 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | -1 | 0 | 5 |
| Acrónimos. Id: Identificador; CC: Criterio de calidad/pertenencia. |  |  |  |  |  |  |  |  |  |  |

La Figura 9 muestra la distribución de puntajes obtenidos por estudio, donde: el estudio S9 tuvo 9 puntos, seguido por los estudios S1, S4, S11, S12, S13 y S14 con 8 puntos, el estudio S8 con 7 puntos, los estudios S5 y S7 con 6 puntos, los estudios S3, S6, S9, S16 y S17 con 5 puntos, el estudio S14 con 4 puntos y el estudio S2 con 1 punto.
**Figura 9. Distribución de puntajes obtenidos por estudio primario.**
Por otro lado, la Figura 10 muestra la distribución de los puntajes específicos obtenidos para cada criterio. En general, se observó que los 17 estudios primarios (que representan el 100% de los estudios seleccionados) describen de forma explícita y detallada sus objetivos, metodología y resultados. Además, todos ellos ofrecen una discusión pormenorizada sobre sus hallazgos, impactos, desafíos, limitaciones y posibles direcciones para futuras investigaciones.
**Figura 10. Distribución de puntajes obtenidos por criterio y tipo de estudio.**
En cuanto a los resultados obtenidos para los criterios CC3, CC8 y CC9 (ver la Tabla 9), se observó lo siguiente: con respecto al criterio CC3, Se observó que 7 de los estudios (S3, S4, S9, S11, S12, S14, S16) (41.2%) aplican un formalismo claro para la validación de sus resultados, esto contrasta con los 10 estudios restantes (S1, S2, S5, S6, S7, S8, S10, S13, S15, S17) (58.8%), centrados en presentar el objetivo y alcance de sus trabajos, sin abordar en detalle sobre los métodos específicos de evaluación utilizados para validar sus propuestas; con respecto al criterio CC8, se determinó que 7 estudios (S5, S6, S7, S10, S15, S16, S17) (41.2%) fueron publicados en revistas, conferencias o journals con un índice JCR inferior a 1. Por otro lado, 5 estudios (S3, S11, S12, S13, S14) (29.4%) están indexados en revistas con un JCR entre 1 y 5, y los 5 estudios restantes (S1, S2, S4, S8, S9) (29.4%) poseen un índice JCR superior a 5. Finalmente, con respecto al criterio CC9, se halló que 3 estudios (S3, S15, S16) (17.6%) no han sido citados hasta la fecha de publicación de este estudio, 5 estudios (S4, S6, S8, S10, S17) (29.4%) han recibido entre una y cinco citas, y 9 estudios (S1, S2, S5, S7, S9, S11, S12, S13, S14) (53%) han sido citados más de cinco veces.
En la Figura 11 se presenta la clasificación de los estudios de acuerdo con el tipo de publicación por año. El propósito de este reporte es determinar tendencias relacionadas con el interés investigativo en la línea de tiempo propuesta para la RSL, y de esta manera establecer cuáles son los eventos que están realizando investigación activa en el área.
**Figura 11. Distribución temporal por tipo de estudio.**
Con relación a la distribución temporal de los estudios, se puede observar lo siguiente: el año con mayor número de publicaciones fue el 2023, con un total de siete (7) estudios publicados (41.2%), seguido por los años 2022, 2021 y 2020 que reportaron un total de tres (3) publicaciones (17.6%) cada año, respectivamente. Finalmente, no se identificaron estudios publicados en los años 2016, 2017 y 2019. Por otro lado, con relación a los eventos y revistas reportados en el análisis de los resultados, se puede observar que ocho (8) estudios (41.11%) (S1, S5, S7, S9, S10, S13, S16) fueron publicados en revistas de alto impacto que tratan temas relacionados con ingeniería de software y arquitectura de software cuántica. Asimismo, diez (10) estudios (58.89%) (S2, S3, S4, S6, S8, S11, S12, S14, S15, S17) fueron publicados en congresos y conferencias que tratan temas relacionados con temáticas emergentes en torno a la computación cuántica y la arquitectura de software cuántica desde el punto de vista de la física y las ciencias de la computación.

## Respuesta a las preguntas de investigación

A continuación, se presentan las respuestas a las preguntas de investigación, basadas en el análisis de los 17 estudios primarios y la evaluación de su pertinencia,

## (P1 y P2)  ¿Cuáles son los tipos de investigación y tipos de soluciones identificados en la literatura?

En la Figura 12 se presenta la distribución de estudios clasificados por tipo de investigación y por tipo de solución:
**Figura 12. Distribución de estudios por tipo de investigación y de solución.**
De acuerdo con los resultados: siete (7) estudios (41.17%) (S5, S1, S6, S8, S10, S15, S16) realizan la evaluación de soluciones metodológicas y modelos mediante técnicas de análisis teórico y experimental. Por otro lado, los diez (10) estudios restantes (58.82%) (S2, S3, S4, S7, S9, S12, S13, S14, S17) proponen procesos, métodos, modelos, herramientas o marcos de trabajo nuevos para dar solución a aspectos relacionados con la arquitectura de software en el contexto de la computación cuántica. Finalmente, no se reportaron artículos de opinión, filosóficos, de validación o de experiencia personal.
Con relación a los métodos de investigación, los resultados se concentran en tres áreas: (i) la ejecución de revisiones y mapeos sistemáticos de la literatura (en adelante denominados estudios teóricos) para determinar el estado del arte en la definición del conocimiento sobre el área de interés, con 4 estudios enfocados en este tema (S5, S1, S2, S17); (ii) la creación de modelos, metodologías, procesos y herramientas para mejorar el diseño, e implementación de dichas arquitecturas (en adelante denominados soluciones metodológicas), abarcando 7 estudios (S11, S4, S7, S8, S9, S10, S13); y (iii) el desarrollo de soluciones híbridas que combinan prácticas de arquitectura de software tradicional con el uso de algoritmos y plataformas cuánticas (en adelante denominados soluciones híbridas), que fue tema de 6 estudios (S3, S6, S12, S14, S15, S16).
Con relación a los estudios teóricos: En general, las propuestas de carácter teórico se centran en desarrollar revisiones o mapeos sistemáticos que exploran enfoques relacionados con el estudio de las arquitecturas de software híbridas y cuánticas. En la Tabla 13 se describen los aspectos más relevantes identificados en los artículos que fueron clasificados en esta categoría:
**Tabla 13. Estudios teóricos.**

### Tabla extraída 13

| Estudio | Soluciones identificadas |
| --- | --- |
|  |  |
| S1 | Procesos centrados en la seguridad de la información utilizando arquitecturas de software cuánticas, Notaciones de modelado derivadas de UML adaptadas a las necesidades de la computación cuántica . Patrones de diseño para el desarrollo de arquitecturas basadas en enfoques híbridos clásico-cuántico. Desarrollo y soporte de herramientas, lenguajes de programación y frameworks adaptados a las necesidades de la computación cuántica. |
| S2 | Definición de procesos formales para el diseño de arquitecturas cuánticas . Estudio de nuevas áreas como la ingeniería de dominio cuántico, el modelado de arquitecturas basado en (Q-UML) y la simulación de software cuántico. Inclusión de nuevos roles profesionales capacitados para aplicar soluciones enfocadas a los retos que trae la computación cuántica. |
| S5, S17 | Estudio de criterios de calidad presentes en la computación clásica y su nivel de conformidad con la computación cuántica, por ejemplo: rendimiento, escalabilidad, seguridad, fiabilidad, facilidad de pruebas, adaptabilidad, usabilidad, entre otros. Identificación, estudio y caracterización de nuevos criterios de calidad exclusivos de la computación cuántica, por ejemplo: sensibilidad al ruido, magnitud de los errores probabilísticos, fiabilidad de las simulaciones, coherencia cuántica, escalabilidad de qu bits , interoperabilidad entre dispositivos cuánticos, compatibilidad entre dispositivos clásicos y cuánticos, entre otros. |

Con relación al desarrollo de soluciones metodológicas: Las soluciones metodológicas se centran en proponer modelos, procesos, técnicas; y en general, cualquier tipo de aproximación que apoye el estudio de las arquitecturas de software clásico-cuánticas desde un punto de vista holístico que integre ambos campos. En la Tabla 14 se describen los aspectos más relevantes identificados en esta categoría:
**Tabla 14. Soluciones metodológicas.**

### Tabla extraída 14

| Estudio | Soluciones identificadas |
| --- | --- |
|  |  |
| S4 | Árbol de decisión que facilita la selección de arquitecturas clásicas sensibles a ser integradas con soluciones que contemplan aspectos relacionados con la computación cuántica, por ejemplo: selección de hardware, lenguajes de programación y herramientas de despliegue. |
| S7 | Arquitectura sin servidor ( serverless ) para integrar el desarrollo de algoritmos cuánticos en arquitecturas empresariales clásicas mediante el uso de funciones en la nube, orquestadores, contenedores, microservicios y una arquitectura orientada a eventos para la gestión de tareas programadas cuánticas. |
| S8 | Hoja de ruta que incluye estándare s , terminología y procedimientos que guíen el diseño de arquitecturas cuánticas. |
| S9 | Técnica de modelado basada en UML para diseñar arquitecturas y sistemas híbridos clásico-cuánticos. |
| S10 | Optimizador para mejorar el rendimiento de aplicaciones cuánticas basado en técnicas de procesamiento de ruido y conteo de qu bits . |
| S11 | Arquitectura multicapa (MVN) para el desarrollo de plataformas de computación cuántica integrado con componentes clásicos. |
| S13 | Ecosistema arquitectónico en capaz que integra estrategias para la transmisión de información utilizando dispositivos cuánticos. |

Con relación al desarrollo de soluciones híbridas: Las soluciones híbridas son propuestas que buscan integrar procesos, buenas prácticas, herramientas, entre otros, que pertenecen a la computación clásica y la cuántica. En la Tabla 15 se describen los aspectos más relevantes identificados en esta categoría:
**Tabla 15. Soluciones híbridas.**

### Tabla extraída 15

| Estudio | Soluciones identificadas |
| --- | --- |
|  |  |
| S3 | Solución basada en modelos que utiliza una extensión del modelo de componentes Palladio propuesto por Reussner et al. (del inglés PCM) para analizar la fiabilidad de arquitecturas de software híbridas. |
| S6 | El estudio se centra en establecer la necesidad de desarrollar marcos de diseño híbridos que integren las buenas prácticas que propone la computación clásica, incluyendo aspectos propios de la computación cuántica. |
| S12 | Importancia de establecer un ciclo de vida para el desarrollo de software que incluya actividades como la división cuántico-clásica, la selección de hardware cuántico y la mitigación de errores mediante escenarios simulados antes de pasar a etapas productivas. |
| S14 | En este estudio, los autores sugieren la necesidad de definir modelos que permitan la transición entre las prácticas de arquitectura de software clásica a enfoques cuánticos. |
| S15 | Loa autores hacen énfasis en la necesidad de establecer estrategias para la integración de sistemas clásico-cuánticos que garanticen la modularidad y la portabilidad de componentes cuánticos y clásicos. |
| S16 | Solución que propone una lista de chequeo para la toma de decisiones adecuadas en la definición de arquitecturas de software clásicas, cuánticas e híbridas, considerando aspectos como los detalles de implementación (lenguajes de programación, herramientas de modelado, frameworks ) y la selección del hardware adecuado para el diseño de algoritmos cuánticos acorde a las necesidades de las partes interesadas. |


## (P3) ¿Cuáles son los tipos de arquitecturas de software reportados en la literatura en el contexto de la computación cuántica?

De acuerdo con los resultados reportados en la literatura, se observa que el desarrollo de soluciones en torno a la definición de arquitecturas de software se divide en dos enfoques: (i) el desarrollo de soluciones puramente cuánticas, y (ii) la implementación de soluciones híbridas. En la Tabla 16 se presenta el detalle de los tipos de arquitecturas y soluciones identificados en la literatura y su clasificación. Cada tipo de arquitectura tiene un identificador asociado para facilitar los análisis posteriores:
**Tabla 16. Tipos de arquitecturas identificados en la literatura.**

### Tabla extraída 16

| No | Tipo de arquitectura o solución | Identificador del tipo de solución | Estudios relacionados | Enfoque |  |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  | Cuántico | Híbrido |
| 1 | Arquitectura en capas | A1 | S1, S3, S11 |  | X |
| 2 | Arquitectura pipeline | A2 | S1 |  | X |
| 3 | Arquitectura basada en prototipos | A3 | S1 |  | X |
| 4 | Arquitectura de diseño compuesto | A4 | S1 |  | X |
| 5 | Patrón de contención recursiva | A5 | S1 |  | X |
| 6 | Patrón de puertas para n- qbits | A6 | S1, S17 | X |  |
| 7 | Arquitectura centrada en procesos | A7 | S2, S12 |  | X |
| 8 | Arquitecturas centradas en componentes (PCM) | A8 | S3 |  | X |
| 9 | Quantum annealing | A9 | S4 | X |  |
| 10 | Simulación cuántica | A10 | S4 | X |  |
| 11 | Computación cuántica universal | A11 | S4 | X |  |
| 12 | Arquitectura en la nube | A12 | S7 |  | X |
| 13 | Arquitectura de microservicios | A13 | S7 |  | X |
| 14 | Arquitectura orientada a eventos | A14 | S7 |  | X |
| 15 | Arquitectura serverless | A15 | S7 |  | X |
| 16 | Arquitectura para plataformas cuánticas | A16 | S11 | X |  |
| 17 | Ciclo de vida para la definición de arquitecturas | A17 | S2, S6, S8 | X |  |
| 18 | Ecosistema de computación cuántica distribuida | A18 | S13 | X |  |
| Acrónimo. No: Número. |  |  |  |  |  |

En general, se observó un total de 18 enfoques para la definición, implementación o diseño de arquitecturas en diferentes contextos, de los cuales 11 elementos (61.1%) corresponden a estudios relacionados con soluciones híbridas, y los 7 elementos restantes (38.9%) a trabajos que involucran patrones o arquitecturas cuánticas.
La Figura 13 muestra la distribución de los estudios de acuerdo con cada tipo de solución:
**Figura 13. Grafo de relación entre estudios y tipos de solución.**
El grafo presentado en la Figura 13 muestra una relación clara entre los artículos (representados como círculos verdes) y los tipos de soluciones arquitectónicas propuestas (soluciones híbridas representadas como cuadrados rojos y soluciones cuánticas representadas como cuadrados azules). El grafo revela que varios artículos coinciden en abordar ciertos tipos de soluciones, lo que indica un interés común en aspectos concretos, por ejemplo: la arquitectura en capas (A1) es tratada por los artículos S1, S3 y S11, lo que demuestra su relevancia como base estructural para diseñar sistemas cuánticos. Asimismo, la arquitectura centrada en procesos (A7) es compartida entre los artículos S2 y S12, lo que sugiere un enfoque colectivo en establecer metodologías estructuradas para el desarrollo de software. Del mismo modo, el ciclo de vida para la definición de arquitecturas (A17) aparece en los estudios S2, S6 y S8, lo que refuerza la importancia de una visión integral que abarque el ciclo de vida de la arquitectura. Otra solución recurrente es el patrón de puertas para n-qubits (A6), abordado en S1 y S17, lo que resalta el interés en optimizar la gestión de qubits en sistemas híbridos. De manera similar, la computación cuántica universal (A11) y la simulación cuántica (A10) son investigadas en el artículo S4, indicando que ya existen iniciativas en torno a aspectos propios de la computación cuántica y el desarrollo de nuevas tecnologías. Estas coincidencias sugieren que ciertos tipos de soluciones hacen parte del interés colectivo en torno al desarrollo de arquitecturas de software híbridas o cuánticas.
Finalmente, los nodos agrupados en la figura muestran cómo ciertos tipos de soluciones arquitectónicas concentran un interés particular en los estudios, por ejemplo: la prominencia de la arquitectura en capas (A1) sugiere su importancia y utilidad como una base estructural robusta; de igual manera, la presencia recurrente de A17 y su asociación con múltiples artículos refleja una orientación hacia el estudio de metodologías integrales que consideran el ciclo de vida completo para el diseño e implementación de arquitecturas híbridas y cuánticas.

## (P4) ¿Cuál es el impacto de las arquitecturas de software en el contexto de la computación cuántica en comparación con las arquitecturas clásicas?

De acuerdo con los resultados, se orbserva una fuerte tendencia hacia la evolución gradual entre los sistemas clásicos y cuánticos a través de modelos, herramientas, metodologías y arquitecturas que aplican lo mejor de ambos mundos. En la Figura 14 se presenta el análisis de los resultados desde tres perspectivas: su impacto en la investigación de campos emergentes, el desarrollo de nuevas tecnologías y la creación de nuevos perfiles profesionales:
**Figura 14. Distribución de impacto por tipo de estudio relacionado.**
De acuerdo con la Figura 14, 15 estudios (88.23%) (S1, S2, S3, S5, S6, S8, S9, S10, S11, S12, S13, S14, S15, S16, S17) proponen investigaciones relacionadas con campos emergentes en computación cuántica, 8 estudios (47.05%) (S1, S2, S3, S4, S6, S7, S8, S10) plantean soluciones tecnológicas en el ámbito cuántico, y 8 estudios (47.05%) (S2, S3, S5, S8, S9, S14, S16, S17) mencionan la necesidad de capacitación profesional para el desarrollo de habilidades específicas en este nuevo paradigma. A continuación, se describe el impacto identificado en cada uno de los artículos de manera individual.
Con relación al estudio de nuevos campos emergentes: S1 explora procesos arquitectónicos, patrones de diseño y modelado adaptados a la computación cuántica; S2 aborda áreas como la ingeniería de dominio cuántico y la simulación; S3 se centra en enfoques arquitectónicos para integrar software híbrido cuántico; S5 examina cómo los criterios de calidad clásicos pueden adaptarse a plataformas cuánticas; S6 discute oportunidades en arquitecturas híbridas para superar las barreras clásicas, ampliando los límites de la computación cuántica; S8: proporciona una hoja de ruta estándar para la computación cuántica, fomentando su desarrollo como un campo emergente; S9 introduce perfiles cuánticos en notación Q-UML, aplicando el modelado UML clásico a sistemas híbridos; finalmente, los estudios S13 y S17 abordan aspectos emergentes, como ecosistemas distribuidos (S13) y patrones de desarrollo (S17).
Con relación al desarrollo de nuevas tecnologías: S1 propone herramientas y frameworks específicos, como Q-UML y lenguajes de programación adaptados al desarrollo de software cuántico; S2 introduce ciclos de vida y simulación para el desarrollo cuántico; S3 extiende qADL y Palladio para analizar fiabilidad en arquitecturas híbridas; S4 plantea árboles de decisión para seleccionar arquitecturas cuánticas; S6 discute la integración de componentes cuánticos en arquitecturas híbridas; S7 presenta arquitecturas serverless para alojar y ejecutar algoritmos cuánticos en la nube aplicando el concepto de Quantum as a Service (QaaS); S8 analiza estándares y procedimientos técnicos para guiar el desarrollo cuántico; S10 examina algoritmos híbridos y frameworks de desarrollo cuánticos; S11 introduce arquitecturas multicapa para integrar computación cuántica y clásica; S13 propone estrategias de diseño para ecosistemas distribuidos; y S14 plantea un modelo para la transición del software clásico al cuántico.
Con relación a la capacitación de profesionales: S2 destaca la necesidad de nuevos roles con habilidades específicas para el desarrollo de soluciones adaptadas a la computación cuántica; S3 propone capacitar nuevos profesionales capaces de diseñar arquitecturas híbridas; S5 menciona la importancia de adoptar los conocimientos en torno al uso de criterios de calidad para su uso en plataformas cuánticas; S8 incluye una hoja de ruta para formar profesionales en estándares cuánticos emergentes; S9 resalta la necesidad de expertos en modelado híbrido clásico-cuántico; S14 enfatiza que la transición al desarrollo cuántico ya está sucediendo y los profesionales deben estar preparados para este nuevo paradigma de diseño y desarrollo de software; finalmente, S17 menciona que la inclusión de nuevos patrones requiere la formación de profesionales capaces de interpretar estos enfoques.

## (P5)  ¿Cuáles son los desafíos reportados en la literatura en torno a la definición de arquitecturas de software en el contexto de la computación cuántica?

En la Tabla 17 se presentan los desafíos identificados en torno al desarrollo de arquitecturas híbridas y cuánticas. Estos desafíos involucran el estudio de nuevos procesos, herramientas, técnicas y tecnologías que faciliten la transición entre el paradigma que establece la ingeniería de software clásico y los nuevos retos y necesidades planteados por la computación cuántica:
**Tabla 17. Desafíos concretos identificados en la literatura.**

### Tabla extraída 17

| No | Estudio | Descripción |
| --- | --- | --- |
|  |  |  |
| 1 | S3 | Adaptación de herramientas existentes para incluir componentes/capas/niveles de abstracción que son exclusivas de la computación cuántica y la necesidad de definir métodos de evaluación para determinar el grado de fiabilidad de algoritmos cuánticos. |
| 2 | S4 | Refinar métodos para la selección de arquitecturas híbridas que faciliten la integración de arquitecturas clásicas y cuánticas. |
| 3 | S5 | Establecer estrategias para resolver problemas relacionados con la limitada portabilidad, escalabilidad, mantenibilidad y facilidad de pruebas del software cuántico, la dependencia de algoritmos cuánticos con tecnologías muy específicas y la ausencia de sistemas operativos cuánticos nativos. |
| 4 | S7 | Necesidad de estándares, políticas y marcos de trabajo para la integración de tecnologías cuánticas en sistemas existentes, |
| 5 | S7 | Falta de una arquitectura configurable, desacoplada y genérica que facilite la integración entre sistemas clásicos y cuánticos. |
| 6 | S10 | Desarrollo de estrategias para el diseño, validación y evaluación de algoritmos de software cuánticos en entornos operativos. |
| 7 | S10 | La validación de requisitos no funcionales exclusivos de la computación cuántica como el manejo de errores, el ruido probabilístico, la coherencia cuántica, entre otros, mediante la definición de técnicas para la mitigación de errores. |
| 8 | S11 | Heterogeneidad en los métodos utilizados para la abstracción de soluciones en el contexto de la arquitectura de software cuántica. |
| 9 | S11 | Heterogeneidad en las plataformas, lenguajes de programación y entornos especializados para el desarrollo de sistemas cuánticos. |
| 10 | S11 | Dependencia con proveedores específicos en el uso de hardware cuántico especializado y un número limitado de algoritmos cuánticos en la industria. |
| 11 | S12 | Falta de métodos y herramientas específicas adecuadas que se adapten para cada fase del ciclo de vida para la definición de arquitecturas cuánticas y/o híbridas. |
| 12 | S12 | Selección y gestión del hardware adecuado que se adapte a las necesidades del diseño de arquitecturas software híbridas y cuánticas. |

Además de los desafíos planteados anteriormente, la industria enfrenta retos relacionados con el análisis, gestión y validación de los criterios de calidad o requisitos no funcionales en el contexto de la arquitectura de software cuántica. En la Tabla 18 se presenta el detalle de los requisitos no funcionales identificados en la literatura y el contexto en el que fueron mencionados (híbrido o cuántico):
**Tabla 18. Requisitos no funcionales identificados en la literatura.**

### Tabla extraída 18

| No | Requisito no funcional | Estudios relacionados | Tipo de solución |
| --- | --- | --- | --- |
| 1 | Eficiencia | S16 | Híbrido |
| 2 | Rendimiento | S6, S7, S16 |  |
| 3 | Disponibilidad | S16 |  |
| 4 | Fiabilidad | S3, S6, S10 |  |
| 5 | Mantenibilidad | S16 |  |
| 6 | Escalabilidad | S6, S7, S16 |  |
| 7 | Interoperabilidad | S16 |  |
| 8 | Facilidad de pruebas | S16 |  |
| 9 | Usabilidad | S16 |  |
| 10 | Seguridad | S1, S16 |  |
| 11 | Ruido probabilístico | S10, S13 | Cuántico |
| 12 | Errores computacionales | S10 |  |
| 13 | Decoherencia cuántica | S13 |  |
| 14 | Optimización de circuitos cuánticos | S13 |  |
| 15 | Integración entre capas físicas y lógicas | S13 |  |
| Acrónimos. No: Número. |  |  |  |

En la Figura 15 se presenta la distribución cuantitativa de los estudios clasificados por atributo de calidad y tipo de solución:
**Figura 15. Distribución de estudios por tipo de requisito no funcional.**
En particular, la gráfica muestra una distribución desigual entre los atributos cuánticos e híbridos, siendo estos últimos más estudiados con un total de 10 atributos frente a los 5 del grupo cuántico. En el cuadrante cuántico, el atributo más estudiado es ruido probabilístico (2 estudios, [S10, S13]), mientras que atributos como los errores computacionales (S10), la decoherencia cuántica (S13), la optimización de circuitos cuánticos (S13) y la integración entre capas físicas y lógicas (S13) son mencionados o estudiados en un artículo cada uno, respectivamente. Por otro lado, el cuadrante híbrido muestra que los atributos más recurrentes son la rendimiento y la escalabilidad (3 estudios cada uno, [S6, S7, S16]), seguidos por la fiabilidad (3 estudios, [S3, S6, S10]). De igual manera, la seguridad se menciona como uno de los ejes centrales que guían dos estudios (S1, S16). Finalmente, atributos como la eficiencia, disponibilidad, mantenibilidad, interoperabilidad, facilidad de pruebas y la usabilidad son mencionados en un solo estudio (S16). Esto sugiere que los estudios híbridos abordan una diversidad temática más amplia, enfocándose en la operatividad y sostenibilidad de las soluciones, mientras que los estudios cuánticos se concentran en desafíos conceptuales y técnicos que surgen al utilizar este nuevo paradigma de diseño de arquitecturas.
En la Tabla 19 se presenta un resumen estructurado de todos los desafíos identificados en la literatura y un conjunto de estrategias sugeridas por los autores para abordarlos en estudios futuros. El propósito de esta tabla es establecer una matriz que facilite el estudio de los elementos más importantes que se pueden trabajar en nuevos estudios:
**Tabla 19. Desafíos y estrategias sugeridos para abordarlos.**

### Tabla extraída 19

| No | Desafío | Referencias | Importancia | Estrategias sugeridas |
| --- | --- | --- | --- | --- |
| 1 | Desarrollo de marcos estandarizados | S1, S6, S8, S9, S14 | La estandarización es crucial para cualquier campo tecnológico emergente. En la computación cuántica, la falta de procesos arquitectónicos y notaciones de modelado estandarizados dificulta la escalabilidad de las soluciones. | Desarrollar y adoptar estándares internacionales para el modelado y la arquitectura de software cuántico. Fomentar la colaboración entre académicos e industria para facilitar el desarrollo de marcos de trabajo para el diseño de arquitecturas de software cuánticas y/o hibridas. |
| 2 | Transición entre arquitecturas clásicas y cuánticas | S11, S3, S4, S10, S12 | La integración de arquitecturas clásicas y cuánticas es esencial para una transición fluida hacia tecnologías más avanzadas, aprovechando lo mejor de ambos mundos. | Invertir en investigación para desarrollar métodos de integración eficientes. Crear marcos de trabajo para guiar la transición entre arquitecturas clásicas y cuánticas. |
| 3 | Formación de nuevo talento especializado | S1, S16 | La computación cuántica requiere habilidades y conocimientos especializados, que actualmente son escasos. | Establecer programas educativos centrados en la computación cuántica. Promover la formación y la capacitación en empresas y universidades para formar profesionales con conocimientos específicos adaptados a las necesidades de la computación cuántica. |
| 4 | Desafíos técnicos y de integración | S3, S6, S13, S16 | Los desafíos como la portabilidad, escalabilidad y mantenibilidad del software cuántico son cruciales para su adopción generalizada. | Invertir en I+D para mejorar la tecnología de software cuántico. Desarrollar herramientas y plataformas que aborden específicamente los desafíos técnicos relacionados con el desarrollo de sistemas cuánticos. |
| 5 | Aspectos no funcionales y calidad | S5, S11, S1, S4, S10, S14, S16, S17 | Los criterios de calidad son fundamentales para el éxito de cualquier tecnología, especialmente en un campo tan avanzado como la computación cuántica. | Realizar investigaciones específicas sobre aspectos no funcionales exclusivos de la computación cuántica. Realizar estudios para identificar el grado de relación y diferencias asociados con los criterios de calidad clásicos cuando se aplican al contexto cuántico. |
| Acrónimos. No: Número. |  |  |  |  |


## (P6) ¿Cuáles son las vías de trabajo futuro en torno a la definición, implementación y optimización de arquitecturas de software en el contexto de la computación cuántica?

En la Tabla 20 se presenta el detalle de los trabajos futuros propuestos por los autores en cada uno de los estudios primarios:
**Tabla 20. Líneas de trabajo futuro identificadas en la literatura.**

### Tabla extraída 20

| Estudio | Descripción |
| --- | --- |
| S1 | Realización de revisiones sistemáticas enfocadas en computación cuántica y desarrollo de hipótesis y principios. |
| S1, S2 | Desarrollo de procesos y estándares para describir el ciclo de vida del software cuántico y habilidades específicas en computación cuántica. |
| S10 | Optimización para mitigar errores probabilísticos y ruido en la computación cuántica. |
| S11 | Exploración de estándares, interfaces clásico-cuánticas y algoritmos para procesamiento paralelo. |
| S13 | Interconexión de computadoras cuánticas mediante la internet cuántica y estandarización de protocolos. |
| S14 | Desarrollo de modelos y marcos para facilitar la transición de organizaciones hacia sistemas cuánticos. |
| S17 | Documentación y publicación de patrones para el desarrollo de software cuántico. |
| S4 | Refinamiento y validación de un árbol de decisión para seleccionar arquitecturas de software adecuadas. |
| S5, S6 | Desarrollo de estándares y estudio del impacto de los requisitos no funcionales en arquitecturas híbridas y cuánticas. |
| S7 | Mejora de la escalabilidad y eficiencia de arquitecturas serverless para integración en sistemas cuánticos. |
| S8 | Estandarización de términos y conceptos para un vocabulario homogéneo mediante ontologías y taxonomías. |
| S9 | Adaptación y refinamiento de técnicas de ingeniería de software clásicas en el contexto cuántico. |

Con base en las vías de trabajo futuro identificadas en la literatura presentadas en la Tabla 16, se puede observar una clara orientación hacia la necesidad de abordar los desafíos técnicos y conceptuales en el desarrollo y adopción de arquitecturas de software híbridas y cuánticas. En particular, destaca la importancia de la estandarización como un eje transversal para garantizar la interoperabilidad, la reutilización y la comprensión común entre los profesionales del área. La propuesta de estandarizar términos, conceptos, procesos y protocolos (S8, S13, S14) apunta a consolidar un marco de referencia capaz de acelerar la transición de sistemas clásicos a sistemas cuánticos e híbridos, minimizando las barreras conceptuales y técnicas existentes.
Por otro lado, los enfoques relacionados con la mejora y optimización de soluciones técnicas (S7, S10, S11) indican que las tecnologías cuánticas actuales enfrentan limitaciones importantes, como errores probabilísticos, ruido en el procesamiento y falta de escalabilidad. Los trabajos futuros propuestos en estos estudios proponen realizar nuevos estudios que aborden estos aspectos no funcionales específicos. Además, la exploración de nuevos paradigmas y enfoques metodológicos (S1, S2, S9, S17) indica que existe la necesidad de adaptar y refinar técnicas tradicionales de ingeniería de software para que sean aplicables en contextos cuánticos.
Finalmente, el enfoque en la capacitación de profesionales (S1, S2, S5, S6) sugiere que el éxito de las arquitecturas de software cuánticas e híbridas dependerá en gran medida de la formación de expertos con habilidades interdisciplinarias, capaces de integrar conocimientos en computación clásica y cuántica. Esto hace evidente la importancia de desarrollar propuestas que promuevan la creación de un cuerpo de conocimiento sólido y accesible para la comunidad científica y la industria en los próximos años.

## Hallazgos reportados en la literatura

En la Tabla 21 se presenta un resumen estructurado de los hallazgos principales identificados luego de responder cada una de las preguntas de investigación, con el propósito de facilitar un análisis de alto nivel por parte de otros autores que busquen información general sobre la respuesta a cada pregunta:
**Tabla 21. Hallazgos principales.**

### Tabla extraída 21

| Pregunta | Descripción |
| --- | --- |
| P1, P2 | La investigación sobre arquitecturas de software cuántico se divide en tres enfoques principales: estudios teóricos, soluciones metodológicas y soluciones híbridas. Los estudios teóricos se centran en revisiones y mapeos sistemáticos para analizar el estado del arte, destacando criterios de calidad y modelos de diseño. Las soluciones metodológicas proponen técnicas y herramientas para mejorar el diseño e implementación de software cuántico. Por otro lado, las soluciones híbridas combinan prácticas de la computación clásica con enfoques cuánticos para optimizar la fiabilidad, modularidad y escalabilidad de los sistemas. |
| P3 | El análisis de la literatura evidencia un mayor enfoque en soluciones híbridas en comparación con las soluciones cuánticas puras, lo que sugiere que la integración con arquitecturas tradicionales sigue siendo un área de investigación prioritaria. La prevalencia de enfoques híbridos resalta la necesidad de estrategias de transición que permitan adoptar la computación cuántica sin abandonar completamente los modelos clásicos. |
| P4 | El impacto de las arquitecturas de software en la computación cuántica se manifiesta en tres dimensiones: la exploración de nuevos campos emergentes, el desarrollo de tecnologías específicas y la formación de nuevos perfiles profesionales. |
| P5 | El desarrollo de arquitecturas de software en el contexto de la computación cuántica enfrenta múltiples desafíos que abarcan aspectos técnicos, metodológicos y formativos. La literatura muestra que es necesario adaptar herramientas y métodos clásicos para su integración con sistemas cuánticos, lo que requiere estrategias específicas para garantizar el funcionamiento correcto y consistente de soluciones que siguen enfoques híbridos. |
| P6 | Las vías de trabajo futuro en la definición, implementación y optimización de arquitecturas de software cuántico se centran en tres grandes ejes: estandarización, optimización técnica y formación de talento especializado. Estos hallazgos sugieren que la evolución de las arquitecturas de software cuánticas dependerá de un enfoque integral que combine investigación teórica, desarrollo de herramientas, estándares de diseño y capacitación especializada, sentando las bases para la consolidación de esta tecnología en la industria y la academia. |


## Discusión de los resultados

A continuación, se presenta la discusión de los aspectos relevantes identificados luego de ejecutar y responder a las preguntas de investigación. El propósito de esta actividad es extender el alcance del estudio buscando posibles vías de mejora, trabajo futuro o temas que puedan resultar de interés para otros investigadores.
Inicialmente, la distribución temporal de las publicaciones refleja un crecimiento significativo en el interés investigativo en torno al estudio de la arquitectura de software en el contexto de la computación cuántica. Este crecimiento podría atribuirse a varios factores, como avances tecnológicos, aumento de la financiación en investigación y desarrollo en el campo de la computación cuántica, o una combinación de estos. En cuanto a las tendencias en los temas de investigación identificados, y de acuerdo con los resultados reportados en la revisión, los estudios primarios se enfocan en cuatro ejes:
- Arquitectura de software para sistemas cuánticos: existe un interés significativo en desarrollar arquitecturas de software que puedan soportar la complejidad y las capacidades únicas de la computación cuántica.
- Integración de sistemas clásicos-cuánticos: los estudios sobre la integración de sistemas clásicos y cuánticos indican una la existencia de una fase intermedia, donde ambos paradigmas deben coexistir y complementarse.
- Desarrollo de soluciones metodológicas y patrones de software cuántico: la definición de procesos, modelos, frameworks, herramientas y patrones específicos para el desarrollo de software cuántico es crucial para aprovechar plenamente las capacidades cuánticas.
- Migración de Software clásico a cuántico: la investigación en modelos y estrategias para migrar sistemas de software existentes al paradigma cuántico muestra que la transición hacia la computación cuántica es un proceso que ya está en curso.
La tendencia hacia el desarrollo de estudios de evaluación y propuestas de solución muestra un interés generalizado en torno al desarrollo nuevos métodos y/o tecnologías que puedan ser adoptados rápidamente en la industria de software, reflejando la urgencia y el entusiasmo por avanzar en este campo, superando barreras técnicas y teóricas para hacer realidad el potencial que promete la computación cuántica.
Con relación a los tipos de soluciones identificados en la literatura, los resultados indican una fuerte tendencia hacia la adopción o aplicación de soluciones híbridas que buscan aplicar el conjunto de mejores prácticas existentes en los enfoques clásicos en soluciones cuánticas, lo que puede obedecer a diferentes factores:
- Las arquitecturas híbridas son más comunes que las puramente cuánticas porque representan un enfoque más pragmático y gradual hacia la adopción de la tecnología cuántica, ya que la mayoría de las organizaciones y sistemas existentes son esencialmente clásicos; de esta forma, las arquitecturas híbridas favorecen una transición gradual, aprovechando lo mejor de ambos mundos.
- Las arquitecturas híbridas ofrecen mayor versatilidad al manejar tareas clásicas y cuánticas, lo que las hace adecuadas para una amplia gama de aplicaciones.
- La prevalencia de arquitecturas híbridas refleja el estado actual del desarrollo en la computación cuántica, que está buscando aprovechar lo mejor de ambos campos. Como resultado, se observa que el uso extendido de arquitecturas híbridas sobre las puramente cuánticas se debe a su practicidad, flexibilidad, y la capacidad de enfrentar los desafíos actuales de la implementación cuántica, al tiempo que se preparan para el futuro de esta tecnología emergente.
No obstante, los estudios analizados demuestran un alto interés en la definición de marcos de trabajo, metodologías, procesos y ciclos de vida propios de la computación cuántica, lo cual abre las puertas para el desarrollo de estándares y marcos de referencia nuevos que representen un estado del conocimiento extendido en torno a esta temática. Por otro lado, el análisis de los resultados permitió identificar que la adopción de arquitecturas cuánticas planteadas en los estudios se fundamenta en varias causas y razones críticas que abordan limitaciones actuales y abren nuevas posibilidades para el procesamiento y la resolución de varios problemas:
- La computación cuántica ofrece capacidades superiores de procesamiento y eficiencia energética en comparación con los sistemas clásicos, especialmente en tareas que involucran cálculos complejos y optimización, debido a fenómenos como la superposición y el entrelazamiento cuántico (S1, S4).
- Permite abordar problemas intratables para la computación clásica, como la simulación de sistemas cuánticos (S1), criptografía y construcción de esquemas de seguridad digital avanzada y optimización de grandes conjuntos de datos.
- Promueve la innovación en campos críticos como la ciencia de datos, l medicina, la química, la logística, entre muchos otros, acelerando cálculos que son imprácticos en la computación clásica.
- Las arquitecturas cuánticas se alinean con el avance hacia sistemas más sostenibles energéticamente, abordando preocupaciones sobre el consumo de energía y el impacto ambiental de las tecnologías de la información (S8).
- Preparan el terreno para el futuro de la tecnología, estableciendo las bases para sistemas y aplicaciones que aprovecharán plenamente las ventajas de la computación cuántica a medida que esta tecnología madure y se vuelva más accesible (S1, S2, S4, S6, S8, S17). La transición hacia arquitecturas cuánticas refleja un paso estratégico para superar las barreras de la computación tradicional, marcando el camino hacia una era de innovación y eficiencia sin precedentes.

## Brechas identificadas

En términos generales, la revisión sistemática de la literatura pone de manifiesto la necesidad de establecer estándares para el desarrollo de arquitecturas de software híbridas y cuánticas mediante marcos comunes que faciliten su diseño y mantenimiento. Esto permitiría la creación de soluciones híbridas y cuánticas eficientes, con altos niveles de cohesión, abordando aspectos como: (i) la compatibilidad con sistemas clásicos mediante la integración de elementos funcionales y no funcionales provenientes de ambos paradigmas, y (ii) la transición progresiva de sistemas clásicos a sistemas cuánticos a través de enfoques híbridos, entre otros.
Asimismo, el análisis de la literatura muestra que el desarrollo de arquitecturas de software en el contexto cuántico sigue dos direcciones: (i) la creación de enfoques puramente cuánticos orientados a optimizar metodologías bien conocidas mediante algoritmos y recursos cuánticos, y (ii) la definición de soluciones híbridas que integran capacidades cuánticas dentro de marcos clásicos existentes. Sin embargo, la diversidad de enfoques en este campo ha dado lugar a un panorama fragmentado, en el que la transición entre el paradigma clásico y cuántico enfrenta múltiples desafíos metodológicos. Con el fin de proporcionar un enfoque concreto a la investigación presentada en este estudio, el alcance de la propuesta se limita a la exploración de enfoques híbridos. Esta decisión se fundamenta en el hecho de que las arquitecturas híbridas representan uno de los principales desafíos actuales, alineados con la realidad tecnológica presente de la industria. A diferencia de las soluciones puramente cuánticas, que requieren infraestructuras especializadas, un alto nivel de experticia técnica y entornos que aún se encuentran en desarrollo activo, las arquitecturas híbridas permiten una transición controlada desde los sistemas clásicos, reduciendo significativamente las barreras de entrada para las empresas que buscan experimentar con tecnologías cuánticas sin reestructurar completamente sus procesos. Además, las arquitecturas híbridas fomentan la compatibilidad y la reutilización de componentes al permitir la coexistencia de sistemas clásicos y cuánticos, optimizando así el uso de recursos, reduciendo los costos operativos y acelerando los ciclos de desarrollo, tal como se indica en los reportes técnicos publicados por empresas como IBM, Google y Microsoft, que destacan reducciones de latencia y optimización de recursos en entornos híbridos . Finalmente, estas arquitecturas ofrecen una solución práctica sin comprometer la posibilidad de una evolución hacia modelos completamente cuánticos.
Adicionalmente, los hallazgos derivados de la revisión sistemática de la literatura y de los estudios exploratorios indican que la necesidad de arquitecturas diferenciadas no es exclusiva del dominio cuántico, ya que pueden encontrarse paralelismos claros en otras áreas como la Computación de Alto Desempeño (HPC). Comunidades específicas relacionadas con HPC han enfrentado desafíos similares al integrar componentes heterogéneos en sistemas híbridos. Por ejemplo, centros de investigación como Oak Ridge National Laboratory , Leibniz Supercomputing Centre , Forschungszentrum Jülich , Barcelona Supercomputing Center , and RIKEN  han reportado experiencias en las que la incorporación de nuevos paradigmas, como GPUs, FPGAs y aceleradores especializados, requirió la definición de arquitecturas específicas para gestionar la interoperabilidad, los flujos de datos y los atributos de calidad. De este modo, los desafíos reportados por grupos de investigación activos en el área refuerzan la relevancia de establecer un marco general que facilite la instanciación de arquitecturas adaptadas a contextos específicos.
No obstante, a pesar de la diversidad de propuestas técnicas identificadas en la RSL, no se evidenció una solución formulada explícitamente desde la perspectiva de la arquitectura empresarial. Las contribuciones analizadas se concentran principalmente en aspectos tecnológicos, modelos de integración o niveles particulares de la arquitectura de software, dejando de lado dimensiones estratégicas, organizacionales y de gobernanza. Esta ausencia resulta especialmente relevante si se considera que la adopción de capacidades híbridas y cuánticas en entornos reales exige su articulación con la estrategia del negocio, la gestión del portafolio tecnológico y los modelos de gobierno de TI. En consecuencia, se identifica una brecha significativa en la literatura: la necesidad de proponer una arquitectura de referencia que, además de integrar componentes clásicos y cuánticos, se encuentre alineada con los principios y dominios de la arquitectura empresarial, permitiendo su incorporación planificada y sostenible dentro del ecosistema organizacional.

## Sesgos y limitaciones de la RSL

La revisión de la literatura es un proceso que aplica de manera ordenada y sistemática un conjunto de actividades claramente definidas. Gracias a esto, la RSL es una técnica robusta que facilita el análisis exhaustivo de información en un área o campo de interés. Sin embargo, como cualquier proceso, desarrollar una RSL enfrenta una serie de desafíos relacionados con los sesgos y subjetividad que surgen al ser una actividad realizada por seres humanos. En este sentido, la Tabla 22 presenta las limitaciones, sesgos y restricciones identificados durante la ejecución de la RSL, y las estrategias aplicadas para reducirlos, asegurando que los resultados sean objetivos:
**Tabla 22. Sesgos y limitaciones.**

### Tabla extraída 22

| No | Limitación/Sesgo | Descripción | Estrategia de mitigación |
| --- | --- | --- | --- |
| 1 | Sesgo de selección | La tendencia a incluir solo estudios que parecen relevantes a primera vista puede llevar a una muestra no representativa. | Aplicar criterios de inclusión y exclusión claramente definidos. La estrategia utilizada para reducir este tipo de sesgo se basó en utilizar la técnica Delphi durante cada una de las fases de selección de los estudios. De esta manera, cada etapa del proceso fue validada por pares expertos. |
| 2 | Subjetividad en la evaluación | La interpretación de los estudios puede verse afectada por las perspectivas del investigador. | Utilizar herramientas de evaluación de calidad objetivas e involucrar a múltiples revisores expertos en el área . |
| 4 | Sesgo de publicación | Los estudios con resultados negativos o no concluyentes suelen no publicarse, lo que sesga los hallazgos hacia resultados positivos. | Definir un conjunto de criterios de inclusión y exclusión que eviten incluir estudios que pueden agregar ruido al estudio. |
| 5 | Efecto de heterogeneidad de estudios | La variabilidad en los métodos y enfoques de los estudios dificulta la síntesis de resultados. | Clasificar los estudios por metodologías y realizar análisis que estén directamente alineadas con los objetivos y preguntas de investigación |
| 6 | Subjetividad en la extracción de datos | Al extraer datos, puede ocurrir un sesgo en la selección de información relevante debido a la interpretación del investigador. | Estandarizar el proceso de extracción de datos mediante plantillas y revisión cruzada de los datos extraídos. |
| 7 | Restricción de acceso a bases de datos | Algunos estudios pueden estar en bases de datos de acceso restringido, limitando la inclusión de información relevante. | Acceder a bases de datos con suscripción o buscar fuentes alternativas. En caso de identificar estudios primarios en fuentes restringidas, establecer un canal de comunicación con los autores para solicitar acceso. |
| 8 | Limitaciones temporales | Los cambios en la investigación y las publicaciones futuras pueden alterar los hallazgos de la revisión. | Definir un marco temporal de actualización y realizar revisiones periódicas para mantener la vigencia de los resultados. |


## Estudio exploratorio de soluciones aplicadas en industria

Para contrastar los hallazgos académicos con la práctica industrial, la revisión sistemática de la literatura se complementó aplicando una versión reducida y adaptada del método de Revisión de la Literatura Multivocal (RLM) . Este enfoque permite integrar evidencia proveniente de fuentes consideradas en el campo de la investigación como no tradicionales, por ejemplo: reportes técnicos, documentación oficial de plataformas, blogs de investigación corporativos y estudios de caso publicados por la industria, con el fin de obtener una visión más completa y realista del estado del arte.
Para complementar el análisis Multivocal, el proceso siguió el marco de ingeniería de software basado en evidencia (ISBE) , el cual promueve la toma de decisiones fundamentadas en la mejor evidencia disponible, combinando resultados de investigación con experiencia práctica. De este modo, los estudios industriales fueron tratados como fuentes de evidencia complementaria, orientadas a validar, enriquecer o contrastar los elementos arquitectónicos identificados durante la revisión académica. Adicionalmente, se aplicó un análisis cualitativo de contenido siguiendo las directrices propuestas en , con el objetivo de identificar explícitamente mecanismos de integración clásico–cuántica, modelos de ejecución híbrida, decisiones arquitectónicas recurrentes y buenas prácticas documentadas en entornos reales. En la Figura 16 se presenta el flujo de actividades que conforman la ejecución del estudio exploratorio llevado a cabo para el propósito de este proyecto de investigación:
**Figura 16. Protocolo para la ejecución del estudio exploratorio.**

## Resultados obtenidos durante la exploración

En general, los resultados muestran estudios de caso, SDK y reportes técnicos que evidencian la adopción progresiva de arquitecturas híbridas en contextos industriales, incluyendo plataformas como Qiskit Runtime, TensorFlow Quantum, Cirq, PennyLane y Azure Quantum, así como reportes técnicos publicados por IBM, Google y Microsoft. La síntesis de estos resultados se presenta en la Tabla 23, que documenta de manera estructurada la contribución de cada estudio y su relación con los elementos arquitectónicos definidos en esta investigación:
**Tabla 23. Estudios de caso y proyectos piloto identificados.**

### Tabla extraída 23

| Estudio | Categoría | Aporte | Referencia |
| --- | --- | --- | --- |
| Qiskit Runtime (IBM) – Servicio cloud híbrido clásico-cuántico | SDK | Permite ejecutar cargas de trabajo híbridas, sesiones, manejo de iteraciones, mitigación de error, modos de ejecución optimizados para tareas clásicas y cuánticas. |  |
| TensorFlow Quantum (TFQ) + Cirq – Prototipos híbridos ML | Caso de uso | Clasificación de imágenes binarias (Fashion-MNIST) usando modelos híbridos QNN/CNN con TFQ y Cirq. Muestra cómo se combinan modelos clásicos y circuitos cuánticos en una aplicación concreta. |  |
| TensorFlow Quantum – marco híbrido ML-cuántico | SDK | Permite construir modelos híbridos, datos cuánticos, integración con Cirq, operaciones compatibles con TensorFlow , diferenciación automática, etc. |  |

Por otro lado, la Tabla 24 describe los reportes realizados por empresas que han dedicado esfuerzos en la investigación aplicada en torno al desarrollo de arquitecturas de software cuánticas e híbridas:
**Tabla 24. Reportes técnicos publicados por empresas.**

### Tabla extraída 24

| Estudio | Referencia | Aporte |
| --- | --- | --- |
| Microsoft Azure Quantum | [88] | Describe la arquitectura híbrida de Azure Quantum: cómo clásico y cuántico se combinan, diferentes modelos ( batch , sesiones, computación integrada, etc.), e incluye ejemplos de uso en entornos concretos como VQE, QAOA. |
| Microsoft / Quantinuum | Anuncia la función “ Integrated Hybrid ” que permite mezclar código clásico y cuántico ejecutándose en un mismo hardware cuántico, incluyendo constructos de programación como ramas, bucles, mediciones intermedias, lo que permite mayor integración durante la coherencia de qubits . |  |
|  | Informe en donde combinan hardware cuántico (trampa de iones) con capacidades clásicas para “mejorar la tasa de error lógico comparado con qubits físicos”. |  |
| Google Quantum AI | Reporte realizado en abril de 2025 donde Google presenta un enfoque híbrido que combina simulación digital y analógica para simular modelos de magnetismo físico, usando un dispositivo de 69 qubits . |  |


## Análisis de los resultados

Los resultados obtenidos durante el estudio exploratorio permiten contrastar de manera directa los hallazgos derivados de la revisión sistemática de la literatura con la evidencia reportada en entornos operativos. Un primer aspecto relevante del análisis es la convergencia conceptual entre la literatura académica y las prácticas industriales en torno a la necesidad de integrar recursos clásicos y cuánticos dentro de un mismo flujo de ejecución, por ejemplo: plataformas como Qiskit Runtime y Azure Quantum evidencian una clara orientación hacia modelos de ejecución híbrida que buscan reducir la latencia, optimizar la iteración de algoritmos variacionales y acercar el cómputo clásico al hardware cuántico. Este enfoque coincide con los principios identificados en los estudios académicos, donde la computación híbrida es reconocida como una condición necesaria para el desarrollo de nuevos sistemas. Asimismo, los SDKs y marcos de desarrollo analizados, como TensorFlow Quantum, Cirq y PennyLane, muestran que la integración híbrida no se limita a la infraestructura de ejecución, sino que se extiende al nivel de diseño del software y de los modelos computacionales. En estos entornos, la combinación de capas clásicas y cuánticas dentro de un mismo modelo refuerza la importancia de contar con estructuras arquitectónicas claras que soporten la interoperabilidad entre paradigmas.
Por otro lado, los reportes técnicos publicados por empresas como IBM, Microsoft y Google aportan evidencia empírica sobre decisiones arquitectónicas avanzadas que rara vez se documentan con el mismo nivel de detalle en la literatura académica. Iniciativas como la ejecución híbrida integrada de Microsoft y Quantinuum, o los enfoques híbridos de simulación digital–analógica presentados por Google Quantum AI introducen mecanismos de control, flujo y optimización que amplían el alcance conceptual de las arquitecturas híbridas. Estos aportes industriales refuerzan la necesidad de extender y ajustar ciertos elementos del modelo de referencia, particularmente aquellos relacionados con atributos de calidad, estilos arquitectónicos y patrones de diseño.
Sin embargo, aunque el estudio exploratorio ayudó a identificar avances significativos en la definición de mecanismos de integración híbrida, no se observaron propuestas formuladas explícitamente desde la perspectiva de la arquitectura empresarial. Las iniciativas analizadas se concentran principalmente en niveles tecnológicos, infraestructurales o de programación, sin evidenciar marcos que articulen estas capacidades con dominios estratégicos, de negocio o de gobernanza organizacional. No obstante, esta ausencia puede explicarse por diversos factores, entre ellos: el carácter propietario y de diseño cerrado de muchas soluciones industriales, las estrategias de vendor locking asociadas a plataformas específicas, el nivel de abstracción técnica en el que se sitúan los reportes divulgados, las restricciones normativas y comerciales relacionadas con la confidencialidad, la propiedad intelectual y la divulgación de decisiones arquitectónicas estratégicas, entre muchos otros. Por esta razón, aunque la evidencia industrial confirma la consolidación del enfoque híbrido a nivel técnico, persiste una oportunidad clara para desarrollar una propuesta que articule estas capacidades dentro de un marco integral de arquitectura empresarial que no sea de uso exclusivo por empresas propietarias específicas.

## Sesgos y limitaciones de la búsqueda exploratoria

En general, los estudios exploratorios facilitan la identificación de prácticas emergentes, enfoques aplicados y decisiones arquitectónicas adoptadas en contextos productivos. Sin embargo, al apoyarse en fuentes de datos heterogéneas que no hacen parte de la literatura académica, este proceso también enfrenta una serie de sesgos inherentes a la naturaleza de dichas fuentes y a la forma en que la evidencia es producida y divulgada.
A diferencia de la literatura académica revisada por pares, las fuentes industriales no necesariamente siguen metodologías explícitas, ni presentan evaluaciones sistemáticas o comparables entre sí. De igual manera, la información disponible suele estar condicionada por intereses comerciales, restricciones de confidencialidad y enfoques específicos de plataforma. En este sentido, y con el fin de garantizar la validez de los resultados obtenidos, se identificaron y documentaron los principales sesgos y limitaciones identificadas por el equipo investigador, junto con las estrategias adoptadas para mitigar su impacto (ver la Tabla 25):
**Tabla 25. Sesgos y limitaciones del estudio exploratorio.**

### Tabla extraída 25

| No | Limitación/Sesgo | Descripción | Estrategia de mitigación |
| --- | --- | --- | --- |
| 1 | Sesgo de fuente industrial | La mayoría de las evidencias provienen de grandes empresas tecnológicas, lo que puede sobrerrepresentar enfoques propios de ciertos ecosistemas o plataformas. | Incluir estudios de múltiples proveedores (IBM, Google, Microsoft) y contrastar sus propuestas con los resultados obtenidos en la RSL académica. |
| 2 | Sesgo comercial | Los reportes industriales tienden a resaltar beneficios y resultados positivos, omitiendo limitaciones técnicas o fallos experimentales. | Analizar los estudios desde una perspectiva descriptiva y no evaluativa, enfocándose en decisiones arquitectónicas explícitas y mecanismos de integración documentados. |
| 3 | Falta de estandarización metodológica | Los estudios prácticos no siguen un formato homogéneo ni criterios metodológicos comparables entre sí. | Aplicar una plantilla común de análisis basada en los elementos arquitectónicos definidos en el modelo de referencia, garantizando consistencia en la comparación. |
| 4 | Subjetividad en la interpretación técnica | La interpretación de documentación técnica y blogs corporativos puede estar influenciada por la experiencia previa del investigador. | Realizar revisiones cruzadas de los análisis y validar las interpretaciones mediante consenso entre investigadores. |
| 5 | Enfoque en casos piloto o experimentales | Muchas soluciones reportadas corresponden a pilotos, prototipos o entornos controlados, no a sistemas productivos consolidados. | Clasificar explícitamente los estudios como casos piloto, SDKs o reportes técnicos, y limitar las conclusiones a su nivel de madurez tecnológica. |
| 6 | Dependencia de plataformas específicas | Las soluciones analizadas suelen estar fuertemente acopladas a plataformas propietarias. | Abstraer los hallazgos a nivel arquitectónico, evitando dependencias tecnológicas concretas y enfocándose en patrones y mecanismos generales. |
| 7 | Restricción de información técnica | Algunas decisiones arquitectónicas no son detalladas por razones de confidencialidad o propiedad intelectual. | Complementar la información con documentación pública adicional y referencias cruzadas dentro del mismo ecosistema tecnológico. |
| Acrónimos. No: Número |  |  |  |

Adicionalmente, se identificaron sesgos asociados a la forma en que los resultados industriales son reportados y comunicados. En numerosos casos, la evidencia disponible resalta métricas seleccionadas, casos de éxito o configuraciones optimizadas que enfatizan mejoras en rendimiento, reducción de latencia o eficiencia en el uso de recursos, sin detallar de manera exhaustiva las condiciones experimentales, limitaciones técnicas o escenarios adversos. Asimismo, muchas de las soluciones analizadas corresponden a arquitecturas cerradas o plataformas propietarias, en las que ciertos componentes internos, decisiones estructurales o mecanismos de optimización no son divulgados públicamente. Esta característica limita la trazabilidad técnica de los resultados y dificulta la comparación objetiva entre enfoques. La Tabla 26 presenta los sesgos operativos identificados bajo este enfoque de análisis:
**Tabla 26. Sesgos y limitaciones operativas.**

### Tabla extraída 26

| No | Limitación/Sesgo | Descripción | Estrategia de mitigación |
| --- | --- | --- | --- |
| 1 | Reporte selectivo de métricas | Los estudios industriales resaltan principalmente resultados positivos, sin exponer de manera sistemática limitaciones o fallos. | Analizar la evidencia desde una perspectiva descriptiva y evitar extrapolaciones no sustentadas. |
| 2 | Escenarios controlados o pilotos | Parte de los resultados proviene de prototipos, pruebas de laboratorio o entornos optimizados. | Clasificar explícitamente el nivel de madurez tecnológica de cada caso analizado. |
| 3 | Soluciones cerradas o propietarias | Muchas arquitecturas industriales no exponen completamente su diseño interno ni sus decisiones estructurales. | Abstraer los hallazgos a nivel de patrones generales y evitar inferencias sobre mecanismos no documentados. |
| 4 | Falta de detalle experimental | Algunos reportes no describen parámetros técnicos completos o configuraciones específicas. | Limitar el análisis a información explícitamente documentada y verificable. |
| Acrónimos. No: Número |  |  |  |


# Capítulo III. Armonización de propuestas identificadas en la literatura y en la industria


## Introducción

Este capítulo presenta un análisis orientado a determinar el grado de detalle, alcance y pertinencia en el estado del arte obtenido en capítulo anterior, con el fin de establecer una base conceptual sólida para la propuesta doctoral. Para lograrlo, se ejecutó un proceso de armonización que incluye actividades de homogeneización, comparación e integración de los elementos más relevantes descritos por otros autores, identificando sus similitudes y divergencias en torno al estudio de las arquitecturas de referencia de software híbridas. Los resultados de este análisis permitieron consolidar los aspectos comunes y complementarios necesarios para definir un proceso unificado que sustente la propuesta presentada en esta tesus, en respuesta a las necesidades emergentes de la Ingeniería de Software Cuántica.

## Proceso para llevar a cabo la armonización de los estudios y propuestas identificados en el estado del arte

Cada una de las propuestas y estudios identificados en el capítulo anterior presenta su propia estructura, así como un conjunto de características comunes y elementos que las diferencian entre sí. Por esta razón, fue necesario realizar un análisis para reconocer estos aspectos y evaluar su pertinencia dentro del marco conceptual de la investigación. Para llevar a cabo este análisis, se decidió aplicar el proceso de armonización HPROCESS, propuesto en . Este proceso establece un conjunto de actividades permiten armonizar múltiples modelos y/o propuestas en torno a un área de estudio de interés, con el propósito de establecer una base del conocimiento. De acuerdo con , el proceso está conformado por tres actividades, que son descritas a continuación:
- Homogeneización: Actividad orientada a identificar y normalizar los conceptos, términos y estructuras presentes en los distintos modelos, propuestas y estudios analizados. Esta etapa busca reducir ambigüedades semánticas y conceptuales mediante la identificación de equivalencias y solapamientos entre elementos. El resultado de esta actividad es un conjunto inicial de elementos descritos de forma uniforme que conforman la base conceptual para los análisis posteriores.
- Comparación: Actividad destinada a evaluar de manera sistemática el grado de presencia, ausencia o cobertura parcial de los elementos homogeneizados en cada uno de los estudios considerados. En esta etapa se analiza la correspondencia entre los elementos identificados durante la homogeneización y las prácticas observadas para identificar patrones de convergencia, divergencia y vacíos recurrentes.
- Los resultados de la comparación proporcionan evidencia empírica sobre el nivel de adopción y madurez de cada elemento, y sirven como insumo para las decisiones de integración.
- Integración: Actividad que consolida los resultados de la homogeneización y la comparación en un modelo estructurado. Esta actividad culmina con la definición de un estado del conocimiento integrado que articula los elementos resultantes, garantizando trazabilidad entre la evidencia empírica y las decisiones de diseño adoptadas en cada uno de los estudios que fueron objeto de análisis.
En lo que resta de este capítulo, se describirá el protocolo aplicado para llevar a cabo cada una de estas actividades, y su correspondencia con los resultados obtenidos.

## Método de homogeneización

Según , las organizaciones enfrentan dificultades al seleccionar y aplicar un conjunto de modelos que les permita soportar de forma coherente sus procesos internos. Como resultado, es frecuente que opten por aplicar partes específicas de distintos modelos para resolver problemas puntuales. Esta situación se ve agravada por el alto nivel de heterogeneidad existente entre las propuestas identificadas, lo que dificulta la toma de decisiones respecto a cuáles elementos deben adoptarse, adaptarse o descartarse.
En el contexto de esta investigación, la homogeneización busca establecer una base común de conocimiento en torno a los estudios identificados en la RSL y el estudio exploratorio aplicando cuatro actividades, que serán descritas con detalle en lo que resta de la sección: (i) adquisición de conocimiento sobre los modelos involucrados, (ii) análisis de su estructura y terminología, (ii) identificación de requerimientos, (iii) identificación de correspondencia, y (iv) análisis de resultados.

## Adquisición de conocimiento sobre los modelos involucrados

La adquisición de conocimiento implica analizar los atributos propios de cada estudio, incluyendo su propósito, aproximación conceptual, alcance, contribuciones principales, y la organización o autores responsables de su desarrollo. Al contar con esta base inicial de conocimiento, se busca obtener una comprensión clara de los elementos que cada propuesta aporta al proceso de definición de una arquitectura de referencia. Siguiendo el enfoque metodológico descrito en , esta fase involucró identificar y analizar los estudios relevantes en torno a la definición de arquitecturas de referencia. Como resultado de esta fase, se identificó un total de 7 estudios que proponen elementos para caracterizar una arquitectura de referencia (ver la Tabla 27):
**Tabla 27. Estudios que proponen lineamientos para definir arquitecturas de referencia.**

### Tabla extraída 27

| No | Nombre del estudio | Ref erencia | Descripción |
| --- | --- | --- | --- |
| 1 | Evolving Reference Architecture Description: Guidelines based on ISO/IEC/IEEE 42010 | [34] | Propone lineamientos basados en estándares internacionales que guían la evolución de arquitecturas y definen elementos que deben documentarse en una AR. |
| 2 | Revisión de elementos conceptuales para la representación de las arquitecturas de referencias de software | [98] | Revisa los elementos conceptuales que deben estar presentes en una arquitectura de referencia (modelos, abstracciones, relaciones, dominios). |
| 3 | Software Architecture in Practice | [33] | Enfatiza el papel de los atributos de calidad en el diseño arquitectónico y su rol como eje central para definir AR coherentes. |
| 4 | A framework for analysis and design of software reference architectures | [99] | Presenta un marco para diseñar arquitecturas de referencia resaltando la relación entre contexto, objetivos, dominio y formalización estructural. |
| 5 | Reference Architectures | Establece una definición formal de AR, sus elementos esenciales, tareas de ingeniería asociadas (análisis, síntesis, evaluación) y su estructura conceptual. |  |
| 6 | Researching Reference Architectures | Proporciona directrices metodológicas para crear AR: estructura recomendada, reglas de claridad, niveles de abstracción, criterios de calidad y valor. |  |
| 7 | The concept of reference architectures | Analiza múltiples AR para identificar elementos comunes (terminología, procesos, calidad, componentes), vacíos y patrones para la definición de arquitecturas de referencia. |  |
| Acrónimos. No: Número; Ref : Referencia. AR: Arquitectura de referencia. |  |  |  |

Con base en los estudios identificados, el siguiente paso consistió en realizar un realizar un análisis estructural, examinando su contenido, componentes estructurales, similitudes y diferencias conceptuales. Para lograrlo, cada estudio fue analizado en términos de: (i) su estructura documental, (ii) las secciones principales que componen su contenido, (iii) el enfoque conceptual adoptado, y (iv) su nivel de abstracción. El análisis estructural se realizó siguiendo los pasos definidos en la fase de armonización, que incluyen:
1. Identificación del artefacto fuente: Localización del documento, recuperación de metadatos y clasificación inicial.
1. Lectura estructural: Revisión del índice, encabezados y organización general del estudio para extraer información relevante.
1. Descomposición por secciones: Identificación de capítulos, apartados y elementos estructurales comunes.
1. Comparación transversal: Análisis de patrones estructurales compartidos entre los estudios, por ejemplo: uso de marcos conceptuales, estructuras por dimensiones, modelos normativos.
1. Registro de resultados: documentación consolidada del análisis estructural.
Para facilitar la organización de los resultados, se definió una plantilla que establece los aspectos de interés en los análisis posteriores (ver la Tabla 28):
**Tabla 28. Plantilla para la adquisición de conocimiento.**

### Tabla extraída 28

| Título del estudio i- ésimo identificado para llevar a cabo la homogeneización |  |
| --- | --- |
| Referencia |  |
| Estructura del estudio |  |
| Resumen estructurado |  |
| Tipo de documento |  |

En la Tabla 29 se presenta la síntesis del conocimiento adquirido a partir del análisis estructural de los estudios incluidos en esta etapa:
**Tabla 29. Conocimiento adquirido en los estudios analizados.**

### Tabla extraída 29

| Estudio 1: Evolving Reference Architecture Description: Guidelines based on ISO/IEC/IEEE 42010 |  |
| --- | --- |
| Referencia |  |
| Estructura del estudio | Introducción → Fundamentos ISO 42010 → Trabajos relacionados → Directrices → Modelo conceptual → Ejemplo de aplicación → Conclusiones |
| Resumen estructurado | El estudio propone un conjunto de directrices para la evolución de descripciones de arquitecturas de referencia fundamentadas en la norma ISO/IEC/IEEE 42010. Además de definir explícitamente el propósito de la arquitectura, insiste en la necesidad de situarla en un contexto de dominio bien delimitado y de manejar distintos niveles de abstracción para guiar su adaptación y mantenimiento. Para ello, introduce un modelo conceptual que organiza los elementos arquitectónicos (datos de dominio, variabilidad, instanciación, vistas) y pone especial énfasis en el uso de una terminología coherente y estable. Finalmente, el trabajo resalta la importancia de reutilizar plantillas, lineamientos y estructuras previamente definidas para garantizar la homogeneidad y la trazabilidad en la evolución de arquitecturas de referencia. |
| Tipo de documento | Reporte técnico |
| Estudio 2: Revisión de elementos conceptuales para la representación de las arquitecturas de referencias de software |  |
| Referencia |  |
| Estructura del estudio | Introducción → Marco conceptual → Revisión sistemática → Elementos comunes → Limitaciones → Conclusiones |
| Resumen estructurado | Este estudio realiza una revisión sistemática de distintas propuestas para la representación de arquitecturas de referencia de software, identificando los elementos conceptuales que se repiten y los vacíos existentes. En su análisis, se destacan la necesidad de explicitar el propósito de la arquitectura y el contexto en el que será utilizada, así como de contar con un glosario y una terminología unificada que permita reducir ambigüedades. El trabajo profundiza en la descripción de estructuras arquitectónicas (vistas, componentes, relaciones) y muestra cómo los patrones de diseño y los elementos reutilizables (artefactos, modelos, plantillas) contribuyen a una representación más robusta y consistente. Asimismo, subraya el papel de los atributos de calidad como criterio transversal para valorar la pertinencia de las diferentes formas de representación arquitectónica. |
| Tipo de documento | Revisión teórica |
| Estudio 3: Software Architecture in Practice: Software Architect Practice |  |
| Referencia |  |
| Estructura del estudio | Conceptos fundamentales → Estructuras y vistas → Atributos de calidad → Patrones y tácticas → Evaluación → Documentación → Casos |
| Resumen estructurado | La obra presenta una visión integral de la arquitectura de software, estructurada en torno a la definición de estructuras arquitectónicas (módulos, componentes, vistas) y a la forma en que estas responden a requerimientos funcionales y atributos de calidad. A través de múltiples ejemplos, se explica cómo las vistas y los niveles de abstracción permiten separar preocupaciones y facilitar el análisis, el diseño y la comunicación arquitectónica. El texto profundiza en el rol de los atributos de calidad —como rendimiento, disponibilidad, modificabilidad o seguridad— como impulsores directos de decisiones arquitectónicas, y en cómo los estilos arquitectónicos, las tácticas y los patrones de diseño ofrecen soluciones recurrentes a problemas frecuentes. Finalmente, se enfatiza la reutilización de estructuras, patrones y artefactos documentales como mecanismo para mejorar la consistencia y la mantenibilidad en arquitecturas de referencia y sistemas concretos. |
| Tipo de documento | Libro técnico |
| Estudio 4: A framework for analysis and design of software reference architectures |  |
| Referencia |  |
| Estructura del estudio | Problema → Definiciones → Marco (Contexto/Objetivos/Diseño) → Tipos de RA → Validación → Conclusiones |
| Resumen estructurado | El estudio propone un marco formal para el análisis y diseño de arquitecturas de referencia basado en tres dimensiones principales: contexto, objetivos y diseño. A partir de estas dimensiones, se definen diferentes tipos de arquitecturas de referencia y se establece cómo el propósito de la arquitectura, su dominio de aplicación y las decisiones de diseño interactúan entre sí. El marco facilita la clasificación y comparación de distintas propuestas arquitectónicas, poniendo de relieve el papel del contexto organizacional y tecnológico, los niveles de abstracción y las estructuras conceptuales que dan soporte a la arquitectura. Asimismo, el trabajo destaca la presencia de elementos reutilizables y patrones conceptuales que pueden emplearse para construir nuevas arquitecturas de referencia o adaptar las existentes, contribuyendo a una mayor coherencia y alineación entre las soluciones de un mismo dominio. |
| Tipo de documento | Marco formal conceptual |
| Estudio 5: Reference Architectures |  |
| Referencia | [100] |
| Estructura del estudio | Introducción → Definiciones → Elementos esenciales → Actividades de ingeniería → Clasificación → Desafíos → Conclusiones |
| Resumen estructurado | Este trabajo ofrece una visión panorámica de las arquitecturas de referencia, con énfasis en la identificación y sistematización de los elementos esenciales que las componen. Se parte de definiciones precisas y de un glosario de términos clave para establecer un lenguaje común, y posteriormente se describen las actividades de ingeniería asociadas (análisis, síntesis, evaluación). El estudio clasifica diferentes tipos de arquitecturas de referencia según su propósito y dominio, mostrando cómo los niveles de abstracción, las estructuras arquitectónicas, los atributos de calidad y los mecanismos de reutilización se combinan en cada caso. Además, se discuten desafíos abiertos en el campo, lo que permite situar la propuesta de esta tesis dentro de una agenda de investigación más amplia sobre la sistematización y evolución de arquitecturas de referencia. |
| Tipo de documento | Síntesis conceptual |
| Estudio 6: Researching Reference Architectures |  |
| Referencia |  |
| Estructura del estudio | Definición → Componentes esenciales → Criterios de calidad → Estructura documental → Niveles de abstracción → Ejemplos → Conclusiones |
| Resumen estructurado | El documento se plantea como una guía práctica para la construcción y documentación de arquitecturas de referencia, centrada en identificar los componentes esenciales que estas deben contener y los criterios de calidad que deben satisfacer. Se describen de forma ordenada los elementos básicos de una RA (objetivos, contexto, estructuras, vistas, componentes) y se proponen recomendaciones para organizar el documento arquitectónico, definiendo secciones, niveles de abstracción y relaciones entre artefactos. Asimismo, se analizan los atributos de calidad que deben considerarse, así como el papel de la terminología consistente, los patrones arquitectónicos, los componentes estructurales y los elementos reutilizables (plantillas, fragmentos de arquitectura, ejemplos) como instrumentos para favorecer la estandarización y la reutilización dentro de un dominio. |
| Tipo de documento | Guía técnica |
| Estudio 7: The concept of Reference Architectures |  |
| Referencia |  |
| Estructura del estudio | Definición → Componentes esenciales → Criterios de calidad → Estructura documental → Niveles de abstracción → Ejemplos → Conclusiones |
| Resumen estructurado | En esta guía, el autor profundiza en cómo una arquitectura de referencia puede estructurarse de forma sistemática para servir como base recurrente en un dominio concreto. Para ello, propone describir de manera explícita el propósito de la arquitectura, el contexto de aplicación y los distintos niveles de abstracción desde los cuales puede ser interpretada. Además, se detalla cómo organizar el documento arquitectónico en secciones coherentes que recojan estructuras, componentes, patrones, atributos de calidad y ejemplos ilustrativos. Un aspecto central del estudio es la insistencia en el uso de glosarios, terminología uniforme y artefactos reutilizables, que facilitan la adopción de la arquitectura, su comunicación entre diferentes actores y su adaptación a escenarios específicos sin perder consistencia conceptual. |
| Tipo de documento | Guía técnica |

Los estudios analizados abordan la definición de arquitecturas de referencia desde enfoques diversos, que van desde marcos normativos y conceptuales, revisiones sistemáticas y guías técnicas, hasta estudios aplicados. De acuerdo con los resultados, cada propuesta enfatiza distintos aspectos: como la documentación, la reutilización, los atributos de calidad o la relación con el dominio. De igual manera, los estudios emplean estructuras propias para describir lo que constituye una arquitectura de referencia.
A pesar de las diferencias metodológicas y estructurales entre los estudios, el análisis comparativo facilitó la identificación de patrones conceptuales recurrentes que son comunes en la mayoría de los estudios, por ejemplo: se observa un acuerdo general en la necesidad de explicitar el propósito de la arquitectura de referencia, su contexto en dominio en el que esta será aplicada y las condiciones que garanticen su interpretación correcta. Asimismo, todos los estudios coinciden en la importancia de manejar múltiples niveles de abstracción capaces de adaptar la arquitectura a distintos públicos y escenarios sin perder coherencia conceptual. Por otro lado, los estudios resaltan la necesidad de contar con una terminología clara y estable, usualmente materializada mediante glosarios (como mecanismo para reducir ambigüedades y facilitar la comunicación entre los diferentes actores involucrados). Además, los estudios enfatizan la descripción sistemática de estructuras arquitectónicas, vistas y componentes, como elementos centrales para representar la organización interna de la arquitectura de referencia y su relación con los requerimientos funcionales y no funcionales del dominio. Otro punto de convergencia se encuentra en el papel transversal de los atributos de calidad, los cuales son señalados como impulsores de decisiones arquitectónicas y criterios para evaluar la pertinencia de una arquitectura de referencia. Adicionalmente, los estudios destacan el uso de estilos arquitectónicos, patrones arquitectónicos y patrones de diseño que encapsulan conocimiento probado, facilitando la transferencia de buenas prácticas entre sistemas.
Finalmente, todos los trabajos hacen explícita la conveniencia de emplear componentes estructurales reutilizables, por ejemplo: plantillas, fragmentos arquitectónicos y ejemplos de aplicación como mecanismos para promover la homogeneidad, la trazabilidad y la evolución controlada de las arquitecturas dentro de un mismo dominio.

## Identificación de los requerimientos

Con base en los resultados obtenidos durante la adquisición del conocimiento, la siguiente fase consistió en determinar cuáles son los elementos que conforman un marco de conocimiento común a todos los estudios que fueron objeto de análisis. Para llevar a cabo esta actividad, se analizaron los estudios presentados en la Tabla 27, con el fin de identificar los elementos arquitectónicos fundamentales que se mencionan de manera directa o indirecta por cada autor. Como resultado de este análisis, se obtuvo un total de diez elementos, identificados como (E1–E10), que representan los factores que deben estar presentes en la definición de una arquitectura de referencia. Estos elementos fueron seleccionados porque aparecen explícita o implícitamente en cada estudio, ya sea como requisitos, lineamientos, estructuras, buenas prácticas o fundamentos teóricos.
La Tabla 30 presenta el resumen de los elementos identificados y los estudios en los cuales se mencionan (directa o indirectamente):
**Tabla 30. Elementos identificados durante la homogeneización.**

### Tabla extraída 30

| Identificador | Elemento identificado | Descripción | Estudios |
| --- | --- | --- | --- |
| E1 | Objetivo de la arquitectura | El objetivo de una arquitectura de referencia define la razón de ser del artefacto arquitectónico. Este propósito puede orientarse a la estandarización de prácticas dentro de un dominio, el soporte a la interoperabilidad entre sistemas heterogéneos, la guía para el diseño de soluciones específicas, la alineación organizacional, la consolidación del conocimiento arquitectónico o la reutilización sistemática. El objetivo condiciona el alcance, los mecanismos de abstracción, los estilos y estructuras permitidas y las decisiones de diseño . |  |
| E2 | Contexto de la arquitectura | El contexto define los límites dentro de los cuales se aplica la arquitectura de referencia, incluyendo el dominio de negocio, el entorno tecnológico, los actores involucrados, restricciones organizacionales, dependencias externas, regulaciones aplicables y características operacionales. Un contexto bien definido permite que la arquitectura capture los factores que influyen en la adopción, adaptación o instanciación del modelo, y garantiza que los elementos propuestos sean coherentes con la realidad del dominio. |  |
| E3 | Nivel de abstracción | Los niveles de abstracción determinan el grado de detalle con el que se describen los elementos arquitectónicos. Una arquitectura de referencia puede ser altamente abstracta (centrada en principios, conceptos y modelos generales), semi-concreta (incluye estructuras y relaciones de forma parcialmente detallada) o concreta (especificación detallada de componentes, tecnologías y flujos). Este elemento es esencial porque permite distinguir entre visión conceptual, modelo de referencia y arquitectura de referencia . |  |
| E4 | Glosario y terminología | Un glosario formal establece un vocabulario controlado que evita ambigüedades semánticas, facilita la comunicación entre stakeholders y estandariza conceptos fundamentales. La existencia de terminología precisa es indispensable para la descripción arquitectónica según la norma ISO/IEC/IEEE 42010, y sostiene otras actividades como la identificación de estructuras, la documentación de decisiones arquitectónicas y la comparación entre modelos. |  |
| E5 | Estructuras arquitectónicas | Las estructuras representan la organización del sistema o dominio en términos de vistas, capas, módulos, componentes funcionales, relaciones, dependencias, flujos de interacción, responsabilidades y mecanismos de composición. Incluyen tanto estructuras lógicas como físicas, así como vistas funcionales, de información, de despliegue o de desarrollo. Este elemento proporciona la base para analizar la cohesión, el acoplamiento y la alineación del sistema con los atributos de calidad definidos en la arquitectura . |  |
| E6 | Atributos de calidad | Los atributos de calidad (o requerimientos no funcionales) establecen los criterios que determinan si un sistema o arquitectura cumple adecuadamente su propósito. Estos criterios incluyen desempeño, escalabilidad, seguridad, disponibilidad, mantenibilidad, portabilidad, resiliencia, eficiencia, entre otros. Los atributos de calidad impulsan decisiones arquitectónicas, guían la selección de patrones, estructuras y componentes, y actúan como criterios de evaluación del diseño arquitectónico. |  |
| E7 | Estilos y patrones arquitectónicos | Los estilos arquitectónicos proporcionan principios globales de organización estructural, mientras que los patrones proveen soluciones recurrentes a problemas comunes de diseño dentro del dominio. Incluyen estilos como capas, microservicios, pipes-and- filters , orientado a eventos, y patrones como MVC, adaptador es , entre otros. Estos estilos definen restricciones, responsabilidades, relaciones permitidas y estrategias de composición, y contribuyen a la coherencia y la reutilización a nivel arquitectónico. |  |
| E8 | Patrones de diseño | Los patrones de diseño definen plantillas reutilizables para resolver problemas específicos en el diseño de componentes, interacciones y estructuras internas. No operan al nivel global de la arquitectura (como los estilos), sino dentro de la implementación y organización de componentes específicos. Facilitan la extensibilidad, reutilización, claridad estructural y reducción de complejidad. Entre ellos se incluyen patrones creacionales, estructurales y de comportamiento. |  |
| E9 | Componentes estructurales | Incluyen la definición y especificación de módulos, subsistemas, servicios, interfaces, conectores, flujos de interacción y mecanismos de integración. Los componentes estructurales constituyen la base material de la arquitectura y permiten analizar su modularidad, acoplamiento, responsabilidades, interfaces contractuales y opciones de despliegue. Son esenciales para la transición entre una arquitectura de referencia y su instanciación en sistemas concretos. |  |
| E10 | Elementos reutilizables | Comprenden plantillas, artefactos, guías, lineamientos, modelos, fragmentos arquitectónicos, configuraciones y componentes que pueden aplicarse de manera recurrente en diferentes instancias dentro del mismo dominio. Su propósito es facilitar la estandarización, reducir el esfuerzo de diseño, mejorar la calidad y promover la consistencia entre sistemas derivados. La reutilización es un principio central en arquitecturas de referencia, especialmente en dominios complejos o altamente regulados. |  |


## Análisis de correspondencia entre elementos y estudios

Este análisis sirvió para determinar la relación entre cada elemento y las contribuciones de cada fuente, diferenciando los casos en los que los elementos eran abordados explícitamente de aquellos en los que su presencia era indirecta o inferida. En la Tabla 31 se presenta la matriz de correspondencia resultante del cruce entre los elementos identificados (E1–E10) y los estudios analizados donde:
- El símbolo ✔ indica que el elemento aparece de manera explícita en el estudio,
- El símbolo ◐ indica que el elemento está presente de forma indirecta o inferida.
**Tabla 31. Análisis de correspondencia entre estudios y elementos identificados.**

### Tabla extraída 31

| Estudio | Elemento |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | E1 | E2 | E3 | E4 | E5 | E6 | E7 | E8 | E9 | E10 |
| [34] | ✔ | ◐ | ✔ | ✔ | ◐ | ✔ | ✔ | ◐ | ◐ | ✔ |
| [98] | ◐ | ◐ | ◐ | ✔ | ✔ | ✔ | ◐ | ✔ | ✔ | ✔ |
| [33] | ◐ | ◐ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| [99] | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ | ◐ | ◐ | ◐ | ✔ |
| ✔ | ✔ | ✔ | ✔ | ◐ | ✔ | ◐ | ◐ | ◐ | ◐ |  |
| ✔ | ✔ | ✔ | ✔ | ◐ | ✔ | ◐ | ✔ | ✔ | ✔ |  |
| ✔ | ✔ | ◐ | ◐ | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |  |


## Análisis de los resultados

En general, los resultados muestran un alto nivel de convergencia, confirmando que los elementos (E1–E10) representan prácticas comunes y ampliamente reconocidas dentro de la literatura académica y técnica sobre arquitecturas de referencia. Como se observa Figura 17, la mayoría de los estudios presentan una cobertura completa o parcial para la mayor parte de los elementos, lo que se refleja en una distribución predominantemente homogénea de valores altos a lo largo de la matriz. En particular, elementos como el contexto de la arquitectura (E2), el glosario y la terminología (E4), los atributos de calidad (E6) y los componentes estructurales (E9) muestran una presencia consistente en prácticamente todos los estudios analizados, lo que indica un consenso sólido respecto a su relevancia conceptual y operativa. Por el contrario, elementos como los estilos y patrones arquitectónicos (E7) y los patrones de diseño (E8) muestran una mayor variabilidad, con una presencia recurrentemente parcial, lo que sugiere diferencias en el nivel de formalización con el que estos aspectos son tratados por cada autor. Esta combinación de alta convergencia global y variabilidad localizada proporciona una base empírica clara para justificar el proceso de integración posterior, que sirvió para distinguir entre elementos consolidados y aquellos que requieren ajustes o extensiones conceptuales dentro del modelo de referencia propuesto:
**Figura 17. Mapa de calor ordinal entre el nivel de correspondencia de elementos.**

## Método de comparación

Una vez concluida la identificación y caracterización de los elementos fundamentales presentes en cada uno de los estudios analizados, se llevó a cabo un proceso de comparación para establecer el nivel de correspondencia entre dichos elementos y los estudios/propuestas que fueron identificados en el capítulo anterior. Este proceso buscó identificar convergencias, divergencias y vacíos en la forma en que cada estudio aborda los elementos que surgieron durante la homogeneización.
De acuerdo con , el método de comparación debe cruzar los elementos de un modelo base contra los estudios de interés. Para el contexto de este proyecto, esta actividad se llevó a cabo cruzando los elementos E1-E10, con los estudios y propuestas identificados en el capítulo anterior. Para llevar a cabo esta tarea, la comparación se dividió en tres actividades: (i) analizar los estudios que conforman la base de conocimiento previa, (ii) diseñar la comparación, y (iii) ejecutar la comparación.

## Analizar los resultados que conforman la base de conocimiento previa

Esta etapa fue realizada durante la ejecución de la RSL y la búsqueda exploratoria presentada en el capítulo anterior. La Tabla 32 presenta un resumen estructurado de los estudios/propuestas que fueron seleccionados para llevar a cabo la comparación. Con el propósito de facilitar la lectura y los análisis posteriores, los estudios piloto y reportes técnicos tienen asociado un identificador que sigue la misma convención utilizada para los estudios primarios analizados durante la RSL:
**Tabla 32. Estudios/propuestas identificados para la comparación.**

### Tabla extraída 32

| Identificador | Estudio | Referencia | Fuente |
| --- | --- | --- | --- |
| S1 | Software architecture for quantum computing systems | [67] | Revisión sistemática de la literatura |
| S2 | Towards process centered architecting for quantum software systems |  |  |
| S3 | Engineering Reliable Hybrid Quantum Software |  |  |
| S4 | Selection of quantum computing architecture using a decision tree |  |  |
| S5 | Quality attributes on quantum computing platforms |  |  |
| S6 | Challenges and Opportunities in Quantum Software Architecture |  |  |
| S7 | A serverless cloud integration for quantum computing |  |  |
| S8 | Research on Quantum Computing Standard System Architecture |  |  |
| S9 | Design of classical-quantum systems with UML | [76] |  |
| S10 | Hybrid Quantum Algorithms and Quantum Software Frameworks | [77] |  |
| S11 | Quantum computing platforms: assessing the impact on quality attributes & sdlc activities | [78] |  |
| S12 | The Quantum software lifecycle | [79] |  |
| S13 | Towards a distributed quantum computing ecosystem | [80] |  |
| S14 | Classical to Quantum Software Migration Journey Begins: A Conceptual Readiness Model | [81] |  |
| S15 | Software Architecture Challenges in Integrating Hybrid Classical-Quantum Systems | [82] |  |
| S16 | Architecture Decisions in Quantum Software Systems: An Empirical Study on Stack Exchange | [83] |  |
| S17 | Patterns for Quantum Software Development |  |  |
| S18 | Qiskit Runtime (IBM) – Cloud Hybrid Service | [95] | Estudio exploratorio |
| S19 | TensorFlow Quantum – Binary Image Classification (MNIST / Fashion-MNIST, QNN/CNN) | [96] |  |
| S20 | TensorFlow Quantum – Hybrid ML SDK | [89] |  |
| S21 | Microsoft Azure Quantum – arquitectura híbrida e integración cuántico–clásica | [88] |  |
| S22 | Microsoft – How Microsoft and Quantinuum achieved reliable quantum computing |  |  |
| S23 | Microsoft – Microsoft Quantum Unlocks the Next Generation of Hybrid Quantum Computing |  |  |
| S24 | Google – A new hybrid platform for quantum simulation of magnetism | [85] |  |


## Diseñar la comparación

El método de comparación exige definir una plantilla que sirve como marco de referencia para identificar en qué medida cada estudio aborda explícita o indirectamente los elementos (E1-E10). La Tabla 33 presenta la estructura utilizada para desarrollar la comparación elementos y estudios. En el contexto de la  Tabla 33, los valores asignados en la columna “¿El estudio describe el elemento?” representan el grado en que cada estudio aborda los elementos definidos en el modelo base, donde la respuesta a la pregunta tiene tres respuestas posibles:
- Sí: El estudio describe el elemento de forma explícita y consistente, proporcionando una definición clara o una caracterización directa que es coherente con el significado conceptual del elemento en el modelo base. La presencia del elemento puede identificarse de manera inequívoca en el texto, ya sea como parte central de la propuesta o como un componente reconocido dentro del estudio.
- No: No se identifican descripciones, conceptos equivalentes o referencias que asocien el estudio con el elemento del modelo base.
- Parcialmente: El estudio aborda el elemento de manera implícita, fragmentada o incompleta. El elemento puede inferirse a partir de descripciones técnicas, ejemplos, decisiones de diseño o supuestos del estudio, pero no se presenta como un concepto claramente formalizado.
**Tabla 33. Plantilla de comparación.**

### Tabla extraída 33

| Pregunta de comparación: ¿El elemento está definido en el estudio ? Objetivo: Determinar cuáles elementos definidos en el modelo base son descritos en el estudio. Elementos definidos para la comparación: Elementos descritos en la Tabla 30 . |  |  |  |  |
| --- | --- | --- | --- | --- |
| Estudio i- ésimo | Nombre del estudio |  |  |  |
| Elemento | ¿El estudio describe el elemento? | Descripción |  |  |
|  | Si | No | Parcialmente |  |
| E1 |  |  |  |  |
| E2 |  |  |  |  |
| E3 |  |  |  |  |
| E4 |  |  |  |  |
| E5 |  |  |  |  |
| E6 |  |  |  |  |
| E7 |  |  |  |  |
| E8 |  |  |  |  |
| E9 |  |  |  |  |
| E10 |  |  |  |  |


## Llevar a cabo la comparación

Las tablas que se presentan a continuación reúnen los resultados de este proceso, permitiendo visualizar el nivel de cobertura de cada estudio y su contribución al conjunto de elementos considerados en esta tesis.

## Comparación entre elementos (E1-E10) y los estudios reportados en la RSL

Al homogenizar los estudios bajo un mismo marco conceptual, es posible evaluar el grado de convergencia entre las propuestas existentes, determinar la presencia o ausencia de enfoques integrados, y establecer una base comparativa que facilite la construcción de conocimiento articulado sobre arquitecturas cuántico–clásicas con relación a las propuestas planteadas por otros autores.
Teniendo en cuenta lo anterior, la Tabla 34 presenta el análisis comparativo entre los elementos que homogeneizados y los 17 estudios primarios identificados en la revisión sistemática de la literatura:
**Tabla 34. Comparación entre elementos (E1-E10) y estudios (S1-S17).**

### Tabla extraída 34

| Pregunta de comparación: ¿El elemento está definido en el estudio ? Objetivo: ¿Determinar cuáles elementos definidos en el modelo base son descritos en el estudio? Elementos definidos para la comparación: Elementos descritos en la Tabla 30 |  |  |  |  |
| --- | --- | --- | --- | --- |
| Estudio | S1: Quality Attributes on Quantum Computing Platforms |  |  |  |
| Elemento | ¿El estudio describe el elemento? | Descripción |  |  |
|  | Si | No | Parcialmente |  |
| E1 |  | X |  | El estudio no establece un objetivo arquitectónico formal. En lugar de definir metas arquitectónicas específicas, se dedica a identificar las características intrínsecas de los QCPs y evaluar cómo estas afectan al diseño y desarrollo de software. Su propósito es analítico y exploratorio: comprender cómo el QCP condiciona los QAs y el SDLC, no definir una arquitectura objetivo o un blueprint . |
| E2 | X |  |  | El contexto está descrito de manera explícita y extensa: presenta qué es un Quantum Computing Platform (hardware + software), detalla entornos de operación (superconductores, temperaturas criogénicas, dependencias cloud , herramientas remotas), caracteriza la naturaleza híbrida (CPU + QPU), y explica por qué los QCPs representan un paradigma radicalmente distinto para el desarrollo de software. Se analizan los proveedores, las herramientas disponibles, los modelos de acceso y las limitaciones físicas del entorno. |
| E3 |  |  | X | El estudio distingue varios niveles conceptuales: abstracciones de programación (nivel de puerta, circuitos), arquitectura general del QCP, capas de herramientas, división entre partes clásicas y cuánticas, y procesos de compilación y ejecución. Sin embargo, estos niveles no están organizados como un modelo formal de niveles de abstracción (como en una arquitectura de referencia). Lo que presenta son agrupaciones conceptuales derivadas de observar plataformas reales, no un modelo jerárquico estándar. |
| E4 |  |  | X | Utiliza terminología técnica profunda y precisa (no- go theorems , decoherencia, restricciones de copia/borrado, superconducting loops , gate- level abstractions , QPU–CPU dependency , remote toolchains , simulators , qubit-state restrictions ). Pero no define un glosario ni establece un vocabulario normado. La terminología aparece explicada en el flujo del texto, con base en experimentación y literatura, pero no se formalizan definiciones. |
| E5 | X |  |  | Presenta una arquitectura general de un QCP basada en el análisis transversal de plataformas reales: incluye QPU, entorno físico, dependencias clásicas, compiladores, simuladores, toolchains cloud , circuitos superconductores, controladores, y la división entre componentes de software nativos y clásicos. Explica cómo interactúan estas capas, cuál es su rol en la ejecución de algoritmos y cómo cada componente afecta los QAs . Esta es una arquitectura funcional derivada de la observación de múltiples QCPs . |
| E6 | X |  |  | El análisis de QAs es profundo: describe cómo el bajo nivel de abstracción afecta mantenibilidad, testabilidad y fiabilidad; cómo la heterogeneidad afecta cohesión, reusabilidad y manejabilidad; cómo el entorno físico impacta disponibilidad, escalabilidad y testabilidad ; cómo la dependencia de algoritmos cuánticos afecta portabilidad y robustez; y cómo la energía y el form factor modifican rendimiento y escalabilidad. También incluye una tabla completa QAs vs SDLC y análisis detallado por característica. |
| E7 |  | X |  | No define estilos arquitectónicos (por ejemplo, layered , microservicios, pipes & filters ). Se enfoca en describir la arquitectura existente de QCPs y en mostrar sus implicaciones, no en proponer estilos o patrones arquitectónicos formales. Tampoco clasifica los QCPs dentro de estilos clásicos de arquitectura de software. |
| E8 |  | X |  | No aborda patrones de diseño ni plantillas reutilizables. Aunque analiza características y propone un modelo de programación, no formula patrones arquitectónicos, tácticas, ni soluciones reutilizables. El estudio no genera artefactos prescriptivos, solo análisis e interpretación de impacto. |
| E9 | X |  |  | Identifica múltiples componentes estructurales clave: QPU, controladores, circuitos superconductores, entornos criogénicos, hardware clásico asociado, simuladores, compiladores, IDEs cloud , toolchains remotos, APIs , modeladores de circuitos, y la división entre software cuántico y clásico. Explica además cómo interactúan entre sí, cómo dependen del entorno físico y cómo cada componente limita o habilita características de la plataforma. |
| E10 |  | X |  | No presenta artefactos reutilizables, plantillas, lineamientos o estructuras propias de arquitecturas de referencia. El estudio es analítico, no prescriptivo. Aunque identifica QCP characteristics → QA impact → SDLC impact , no lo formaliza como un artefacto reutilizable ni estándar. |
| Estudio | S2: Towards a Distributed Quantum Computing Ecosystem |  |  |  |
| Elemento | ¿ El estudio describe el elemento? | Descripción |  |  |
|  | Si | No | Parcialmente |  |
| E1 |  | X |  | El estudio no define un objetivo arquitectónico formal; su propósito no es establecer metas arquitectónicas ni especificar una arquitectura objetivo, sino describir el surgimiento de un ecosistema de computación cuántica distribuida , sus componentes, capacidades, limitaciones y retos. El enfoque es analítico y prospectivo: traza cómo podría evolucionar el ecosistema, pero no declara objetivos arquitectónicos normativos. |
| E2 | X |  |  | Presenta un contexto extremadamente claro y amplio: introduce el concepto de Quantum Internet , la necesidad de enlaces cuánticos y clásicos híbridos, la visión de nodos distribuidos interconectados, los requisitos de sincronización cuántica, limitaciones físicas (fidelidad de entrelazamiento, pérdidas en fibra, repetidores cuánticos), y componentes de red (transductores, estaciones intermedias, QPUs remotas). También contextualiza modelos de comunicación como teledata y telegate . |
| E3 |  |  | X | El estudio propone capas y abstracciones lógicas (capa física, capa de enlace, capa de red, capa de aplicación cuántica), y describe funciones asociadas a cada una. Sin embargo, no las formaliza como niveles de abstracción en el sentido de una arquitectura de referencia completa. Las capas funcionan como un marco conceptual derivado de la infraestructura, pero no están organizadas como vistas formales, artefactos o modelos arquitectónicos estandarizados. |
| E4 |  |  | X | Emplea terminología técnica consistente y avanzada: qubits distribuidos, entrelazamiento, teledata , telegate , remote CNOT, Bell pairs , fidelity constraints , quantum repeater chains , classical control plane, transducers , hybrid photonic links . Sin embargo, no establece un glosario formal , ni normaliza términos, ni define taxonomías terminológicas propias de un estándar. La terminología es rica y correcta, pero no formalizada. |
| E5 | X |  |  | Presenta estructuras arquitectónicas claras , incluyendo: (i) modelo funcional del Quantum Internet, ( ii ) distribución de responsabilidades entre los nodos, ( iii ) roles de estaciones intermedias, ( iv ) composición de enlaces cuánticos y clásicos, (v) servicios de red como distribución de entrelazamiento, CNOT remoto, teleporte de estados y datos, (vi) organización en capas. Describe explícitamente componentes y flujos funcionales , constituyendo una arquitectura conceptual del ecosistema distribuido. |
| E6 | X |  |  | Discute atributos de calidad de manera implícita pero profunda: latencia en teleporte y distribución de entrelazamiento; fiabilidad del enlace y fidelidad de Bell pairs ; escalabilidad en redes extendidas; resiliencia ante pérdidas y decoherencia; overhead de comunicación por protocolos de corrección y confirmación; disponibilidad condicionada por la fragilidad física de los enlaces; rendimiento dependiente del ancho de banda cuántico-clásico. Estos QAs están ligados directamente a las propiedades físicas del ecosistema. |
| E7 |  | X |  | No propone estilos arquitectónicos . Aunque describe la arquitectura funcional del ecosistema, no la clasifica como estilos conocidos (por ejemplo, layered , event-driven , service-oriented , data- centric ). Tampoco sugiere patrones de estilo para construir sistemas distribuidos cuánticos; se limita a describir cómo se comportaría el ecosistema de red. |
| E8 |  | X |  | No aborda patrones de diseño ni estructuras reutilizables. No define plantillas para arquitecturas distribuidas cuánticas, ni propone patrones de comunicación, sincronización, enrutamiento o gestión de estados cuánticos. Su aporte es conceptual, no prescriptivo. |
| E9 | X |  |  | Identifica múltiples componentes estructurales esenciales: QPUs en nodos remotos, enlaces cuánticos, transductores cuántico-clásicos, repetidores cuánticos, controladores clásicos, protocolos de teleporte, mecanismos de entrelazamiento distribuido, operaciones remotas como remote CNOT , servicios de red cuántica, estaciones de interconexión, nodos terminales y nodos intermedios. Todos estos elementos se describen de forma explícita y funcional. |
| E10 |  | X |  | No define elementos reutilizables como plantillas, lineamientos, artefactos o estructuras propias de arquitecturas de referencia. No presenta un modelo prescriptivo ni un framework reutilizable. Se limita a describir el funcionamiento del ecosistema propuesto y sus retos, sin formalizar artefactos que puedan emplearse para diseño arquitectónico. |
| Estudio | S3: Quantum Computing Platforms: Assessing the Impact on Quality Attributes and SDLC Activities |  |  |  |
| Elemento | ¿ El estudio describe el elemento? | Descripción |  |  |
|  | Si | No | Parcialmente |  |
| E1 |  | X |  | El estudio no define un objetivo arquitectónico formal; no establece metas estructurales ni una arquitectura objetivo para un sistema concreto. Su propósito es analítico , enfocándose en evaluar cómo las características inherentes a los QCP (entorno físico, qubits , gates, toolchain , acceso remoto, bajos niveles de abstracción) influyen en los atributos de calidad y en las actividades del SDLC. Describe comportamiento, limitaciones y propiedades, pero no declara objetivos arquitectónicos prescriptivos. |
| E2 | X |  |  | Define un contexto muy completo: describe el arreglo arquitectónico general del QCP , desde la capa física ( qubits , dispositivos superconductores, operaciones de control) hasta la capa lógica (gates, circuitos), pasando por el toolchain (compiladores, simuladores, APIs cloud ) y la interacción híbrida QPU–CPU. Analiza cómo se accede al hardware, cómo opera el proceso de ejecución, y qué roles cumplen simuladores e interfaces remotas. Presenta el QCP como una pila tecnológica coherente. |
| E3 |  |  | X | Presenta capas conceptuales (capa física → capa lógica → QPU access layer → toolchain clásico), y distingue abstracciones de programación (nivel de puerta, circuitos, instrucciones de control). Sin embargo, no formaliza dichas capas como niveles de abstracción propios de una arquitectura de referencia; las menciona para explicar el funcionamiento interno de la plataforma, no como vistas arquitectónicas formales ni modelos estructurados. |
| E4 |  |  | X | Emplea terminología técnica especializada ( qubit , gates, superposición, decoherencia, entanglement , circuit depth , fidelity , NISQ constraints , toolchain , simuladores). La terminología es precisa y adecuada, pero carece de un glosario formal y no normaliza vocabulario. Los conceptos aparecen explicados en el flujo argumental, pero sin estandarización terminológica. |
| E5 | X |  |  | Describe estructuras arquitectónicas del QCP : QPU, capa física, controlador clásico, toolchain cloud , simuladores, interfaces cuántico–clásicas, compiladores, generadores de circuitos, y el modelo de programación basado en gates. Explica cómo estas estructuras se relacionan, cómo se ejecutan circuitos, cómo se produce el flujo híbrido, y cómo la arquitectura influye en atributos como disponibilidad, fiabilidad y testabilidad . |
| E6 | X |  |  | Discute múltiples atributos de calidad en profundidad: performance (latencias, colas remotas, tiempo de ejecución cuántico), fiabilidad (errores de medición, decoherencia), disponibilidad (dependencia del acceso cloud y limitaciones del hardware), testabilidad (imposibilidad de inspeccionar estados cuánticos), seguridad (vulnerabilidad a ruido y accesos remotos), mantenibilidad (restricciones del nivel de abstracción), portabilidad (dependencia del hardware) y escalabilidad (limitaciones del número de qubits y capacidad del simulador). También relaciona QAs con actividades del SDLC. |
| E7 |  | X |  | No propone estilos arquitectónicos . Aunque muestra cómo está organizada la plataforma (capas físicas y lógicas), no los clasifica como estilos arquitectónicos (no define layered , pipe-and- filter , event-driven , etc.). El estudio describe la arquitectura funcional del QCP, pero no introduce estilos formales. |
| E8 |  | X |  | No aborda patrones de diseño ni estructuras reutilizables. No propone plantillas, soluciones patrón, patrones arquitectónicos ni tácticas. Se enfoca en analizar, no en prescribir. |
| E9 | X |  |  | Identifica claramente componentes estructurales esenciales : QPU, dispositivo físico, gates, controladores clásicos, simuladores, compiladores, APIs cloud , herramientas de mapeo, circuit builders , modelos de programación gate- based , y la interfaz CPU–QPU. También describe cómo se encadenan estos componentes durante la ejecución. |
| E10 |  | X |  | No define artefactos reutilizables: no presenta plantillas arquitectónicas, lineamientos, referencias estructurales, blueprints , ni marcos de diseño que puedan aplicarse a futuros sistemas. Su salida es analítica (impacto en QAs y SDLC), no metodológica o prescriptiva. |
| Estudio | S4: A Serverless Cloud Integration for Quantum Computing |  |  |  |
| Elemento | ¿ El estudio describe el elemento? | Descripción |  |  |
|  | Si | No | Parcialmente |  |
| E1 |  | X |  | El artículo no define un objetivo arquitectónico formal; no establece metas, restricciones ni criterios arquitectónicos. Su foco es presentar un MVP funcional que integra una aplicación web clásica con un proveedor cuántico mediante un modelo serverless . La arquitectura se justifica por razones prácticas (despliegue rápido, escalabilidad automática), no por objetivos arquitectónicos formales ni decisiones basadas en atributos de calidad explícitos. |
| E2 | X |  |  | El contexto está claramente definido: describe la necesidad de integrar un proveedor cuántico vía API , la separación entre componentes clásicos y cuánticos, la infraestructura en la nube, el uso de FaaS, colas/ event streams , contenedores y APIs de IBM Quantum. Se detalla cómo los desarrolladores interactúan con la plataforma, cómo se ejecutan los circuitos y cómo el backend serverless facilita el escalamiento sin gestionar servidores. |
| E3 |  |  | X | El artículo describe varias capas funcionales — frontend , backend 1, backend 2, funciones serverless , y canales de mensajería/eventos— pero no las formaliza como niveles de abstracción de una arquitectura de referencia . No define vistas arquitectónicas, roles, responsabilidades ni relaciones formales entre capas. Lo que presenta son componentes y su interacción, no un modelo de capas formalizado. |
| E4 |  |  | X | Usa terminología técnica coherente (FaaS, Kafka, Cloud Functions , Qiskit , event streams , containers , API calls , orchestration ), pero no incluye glosario ni normalización terminológica. Algunos términos dependen del proveedor cloud o del SDK cuántico utilizado. La terminología es adecuada, pero no estandarizada. |
| E5 | X |  |  | Presenta estructuras arquitectónicas: frontend , backend 1, backend 2, colas, componentes serverless , integración con QPU vía API. |
| E6 | X |  |  | Describe atributos de calidad implícitos: escalabilidad, modularidad, desacoplamiento, accesibilidad, disponibilidad y rendimiento del sistema. |
| E7 |  | X |  | No define estilos arquitectónicos formales (por ejemplo,, event-driven , microservicios), aunque los usa implícitamente. |
| E8 |  | X |  | No propone patrones de diseño ni estructuras reutilizables. |
| E9 | X |  |  | Identifica componentes de la arquitectura : UI, backend 1, backend 2, Kafka/event streams, cloud functions, Qiskit , IBM Quantum backend. |
| E10 |  | X |  | No define plantillas, lineamientos ni artefactos reutilizables propios de una arquitectura de referencia; solo describe el MVP. |
| Estudio | S5: Software Architecture for Quantum Computing Systems – A Systematic Review |  |  |  |
| Elemento | ¿ El estudio describe el elemento? | Descripción |  |  |
|  | Si | No | Parcialmente |  |
| E1 |  | X |  | El estudio no define un objetivo arquitectónico formal porque no propone una arquitectura específica; al ser una revisión sistemática , su objetivo es sintetizar evidencia sobre procesos, notaciones, patrones, herramientas y desafíos, no diseñar una arquitectura concreta. No presenta un objetivo orientado a un sistema particular ni a un caso de uso arquitectónico. |
| E2 | X |  |  | Ofrece un contexto extremadamente completo : distingue claramente hardware cuántico, software cuántico y arquitectura de software cuántica; explica la relación entre qubits , qugates , compilación, modelos de co -diseño, interacción clásico–cuántico, ciclo de vida de ingeniería de software cuántico y papel de la arquitectura como puente entre diseño y código. Presenta además el panorama del campo, su madurez, y la estructura de procesos SE adaptados. |
| E3 |  |  | X | Identifica explícitamente abstracciones y vistas arquitectónicas (4+1, modelos de componentes y conectores, model-driven architecture , UML), pero no define niveles de abstracción propios de una arquitectura de referencia , sino que reporta cómo diferentes estudios aplican o adaptan abstracciones clásicas. Reconoce la necesidad de nuevos niveles orientados a co -diseño cuántico, pero no los formaliza. |
| E4 |  |  | X | Usa terminología técnica rigurosa y consistente: qubits , qugates , superposition , entanglement , QSA (Quantum Software Architecture ), ASRs , ADLs , UML, MDE, co-design , traceability , model transformation . Sin embargo, no presenta un glosario formal , ni estandariza terminología; describe variaciones terminológicas en la literatura, lo cual evidencia la ausencia de normalización. |
| E5 | X |  |  | Resume y describe múltiples estructuras arquitectónicas reportadas en la literatura: arquitecturas para QKD, arquitecturas híbridas clásico–cuántico, pipelines de compilación cuántica, arquitecturas basadas en patrones pipe-and- filter y component -and- connector , modelos para co -diseño, vistas UML, transformaciones MDE y marcos de arquitectura para simulación. Aunque no diseña una propia, la revisión sistematiza estructuras reales de los 34 estudios primarios. |
| E6 | X |  |  | Analiza ampliamente atributos de calidad para sistemas cuánticos : desempeño, escalabilidad, seguridad cuántica, testabilidad , fiabilidad, mantenibilidad, trazabilidad, consistencia entre modelos y código, portabilidad entre plataformas cuánticas, disponibilidad y precisión en ejecución. También identifica factores que degradan QAs : decoherencia, ruido, inestabilidad de hardware, dependencia de simuladores. |
| E7 |  | X |  | No propone estilos arquitectónicos propios (por ejemplo, microservicios, event-driven , layered style ). Aunque identifica patrones recurrentes (pipe-and- filter , connector-centric , co-design pipeline), no se formaliza ningún estilo arquitectónico cuántico . Reporta que la comunidad aún no ha definido estilos específicos y que la mayoría de trabajos usan estilos clásicos sin adaptación formal. |
| E8 |  | X |  | No presenta patrones de diseño formales ( design patterns ) ni catálogos reutilizables. Sí reporta que algunos estudios utilizan patrones informales (pipe- filter , C&C, quantum- classic split ), pero no los formaliza como patrones de diseño arquitectónico con nombre, problema, solución y consecuencias. El artículo destaca explícitamente que esta área está en madurez baja. |
| E9 | X |  |  | Describe con detalle componentes arquitectónicos comunes en sistemas cuánticos : QPU, qubits , qugates , compiladores, herramientas de simulación, módulos de pre/post-procesamiento, conectores clásico–cuántico, toolchains , modelos MDE, capas de abstracción UML, módulos para co -diseño, pipelines de validación, nodos de red cuántica, motores de optimización. Sintetiza 34 estudios que modelan estructuras reales. |
| E10 |  | X |  | No define elementos reutilizables como plantillas, lineamientos, artefactos formales, modelos de referencia o frameworks prescriptivos. Aunque identifica necesidades para crear reference architectures y sugiere su urgencia, no presenta plantillas concretas , solo recomendaciones. La SLR concluye que actualmente no existe un cuerpo de artefactos reutilizables para QSA. |
| Estudio | S6: Classical to Quantum Software Migration Journey Begins: A Conceptual Readiness Model |  |  |  |
| Elemento | ¿ El estudio describe el elemento? | Descripción |  |  |
|  | Si | No | Parcialmente |  |
| E1 |  | X |  | El artículo no define un objetivo arquitectónico de un sistema, porque no propone una arquitectura técnica ni describe un sistema de software cuántico concreto. Su propósito es presentar la necesidad de un modelo de preparación ( readiness model ) para la migración hacia ingeniería de software cuántico, no definir metas arquitectónicas. |
| E2 | X |  |  | Define un contexto amplio y detallado : describe la transición desde el desarrollo clásico hacia el cuántico, la complejidad actual del ecosistema híbrido, la necesidad de integrar programas clásicos y cuánticos, los desafíos organizacionales, las carencias de estándares actuales, y el rol del código híbrido en entornos de ejecución. Además, expone cómo las organizaciones requieren nuevos lineamientos, métricas, artefactos, y prácticas para gestionar la migración. |
| E3 |  |  | X | Aunque no propone niveles de abstracción formales como los de una arquitectura de referencia, describe elementos conceptuales que actúan como capas : proceso clásico → proceso cuántico → integración híbrida → readiness model → prácticas → evaluaciones. Estas capas conceptuales se articulan como un marco de transición, pero no se formalizan como niveles arquitectónicos , sino como pasos metodológicos. |
| E4 |  |  | X | Utiliza terminología técnica clara ( readiness model , process areas , enablers , challenging factors , CMMI, SPICE, ISO 9001, QSERM), pero no establece un glosario formal ni normaliza términos . Sin embargo, sí ofrece descripciones conceptuales profundas de los elementos del modelo, motivaciones, definiciones de componentes y fundamentos teóricos. |
| E5 | X |  |  | Propone estructuras conceptuales robustas: arquitectura del QSERM, componentes del modelo ( readiness level , process areas , challenges , enablers ), interrelaciones entre ellos, estructura de niveles, flujos de mejora, mapping entre factores y prácticas, y cómo se integran los modelos clásicos (CMMI, SPICE, ISO). Aunque no es una arquitectura de software, sí es una arquitectura metodológica formalizada , comparable a frameworks arquitectónicos organizacionales. |
| E6 | X |  |  | Discute atributos de calidad aplicados al proceso: madurez, disciplina, robustez del proceso, escalabilidad organizacional, consistencia, riesgo, calidad organizacional, trazabilidad entre prácticas y factores, integrabilidad del proceso clásico con el cuántico, mantenimiento de procesos híbridos, y calidad del desarrollo cuántico emergente. No evalúa atributos técnicos del software, pero sí atributos de calidad del proceso y capacidad organizacional , que son esenciales para la transición. |
| E7 |  | X |  | No propone estilos arquitectónicos de software (como layered , microservices , event-driven ). Se enfoca en modelos de proceso y frameworks organizacionales, no en estilos de arquitectura técnica. |
| E8 |  | X |  | No aborda patrones de diseño arquitectónico ni patrones de software . Aunque presenta prácticas, procesos y componentes del modelo QSERM, no introduce patrones reutilizables de diseño, ni estructuras como blueprints arquitectónicos. |
| E9 | X |  |  | Identifica componentes fundamentales del modelo : readiness levels , process areas , challenges , enablers , guidelines , assessment tools , integración con estándares (CMMI, SPICE, ISO), y estructura conceptual en capas. Aunque no son componentes de software, sí son componentes estructurales del marco arquitectónico metodológico . |
| E10 |  | X |  | No define artefactos reutilizables (plantillas, lineamientos arquitectónicos, referencias técnicas), ya que el modelo aún está en construcción. Describe que el objetivo futuro es crear tales artefactos, pero no los proporciona en el artículo , ni establece formatos para lineamientos, plantillas ni estructuras de referencia. |
| Estudio | S7: Software Architecture Challenges in Integrating Hybrid Classical–Quantum Systems |  |  |  |
| Elemento | ¿ El estudio describe el elemento? | Descripción |  |  |
|  | Si | No | Parcialmente |  |
| E1 |  | X |  | El artículo no establece un objetivo arquitectónico formal. No define metas arquitectónicas específicas para un sistema, sino que describe desafíos generales, limitaciones técnicas y direcciones de diseño para integrar sistemas híbridos clásico–cuánticos. Se enfoca en analizar problemas estructurales, no en modelar una arquitectura con objetivos declarados. |
| E2 | X |  |  | El contexto está claramente definido: describe el ciclo de vida de sistemas híbridos, los requisitos para integrar algoritmos cuánticos en aplicaciones clásicas, la naturaleza del procesamiento batch cuántico, la necesidad de colas, programación asíncrona, coordinación entre hardware y software, interacción entre QASM, controladores y hardware, además de las dificultades derivadas de NISQ. El artículo sitúa explícitamente al lector en el ecosistema actual de integración híbrida y sus restricciones. |
| E3 |  |  | X | Aunque no formaliza niveles de abstracción como una arquitectura de referencia, sí presenta representaciones conceptuales (SDLC híbrido, modelo de computación cuántica, flujos de ejecución, interfaces clave) que funcionan como capas lógicas: algoritmos → circuitos → QASM → pulsos → hardware → batch scheduler → sistema clásico. Estas capas son descritas, pero no se estructuran como niveles formales , sino como un pipeline explicativo. |
| E4 |  |  | X | El artículo emplea terminología técnica detallada : QASM, OpenPulse , batch quantum processing, Slurm , Cirq, Qiskit , scheduling, backend configuration, quantum volume, NISQ, control systems, asynchronous communication. Sin embargo, no ofrece glosario ni normalización ; usa conceptos avanzados que deben ser interpretados desde el dominio. |
| E5 |  |  |  | Presenta múltiples estructuras arquitectónicas y componentes funcionales : el pipeline clásico–cuántico, modelo de ejecución batch , arquitectura del SDLC híbrido, diagramas de componentes (usuario → programa clásico → componente cuántico → QASM → pulses → hardware), colas de procesamiento, orquestación clásica ( Kubernetes ) extendida hacia lo cuántico, y separación entre lógica de aplicación, diseño del circuito, backend selection y ejecución. Describe explícitamente modelos estructurales usados hoy en integración híbrida. |
| E6 | X |  |  | Identifica atributos de calidad afectados por la integración híbrida: latencia extrema en ejecución cuántica ( batch scheduling ), disponibilidad limitada del hardware, necesidad de asincronía, seguridad en entornos multi- tenant , privacidad al ejecutar cargas en hardware compartido, robustez operativa, modularidad entre lógica cuántica y backend , mantenibilidad al separar diseño del circuito del proveedor de hardware, y eficiencia del uso de recursos escasos. Detalla cómo estos atributos influyen en decisiones arquitectónicas. |
| E7 |  | X |  | No propone estilos arquitectónicos formales. No define patrones como layered, event-driven, microservices o pipe-and-filter. Aunque describe que la ejecución batch provoca arquitecturas orientadas a colas y procesos asíncronos, no se formaliza como estilo arquitectónico. |
| E8 |  | X |  | No presenta patrones de diseño ni estructuras reutilizables. Aunque menciona buenas prácticas (separar la lógica del circuito de la configuración del backend , usar comunicación asíncrona, incorporar schedulers especializados), no las formaliza como patrones de diseño arquitectónico ni como plantillas reutilizables. |
| E9 | X |  |  | Identifica y describe de forma clara los componentes estructurales clave de un sistema híbrido: programa clásico, componente cuántico, toolkit (Cirq/ Qiskit ), generador de circuitos, QASM, OpenPulse , control system del hardware, quantum computer , batch scheduler ( Slurm ), colas, orquestación ( Kubernetes ), pipelines SDLC híbridos. Explica cómo se comunican y dónde se encuentran los cuellos de botella arquitectónicos. |
| E10 |  | X |  | No define artefactos reutilizables como plantillas, lineamientos, documentos de referencia o elementos normativos. Su contribución es analítica; describe desafíos y enfoques posibles, pero no produce artefactos estructurados ni mecanismos reutilizables propios de arquitecturas de referencia . |
| Estudio | S8: Architecture Decisions in Quantum Software Systems: An Empirical Study on Stack Exchange and GitHub |  |  |  |
| Elemento | ¿ El estudio describe el elemento? | Descripción |  |  |
|  | Si | No | Parcialmente |  |
| E1 |  | X |  | El estudio no define un objetivo arquitectónico formal. Su propósito es analizar empíricamente cómo los desarrolladores describen, discuten y toman decisiones arquitectónicas al construir software cuántico, pero no establece una arquitectura ni un objetivo estructural para un sistema específico. No propone metas arquitectónicas explícitas ni criterios formales de diseño. |
| E2 | X |  |  | Define un contexto extremadamente rico y completo : explica qué son los sistemas cuánticos, qué implica desarrollar software cuántico, cómo opera el SDLC cuántico, cómo interactúan desarrolladores en repositorios sociales, qué tipos de herramientas utilizan, qué dominios aplican, y cómo se relacionan decisiones, lenguajes, frameworks , y desafíos del ecosistema cuántico actual. Construye un marco conceptual que contextualiza plenamente el análisis. |
| E3 |  |  | X | No presenta niveles de abstracción formales como los de una arquitectura de referencia, pero sí identifica capas conceptuales de la actividad arquitectónica : expresiones lingüísticas, tipos de decisiones, categorías de dominio, atributos de calidad y limitaciones. Representa múltiples niveles de razonamiento arquitectónico (lingüístico, técnico, organizacional), pero sin formalizarlos como vistas o niveles arquitectónicos estandarizados . |
| E4 |  |  | X | Usa terminología técnica detallada ( ADs , QSA, QSE, implementation decision , technology decision , linguistic patterns , maintainability , performance, QKD, quantum frameworks , etc.), pero no provee glosario ni normaliza términos del dominio cuántico-arquitectónico. La terminología es rica, rigurosa y coherente, pero no estandarizada , reflejando la diversidad de vocabularios en repositorios de la comunidad. |
| E5 | X |  |  | Describe estructuras arquitectónicas reales extraídas de 151 issues y 43 posts : patrones de decisión, componentes modulares, capas clásicas–cuánticas, decisiones sobre toolchains , frameworks de programación, compilers , integración, descomposición, concurrencia, despliegue, servicios, patrones pub-sub/ observer , modularidad, APIs , partición entre lógica y backend . Aunque no propone una arquitectura, documenta estructuras que los desarrolladores realmente usan en proyectos cuánticos. |
| E6 | X |  |  | Analiza de manera exhaustiva los atributos de calidad considerados al tomar decisiones arquitectónicas : mantenibilidad, performance, compatibilidad, complejidad, usabilidad, consistencia, flexibilidad, seguridad, interoperabilidad, escalabilidad, portabilidad, disponibilidad, etc. Presenta porcentajes, clasificaciones y ejemplos reales de cómo los desarrolladores argumentan decisiones con base en QAs . |
| E7 |  | X |  | No define estilos arquitectónicos . Aunque algunos issues discuten patrones (pub-sub, observer ) o señalan estructuras utilizadas, el estudio no identifica ni propone estilos formales (microservicios, pipes-and- filters , event-driven , layered ). Los patrones detectados son fragmentarios y emergen del análisis cualitativo, pero no se presentan como estilos completos. |
| E8 |  | X |  | No presenta patrones de diseño arquitectónico reutilizables . Documenta cómo los desarrolladores discuten soluciones, pero no formaliza ni define patrones de diseño cuántico (catalogados, con estructura problema–solución–consecuencias). El estudio muestra que existe una falta significativa de patrones reutilizables en el ecosistema cuántico , lo cual es precisamente una de sus conclusiones. |
| E9 | X |  |  | Identifica un conjunto enorme de componentes arquitectónicos reales : frameworks cuánticos, toolchains , compiladores, módulos de descomposición, servicios, APIs , componentes de integración clásico–cuántico, módulos de datos, partes de toolkits como Qiskit , Cirq, PennyLane, Mitiq, Covalent , Q#, OpenQASM , optimizadores, backends , pipelines, módulos de simulación. Mapea cómo estos componentes se mencionan, discuten y ensamblan en proyectos reales. |
| E10 |  | X |  | No define artefactos reutilizables (plantillas, lineamientos, RA, checklists ). Aunque provee guidelines de alto nivel en las conclusiones, el estudio no propone artefactos formales , ni generadores de decisiones, ni plantillas de documentación AD. Su contribución es analítica, no de creación de elementos reutilizables. |
| Estudio | S9: Patterns for Quantum Software Development |  |  |  |
| Elemento | ¿ El estudio describe el elemento? | Descripción |  |  |
|  | Si | No | Parcialmente |  |
| E1 |  | X |  | El artículo no define un objetivo arquitectónico ni describe metas arquitectónicas para un sistema en particular. Su aporte es la creación de patrones de diseño y modularidad para quantum software, no la definición de una arquitectura. No contiene visión, metas, restricciones ni objetivos arquitectónicos formales. |
| E2 | X |  |  | Ofrece un contexto rico, profundo y extremadamente bien estructurado : explica la naturaleza híbrida de los algoritmos cuánticos, las tensiones entre partes clásicas y cuánticas, la dificultad de integrar módulos cuánticos en aplicaciones híbridas, la falta de mejores prácticas, la estructura del quantum pattern language , los retos de reusabilidad, modularización , vendor - lock -in, y la relación entre SDKs cuánticos, circuitos, toolchains e integración. Contexto 100% claro y completo. |
| E3 |  |  | X | No propone niveles de abstracción arquitectónicos formales, pero sí establece jerarquías conceptuales y modularidad estructurada : QUANTUM MODULE → TEMPLATE → HYBRID MODULE → INTERFACE → CIRCUIT TRANSLATOR. Esto crea un pseudo- nivelamiento conceptual que se comporta como “capas” dentro del lenguaje de patrones, pero no se define como niveles arquitectónicos , sino como taxonomía de patrones. |
| E4 | X |  |  | Usa terminología especializada bien definida dentro del patrón language : QUANTUM MODULE, HYBRID MODULE, QAOA, Shor, VQA, Qiskit , Braket , OpenQASM , circuit template , oracle , state preparation , transpilers , plugin contracts , pattern forces , solution sketch. Además, el artículo introduce nombres formales de patrones , con definiciones precisas, estructuradas y normalizadas conforme al lenguaje de patrones. Aunque no es un glosario, sí funciona como terminología formal estructurada , por lo que aquí corresponde Sí . |
| E5 | X |  |  | Presenta estructuras arquitectónicas y de diseño explícitas : módulos cuánticos generativos, plantillas de circuitos, módulos híbridos, interfaces clásico–cuánticas y traductores de circuitos. Cada patrón incluye estructura, relaciones, componentes, entradas, salidas y flujos de interacción . Además, incluye diagramas que describen flujos estructurales, encapsulamiento, composición modular y relaciones entre patrones. |
| E6 | X |  |  | Discute múltiples atributos de calidad clave : reusabilidad, modularidad, mantenibilidad, interoperabilidad entre SDKs , independencia de hardware ( vendor lock -in), flexibilidad del pipeline cuántico, separación de responsabilidades, claridad de interfaces, integrabilidad en aplicaciones híbridas, y extensibilidad mediante templates . Los patrones buscan explícitamente mejorar atributos de calidad del software cuántico . |
| E7 |  | X |  | No define estilos arquitectónicos (ej., microservicios, event-driven , layered ). Aunque usa analogías a principios clásicos de modularización , el artículo no establece estilos arquitectónicos , sino patrones de diseño específicos. Los patrones no son estilos completos sino soluciones localizadas. |
| E8 | X |  |  | Sí describe patrones de diseño . Este es precisamente el núcleo del artículo. Presenta cinco patrones formales: QUANTUM MODULE, QUANTUM MODULE TEMPLATE, HYBRID MODULE, CLASSICAL–QUANTUM INTERFACE , QUANTUM CIRCUIT TRANSLATOR. Cada patrón incluye Problema, Contexto, Fuerzas, Solución, Resultado, Usos conocidos y Patrones relacionados. Este es el artículo con mayor aporte directo a E8. |
| E9 | X |  |  | Identifica múltiples componentes estructurales reales : módulos generadores de circuitos, módulos híbridos con partes clásicas, interfaces de dominio, oráculos, state preparations , templates , circuit translators , toolkits Qiskit / Braket , pipelines híbridos, transforms , ancillas , qubits , ansätze de QAOA, oracles de Grover, plugin contracts . Expone cómo estos componentes se organizan dentro del patrón language . |
| E10 | X |  |  | El artículo sí define artefactos reutilizables : los patrones mismos son artefactos reutilizables formalizados. Cada patrón funciona como una plantilla de solución que puede ser aplicada en diferentes proyectos. Además, el artículo integra estos patrones al Quantum Computing Pattern Language , que es un metaartefacto estructurado. Todos estos se consideran elementos reutilizables dentro del ámbito metodológico. |
| Elemento | S10: Design of Classical–Quantum Systems with UML |  |  |  |
| Elemento | ¿ El estudio describe el elemento? | Descripción |  |  |
|  | Si | No | Parcialmente |  |
| E1 |  | X |  | El artículo no define un objetivo arquitectónico formal para un sistema particular. Presenta un método para diseñar sistemas híbridos utilizando UML, pero no especifica metas, restricciones o un objetivo arquitectónico explícito. El foco está en proponer una técnica de modelado, no en establecer la finalidad arquitectónica de un sistema concreto. |
| E2 | X |  |  | El artículo define un contexto claro y completo: describe la interacción clásica–cuántica, cómo los sistemas híbridos requieren modelado explícito de componentes cuánticos, la carencia de herramientas de ingeniería adecuadas, el rol de UML y su extensión, la relación entre modelos, diagramas y ejecución en hardware cuántico. Establece el entorno problemático y el propósito del enfoque. |
| E3 |  |  | X | El artículo no formaliza niveles de abstracción arquitectónicos (como niveles de una arquitectura de referencia), pero sí introduce capas de modelado : modelos estructurales, comportamentales, diagramas UML extendidos para circuitos cuánticos, modelos híbridos y mapeo entre diseño y componentes cuánticos. Presenta un multi-nivel conceptual de modelado, pero no un esquema formal de abstracciones arquitectónicas . |
| E4 |  |  | X | Usa terminología técnica clara y consistente (quantum component , hybrid system , UML class diagram , activity diagram , sequence diagram , logical architecture , quantum operations , gates, measurement , entanglement , UML extensions ), pero no presenta un glosario formal ni normaliza todos los términos del dominio. No obstante, explica los conceptos pertinentes a los diagramas propuestos. |
| E5 | X |  |  | Presenta estructuras arquitectónicas en forma de modelos: arquitectura de componentes híbridos, interacción entre módulos clásicos y cuánticos, diagramas UML extendidos para representar operaciones cuánticas, secuencias híbridas, separación entre lógica clásica, circuitos cuánticos y su ejecución. El artículo introduce una estructura metodológica y un conjunto de modelos que reflejan arquitectura híbrida . |
| E6 | X |  |  | Discute atributos de calidad relacionados con diseño y arquitectura: claridad, trazabilidad del modelo, mantenibilidad del sistema híbrido, capacidad de comunicación entre equipos, modularidad a través de UML, precisión en la representación de la lógica cuántica y reducción de errores al modelar. No aborda atributos como latencia o seguridad, pero sí los atributos de calidad propios del diseño e ingeniería. |
| E7 |  | X |  | No describe estilos arquitectónicos formales ( layered , event-driven , etc.). Presenta diagramas y estructuras conceptuales, pero no los clasifica como estilos arquitectónicos. El enfoque se mantiene en modelado UML, no en estilos de arquitectura. |
| E8 |  | X |  | Aunque propone extensiones UML y ejemplos de modelado, no define patrones de diseño como tales . No hay patrones formales ni catálogos reutilizables. Presenta un método y notación, pero no patrones arquitectónicos reutilizables. |
| E9 | X |  |  | Identifica componentes estructurales de sistemas híbridos: módulos clásicos, módulos cuánticos, interfaces clásico–cuánticas, circuitos, operaciones cuánticas, flujos de ejecución híbrida, elementos UML extendidos, componentes funcionales y de control. La propuesta muestra cómo estos componentes se relacionan en los modelos UML. |
| E10 | X |  |  | El artículo sí proporciona artefactos reutilizables: extensiones UML , estereotipos, notaciones y diagramas especializados para representar componentes cuánticos dentro de modelos clásicos. Estos artefactos funcionan como elementos reutilizables para futuros proyectos de modelado de sistemas híbridos. |
| Elemento | S11: Selection of Quantum Computing Architecture Using a Decision Tree Approach |  |  |  |
| Elemento | ¿ El estudio describe el elemento? | Descripción |  |  |
|  | Si | No | Parcialmente |  |
| E1 |  | X |  | El artículo no define un objetivo arquitectónico formal . No presenta una arquitectura objetivo ni metas arquitectónicas que guíen la construcción de un sistema. Su propósito es comparar y describir arquitecturas existentes ( annealing , simulación, universal) y finalmente construir un árbol de decisión para seleccionar una arquitectura, pero sin establecer criterios arquitectónicos formales (restricciones, atributos meta, variantes permitidas, escenarios arquitectónicos, etc.). |
| E2 | X |  |  | El artículo desarrolla un contexto extremadamente completo : presenta la motivación industrial para usar computación cuántica, define con precisión los tres modelos ( annealing , simulación, universal), describe sus características técnicas, los frameworks más usados (Ocean, QIR, QASM, QPOL, Q#), introduce conceptos físicos (Hamiltonianos, adiabatic evolution , trapped -ion, superconducting qubits ), y relaciona cada modelo con problemas reales (optimización, simulaciones atómicas, algoritmos universales). Además, contextualiza la necesidad de seleccionar la arquitectura adecuada según el tipo de problema. |
| E3 |  |  | X | No establece niveles de abstracción arquitectónicos formales , pero sí presenta capas y flujos arquitectónicos dentro de cada modelo: (1) Annealing : capa de aplicación → mapeo del problema → Sampler API → QPU y CPUs , (2) Simulación: front-end → optimizador independiente (QIR) → optimizador dependiente (QASM) → hardware/simulador (QPOL), (3) Universal: arquitectura de pila para circuitos cuánticos (de Wecker & Svore ). Estas capas funcionan como niveles conceptuales, pero no están formalizadas como un stack arquitectónico normado . |
| E4 |  |  | X | Usa terminología técnica profunda ( annealing , BQM, QPU, sampler , QIR, QASM, QPOL, adiabatic quantum evolution , universal QC, trapped -ion simulators , Hamiltonian embedding ). Sin embargo, no incluye glosario , ni normaliza términos, ni establece equivalencias terminológicas entre frameworks o modelos. La terminología es rica, pero dispersa, adaptada a cada sección más que estandarizada. |
| E5 | X |  |  | El artículo presenta múltiples estructuras arquitectónicas formales : (1) Arquitectura annealing de D-Wave (Figura 2), con layers claramente definidos, APIs , BQM, Sampler y QPU; (2) Arquitectura de simulación basada en el pipeline QIR→QASM→QPOL (Figura 3); (3) Arquitectura gate- based de Wecker & Svore (Figura 4); (4) Arquitectura de aplicaciones web cuánticas en 3 capas (Figura 5), vinculando clientes, servidor clásico y backend cuántico; (5) Árbol de decisiones arquitectónicas (Figura 6), que es una estructura de decisión basada en flujo. Cada una tiene componentes, relaciones y flujos, constituyendo estructuras arquitectónicas completas , no simples diagramas. |
| E6 | X |  |  | Analiza atributos de calidad relevantes para seleccionar arquitectura, aunque no los llame explícitamente “ QAs ”: desempeño en optimización ( annealing ), flexibilidad y portabilidad (simuladores), capacidad universal y expresividad algorítmica (gate- based ), costos de ejecución , disponibilidad de hardware , dependencia de vendor , complejidad de integración , acoplamiento entre capas , necesidad de preprocesamiento y mapeo , uso de recursos clásicos vs cuánticos , y tiempos de preparación y colas de ejecución . La selección de arquitectura se fundamenta precisamente en estos atributos. |
| E7 |  | X |  | No propone estilos arquitectónicos formales ( layered style , microservices , SOA, EDA, C2, etc.). Aunque muestra arquitecturas que visualmente parecen en capas, no las clasifica ni define como estilos arquitectónicos, sino como ejemplos funcionales que ilustran el flujo de datos y el uso del hardware. |
| E8 |  | X |  | No establece patrones de diseño ni patrones arquitectónicos . Aunque presenta frameworks , pipelines y arquitecturas, no los formaliza como patrones reutilizables (no hay plantilla de problema–solución–consecuencias). El árbol de decisión tampoco se formaliza como patrón, sino como guía conceptual. Por lo tanto, no hay patrones reutilizables definidos. |
| E9 | X |  |  | Identifica componentes estructurales clave de múltiples arquitecturas cuánticas: BQM, QPU, Sampler API, CPUs , optimizadores (QIR/QASM), traductores a QPOL, circuitos, Hamiltonianos, trapped -ion systems , superconducting qubit systems , módulos front-end , módulos backend , middleware para integración cloud , servidores web, APIs cuánticas, compiladores, mapeadores y sistemas de grafo. También describe cómo estos componentes se interconectan. |
| E10 |  | X |  | Aunque presenta un árbol de decisión, no constituye un artefacto reutilizable formal . No hay lineamientos estandarizados, plantillas arquitectónicas reutilizables, documentación prescriptiva, ni estructuras formales para guiar la construcción de arquitecturas cuánticas. El árbol sirve como referencia conceptual, pero no como artefacto metodológico reutilizable. |
| Estudio | S12: Hybrid Quantum Algorithms and Quantum Software Development Frameworks |  |  |  |
| Elemento | ¿ El estudio describe el elemento? | Descripción |  |  |
|  | Si | No | Parcialmente |  |
| E1 |  | X |  | El artículo no define un objetivo arquitectónico formal . No plantea metas arquitectónicas, restricciones, drivers, ni una arquitectura objetivo. Su propósito es revisar VQAs , su trenabilidad , ventajas/limitaciones, y evaluar frameworks de software cuántico , no diseñar ni justificar una arquitectura específica. No establece elementos como escenarios arquitectónicos, decisiones, ni criterios de trade -off. |
| E2 | X |  |  | Presenta un contexto profundo y multidimensional , incluyendo: (i) la motivación NISQ ( qubit count , decoherencia, circuit depth , noise processes ); ( ii ) el surgimiento de los algoritmos híbridos; ( iii ) la relación entre PQCs , optimizadores clásicos, mitigación de errores, barren plateaus ; ( iv ) el papel del hardware, simuladores, toolchains y programación; (v) ecosistema histórico y evolución de VQAs ; (vi) frameworks completos del toolchain cuántico (Cirq, TFQ, PennyLane, Braket , Qiskit , Qulacs , Mitiq, Tequila, QDK). Este contexto mapea todo el stack cuántico desde fenómenos físicos hasta software avanzado. |
| E3 |  |  | X | No define niveles arquitectónicos (como vistas o capas formales), pero sí describe cadenas de procesamiento que funcionan como niveles conceptuales: circuito parametrizado → ejecución en hardware/simulador → medición → cálculo de función de coste → retropropagación del optimizador → actualización de parámetros. Además, describe el pipeline de los frameworks ( front-end → compiler → backend ), y el flujo de ML cuántico ( PQCs + classical training). Estos niveles están presentes, pero no formalizados como una arquitectura. |
| E4 | X |  |  | Emplea terminología muy bien definida y consistente : VQE, QAOA, VQF, VQG, VQC/QAQC, VQLS, PQC, barren plateau , quantum encoder , continuous -variable circuits , error mitigation (CTMP-EM), sampling overhead , cost-landscape sharpness , black -box compiling , parameter -shift, variational ansatz , quantum neural models , generative adversarial quantum models , QASM, Quil , OpenFermion , noise models , quantum cloud platforms . Aunque no incluye glosario, la terminología es sistemática , coherente, precisa y normalizada dentro del dominio. |
| E5 |  |  | X | No presenta arquitecturas completas , pero sí define estructuras funcionales del sistema cuántico : (i) estructura híbrida clásico–cuántica para VQAs ; ( ii ) estructuras del pipeline de frameworks (como Braket , QDK, PennyLane, TensorFlow Quantum, Qiskit , Qulacs ); ( iii ) arquitectura conceptual del quantum cloud optimizado para VQAs (según [64]); ( iv ) estructuras de compilación cuántica con QAQC; (v) estructuras modulares para ML cuántico ( PQCs como capas). No son arquitecturas formales, pero sí modelos estructurados de funcionamiento . |
| E6 | X |  |  | Discute atributos de calidad con profundidad: trenabilidad , barren plateaus , ruido, mitigación de errores, estabilidad del optimizador, eficiencia del entrenamiento, costo computacional del sampling , escalabilidad, portabilidad entre hardware, precisión, fidelidad, eficiencia del simulador, sensibilidad al ruido, complejidad del compilado, latencias en nubes cuánticas, rendimiento de pipelines híbridos, compatibilidad entre frameworks , y restricciones del hardware. Es el área más profunda del artículo. |
| E7 |  | X |  | No define estilos arquitectónicos. No clasifica las estructuras como microservicios, pipeline architecture , event-driven , layered , o HPC- accelerated architectures . El artículo describe operaciones técnicas, no estilos de arquitectura de software. |
| E8 |  | X |  | No define patrones de diseño ni patrones arquitectónicos . Aunque muestra prácticas, técnicas, taxonomías de VQAs , patrones de mitigación de errores y pipelines típicos, no los formaliza como patrones (problema–contexto–solución–consecuencias) ni como patterns reutilizables de arquitectura. |
| E9 |  |  | X | Identifica gran cantidad de componentes estructurales del ecosistema cuántico , pero sin integrarlos en una arquitectura concreta: quantum encoders , PQCs , cost evaluators , mitigadores de error, classical optimizers , simuladores ( Qulacs , TFQ, Cirq), compiladores (QASM, Quil , OpenQL ), backends NISQ, APIs de hardware ( Qiskit Runtime , Braket , QDK), quantum cloud platforms , VQA loops , generadores variacionales, circuit translators , frameworks de ML, motores QC simulados HPC, toolchains completos del stack cuántico. Existe abundancia de componentes, pero no organizados como arquitectura total . |
| E10 |  | X |  | No proporciona artefactos reutilizables (plantillas, modelos de referencia, RA, blueprints , lineamientos arquitectónicos, DSLs ). Aunque incluye tablas de algoritmos y frameworks , estas no son artefactos arquitectónicos , sino inventarios descriptivos. No define artefactos estructurados listos para reutilizar en diseño o arquitectura cuántica. |
| Estudio | S13: Towards Process-Centered Architecting for Quantum Software Systems |  |  |  |
| Elemento | ¿ El estudio describe el elemento? | Descripción |  |  |
|  | Si | No | Parcialmente |  |
| E1 | X |  |  | El artículo sí define un objetivo arquitectónico formal : desarrollar un proceso de arquitectura para QSAs , capaz de guiar sistemáticamente el diseño, modelado, implementación, validación y despliegue de software cuántico. El objetivo está explícitamente formulado: crear un “ architecting process ” que permita mapear qubits y gates a componentes y conectores , integrar herramientas, roles, actividades y soportar diseño incremental. Es uno de los artículos más fuertes en E1. |
| E2 | X |  |  | El contexto está magistralmente definido: describe el estado actual del QSE, las limitaciones de los enfoques clásicos de arquitectura, la necesidad de procesos centrados en actividades, la relación entre hardware, compilers , capas de control, modelos, herramientas y actores. Explica los desafíos del dominio cuántico (ruido, co -diseño, mapeo hardware/software, ausencia de procesos formales, brechas de conocimiento), justifica por qué se necesita un proceso arquitectónico y fundamenta todo en una revisión sistemática de 589 estudios. |
| E3 | X |  |  | El artículo sí define niveles de abstracción dentro del proceso arquitectónico: (1) Architectural Requirements → (2) Architectural Modeling → (3) Architectural Implementation → (4) Architectural Validation → (5) Architectural Deployment . Cada nivel se relaciona con resultados, métodos, herramientas, roles y flujos de trabajo. Además se apoya en los niveles del stack de computación cuántica (hardware layer , compiler layer , software layer ) presentados en Fig. 1. Es uno de los pocos artículos que formaliza explícitamente el “multi- level architecting workflow ” para sistemas cuánticos. |
| E4 |  |  | X | Emplea terminología técnica precisa ( Qubits , Qugates , QSA, QSE, ASRs , model-driven architecting , architectural components / connectors , QPU, compiler transformations , architectural patterns , layered quantum stack ), pero no provee un glosario ni normaliza terminología entre estudios. La terminología usada es correcta, coherente y bien explicada, pero no formalizada como un glosario estándar. |
| E5 | X |  |  | El artículo presenta estructuras arquitectónicas completas , especialmente: (i) la arquitectura en capas del stack de computación cuántica (Figura 1); ( ii ) el proceso arquitectónico de 5 actividades (Figura 3); ( iii ) la representación arquitectónica del ejemplo QKD; ( iv ) los modelos de componentes y conectores del QKD (Quantum Packet Module , Provide / Request ports ); (v) flujos de información entre nodes A y B; (vi) el mapeo entre algoritmos y componentes. Aunque no es una arquitectura de producto, sí constituye una arquitectura metodológica y conceptual completa , sustentada en estructuras formales. |
| E6 | X |  |  | Discute atributos de calidad explícitos: seguridad cuántica (QKD), eficiencia, mantenibilidad del proceso, escalabilidad del desarrollo, estandarización, trazabilidad del modelado, validación sistemática, reducción de errores, control de evolución, claridad de ASRs , consistencia entre modelo y código, verificabilidad mediante simulación, integrabilidad con herramientas. Muchos atributos emergen asociados al proceso arquitectónico y al dominio cuántico. |
| E7 |  | X |  | El artículo no define estilos arquitectónicos (por ejemplo layered architecture , microservices , reactor, event-driven , etc.). Aunque menciona “ patterns and styles ” como insumos potenciales para arquitecting , no los identifica ni los describe , ni propone estilos específicos para QSAs . |
| E8 |  | X |  | A pesar de hablar de patrones, no define patrones de diseño arquitectónico reutilizables . Lo menciona: “ architectural patterns and styles can be reused ”, pero no especifica ningún patrón, ni lo detalla, ni lo estructura. No existen elementos formales tipo pattern language . |
| E9 | X |  |  | Identifica componentes estructurales : Quantum Packet Module, Key Generation, Key Reconciliation, ports (Provide/Request), QPU, compiler layer, gates layer, software layer, source code modules, connectors para transmisión , componentes del QKD, domain models, architectural models, simulators, deployment nodes, herramientas del toolset (Strawberry Fields, qCOR , eQASIM , QuNetSim , JKQ, XACC, etc.). Estos componentes están integrados en el proceso y en el ejemplo concreto. |
| E10 | X |  |  | El artículo sí define artefactos reutilizables: el proceso arquitectónico completo (5 actividades), los roles , las herramientas asignadas a cada actividad , los diagramas del proceso , el marco de actividades , el modelo del QKD como artefacto ejemplificador, y la plantilla metodológica del arquitecting workflow . Aunque no son plantillas de arquitectura de producto, sí son artefactos metodológicos reutilizables , por lo que E10 es claramente afirmativo. |
| Estudio | S14: Engineering Reliable Hybrid Quantum Software: An Architectural-driven Approach |  |  |  |
| Elemento | ¿ El estudio describe el elemento? | Descripción |  |  |
|  | Si | No | Parcialmente |  |
| E1 | X |  |  | El artículo sí define un objetivo arquitectónico formal : permitir el diseño, modelado, análisis y optimización automática de arquitecturas híbridas cuántico-clásicas mediante un enfoque basado en ADLs . Establece como objetivo explícito la estimación de la fiabilidad, la exploración del espacio de diseño y la integración con un qADL derivado del Palladio Component Model. Todo gira alrededor de un objetivo arquitectónico claro y fundamentado. |
| E2 | X |  |  | Define un contexto extremadamente robusto : (i) el reto de la fiabilidad en NISQ, ( ii ) dependencia de los algoritmos del hardware específico, ( iii ) variabilidad entre procesadores, ( iv ) diferencias entre implementaciones, (v) necesidad de modelar componentes cuánticos como parte de arquitecturas híbridas, (vi) problemática del mapeo algoritmo–hardware, ( vii ) limitaciones clásicas vs cuánticas, ( viii ) necesidad de exploración automática de espacios arquitectónicos. Este es uno de los artículos más completos en contextualización arquitectónica. |
| E3 | X |  |  | Define niveles de abstracción arquitectónicos claros : (i) repository model , ( ii ) system model , ( iii ) resource environment , ( iv ) allocation model ; además, integra el concepto del qADL para modelar componentes cuánticos y su despliegue; introduce niveles adicionales para análisis arquitectónico vía PCM-Rel y PerOpteryx . Los niveles arquitectónicos están definidos formalmente y conectados a comportamientos y despliegues. |
| E4 |  |  | X | Utiliza terminología técnica clara y coherente ( qADL , PCM, quantum components , resource containers , QPU, ESP, reliability analysis , DTMC, deployment decisions , design space exploration , PerOpteryx ). Sin embargo, no proporciona glosario formal , ni normalización terminológica más allá del uso estable del vocabulario. La terminología es técnicamente precisa, pero no estandarizada como glosario. |
| E5 | X |  |  | Presenta estructuras arquitectónicas formales y completas : (i) el modelo de repositorio con componentes cuánticos, ( ii ) el modelo del sistema con instanciación híbrida, ( iii ) el entorno de recursos con contenedores cuánticos, ( iv ) el modelo de despliegue con reglas de asignación, (v) la extensión del PCM a qADL , (vi) el pipeline de análisis de fiabilidad mediante ESP + PCM-Rel, ( vii ) la estructura de exploración automatizada via PerOpteryx . Son arquitecturas explícitas, con componentes, interfaces, puertos y restricciones. |
| E6 | X |  |  | Discute atributos de calidad, especialmente fiabilidad , de manera profunda: (i) modelado de errores ( single - qubit , bi-qubit , SPAM errors ), ( ii ) ESP como métrica de fiabilidad, ( iii ) impacto de qubits , decoherencia, profundidad del circuito, ( iv ) evaluación de arquitecturas híbridas basadas en el despliegue en QPUs específicas, (v) análisis probabilístico de éxito/fracaso, (vi) integración de atributos no funcionales en exploración automática del diseño. Además menciona extensiones para rendimiento y costos. |
| E7 |  | X |  | No presenta estilos arquitectónicos ( layered , microservicios, event-driven , actor- based ). Aunque usa estructuras como repositorio/sistema/despliegue, no los clasifica como estilos. El enfoque es metodológico y procesal, no de estilos arquitectónicos. |
| E8 |  | X |  | No define patrones arquitectónicos . Aunque propone un enfoque sistemático, no formaliza patrones tipo “ solution blueprint ” ni catálogo reusable. El artículo tiene proceso y método, pero no patrones. |
| E9 | X |  |  | Identifica componentes estructurales concretos : quantum components, classical components, QPU resource containers, CPU containers, interfaces, provided/required ports, deployment mappings, transpiled circuits, algorithm implementations, SDKs ( Qiskit , Cirq), error models, DTMC models, PCM failure annotations, PerOpteryx design decisions, system behaviors y flows. Los componentes están explícitamente relacionados y modelados. |
| E10 | X |  |  | Proporciona artefactos reutilizables explícitos : (i) el qADL basado en PCM, ( ii ) extensiones al repository / system / resource / allocation models , ( iii ) integración con PCM-Rel, ( iv ) integración con PerOpteryx , (v) un workflow completo de diseño → modelado → análisis → exploración. Estos artefactos pueden reutilizarse para nuevas arquitecturas híbridas y constituyen contribuciones metodológicas formales. |
| Estudio | S15: The Quantum Software Lifecycle |  |  |  |
| Elemento | ¿ El estudio describe el elemento? | Descripción |  |  |
|  | Si | No | Parcialmente |  |
| E1 | X |  |  | El artículo define explícitamente un objetivo arquitectónico formal : proponer un lifecycle completo de 10 fases que estructure el desarrollo, ejecución y refinamiento de aplicaciones cuánticas en la era NISQ. A diferencia de otros trabajos, el objetivo no es solo describir actividades, sino plantear una metodología formal , con fases, entradas, salidas, relación entre etapas y necesidades de herramientas, permitiendo usar el lifecycle como base metodológica para ingeniería de software cuántico . |
| E2 | X |  |  | La definición de contexto es excelente . Describen en profundidad: (i) el contexto NISQ (ruido, decoherencia, circuit depth limitado, restricciones de qubit count ), ( ii ) la necesidad de algoritmos híbridos, ( iii ) la variabilidad entre hardware, ( iv ) necesidad de selección de hardware, (v) importancia del provenance cuántico, (vi) limitaciones de los toolchains actuales, ( vii ) la ausencia de metodologías sistemáticas. Este artículo sitúa muy bien el papel del lifecycle dentro del ecosistema cuántico actual y sus desafíos. |
| E3 | X |  |  | El artículo sí establece niveles de abstracción y fases altamente diferenciadas : (1) splitting , (2) hardware- independent implementation , (3) enrichment , (4) hardware- independent optimization , (5) hardware selection , (6) error mitigation setup , (7) compilation & HW- dependent optimization , (8) integration , (9) execution , (10) result analysis . Cada fase está descrita como un nivel funcional distinto del proceso de desarrollo, con entradas, salidas, y dependencias, cumpliendo perfectamente el criterio de niveles de abstracción. |
| E4 |  |  | X | Utiliza terminología precisa y coherente (circuit depth, decoherence, quantum-classical splitting, provenance categories, error mitigation matrices, hardware-aware optimization, amplitude/basis encoding, NISQ constraints, hybrid algorithms). Sin embargo, no presenta un glosario formal ni una normalización terminológica explícita , aunque el uso del vocabulario es técnico y consistente. |
| E5 | X |  |  | Presenta estructuras arquitectónicas claras , especialmente la estructura completa del lifecycle como una “arquitectura de proceso”. Define componentes estructurales como : circuit enrichment, optimizers, compilers, provenance collectors, hardware analyzers, SDK deployment handlers, gating/measurement metadata, error models, workflows de compilación en dos niveles . Estas estructuras definen una arquitectura de referencia para el proceso de ingeniería cuántica , con módulos, interacciones y flujos. |
| E6 | X |  |  | Discute atributos de calidad en profundidad para cada fase: impacto del ruido en precisión, fiabilidad dependiente del hardware, reproducibilidad mediante provenance , verificabilidad por testing y verificación formal, reutilización del circuito independiente del input, portabilidad mediante lenguajes high-level , coste y eficiencia en ejecución, robustez del proceso iterativo, calidad del resultado post-mitigación. Este es un artículo muy fuerte en E6. |
| E7 |  | X |  | No propone estilos arquitectónicos . Aunque varias fases implican estructuras pipeline o procesos ETL- like , no se describen estilos formales (por ejemplo, layered , microkernel , pipe-and- filter , event-driven ). El enfoque está en el lifecycle , no en estilos arquitectónicos. |
| E8 |  | X |  | A pesar de mencionar best practices y la posibilidad de usar patrones en el futuro, el artículo no define patrones arquitectónicos ni patrones de diseño . Tampoco propone un catálogo ni plantillas de patrones. Solo señala que futuros trabajos ampliarán la pattern language . |
| E9 | X |  |  | Identifica numerosos componentes estructurales : quantum circuit, initialization circuit, oracle expansions, hardware-independent optimizers, qubit connectivity graphs, error model extractors, compiler IRs ( OpenQASM , Quil), deployment models, classical software artifacts, provenance types (hardware, circuit, data, compiler), SDK handlers, gate mappings, measurement mappings, mitigation matrices, input/output handlers. Este artículo describe claramente todos los componentes del ecosistema y cómo se conectan en el lifecycle . |
| E10 | X |  |  | Presenta artefactos reutilizables clave : el lifecycle de 10 fases, las descripciones de entrada/salida por fase, las categorías de provenance , la integración de recomendadores, los modelos de selección de hardware, los esquemas de mitigación de errores, el flujo de compilación en dos etapas, y el pipeline completo de desarrollo. Estos son artefactos conceptuales y metodológicos reutilizables en futuros trabajos y herramientas. Aunque no es un RA clásico, sí es un artefacto metodológico de referencia . |
| Estudio | S16: Research on Quantum Computing Standard System Architecture and Roadmap |  |  |  |
| Elemento | ¿ El estudio describe el elemento? | Descripción |  |  |
|  | Si | No | Parcialmente |  |
| E1 | X |  |  | El artículo sí define un objetivo arquitectónico claro y formal : construir un sistema de estándares para la computación cuántica , incluyendo principios de diseño (herencia, practicidad, progresividad), estructura del sistema, taxonomía de estándares y una hoja de ruta de desarrollo. El objetivo es explícito: proporcionar una arquitectura estándar que guíe ciencia, industria y normalización internacional. |
| E2 | X |  |  | Provee un contexto extremadamente completo , describiendo: (i) el estado global del desarrollo cuántico; ( ii ) rutas tecnológicas para hardware cuántico ( superconducting , ion trap , neutral atom , topological , optical ); ( iii ) situación industrial en EE. UU., Europa y China; ( iv ) estado actual de estándares internacionales (ISO/IEC, ITU-T, IEC, IEEE, IETF QIRG, NIST); (v) necesidades emergentes en academia e industria; (vi) limitaciones tecnológicas y regulatorias; ( vii ) motivación para estandarización global. El contexto es uno de los más completos del conjunto. |
| E3 |  |  | X | El artículo sí presenta niveles , pero no como niveles de abstracción arquitectónicos formales , sino como la división del sistema de estandarización en: (1) estándares básicos (terminología, arquitectura, benchmarks ); (2) estándares técnicos (componentes, interfaces, interoperabilidad, algoritmos); (3) estándares de aplicación (AI, química, finanzas, redes inteligentes). Aunque esto funciona como “capas conceptuales”, no se formaliza como abstracciones arquitectónicas ; por eso es parcial. |
| E4 |  |  | X | Utiliza terminología técnica y normativa relevante ( superconducting qubits , ion- trap , quantum AI, interoperability standards , resource simulation , quantum cloud , terminology standards , benchmarking), pero no provee glosario formal ni normaliza los términos. El vocabulario es correcto y consistente, pero no estructurado como un estándar terminológico completo. |
| E5 | X |  |  | Presenta estructuras arquitectónicas explícitas , en particular: (i) la arquitectura del sistema de estándares (Figura 2) con tres ramas principales y subdivisiones; ( ii ) el roadmap estructurado en corto/medio/largo plazo; ( iii ) la estructura de interrelación entre estándares terminológicos, tecnológicos y de aplicación; ( iv ) la taxonomía jerárquica del sistema estándar cuántico. Estas estructuras describen formalmente una arquitectura de sistema normativo . |
| E6 |  |  | X | Discute atributos de calidad indirectamente: practicidad, interoperabilidad, consistencia, alineación nacional/internacional, robustez del ecosistema industrial , pero no lo hace con el rigor típico de QAs arquitectónicos. Los atributos están implícitos en los principios del sistema (herencia, practicidad, progresividad), pero no se desarrolla un análisis profundo de QAs como en artículos de arquitectura de software, por lo que se clasifica como parcial. |
| E7 |  | X |  | No describe estilos arquitectónicos (por ejemplo, layered architecture , event-driven , microservicios). Aunque organiza un sistema en niveles, eso corresponde a una clasificación de estándares, no a estilos arquitectónicos del software o del sistema. |
| E8 |  | X |  | No presenta patrones de diseño ni arquitectónicos. Aunque muestra ejemplos de estándares y principios de diseño estratégico, no formaliza patrones reutilizables (problema-contexto-solución). No hay catálogo de patrones. |
| E9 | X |  |  | Identifica componentes estructurales del sistema de estandarización : (i) estándares básicos (terminología, arquitectura, benchmarks , ética); ( ii ) estándares técnicos (componentes, algoritmos, interfaces, interoperabilidad, simulación); ( iii ) estándares de aplicación (AI, química, finanzas, transporte); ( iv ) roadmap en 3 fases; (v) organizaciones involucradas (ISO/IEC, IEC, ITU-T, IEEE, IETF, NIST). Estos componentes están claramente estructurados y relacionados. |
| E10 | X |  |  | Presenta artefactos reutilizables explícitos , incluyendo: (i) el sistema de estándares (Figura 2), ( ii ) el roadmap (Figura 3), ( iii ) los principios normativos, ( iv ) la clasificación jerárquica de estándares, (v) la taxonomía de niveles de estandarización. Estos actúan como artefactos metodológicos reutilizables para gobiernos, industria y SDOs . |
| Estudio | S17: Challenges and Opportunities in Quantum Software Architecture |  |  |  |
| Elemento | ¿ El estudio describe el elemento? | Descripción |  |  |
|  | Si | No | Parcialmente |  |
| E1 |  | X |  | El artículo no define un objetivo arquitectónico formal; describe desafíos y oportunidades, pero no establece metas arquitectónicas ni un objetivo estructurado para una arquitectura concreta. |
| E2 | X |  |  | Define claramente el contexto: ecosistema híbrido CPU–QPU, estados de la industria, limitaciones NISQ, necesidad de herramientas, acceso cloud , problemas de escalabilidad y dependencia del hardware. |
| E3 |  |  | X | Presenta conceptos de niveles (vistas, abstracciones, interacción entre capas), pero no formaliza niveles de abstracción arquitectónicos como en una arquitectura de referencia. |
| E4 |  |  | X | Usa terminología consistente (QPU, NISQ, ruido, decoherencia, transpiling , DevOps cuántico), pero no formaliza un glosario ni normaliza vocabulario técnico. |
| E5 | X |  |  | Describe estructuras arquitectónicas y funcionales: pipeline híbrido CPU–QPU, orquestadores, compiladores, simuladores y modos de ejecución cloud . |
| E6 | X |  |  | Discute atributos de calidad detallados: ruido, variabilidad, reproducibilidad, portabilidad, disponibilidad, circuit depth , dependencias hardware-específicas, estabilidad numérica. |
| E7 |  | X |  | No propone estilos arquitectónicos formales; menciona tendencias, pero no clasifica estilos ni define estructuras estilísticas. |
| E8 |  | X |  | No aborda patrones de diseño ni patrones arquitectónicos; identifica esta ausencia como un vacío actual en QSA. |
| E9 | X |  |  | Identifica componentes estructurales: QPU, CPU, transpilers , simuladores, servicios cloud , APIs , orquestadores, flujos síncronos/asíncronos. |
| E10 |  | X |  | No define artefactos reutilizables como plantillas, lineamientos, estructuras de referencia o modelos arquitectónicos aplicables. |

La Figura 18 muestra un mapa de calor que resume los resultados reportados en la Tabla 34, donde las filas (S1–S17) corresponden a los estudios analizados y las columnas (E1–E10) a los elementos evaluados. La codificación de colores indica el nivel de cobertura: verde (sí), amarillo (parcial) y rojo (no):
**Figura 18. Mapa de calor entre los elementos E1-E10 y los estudios (S1-S17).**
De acuerdo con los resultados, ninguno de los estudios primarios aborda de manera integrada todos los elementos que propone el modelo base, lo que evidencia un alto nivel de dispersión en el tratamiento arquitectónico dentro del campo de la Ingeniería de Software Cuántica. Esta heterogeneidad refleja que no existe un consenso metodológico ni una visión unificada sobre cómo deben estructurarse las arquitecturas híbridas. Al analizar los datos, por elemento: se observa que los mayores niveles de cobertura se concentran en E2, E5, E6 y E9, que son tratados completamente por más de la mitad de los estudios, lo que indica que la literatura tiende a describir con detalle el funcionamiento general de las plataformas cuánticas, sus características operativas y su impacto en los atributos de calidad del software.
Por otro lado, los elementos E1, E3, E4, E8 y E10 presentan niveles de cobertura significativamente inferiores, con porcentajes iguales o inferiores al 20%. Esto sugiere que aspectos para el diseño de arquitecturas híbridas, como la definición de objetivos arquitectónicos, la formalización de niveles de abstracción, la normalización terminológica, los patrones reutilizables y los artefactos arquitectónicos, reciben una atención muy limitada en la literatura. Esta ausencia revela una falta de madurez conceptual en dimensiones que serían esenciales para establecer bases metodológicas comunes dentro del área. Finalmente, elementos como E7 muestran una cobertura intermedia. Aunque algunos estudios introducen ideas cercanas a estilos arquitectónicos o patrones de interacción, estas aproximaciones siguen siendo incipientes y no se articulan como estilos formales. De esta manera, los resultados evidencian una integración débil y fragmentada de los componentes arquitectónicos dentro de las propuestas revisadas, a pesar de su potencial relevancia para garantizar interoperabilidad, trazabilidad y calidad en las soluciones híbridas.
Teniendo en cuenta lo anterior, la comparación muestra que existe una fragmentación considerable en la literatura, tanto en la cobertura de los elementos arquitectónicos definidos como en el enfoque metodológico adoptado por los estudios primarios. Esta falta de convergencia dificulta el desarrollo de soluciones reutilizables, interoperables y coherentes para el diseño de arquitecturas cuántico–clásicas. Sin embargo, al utilizar una estructura homogénea basada en los diez elementos del modelo base, fue posible reducir la dispersión conceptual y analizar los estudios desde un marco común.

## Comparación entre elementos (E1-E10) y propuestas aplicadas en empresas

Como se estudió con detalle en el capítulo anterior, el estudio exploratorio se centró en identificar esfuerzos desarrollados por la industria que constituyen el punto de encuentro entre la investigación científica y las implementaciones prácticas de arquitecturas híbridas. Estos estudios piloto sirven como base práctica para observar el comportamiento real de las arquitecturas, identificar limitaciones operativas y validar enfoques propuestos en la literatura. En la Tabla 35 se presenta la comparación entre los elementos identificados durante la homogeneización y los estudios piloto:
**Tabla 35. Comparación entre elementos (E1-E10) y estudios piloto (S18-S20).**

### Tabla extraída 35

| Pregunta de comparación: ¿El elemento está definido en el estudio piloto ? Objetivo: Determinar cuáles elementos definidos en el modelo base son descritos en el estudio piloto. Elementos definidos para la comparación: Elementos descritos en la Tabla 30 |  |  |  |  |
| --- | --- | --- | --- | --- |
| Estudio | S18: Qiskit Runtime (IBM) – Cloud Hybrid Service |  |  |  |
| Elemento | ¿El estudio describe el elemento? | Descripción |  |  |
|  | Si | No | Parcialmente |  |
| E1 |  | X |  | Qiskit Runtime no define un objetivo arquitectónico formal en el sentido de un objetivo de diseño de arquitectura de software; la documentación lo presenta como un entorno de ejecución en la nube para workloads cuántico–clásicos que busca “ejecutar más circuitos, más rápido” y exponer primitivas de alto nivel ( Estimator , Sampler ) para facilitar el uso de los backends de IBM Quantum. |
| E2 | X |  |  | La documentación de IBM describe con bastante detalle el contexto operativo híbrido : Qiskit Runtime se ejecuta en IBM Quantum Platform , co -localizando recursos clásicos con el hardware cuántico para reducir latencia en cargas iterativas, y exponiendo distintos execution modes ( job , batch , session ) para adaptar la planificación a diferentes tipos de algoritmos variacionales e iterativos. |
| E3 |  |  | X | Se describe un stack funcional implícito : cliente → SDK qiskit-ibm-runtime → servicio Runtime → primitivas ( Sampler , Estimator ) → backends (simuladores y QPUs ). Sin embargo, estas capas no se formalizan como niveles de abstracción arquitectónicos (no hay vistas, relaciones formales ni separación explícita de responsabilidades en términos de arquitectura de software), por lo que se considera una cobertura parcial. |
| E4 |  |  | X | La documentación emplea una terminología técnica estable ( Runtime , primitives, sessions , execution modes , PUBs , backends , error mitigation ), y explica sus roles funcionales, pero no ofrece un glosario normativo ni una ontología de términos arquitectónicos; la normalización es implícita al ecosistema IBM, no formalizada como estándar. |
| E5 | X |  |  | Qiskit Runtime sí presenta estructuras claramente identificables : primitivas que encapsulan el cómputo cuántico ( Sampler , Estimator ), un servicio de Runtime que orquesta la ejecución y la programación de jobs , modelos de ejecución diferenciados ( job , batch , session ) y backends cuánticos y clásicos sobre los que se despliegan las cargas de trabajo. Todo ello conforma una arquitectura funcional explícita para el ecosistema IBM Quantum, aunque no se presente como “ reference architecture ”. |
| E6 | X |  |  | IBM destaca explícitamente atributos de calidad como rendimiento y eficiencia : reporta aceleraciones de hasta 100× en workloads iterativos al usar Qiskit Runtime , y plantea el objetivo de alcanzar mejoras de varios órdenes de magnitud gracias a la reducción de latencia y la co -localización de recursos clásicos y cuánticos. También se discuten la escalabilidad y la optimización del uso de recursos mediante modos de ejecución y opciones de Runtime . |
| E7 |  | X |  | Aunque la solución se apoya en conceptos que podrían mapearse a estilos (por ejemplo, service-based o remote execution para la interacción cliente– Runtime – backend ), IBM no presenta explícitamente estilos arquitectónicos ni discute la solución en términos de patrones de estilo ( layered , microservicios, event-driven , etc.). |
| E8 |  | X |  | Qiskit Runtime no define patrones de diseño arquitectónico reutilizables ; ofrece APIs , primitivas y ejemplos de uso, pero no formaliza plantillas de arquitectura, ni patrones para organizar componentes clásicos y cuánticos más allá de la propia plataforma. |
| E9 | X |  |  | Se listan e integran múltiples componentes estructurales concretos : cliente y SDK ( qiskit-ibm-runtime ), servicio Runtime , primitivas ( Estimator , Sampler ), backends de simulación y hardware, sesión de ejecución, unidades de trabajo ( PUBs ) y configuraciones de ejecución. La documentación describe claramente cómo estos componentes colaboran para ejecutar cargas híbridas. |
| E10 |  | X |  | Aunque Qiskit Runtime introduce primitivas, ejemplos y guías, no proporciona artefactos arquitectónicos reutilizables en el sentido de modelos de referencia, plantillas de documentación arquitectónica o lineamientos metodológicos para el diseño de arquitecturas híbridas externas a IBM Quantum; su foco está en el servicio y su uso operativo. |
| Estudio | S19: TensorFlow Quantum – Binary Image Classification (MNIST / Fashion-MNIST, QNN/CNN) |  |  |  |
| Elemento | ¿El estudio describe el elemento? | Descripción |  |  |
|  | Si | No | Parcialmente |  |
| E1 |  | X |  | Ni los tutoriales oficiales de TFQ ni los casos de estudio sobre MNIST/Fashion-MNIST plantean un objetivo arquitectónico ; el objetivo es experimental: demostrar que un pipeline híbrido (clásico–cuántico) puede abordar tareas de clasificación de imágenes, evaluando precisión y comportamiento del modelo bajo distintos setups . |
| E2 | X |  |  | Se describe con claridad el contexto de aplicación : clasificación binaria de imágenes ( por ejemplo: , dígitos 3 vs 6 de MNIST, o clases de Fashion-MNIST), preprocesamiento clásico ( downscaling , binarización), codificación de píxeles en circuitos de Cirq, conversión a tensores cuánticos de TFQ y entrenamiento híbrido con TensorFlow ( tf.keras ). |
| E3 |  |  | X | El pipeline está claramente dividido en etapas (carga y filtrado de datos, preprocesamiento, conversión a circuitos, construcción del modelo híbrido, entrenamiento y evaluación), pero no se conceptualiza como niveles de abstracción arquitectónicos ; la separación es funcional y orientada a ML, no a arquitectura de software como tal. |
| E4 |  |  | X | Se emplea terminología técnica consistente de quantum ML (circuitos parametrizados, observables, expectativas, operadores diferenciables, encoding de datos en qubits ), y de DL (CNN, capas densas, función de pérdida, optimización), pero no se ofrece un glosario formal ni una taxonomía terminológica ; la normalización está dada por el ecosistema TensorFlow / Cirq. |
| E5 | X |  |  | Los estudios y tutoriales describen explícitamente una estructura híbrida QNN/CNN : capas convolucionales clásicas para extracción de características, una capa cuántica implementada como circuito parametrizado (PQC) a través de TFQ/Cirq, y capas densas finales en Keras . Esta composición define una arquitectura funcional clara de modelo híbrido, aunque centrada en el modelo de ML, no en el sistema completo. |
| E6 | X |  |  | Se analizan atributos de calidad relacionados con el comportamiento del modelo híbrido : precisión de clasificación, curvas de entrenamiento, sensibilidad al tamaño del circuito y al ruido del simulador/hardware, impacto del encoding de datos y del número de parámetros cuánticos. Aunque no se enmarcan como “atributos de calidad arquitectónicos”, sí hay un análisis explícito de desempeño y estabilidad del pipeline híbrido. |
| E7 |  | X |  | Los tutoriales y casos de estudio no introducen estilos arquitectónicos (no hablan de estilos tipo layered , pipeline, etc.); simplemente muestran un flujo de trabajo típico de DL+QML. |
| E8 |  | X |  | No se extraen ni definen patrones reutilizables más allá de la receta concreta del experimento (pipeline de clasificación). No se exploran variaciones como patrones de diseño generalizables para otros dominios. |
| E9 | X |  |  | Están claramente identificados los componentes del sistema de experimentación : datasets (MNIST/Fashion-MNIST), pipeline de preprocesamiento, componentes de Cirq (circuitos, qubits , puertas), capa PQC de TFQ, modelo Keras , optimizador y métricas de evaluación. Cada uno tiene un rol funcional bien definido dentro del flujo experimental. |
| E10 |  | X |  | Aunque el código del tutorial puede reutilizarse como ejemplo, no se proporcionan artefactos arquitectónicos formales (plantillas, modelos de referencia, lineamientos) que se declaren como reutilizables para diseñar arquitecturas híbridas más generales. |
| Estudio | S20: TensorFlow Quantum – Hybrid ML SDK |  |  |  |
| Elemento | ¿El estudio describe el elemento? | Descripción |  |  |
|  | Si | No | Parcialmente |  |
| E1 |  | X |  | El diseño de TFQ se presenta como un framework de quantum ML para la era NISQ, cuyo objetivo es permitir el prototipado rápido de modelos híbridos cuántico–clásicos integrados en TensorFlow . Sin embargo, no formula un objetivo arquitectónico formal para sistemas de software, sino un objetivo de biblioteca/modelo. |
| E2 | X |  |  | La documentación oficial sitúa a TFQ en un contexto muy claro: librería open source , integrada con TensorFlow Keras , que combina Cirq, simuladores cuánticos y datos cuánticos para construir modelos híbridos. Explica la arquitectura general del stack ( TensorFlow + TFQ + Cirq + simuladores/hardware) y el tipo de problemas NISQ que aborda. |
| E3 |  |  | X | El diseño de TFQ describe la composición de capas y módulos (primitivas cuánticas, datasets cuánticos, integración con modelos Keras ), pero no estructura estos elementos como niveles de abstracción arquitectónicos ; se presenta más como arquitectura de librería que como arquitectura de sistema de software documentada con vistas, capas y responsabilidades explícitas. |
| E4 |  |  | X | TFQ emplea un vocabulario técnico consistente: quantum datasets , quantum circuits , primitives, hybrid models , differentiable quantum operators , PQC layers , etc., y el paper arXiv describe su semántica dentro del marco TensorFlow . No obstante, no publica un glosario formal ni un estándar terminológico; el lenguaje se normaliza de facto dentro de la comunidad TFQ. |
| E5 | X |  |  | La documentación y el paper de diseño describen una estructura bien definida del framework : (i) construcción y manipulación de circuitos en Cirq, ( ii ) conversión a tensores cuánticos, ( iii ) capas PQC integradas en tf.keras , ( iv ) operadores diferenciables que permiten backpropagation a través de capas clásicas y cuánticas, y (v) simuladores y backends . Todo ello constituye una arquitectura funcional clara del SDK. |
| E6 | X |  |  | TFQ está diseñado específicamente para habilitar modelos híbridos entrenables de extremo a extremo , y su contribución central es permitir “ seamless backpropagation ” a través de combinaciones de capas clásicas y cuánticas, lo que impacta directamente en atributos como eficiencia de entrenamiento, expresividad del modelo y capacidad de integración con pipelines de ML existentes. Aunque estos atributos se discuten desde la perspectiva de ML, son relevantes para la calidad de soluciones híbridas. |
| E7 |  | X |  | TFQ no introduce estilos arquitectónicos de software ; se centra en el diseño interno de la librería y en el flujo de construcción de modelos, no en estilos de arquitectura para sistemas que usen TFQ. |
| E8 |  | X |  | Tampoco define patrones de diseño arquitectónico; aunque muchos ejemplos tienen estructura de “modelo híbrido típico”, esto no se cristaliza en un catálogo de patrones ni en plantillas genéricas para arquitecturas híbridas. |
| E9 | X |  |  | El diseño de TFQ identifica una serie de componentes clave : circuitos de Cirq, representaciones de datos cuánticos, capas PQC ( tfq.layers.PQC ), operadores cuánticos diferenciables, simuladores de circuitos, integración con tf.data y tf.keras . Estos componentes y sus interacciones están claramente descritos y representan la estructura interna del SDK. |
| E10 |  | X |  | Aunque la documentación contiene numerosos ejemplos y tutoriales, no proporciona artefactos arquitectónicos reutilizables para el diseño de sistemas híbridos (como modelos de referencia, plantillas arquitectónicas o lineamientos metodológicos). El foco está en el nivel de modelo/algoritmo, no en el nivel de arquitectura de software. |

De manera análoga, la Tabla 36 presenta la comparación entre los elementos identificados durante la homogeneización y los reportes técnicos publicados por empresas que trabajan de forma activa en el desarrollo de arquitecturas híbridas:
**Tabla 36. Comparación entre elementos (E1-E10) y reportes (S21-S24).**

### Tabla extraída 36

| Pregunta de comparación: ¿El elemento está definido en el reporte técnico ? Objetivo: Determinar cuáles elementos definidos en el modelo base son descritos en el reporte técnico. Elementos definidos para la comparación: Elementos descritos en la Tabla 30 |  |  |  |  |
| --- | --- | --- | --- | --- |
| Estudio | S21: Microsoft Azure Quantum – arquitectura híbrida e integración cuántico–clásica |  |  |  |
| Elemento | ¿El estudio describe el elemento? | Descripción |  |  |
|  | Si | No | Parcialmente |  |
| E1 |  | X |  | Azure Quantum se presenta como una plataforma integral en la nube para cómputo cuántico y como “visión de largo plazo” para arquitecturas híbridas, pero la documentación oficial no formula un objetivo arquitectónico formal en términos de diseño de software (no define explícitamente un objetivo tipo “arquitectura de referencia para sistemas híbridos”). El foco está en describir capacidades de la plataforma, escenarios de uso y ventajas técnicas, más que en enunciar metas arquitectónicas normativas. |
| E2 | X |  |  | Los documentos de Azure describen con mucho detalle el contexto de integración cuántico–clásica : Azure Quantum como servicio PaaS en la nube, acceso a varios proveedores de hardware ( IonQ , Quantinuum , Rigetti, Pasqal ), integración con recursos clásicos de Azure (HPC, almacenamiento, servicios de orquestación) y soporte explícito para algoritmos híbridos como VQE y QAOA que combinan cómputo clásico y cuántico en un mismo flujo de trabajo. |
| E3 |  |  | X | La documentación introduce conceptos de arquitectura híbrida (por ejemplo, diferentes “enfoques de integración” entre aplicaciones clásicas y Azure Quantum, patrones de envío de trabajos individuales vs. lotes, acoplamiento fuerte o débil entre la aplicación y el servicio cuántico), e incluso muestra diagramas de arquitectura de integración con aplicaciones clásicas. Sin embargo, estos se presentan como escenarios o “ example scenarios ” , no como un modelo formal de niveles de abstracción arquitectónicos (no hay una jerarquía explícita de vistas o capas estandarizadas). |
| E4 |  |  | X | Microsoft utiliza una terminología técnica relativamente estable: “ hybrid quantum computing ”, “ batching ”, “ resource estimation ”, “quantum jobs ”, “ workspaces ”, “quantum targets”, “quantum- inspired optimization ”, etc., y explica su significado dentro del ecosistema Azure Quantum. Sin embargo, no existe un glosario formalizado como estándar terminológico , sino más bien una normalización de facto en la documentación técnica y de aprendizaje. |
| E5 | X |  |  | Azure Quantum sí proporciona estructuras arquitectónicas explícitas : los escenarios de “Quantum computing integration with classical apps ” muestran arquitecturas de referencia donde una aplicación clásica en Azure invoca a Azure Quantum a través del Quantum Development Kit (QDK), se conecta con targets cuánticos específicos y combina recursos HPC, almacenamiento y servicios de orquestación. Estas estructuras incluyen componentes, conexiones y responsabilidades claramente diferenciadas, funcionando como arquitecturas funcionales completas de integración. |
| E6 | X |  |  | Los docs de Azure destacan explícitamente atributos de calidad asociados a la integración híbrida: rendimiento (reducción de latencia mediante batching de circuitos y ejecución cercana al hardware), escalabilidad (uso de infraestructura cloud y HPC de Azure), disponibilidad y resiliencia (servicio gestionado), y eficiencia en la ejecución de algoritmos híbridos como VQE y QAOA gracias a la combinación de recursos clásicos y cuánticos. Aunque no se presenta una tabla formal de QAs , sí hay una discusión clara de estos atributos como motivación de la arquitectura híbrida. |
| E7 |  | X |  | Aunque los escenarios de arquitectura podrían mapearse a estilos (por ejemplo, integración por servicios, arquitectura orientada a eventos, pipelines de procesamiento), Microsoft no los formula como estilos arquitectónicos formales ni los publica en esos términos; se describen como “arquitecturas de ejemplo” o “enfoques de integración”, no como un catálogo de estilos reutilizables para el diseño de sistemas híbridos. |
| E8 |  | X |  | La documentación no proporciona patrones de diseño arquitectónico formalizados (con definición de problema–contexto–solución–consecuencias); sí ofrece buenas prácticas y guías de diseño para integrar aplicaciones clásicas con Azure Quantum, pero estas no se presentan como patrones reutilizables ni como una “ pattern language ” para arquitecturas híbridas. |
| E9 | X |  |  | Se identifican múltiples componentes estructurales en la arquitectura: aplicación clásica (por ejemplo, API o backend en Azure), QDK y Q# o SDKs de Python, servicio Azure Quantum, workspace , colas de trabajos cuánticos, targets de hardware ( IonQ , Quantinuum , Rigetti, Pasqal ), simuladores clásicos, servicios de almacenamiento y recursos HPC de Azure. La interacción entre estos componentes está descrita en los diagramas y escenarios de arquitectura. |
| E10 | X |  |  | Los materiales de Azure Architecture Center y la documentación de Azure Quantum incluyen artefactos reutilizables : diagramas de referencia, descripciones paso a paso de arquitecturas de integración, recomendaciones de diseño y listas de consideraciones (por ejemplo, selección de enfoque híbrido, elección de target , configuración de recursos). Estos artefactos pueden reutilizarse como plantillas de arquitectura para nuevas soluciones híbridas cuántico–clásicas. |
| Estudio | S22: Microsoft – How Microsoft and Quantinuum achieved reliable quantum computing |  |  |  |
| Elemento | ¿El estudio describe el elemento? | Descripción |  |  |
|  | Si | No | Parcialmente |  |
| E1 |  |  | X | El estudio describe de forma explícita el objetivo tecnológico y experimental de lograr cómputo cuántico confiable mediante corrección de errores, qubits lógicos y técnicas de tolerancia a fallos en colaboración con Quantinuum . Sin embargo, este objetivo se formula desde una perspectiva científico–tecnológica , no como un objetivo arquitectónico formal de software o como una arquitectura de referencia reutilizable para sistemas híbridos. El foco está en demostrar viabilidad y confiabilidad del hardware y del stack cuántico, más que en definir un objetivo arquitectónico normativo. |
| E2 | X |  |  | El documento describe claramente el contexto en el que se desarrolla la solución: integración estrecha entre hardware cuántico de Quantinuum , software de Microsoft Quantum, técnicas avanzadas de corrección de errores y ejecución en entornos controlados. Se contextualiza la solución dentro del ecosistema Azure Quantum y del objetivo estratégico de construir sistemas cuánticos escalables y confiables, especificando supuestos tecnológicos, restricciones físicas y condiciones experimentales. |
| E3 |  | X |  | Se identifican distintos niveles implícitos (hardware físico, qubits lógicos, capas de corrección de errores, control clásico y ejecución de algoritmos), pero estos no se organizan explícitamente como niveles de abstracción arquitectónicos formales . La separación existe a nivel conceptual y técnico, pero no se presenta como una jerarquía arquitectónica estandarizada con vistas bien definidas. |
| E4 |  | X |  | El estudio emplea una terminología técnica consistente, por ejemplo: logical qubits , error correction , fault tolerance , reliable quantum computing , y explica estos conceptos dentro del texto. No obstante, no se proporciona un glosario explícito ni una sección dedicada a normalizar formalmente la terminología como artefacto reutilizable. |
| E5 |  | X |  | Se describen estructuras técnicas que articulan hardware, software y control clásico, especialmente en torno a la implementación de qubits lógicos y mecanismos de corrección de errores. Sin embargo, estas estructuras se presentan como arquitecturas experimentales o técnicas , no como estructuras arquitectónicas de referencia pensadas para guiar el diseño de sistemas híbridos cuántico–clásicos en otros contextos. |
| E6 | X |  |  | La confiabilidad emerge como atributo de calidad central, acompañado de otros como precisión, estabilidad, escalabilidad y tolerancia a fallos. Estos atributos son explícitamente discutidos como motivadores del diseño y como criterios para evaluar el éxito del enfoque presentado, aunque no se sistematicen en un marco formal de atributos de calidad. |
| E7 |  |  | X | El estudio no formula estilos arquitectónicos ni patrones arquitectónicos explícitos. Las decisiones de diseño se justifican desde la física y la ingeniería cuántica, no desde un catálogo de estilos reutilizables propios de la arquitectura de software. |
| E8 |  |  | X | No se identifican patrones de diseño formalizados. Si bien se describen estrategias técnicas recurrentes (por ejemplo, esquemas de corrección de errores), estas no se presentan como patrones de diseño en el sentido clásico de problema–contexto–solución–consecuencias. |
| E9 | X |  |  | Se identifican claramente componentes estructurales como el hardware cuántico de Quantinuum , las capas de control clásico, los mecanismos de corrección de errores, el software de Microsoft Quantum y los entornos de ejecución. Las interacciones entre estos componentes están descritas de manera coherente a lo largo del estudio. |
| E10 |  | X |  | El trabajo aporta conocimiento reutilizable en forma de principios, enfoques técnicos y lecciones aprendidas sobre confiabilidad cuántica. Sin embargo, no se presentan plantillas, modelos arquitectónicos ni artefactos directamente reutilizables como arquitecturas de referencia completas. |
| Estudio | S23: Microsoft – Microsoft Quantum Unlocks the Next Generation of Hybrid Quantum Computing |  |  |  |
| Elemento | ¿El estudio describe el elemento? | Descripción |  |  |
|  | Si | No | Parcialmente |  |
| E1 | X |  |  | El estudio define de manera explícita el objetivo de habilitar una nueva generación de cómputo cuántico híbrido , donde aplicaciones clásicas y cuánticas se integran de forma sistemática mediante Azure Quantum. Aunque el objetivo no se formula estrictamente como una “arquitectura de referencia” en términos académicos, sí se presenta una visión arquitectónica clara orientada a soportar sistemas híbridos cuántico–clásicos. |
| E2 | X |  |  | El documento describe con detalle el contexto de uso: computación híbrida en la nube, integración con Azure, soporte a múltiples proveedores de hardware cuántico y coexistencia con recursos clásicos como HPC, servicios de orquestación y almacenamiento. El contexto tecnológico y organizacional está claramente delimitado. |
| E3 |  | X |  | Se introducen diferentes capas y roles (aplicación, orquestación, ejecución cuántica, hardware), pero estas se presentan de manera implícita y orientada a casos de uso, no como un modelo formal de niveles de abstracción arquitectónicos estandarizados. |
| E4 |  | X |  | El estudio emplea una terminología consistente asociada a la computación híbrida ( hybrid quantum computing , QIR , orchestration , quantum workloads ), pero no define un glosario formal como artefacto arquitectónico independiente. |
| E5 | X |  |  | Se presentan estructuras arquitectónicas claras para la integración de aplicaciones clásicas con servicios cuánticos mediante Azure Quantum. Estas incluyen componentes, flujos de interacción y responsabilidades bien definidas, funcionando como arquitecturas de integración de referencia para sistemas híbridos. |
| E6 | X |  |  | El estudio enfatiza atributos como escalabilidad, rendimiento, interoperabilidad, flexibilidad y eficiencia en la ejecución de algoritmos híbridos. Estos atributos son utilizados explícitamente para justificar la adopción de la arquitectura híbrida propuesta. |
| E7 |  | X |  | Aunque no se nombran formalmente estilos arquitectónicos, las soluciones descritas pueden mapearse a estilos como arquitectura orientada a servicios y pipelines híbridos. Sin embargo, esta categorización no es explícita ni sistematizada por los autores. |
| E8 |  |  | X | No se presentan patrones de diseño formalizados. Las recomendaciones de integración se expresan como guías y buenas prácticas, no como patrones reutilizables con estructura formal. |
| E9 | X |  |  | Se identifican componentes como aplicaciones clásicas, QIR, servicios de Azure Quantum, orquestadores, targets cuánticos y recursos clásicos de Azure. La interacción entre estos componentes está claramente descrita. |
| E10 | X |  |  | El estudio incluye diagramas de arquitectura, escenarios de integración y lineamientos que pueden reutilizarse como base para diseñar nuevas soluciones híbridas cuántico–clásicas, alineándose con el concepto de artefactos reutilizables del modelo base. |
| Estudio | S24: Google – A new hybrid platform for quantum simulation of magnetism |  |  |  |
| Elemento | ¿El estudio describe el elemento? | Descripción |  |  |
|  | Si | No | Parcialmente |  |
| E1 |  |  | X | El estudio presenta el objetivo tecnológico de construir una plataforma híbrida especializada en la simulación cuántica de magnetismo, articulando recursos clásicos y cuánticos para ejecutar algoritmos de física computacional. Sin embargo, este objetivo se plantea desde una perspectiva científica y de capacidades experimentales , no como un objetivo arquitectónico formal orientado a la definición de una arquitectura de referencia reutilizable. |
| E2 | X |  |  | El contexto de aplicación está claramente descrito: desarrollo de una plataforma híbrida que combina hardware cuántico, software tensorial y simulación clásica para problemas complejos de magnetismo. Se delimita el entorno tecnológico (Google Quantum AI, recursos clásicos para preprocesamiento) y el dominio de aplicación (física cuántica y simulación). |
| E3 |  |  | X | Se introducen distintos niveles de facto , la capa física de hardware cuántico, los algoritmos de simulación híbrida y las interfaces de software, pero no se presentan de forma organizada como un modelo formal de niveles de abstracción arquitectónicos con vistas estandarizadas. |
| E4 |  | X |  | Aunque el reporte emplea términos técnicos como hybrid quantum platform , quantum simulation , tensor networks , estos se usan en contexto técnico, y no se formaliza un glosario dedicado a normalizar la terminología como artefacto reutilizable. |
| E5 | X |  |  | El documento describe explícitamente la estructura de la plataforma híbrida: integración de un stack software que orquesta simulación clásica con ejecución en hardware cuántico, interfaces CS–QS, mecanismos de gestión de trabajos y optimización. Estas estructuras están representadas en diagramas funcionales y descripciones técnicas, conformando arquitecturas de referencia para el problema de simulación híbrida. |
| E6 | X |  |  | El reporte discute atributos de calidad técnico–arquitectónicos tales como precisión de simulación, escalabilidad para extender las simulaciones a sistemas mayores, eficiencia en el uso de recursos cuánticos y clásicos, y modularidad de los componentes híbridos. Estos atributos se mencionan como motivadores para adoptar la arquitectura descrita. |
| E7 |  |  | X | La plataforma puede mapearse informalmente a estilos como plataforma híbrida orientada a servicios o pipeline de integración clásico–cuántico , pero el reporte no los formula como estilos arquitectónicos formales , ni presenta un catálogo reutilizable de estilos. |
| E8 |  | X |  | No se identifican patrones de diseño formalizados (problema–contexto–solución–consecuencias). El texto discute enfoques técnicos y recomendaciones, pero no los presenta como patrones reutilizables estandarizados. |
| E9 | X |  |  | La arquitectura híbrida propuesta incluye componentes bien definidos: módulos de preprocesamiento clásico, motor tensorial, orquestador de tareas, interfaces de abstracción para hardware cuántico, y el hardware cuántico en sí. La interacción entre estos componentes se describe tanto en texto como en diagramas. |
| E10 |  |  | X | El documento provee artefactos parcialmente reutilizables tales como diagramas funcionales de la plataforma, frameworks conceptuales para simulación híbrida y descripciones de flujos de integración. No obstante, no se ofrecen plantillas completas ni artefactos diseñados como referencia formal para ser replicados sin adaptación. |

En general, el análisis comparativo de los estudios piloto (S18–S20) y los reportes técnicos industriales (S21–S24) muestra una diferencia clara entre la formalización arquitectónica propuesta en la literatura y la manera en que la industria documenta y comunica sus soluciones híbridas cuántico–clásicas.
Como se muestra en la Figura 19, los resultados indican una orientación clara hacia la descripción operativa de las soluciones híbridas, con un énfasis marcado en los aspectos estructurales y contextuales, y una menor atención a la formalización conceptual propia de las arquitecturas de referencia:
**Figura 19. Mapa de calor entre los elementos E1-E10 y los estudios (S18-S24)**
Uno de los patrones más consistentes observables en la figura es la alta cobertura de los elementos relacionados con el contexto y la estructura de las soluciones (en particular E2, E5, E6 y E9). En todos los estudios se describen de manera explícita el entorno tecnológico y organizacional en el que opera la arquitectura, las estructuras funcionales que articulan los recursos clásicos/cuánticos, y los componentes concretos que conforman el sistema. Este comportamiento sugiere que la prioridad reportada en los estudios analizados se centra en garantizar la comprensión operativa de la solución y su viabilidad técnica, más que en la elaboración de modelos arquitectónicos abstractos.
Por otro lado, los resultados muestran una ausencia sistemática de los elementos asociados con la formalización arquitectónica (E7 y E8). Aunque varias de las propuestas podrían interpretarse implícitamente como arquitecturas orientadas a servicios, plataformas gestionadas o pipelines híbridos, estas categorizaciones no forman parte del discurso técnico de los autores. Este resultado indica que las decisiones arquitectónicas son implícitas y ligadas a la plataforma, dificultando su reutilización o generalización.
Con relación a los elementos E3 y E4, la mayoría de los estudios muestran una cobertura parcial. De acuerdo con la Figura 19, existen descripciones implícitas de capas, roles o niveles técnicos, así como el uso de una terminología consistente dentro de cada ecosistema, pero sin una formalización explícita en términos de niveles de abstracción arquitectónicos o glosarios normalizados. Esto refleja un enfoque pragmático, suficiente para la comunicación dentro de un entorno tecnológico específico, pero limitado para establecer un lenguaje arquitectónico común entre diferentes propuestas.
Asimismo, los objetivos arquitectónicos y elementos reutilizables, representados por E1 y E10, respectivamente, muestran una mayor variabilidad. Algunas propuestas formulan una visión clara orientada a la integración híbrida, mientras que otras se centran exclusivamente en objetivos tecnológicos o experimentales, sin presentar un objetivo arquitectónico en términos de diseño de software. De manera similar, los artefactos reutilizables surgen principalmente en plataformas de carácter generalista, mientras que en estudios de naturaleza experimental su presencia es marginal o inexistente.
Teniendo en cuenta lo anterior, los resultados reportados durante el cruce entre elementos y propuestas presentes en la industria indican que el estudio e implementación de arquitecturas híbridas está orientado hacia la implementación y al desempeño, dejando de lado la sistematización de los elementos propios de una arquitectura de referencia. Este patrón visual refuerza la necesidad de un modelo base que articule de forma explícita objetivos, niveles de abstracción, terminología y mecanismos de reutilización, con el fin de reducir la fragmentación observada y facilitar la, evolución y adopción de arquitecturas híbridas en distintos dominios.

## Análisis de correspondencia

El protocolo de armonización sugiere que cada fase de aplicación incluya un análisis de correspondencia adaptado a las características del dominio de estudio. Al aplicar esta dimensión de análisis se busca disminuir la subjetividad de los resultados obtenidos durante la comparación. Para el contexto de este trabajo de investigación, el análisis se llevó a cabo aplicando el método de análisis de correspondencias, introducido por Jean-Paul Benzécri para explorar y visualizar asociaciones entre filas y columnas de tablas de contingencia categóricas, permitiendo representar simultáneamente ambas dimensiones en un espacio factorial de baja dimensionalidad .
El análisis de correspondencia se construyó a partir de una matriz de contingencia derivada de la codificación de la cobertura de cada elemento en los estudios considerados, donde las categorías “No”, “Parcial” y “Sí” representan distintos niveles de asociación entre estudio y elemento. En el contexto de este trabajo, el análisis sirve para proyectar simultáneamente los elementos arquitectónicos y los perfiles agregados de los estudios en un espacio común, de modo que su representación gráfica refleje la similitud en los patrones de cobertura para cada elemento que fue objeto de análisis.
El resultado del análisis, interpretado a la luz de las figuras de cobertura por elemento (ver la Figura 20) y de perfil promedio (ver la Figura 21), muestra que la mayor parte de la inercia del sistema está explicada por una dimensión principal que separa claramente los elementos con alta aplicación operativa de aquellos asociados a formalización arquitectónica. En particular, los elementos E2 (contexto de la arquitectura), E5 (estructuras arquitectónicas), E6 (atributos de calidad) y E9 (componentes estructurales) se agrupan consistentemente en la región del espacio factorial asociada con altas frecuencias de cobertura positiva. Esta concentración confirma que tanto la literatura académica como los estudios industriales priorizan la descripción del entorno tecnológico y los componentes concretos de las soluciones híbridas.
La  Figura 20 muestra la cobertura de los estudios por elemento, agregando los resultados de los 24 estudios analizados (S1–S24), donde cada barra representa un elemento del modelo base (E1–E10) y se descompone según el número de estudios que lo abordan de forma completa, parcial o inexistente. En general, la Figura 20 muestra que los elementos E2, E5, E6 y E9 concentran la mayor cantidad de respuestas afirmativas, lo que indica una fuerte alineación entre estos elementos y el conjunto de estudios. Por el contrario, E1, E7, E8 y E10 presentan una proporción elevada de coberturas parciales o negativas, lo que sugiere una débil asociación con las prácticas predominantes reportadas en la literatura y en los estudios industriales.
**Figura 20. Cobertura de estudios por elemento.**
La información sintetizada en la Figura 20 ayuda a identificar patrones globales de presencia y ausencia, pero no ofrece una medida relativa del grado de aplicación de cada elemento. Con el propósito de extender el análisis, se introduce la Figura 21, que presenta el perfil promedio de cobertura por elemento, utilizando una escala normalizada donde “No” equivale a 0, “Parcial” a 0.5 y “Sí” a 1. Este perfil representa el promedio de aplicación de cada elemento considerando todos los estudios, y puede interpretarse como un vector resumen del comportamiento global del corpus analizado. Desde la perspectiva del análisis de correspondencia, el perfil promedio funciona como un punto de referencia que sirve para evaluar la cercanía o lejanía relativa de cada elemento respecto a su nivel de aplicación conceptual.
**Figura 21. Perfil promedio de cobertura por elemento.**
- Con relación al eje E2: El perfil promedio alcanza el valor más alto dentro de la escala normalizada, lo que indica que el contexto de la arquitectura es el elemento con mayor grado de aplicación en los estudios analizados. Este comportamiento sugiere que existe un consenso implícito entre la academia y la industria sobre la necesidad de situar la arquitectura dentro de un dominio, un entorno tecnológico y un escenario de uso claramente definidos.
- Con relación a los ejes E5 y E6: Se observa un nivel medio a alto de cobertura promedio, lo que refleja una atención sostenida en las estructuras arquitectónicas y a los atributos de calidad. Este patrón indica que una parte significativa de los estudios describe componentes, relaciones y decisiones estructurales, así como criterios asociados al desempeño, la escalabilidad o la confiabilidad. La posición intermedia de estos ejes muestra que, aunque los elementos están presentes de forma recurrente, su grado de formalización varía entre estudios.
- Con relación a los ejes E3 y E4: El perfil promedio se sitúa en un rango medio, lo que sugiere una cobertura parcial de los niveles de abstracción y de la terminología arquitectónica. Esta ubicación indica que muchos estudios introducen distinciones conceptuales o emplean vocabularios relativamente estables, pero sin consolidarlos como modelos explícitos de abstracción ni como glosarios formales. En términos del espacio conceptual, estos ejes aparecen a una distancia moderada del nivel máximo de aplicación, reflejando un área donde existe reconocimiento del problema, pero aún falta estandarización.
- Con relación a los ejes E7 y E8: El perfil promedio muestra los valores más bajos de la figura, lo que evidencia una aplicación limitada de estilos y patrones arquitectónicos declarados de forma explícita. Esta posición indica que, aunque las soluciones analizadas pueden incorporar decisiones recurrentes de diseño, estas no se formulan como estilos o patrones reutilizables. Desde el punto de vista del análisis de correspondencia, estos ejes se encuentran alejados del polo de alta aplicación, marcando un vacío conceptual en la literatura y en la práctica industrial.
- Con relación a los ejes E1 y E10: Se observa un comportamiento intermedio que refleja una presencia irregular del objetivo arquitectónico y de los elementos reutilizables. La ubicación de estos ejes sugiere que algunos estudios formulan su propósito con claridad o aportan artefactos que pueden ser reutilizados, mientras que otros los omiten o los tratan de manera implícita.
Teniendo en cuenta lo anterior, el análisis de la Figura 21 muestra cómo los diferentes ejes se distribuyen a distintas distancias del nivel máximo de aplicación, configurando un perfil que sintetiza fortalezas y vacíos del estado actual del conocimiento. Este resultado refuerza respalda la necesidad de un modelo base que articule de forma coherente objetivos, estructuras, atributos de calidad y mecanismos de reutilización.
Para lograr una visión coherente y comparable del estado del arte y de las propuestas industriales analizadas, la siguiente sección presenta los resultados obtenidos luego de realizar un proceso de integración que buscó consolidar, alinear y sintetizar los elementos identificados en los distintos estudios, estableciendo una base común capaz de agrupar de manera sistemática sus convergencias, diferencias y niveles de aplicación.

## Método de integración

Para llevar a cabo la integración se aplicó el formalismo propuesto en , que busca obtener los elementos finales que representan la base del conocimiento que conforma la propuesta. De acuerdo con , la integración requiere llevar a cabo las cinco actividades: (i) diseñar la integración, (ii) establecer un criterio de integración, (iii) llevar a cabo la integración, (iv) analizar los resultados y (v) presentar el modelo integrado.

## Diseñar la integración

La integración toma como base los elementos los resultados obtenidos durante la etapa de comparación.

## Establecer un criterio de integración

En la Tabla 37 se presentan los criterios utilizados para llevar a cabo la integración de actividades. Estos criterios (propuestos en ) clasifican las relaciones entre las prácticas propuestas en diferentes modelos, identificando los casos en los que existe complementariedad o unión entre elementos, en los que una práctica es descartada por no resultar pertinente para el modelo integrado, y aquellos en los que no se identifican correspondencias. Adicionalmente, se incorporó el criterio de complejidad, que hace referencia al nivel de detalle con el que se describe cada elemento:
**Tabla 37. Plantilla de términos de integración (tomado de ).**

### Tabla extraída 37

| Término | Descripción |
| --- | --- |
| Integración, Complemento y Unión | Cuando los elementos en un elemento B no pertenecen a un elemento A. |
| Rechazado | Cuando la descripción de un elemento presente en un modelo A no es considerada para su integración en un elemento presente en un modelo B. |
| No está contenido | Cuando no existe relación entre las descripciones de los elementos entre los dos modelos |
| Complejidad | Hace referencia a la información descrita en un elemento; es decir, cuáles pueden ser descompuestas en varias: actividades, tareas, roles, etc. La cantidad de elementos y sus relaciones determinan el nivel de granularidad de una práctica/modelo. |

Posteriormente, fue necesario definir un criterio de correspondencia que garantice que los elementos unificados sean documentados de forma consistente, facilitando su análisis posterior y trazabilidad respecto a los modelos originales. La  Tabla 38 presenta la plantilla de aspectos definida en el método de integración para el análisis de correspondencia entre las actividades resultantes:
**Tabla 38. Plantilla que describe un elemento unificado (tomado de ).**

### Tabla extraída 38

| Id | Tipo de correspondencia | Método |
| --- | --- | --- |
| 1 | Si el elemento definido en el Modelo A satisface completamente el mismo elemento definido en el modelo B. | El elemento se mantiene y se registran los resultados de la acción tomada. |
| 2 | Si el elemento definido en el Modelo A satisface parcialmente el mismo elemento definido en el modelo B. | El elemento se ajusta incorporando los aspectos que no están presentes en A. |
| 3 | Si el elemento definido en el Modelo A no satisface completamente el mismo elemento definido en el modelo B. | El elemento definido en A incluye los aspectos descritos en B. |
| Acrónimos. Id: Identificador. |  |  |


## Llevar a cabo la integración

La integración implicó evaluar (para cada elemento identificado en las etapas previas), el grado en que las prácticas observadas en los estudios analizados satisfacen (parcial o totalmente), su definición conceptual. En este sentido, la Tabla 39 debe interpretarse como un artefacto de trazabilidad metodológica, en el que se registra la relación entre los hallazgos empíricos y las decisiones de diseño adoptadas durante la construcción del modelo, donde cada fila representa un elemento del modelo de referencia que resume el criterio de integración aplicado, el tipo de correspondencia identificado y el estado final del elemento dentro del modelo integrado.
Siguiendo los lineamientos definidos en la Tabla 37 y en la Tabla 38, se definió un total de tres posibles estados para los elementos integrados:
- Un elemento se considera mantenido si su definición conceptual aborda las prácticas observadas en los estudios y se incorpora al modelo integrado sin modificaciones de fondo.
- Un elemento se considera ajustado si su definición original requiere refinar, precisar o reorganizar su alcance conceptual para alinearlo con la evidencia empírica observada.
- Un elemento se considera extendido cuando no hace parte de las prácticas existentes, haciendo necesaria su incorporación explícita como un aporte estructural adicional del modelo.
Con relación al tipo de correspondencia, este utiliza una escala ordinal de valores enteros que refleja el grado de alineación entre las prácticas observadas y el elemento del modelo de referencia, donde: el valor 1 indica que las prácticas analizadas satisfacen completamente el elemento, por lo que este se mantiene sin modificaciones; el valor 2 indica que las prácticas satisfacen parcialmente el elemento, lo que implica que su definición fue ajustada durante el proceso de integración; y el valor 3 indica que las prácticas existentes no satisfacen el elemento y fueron incorporadas como una extensión del modelo integrado:
**Tabla 39. Resultados obtenidos durante la integración de elementos.**

### Tabla extraída 39

| Id | Elemento | Criterio de integración aplicado | Tipo de correspondencia | Descripción de la integración |
| --- | --- | --- | --- | --- |
| E1 | Objetivo de la arquitectura | Integración / Complemento | 2 | El objetivo arquitectónico aparece de forma implícita o tecnológica en varios estudios, pero rara vez formulado como objetivo normativo. El elemento se mantiene ajustando su definición para cubrir ambas perspectivas. |
| E2 | Contexto de la arquitectura | Integración / Unión | 1 | El contexto es descrito de manera consistente en la mayoría de los estudios, incluyendo dominio, entorno tecnológico y condiciones de uso, por lo que se mantiene sin modificaciones. |
| E3 | Nivel de abstracción | Integración / Complemento | 2 | Los niveles de abstracción se identifican de forma implícita en varios estudios, pero no se formalizan como vistas o capas arquitectónicas. El elemento se integra ajustando su alcance. |
| E4 | Glosario y terminología | Integración / Complemento | 2 | Existe una terminología técnica relativamente estable, aunque no formalizada mediante glosarios. El elemento se integra permitiendo distintos grados de formalización terminológica. |
| E5 | Estructuras arquitectónicas | Integración / Unión | 1 | Las estructuras arquitectónicas y sus relaciones están claramente descritas en la mayoría de las propuestas analizadas. El elemento se mantiene sin cambios. |
| E6 | Atributos de calidad | Integración / Unión | 1 | Los atributos de calidad actúan como motivadores explícitos de las decisiones arquitectónicas en la mayor parte de los estudios. El elemento se mantiene sin modificaciones. |
| E7 | Estilos arquitectónicos | Integración / Complemento | 2 | Los estilos aparecen de manera implícita o inferida, pero no formalizada. El elemento se integra redefiniendo su alcance para admitir distintos niveles de explicitación. |
| E8 | Patrones de diseño | Integración / Complemento | 3 | La mayoría de los estudios no define patrones de diseño de forma explícita. El elemento se incorpora como una adición necesaria para fortalecer la reutilización y sistematización. |
| E9 | Componentes estructurales | Integración / Unión | 1 | Los componentes y sus interacciones están claramente identificados en prácticamente todos los estudios analizados. El elemento se mantiene sin cambios. |
| E10 | Elementos reutilizables | Integración / Complemento | 2 | Se identifican artefactos reutilizables parciales, como diagramas o guías, pero no modelos formales completos. El elemento se integra ajustando su definición para capturar distintos niveles de reutilización. |
| Acrónimos. Id: Identificador. |  |  |  |  |


## Analizar los resultados de la integración

De acuerdo con la Tabla 39, se observa que los elementos mantenidos (E2, E5, E6 y E9) reflejan áreas de consenso en la literatura y la industria, particularmente en aspectos relacionados con el contexto, las estructuras arquitectónicas, los atributos de calidad y los componentes estructurales, lo que evidencia una base conceptual relativamente consolidada en estos tópicos. Por otro lado, los elementos ajustados (E1, E3, E4, E7, E10) revelan dimensiones donde existe una cobertura empírica amplia pero fragmentada. En estos casos, la integración sirve para transformar descripciones implícitas o dispersas en definiciones arquitectónicas explícitas, fortaleciendo la coherencia interna del modelo. Finalmente, el elemento extendido (E8) hace manifiesta una brecha estructural en la literatura analizada, cuya incorporación responde a una necesidad metodológica del modelo propuesto más que a prácticas consolidadas existentes en las iniciativas planteadas por la industria.

## Presentar el modelo integrado

Como resultado del proceso de integración, se obtuvo un modelo integrado que consolida los elementos identificados durante la homogeneización y los ajusta con la evidencia empírica proveniente de los estudios analizados.
Las extensiones y ajustes incorporados en el modelo integrado se fundamentan directamente en los resultados obtenidos durante la fase de comparación y son presentados en la Tabla 40:
**Tabla 40. Modelo integrado que incorpora ajustes y/o extensiones.**

### Tabla extraída 40

| Id | Elemento | Definición original (homogeneización) | Nueva definición integrada | Estudios que motivan el ajuste o extensión |
| --- | --- | --- | --- | --- |
| E1 | Objetivo de la arquitectura | El objetivo de una arquitectura de referencia define la razón de ser del artefacto arquitectónico. Este propósito puede orientarse a la estandarización de prácticas dentro de un dominio, el soporte a la interoperabilidad entre sistemas heterogéneos, la guía para el diseño de soluciones específicas, la alineación organizacional, la consolidación del conocimiento arquitectónico o la reutilización sistemática. El objetivo condiciona el alcance, los mecanismos de abstracción, los estilos y estructuras permitidas, las decisiones de diseño y el nivel de formalización requerido. | El objetivo de la arquitectura de referencia incorpora explícitamente la distinción entre objetivos tecnológicos, experimentales y objetivos arquitectónicos normativos. En el contexto de arquitecturas híbridas cuántico–clásicas, el objetivo se redefine para incluir la guía sistemática al diseño de soluciones, la interoperabilidad entre componentes clásicos y cuánticos, y la reutilización arquitectónica, superando formulaciones implícitas centradas únicamente en capacidades tecnológicas. | S13, S14, S15, S16, S23 |
| E2 | Contexto de la arquitectura | El contexto define los límites dentro de los cuales se aplica la arquitectura de referencia, incluyendo el dominio de negocio, el entorno tecnológico, los actores involucrados, restricciones organizacionales, dependencias externas, regulaciones aplicables y características operacionales. Un contexto bien definido permite que la arquitectura capture los factores que influyen en la adopción, adaptación o instanciación del modelo, y garantiza que los elementos propuestos sean pertinentes, aplicables y coherentes con la realidad del dominio. | El contexto de la arquitectura se mantiene, incorporando de forma explícita la coexistencia de entornos clásicos y cuánticos, la dependencia de proveedores de hardware cuántico y la variabilidad tecnológica propia de plataformas híbridas. La definición original se conserva, ampliando su aplicación al dominio cuántico–clásico sin modificar su estructura conceptual. | S18, S19, S20, S21, S23, S24 |
| E3 | Nivel de abstracción | Los niveles de abstracción determinan el grado de detalle con el que se describen los elementos arquitectónicos. Una arquitectura de referencia puede ser altamente abstracta, semi-concreta o concreta. Este elemento es esencial porque permite distinguir entre visión conceptual, modelo de referencia y arquitectura de referencia, y guía la transición hacia implementaciones específicas. | El nivel de abstracción se redefine para establecer explícitamente niveles diferenciados en arquitecturas híbridas, incluyendo una capa conceptual, una capa arquitectónica de integración y una capa operativa de ejecución. Esta redefinición permite mapear de manera sistemática conceptos, estructuras y mecanismos hacia plataformas concretas y soluciones instanciadas. | S3, S7, S11, S12, S14, S15 |
| E4 | Glosario y terminología | Un glosario formal establece un vocabulario controlado que evita ambigüedades semánticas, facilita la comunicación entre stakeholders y estandariza conceptos fundamentales. Incluye definiciones de conceptos, relaciones, restricciones y taxonomías asociadas. | El glosario y la terminología se ajustan para admitir distintos grados de formalización, permitiendo la coexistencia de vocabularios específicos de plataformas cuánticas con un núcleo común de conceptos arquitectónicos. La definición se amplía para reconocer la normalización de facto observada en la práctica industrial. | S5, S8, S9, S16, S21 |
| E5 | Estructuras arquitectónicas | Las estructuras representan la organización del sistema o dominio en términos de vistas, capas, módulos, componentes funcionales, relaciones, dependencias y flujos de interacción. Proporcionan la base para analizar cohesión, acoplamiento y responsabilidades. | La definición original se mantiene, incorporando explícitamente estructuras de integración híbrida que combinan componentes clásicos, servicios de orquestación y recursos cuánticos. Las estructuras observadas confirman la validez del elemento sin requerir ajustes conceptuales. | S18, S19, S20, S21, S23, S24 |
| E6 | Atributos de calidad | Los atributos de calidad establecen los criterios que determinan si un sistema cumple adecuadamente su propósito, incluyendo desempeño, escalabilidad, seguridad, disponibilidad, mantenibilidad y resiliencia. | El elemento se mantiene, integrando atributos específicos del dominio híbrido como eficiencia de ejecución híbrida, reducción de latencia cuántico–clásica y confiabilidad. Estos atributos aparecen de forma consistente como motivadores de decisiones arquitectónicas. | S18, S21, S22, S23, S24 |
| E7 | Estilos y patrones arquitectónicos | Los estilos arquitectónicos proporcionan principios globales de organización estructural, mientras que los patrones proveen soluciones recurrentes a problemas comunes de diseño dentro del dominio. | El elemento se ajusta para reconocer que, en el dominio cuántico–clásico, los estilos arquitectónicos emergen de manera implícita a partir de prácticas recurrentes, más que como estilos formalizados. La definición se amplía para admitir estilos híbridos inferidos y en evolución. | S4, S7, S11, S17, S21, S23 |
| E8 | Patrones de diseño | Los patrones de diseño definen plantillas reutilizables para resolver problemas específicos en el diseño de componentes e interacciones internas. | El elemento se extiende para reflejar la ausencia de patrones de diseño cuánticos formalizados. La nueva definición establece este componente como un área abierta del modelo de referencia, orientada a la sistematización futura de soluciones recurrentes en arquitecturas híbridas. | S9, S10, S19, S20 |
| E9 | Componentes estructurales | Incluyen la definición y especificación de módulos, subsistemas, servicios, interfaces, conectores y mecanismos de integración, esenciales para la transición hacia instanciaciones concretas. | La definición se mantiene, incorporando explícitamente componentes híbridos como orquestadores, runtimes cuánticos, SDKs y mecanismos de acoplamiento clásico–cuántico. La estructura conceptual original se preserva. | S18, S19, S20, S21, S23, S24 |
| E10 | Elementos reutilizables | Comprenden plantillas, artefactos, guías, lineamientos y modelos que pueden aplicarse de manera recurrente para promover estandarización y consistencia. | El elemento se ajusta para ampliar el concepto de reutilización, incluyendo artefactos parciales como arquitecturas de ejemplo, diagramas de integración y guías operativas, reflejando los distintos niveles de madurez observados en la práctica industrial. | S13, S14, S15, S16, S21, S23 |


## Actividad complementaria: clasificar los elementos bajo una estructura conceptual común

Con el fin de aumentar la claridad interpretativa del modelo integrado y reforzar su coherencia conceptual, se desarrolló una actividad complementaria orientada a agrupar y clasificar los elementos resultantes de la armonización dentro de un conjunto reducido de dimensiones. En el contexto de una arquitectura de referencia, las dimensiones ayudan a organizar el conocimiento en ejes estructurales que agrupan elementos conceptualmente relacionados, facilitando su comunicación, trazabilidad y aplicación. Esta clasificación responde a la necesidad de describir una arquitectura mediante múltiples vistas alineadas con los objetivos de negocio de una organización, conforme al enfoque de los estándares internacionales sobre descripción arquitectónica . De acuerdo con lo anterior, el propósito de esta actividad fue establecer un orden semántico entre los elementos, estructurar el modelo bajo principios internacionalmente reconocidos y habilitar su evaluación, extensión o adaptación en escenarios organizacionales con diferentes características.

## Dimensión en el contexto de una arquitectura de referencia

De acuerdo con , una dimensión puede definirse como un eje conceptual de organización que agrupa elementos relacionados según su función, propósito o rol dentro de un modelo. En el contexto de arquitecturas de referencia, las dimensiones ayudan a estructurar el conocimiento arquitectónico en categorías coherentes que facilitan su interpretación, análisis y comunicación. Esta noción de organización conceptual está alineada con la forma en que los modelos arquitectónicos abstraen y estructuran la complejidad de los sistemas.
En la práctica, la importancia de definir dimensiones radica en varios motivos: (i) en su capacidad para reducir la complejidad conceptual, al agrupar elementos individuales bajo ejes significativos que actúan como vistas de alto nivel; y (ii) las dimensiones facilitan la trazabilidad y el análisis sistemático, al permitir estudiar cómo los distintos elementos contribuyen a un mismo propósito arquitectónico o responden a necesidades similares. En particular, este principio de organización por vistas y necesidades se encuentra establecido en la norma ISO/IEC/IEEE 42010:2022 , donde una arquitectura debe describirse mediante múltiples vistas, cada una orientada a un conjunto específico de preocupaciones de las partes interesadas. Desde el punto de vista normativo, aunque la norma no utiliza explícitamente el término “dimensión”, su énfasis en la separación de preocupaciones, la definición de vistas y la organización estructurada de los elementos arquitectónicos proporciona el fundamento para la adopción de dimensiones como mecanismo de clasificación conceptual dentro del modelo. En el marco de esta investigación, las dimensiones funcionan como un nivel de abstracción adicional que busca integrar la literatura académica y técnica en un marco común. .

## Proceso aplicado para definir las dimensiones

El proceso de definición de dimensiones se llevó a cabo mediante un análisis cualitativo sistemático, guiado por el protocolo propuesto en , el cual se fundamenta en dos técnicas de codificación:
- Codificación abierta: Que busca examinar los datos sin partir de supuestos previos, identificando conceptos, ideas o términos recurrentes que revelan relaciones temáticas relevantes. Esta etapa permite fragmentar la información en unidades significativas y asignarles códigos iniciales, facilitando la detección de similitudes, redundancias o divergencias entre los elementos (E1-E10).
- Codificación axial: Que sirve para reorganizar y reagrupar los códigos obtenidos en la fase anterior estableciendo conexiones entre ellos. Esta etapa implica identificar relaciones causales, jerárquicas o funcionales entre los conceptos que articulen los diferentes elementos dentro de un marco común.
A diferencia de los enfoques puramente deductivos, este método logra que las categorías analíticas emerjan directamente de los datos, garantizando que las dimensiones resultantes estén ancladas en la evidencia empírica obtenida durante el estudio. De acuerdo con , el proceso para obtener las dimensiones analíticas de interés se compone por tres actividades, que serán detalladas en lo que resta de la sección:
1. Identificación y fragmentación sistemática de los datos relevantes,
1. Codificación abierta: Asignación de códigos iniciales que representen conceptos recurrentes y comparación constante entre códigos para identificar similitudes/variaciones semánticas.
1. Codificación axial: Agrupación de códigos relacionados en categorías de mayor nivel, y establecimiento de relaciones entre las categorías para conformar dimensiones analíticas coherentes.

## Identificación y fragmentación semántica de los datos relevantes

Con relación al eje de análisis semántico del método, la unidad de análisis se definió a partir de la descripción conceptual de cada elemento integrado (E1–E10), utilizando como base los resultados obtenidos durante la homogeneización, ya que allí se explicitan su propósito, alcance, mecanismos y criterios de aplicación. A partir de cada definición se extrajeron unidades de significado, entendidas como fragmentos textuales que expresan una intención arquitectónica clara, por ejemplo: “razón de ser del artefacto”, “límites de aplicación”, “vistas/capas”, “vocabulario controlado”, “estructuras”, “atributos de calidad”, “patrones”, “componentes” y “reutilización”.
Los resultados obtenidos luego de realizar el análisis semántico de cada elemento se presentan en la Tabla 41:
**Tabla 41. Artefacto de preparación: unidades de significado por elemento.**

### Tabla extraída 41

| Elemento | Unidades de significado extraídas de la definición (homogeneización) |
| --- | --- |
| E1 | Razón de ser del artefacto, propósito normativo o de guía, condiciona alcance y formalización |
| E2 | Límites de aplicación, dominio y entorno tecnológico, actores y restricciones, dependencias y regulaciones |
| E3 | Grado de detalle, transición de lo conceptual a lo concreto, distinción RA vs modelo/visión |
| E4 | Vocabulario controlado, evitar ambigüedad, estandarización semántica, soporte a comparación y documentación |
| E5 | Vistas, capas, módulos, relaciones y flujos, estructuras lógicas/físicas, base para analizar cohesión y acoplamiento |
| E6 | Requerimientos no funcionales, drivers de decisiones, criterios de evaluación, desempeño, seguridad, escalabilidad |
| E7 | Principios de organización global, restricciones estructurales, estilos y patrones arquitectónicos, coherencia |
| E8 | Plantillas reutilizables a nivel de diseño interno, extensibilidad y reducción de complejidad, patrones GoF |
| E9 | Módulos, subsistemas, servicios, interfaces y conectores, mecanismos de integración, opciones de despliegue |
| E10 | Plantillas, guías, fragmentos y configuraciones reutilizables, estandarización y consistencia entre instancias |


## Codificación abierta

La codificación abierta se aplicó sobre las unidades de significado obtenidas en la Tabla 41 con el objetivo de etiquetar de forma explícita las ideas recurrentes sin imponer categorías previas. Este paso sigue el enfoque de codificación inicial y de construcción de códigos propuesto en , el cual espera que los códigos deben emerger directamente del contenido analizado, evitando la introducción de estructuras conceptuales preconcebidas. Para lograrlo, cada elemento fue examinado de manera sistemática, fragmentando el texto en expresiones conceptualmente relevantes y asignando a cada una de ellas una etiqueta que capture su intención arquitectónica. Luego de aplicar este proceso, se obtuvo un conjunto de códigos abiertos que representan los conceptos arquitectónicos más recurrentes y significativos identificados a lo largo de todos los elementos.
En general, estos códigos reflejan preocupaciones relacionadas con propósito, contexto, abstracción, estructura, calidad, reutilización e integración, y constituyen el primer nivel de abstracción del análisis cualitativo. El resultado de esta etapa se presenta en la Tabla 42, donde se muestran los códigos abiertos asociados a cada elemento:
**Tabla 42. Artefacto de codificación abierta: códigos iniciales por elemento.**

### Tabla extraída 42

| Elemento | Códigos abiertos resultantes |
| --- | --- |
| E1 | propósito arquitectónico, alcance normativo, drivers de formalización |
| E2 | delimitación de contexto, restricciones y dependencias, aplicabilidad situacional |
| E3 | granularidad y detalle, transición a instanciación, estratos de abstracción |
| E4 | control semántico, normalización terminológica, soporte a trazabilidad comparativa |
| E5 | organización estructural, vistas y relaciones, flujos y responsabilidades |
| E6 | drivers de calidad, criterios de evaluación, trade-offs de RNF |
| E7 | organización global por estilo, restricciones de composición, coherencia arquitectónica |
| E8 | plantillas de diseño interno, reuso a nivel componente, control de complejidad |
| E9 | componentes e interfaces, conectores e integración, modularidad y despliegue |
| E10 | artefactos reutilizables, estandarización práctica, consistencia entre instancias |

Por otro lado, la Tabla 43 presenta el catálogo consolidado de códigos obtenidos durante la codificación abierta, junto con su definición operacional y los elementos en los que cada código aparece. Este artefacto cumple un doble propósito dentro del proceso metodológico: en primer lugar, funciona como un mecanismo de control semántico que asegura la consistencia en el uso de los códigos a lo largo del análisis posterior; y en segundo lugar, establece una base de trazabilidad entre las definiciones originales de los elementos y las categorías analíticas que fueron objeto de análisis durante la etapa de codificación axial, facilitando la identificación de relaciones, solapamientos y agrupaciones conceptuales en las fases subsiguientes del proceso:
**Tabla 43. Catálogo de códigos (artefacto de control semántico).**

### Tabla extraída 43

| Código | Definición operacional | Elementos donde aparece |
| --- | --- | --- |
| propósito arquitectónico | Declara la razón de ser y el “para qué” del modelo | E1 |
| delimitación de contexto | Define límites, supuestos, actores, restricciones y entorno | E2 |
| estratos de abstracción | Diferencia niveles de detalle y guía el salto a instancias | E3 |
| normalización terminológica | Controla significados para evitar ambigüedad y sostener comparación | E4 |
| organización estructural | Describe vistas, componentes, relaciones, flujos y responsabilidades | E5, E9 |
| drivers de calidad | Usa RNF como motivadores y criterios de evaluación | E6 |
| coherencia por estilo | Impone reglas globales de composición y consistencia estructural | E7 |
| reuso por patrones | Habilita reutilización mediante plantillas y soluciones recurrentes | E8, E10 |
| integración y conectores | Explicita mecanismos de interacción e integración | E9 |
| estandarización práctica | Reutilización de guías, fragmentos y plantillas para consistencia | E10 |


## Codificación axial y construcción de dimensiones

La codificación axial facilita la reorganización de los códigos abiertos, identificando relaciones funcionales y jerárquicas entre ellos con el fin de formar categorías más abstractas. Como primer resultado de esta etapa, se realizó un análisis de coocurrencia y afinidad semántica entre los códigos abiertos, examinando cuales códigos aparecían de forma recurrente asociados a los mismos elementos. Este análisis permitió identificar patrones de agrupación natural entre los códigos, evidenciando que ciertos conjuntos de conceptos compartían aspectos comunes. La Tabla 44 presenta el análisis de agrupación preliminar, mostrando los códigos abiertos, sus relaciones conceptuales y las justificaciones que sustentan su asociación:
**Tabla 44. Análisis de coocurrencia y afinidad semántica entre códigos abiertos.**

### Tabla extraída 44

| Código abierto | Descripción sintética | Afinidad semántica | Justificación |
| --- | --- | --- | --- |
| Propósito arquitectónico | Razón de ser del modelo | Propósito y alcance | Define la intención global del modelo |
| Alcance del modelo | Límites conceptuales | Propósito y alcance | Delimita el dominio de validez |
| Contexto de aplicación | Entorno tecnológico y organizacional | Propósito y alcance | Condiciona la aplicabilidad |
| Terminología común | Lenguaje compartido | Propósito y alcance | Garantiza coherencia conceptual |
| Estructuras | Vistas y capas | Organización estructural | Define la composición del sistema |
| Componentes | Módulos y servicios | Organización estructural | Materializa la arquitectura |
| Reutilización | Artefactos reutilizables | Organización estructural | Facilita estandarización |
| Atributos de calidad | Desempeño, escalabilidad | Diseño y evaluación | Orienta decisiones arquitectónicas |
| Estilos arquitectónicos | Principios estructurales | Diseño y evaluación | Restringe y guía la organización |
| Patrones de diseño | Soluciones recurrentes | Diseño y evaluación | Facilita implementación consistente |

A partir de los patrones identificados en el análisis de afinidad, se procedió a definir las categorías axiales que capturan el significado común de cada conjunto de códigos relacionados. Estas categorías representan un nivel intermedio de abstracción que explica cómo los conceptos individuales convergen en preocupaciones arquitectónicas más amplias, formalizando la transición desde códigos dispersos hacia una estructura conceptual organizada. Los resultados de este proceso se presentan en la Tabla 45:
**Tabla 45. Categorías axiales identificadas.**

### Tabla extraída 45

| Categoría axial | Códigos asociados | Descripción |
| --- | --- | --- |
| Marco conceptual | Propósito, alcance, contexto, terminología | Define el significado y los límites del modelo |
| Organización estructural | Estructuras, componentes, reutilización | Describe la materialización y organización |
| Principios de diseño y calidad | Atributos, estilos, patrones | Guía el diseño y la evaluación |

Posteriormente, las categorías axiales fueron agrupadas en ejes conceptuales de mayor nivel. Este proceso se apoyó en la base teórica presentada en la Tabla 27, lo que permitió consolidar las categorías en dimensiones mutuamente distinguibles. El resultado de esta clasificación se presenta en la Tabla 46:
**Tabla 46. Relación entre categorías axiales y dimensiones.**

### Tabla extraída 46

| Dimensión | Identificador | Categorías integradas | Justificación | Descripción |
| --- | --- | --- | --- | --- |
| Conceptual | DC | Marco conceptual | Define propósito, alcance y significado | Agrupa los elementos que definen el propósito, el alcance, el contexto de aplicación y el vocabulario común de la arquitectura de referencia. Esta dimensión establece el marco conceptual que delimita qué es la arquitectura, para qué se utiliza y bajo qué supuestos y límites se aplica. |
| Organizacional | DO | Organización estructural | Define estructura y materialización | Reúne los elementos que describen cómo se materializa la arquitectura en términos de estructuras, componentes y mecanismos de reutilización. Esta dimensión permite comprender la organización interna del modelo, las relaciones entre sus partes y su capacidad de ser instanciado en soluciones concretas. |
| Diseño y calidad | DCD | Principios de diseño y calidad | Define criterios de diseño y evaluación | Integra los elementos que orientan las decisiones de diseño arquitectónico y los criterios de evaluación del modelo. Esta dimensión aborda los atributos de calidad, estilos y patrones que guían la construcción, evaluación y evolución de la arquitectura de referencia. |

Finalmente, las dimensiones resultantes fueron asociadas explícitamente con los elementos del modelo de referencia, garantizando la trazabilidad entre las definiciones originales obtenidas durante la integración y la estructura conceptual final del modelo integrado, como se muestra en la Tabla 47:
**Tabla 47. Relación entre dimensiones y elementos.**

### Tabla extraída 47

| Dimensión | Elementos asociados | Relación entre la dimensión y cada elemento |
| --- | --- | --- |
| Conceptual (DC) | E1, E2, E3, E4 | E1 (Objetivo de la arquitectura): Define la razón de ser del modelo de referencia y establece el propósito normativo y conceptual que orienta el alcance del modelo integrado. A partir de los estudios analizados, este elemento fue ajustado para incorporar tanto objetivos explícitos de estandarización como objetivos implícitos de tipo tecnológico o experimental . E2 (Contexto de la arquitectura): Delimita el dominio de aplicación, los supuestos tecnológicos y las restricciones organizacionales bajo las cuales la arquitectura es válida. La evidencia empírica mostró una alta convergencia en la descripción del contexto, por lo que este elemento se mantiene sin modificaciones, consolidando un marco conceptual común para interpretar la arquitectura de referencia. E3 (Nivel de abstracción): Permite organizar la representación arquitectónica en distintos grados de detalle, desde una visión conceptual hasta descripciones cercanas a la implementación. A partir de la comparación, este elemento fue ajustado para capturar niveles de abstracción implícitos presentes en los estudios, aunque no formalizados como vistas arquitectónicas explícitas. E4 (Glosario y terminología): Proporciona la base semántica que asegura coherencia conceptual y evita ambigüedades en la interpretación del modelo. La integración amplió este elemento para admitir distintos niveles de formalización terminológica, incorporando tanto glosarios explícitos como vocabularios normalizados de facto . |
| Organizacional (DO) | E5, E9, E10 | E5 (Estructuras arquitectónicas): Representa la organización del sistema en términos de vistas, capas, módulos y relaciones. Este elemento se mantiene sin ajustes, ya que la mayoría de los estudios describen de manera explícita estructuras arquitectónicas claras que materializan el modelo conceptual en configuraciones organizadas. E9 (Componentes estructurales): Define los elementos constructivos de la arquitectura, tales como módulos, servicios, interfaces y conectores. La evidencia mostró una alta consistencia en la identificación de componentes, por lo que este elemento se mantiene como un pilar organizacional que facilita la transición hacia instancias concretas del modelo. E10 (Elementos reutilizables): Incluye artefactos, plantillas y guías que permiten aplicar el modelo de referencia de manera sistemática. Este elemento fue ajustado para ampliar su alcance, incorporando no solo modelos formales completos, sino también artefactos parciales de reutilización observados en los estudios industriales y técnicos. |
| Diseño y calidad (DCD) | E6, E7, E8 | E6 (Atributos de calidad): Actúa como un criterio transversal que guía y evalúa las decisiones arquitectónicas. Este elemento se mantiene sin modificaciones, dado que los atributos de calidad aparecen de forma consistente en la mayoría de los estudios . E7 (Estilos y patrones arquitectónicos): Proporciona principios estructurales globales que orientan la organización de la arquitectura. Este elemento fue ajustado para admitir distintos niveles de explicitación, incorporando tanto estilos formalmente definidos como enfoques inferidos a partir de las estructuras observadas. E8 (Patrones de diseño): Ofrece soluciones reutilizables a nivel de componentes e implementación. Dado que este elemento aparece escasamente definido en los estudios analizados, fue incorporado como una extensión explícita del modelo integrado, fortaleciendo la sistematización y reutilización del diseño interno. |


## Modelo de referencia integrado

En la Figura 22 se presenta la estructura consolidada del modelo integrado. Esta estructura representa el punto de convergencia entre la evidencia empírica obtenida de la literatura académica, los reportes técnicos de la industria y las arquitecturas piloto. En el contexto de la investigación, el modelo integrado corresponde a la arquitectura de referencia propuesta, representada desde una perspectiva estructural y organizativa que articula los elementos clásicos y cuánticos identificados a lo largo del proceso metodológico, formalizando un marco coherente que define relaciones, responsabilidades, puntos de integración y criterios de diseño, sirviendo como base para su instanciación en escenarios específicos y como instrumento orientador para la construcción de soluciones híbridas, donde:
- La dimensión conceptual (DC) agrupa los elementos E1 a E4 y define el marco conceptual del modelo, estableciendo el propósito de la arquitectura, su contexto de aplicación, el grado de abstracción adoptado y el vocabulario común que sustenta su interpretación. Esta dimensión fija los límites y supuestos fundamentales bajo los cuales el modelo es válido y aplicable.
- La dimensión organizacional (DO) integra los elementos E5, E9 y E10, y representa la materialización estructural del modelo de referencia. En esta dimensión se definen las estructuras arquitectónicas, los componentes estructurales y los mecanismos de reutilización que permiten instanciar el modelo en escenarios concretos. Su inclusión refleja la necesidad de vincular el marco conceptual con configuraciones organizadas que soporten la implementación, evolución y reutilización sistemática de la arquitectura.
- La Dimensión de Calidad y Diseño (DCD) reúne los elementos E6, E7 y E8, y concentra las decisiones relacionadas con los atributos de calidad, los estilos arquitectónicos y los patrones de diseño. Esta dimensión orienta cómo el modelo responde a preocupaciones de desempeño, escalabilidad, confiabilidad y mantenibilidad, y cómo dichas preocupaciones se traducen en decisiones de diseño coherentes con el dominio híbrido cuántico–clásico.
Figura 22. Modelo de referencia obtenido como resultado de la armonización.

## Sesgos identificados durante la armonización

La Tabla 48 presenta los sesgos identificados durante el proceso de armonización, junto con las estrategias definidas y aplicadas por el grupo investigador para mitigar su impacto en la validez, consistencia y trazabilidad del modelo de referencia propuesto:
**Tabla 48. Sesgos identificados y estrategias de mitigación.**

### Tabla extraída 48

| No | Sesgo identificado | Descripción del sesgo | Impacto potencial en el estudio | Estrategia de mitigación aplicada |
| --- | --- | --- | --- | --- |
| 1 | Sesgo de selección de estudios | Predominio de estudios académicos y reportes industriales provenientes de grandes proveedores tecnológicos (IBM, Microsoft, Google). | Sobre-representación de enfoques dominantes y sub-representación de propuestas alternativas o emergentes. | Inclusión deliberada de estudios académicos, marcos teóricos y arquitecturas piloto con distintos niveles de madurez; análisis comparativo explícito entre literatura y reportes industriales. |
| 2 | Sesgo de dominio tecnológico | Enfoque principal en arquitecturas híbridas cuántico–clásicas en entornos cloud y NISQ. | Limitación de la generalización del modelo a otros dominios o paradigmas computacionales. | Definición explícita del contexto de aplicación del modelo de referencia y delimitación de su alcance en la dimensión conceptual. |
| 3 | Sesgo terminológico | Uso inconsistente de términos arquitectónicos entre estudios, por ejemplo: arquitectura de referencia, arquitectura de integración, plataforma. | Ambigüedad semántica y riesgo de interpretaciones inconsistentes durante la comparación. | Introducción del elemento E4 (Glosario y terminología) y normalización semántica durante la homogeneización. |
| 4 | Sesgo de interpretación | Subjetividad inherente al análisis cualitativo al clasificar la cobertura como Sí, Parcial o No. | Variabilidad en la asignación de categorías y posible inconsistencia entre estudios. | Uso de una plantilla de comparación explícita, criterios de decisión documentados y revisión cruzada de las clasificaciones. |
| 5 | Sesgo de abstracción | Diferencias en el nivel de detalle de los estudios analizados, desde propuestas conceptuales hasta implementaciones concretas. | Dificultad para comparar elementos heterogéneos bajo un mismo marco. | Introducción explícita del elemento E3 (Nivel de abstracción) y análisis relativo en lugar de comparaciones absolutas. |
| 6 | Sesgo de confirmación | Tendencia a reforzar elementos ya identificados en la literatura clásica de arquitecturas de referencia. | Riesgo de ignorar elementos novedosos o no tradicionales. | Aplicación del proceso HPROCESS [28] y codificación abierta [104] para permitir la emergencia de categorías a partir de los datos. |
| 7 | Sesgo metodológico | Dependencia del protocolo de armonización seleccionado. | Limitación de los resultados a las capacidades del método aplicado. | Justificación explícita del método, triangulación con estándares internacionales reconocidos y discusión de amenazas a la validez. |
| 8 | Sesgo de reutilización | Interpretación amplia del concepto de reutilización en estudios industriales. | Sobreestimación del nivel de madurez de los elementos reutilizables. | Ajuste del elemento E10 durante la integración, diferenciando entre reutilización parcial y reutilización sistemática. |
| 9 | Sesgo temporal | Inclusión de estudios con diferentes fechas de publicación y niveles de madurez tecnológica. | Inconsistencias derivadas de la evolución rápida del dominio cuántico. | Análisis contextualizado por periodo y énfasis en principios arquitectónicos estables. |
| 10 | Sesgo de documentación | Diferencias en la profundidad y formalidad de la documentación entre estudios. | Dificultad para identificar explícitamente ciertos elementos arquitectónicos. | Clasificación “Parcial” como categoría intermedia y análisis cualitativo complementario. |
| Acrónimos. No: número. |  |  |  |  |

Al incluir esta tabla, se espera que el lector pueda comprender las principales amenazas a la validez que acompañan el proceso de armonización, así como las decisiones metodológicas adoptadas para reducir su impacto. Asimismo, la explicitación de los sesgos identificados contribuye a fortalecer la trazabilidad del estudio, facilita la evaluación crítica de los resultados y refuerza la credibilidad del modelo de referencia propuesto, mostrando que su construcción se fundamenta en un análisis consciente y controlado de las limitaciones inherentes al dominio y a los métodos utilizados.

# Capítulo IV. Proceso para la implementación de la arquitectura de referencia


## Introducción

Como resultado de los desarrollos realizados en los capítulos anteriores, fue posible identificar, definir y refinar los elementos y dimensiones que conforman la arquitectura de referencia. Sin embargo, un modelo conceptual no constituye un mecanismo operativo por sí mismo. La transición desde una estructura estática de elementos hacia un procedimiento aplicable requiere un proceso formal de derivación. Por esta razón, el propósito de este capítulo es proporcionar un mecanismo mediante el cual los artefactos resultantes durante el proceso de investigación se transformen en un proceso sistemático para la definición de una arquitectura empresarial híbrida.

## Metodología para derivar las fases que conforman el proceso

Para derivar el proceso de interés se adoptó la metodología Design Structure Matrix (DSM) , ampliamente utilizada para modelar, analizar y reorganizar dependencias entre elementos interrelacionados dentro de un sistema. En general, DSM sirve como herramienta para representar relaciones de precedencia, intercambio de información y restricciones estructurales mediante la construcción de una matriz que capture las interacciones entre componentes con significado en contexto.
A diferencia de otros enfoques de naturaleza secuencial, esta metodología no presupone un orden predeterminado de ejecución; en su lugar, el orden emerge a partir del análisis explícito de dependencias, lo que resulta particularmente pertinente en contextos donde los elementos del sistema han sido definidos previamente, pero su secuencia de instanciación no ha sido formalizada (tal como se hizo en el capítulo anterior). En el ámbito de la arquitectura empresarial, DSM se puede aplicar para estructurar procesos de diseño arquitectónico, identificar ciclos de retroalimentación, optimizar secuencias de desarrollo y reducir iteraciones innecesarias entre los elementos que lo conforman. En las siguientes secciones se presenta el protocolo adoptado en esta investigación para aplicar DSM, que está conformado por las siguientes actividades: (i) delimitar el conjunto de estudio, (ii) definir el criterio de dependencia, (iii) construir la matriz de dependencias, (iv) realizar el análisis estructural de la matriz, (v) aplicar reordenamiento matricial y obtención del orden topológico, y (vi) derivar el proceso arquitectónico.

## Delimitar el conjunto de estudio

La primera actividad de la metodología consistió en establecer los límites semánticos que representan el universo de la solución. Dentro del contexto de esta investigación, el sistema (o conjunto de interés) se define como:
“El conjunto de elementos conceptuales que intervienen en la definición, configuración, evaluación y evolución de una arquitectura empresarial híbrida, según el modelo armonizado que fue desarrollado en el Capítulo III”.
De acuerdo con DSM,  la delimitación del sistema introduce de manera implícita dos restricciones estructurales:
- El sistema no incluye variables externas no modeladas, por ejemplo: dinámicas macroeconómicas o políticas públicas.
- Cada elemento se considera unidad estructural indivisible dentro del universo definido por la metodología DSM.

## Definir el criterio de dependencia

Para aplicar DSM al modelo integrado, fue necesario establecer una regla formal que determine cuándo existe una relación de precedencia entre dos elementos   y   que pertenecen a un conjunto que contiene todos los elementos que pertenecen al sistema (designado como ). De acuerdo con el protocolo, esto se logra definiendo un criterio operativo de la forma:
Donde DSM define tres tipos de dependencia (ver la Tabla 49):
**Tabla 49. Tipos de dependencias definidos en DSM.**

### Tabla extraída 49

| Tipo de dependencia | Descripción |
| --- | --- |
| Semántica | Cuando la definición conceptual de presupone la existencia de . |
| Estructural | Cuando la configuración de utiliza artefactos definidos en . |
| Normativa | Cuando impone restricciones de diseño sobre . |

En el contexto de esta investigación, el conjunto  está conformado por los elementos que fueron caracterizados en el capítulo anterior (E1-E10), es decir:

## Construir la matriz de dependencias

A partir del criterio de dependencia, se construyó una matriz -dimensional , donde:
El propósito de la matriz es facilitar el análisis sistemático de los elementos E1–E10, evaluando (para cada combinación) si existe una relación de precedencia conforme a los criterios definidos en la sección anterior. Desde el punto de vista operativo, este análisis tomó como base las definiciones integradas del modelo (ver la Tabla 40) y su organización dimensional (ver la Tabla 47), evitando inferencias externas al marco conceptual establecido.
Al aplicar este procedimiento, es buscó traducir el modelo estructural en una representación formal de dependencias que permite: (i) visualizar las transiciones intra e interdimensionales, (ii) identificar posibles acoplamientos estructurales, y (iii) sentar la base topológica para el reordenamiento y la posterior derivación del proceso arquitectónico. El resultado de esta aplicación se sintetiza en la Tabla 50, que muestra las relaciones identificadas, su tipo y la transición dimensional correspondiente.
**Tabla 50. Dependencias identificadas entre elementos y dimensiones.**

### Tabla extraída 50

| Relación | Dimensión origen → dimensión destino | Tipo de dependencia | Descripción y fundamento conceptual |
| --- | --- | --- | --- |
| E1 → E2 | DC → DC | Semántica | El Objetivo de la arquitectura define el marco normativo bajo el cual se delimita el Contexto de la arquitectura , estableciendo los límites y propósito del sistema arquitectónico. |
| E2 → E3 | DC → DC | Semántica–estructural | El Nivel de abstracción se determina conforme al Contexto de la arquitectura , ya que el alcance y complejidad del entorno condicionan el grado de formalización requerido. |
| E3 → E4 | DC → DC | Semántica | El Glosario y terminología formaliza los conceptos definidos en el Nivel de abstracción , garantizando coherencia semántica dentro del modelo arquitectónico. |
| E3 → E5 | DC → DO | Estructural | Las Estructuras arquitectónicas se modelan en función del Nivel de abstracción , dado que el grado de formalización conceptual determina su representación organizacional y técnica. |
| E6 → E5 | DCD → DO | Normativa | Los Atributos de calidad imponen restricciones que condicionan la configuración de las Estructuras arquitectónicas , orientando decisiones estructurales hacia criterios de desempeño y calidad. |
| E5 → E9 | DO → DO | Estructural | Los Componentes estructurales materializan las Estructuras arquitectónicas , concretando su definición conceptual en unidades configurables dentro de la arquitectura. |
| E9 → E10 | DO → DO | Estructural | Los Elementos reutilizables se identifican a partir de configuraciones consolidadas de Componentes estructurales , permitiendo su estandarización y reutilización en distintos contextos. |
| E6 → E7 | DCD → DCD | Normativa | Los Estilos y patrones arquitectónicos deben satisfacer los Atributos de calidad , asegurando que las decisiones de diseño se alineen con los requisitos de desempeño establecidos. |
| E5 → E7 | DO → DCD | Estructural | Los Estilos y patrones arquitectónicos organizan la configuración de las Estructuras arquitectónicas , definiendo principios de composición y relación entre componentes. |
| E9 → E8 | DO → DCD | Estructural | Los Patrones de diseño operan sobre los Componentes estructurales , proporcionando soluciones recurrentes aplicables a configuraciones específicas dentro de la arquitectura. |


## Realizar el análisis estructural de la matriz

Luego de construir la matriz, el siguiente paso consistió en analizar su estructura interna para identificar patrones de precedencia, posibles ciclos y bloques acoplados que condicionen la ejecución del proceso. Para lograrlo, la matriz  fue interpretada como un grafo dirigido , donde cada nodo representa un elemento y cada arista dirigida representa las dependencias identificadas en la sección anterior.
En la Figura 23 se presenta el grafo resultante luego de aplicar una transformación canónica entre la matriz y el grafo, siguiendo los lineamientos propuestos por la teoría de grafos en :
Figura 23. Grafo de dependencias entre elementos E1-E10.
De acuerdo con los resultados obtenidos en la Figura 23, el grafo muestra una cadena estrictamente secuencial dentro de la dimensión conceptual (DC), donde:
Esta configuración no presenta retroalimentaciones ni bifurcaciones internas, indicando que los elementos conceptuales poseen precedencia jerárquica definida. En términos estructurales, este bloque constituye la base del sistema y actúa como fundamento normativo para las demás dimensiones. Sin embargo, la primera transición estructural se produce entre los elementos E3 y E5:
Este enlace representa el paso desde la fundamentación conceptual hacia la materialización organizacional. En general, el análisis del grafo confirma que ninguna estructura organizacional puede definirse sin que previamente se haya estabilizado el nivel de abstracción conceptual. Como resultado, este punto funciona como nodo de bifurcación y marca el inicio del núcleo estructural del modelo.
Por otro lado, el análisis muestra que existe una interacción significativa entre los elementos E5 (Estructuras arquitectónicas) y E6 (Atributos de calidad):
No obstante, aunque la dependencia registrada es , la naturaleza conceptual de ambos elementos indica influencia recíproca; es decir: los atributos condicionan el diseño estructural, mientras que la estructura concreta dichos atributos en un modelo dependiente del dominio de aplicación. Desde la perspectiva del DSM, este comportamiento corresponde a un bloque acoplado, característico de sistemas complejos donde existen restricciones de diseño que requieren iteración controlada.
Posteriormente, el grafo muestra una expansión en dos direcciones:
- Materialización organizacional (DO):
- Formalización arquitectónica (DCD):
Donde la consolidación estructural precede tanto la identificación de componentes reutilizables como la formalización en estilos y patrones. De este modo, el análisis estructural permite concluir que:
- El sistema presenta direccionalidad dominante entre las dimensiones.
- Existe un único núcleo de acoplamiento localizado.
- No existen ciclos de orden superior.
- El grafo es mayoritariamente acíclico con un bloque central iterativo.

## Reordenar la matriz y obtener el orden topológico

Una vez analizada la estructura del grafo, fue necesario transformar su representación en una secuencia válida de instanciación. Este procedimiento se llevó a cabo mediante una técnica conocida como reordenamiento matricial, que tiene como objetivo obtener un orden topológico que respete todas las relaciones de precedencia identificadas en la sección anterior. Para lograrlo, el reordenamiento se dividió en dos fases: (i) identificación de nodos raíz y (ii) eliminación progresiva de dependencias satisfechas.
Sin embargo, aunque el grafo ayuda a visualizar las relaciones de dependencia, no proporciona directamente una secuencia operativa. Por esta razón, se construyó una matriz auxiliar que registra (para cada ), el número de dependencias entrantes (designado como ), donde  si existe una dependencia :
En otras palabras,  describe de manera inequívoca la cantidad de nodos que llegan a un elemento  arbitrario. En la Tabla 51 se presenta la cantidad de dependencias identificadas por cada elemento de acuerdo con la forma funcional del grafo:
**Tabla 51. Cantidad de dependencias identificadas por elemento.**

### Tabla extraída 51

| Elemento | Cantidad de dependencias | Dependencias entrantes |
| --- | --- | --- |
| E1 | 0 | - |
| E2 | 1 | E1 |
| E3 | 1 | E2 |
| E4 | 1 | E3 |
| E5 | 2 | E3, E6 |
| E6 | 0 | - |
| E7 | 2 | E5, E6 |
| E8 | 1 | E9 |
| E9 | 1 | E5 |
| E10 | 1 | E9 |


## Identificar el nodo raíz

De acuerdo con DSM, un nodo se considera raíz si no tiene dependencias externas. Sin embargo, como se observa en la Tabla 51, los elementos que cumplen esta condición son E1 (Objetivo de la arquitectura) y E6 (Atributos de calidad). Cuando ocurre este tipo de escenarios, DSM establece que el análisis de precedencia debe derivar una secuencia que sea conceptualmente coherente con la estructura epistemológica del modelo; es decir, el criterio de selección representa una nueva condición que responda al contexto del problema. Para el caso de la arquitectura de referencia, el criterio responde a un grado de precedencia fundacional, donde:
“Cuando existan múltiples nodos con grado de entrada cero, se priorizarán aquellos que establecen el marco normativo y conceptual del sistema antes que aquellos que actúan como restricciones técnicas o de diseño.”
Aplicando este criterio, se observa que E1 define el propósito del modelo, mientras que E6 establece restricciones de calidad que deben interpretarse dentro de un marco conceptual previamente delimitado. Como resultado, aunque E6 no presenta dependencias estructurales, su aplicación presupone la existencia de un objetivo y un contexto definidos, por lo tanto:
En este punto de la lectura, es importante aclarar al lector que el criterio seleccionado no es arbitrario, y responde a definiciones ampliamente aplicadas y difundidas en modelos robustos como TOGAF , que establecen un flujo conceptual coherente para la definición del ciclo de vida de una arquitectura empresarial, donde los aspectos normativos preceden a los operacionales.

## Eliminación progresiva de dependencias

Tomando como base el nodo raíz, el proceso exige aplicar un algoritmo de ordenamiento topológico que elimine progresivamente los nodos con grado de entrada cero definido en la matriz. Desde la perspectiva matricial, cada iteración implica anular la fila correspondiente al elemento seleccionado y recalcular la suma de las columnas restantes para identificar nuevos nodos liberados (un nodo liberado es aquel cuyo grado es igual a cero luego de cada iteración).
En la Tabla 52 se presenta el detalle completo de este procedimiento, mostrando (para cada iteración) el nodo seleccionado, las dependencias eliminadas, los elementos liberados tras la actualización y la secuencia parcial acumulada:
**Tabla 52. Reordenamiento de elementos.**

### Tabla extraída 52

| Iteración | Nodo seleccionado | Aristas eliminadas | Nodos liberados | Secuencia parcial acumulada |
| --- | --- | --- | --- | --- |
| 1 | E1 | E1 → E2 | E2 | E1 |
| 2 | E2 | E2 → E3 | E3 | E1, E2 |
| 3 | E3 | E3 → E4; E3 → E5 | E4 | E1, E2, E3 |
| 4 | E4 | — | — | E1, E2, E3, E4 |
| 5 | E6 | E6 → E5; E6 → E7 | E5 | E1, E2, E3, E4, E6 |
| 6 | E5 | E5 → E9; E5 → E7 | E9, E7 | E1, E2, E3, E4, E6, E5 |
| 7 | E9 | E9 → E10; E9 → E8 | E10, E8 | E1, E2, E3, E4, E6, E5, E9 |
| 8 | E10 | — | — | E1, E2, E3, E4, E6, E5, E9, E10 |
| 9 | E7 | — | — | E1, E2, E3, E4, E6, E5, E9, E10, E7 |
| 10 | E8 | — | — | E1, E2, E3, E4, E6, E5, E9, E10, E7, E8 |

El resultado de este proceso es un nuevo conjunto de elementos ordenados de acuerdo con su precedencia lógica en el grafo, designado como :

## Derivación del proceso arquitectónico

En este punto del análisis, el orden topológico garantiza la existencia de una precedencia lógica entre los elementos; sin embargo, una secuencia formalmente consistente no constituye un proceso ejecutable en un entorno organizacional por sí mismo. Un proceso organizacional exige la definición explícita de fases, actividades, roles, tareas, entradas, salidas y mecanismos de control. Para llegar a la definición formal de un proceso estructurado, fue necesario determinar cómo se organizan los elementos que conforman la solución en una progresión metodológica coherente que conserve la precedencia estructural obtenida en la sección anterior. De acuerdo con DSM, esto se logra ejecutando las siguientes actividades: (i) validación de precedencias estructurales; (ii) identificación de agrupaciones compatibles con el orden topológico; (iii) agregación regulada por criterios; y (iv) formalización de fases arquitectónicas.

## Validación de precedencias estructurales

La validación de precedencias se aplica para verificar que  respeta todas las relaciones de dependencia definidas en el modelo estructural original. Para ello, se construyó una nueva matriz que representa la precedencia entre elementos, donde: las filas representan el elemento dependiente, y las columnas representan el elemento del cual depende (ver la Tabla 53):
**Tabla 53. Matriz de precedencias.**

### Tabla extraída 53

|  | E1 | E2 | E3 | E4 | E6 | E5 | E9 | E10 | E7 | E8 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| E1 |  |  |  |  |  |  |  |  |  |  |
| E2 | X |  |  |  |  |  |  |  |  |  |
| E3 |  | X |  |  |  |  |  |  |  |  |
| E4 |  |  | X |  |  |  |  |  |  |  |
| E6 |  |  |  |  |  |  |  |  |  |  |
| E5 |  |  | X |  | X |  |  |  |  |  |
| E9 |  |  |  |  |  | X |  |  |  |  |
| E10 |  |  |  |  |  |  | X |  |  |  |
| E7 |  |  |  |  | X | X |  |  |  |  |
| E8 |  |  |  |  |  |  | X |  |  |  |

Como se observa en la Tabla 53, todas las relaciones de dependencia identificadas en el modelo se ubican aproximadamente en la región inferior respecto a la diagonal principal de la matriz reordenada. Esta disposición indica que cada elemento depende exclusivamente de elementos que aparecen antes en la secuencia topológica. Desde el punto de vista matricial, la configuración corresponde a una estructura triangular inferior que confirma formalmente que el conjunto de elementos puede desarrollarse de manera progresiva sin necesidad de redefinir componentes previamente establecidos.

## Identificación de agrupaciones compatibles con el orden topológico

Este análisis tiene como propósito determinar si la secuencia topológica puede dividirse en unidades metodológicas más amplias que conserven las dependencias del modelo. En términos del DSM, esta operación corresponde a la identificación de bloques estructurales estables dentro de la matriz de precedencias. En la Tabla 54 se presenta el resultado del análisis de correspondencia por bloques consecutivos, identificando para cada subconjunto los elementos que lo conforman, sus dependencias internas y externas, así como la verificación de preservación de la estructura triangular de la matriz.
**Tabla 54. Análisis de correspondencias consecutivas.**

### Tabla extraída 54

| Subconjunto | Elementos | Dependencias | Dependencias hacia elementos anteriores | ¿Preserva la triangularidad ? | Justificación estructural |
| --- | --- | --- | --- | --- | --- |
| S1 | {E1, E2} | E2 → E1 | – | Sí | Dependencia contenida dentro del bloque; no hay relaciones hacia elementos posteriores . |
| S2 | {E3, E4} | E4 → E3 | E3 → E2 | Sí | Dependencia interna clara; dependencia externa dirigida solo hacia elementos previos . |
| S3 | {E6, E5} | E5 → E6 | E5 → E3 | Sí | E5 depende de E6 (interno) y de E3 (anterior); no existen dependencias hacia elementos posteriores . |
| S4 | {E9, E10} | E10 → E9 | E9 → E5 | Sí | E10 depende de E9; E9 depende de elemento anterior; bloque estructuralmente estable . |
| S5 | {E7, E8} | – | E7 → E6, E7 → E5; E8 → E9 | Sí | No existen dependencias internas; todas las dependencias apuntan a elementos anteriores . |

De acuerdo con la Tabla 54, todas las agrupaciones satisfacen las condiciones estructurales necesarias para su consolidación como unidades metodológicas.

## Agregación regulada por criterios

Luego de identificar los subconjuntos consecutivos compatibles con la matriz de precedencias, es necesario determinar si los subconjuntos pueden consolidarse formalmente como unidades metodológicas dentro del proceso arquitectónico desde el punto de vista conceptual. Para lleva a cabo esta tarea, la metodología propone definir un conjunto de criterios de agregación que operan como restricciones metodológicas sobre la partición de la secuencia topológica. Estos criterios se derivan de tres fuentes: (i) la propiedad de triangularidad de la matriz de precedencias, (ii) la estructura conceptual del modelo (que en este caso corresponde a las dimensiones DC, DO, DCD) y (iii) la necesidad de convertir una secuencia estructural en una progresión metodológica coherente. La Tabla 55 presenta cada uno de los criterios definidos para llevar a cabo este análisis y su justificación:
**Tabla 55. Criterios de agregación.**

### Tabla extraída 55

| Código | Criterio | Definición operativa | Fundamento |
| --- | --- | --- | --- |
| C A 1 | Preservación de precedencia estructural | La consolidación no debe generar dependencias hacia elementos posteriores en la secuencia topológica validada. | Propiedad de triangularidad de la DSM |
| C A 2 | Coherencia funcional | Los elementos agrupados deben compartir una misma lógica conceptual dentro del modelo. | Diferenciación entre DC, DO y DCD |
| C A 3 | Habilitación progresiva | El subconjunto debe producir una condición estructural suficiente para iniciar el siguiente sin redefiniciones. | Progresión secuencial del orden topológico |
| C A 4 | Estabilidad interna | Las dependencias entre elementos del subconjunto deben resolverse internamente o dirigirse únicamente hacia subconjuntos anteriores. | Inspección estructural de la DSM |

En la Tabla 56 se presenta el análisis estructurado que describe el grado de correspondencia entre cada subconjunto con los criterios CA1-CA4:
**Tabla 56. Aplicación de criterios por subconjunto.**

### Tabla extraída 56

| Subconjunto | Criterio |  |  |  |
| --- | --- | --- | --- | --- |
|  | C A 1 | C A 2 | C A 3 | C A 4 |
| S1 | No existen dependencias hacia elementos posteriores; E2 depende solo de E1 . | Ambos pertenecen al dominio directivo (DC) . | La definición del objetivo y contexto habilita la formalización conceptual posterior . | Dependencia E2→E1 contenida dentro del bloque . |
| S2 | No hay dependencias hacia elementos posteriores; E4 depende solo de E3 . | Ambos formalizan el marco conceptual (DC) . | El nivel de abstracción y su formalización habilitan la modelación estructural . | Dependencia E4→E3 contenida dentro del bloque . |
| S3 | E5 no depende de elementos posteriores; solo de E3 y E6 . | Ambos regulan la configuración estructural (DO/DCD) . | La definición de atributos y estructuras habilita la materialización en componentes . | E5→E6 interno; E5→E3 dirigido a bloque anterior . |
| S4 | E10 no depende de elementos posteriores; E9 depende solo de E5 . | Ambos pertenecen al dominio estructural (DO) . | La consolidación de componentes permite identificar elementos reutilizables . | E10→E9 interno; E9→E5 dirigido a bloque anterior . |
| S5 | No existen dependencias hacia elementos posteriores . | Ambos pertenecen al dominio de diseño (DCD) . | La definición de estilos y patrones consolida la organización del diseño . | Dependencias dirigidas únicamente hacia bloques anteriores . |

De acuerdo con los resultados reportados en la Tabla 56, todos los subconjuntos cumplen de manera consistente los criterios de agregación, lo que confirma su viabilidad como unidades metodológicas dentro del proceso arquitectónico. De esta manera, los subconjuntos garantizan que la relación entre cada elemento sigue un flujo metodológico con sentido conceptual.

## Formalización de fases arquitectónicas

Con base en los resultados obtenidos en las fases anteriores, la última parte del análisis se orientó a formalizar la estructura derivada en un proceso arquitectónico explícito, que define un conjunto de fases que organizaran progresivamente los elementos del modelo sin alterar la precedencia estructural existente. Esto se logró realizando un proceso de transformación que convirtió los subconjuntos en unidades metodológicas con propósito definido dentro de la configuración de la arquitectura empresarial híbrida.
De acuerdo con DSM, esta tarea implica aplicar un conjunto de criterios explícitos que regulen la transición desde una estructura ordenada hacia una progresión de proceso, considerando las características particulares del área de interés. Como resultado, los criterios adoptados se organizaron en dos categorías: (i) criterios estructurales, fundamentados en las herramientas y técnicas propias de DSM, y (ii) criterios contextuales, que emergen de la aplicación del método en el ámbito particular de la arquitectura empresarial híbrida, que deben considerar aspectos como su coherencia conceptual, progresión arquitectónica y alineación con prácticas consolidadas del área. Como resultado de esta caracterización, se obtuvo un total de 6 criterios, que son descritos en la Tabla 57:
Tabla 57. Criterios de reinterpretación entre estructura y proceso.

### Tabla extraída 57

| Código | Categoría | Criterio | Definición operativa | Fundamento metodológico | Referencias conceptuales |
| --- | --- | --- | --- | --- | --- |
| C1 | Estructural | Preservación de precedencia | La consolidación no debe alterar el orden topológico validado ni generar dependencias hacia fases posteriores. | Triangularidad de la DSM |  |
| C2 |  | Estabilidad estructural interna | Las dependencias dentro del subconjunto deben resolverse internamente o dirigirse exclusivamente hacia subconjuntos anteriores. | Clustering en matrices DSM |  |
| C3 |  | Ausencia de retroalimentaciones | La agregación no debe generar ciclos estructurales ni dependencias bidireccionales entre fases. | Propiedad de grafo acíclico | [107], [108], [110] |
| C4 | Contextual | Estabilización conceptual | Cada fase debe representar un punto de cierre conceptual antes de avanzar. | Teoría de procesos organizacionales |  |
| C5 |  | Coherencia funcional | Los elementos agrupados deben compartir una misma lógica conceptual o dominio arquitectónico. | Ontología del modelo (DC, DO, DCD) | Ver la Tabla 47 |
| C6 |  | Contribución progresiva | Cada fase debe aportar un nivel incremental en la configuración de la arquitectura empresarial. | Marcos de Arquitectura Empresarial |  |

Los criterios C1, C2 y C3 fueron abordados durante las etapas de análisis previas. Por otro lado, los criterios C4, C5 y C6 buscaron incluir lineamientos, buenas prácticas y definiciones propuestos por estándares y modelos ampliamente utilizados en la industria para la definición formal de procesos, entre ellos: TOGAF , BPMN 2.0  y la Guía del PMBOK  del Project Management Institute.
Para llevar a cabo esta tarea, se realizaron las siguientes actividades: (i) identificación del propósito dominante en los subconjuntos, (ii) análisis de correspondencia con marcos consolidados, (iii) evaluación de progresión incremental y (iv) asignación de denominación metodológica.

## Identificar el propósito dominante en los subconjuntos

Un subconjunto estructuralmente estable no necesariamente constituye una fase. Para formalizarlo como tal, debe identificarse el propósito arquitectónico dominante que emerge de la interacción de sus elementos. Este paso responde principalmente al criterio C4 y C5. En este sentido, el grado de conformidad de cada criterio para cada subconjunto se obtuvo considerando tres aspectos principales:
- ¿Qué tipo de decisiones consolida?
- ¿Qué nivel de abstracción representa?
- ¿Qué resultado habilita?
Como resultado de este análisis fue posible identificar y caracterizar el propósito dominante de cada subconjunto (ver la Tabla 58):
**Tabla 58. Identificación del propósito dominante.**

### Tabla extraída 58

| Subconjunto | Elementos | Dimensión predominante | Tipo de decisión consolidada | Propósito dominante identificado |
| --- | --- | --- | --- | --- |
| S1 | Objetivo de la arquitectura , Contexto de la arquitectura | DC | Definición estratégica | Delimitar alcance y propósito |
| S2 | Nivel de abstracción, Glosario y terminología | DC | Formalización conceptual | Establecer marco semántico |
| S3 | Atributos de calidad, Estructuras arquitectónicas | DCD / DO | Configuración normativa-estructural | Integrar restricciones y modelado |
| S4 | Componentes estructurales, Elementos reutilizables | DO | Materialización técnica | Consolidar implementación estructural |
| S5 | Estilos y patrones arquitectónicos, Patrones de diseño | DCD | Sistematización de soluciones | Organizar y estandarizar diseño |


## Análisis de correspondencia con marcos consolidados

Para evitar denominaciones arbitrarias, se comparó el propósito dominante identificado en la sección anterior con las etapas típicamente reconocidas en marcos reconocidos como TOGAF, BPMN y PMBOK (ver la Tabla 59):
**Tabla 59. Correspondencia con marcos de referencia.**

### Tabla extraída 59

| Subconjunto | Propósito dominante | TOGAF | BPMN | PMBOK |
| --- | --- | --- | --- | --- |
| S1 | Definición estratégica | Architecture Vision | Inicio | Initiating |
| S2 | Formalización conceptual | Business / IS Architecture | Modelado | Planning |
| S3 | Configuración normativa-estructural | Architecture Definition | Diseño de proceso | Planning / Design |
| S4 | Materialización técnica | Technology Architecture | Ejecución | Executing |
| S5 | Sistematización de soluciones | Implementation Governance | Optimización | Monitoring & Controlling |


## Evaluación de progresión incremental

A partir de la correspondencia entre modelos y soluciones preexistentes, se evaluó si cada subconjunto introduce un nivel superior de concreción respecto al anterior, garantizando cumplimiento del criterio C6 (ver la Tabla 60):
**Tabla 60. Evaluación de progresión arquitectónica.**

### Tabla extraída 60

| Transición | Nivel de abstracción anterior | Nivel posterior | Incremento identificado |
| --- | --- | --- | --- |
| S1 → S2 | Definición estratégica | Formalización conceptual | De intención a formalización |
| S2 → S3 | Marco conceptual | Configuración estructural | De definición a modelado |
| S3 → S4 | Modelado estructural | Materialización | De estructura a implementación |
| S4 → S5 | Implementación estructural | Sistematización del diseño | De materialización a optimización |


## Asignación de denominación metodológica

Con base en los pasos anteriores, se asignó una denominación metodológica a cada subconjunto consolidado, con el fin de formalizarlo como fase dentro del proceso arquitectónico derivado. La denominación metodológica buscó reflejar la función principal que cumple cada fase dentro de la configuración de la arquitectura empresarial híbrida, asegurando que existe coherencia conceptual, claridad semántica y alineación con terminología reconocida en la disciplina que fue objeto de estudio. En la Tabla 61 se presenta la correspondencia entre subconjuntos estructurales, propósito dominante y denominación metodológica asignada.
Tabla 61. Denominación metodológica asignada a las fases del proceso.

### Tabla extraída 61

| Fase | Subconjunto | Elementos incluidos | Propósito dominante | Denominación metodológica |
| --- | --- | --- | --- | --- |
| F1 | S1 | Objetivo de la arquitectura, Contexto de la arquitectura | Delimitación del alcance y definición del propósito | Definición estratégica |
| F2 | S2 | Nivel de abstracción, Glosario y terminología | Consolidación del marco conceptual y semántico | Formalización conceptual |
| F3 | S3 | Atributos de calidad, Estructuras arquitectónicas | Integración de restricciones normativas y modelado estructural | Configuración estructural |
| F4 | S4 | Componentes estructurales, Elementos reutilizables | Materialización de la estructura en componentes implementables | Materialización arquitectónica |
| F5 | S5 | Estilos y patrones arquitectónicos, Patrones de diseño | Organización y sistematización de soluciones arquitectónicas | Sistematización del diseño |

Como resultado de esta caracterización, las fases F1–F5 representan el dominio de instanciación progresiva de la arquitectura empresarial híbrida, estructurado en niveles sucesivos de consolidación conceptual, configuración estructural y sistematización del diseño (ver la Figura 24):
**Figura 24. Fases preliminares que conforman el proceso.**
Las fases representan puntos de estabilización incremental dentro de un flujo continuo de construcción arquitectónica, donde: F1 y F2 consolidan el dominio conceptual (DC), F3 articula la transición entre las dimensiones normativa y organizacional (DCD–DO), F4 materializa la configuración estructural en componentes implementables, y F5 formaliza las decisiones de diseño mediante mecanismos de estandarización y reutilización.

## Sesgos identificados durante el análisis metodológico

Aunque aplicar el modelo DSM proporciona un mecanismo sistemático para transformar una estructura conceptual en una secuencia operativa, su ejecución requiere tomar decisiones que pueden influir en los resultados. En este sentido, la documentación explícita de los sesgos identificados durante la ejecución de esta actividad busca fortalecer la transparencia metodológica del proceso de derivación y facilitar la evaluación crítica de las decisiones adoptadas. La Tabla 62 presenta el detalle de los principales sesgos identificados durante la construcción, análisis y reinterpretación del DSM, junto con las estrategias implementadas para mitigar su impacto:
**Tabla 62. Sesgos identificados durante la derivación del proceso.**

### Tabla extraída 62

| No | Sesgo identificado | Descripción del sesgo | Impacto potencial | Estrategia de mitigación aplicada |
| --- | --- | --- | --- | --- |
| 1 | Sesgo de interpretación de dependencias | Determinación subjetiva de cuándo un elemento requiere información de otro. | Alteración del orden topológico y de la secuencia del proceso. | Definición explícita del criterio formal de dependencia (semántica, estructural y normativa). |
| 2 | Sesgo de precedencia fundacional | Selección de un nodo raíz cuando existen múltiples elementos con grado de entrada cero (E1 y E6). | Variación en el punto de inicio del proceso derivado. | Definición de criterio epistemológico de precedencia basado en fundamentos conceptuales ampliamente aceptados. |
| 3 | Sesgo de acoplamiento | Interpretación del bloque iterativo entre atributos de calidad y estructuras arquitectónicas. | Simplificación excesiva o sobreestimación de la iteración estructural. | Identificación explícita del bloque acoplado y tratamiento controlado dentro del ordenamiento topológico. |
| 4 | Sesgo de agregación | Consolidación de subconjuntos estructurales como fases metodológicas. | Agrupaciones artificiales o no coherentes conceptualmente. | Aplicación de criterios formales C1–C6 ( triangularidad , coherencia funcional, progresión incremental). |
| 5 | Sesgo de correspondencia externa | Uso de marcos como TOGAF, BPMN y PMBOK para validar denominaciones de fases. | Alineación forzada con marcos consolidados. | Uso comparativo orientado a correspondencia conceptual, no a replicación estructural. |
| 6 | Sesgo de linealización | Transformación de una estructura parcialmente iterativa en una secuencia topológica progresiva. | Pérdida de matices de retroalimentación inherentes al modelo. | Documentación explícita del bloque iterativo central y aclaración de que el proceso admite retroalimentación controlada. |
| 7 | Sesgo metodológico | Dependencia exclusiva del enfoque DSM para la derivación del proceso. | Limitación del resultado a las capacidades del método seleccionado. | Justificación metodológica explícita y verificación de consistencia mediante análisis estructural y validación de triangularidad . |


## Caracterización del proceso

El proceso propuesto para la definición de una arquitectura de referencia empresarial híbrida (clásico–cuántica) se concibe como un conjunto sistemático, estructurado y controlado de actividades orientadas a la construcción, validación, aplicación y evolución de un marco arquitectónico común, reutilizable y gobernable. Esta concepción se alinea con la definición de arquitectura propuesta en la norma ISO/IEC/IEEE 42010:2022 , así como en marcos de arquitectura empresarial que enfatizan el carácter iterativo y gobernado de la práctica arquitectónica, como TOGAF ADM .
De este modo, el proceso que será caracterizado en lo que resta del capítulo incorpora mecanismos explícitos para identificar, acotar, justificar y gobernar los artefactos necesarios para que una organización sea capaz de establecer un marco empresarial común que incluya las prácticas y necesidades que surgen al integrar el paradigma clásico con los retos que propone la computación cuántica .

## Alcance del proceso

El alcance del proceso comprende el conjunto de actividades, artefactos y roles necesarios para diseñar, formalizar, aplicar y evolucionar una arquitectura de referencia empresarial híbrida, concebida como un modelo arquitectónico unificado y reutilizable. Al aplicarse de manera sistemática, el proceso busca facilitar la alineación de los equipos con los objetivos estratégicos del negocio, apoyando la toma de decisiones relacionadas con adopción tecnológica, interoperabilidad y sostenibilidad de soluciones híbridas.

## Plantillas definidas para documentar el proceso

Para los fines de este proyecto de investigación, el equipo decidió adoptar el patrón de procesos propuesto por COMPETISOFT , que proporciona una marco estandarizado para documentar procesos organizacionales. De acuerdo con COMPETISOFT, un proceso se define como un conjunto estructurado de actividades relacionadas que transforman entradas en productos de valor, ejecutadas por roles claramente definidos que están reguladas por criterios de control y verificación. En las siguientes secciones se presenta el detalle de cada una de las plantillas construidas para documentar el proceso, en conformidad con los elementos, dimensiones y fases que fueron caracterizados en los capítulos anteriores.

## Plantilla para documentar el proceso a nivel macro

Esta plantilla establece la identidad formal del proceso y define sus atributos globales, delimitando el alcance organizacional, los resultados esperados y los mecanismos de control que regulan su ejecución. Desde el punto de vista organizacional, esta caracterización cumple una función fundacional que fija el marco de gobernanza dentro del cual se desarrollan las fases y asegura que el proceso conserve coherencia estratégica. Además, actúa como punto de referencia para mantener la trazabilidad vertical de la arquitectura empresarial adoptada por la organización (ver la Tabla 63):
**Tabla 63. Plantilla para documentar el proceso a nivel macro.**

### Tabla extraída 63

| Campo | Descripción | Ejemplo ilustrativo |
| --- | --- | --- |
| Nombre | Denominación oficial del proceso arquitectónico. | Definición de Arquitectura de Referencia Híbrida para la empresa X. |
| Identificador | Código único del proceso. | DARH |
| Propósito | Resultado organizacional medible que se espera lograr. | Establecer una arquitectura empresarial híbrida validada y trazable. |
| Alcance | Contexto organizacional y técnico donde aplica. | Unidades de TI y planeación estratégica. |
| Dimensiones involucradas | DC, DO, DCD . | Conceptual, Organizativa, Calidad y Diseño |
| Subconjuntos estructurales de origen | Subconjuntos derivados del análisis topológico. | S1, S2, S3 , S4 |
| Entradas globales | Insumos requeridos para iniciar el proceso. | Plan estratégico institucional, modelo actual AS-IS , objetivos organizacionales. |
| Salidas globales | Productos consolidados generados. | Línea Base Arquitectónica versión 1.0 |
| Criterios de inicio | Condiciones necesarias para activar el proceso. | Aprobación formal del comité directivo |
| Criterios de cierre | Condiciones que determinan su finalización. | Validación ARB y publicación oficial |
| Indicadores globales | Métricas de desempeño del proceso. | % cobertura de elementos E1–E10 |
| Autoridad de aprobación | Instancia que valida el proceso. | Architecture Review Board |


## Plantilla para documentar las fases

Esta plantilla documenta la transformación de cada subconjunto estructural en una fase operativa del proceso. Su importancia radica en preservar la correspondencia entre el orden topológico previamente validado y la secuencia organizacional del proceso, donde cada fase representa una unidad de habilitación progresiva, garantizando que las dependencias estructurales se mantengan en la ejecución práctica (ver la Tabla 64):
**Tabla 64. Plantilla para documentar cada fase.**

### Tabla extraída 64

| Campo | Descripción | Ejemplo ilustrativo |
| --- | --- | --- |
| Nombre | Denominación metodológica. | Formalización conceptual |
| Código | Identificador de fase. | F1 |
| Subconjunto estructural asociado | Subconjunto de origen. | S1 |
| Elementos incluidos | Elementos estructurales asociados. | E1, E2 |
| Propósito | Condición habilitante generada. | Definir principios arquitectónicos |
| Entradas | Productos previos requeridos. | Plan estratégico |
| Salidas | Artefactos producidos. | Documento de principios |
| Punto de control | Validación requerida para avanzar. | Revisión ARB |
| Indicadores de cumplimiento | Métricas de evaluación. | Aprobación formal obtenida |


## Plantilla para documentar los elementos

Esta plantilla detalla cada elemento estructural dentro de su fase correspondiente. En el contexto de este proyecto de investigación, los elementos constituyen la unidad estructural que conecta el modelo conceptual con la ejecución operativa dentro del proceso (ver la Tabla 65):
**Tabla 65. Plantilla para documentar cada elemento**

### Tabla extraída 65

| Campo | Descripción | Ejemplo ilustrativo |
| --- | --- | --- |
| Código | , donde | E1 |
| Fase asociada | Código de su f ase correspondiente. | F1 |
| Categoría | Dominio arquitectónico. | Principios |
| Propósito | Resultado específico esperado. | Establecer principios rectores |
| Objetivos específicos | O1, O2 , …, On | O1: Definir principios arquitectónicos . |
| Productos generados | Artefactos verificables. | Glosario de términos . |
| Criterios de aceptación | Condiciones de validación. | Aprobación formal. |
| Dependencias estructurales | Elementos previos requeridos. | Ninguna |


## Plantilla para documentar las actividades

Esta plantilla tiene por objetivo formalizar las acciones que materializan cada elemento dentro de su fase. Las actividades constituyen el nivel operativo del proceso. Su definición detallada permite institucionalizar la ejecución y garantizar que cada producto sea verificable y controlado (ver la Tabla 66):
**Tabla 66. Plantilla para la definición del actividades.**

### Tabla extraída 66

| Campo | Descripción | Ejemplo ilustrativo |
| --- | --- | --- |
| Código | Fase .Elemento.Actividad | F1 .E1.A1 |
| Nombre | Acción principal | Identificación de principios |
| Objetivo | Resultado inmediato esperado | Formular principios alineados |
| Descripción | Descripción de lo que hace la actividad | Validar documento de objetivos |
| Entradas | Artefactos requeridos | Plan estratégico |
| Salidas | Producto generado | Borrador de principios |
| Responsable | Rol ejecutor | AE |
| Herramientas | Métodos utilizados | Taller colaborativo |
| Punto de validación | Instancia de revisión | ARB |
| Tareas |  |  |
| En esta sección se anexa el flujo de tareas que dan conformidad a la actividad |  |  |

Cuando una actividad contribuye a múltiples elementos estructurales, esta se asocia a un elemento principal para efectos de identificación. La relación con los demás elementos se representa explícitamente en el diagrama utilizando la notación de conjuntos; por ejemplo, para una actividad que contribuye a los elementos  se utiliza la representación descrita a continuación:
Donde:
- Representa la fase actual del proceso.
- : Representa el elemento principal asociado con la actividad.
- : Representa elementos adicionales asociados con la actividad .
- Representa la actividad  del proceso asociada al elemento .
Durante cada fase, existe un conjunto de actividades transversales de verificación que realiza el órgano de gobierno arquitectónico (OGA). Estas actividades evalúan la coherencia, calidad y alineación de los artefactos generados con respecto a los objetivos estratégicos y los criterios arquitectónicos definidos, actuando como mecanismos de control que habilitan la continuidad del proceso o generan ciclos de retroalimentación cuando requieren acciones de mejora. Para garantizar la definición y documentación formal de tales actividades, se utiliza la plantilla presentada en la Tabla 67:
**Tabla 67. Plantilla para la definición de actividades de realizadas por el OGA.**

### Tabla extraída 67

| Actividad | Nombre | Descripción | Ejemplo |
| --- | --- | --- | --- |
|  | Nombre designado para la actividad. | Descripción general de la actividad, sus entradas y salidas asociadas. |  |

Estas actividades siempre ocurren al final de cada fase y se activan una vez se han consolidado los artefactos correspondientes, estableciendo un punto de control formal que determina la continuidad del proceso o la necesidad de realizar ajustes.

## Glosario de términos

A continuación, se presenta la base terminológica que es delimita los artefactos y elementos de proceso que hacen parte de la propuesta. Estos términos se fundamentan en las definiciones propuestas por COMPETISOFT , la norma ISO/IEC 12207  y la norma ISO/IEC 29110 , que proporcionan un marco de referencia uniforme para la descripción de procesos de Ingeniería de Software y su adaptación en diferentes contextos organizacionales (ver la Tabla 68):
**Tabla 68. Términos genéricos asociados a la definición de procesos**

### Tabla extraída 68

| Término | Descripción | Fuente |
| --- | --- | --- |
| Proceso | Conjunto estructurado de políticas, estructuras organizativas, tecnologías, procedimientos, objetivos y productos de trabajo necesarios para diseñar, desarrollar, implementar y mantener un sistema o producto de software. | [97], [118] |
| Actividad | Conjunto de acciones coordinadas que transforman entradas en salidas dentro del marco de un proceso. Incluye procedimientos, estándares y objetivos que permiten producir o modificar productos de trabajo. | [97] |
| Tarea | Unidad específica de trabajo ejecutada por uno o más roles, asociada a entradas y salidas claramente definidas. |  |
| Subtarea | Descomposición de una tarea cuando su complejidad requiere un mayor nivel de detalle operativo. | Adaptado de [118] |
| Rol | Conjunto definido de responsabilidades, competencias y autoridad necesarias para ejecutar actividades dentro del proceso. | [97] |
| Recurso | Activo requerido para ejecutar el proceso, incluyendo talento humano, infraestructura tecnológica y herramientas especializadas. | [119] |
| Herramienta | Instrumento o aplicación que automatiza o apoya la ejecución de actividades del proceso. |  |
| Producto de trabajo | Artefacto verificable generado como resultado de la ejecución de actividades dentro del proceso. |  |

Adicionalmente, como el proceso propuesto se deriva de un análisis estructural formal, y no únicamente de prácticas organizacionales tradicionales, se incorporan términos propios del dominio metodológico desarrollado en esta investigación. Estos conceptos buscan formalizar la transformación del modelo estructural en un proceso arquitectónico operacional y asegurar coherencia entre la estructura conceptual y su implementación práctica (ver la Tabla 69):
**Tabla 69. Términos específicos del dominio metodológico propuesto.**

### Tabla extraída 69

| Término | Descripción |
| --- | --- |
| Fase | Agrupación operativa de elementos estructurales derivada de un subconjunto consolidado del análisis topológico. Representa una unidad de habilitación progresiva dentro del proceso arquitectónico. |
| Elemento | Componente estructural identificado en el modelo conceptual (E1–E10), que constituye una unidad metodológica verificable dentro de una dimensión específica. |
| Dimensión | Categoría estructural que agrupa elementos según su naturaleza metodológica. En este modelo: Conceptual (DC), Organizativa (DO) y Calidad y Diseño (DCD). |
| Subconjunto estructural | Conjunto de elementos relacionados entre sí mediante dependencias identificadas en el análisis estructural, cuya consolidación da origen a una fase del proceso. |
| Punto de control | Instancia formal de validación que determina el cumplimiento de criterios definidos antes de avanzar a la siguiente fase. |
| Línea Base Arquitectónica (LBA) | Conjunto consolidado y versionado de productos arquitectónicos que formaliza el estado validado de la arquitectura híbrida. |


## Definición de roles

La arquitectura híbrida, entendida como la integración de entornos clásicos y cuánticos bajo un marco común de gobierno, interoperabilidad y calidad, constituye un campo emergente en estudio y evolución constante. Por esta razón, se observa una alta variabilidad en los modelos organizacionales y en la configuración de funciones que los equipos adoptan para diseñar e implementar soluciones híbridas.
Esta diversidad se explica por la ausencia de una trayectoria consolidada de profesionales altamente especializados en sistemas cuánticos aplicados, lo que obliga a la conformación de roles multidisciplinares que combinan competencias en arquitectura clásica, cómputo cuántico, integración, datos, seguridad y gobierno.
Con el propósito de proporcionar un grado adicional de soporte metodológico a este escenario, la definición de roles se fundamentó en un análisis comparativo transversal entre perfiles presentes en tres dominios: arquitectura clásica, arquitectura cuántica y arquitectura híbrida. Para llevar a cabo esta tarea, se revisaron modelos organizacionales de proveedores tecnológicos, organismos de investigación y casos de adopción temprana. A partir de esta comparación, se identificaron funciones recurrentes, competencias superpuestas y brechas estructurales que dieron como resultado un conjunto de roles fundamentales, complementarios y externos, posteriormente integrados como roles activos dentro del proceso.

## Roles propuestos en arquitecturas clásicas

En el ámbito de la arquitectura clásica, los roles se han consolidado durante décadas de práctica en Ingeniería de Software, computación en la nube y gobierno empresarial de TI. Estos roles presentan una diferenciación clara entre niveles estratégico, táctico y operativo, y se orientan a la gestión de requisitos, diseño estructurado, integración y administración del ciclo de vida de sistemas tradicionales. En la práctica, las empresas líderes en este ámbito, como Microsoft, IBM, Oracle o AWS, estructuran sus equipos arquitectónicos en torno a funciones estables y claramente diferenciadas, con un fuerte apoyo en marcos consolidados de Arquitectura Empresarial como TOGAF , el Zachman Framework , ArchiMate para la modelación estructurada de vistas arquitectónicas , y el Architecture Capability  Framework propuesto por The Open Group. Asimismo, complementan estas prácticas con estándares de gobierno de TI como ISO/IEC 38500 , marcos de control como COBIT , y lineamientos específicos de arquitectura en la nube como el AWS Well-Architected Framework  o el Microsoft Cloud Adoption Framework . Estos referentes permiten institucionalizar la función arquitectónica, establecer mecanismos formales de gobierno, definir roles y responsabilidades con claridad organizacional y garantizar la alineación entre capacidades de negocio y evolución tecnológica.
En la Tabla 70 se presenta un resumen estructurado de los roles más comunes propuestos para el diseño e implementación de arquitecturas empresariales en contextos de desarrollo de software clásicos que se han convertido en estándares de facto gracias a su adopción extendida en la industria de software:
**Tabla 70. Identificación de roles para arquitecturas clásicas.**

### Tabla extraída 70

| Acrónimo | Rol | Descripción en contexto de arquitectura empresarial | Organismo / Institución | Fuente / Marco |
| --- | --- | --- | --- | --- |
| EA | Enterprise Architect | Define, mantiene y gobierna la arquitectura empresarial, asegurando alineación entre estrategia, capacidades de negocio, datos, aplicaciones y tecnología. | The Open Group; ISO/IEC; ISO |  |
| BA | Business Architect | Modela capacidades, procesos y estructura organizacional, garantizando trazabilidad entre estrategia y arquitectura. | The Open Group, ArchiMate |  |
| DA | Data Architect | Define la arquitectura de datos empresarial, modelos de información y políticas de gobierno de datos. | DAMA International; The Open Group |  |
| AA | Application Architect | Diseña el portafolio de aplicaciones y su alineación con capacidades empresariales y estándares corporativos. | The Open Group, ArchiMate |  |
| TA | Technology Architect | Define estándares tecnológicos, infraestructura y plataformas corporativas alineadas con la estrategia empresarial. | The Open Group; Cloud Providers; AWS Well-Architected Framework; Microsoft Cloud Adoption Framework |  |
| SecA | Security Architect | Integra políticas de seguridad dentro del marco de arquitectura empresarial y gestión de riesgos organizacionales. | ISO; NIST; ISACA |  |
| ARB | Architecture Review Board | Órgano de gobierno encargado de validar conformidad arquitectónica, excepciones y evolución de la hoja de ruta empresarial. | The Open Group |  |
| PM | Portfolio / Program Manager | Gestiona programas e inversiones estratégicas asegurando alineación con la hoja de ruta arquitectónica empresarial. | PMI; ISO |  |


## Roles propuestos en arquitecturas cuánticas

A diferencia del ámbito clásico, la arquitectura cuántica se encuentra en una etapa temprana de madurez organizacional. Mientras que la arquitectura empresarial tradicional se ha consolidado mediante marcos estandarizados y estructuras de gobierno ampliamente adoptadas, el dominio cuántico aún evoluciona en un entorno predominantemente experimental, impulsado por centros de investigación, laboratorios industriales y proveedores tecnológicos especializados. Sin embargo, en la medida en que las capacidades cuánticas comienzan a integrarse en contextos empresariales, particularmente bajo modelos de computación híbrida clásico-cuántica, se observa la necesidad de definir roles que permitan incorporar dichas capacidades dentro del marco de arquitectura empresarial existente. En este sentido, organizaciones como IBM Quantum, Google Quantum AI, Microsoft Azure Quantum e IonQ han comenzado a estructurar equipos que combinan conocimientos en física/mecánica cuántica, ingeniería de software, integración de sistemas y gobierno tecnológico.
Por otro lado, desde la perspectiva de arquitectura empresarial, las arquitecturas puramente cuánticas enfrentan desafíos en torno a aspectos relacionados con:
- Evaluar la pertinencia estratégica de la adopción cuántica.
- Integrar servicios cuánticos dentro del portafolio empresarial.
- Gestionar riesgos tecnológicos y regulatorios.
- Garantizar interoperabilidad con infraestructuras existentes.
Por esta razón, los roles identificados en este dominio deben entenderse como extensiones especializadas dentro del marco empresarial, orientadas a habilitar la incorporación controlada de las capacidades cuánticas en proyectos emergentes. En la Tabla 71 se presenta la síntesis de los roles propuestos para el ámbito de la arquitectura empresarial cuántica, especificando su función dentro del ecosistema organizacional, el organismo o institución que respalda conceptualmente su definición y los marcos o referentes que sustentan su existencia:
**Tabla 71. Identificación de roles para arquitecturas cuánticas.**

### Tabla extraída 71

| Acrónimo | Rol | Descripción en contexto de arquitectura empresarial | Organismo / Institución | Fuente / Marco |
| --- | --- | --- | --- | --- |
| QEA | Quantum Enterprise Architect | Evalúa la incorporación de capacidades cuánticas dentro del mapa de capacidades empresariales, analizando impacto estratégico, tecnológico y organizacional. | The Open Group ( adaptado ); ISO/IEC 42010; NISQ | [34], [42], [130], [133], [134] |
| QSA | Quantum Solution Architect | Diseña soluciones que integran componentes cuánticos con aplicaciones empresariales existentes, garantizando alineación con la arquitectura de referencia. | IBM Quantum; Microsoft Azure Quantum |  |
| QDA | Quantum Data Architect | Define cómo los flujos de datos empresariales interactúan con servicios cuánticos, asegurando trazabilidad y consistencia de información. | DAMA; IBM Quantum |  |
| QIA | Quantum Integration Architect | Diseña patrones de integración entre sistemas empresariales y backends cuánticos, gestionando APIs , colas de ejecución y orquestación híbrida. | Oak Ridge National Lab; IBM |  |
| QSecA | Quantum Security Architect | Analiza el impacto de la computación cuántica en la criptografía empresarial y define estrategias de transición hacia esquemas poscuánticos . | NIST, NISQ |  |
| QGov | Quantum Governance Lead | Define políticas, lineamientos y criterios de adopción responsable de tecnologías cuánticas dentro del marco de gobierno corporativo. | ISO; Enterprise Governance bodies |  |


## Roles propuestos en arquitecturas híbridas

La arquitectura empresarial híbrida surge como un punto de convergencia entre las estructuras consolidadas de la arquitectura clásica y las capacidades emergentes de la computación cuántica. Desde la perspectiva empresarial, el desafío principal al incluir roles orientados a contar con un grado de conocimiento integral en ambas áreas trae desafíos relacionados con aspectos como:
- Alineación estratégica de las iniciativas híbridas.
- Coherencia entre dimensiones de negocio, datos y tecnología.
- Interoperabilidad controlada entre plataformas.
- Gestión de riesgos asociados a tecnologías emergentes.
- Gobernanza y trazabilidad en la evolución arquitectónica.
Como resultado, los roles híbridos representan funciones articuladoras capaces de integrar ambos dominios bajo un marco común de arquitectura empresarial. De este modo, sus funciones y responsabilidades requieren desarrollar competencias multidisciplinares. En la Tabla 72 se presentan los roles identificados para la arquitectura empresarial híbrida, destacando su papel dentro del gobierno arquitectónico y los marcos que sustentan su definición conceptual.
**Tabla 72. Identificación de roles para arquitecturas híbridas.**

### Tabla extraída 72

| Acrónimo | Rol | Descripción en contexto de arquitectura empresarial híbrida | Organismo / Institución | Fuente / Marco |
| --- | --- | --- | --- | --- |
| AEH | Arquitecto(a) Empresarial Híbrido(a) | Define y gobierna la arquitectura empresarial híbrida, integrando capacidades clásicas y cuánticas bajo un marco común de estrategia, gobierno y evolución tecnológica. | The Open Group; ISO |  |
| ASH | Arquitecto(a) de Solución Híbrido(a) | Diseña soluciones empresariales que combinan componentes clásicos y cuánticos, asegurando alineación con la arquitectura de referencia y el portafolio organizacional. | The Open Group; Cloud Providers | [42], [138], [139] |
| AIH | Arquitecto(a) de Integración Híbrido(a) | Define patrones de interoperabilidad entre sistemas empresariales tradicionales y backends cuánticos, garantizando consistencia de contratos y flujos de información. | IBM; Oak Ridge National Lab |  |
| DIO | Arquitecto(a) de Datos e IA Híbrido(a) | Gestiona la arquitectura de datos y analítica en entornos híbridos, asegurando calidad, trazabilidad y alineación con capacidades de negocio. | DAMA; Enterprise Architecture bodies | [42], [131] |
| SecAH | Arquitecto(a) de Seguridad Híbrida | Integra controles de seguridad clásica y estrategias poscuánticas dentro del marco corporativo de gestión de riesgos. | ISO; NIST |  |
| SREH | Arquitecto(a) de Confiabilidad Empresarial Híbrida | Define estándares de resiliencia, continuidad y desempeño en plataformas híbridas empresarialmente críticas. | Google; ISO |  |
| PMH | Gestor(a) de Portafolio Híbrido | Prioriza iniciativas híbridas alineadas con la hoja de ruta estratégica empresarial y la gestión de inversiones tecnológicas. | PMI; ISO | [152], [153] |
| ARB | Architecture Review Board Híbrido | Supervisa decisiones arquitectónicas relacionadas con integración clásico-cuántica y valida la evolución de la línea base arquitectónica híbrida. | The Open Group |  |
| EQ | Especialista Cuántico Empresarial | Aporta conocimiento técnico especializado en hardware, SDKs y algoritmos, asesorando decisiones arquitectónicas híbridas. | IBM Quantum; Academic institutions |  |
| IN | Stakeholder Empresarial | Representa intereses de negocio, clientes o reguladores en decisiones de adopción híbrida. | ISO; Enterprise Governance |  |


## Caracterización de roles aplicables en el proceso

A partir del análisis de los roles por cada dominio, se realizó un análisis comparativo orientado a reconocer funciones equivalentes, superpuestas y complementarias. Este ejercicio ayudó a construir un mapa de convergencia de responsabilidades que sirvió como base para definir el conjunto mínimo de roles requeridos por el proceso. En la Tabla 73 se presenta el cruce comparativo entre todos los roles identificados y el resultado consolidado adoptado en el proceso. La definición final de estos roles se fundamentó en los lineamientos del modelo de gestión de procesos basado en COMPETISOFT  y las recomendaciones de la norma ISO/IEC 24773 , complementados con las directrices del Software Engineering Body of Knowledge SWEBOK , las prácticas de gobierno arquitectónico de TOGAF  y del Architecture Capability Framework .
En general, los lineamientos propuestos por cada estándar y/o norma define un conjunto de actividades para facilitar la definición de roles:
Identificación de fuentes de referencia: Revisión de marcos, metodologías y estándares que definen responsabilidades arquitectónicas en entornos clásicos, híbridos y cuánticos.
Análisis comparativo de funciones: Mapeo de competencias y responsabilidades asociadas a cada rol dentro de los tres dominios, identificando convergencias y brechas.
Normalización terminológica: Adopción de una nomenclatura común (acrónimos y definiciones) que facilite la trazabilidad entre dimensiones que conforman el proceso (DC, DO, DCD).
Agrupamiento funcional: Consolidación de los roles con funciones afines en categorías operativas (fundamentales y complementarias) según su impacto dentro del proceso.
Validación de aplicabilidad organizacional: Ajuste de los roles para su viabilidad en empresas pequeñas, medianas y grandes, considerando posibles fusiones de funciones o externalización de competencias especializadas.
Asignación de responsabilidades por actividad: Definición explícita de cuáles roles intervienen en cada actividad dentro proceso.
Las dimensiones funcionales empleadas para estructurar el análisis comparativo de roles surgen de la descomposición tradicional de la arquitectura empresarial en sus dominios fundamentales, ampliamente formalizados en marcos como TOGAF  y en lenguajes de modelado como ArchiMate . Estas dimensiones constituyen una abstracción organizacional que clasifica responsabilidades arquitectónicas según su foco primario de intervención, independientemente del paradigma tecnológico subyacente (clásico, cuántico o híbrido). A partir de esta base conceptual, se incorporaron dimensiones transversales adicionales: seguridad, confiabilidad, gestión de portafolio y especialización técnica, derivadas de estándares de gobierno y prácticas de ingeniería reconocidas en normas como la ISO/IEC  y el SWEBOK , con el fin de capturar funciones emergentes asociadas a la integración clásico-cuántica. En la Tabla 73 se presenta el mapa comparativo resultante, donde cada dimensión funcional sirve como eje de referencia para relacionar los roles identificados en los tres enfoques arquitectónicos analizados.
**Tabla 73. Roles consolidados.**

### Tabla extraída 73

| Dimensión Funcional | Arquitectura Clásica | Arquitectura Cuántica | Arquitectura Híbrida | Grado de relación |
| --- | --- | --- | --- | --- |
| Arquitectura Empresarial (Nivel Estratégico) | EA – Enterprise Architect | QEA – Quantum Enterprise Architect | AEH – Arquitecto(a) Empresarial Híbrido(a) | Evolución del gobierno empresarial desde dominio TI tradicional hacia incorporación estratégica de capacidades cuánticas y su integración organizacional. |
| Arquitectura de Negocio | BA – Business Architect | — | (Integrado en AEH) | En el dominio cuántico la arquitectura de negocio no aparece como rol autónomo; su función se absorbe en QEA. En híbrido se articula dentro de AEH. |
| Arquitectura de Datos | DA – Data Architect | QDA – Quantum Data Architect | DIO – Arquitecto(a) de Datos e IA Híbrido(a) | La dimensión de datos evoluciona hacia integración con analítica avanzada y flujos híbridos clásico-cuánticos. |
| Arquitectura de Aplicaciones / Soluciones | AA – Application Architect | QSA – Quantum Solution Architect | ASH – Arquitecto(a) de Solución Híbrido(a) | Transición desde diseño de aplicaciones empresariales hacia soluciones que combinan servicios clásicos y cuánticos. |
| Arquitectura Tecnológica / Infraestructura | TA – Technology Architect | QIA – Quantum Integration Architect | AIH – Arquitecto(a) de Integración Híbrido(a) | La infraestructura evoluciona hacia modelos de orquestación híbrida e interoperabilidad con backends cuánticos. |
| Arquitectura de Seguridad | SecA – Security Architect | QSecA – Quantum Security Architect | SecAH – Arquitecto(a) de Seguridad Híbrida | Expansión desde seguridad tradicional hacia estrategias poscuánticas y transición criptográfica. |
| Confiabilidad / Resiliencia | (Generalmente bajo TA o SRE) | — | SREH – Arquitecto(a) de Confiabilidad Empresarial Híbrida | En clásico no siempre se define como rol autónomo; en híbrido emerge como especialización explícita debido a complejidad operacional. |
| Gestión de Portafolio / Programa | PM – Portfolio / Program Manager | — | PMH – Gestor(a) de Portafolio Híbrido | La gestión estratégica permanece constante; en híbrido incorpora evaluación de inversiones cuánticas. |
| Gobierno Arquitectónico | ARB – Architecture Review Board | QGov – Quantum Governance Lead | ARB Híbrido | El gobierno evoluciona desde validación clásica hacia supervisión de integración clásico-cuántica. |
| Especialización Técnica Cuántica | — | (Especialistas técnicos en laboratorios) | EQ – Especialista Cuántico Empresarial | Rol inexistente en clásico; surge como soporte experto para decisiones arquitectónicas híbridas. |
| Representación de Intereses de Negocio | Stakeholders | — | IN – Stakeholder Empresarial | En cuántico temprano no se formaliza; en híbrido se integra explícitamente dentro del marco de gobierno. |

Con base en las relaciones identificadas en la Tabla 73, se realizó un ejercicio de convergencia orientado a identificar equivalencias, superposiciones y dependencias estructurales entre los roles. Para lograrlo, la consolidación se basó en tres criterios:
- Equivalencia estratégica: Roles con responsabilidad de gobierno y alineación organizacional se integraron bajo una función rectora común.
- Afinidad técnica: Roles con competencias técnicas cercanas, por ejemplo: integración y plataforma, se agruparon cuando su separación no es crítica.
- Viabilidad organizacional: Se evaluó la aplicabilidad en micro, pequeñas, medianas y grandes empresas.
En la Tabla 74 se presenta el detalle de cada uno de los roles consolidados en la Tabla 73, junto con su tipo asociado y descripción que determina su relación con el proceso:
**Tabla 74. Descripción de roles definidos en el proceso.**

### Tabla extraída 74

| Rol Consolidado | Acrónimo | Dominios de origen | Nivel de Intervención | Justificación | Tipo |
| --- | --- | --- | --- | --- | --- |
| Arquitecto(a) Empresarial del Proceso | AEP | EA / QEA / AEH | Estratégico | Rol que d efine lineamientos, asegura alineación con estrategia organizacional y gobierna la evolución arquitectónica. | Fundamental |
| Arquitecto(a) de Solución del Proceso | ASP | AA / QSA / ASH | Táctico | Diseña soluciones alineadas con la arquitectura integrando componentes clásicos y cuánticos . |  |
| Arquitecto(a) de Integración del Proceso | AIP | TA / QIA / AIH | Táctico | Garantiza interoperabilidad, y orquestación híbrida y coherencia tecnológica. |  |
| Arquitecto(a) de Datos del Proceso | ADP | DA / QDA / DIO | Táctico | Asegura gobierno, calidad y trazabilidad de datos en entornos híbridos. |  |
| Arquitecto(a) de Seguridad del Proceso | ASecP | SecA / QSecA / SecAH | Transversal | Gestiona riesgos clásicos y poscuánticos dentro del marco corporativo. |  |
| Órgano de Gobierno Arquitectónico | OGA | ARB / QGov / ARB Híbrido | Gobierno | Supervisa conformidad arquitectónica, excepciones y evolución de la línea base. |  |
| Gestor(a) de Portafolio Arquitectónico | GPA | PM / PMH | Estratégico | Prioriza iniciativas y asegura coherencia entre inversiones y hoja de ruta arquitectónica. Puede integrarse con dirección de TI. | Complementario |
| Especialista Tecnológico Cuántico | ETC | EQ | Operativo | Proporciona conocimiento técnico avanzado en hardware, SDKs y algoritmos cuánticos. Puede ser interno o contratado bajo demanda. | Externo |
| Stakeholder Empresarial | SE | IN | Estratégico | Representa intereses de negocio, regulatorios o de mercado. |  |

Con base en los resultados, el proceso quedó conformado por un total de nueve (9) roles. De estos, seis (6) fueron clasificados como fundamentales, al constituir la estructura mínima necesaria para asegurar dirección estratégica, diseño arquitectónico, integración tecnológica, gobierno de datos, gestión de seguridad y supervisión formal de la arquitectura. Además, se identificó un (1) rol complementario, orientado a fortalecer la articulación entre la hoja de ruta arquitectónica y la gestión de inversiones organizacionales. Finalmente, se incluyen dos (2) roles externos, cuya participación no es permanente dentro del proceso, pero resultan relevantes para aportar conocimiento especializado y validar decisiones desde la perspectiva del negocio.

## Clasificación de roles por tipo de empresa

Los roles definidos en la sección anterior conforman la base mínima para la ejecución y gobierno del proceso. Sin embargo, la industria presenta una alta variabilidad en términos de tamaño, nivel de madurez tecnológica, capacidad de inversión y grado de especialización del talento humano . Estas diferencias influyen directamente en como los roles pueden combinarse o formalizarse dentro de cada organización. Por esta razón, resulta pertinente realizar un análisis complementario que determine la configuración más adecuada del modelo de roles según el tipo de empresa.
Para lograr esta caracterización, se tomó como base la clasificación por tipo de empresa definida por la Organisation for Economic Co-operation and Development (OECD) ; la definición propuesta por el Banco Mundial (World Bank) ; y la Comisión Europea (Inciso 2003/361/EC) relativa a la definición de micro, pequeñas y medianas empresas . Estas fuentes proporcionan criterios internacionales basados en número de empleados (y en algunos casos) en niveles de facturación y activos, que permiten establecer una segmentación empresarial consistente y comparable para efectos del análisis de interés. En la Tabla 75 se presenta la clasificación obtenida luego de analizar y estudiar la base bibliográfica utilizada como referencia:
**Tabla 75. Clasificación de tipos de empresa.**

### Tabla extraída 75

| Tipo | Criterios | Características organizacionales y tecnológicas |  |
| --- | --- | --- | --- |
|  | Cuantitativos | Cualitativos |  |
| Microempresa Startup | Hasta 10 empleados. Facturación anual ≤ 100 mil USD. Baja o nula inversión en I+D. | Procesos informales o en etapa inicial. Alta flexibilidad operativa. Dependencia de pocos perfiles multifuncionales. | Estructura organizacional simple, con roles integrados en un mismo recurso . Uso de herramientas abiertas o servicios en la nube de bajo costo. Orientación a proyectos piloto o validaciones de concepto. |
| Pequeña/ Mediana empresa ( PyME ) | Entre 11 y 250 empleados. Facturación anual entre 100 mil y 10 millones USD. Inversión en I+D entre 1–5 % del presupuesto anual. | Procesos parcialmente formalizados. Gestión técnica diferenciada por área o producto. Capacidad de incorporar roles complementarios especializados. | Estructura más definida, con separación entre arquitectura, desarrollo e integración. Inicio de prácticas formales de gestión arquitectónica e interoperabilidad. Uso de plataformas híbridas comerciales o frameworks estandarizados, por ejemplo: Azure Quantum, IBM Hybrid Cloud, entre otros. |
| Gran empresa / Corporación | Más de 250 empleados. Facturación anual superior a 10 millones USD. Inversión en I+D ≥ 5 % del presupuesto anual. | Procesos plenamente formalizados. Alta madurez tecnológica y organizacional. Equipos dedicados para cada dominio arquitectónico. | Estructura jerárquica compleja con funciones especializadas. Presencia de un comité de gobierno arquitectónico (ARB). Capacidad para desarrollar o adaptar su propia arquitectura híbrida corporativa. Integración con ecosistemas cuánticos empresariales y laboratorios de innovación. |

Esta clasificación sirve como punto de partida para establecer un criterio de segmentación de roles por tipo de empresa, donde:
- En microempresas o startups: Los roles tienden a fusionarse por limitaciones de recursos, promoviendo la multifuncionalidad y la colaboración directa.
- En pequeñas y medianas empresas: Se alcanzan estructuras semiformales, donde los roles complementarios comienzan a operar de manera diferenciada, fortaleciendo la trazabilidad y la integración técnica.
- En grandes empresas o corporaciones. Los roles evolucionan hacia estructuras especializadas y gobernadas, donde se institucionalizan funciones de arquitectura, interoperabilidad y control bajo comités de gobierno y equipos de fiabilidad híbrida.
Teniendo en cuenta lo anterior, la adaptación del modelo de roles por tipo de empresa responde a un principio de proporcionalidad organizacional, donde la estructura arquitectónica se configura en función de la capacidad instalada, la madurez tecnológica y el nivel de formalización de procesos. A partir de la clasificación presentada, es posible identificar tres configuraciones organizacionales diferenciadas: integración funcional, diferenciación progresiva y especialización estructurada.
En el caso de las microempresas/startups: El proceso está delimitado por entornos con recursos limitados, estructuras organizacionales simples y alta presión por realizar iteraciones de entrega rápidas. Bajo estas condiciones, mantener la separación formal de todos los roles consolidados generaría redundancia y sobrecarga operativa. Por esta razón, el análisis funcional determinó que las responsabilidades estratégicas, de diseño e integración pueden concentrarse en un único rol central, mientras que las funciones altamente especializadas (como la experticia cuántica) pueden externalizarse bajo demanda. La prioridad en este contexto es garantizar cobertura funcional mínima sin comprometer agilidad ni viabilidad económica de la organización (ver la Tabla 76):
**Tabla 76. Roles aplicables en una microempresa/startup.**

### Tabla extraída 76

| Nombre del Rol | Acrónimo | Roles fusionados / absorbidos | Observación funcional |
| --- | --- | --- | --- |
| Arquitecto(a) e mpresarial del p roceso i ntegrado | AEP | ASP, AIP, OGA ASecP y GPA | Figura central que asume dirección estratégica, diseño, integración y coordinación básica. En una empresa con poca o nula capacidad de contratar perfiles especializados, el OGA no existe como comité, y sus tareas recaen sobre el AEP. |
| Arquitecto(a) de d atos del Proceso | ADP | — | Puede ser compartido o externo |
| Especialista t ecnológico c uántico | ETC | — | Rol externo bajo demanda. |

Sin embargo, en este punto es importante resaltar al lector que la adopción de procesos formales de arquitectura es poco viable en microempresas/startups, ya que este tipo de organizaciones no cuentan con el músculo financiero, de infraestructura, de recursos humanos y de tiempo para adoptar un marco de trabajo que exige una estructura organizacional más madura. En este sentido, la combinación de múltiples roles en una misma persona solo es posible si quienes participan en la ejecución del proceso poseen habilidades asociadas con pensamiento sistémico, capacidad de integración técnica, toma de decisiones estratégicas y aprendizaje autónomo continuo, de modo que puedan desempeñar funciones diversas, adaptarse a los cambios tecnológicos y adquirir competencias de forma proactiva conforme evoluciona la arquitectura híbrida. No obstante, incluso bajo esos supuestos, la ejecución de un proceso formal es un reto significativo en este tipo de entornos organizacionales.
En el caso de las pequeñas y medianas empresas (PyMEs): El proceso arquitectónico híbrido se desarrolla en un entorno organizacional con mayor estabilidad estructural y disponibilidad de recursos que en las microempresas, aunque aún con restricciones presupuestarias y de especialización. A diferencia del escenario anterior, en este tipo de organizaciones comienza a ser necesaria una diferenciación explícita de responsabilidades para evitar la sobrecarga técnica y estratégica en una sola figura. La existencia de múltiples proyectos o líneas de servicio exige mayor trazabilidad, control técnico y alineación formal con la estrategia empresarial (ver la Tabla 77).
**Tabla 77. Roles aplicables en una pequeña y mediana empresa.**

### Tabla extraída 77

| Nombre del rol | Acrónimo | Roles fusionados / absorbidos | Observación funcional |
| --- | --- | --- | --- |
| Arquitecto(a) e mpresarial del p roceso | AEP | Puede absorber al A DP | Responsable formal de alineación estratégica y coherencia arquitectónica transversal. Diseña soluciones alineadas con la arquitectura de referencia y necesidades del negocio. |
| Arquitecto(a) de i ntegración del p roceso | AIP | Puede absorber al ASecP y al ADP | Gestiona interoperabilidad y coordinación técnica entre componentes clásicos y cuánticos. |
| Gestor(a) de p ortafolio a rquitectónico | GPA | — | Coordina iniciativas y prioriza inversiones alineadas con la hoja de ruta arquitectónica. |
| Órgano de g obierno a rquitectónico (simplificado) | OGA | — | Opera como comité técnico periódico o mecanismo formal de revisión arquitectónica. |
| Especialista t ecnológico c uántico | ETC | — | Consultor recurrente o especialista a tiempo parcial según necesidad. |
| Stakeholder e mpresarial | SE | — | Participa en decisiones estratégicas y validación de impacto organizacional. |

En este escenario, la seguridad (ASecP) y los datos (ADP) pueden mantenerse como funciones parcialmente integradas dentro del AIP o depender de políticas corporativas ya existentes, siempre que no existan requisitos regulatorios que exijan una separación formal. Esta segmentación es posible porque (a diferencia de las microempresas), el gobierno arquitectónico comienza a institucionalizarse, aunque sin alcanzar aún el nivel de formalidad y especialización propio de las grandes corporaciones.
En el caso de las grandes empresas o corporaciones: El proceso arquitectónico híbrido se implementa en un entorno caracterizado por alta complejidad tecnológica, múltiples unidades de negocio, requerimientos regulatorios estrictos y una cartera diversificada de iniciativas estratégicas. Gracias a estas características, este tipo de organizaciones cuentan con los recursos y capacidad técnica para contar con roles especializados y no requieren fusionar o integrar roles (ver la Tabla 78):
**Tabla 78. Roles aplicables en una empresa grande (corporación).**

### Tabla extraída 78

| Nombre del Rol | Acrónimo | Observación funcional |
| --- | --- | --- |
| Arquitecto(a) empresarial del proceso | AEP | Autoridad estratégica transversal responsable del marco completo de arquitectura híbrida corporativa. |
| Arquitecto(a) de solución del proceso | ASP | Especialistas por dominio, línea de negocio o programa estratégico. |
| Arquitecto(a) de integración del proceso | AIP | Equipo dedicado a interoperabilidad, orquestación híbrida y coherencia tecnológica multi-plataforma. |
| Arquitecto(a) de datos del proceso | ADP | Unidad formal de gobierno de datos, analítica e IA corporativa. |
| Arquitecto(a) de seguridad del proceso | ASecP | Gestión especializada de riesgos clásicos y transición hacia esquemas postcuánticos . |
| Órgano de gobierno arquitectónico | OGA | Comité formal encargado de validar conformidad, excepciones y evolución de la línea base arquitectónica. |
| Gestor(a) de portafolio arquitectónico | GPA | Gestiona inversiones estratégicas y prioriza iniciativas híbridas a nivel corporativo. |
| Especialista tecnológico cuántico | ETC | Equipo interno especializado o alianza estratégica permanente con proveedores tecnológicos. |
| Stakeholder empresarial | SE | Participación institucional en decisiones estratégicas, cumplimiento regulatorio y supervisión ejecutiva. |


## Caracterización del proceso

En esta sección se describen los artefactos y elementos asociados a cada fase del proceso, considerando un escenario de referencia de aplicación en una organización con la capacidad de soportar todos los roles de forma independiente. La razón de esta decisión es meramente ilustrativa, y tiene como propósito mostrar de manera explícita el papel de cada rol en la cadena de eventos del proceso. En este sentido, cualquier lector que tome este documento como referencia, es libre de adaptar los roles siguiendo las recomendaciones realizadas en la sección anterior.

## Documentación del proceso a nivel macro

En la Tabla 79 se presenta el detalle del proceso a nivel macro:
**Tabla 79. Documentación del proceso a nivel macro.**

### Tabla extraída 79

| Nombre del Rol | Acrónimo |
| --- | --- |
| Nombre | Proceso para la d efinición de a rquitecturas e mpresariales h íbridas . |
| Identificador | PDAEH |
| Propósito | Proveer a las organizaciones de software un mecanismo sistemático y gobernable para definir, formalizar, implementar una arquitectura empresarial híbrida clásico-cuántica, alineada con la estrategia organizacional, los objetivos de negocio y los estándares internacionales de calidad arquitectónica. |
| Alcance | El proceso aplica a unidades de TI, oficinas de arquitectura empresarial y equipos de transformación tecnológica de organizaciones que buscan integrar capacidades cuánticas dentro de su ecosistema tecnológico existente. Quedan fuera del alcance de este proceso aspectos como: la implementación de algoritmos cuánticos específicos, el diseño y desarrollo de software a nivel de circuito cuántico, así como la programación directa sobre hardware cuántico. |
| Dimensiones involucradas | DC: Dimensión Conceptual (E1, E2, E3, E4) . DO: Dimensión Organizativa (E9, E10) . DCD: Dimensión de Calidad y Diseño (E5, E6, E7, E8) . |
| Subconjuntos estructurales de origen | S1 (E1, E2) → F1: Definición estratégica . S2 (E3, E4) → F2: Formalización conceptual . S3 (E5, E6) → F3: Configuración estructural . S4 (E9, E10) → F4: Materialización arquitectónica . S5 (E7, E8) → F5: Sistematización del diseño . |
| Entradas globales | Plan estratégico institucional vigente . Inventario del estado actual de la arquitectura (AS-IS) . Catálogo de objetivos y capacidades organizacionales . Marcos de referencia aplicables (TOGAF, ISO/IEC 42010, entre otros) . |
| Salidas globales | Línea Base Arquitectónica (LBA) : Artefacto o conjunto de artefactos que agrupa los resultados obtenidos en todas las fases del proceso. |
| Criterios de inicio | Decisión formal del comité directivo o equivalente . Disponibilidad del equipo de arquitectura con los roles definidos . Acceso a documentación estratégica y tecnológica de la organización . Presupuesto y tiempo asignados al proceso . |
| Criterios de cierre | Validación y aprobación formal de la LBA por el órgano de g obierno a rquitectónico (OGA) . Publicación oficial de la arquitectura de referencia en el repositorio corporativo . Entrega de productos de trabajo verificables por cada fase (F1–F5) . |
| Indicadores globales | Porcentaje ( % ) de elementos E1–E10 formalizados y validados . Número de artefactos generados y aprobados por el OGA . Porcentaje (%) de fases completadas con punto de control aprobado . Grado de trazabilidad desde los objetivos estratégicos hasta los componentes técnicos . |
| Autoridad de aprobación | Órgano de g obierno a rquitectónico (OGA) o su equivalente organizacional . |


## Actividad transversal: revisión de líneas base

Al finalizar cada fase, el arquitecto empresarial del proceso (AEP) remite los artefactos obtenidos para su aprobación por parte del órgano de gobierno arquitectónico (OGA). Este proceso busca verificar la coherencia, completitud, trazabilidad y alineación de los productos generados con los objetivos estratégicos y el contexto organizacional.
- En caso de aprobación, se habilita el avance hacia la siguiente fase del proceso.
- En caso contrario, los artefactos deben ser ajustados para una nueva revisión.
A continuación, se presenta el flujo general que ilustra la dinámica de ejecución de cada fase. Como se observará más adelante, las actividades asociadas a la revisión presentan un patrón recurrente y son activadas mediante la actividad denominada Preparación y envío de artefactos al OGA. En la Figura 25 se presenta el diagrama de actividades relacionadas con este subproceso, donde  representa el identificador de cada fase:
**Figura 25. Flujo de actividades llevadas a cabo por el OGA al finalizar cada fase.**
En la Tabla 80 se presentan el detalle de cada actividad:
**Tabla 80. Actividades de verificación realizadas por el OGA en cada fase.**

### Tabla extraída 80

| Actividad | Nombre | Descripción |
| --- | --- | --- |
| Fx.OGA.A1 | Recepción y registro de artefactos | Actividad en la cual el OGA recibe el paquete de artefactos generados en la fase correspondiente . |
| Fx.OGA.A2 | Convocatoria y agenda de sesión de revisión | Actividad orientada a coordinar la sesión de evaluación, definiendo fecha, participantes, alcance y criterios a considerar durante el análisis de los artefactos. |
| Fx.OGA.A3 | Revisión individual de artefactos por miembros | Actividad en la que cada miembro del OGA analiza los artefactos de manera independiente, evaluando su coherencia, alineación con los objetivos estratégicos y cumplimiento de criterios arquitectónicos definidos. |
| Fx.OGA.A4 | Sesión formal de deliberación y votación | Actividad colaborativa en la que los miembros del OGA discuten los hallazgos identificados, contrastan criterios y emiten una decisión conjunta respecto a la aprobación o rechazo de los artefactos. |
| Fx.OGA.A5 | Emisión del acta de aprobación y notificación al AEP | Actividad que formaliza la decisión de aprobación, documentando los resultados de la evaluación y notificando al AEP para continuar con el flujo del proceso. |
| Fx.OGA.A6 | Documentación de observaciones y envío al AEP | Actividad orientada a consolidar las observaciones, recomendaciones o ajustes requeridos en caso de no aprobación, las cuales son comunicadas al Arquitecto Empresarial del Proceso para su incorporación en el flujo principal. |
| Fx.OGA.A7 | Consolidación de resultados | Actividad final en la que se integran los resultados del proceso de evaluación, asegurando la trazabilidad entre los artefactos revisados, la decisión tomada y las acciones derivadas. |


## Fase 1: Definición estratégica

La Fase 1 delimita el alcance y el propósito de la arquitectura empresarial. Esta fase actúa como el punto de partida que consolida las decisiones estratégicas que orientarán todas las fases siguientes. Su ejecución garantiza que el proceso arquitectónico esté alineado con los objetivos del negocio, el contexto tecnológico y organizacional. En la Tabla 81 se describe la información general que la caracteriza:
**Tabla 81. Documentación de la Fase 1.**

### Tabla extraída 81

| Campo | Descripción |
| --- | --- |
| Nombre | Definición estratégica |
| Código | F1 |
| Subconjunto estructural asociado | S1 |
| Elementos incluidos | E1: Objetivo de la arquitectura . E2: Contexto de la arquitectura . |
| Propósito | Delimitar el alcance estratégico, los objetivos arquitectónicos y el contexto organizacional que justifican y enmarcan la definición de la arquitectura empresarial híbrida. |
| Entradas | Plan estratégico institucional . Inventario de capacidades tecnológicas actuales (AS-IS) . Catálogo de iniciativas y proyectos tecnológicos en curso . Objetivos de negocio y lineamientos de transformación digital . Marcos de referencia seleccionados por la organización . |
| Salidas | LBA-F1: Línea base arquitectónica establecida para la Fase 1, que incluye: DOE: Documento de objetivos estratégicos. MTA : Matriz de trazabilidad objetivos-arquitectura . DCA: Declaración de contexto y alcance arquitectónico . MSP: Mapa de partes interesadas y preocupaciones. |
| Punto de control | Revisión y aprobación de las salidas por el OGA antes de iniciar la fase F2 . |
| Indicadores de cumplimiento | IC-F1-01. Completitud de artefactos del elemento estratégico: T odos los artefactos del elemento de análisis estratégico están formalizados y registrados en la LBA-F1. Umbral: 100 % de artefactos presentes antes de someter el paquete al OGA. IC-F1-02. Completitud de artefactos del elemento de marcos de referencia: T odos los artefactos del elemento de identificación y selección de marcos están formalizados y registrados en la LBA-F1. Umbral: 100 % de artefactos presentes antes de someter el paquete al OGA. IC-F1-0 3 . Pertinencia y suficiencia de los objetivos arquitectónicos: E l DOA refleja fielmente las necesidades y restricciones organizacionales identificadas en el análisis de contexto, con objetivos medibles y alineados con la dirección estratégica. Umbral: sin objetivo ambiguos o sin sustento organizacional al cierre del elemento correspondiente. IC-F1-04. Coherencia del marco teórico adoptado: El MTA justifica la selección de los marcos de referencia adoptados y demuestra su pertinencia para el contexto organizacional. Umbral: todos los marcos seleccionados cuentan con justificación documentada y validada por el SE/GPA. IC-F1-05. Completitud del análisis de contexto organizacional: E l DCA cubre las dimensiones organizacionales relevantes (estratégica, estructural, tecnológica y de procesos) con suficiente profundidad para fundamentar las decisiones arquitectónicas de las fases siguientes. Umbral: cobertura ≥ 95 % de las dimensiones definidas en el alcance del proceso. IC-F1-06. Coherencia de la síntesis de marcos y principios: E l SMP integra de manera consistente los marcos de referencia adoptados y los principios arquitectónicos derivados, sin contradicciones internas ni conflictos con el DOA-v1. Umbral: sin inconsistencias entre marcos o principios al cierre de la síntesis. IC-F1-07. Aprobación del OGA: el OGA emite aprobación formal del paquete LBA-F1. Umbral: aprobación registrada sin observaciones abiertas pendientes. |


## Definición de elementos

En la Tabla 82 y en la Tabla 83, respectivamente, se describen los elementos que conforman la Fase 1 del proceso:
**Tabla 82. Documentación del elemento E1: Objetivo de la arquitectura.**

### Tabla extraída 82

| Campo | Descripción |
| --- | --- |
| Código | E1 |
| F ase asociada | F1 |
| Categoría | Dimensión Conceptual (DC) |
| Propósito del elemento | Establecer los objetivos que justifican la definición de la arquitectura empresarial híbrida, asegurando que el proceso arquitectónico responda a necesidades organizacionales concretas |
| Objetivos específicos | O1: Identificar y formalizar los objetivos de negocio que motivan la adopción de la arquitectura híbrida. O2: Establecer criterios de éxito medibles para la arquitectura. O3: Asegurar la trazabilidad entre los objetivos organizacionales y las decisiones arquitectónicas. |
| Productos generados | Documento de o bjetivos estratégicos ( DOE ) : Artefacto que consolida y formaliza los objetivos estratégicos de la organizació n , definiendo su alcance, prioridades y criterios de evaluació n como base para la alineació n arquitectónica. Matriz de trazabilidad objetivos-arquitectura ( MTA ) : Artefacto que establece la relació n explícita entre los objetivos estratégicos definidos y objetivos propuestos para la arquitectura , permitiendo verificar la coherencia, cobertura y alineació n entre la estrategia organizacional y lo que se espera de la solución técnica. |
| Criterios de aceptación | Los objetivos son aprobados formalmente por el OGA y las partes interesadas clave. Existe trazabilidad explícita y reproducible entre cada objetivo y al menos un componente del modelo arquitectónico. |
| Dependencias estructurales | Ninguna (E1 es el nodo raíz del proceso) |

**Tabla 83. Documentación del elemento E2: Contexto de la arquitectura**

### Tabla extraída 83

| Campo | Descripción |
| --- | --- |
| Código | E2 |
| Fase asociada | F1 |
| Categoría | Dimensión Conceptual (DC) |
| Propósito | Caracterizar el entorno organizacional, tecnológico y regulatorio en el que se definirá e implementará la arquitectura empresarial híbrida , estableciendo las restricciones y condiciones que condicionan las decisiones arquitectónicas. |
| Objetivos específicos | O1: Documentar el estado actual de la arquitectura de la organización (AS-IS). O2: Identificar restricciones organizacionales, regulatorias y tecnológicas aplicables. O3: Mapear el ecosistema de partes interesadas y sus preocupaciones arquitectónicas. |
| Productos generados | Documento de contexto arquitectónico (DCA): Artefacto que describe el entorno organizacional, tecnológico y estratégico en el cual se desarrollará la arquitectura empresarial híbrida, incluyendo el estado actual (AS-IS), las restricciones relevantes y las condiciones que influyen en la toma de decisiones arquitectónicas. Matriz de stakeholders y preocupaciones (MSP): Artefacto que identifica y caracteriza a las partes interesadas relevantes, sus intereses, expectativas y preocupaciones respecto a la arquitectura, permitiendo orientar las decisiones arquitectónicas y asegurar su alineación con las necesidades de l a organización. |
| Criterios de aceptación | El contexto está documentado con un nivel de detalle suficiente para identificar las principales restricciones que influyen en las decisiones de la fase F2. Las partes interesadas han revisado y validado el documento. |
| Dependencias estructurales | E1 : el contexto se define en función de los objetivos arquitectónicos establecidos . |


## Flujo general de actividades

**Figura 26. Flujo de actividades que conforman la Fase 1.**

## Actividades asociadas con el elemento E1

En la Figura 27 se presenta el flujo de actividades correspondientes al subproceso F1.E1:
**Figura 27. Flujo de actividades que conforman el elemento E1.**
Las tablas presentadas a continuación describen el desglose de cada una de las actividades que componen el elemento E1 y su referencia directa en el documento:
- Tabla 84. Actividad F1.E1.A1. Análisis de objetivos estratégicos
- Tabla 85. Actividad F1.E1.A2. Validación de objetivos priorizados.
- Tabla 86. Actividad F1.E1.A3. Formulación de objetivos arquitectónicos.
**Tabla 84. Actividad F1.E1.A1. Análisis de objetivos estratégicos.**

### Tabla extraída 84

| Campo | Descripción |
| --- | --- |
| Código | F1.E1.A1 |
| Nombre | Análisis de objetivos estratégicos. |
| Objetivo | Identificar, analizar y estructurar los objetivos estratégicos de la organización a partir de los insumos institucionales, garantizando su claridad, coherencia interna y alineación con el contexto organizacional . |
| Descripción | Se analizan el plan estratégico institucional y el catálogo de iniciativas con el fin de identificar los objetivos de negocio relevantes, comprender sus relaciones y establecer una base estructurada que permita su posterior traducción a objetivos arquitectónicos. |
| Entradas | Plan estratégico institucional. Catálogo de iniciativas. |
| Salidas | DOE inicial : Documento de objetivos estratégicos . |
| Responsable | AEP : Arquitecto empresarial del proceso. |
| Herramientas | Revisión sistemática de documentos estratégicos. Sesiones colaborativas para interpretación de objetivos. |
| Punto de validación | Verificación de alineación entre objetivos identificados y directrices institucionales definidas por la organización. |
| Tareas |  |
| Se analizan los documentos institucionales para identificar objetivos explícitos, metas y lineamientos estratégicos. Se detectan objetivos no declarados directamente, pero inferibles a partir de iniciativas o políticas organizacionales. Se organizan los objetivos en categorías (negocio, tecnología, innovación) para facilitar su análisis posterior. Se identifican dependencias, redundancias o conflictos entre objetivos. Se registra la información estructurada en un formato base para su validación. |  |

**Tabla 85. Actividad F1.E1.A2. Validación de objetivos priorizados.**

### Tabla extraída 85

| Campo | Descripción |
| --- | --- |
| Código | F1.E1.A2 |
| Nombre | Validación de objetivos priorizados. |
| Objetivo | Someter el conjunto de objetivos identificados a validación por parte de los stakeholders clave, garantizando que la priorización refleje los intereses del negocio y cuente con el aval de los actores relevantes. |
| Descripción | Los stakeholders estratégicos revisan el listado de objetivos estratégicos producido en la actividad anterior, evalúan su pertinencia, coherencia con los intereses organizacionales y proponen ajustes antes de que el AEP proceda a la formulación de objetivos arquitectónicos. |
| Entradas | DOE : Documento de o bjetivos e stratégicos preliminar. |
| Salidas | DOE a probado: Documento de objetivos estratégicos aprobado por el SE/GPA. |
| Responsable | SE: Stakeholder empresarial. GPA: Gestor del portafolio empresarial. |
| Herramientas | Herramientas de gestión documental . Herramientas de reunión síncrona o asíncrona. |
| Punto de validación | Verificación de que los objetivos priorizados cuentan con el aval explícito de los actores clave. |
| Tareas |  |
| Cada stakeholder analiza el DOE y registra sus observaciones respecto a la priorización. Se consolidan las observaciones y se acuerda la versión validada del listado de objetivos. Se documentan los cambios introducidos y su justificación. Se formaliza el listado de objetivos estratégicos validado y se envía al AEP. |  |

**Tabla 86. Actividad F1.E1.A3. Formulación de objetivos arquitectónicos.**

### Tabla extraída 86

| Campo | Descripción |
| --- | --- |
| Código | F1.E1.A3 |
| Nombre | Formulación de objetivos arquitectónicos. |
| Objetivo | Traducir los objetivos estratégicos validados en objetivos arquitectónicos concretos, medibles y trazables, que orienten las decisiones de diseño de la arquitectura empresarial híbrida. |
| Descripción | A partir del D OE aprobado , el AEP reformula los objetivos en términos arquitectónicos aplicando criterios SMART, asigna indicadores de cumplimiento, establece la trazabilidad entre objetivos de negocio y arquitectura, y documenta los supuestos que sustentan cada formulación. |
| Entradas | DOE: Documento de objetivos estratégicos aprobado por el SE/GPA. |
| Salidas | MTA : Matriz de trazabilidad objetivos-arquitectura. |
| Responsable | AEP: Arquitecto empresarial del proceso. |
| Herramientas | Aplicación de criterios de especificidad, medición, alcanzabilidad , relevancia y temporalidad para reformular objetivos siguiendo el modelo SMART. Instrumento para vincular objetivos estratégicos con objetivos arquitectónicos. |
| Punto de validación | Verificación de que cada objetivo estratégico tiene al menos un objetivo arquitectónico asociado y que la trazabilidad está documentada. |
| Tareas |  |
| Cada objetivo se reescribe como objetivo arquitectónico cumpliendo los criterios definidos por el modelo SMART. Se definen métricas e indicadores para evaluar el cumplimiento de cada objetivo en el contexto organizacional. Se construye la matriz que vincula los objetivos de negocio con los arquitectónicos. Se registran las condiciones, restricciones y supuestos que fundamentan cada formulación con base en las definiciones obtenidas en DOE. |  |


## Actividades asociadas con el elemento E2

En la Figura 27 se presenta el flujo de actividades correspondientes al subproceso F1.E2:
**Figura 28. Flujo de actividades que conforman el elemento E2.**
Las tablas presentadas a continuación describen el desglose de cada una de las actividades que componen el elemento E2 y su referencia directa en el documento:
- Tabla 87. Actividad F1.E2.A1. Levantamiento del estado actual (AS-IS).
- Tabla 88. Actividad F1.E2.A2. Análisis de restricciones y condicionantes.
- Tabla 89. Actividad F1.E2.A3. Mapeo de partes interesadas y preocupaciones.
**Tabla 87. Actividad F1.E2.A1. Levantamiento del estado actual (AS-IS).**

### Tabla extraída 87

| Campo | Descripción |
| --- | --- |
| Código | F1.E2.A1 |
| Nombre | Levantamiento del estado actual (AS-IS) |
| Objetivo | Documentar el estado actual de la arquitectura empresarial y tecnológica de la organización, identificando las capacidades existentes, las áreas con potencial híbrido clásico-cuántico y la deuda técnica acumulada. |
| Descripción | El AEP revisa el inventario AS-IS disponible y construye una descripción estructurada de la arquitectura actual, destacando las capacidades que podrían beneficiarse de un enfoque híbrido clásico-cuántico y registrando los aspectos de deuda técnica que condicionarán las decisiones arquitectónicas futuras. |
| Entradas | Inventario AS-IS (estado actual de sistemas, procesos y capacidades organizacionales). |
| Salidas | DCA inicial : Documento de contexto arquitectónico. |
| Responsable | AEP: Arquitecto empresarial del proceso. |
| Herramientas | Revisión sistemática del inventario AS-IS para identificar componentes y capacidades relevantes. Evaluación de qué capacidades actuales admiten una evolución hacia componentes cuánticos. |
| Punto de validación | Verificación de que los sistemas, procesos y capacidades críticas han sido documentados y el potencial híbrido está identificado. |
| Tareas |  |
| Se describe la arquitectura empresarial vigente (procesos, sistemas y capacidades) a partir del inventario AS-IS. Se señalan los componentes o procesos que podrían evolucionar hacia implementaciones clásico-cuánticas. Se documenta la deuda técnica existente que puede condicionar las decisiones de arquitectura híbrida. |  |

**Tabla 88. Actividad F1.E2.A2. Análisis de restricciones y condicionantes.**

### Tabla extraída 88

| Campo | Descripción |
| --- | --- |
| Código | F1.E2.A2 |
| Nombre | Análisis de restricciones y condicionantes. |
| Objetivo | Identificar y clasificar las restricciones organizacionales, regulatorias y tecnológicas que condicionarán el diseño de la arquitectura empresarial híbrida, valorando su impacto sobre las decisiones arquitectónicas. |
| Descripción | El AEP analiza el contexto interno y externo de la organización para identificar las restricciones que delimitan el espacio de soluciones arquitectónicas: restricciones derivadas de la cultura y capacidad organizacional, marcos normativos y regulatorios aplicables, y limitaciones tecnológicas actuales o previstas. |
| Entradas | DCA inicial : Documento de contexto arquitectónico. |
| Salidas | DCA refinado : Documento de contexto arquitectónico actualizado que incorpora las restricciones y condicionantes de la organización. |
| Responsable | AEP: Arquitecto empresarial del proceso. |
| Herramientas | Evaluación de factores culturales, de gobernanza y capacidad interna que condicionan la arquitectura. Identificación de marcos normativos, cumplimiento y requisitos de auditoría aplicables. Revisión de limitaciones e incompatibilidades tecnológicas que restringen las opciones arquitectónicas. |
| Punto de validación | Verificación de que cada restricción identificada ha sido clasificada según su nivel de impacto sobre el diseño arquitectónico. |
| Tareas |  |
| Se identifican limitaciones derivadas de la estructura, cultura y capacidades internas de la organización. Se revisan los marcos normativos y regulatorios que aplican a la organización y su impacto en la arquitectura. Se documentan las limitaciones e incompatibilidades de la infraestructura tecnológica actual. Las restricciones se priorizan según su nivel de influencia sobre las decisiones de diseño arquitectónico. Se señalan los componentes o procesos que podrían evolucionar hacia implementaciones clásico-cuánticas. Se documenta la deuda técnica existente que puede condicionar las decisiones de arquitectura híbrida. |  |

**Tabla 89. Actividad F1.E2.A3. Mapeo de partes interesadas y preocupaciones.**

### Tabla extraída 89

| Campo | Descripción |
| --- | --- |
| Código | F1.E2.A3 |
| Nombre | Mapeo de partes interesadas y preocupaciones. |
| Objetivo | Identificar a todas las partes interesadas relevantes para la arquitectura empresarial híbrida, comprender sus preocupaciones arquitectónicas y consolidar los artefactos que guiarán el diseño orientado a stakeholders . |
| Descripción | El AEP identifica y caracteriza a los stakeholders con interés o influencia sobre la arquitectura, documenta sus preocupaciones arquitectónicas (necesidades, expectativas, restricciones y riesgos percibidos), y consolida esta información en el documento de contexto arquitectónico y el mapa de stakeholders y preocupaciones . |
| Entradas | DCA refinado : Documento de contexto arquitectónico actualizado que incorpora las restricciones y condicionantes de la organización. |
| Salidas | DCA: Documento de contexto arquitectónico actualizado con la sección de stakeholders . MSP: Mapa de stakeholders y preocupaciones. |
| Responsable | AEP: Arquitecto empresarial del proceso. |
| Herramientas | Identificación y caracterización de los actores internos y externos con interés en la arquitectura. Técnica para asociar a cada stakeholder sus necesidades, expectativas, restricciones y riesgos percibidos. |
| Punto de validación | Verificación de que todos los stakeholders clave han sido identificados y sus preocupaciones documentadas y asociadas a los objetivos arquitectónicos. |
| Tareas |  |
| Se reconocen los actores internos y externos con influencia o interés en la arquitectura empresarial híbrida. Para cada stakeholder se documentan sus necesidades, expectativas, restricciones y riesgos percibidos respecto a la arquitectura en el contexto de la organización . Se integra la información de stakeholders en el DCA y se genera el MSP . |  |


## Actividades de sincronización y envío al OGA

**Tabla 90. Actividad F1.E1.A4 {E2}. Preparación y envío de artefactos al OGA.**

### Tabla extraída 90

| Campo | Descripción |
| --- | --- |
| Código | F1.E1.A4 {E2} |
| Nombre | Preparación y envío al OGA. |
| Objetivo | Compilar, estructurar y remitir formalmente al órgano de gobierno arquitectónico (OGA) el paquete completo de artefactos producidos en la Fase 1, a fin de iniciar el proceso de revisión y aprobación. |
| Descripción | El AEP reúne los artefactos generados durante la fase, elabora una presentación ejecutiva que contextualiza el proceso seguido y los resultados obtenidos, y los envía formalmente al OGA para que inicie su proceso de revisión institucional. |
| Entradas | DOA : Documento de o bjetivos a rquitectónicos . MTA : Matriz de t razabilidad a rquitectónica. DCA : D ocumento de c ontexto a rquitectónico. SMP : M apa de s takeholders y p reocupaciones. |
| Salidas | LBA-F1 inicial : Paquete de artefactos de la fase enviado formalmente al OGA. |
| Responsable | AEP: Arquitecto empresarial del proceso. |
| Herramientas | Verificación de integridad y consistencia de los artefactos antes del envío para revisión. Documento de síntesis para contextualizar al OGA sobre los resultados obtenidos durante la ejecución de la fase. |
| Punto de validación | Confirmación de que todos los artefactos requeridos están incluidos y son coherentes entre sí antes del envío formal. |
| Tareas |  |
| Se reúnen y verifican todos los artefactos que conforman el LBA-F1 inicial . Se prepara un resumen ejecutivo que facilite la revisión por parte del OGA. Se remite el paquete completo al OGA a través del canal oficial establecido por el proceso. |  |

**Tabla 91. Actividad F1.E1.A5 {E2}. Ajustar artefactos según observaciones del OGA.**

### Tabla extraída 91

| Campo | Descripción |
| --- | --- |
| Código | F1.E1.A5 {E2} |
| Nombre | Ajustar artefactos según observaciones del OGA. |
| Objetivo | Incorporar las observaciones y correcciones emitidas por el OGA en los artefactos de la Fase 1, y reenviar el paquete ajustado para su nueva revisión o aprobación definitiva. |
| Descripción | Cuando el OGA emite observaciones sin aprobar el paquete, el AEP analiza cada observación, realiza los ajustes correspondientes en los artefactos afectados, documenta los cambios realizados y reenvía el paquete corregido para reiniciar el ciclo de revisión. |
| Entradas | LBA-F1 actualizado : Paquete de artefactos de la fase remitido por el OGA. |
| Salidas | LBA-F1: Paquete de artefactos de la fase actualizado con observaciones o concepto de aprobado por el OGA. |
| Responsable | AEP: Arquitecto empresarial del proceso. |
| Herramientas | Registro y seguimiento de cada observación y su estado de resolución. Actualización controlada de artefactos con trazabilidad de cambios. |
| Punto de validación | Verificación de que cada observación del OGA fue atendida y documentada antes del reenvío. |
| Tareas |  |
| Se revisa el acta del OGA y se clasifica cada observación según el artefacto afectado y su nivel de impacto. Se incorporan los cambios requeridos en los artefactos según corresponda Se registra qué se modificó, por qué y cómo responde a la observación planteada. Se remite el paquete ajustado, reiniciando el ciclo de revisión . |  |


## Fase 2: Formalización conceptual

La Fase 2 tiene como propósito establecer los fundamentos conceptuales sobre los cuales se construirá la arquitectura empresarial. La formalización conceptual parte de los artefactos producidos en la Fase 1 y genera un conjunto de artefactos especializados que serán referencia obligatoria en el resto del proceso. El desarrollo de esta fase culmina con una sesión de revisión ante el órgano de gobierno arquitectónico (OGA), cuya aprobación constituye el punto de control que habilita el avance hacia la Fase 3.
En la Tabla 92 se describe la información general que describe esta etapa:
**Tabla 92. Documentación de la Fase 2.**

### Tabla extraída 92

| Campo | Descripción |
| --- | --- |
| Nombre | Formalización conceptual |
| Código | F2 |
| Subconjunto estructural asociado | S2 |
| Elementos incluidos | E3: Nivel de abstracción arquitectónica E4: Vocabulario arquitectónico |
| Propósito | Establecer los fundamentos conceptuales que orientarán el desarrollo de la arquitectura empresarial híbrida. Esta fase define los niveles de abstracción que estructurarán la representación arquitectónica y normaliza el vocabulario que será utilizado de manera consistente por todos los actores del proceso a lo largo de las fases subsiguientes. |
| Entradas | LBA-F1: Línea base arquitectónica correspondiente a la Fase 1. |
| Salidas | LBA-F2: Línea base arquitectónica establecida para la Fase 2, que incluye: DPV: Documento de perspectivas y vistas arquitectónicas. DNA: Documento de niveles arquitectónicos. MTA: Marco teórico arquitectónico actualizado. ITA: Inventario de términos arquitectónicos. DVA: Diccionario de vocabulario arquitectónico. |
| Punto de control | Sesión de revisión con el ó rgano de g obierno a rquitectónico (OGA) para verificar la coherencia conceptual y terminológica de los fundamentos establecidos. La aprobación del OGA habilita el avance hacia la Fase 3. |
| Indicadores de cumplimiento | IC-F2-01. Completitud de artefactos de E3: DPV, DNA y MTA están formalizados y registrados en la LBA-F2. Umbral: 100 % de artefactos presentes antes de someter el paquete al OGA. IC-F2-02. Completitud de artefactos de E4: ITA y DVA están formalizados y registrados. Umbral: 100 % de artefactos presentes antes de someter el paquete al OGA. IC-F2-03. Coherencia estructural de niveles de abstracción: la jerarquía definida en el DNA es internamente consistente, cubre todas las perspectivas requeridas y presenta trazabilidad vertical entre niveles adyacentes. Umbral: sin inconsistencias estructurales pendientes al cierre de E3. IC-F2-04. Precisión y completitud del vocabulario: las definiciones del DVA son precisas, no ambiguas y cubren la totalidad de los conceptos utilizados en el proceso. Umbral: sin términos faltantes o mal definidos al cierre de E4. IC-F2-05. Trazabilidad con artefactos de Fase 1: los fundamentos conceptuales de F2 son trazables con el DOA, el DCA y el SMP. Umbral: cobertura ≥ 95 % de los objetivos del DOA, verificable en la matriz de trazabilidad del DNA . IC-F2-06. Coherencia inter-elemento E3/E4: los términos del DVA están correctamente posicionados en la estructura de niveles del DNA. Umbral: sin inconsistencias cruzadas entre artefactos de E3 y E4 al cierre de F2.E4.A3. IC-F2-07: Aprobación del OGA: el OGA emite aprobación formal del paquete LBA-F2-v1 documentad a . Umbral: aprobación registrada sin observaciones abiertas pendientes. |


## Definición de elementos

En la Tabla 93 y en la Tabla 94, respectivamente, se describen los elementos que conforman la Fase 2 del proceso:
**Tabla 93. Documentación del elemento E3: Grado de abstracción.**

### Tabla extraída 93

| Campo | Descripción |
| --- | --- |
| Código | E3 |
| Fase asociada | F2 |
| Categoría | Dimensión Conceptual (DC) |
| Propósito del elemento | Definir y estructurar los niveles de abstracción que organizarán la representación de la arquitectura empresarial híbrida. Este elemento establece una jerarquía coherente entre los niveles estratégico, táctico y operativo, asociando a cada uno las perspectivas y vistas arquitectónicas que le corresponden, de modo que exista una base formal para la construcción y comunicación de la arquitectura a diferentes audiencias organizacionales. |
| Objetivos específicos | O1: Identificar y analizar los marcos de referencia arquitectónica que proponen estructuras de niveles de abstracción. Definir la jerarquía de niveles de abstracción aplicable al contexto del proceso . O2: Asociar cada nivel a las perspectivas y vistas arquitectónicas correspondientes. O3: Verificar la coherencia vertical entre los niveles definidos. O4: Documentar los resultados en los artefactos de salida del elemento. |
| Productos generados | Documento de perspectivas y vistas arquitectónicas (DPV): Artefacto que establece el catálogo de perspectivas y vistas arquitectónicas asociadas a cada nivel de abstracción definido, especificando para cada una su propósito, audiencia objetivo, contenido representado y relaciones con otras perspectivas, constituyendo el marco de referencia para la representación de la arquitectura empresarial híbrida. Documento de niveles arquitectónicos (DNA): Artefacto que formaliza la jerarquía de niveles de abstracción adoptada por el proceso , describiendo las características de cada nivel, sus relaciones verticales y las implicaciones que tiene su estructura para la organización y navegación de los demás artefactos del proceso. Marco teórico arquitectónico actualizado (MTA): Artefacto que incorpora al marco teórico inicial (MTA) definido en la Fase 1, las decisiones conceptuales tomadas durante el Elemento E3, enriqueciendo la base de conocimiento del proceso con los criterios de selección y adaptación de los niveles de abstracción adoptados. |
| Criterios de aceptación | Los niveles definidos cubren las perspectivas requeridas por la organización. Existe coherencia y trazabilidad entre niveles adyacentes de la jerarquía. El OGA valida la pertinencia y suficiencia de la estructura de niveles propuesta. |
| Dependencias estructurales | E1, E2: El grado de abstracción se define con base los objetivos y el contexto. |

**Tabla 94. Documentación del elemento E4: Glosario de términos y definiciones.**

### Tabla extraída 94

| Campo | Descripción |
| --- | --- |
| Código | E4 |
| Fase asociada | F2 |
| Categoría | Dimensión Conceptual (DC) |
| Propósito del elemento | Normalizar y documentar el vocabulario arquitectónico que será utilizado de manera consistente a lo largo del proceso. Este elemento garantiza la comunicación unívoca entre los actores involucrados, eliminando ambigüedades terminológicas que puedan comprometer la coherencia del proceso o la calidad de los artefactos producidos en fases posteriores. |
| Objetivos específicos | O1: Identificar y recopilar los términos arquitectónicos relevantes para el proceso a partir de los marcos de referencia adoptados. O2: Definir con precisión cada término, evitando ambigüedades y estableciendo su alcance en el contexto del proceso. O3: Establecer relaciones conceptuales entre los términos del vocabulario (jerarquías, equivalencias y relaciones). O4: Validar el vocabulario con las partes interesadas y los actores clave del proceso. O5: Producir el diccionario oficial de términos arquitectónicos del proceso . |
| Productos generados | Inventario de términos arquitectónicos (ITA): A rtefacto que recopila y clasifica por categorías conceptuales la totalidad de los términos arquitectónicos relevantes para el proceso , indicando para cada término su denominación, categoría, fuente de referencia y relaciones con otros términos del inventario. Diccionario de vocabulario arquitectónico (DVA): A rtefacto que provee la definición formal y precisa de cada término incluido en el ITA, estableciendo su alcance en el contexto del proceso , sus relaciones conceptuales (jerarquías, equivalencias y relaciones parte-todo) y constituyéndose como la referencia terminológica oficial del proceso a lo largo de todas sus fases. |
| Criterios de aceptación | El vocabulario cubre todos los conceptos utilizados en el proceso y sus artefactos. Las definiciones son precisas, completas y no presentan ambigüedades. Las relaciones conceptuales entre términos están correctamente establecidas . El OGA aprueba el diccionario como referencia terminológica oficial del proceso. |
| Dependencias estructurales | E1, E2: El grado de abstracción se define con base los objetivos y el contexto. |


## Flujo general de actividades

**Figura 29. Flujo general de actividades que conforman la Fase 2.**

## Actividades asociadas con el elemento E3

En la Figura 30 se presenta el flujo de actividades correspondientes al subproceso F2.E3:
**Figura 30. Flujo de actividades que conforman el elemento E3.**
Las tablas presentadas a continuación describen el desglose de cada una de las actividades que componen el elemento E3 y su referencia directa en el documento:
- Tabla 95. Actividad F2.E3.A1. Definición de perspectivas y vistas arquitectónicas.
- Tabla 96. Actividad F2.E3.A2. Validación perspectivas niveles de abstracción.
- Tabla 97. Actividad F2.E3.A3. Formalización del modelo de abstracción arquitectónica.
**Tabla 95. Actividad F2.E3.A1. Definición de perspectivas y vistas arquitectónicas.**

### Tabla extraída 95

| Campo | Descripción |
| --- | --- |
| Código | F2.E3.A1 |
| Nombre | Definición de perspectivas y vistas arquitectónicas. |
| Objetivo | Revisar y analizar los marcos de referencia arquitectónica adoptados en la Fase 1 para identificar las estructuras de niveles de abstracción que sean pertinentes para el contexto del proceso . |
| Descripción | El AEP realiza una revisión sistemática del MTA y del DOA, identificando en los marcos de referencia adoptados (TOGAF, Zachman, ArchiMate u otros) las estructuras de niveles de abstracción que proponen. Se analiza la pertinencia de cada estructura en función del contexto organizacional y los objetivos arquitectónicos establecidos, documentando los hallazgos en una bitácora de análisis. El resultado de esta actividad es una propuesta inicial de jerarquía de niveles de abstracción justificada en los marcos analizados. |
| Entradas | DOA: Documento de objetivos arquitectónicos. MTA: Marco teórico arquitectónico inicial. |
| Salidas | DPV inicial : Propuesta de objetivos estratégicos y niveles de abstracción. |
| Responsable | AEP: Arquitecto empresarial del proceso. |
| Herramientas | Marcos de referencia arquitectónica (TOGAF, Zachman, ArchiMate , FEAF u otros adoptados en F1) . Herramientas de gestión documental . |
| Punto de validación | C oherencia de la propuesta con los marcos analizados y con los objetivos del DOA inicial . |
| Tareas |  |
| Revisar el MTA para identificar los marcos de referencia adoptados y sus estructuras de niveles. Analizar la propuesta de niveles de abstracción de cada marco identificado. Evaluar la pertinencia de cada estructura en función del DOA y el contexto organizacional. Seleccionar y adaptar la estructura de niveles más adecuada para el proceso . Documentar la propuesta inicial justificando las decisiones de selección y adaptación. |  |

**Tabla 96. Actividad F2.E3.A2. Validación perspectivas niveles de abstracción.**

### Tabla extraída 96

| Campo | Descripción |
| --- | --- |
| Código | F 2 .E 3 .A2 |
| Nombre | Validación perspectivas nivel es de abstracción. |
| Objetivo | Someter el conjunto de objetivos identificados a validación por parte de los stakeholders clave, garantizando que la priorización refleje los intereses del negocio y cuente con el aval de los actores relevantes. |
| Descripción | Los stakeholders estratégicos (SE/GPA) revisan el listado de objetivos estratégicos (DOE-v1) producido en la actividad anterior, evalúan su pertinencia, coherencia con los intereses organizacionales y proponen ajustes antes de que el AEP proceda a la formulación de objetivos arquitectónicos. |
| Entradas | DPV inicial : Propuesta inicial de niveles de abstracción. |
| Salidas | DPV actualizado: Propuesta de o bjetivos e stratégicos y niveles de abstracción actualizada . |
| Responsable | SE: Stakeholder empresarial. GPA: Gestor del portafolio empresarial. |
| Herramientas | Análisis del DPV por parte de cada stakeholder . Reunión formal o asíncrona para discutir y aprobar la priorización de objetivos. |
| Punto de validación | Verificación de que los objetivos priorizados cuentan con el aval explícito de los actores clave. |
| Tareas |  |
| Definir los atributos de cada perspectiva arquitectónica (propósito, audiencia, contenido). Asociar las perspectivas definidas a los niveles de abstracción correspondientes. Especificar las vistas que componen cada perspectiva. Documentar las relaciones e interacciones entre perspectivas y vistas. |  |

**Tabla 97. Actividad F2.E3.A3. Formalización del modelo de abstracción arquitectónica.**

### Tabla extraída 97

| Campo | Descripción |
| --- | --- |
| Código | F2.E3.A3 |
| Nombre | Formalización del modelo de abstracción arquitectónica. |
| Objetivo | Integrar los resultados del análisis de marcos y la definición de perspectivas en el d ocumento de n iveles Arquitectónicos (DNA) y actualizar el m arco t eórico a rquitectónico (MTA), verificando la coherencia del conjunto de artefactos producidos por el Elemento E3. |
| Descripción | El AEP integra los resultados de las actividades anteriores , que formaliza la jerarquía completa de niveles de abstracción con sus perspectivas y vistas asociadas, sus relaciones verticales y las implicaciones para la representación arquitectónica del PDAEH. Adicionalmente, el AEP actualiza el MTA incorporando las decisiones conceptuales tomadas durante el Elemento E3, generando el MTA-v2. El SE/GPA realiza la revisión final del conjunto de artefactos de E3 verificando su coherencia interna y con los artefactos de la Fase 1. |
| Entradas | DPV: Documento de perspectivas y vistas arquitectónicas . MTA actualizado : Marco teórico arquitectónico actualizado . |
| Salidas | DNA : Documento de niveles arquitectónicos . MTA actualizado : Marco teórico arquitectónico actualizado . |
| Responsable | AEP: Arquitecto empresarial del proceso. |
| Herramientas | Herramientas de gestión documental Herramientas de trazabilidad arquitectónica |
| Punto de validación | Consistencia del MTA con las decisiones tomadas en E 2 . Trazabilidad con el DPV y los artefactos de la obtenidos en la Fase 1. |
| Tareas |  |
| Integrar la jerarquía de niveles de abstracción y las perspectivas/vistas en el DNA. Documentar las relaciones verticales entre niveles y sus implicaciones arquitectónicas. Actualizar el MTA con las decisiones conceptuales de E3 para generar el MTA actualizado. Verificar la coherencia entre DNA, DPV y MTA actualizado. Someter el conjunto de artefactos de E3 a revisión final del SE/GPA. Incorporar observaciones finales y cerrar el Elemento E3. |  |


## Actividades asociadas con el elemento E4

En la Figura 31 se presenta el flujo de actividades correspondientes al subproceso F2.E4:
Figura 31. Flujo general de actividades asociadas con el elemento E4.
Las tablas presentadas a continuación describen el desglose de cada una de las actividades que componen el elemento E4 y su referencia directa en el documento:
- Tabla 98. Actividad F2.E4.A1 Recopilación de análisis terminológico.
- Tabla 99. Actividad F2.E4.A2. Construcción del vocabulario arquitectónico unificado.
- Tabla 100. Actividad F2.E4.A3. Validación del vocabulario arquitectónico.
**Tabla 98. Actividad F2.E4.A1 Recopilación de análisis terminológico.**

### Tabla extraída 98

| Campo | Descripción |
| --- | --- |
| Código | F2.E4.A1 |
| Nombre | Recopilación de análisis terminológico |
| Objetivo | Identificar y recopilar de manera sistemática los términos arquitectónicos relevantes para el proceso a partir de los marcos de referencia adoptados y del contexto organizacional, construyendo el inventario base del vocabulario. |
| Descripción | El AEP realiza una revisión exhaustiva del DCA y el DOA para identificar los términos arquitectónicos que emergen de los marcos de referencia adoptados y del contexto organizacional. Se aplica un proceso de inventariado sistemático que incluye la identificación de términos en los marcos teóricos, el análisis del lenguaje utilizado en el DOA y el DCA, y la consulta con actores clave del proceso. El resultado es un inventario preliminar de términos estructurado por categorías conceptuales. |
| Entradas | DCA: Documento de contexto arquitectónico. DOA: Documento de objetivos arquitectónicos. |
| Salidas | IT A : Inventario preliminar de términos arquitectónicos . |
| Responsable | AEP: Arquitecto empresarial del proceso. |
| Herramientas | Marcos de referencia arquitectónica (TOGAF, ArchiMate , Zachman u otros adoptados en F1) . Herramientas de gestión terminológica . Herramientas de gestión documental . |
| Punto de validación | C ompletitud del inventario preliminar respecto a los marcos de referencia y al contexto organizacional. |
| Tareas |  |
| Analizar los glosarios y definiciones de los marcos de referencia adoptados. Identificar términos específicos del contexto organizacional que requieren definición. Clasificar los términos identificados por categorías conceptuales. Construir el inventario preliminar de términos con sus fuentes de referencia. Consultar con actores clave para validar la completitud del inventario. |  |

**Tabla 99. Actividad F2.E4.A2. Construcción del vocabulario arquitectónico unificado.**

### Tabla extraída 99

| Campo | Descripción |
| --- | --- |
| Código | F 2 .E 4 .A 2 |
| Nombre | Construcción del vocabulario arquitectónico unificado |
| Objetivo | Elaborar las definiciones precisas de los términos arquitectónicos identificados, establecer las relaciones conceptuales entre ellos y normalizar el vocabulario para su uso consistente en el PDAEH. |
| Descripción | A partir del inventario preliminar generado en la actividad anterior, el AEP elabora la definición formal de cada término, especificando su denominación, definición, categoría, fuente de referencia, términos relacionados y alcance en el contexto del proceso. Se establecen las relaciones conceptuales entre términos (jerarquías, equivalencias, relaciones parte-todo) y se construye el borrador del DVA. El SE/GPA revisa la precisión de las definiciones, la coherencia de las relaciones conceptuales y la ausencia de ambigüedades, emitiendo observaciones que el AEP incorpora hasta alcanzar un resultado satisfactorio. |
| Entradas | ITA: Inventario preliminar de términos arquitectónicos. |
| Salidas | DVA inicial: Diccionario de vocabulario arquitectónico inicial. |
| Responsable | AEP: Arquitecto empresarial del proceso. |
| Herramientas | Herramientas de gestión terminológica. Herramientas de gestión documental. Plantillas de definición de términos arquitectónicos. |
| Punto de validación | Las definiciones son claras y reflejan correctamente su significado en el contexto del proceso. No existen redundancias, contradicciones ni definiciones solapadas entre términos. Las relaciones establecidas entre los términos (jerarquías, equivalencias y relaciones parte-todo) son como es lógico consistentes y están correctamente representadas. El DVA inicial cubre la totalidad de los términos identificados en el ITA sin omisiones relevantes. |
| Tareas |  |
| Elaborar la definición formal de cada término del inventario preliminar. Especificar la categoría, fuente y alcance de cada término en el proceso . Establecer las relaciones conceptuales entre términos (jerarquías, equivalencias, relaciones). Verificar la coherencia y consistencia del vocabulario en su conjunto. Elaborar el borrador del DVA y someterlo a revisión del SE/GPA |  |

**Tabla 100. Actividad F2.E4.A3. Validación del vocabulario arquitectónico.**

### Tabla extraída 100

| Campo | Descripción |
| --- | --- |
| Código | F 2 .E 4 .A 3 |
| Nombre | Validación del vocabulario arquitectónico. |
| Objetivo | Someter el vocabulario normalizado a revisión por parte de los actores clave del proceso para verificar su pertinencia, comprensibilidad y aceptación antes de su formalización definitiva. |
| Descripción | El AEP convoca una sesión de validación con las partes interesadas, presentando el borrador del DVA para su revisión. Los participantes evalúan la claridad y pertinencia de las definiciones desde sus perspectivas funcionales y técnicas, identificando términos faltantes, definiciones imprecisas o conflictos con el lenguaje organizacional establecido. El AEP consolida los hallazgos, prioriza los ajustes requeridos y actualiza el vocabulario antes de someterlo a la revisión final del SE/GPA. |
| Entradas | DVA inicial: Diccionario de vocabulario arquitectónico inicial. |
| Salidas | DVA: Diccionario de vocabulario arquitectónico aprobado. |
| Responsable | SE: Stakeholder empresarial. GPA: Gestor del portafolio empresarial. |
| Herramientas | Sesiones de validación colaborativa (talleres o revisiones estructuradas. Herramientas de gestión documental y de comentarios. |
| Punto de validación | Acta de sesión de validación con registro de observaciones atendidas y aprobación de los participantes convocados. |
| Tareas |  |
| Preparar el material de presentación del DVA para la sesión de validación. Ejecutar la sesión de validación y registrar todas las observaciones emitidas. Clasificar y priorizar las observaciones según su impacto en la coherencia del vocabulario. Incorporar los ajustes validados al DVA. Documentar el resultado de la sesión en el acta de validación. |  |


## Actividades de sincronización y envío al OGA

**Tabla 101. F2.E4.A4 {E3}. Preparación y envío de artefactos al OGA.**

### Tabla extraída 101

| Campo | Descripción |
| --- | --- |
| Código | F2.E4.A4 {E3} |
| Nombre | Preparación y envío de artefactos al OGA |
| Objetivo | Consolidar todos los artefactos producidos por la Fase 2) y remitirlos formalmente al OGA para su revisión y aprobación. |
| Descripción | Una vez cerrados los Elementos E3 y E4, el AEP integra el conjunto completo de artefactos de la fase, verificando su completitud e integridad. Se prepara el paquete de entrega formal incluyendo los actas de cierre de cada elemento y los registros de validación del SE/GPA. El paquete es enviado al OGA mediante el mecanismo de comunicación formal establecido, dando inicio al proceso de revisión institucional de la fase. |
| Entradas | DNA: Documento de niveles arquitectónicos. MTA actualizado : Marco teórico arquitectónico actualizado. DVA: Diccionario de vocabulario arquitectónico aprobado. |
| Salidas | LBA-F2 inicial : Conjunto de artefactos que conforman la línea base arquitectónica de la Fase 2. |
| Responsable | AEP: Arquitecto empresarial del proceso. |
| Herramientas | Herramientas de gestión documental Plantilla de lista base de artefactos Canal formal de comunicación con el OGA |
| Punto de validación | Confirmación de recepción de los artefactos correspondientes por parte del OGA y registro de inicio del proceso de revisión. |
| Tareas |  |
| Verificar la completitud e integridad de todos los artefactos de E3 y E4. Consolidar los artefactos en la LBA-F2 inicial . Adjuntar las actas de cierre y registros de validación del SE/GPA. Remitir formalmente el paquete al OGA. Registrar la fecha y confirmación de recepción por el OGA. |  |

**Tabla 102. Actividad F2.E4.A5 {E3}. Ajustar artefactos según observaciones del OGA.**

### Tabla extraída 102

| Campo | Descripción |
| --- | --- |
| Código | F 2 .E 4 .A 5 {E3} |
| Nombre | Ajuste de artefactos según observaciones del OGA. |
| Objetivo | Atender las observaciones emitidas por el OGA tras la revisión de la Fase 2, incorporando los ajustes requeridos en los artefactos afectados para obtener la aprobación definitiva. |
| Descripción | Cuando el OGA emite observaciones sobre los artefactos de la Fase 2, el AEP analiza cada observación, identifica los artefactos afectados y planifica los ajustes necesarios. Los cambios se realizan de manera controlada, manteniendo la trazabilidad entre versiones y verificando que las modificaciones no introduzcan nuevas inconsistencias entre los artefactos de los elementos. Una vez incorporados los ajustes, el AEP actualiza los artefactos y la somete nuevamente al OGA para aprobación. Si los artefactos son aprobados, se considera que el flujo finaliza correctamente. |
| Entradas | LBA-F2 inicial : Conjunto de artefactos que conforman la línea base arquitectónica de la Fase 2 con aprobado o con observaciones realizadas por el OGA. |
| Salidas | LBA-F2 probado : Conjunto de artefactos que conforman la línea base arquitectónica de la Fase 2 aprobados o listos para su envío al OGA para una nueva revisión. |
| Responsable | AEP: Arquitecto empresarial del proceso. |
| Herramientas | Herramientas de gestión documental y control de versiones Matriz de trazabilidad de observaciones |
| Punto de validación | Verificación del AEP de que todas las observaciones del OGA han sido atendidas antes del reenvío del paquete. |
| Tareas |  |
| Analizar el acta de revisión del OGA e identificar los artefactos afectados. Clasificar las observaciones por elemento (E3, E4 o transversales). Incorporar los ajustes requeridos en cada artefacto afectado. Verificar que los ajustes no generan inconsistencias entre artefactos de E3 y E4. Actualizar la LBA-F2 con las versiones revisadas. Remitir el paquete ajustado al OGA para aprobación definitiva. |  |


## Fase 3: Configuración estructural

La Fase F3 tiene como objetivo definir la estructura general de la arquitectura y establecer los atributos de calidad que orientarán su evaluación y evolución. Esta fase busca consolidar una representación estructurada de la arquitectura, así como los criterios que determinan su desempeño. Esto permite asegurar que la arquitectura responda a criterios de calidad explícitos y a estructuras arquitectónicas verificables.
En la Tabla 103 se describe la información general que describe esta etapa:
**Tabla 103. Documentación de la Fase 3.**

### Tabla extraída 103

| Campo | Descripción |
| --- | --- |
| Nombre | Configuración estructural |
| Código | F3 |
| Subconjunto estructural asociado | S 3 |
| Elementos incluidos | E 5 : Estructuras arquitectónicas. E 6 : Atributos de calidad. |
| Propósito | Establecer la configuración estructural de la arquitectura empresarial híbrida mediante la definición de las estructuras arquitectónicas y los atributos de calidad que guiarán el diseño, evaluación y evolución del sistema. Esta fase articula la organización del sistema con los criterios de calidad, asegurando que las decisiones estructurales respondan a los drivers definidos y permitan satisfacer las necesidades de la organización. |
| Entradas | LBA-F 2 : Línea base arquitectónica correspondiente a la Fase 2 . |
| Salidas | LBA-F 3 : Línea base arquitectónica establecida para la Fase 3 , que incluye: MAC : Modelo de atributos de calidad. DEA : Documento de estructuras arquitectónicas. |
| Punto de control | Consolidación de artefactos realizada por el arquitecto empresarial del proceso, quien determina que los entregables de cada elemento son coherentes y consistentes con las necesidades de la organización. |
| Indicadores de cumplimiento | IC-F3-01. Completitud de artefactos de F3: Los documentos entregados al final de la fase se encuentran correctamente, versionados y registrados en la LBA-F3. Umbral: 100 % de artefactos presentes antes de su envío al OGA IC-F3-02. Coherencia entre estructuras y atributos de calidad: Las estructuras definidas en el DEA responden explícitamente a los atributos de calidad establecidos en el MAC. Umbral: trazabilidad completa entre atributos y decisiones estructurales, sin inconsistencias identificadas. IC-F3-03. Trazabilidad con la Fase 2: Las estructuras arquitectónicas y atributos de calidad son consistentes con los artefactos definidos en F2. Umbral: cobertura ≥ 95 % de los elementos conceptuales definidos en la fase anterior. IC-F3-04. Definición de escenarios de calidad: Cada atributo de calidad del MAC cuenta con al menos un escenario de evaluación definido (estímulo, entorno, respuesta y medida). Umbral: 100 % de atributos con escenarios asociados. IC-F3-05. Consistencia estructural interna: Las vistas, componentes y relaciones definidas en el DEA son coherentes entre sí, sin contradicciones en dependencias, responsabilidades o flujos. Umbral: sin inconsistencias estructurales al cierre de F3. IC-F3-06. Cobertura de integración híbrida: Las estructuras arquitectónicas consideran explícitamente la interacción entre componentes clásicos, servicios de orquestación y recursos cuánticos. Umbral: 100 % de los flujos críticos del sistema contemplan integración híbrida. IC-F3-07. Aprobación del OGA: El OGA emite aprobación formal de la LBA-F3 documentada en el acta correspondiente. Umbral: aprobación registrada sin observaciones abiertas pendientes. |


## Definición de elementos

En la Tabla 104 y en la Tabla 105, respectivamente, se describen los elementos que conforman la Fase 3 del proceso:
**Tabla 104. Documentación del elemento E6: Atributos de calidad.**

### Tabla extraída 104

| Campo | Descripción |
| --- | --- |
| Código | E6 |
| Fase asociada | F3 |
| Categoría | Dimensión de Calidad y Diseño (DCD) |
| Propósito del elemento | Definir, estructurar y formalizar los atributos de calidad que orientan la evaluación y toma de decisiones arquitectónicas, estableciendo criterios medibles que permitan determinar si la arquitectura empresarial híbrida satisface los requerimientos de desempeño, seguridad, escalabilidad, resiliencia y eficiencia en entornos clásico-cuánticos. |
| Objetivos específicos | O1: Identificar los atributos de calidad relevantes para la arquitectura. O2: Definir métricas y criterios de evaluación para cada atributo. O3: Establecer escenarios de calidad que permitan evaluar la arquitectura. O4: Analizar trade-offs entre atributos de calidad en el contexto de decisiones arquitectónicas propuestas en las fases anteriores . |
| Productos generados | Modelo de atributos de calidad (MAC): Artefacto que define los atributos de calidad relevantes, sus métricas, escenarios de evaluación, criterios de aceptación y relaciones de trade -off, sirviendo como base para la evaluación arquitectónica. |
| Criterios de aceptación | Los atributos de calidad cubren los requerimientos críticos del sistema. Cada atributo cuenta con métricas y escenarios de evaluación definidos. Se identifican y documentan los trade-offs relevantes entre atributos. Existe trazabilidad entre atributos de calidad y decisiones estructurales. El OGA valida la pertinencia y completitud del modelo de calidad. |
| Dependencias estructurales | E3, E4: Los atributos parten de la existencia de un vocabulario común. |

**Tabla 105. Documentación del elemento E5: Estructuras arquitectónicas.**

### Tabla extraída 105

| Campo | Descripción |
| --- | --- |
| Código | E 5 |
| Fase asociada | F 3 |
| Categoría | Dimensión de Calidad y Diseño (DCD) |
| Propósito del elemento | Definir y estructurar las estructuras arquitectónicas que organizan la arquitectura empresarial, estableciendo vistas, componentes, relaciones, dependencias, flujos de interacción y asignación de responsabilidades, de manera que se garantice una representación coherente del sistema y se soporte el análisis de cohesión, acoplamiento e integración entre componentes clásicos y cuánticos cuando se planteen las tareas asociadas con su implementación . |
| Objetivos específicos | O1: Identificar y definir las vistas arquitectónicas necesarias para representar la arquitectura. O2: Establecer los componentes, módulos y capas que conforman la arquitectura. O3: Definir las relaciones, dependencias y flujos de interacción entre componentes. O4: Asignar responsabilidades a los elementos estructurales definidos. O5: Incorporar explícitamente mecanismos de integración híbrida entre componentes clásicos y cuánticos. |
| Productos generados | Documento de estructuras arquitectónicas (DEA): Artefacto que describe la organización estructural de la arquitectura, incluyendo vistas, capas, componentes, relaciones, dependencias, flujos de interacción y responsabilidades, proporcionando la base para el análisis estructural del sistema. |
| Criterios de aceptación | Las estructuras definidas cubren las necesidades funcionales y de integración del sistema. Existe coherencia interna entre vistas, componentes y relaciones. Las responsabilidades están claramente asignadas y no presentan ambigüedades. Las estructuras soportan explícitamente la integración híbrida. El OGA valida la consistencia y suficiencia de las estructuras definidas. |
| Dependencias estructurales | E3, E4: Los atributos parten de la existencia de un vocabulario común. |


## Flujo general de actividades

**Figura 32. Flujo general de actividades que conforman la Fase 3.**

## Actividades asociadas con el elemento E6

En la Figura 30 se presenta el flujo de actividades correspondientes al subproceso F3.E6:
**Figura 33. Flujo de actividades que conforman el elemento E6.**
Las tablas presentadas a continuación describen el desglose de cada una de las actividades que componen el elemento E6 y su referencia directa en el documento.
- Tabla 106. Actividad F3.E6.A1. Especificación de drivers de arquitectura.
- Tabla 107. Actividad F3.E6.A2. Especificación de atributos transversales en la solución.
- Tabla 108. Actividad F3.E6.A3. Especificación de atributos de integración clásicos y cuánticos.
- Tabla 109. Actividad F2.E6.A4. Especificación de atributos de seguridad clásicos y cuánticos.
- Tabla 110. Actividad F2.E6.A5. Consolidación de atributos identificados en la solución.
En particular, se definen actividades específicas para la especificación de atributos de integración y de seguridad debido a la naturaleza híbrida de la arquitectura abordada. Sin embargo, antes de llegar a ese punto es importante hacer una aclaración importante: a diferencia de arquitecturas tradicionales, la integración entre componentes clásicos y cuánticos introduce desafíos particulares relacionados con la comunicación, la sincronización, la latencia y la interoperabilidad entre tecnologías heterogéneas. Estas características requieren un tratamiento explícito que permita identificar, definir y evaluar atributos de calidad propios de este tipo de interacción, los cuales no quedan completamente cubiertos por los atributos transversales de la solución. De manera similar, la seguridad en entornos híbridos presenta consideraciones adicionales asociadas tanto a los mecanismos clásicos como a las implicaciones del cómputo cuántico, incluyendo la exposición a nuevos vectores de riesgo y la necesidad de mecanismos criptográficos y de protección adaptados a este contexto. Por esta razón, se establece una actividad específica que permita abordar de forma sistemática estos aspectos, asegurando que los atributos de seguridad sean definidos con el nivel de detalle y especialización requerido. Como resultado, la participación de roles especializados que aportan conocimiento específico en dominios particulares de la arquitectura comienza a cobrar mayor relevancia, especialmente en lo relacionado con la definición de estructuras y atributos de calidad en entornos híbridos.
**Tabla 106. Actividad F3.E6.A1. Especificación de drivers de arquitectura.**

### Tabla extraída 106

| Campo | Descripción |
| --- | --- |
| Código | F3.E6.A1 |
| Nombre | Especificación de drivers de arquitectura. |
| Objetivo | Identificar, analizar y formalizar los drivers de arquitectura que orientan la toma de decisiones en la solución, estableciendo una base explícita de atributos de calidad priorizados, restricciones, riesgos y condiciones del contexto organizacional y tecnológico, que permitan guiar de forma trazable la definición posterior de atributos y estructuras. |
| Descripción | El AEP realiza un análisis sistemático de los artefactos provenientes de la Fase 2 (DOA, DCA, MNA, DVA), con el propósito de identificar todos los factores que influyen en la arquitectura. Este análisis se desarrolla en tres niveles: (1) extracción de objetivos y restricciones explícitas, (2) identificación de preocupaciones implícitas derivadas del contexto organizacional y tecnológico, y (3) identificación de condiciones propias del entorno híbrido (interacción clásico-cuántica, dependencia de infraestructura especializada, etc.). A partir de estos insumos, se construye un catálogo de drivers, clasificándolos en categorías (negocio, técnico, regulatorio, operativo, integración híbrida). Posteriormente, cada driver se descompone en atributos de calidad preliminares, se analiza su impacto arquitectónico, se identifican dependencias entre drivers y se priorizan utilizando criterios explícitos (impacto, urgencia, riesgo). El resultado se documenta en una estructura que permita trazabilidad bidireccional con los artefactos de F2. |
| Entradas | LBA-F2: Línea base de artefactos definidos en la Fase 2. |
| Salidas | Especificación de drivers de arquitectura (EDA): Artefacto que define los drivers arquitectónicos, incluyendo atributos de calidad priorizados, motivaciones, restricciones y contexto de aplicación. |
| Responsable | AEP: Arquitecto empresarial del proceso. |
| Herramientas | Plantillas de identificación de drivers (drivers → atributos → impacto). Matrices de priorización (MoSCoW, impacto vs. esfuerzo). Herramientas de modelado ( ArchiMate , UML). Herramientas de gestión documental. Fuentes de referencia (ISO/IEC 25010, literatura de atributos de calidad). |
| Punto de validación | Los drivers identificados cubren objetivos, restricciones y preocupaciones relevantes. Cada driver tiene al menos un atributo de calidad asociado. Existe trazabilidad con DOA y DCA. La priorización es consistente y justificable. No existen drivers redundantes o contradictorios. |
| Tareas |  |
| Analizar DOA, DCA y demás artefactos de F2. Identificar factores condicionantes (negocio, técnico, regulatorio). Derivar atributos de calidad preliminares. Clasificar drivers por tipo. Priorizar drivers según impacto arquitectónico. Documentar drivers, atributos y justificaciones. Establecer relaciones y dependencias entre drivers. |  |

**Tabla 107. Actividad F3.E6.A2. Especificación de atributos transversales en la solución.**

### Tabla extraída 107

| Campo | Descripción |
| --- | --- |
| Código | F 3 .E 6 .A2 |
| Nombre | Especificación de atributos transversales en la solución. |
| Objetivo | Definir de manera formal los atributos de calidad transversales que aplican a toda la arquitectura, estableciendo métricas cuantificables, escenarios de evaluación y criterios de aceptación que permitan medir el cumplimiento de los drivers definidos. |
| Descripción | El ASP toma como base la EDA y transforma los drivers en atributos de calidad explícitos. Para cada atributo se construyen escenarios de calidad siguiendo una estructura formal (estímulo, entorno, artefacto afectado, respuesta esperada, medida). Se definen métricas cuantificables, por ejemplo: latencia en ms, disponibilidad en %, throughput , entre otros, se establecen umbrales de aceptación y se identifican relaciones de dependencia o conflicto entre atributos. |
| Entradas | EDA: Especificación de drivers de arquitectura. |
| Salidas | Especificación de atributos transversales (EAT): Artefacto que define atributos de calidad globales, métricas y escenarios de evaluación. |
| Responsable | ASP : Arquitecto de software del proceso. |
| Herramientas | Plantillas de escenarios de calidad (SEI/ATAM). Catálogos de atributos (ISO/IEC 25010). Herramientas de modelado. Hojas de cálculo para métricas. |
| Punto de validación | Cada driver tiene al menos un atributo asociado. Todos los atributos tienen métricas claras. Existen escenarios definidos para cada atributo. No hay ambigüedad en las definiciones. Se identifican conflictos entre atributos. |
| Tareas |  |
| Mapear drivers → atributos de calidad. Definir métricas para cada atributo. Construir escenarios de calidad. Establecer umbrales de aceptación. Analizar dependencias y conflictos. Documentar atributos en EAT. |  |

**Tabla 108. Actividad F3.E6.A3. Especificación de atributos de integración clásicos y cuánticos.**

### Tabla extraída 108

| Campo | Descripción |
| --- | --- |
| Código | F 3 .E 6 .A 4 |
| Nombre | Especificación de atributos de integración clásicos y cuánticos |
| Objetivo | Definir atributos de calidad específicos para la integración híbrida, considerando interoperabilidad, latencia, sincronización y eficiencia entre componentes clásicos y cuánticos. |
| Descripción | Los roles responsables analizan los puntos de integración identificados en la arquitectura (o inferidos desde el contexto), identificando flujos de datos, dependencias de ejecución y mecanismos de comunicación entre sistemas clásicos y recursos cuánticos. A partir de este análisis se definen atributos como latencia de integración, consistencia de resultados, tolerancia a fallos, sincronización y eficiencia de ejecución híbrida. Se construyen escenarios específicos de integración y se definen métricas y umbrales para cada uno. |
| Entradas | EDA: Especificación de drivers de arquitectura. |
| Salidas | Especificación de atributos de integración (EAI): Artefacto que define atributos de calidad específicos para la integración híbrida. |
| Responsable | AIP : Arquitecto de integración del proceso. ADP : Arquitecto de datos del proceso. ETC : Especialista tecnológico cuántico. |
| Herramientas | Documentación técnica de integración. Modelos de referencia híbridos. Herramientas de análisis de rendimiento. Simulación de flujos. |
| Punto de validación | Se consideran todos los puntos de integración relevantes. Los atributos son medibles. Existe coherencia con atributos transversales. Se contemplan escenarios de fallo. |
| Tareas |  |
| Identificar interfaces clásico-cuánticas. Analizar flujos de interacción. Definir atributos de integración. Establecer métricas. Construir escenarios de integración. Documentar resultados |  |

**Tabla 109. Actividad F2.E6.A4. Especificación de atributos de seguridad clásicos y cuánticos.**

### Tabla extraída 109

| Campo | Descripción |
| --- | --- |
| Código | F2.E6.A4 |
| Nombre | Especificación de atributos de seguridad clásicos y cuánticos |
| Objetivo | Definir atributos de seguridad que garanticen la protección del sistema híbrido frente a amenazas clásicas y cuánticas, estableciendo mecanismos evaluables de mitigación de riesgos. |
| Descripción | Los roles designados identifican activos críticos, vectores de ataque y vulnerabilidades en el sistema híbrido. Se definen atributos como confidencialidad, integridad, disponibilidad, resiliencia y resistencia a ataques cuánticos. Se construyen escenarios de ataque, se definen métricas de seguridad y se establecen mecanismos de mitigación. |
| Entradas | EDA: Especificación de drivers de arquitectura. |
| Salidas | Especificación de atributos de seguridad (EAS): Artefacto que define atributos de seguridad y sus criterios de evaluación. |
| Responsable | AsecP : Arquitecto de seguridad del proceso. ETC: Especialista tecnológico cuántico. |
| Herramientas | NIST / ISO 27001. Modelado de amenazas (STRIDE). Análisis de riesgos. Referencias de criptografía post-cuántica. |
| Punto de validación | Se cubren todos los activos críticos. Existen escenarios de ataque definidos. Las métricas son verificables. Los controles son aplicables. |
| Tareas |  |
| Identificar activos críticos. Analizar amenazas y vulnerabilidades. Definir atributos de seguridad. Construir escenarios de ataque. Definir métricas y controles. Documentar resultados |  |

**Tabla 110. Actividad F2.E6.A5. Consolidación de atributos identificados en la solución.**

### Tabla extraída 110

| Campo | Descripción |
| --- | --- |
| Código | F2.E6.A5 |
| Nombre | Consolidación de atributos identificados en la solución. |
| Objetivo | Integrar y consolidar los atributos de calidad definidos en un modelo unificado que soporte la evaluación arquitectónica. |
| Descripción | Se consolidan los atributos transversales, de integración y de seguridad en un único modelo coherente (MAC), verificando su consistencia interna, eliminando redundancias y asegurando la trazabilidad con los drivers definidos. Como resultado de este proceso, se actualiza el marco teórico arquitectónico (MTA) incorporando los criterios, definiciones y decisiones asociadas a los atributos de calidad establecidos, de manera que el conocimiento generado en esta fase quede formalmente integrado a la base conceptual del proceso y sirva como referencia para las fases subsiguientes. |
| Entradas | EDA: Especificación de drivers de arquitectura. EAT: Especificación de atributos transversales, EAI: Especificación de a tributos de integración. EAS: Especificación de a tributos de seguridad. |
| Salidas | MAC: Modelo de atributos de calidad. MTA actualizado: Matriz de trazabilidad actualizad a . |
| Responsable | AEP : Arquitecto empresarial del proceso. |
| Herramientas | Herramientas de modelado. Plantillas de consolidación. Herramientas documentales. |
| Punto de validación | No existen inconsistencias entre atributos. Existe trazabilidad completa con drivers. El modelo es coherente y completo. |
| Tareas |  |
| Integrar atributos definidos. Eliminar redundancias. Validar consistencia. Consolidar en el MAC. |  |


## Actividades asociadas con el elemento E5

En la Figura 30 se presenta el flujo de actividades correspondientes al subproceso F3.E5:
**Figura 34. Flujo de actividades que conforman el elemento E6.**
Las tablas presentadas a continuación describen el desglose de cada una de las actividades que componen el elemento E5 y su referencia directa en el documento:
- Tabla 111. Actividad F2.E5.A1. Definición del marco de estructuras arquitectónicas
- Tabla 112. Actividad F2.E5.A2. Especificación de estructuras transversales en la solución.
- Tabla 113. Actividad F2.E5.A3. Especificación de estructuras de integración y datos.
- Tabla 114. Actividad F2.E5.A4. Especificación de estructuras de seguridad.
- Tabla 115. Actividad F3.E5.A5. Consolidación de estructuras arquitectónicas.
**Tabla 111. Actividad F2.E5.A1. Definición del marco de estructuras arquitectónicas.**

### Tabla extraída 111

| Campo | Descripción |
| --- | --- |
| Código | F2.E 5 .A 1 |
| Nombre | Definición del marco de estructuras arquitectónicas |
| Objetivo | Definir la estructura arquitectónica de la solución mediante la organización coherente de vistas, componentes, relaciones, flujos de interacción y asignación de responsabilidades, asegurando una representación integral del sistema que permita analizar su comportamiento, comprender su organización interna y soportar la evaluación de decisiones arquitectónicas en el contexto de arquitecturas híbridas. |
| Descripción | A partir de la línea base conceptual generada en la Fase 2, y los atributos de calidad, el AEP construye la representación estructural de la arquitectura definiendo las vistas necesarias para describir el sistema desde distintas perspectivas (lógica, integración, despliegue, datos, seguridad, entre otras). Sobre estas vistas, identifica y organiza los componentes arquitectónicos, estableciendo su agrupación en módulos, capas o dominios según corresponda. Posteriormente, define las relaciones y dependencias entre componentes, especificando flujos de interacción, intercambio de datos y mecanismos de comunicación, incluyendo de manera explícita la integración entre componentes clásicos y recursos cuánticos. Finalmente, asigna responsabilidades a cada componente, asegurando claridad funcional, evitando solapamientos y garantizando coherencia estructural. Durante todo el proceso se evalúan criterios de cohesión, acoplamiento y alineación con los atributos de calidad definidos en E6. |
| Entradas | LBA-F2: Línea base de artefactos definidos en la Fase 2 MAC: Modelo de atributos de calidad. |
| Salidas | D ocumento de estructuras arquitectónicas (DEA): Artefacto que establece los lineamientos, tipos de estructuras, vistas arquitectónicas y criterios de modelado que servirán como base para la definición detallada de las estructuras en las actividades siguientes. |
| Responsable | AEP : Arquitecto empresarial del proceso. |
| Herramientas | Lenguajes de modelado arquitectónico ( ArchiMate , UML, C4 Model). Marcos de referencia (ISO/IEC/IEEE 42010). Herramientas de modelado ( Sparx EA, Archi, etc.) Repositorio de arquitectura empresarial Plantillas de documentación estructural Técnicas de análisis de cohesión y acoplamiento. |
| Punto de validación | Las vistas definidas cubren todas las perspectivas necesarias del sistema. Todos los componentes están claramente identificados y organizados. No existen solapamientos de responsabilidades entre componentes. Las relaciones y flujos están completamente definidos y son coherentes. Se representan explícitamente las interacciones híbridas. La estructura permite analizar atributos de calidad. Existe coherencia con los niveles de abstracción definidos en F2 |
| Tareas |  |
| Identificar las perspectivas arquitectónicas necesarias a partir de los drivers y el contexto. Definir las vistas arquitectónicas requeridas y su propósito. Seleccionar los tipos de representación adecuados para cada vista. Identificar los componentes arquitectónicos del sistema. Clasificar componentes (clásicos, cuánticos, integración, orquestación, etc ). Organizar los componentes en estructuras (capas, módulos, dominios). Definir las relaciones entre componentes (dependencias, asociaciones, jerarquías). Modelar los flujos de interacción (datos, control, eventos, sincronización). Definir mecanismos de integración híbrida (interfaces clásico–cuánticas). Asignar responsabilidades a cada componente. Evaluar cohesión interna de los componentes. Evaluar acoplamiento entre componentes. Verificar alineación con atributos de calidad (MAC). Identificar y documentar riesgos estructurales. Ajustar la estructura según resultados del análisis. Consolidar toda la información en el DEA. Verificar consistencia global del documento Preparar el artefacto para revisión por el OGA |  |

**Tabla 112. Actividad F2.E5.A2. Especificación de estructuras transversales en la solución.**

### Tabla extraída 112

| Campo | Descripción |
| --- | --- |
| Código | F2.E5.A 2 |
| Nombre | Especificación de estructuras transversales en la solución. |
| Objetivo | Definir las estructuras arquitectónicas transversales que soportan capacidades comunes de la solución, estableciendo componentes, responsabilidades y relaciones que atraviesan múltiples dominios del sistema. |
| Descripción | A partir del DEA como insumo base, el AEP identifica las capacidades transversales de la arquitectura, entendidas como aquellas que impactan múltiples componentes, capas o dominios, por ejemplo: orquestación, monitoreo, gestión de datos compartidos. Se analizan las responsabilidades funcionales necesarias, se agrupan en componentes arquitectónicos coherentes y se definen sus relaciones estructurales. Se evalúa la cohesión y el acoplamiento de los componentes propuestos, asegurando que cada uno tenga una responsabilidad clara y bien delimitada. Asimismo, se valida que estas estructuras respondan a los drivers arquitectónicos definidos previamente y que no generen redundancias con otras estructuras del sistema. |
| Entradas | DEA: Documento de estructuras arquitectónicas. |
| Salidas | Especificación de estructuras arquitectónicas transversales (EETS): Artefacto que describe los componentes transversales de la solución, sus responsabilidades, relaciones estructurales y su rol dentro de la arquitectura global. |
| Responsable | AEP : Arquitecto empresarial del proceso. |
| Herramientas | Lenguajes de modelado arquitectónico ( ArchiMate , UML). Diagramas de componentes. Herramientas de documentación arquitectónica. |
| Punto de validación | Las estructuras transversales cubren capacidades comunes del sistema. No existen duplicidades funcionales. Los componentes definidos tienen responsabilidades claras. Existe coherencia con el DEA. |
| Tareas |  |
| Analizar el DEA como base estructural. Identificar capacidades transversales de la solución. Definir componentes asociados a dichas capacidades. Establecer responsabilidades de cada componente. Modelar relaciones estructurales entre componentes. Evaluar cohesión y acoplamiento. Documentar el artefacto EETS. |  |

**Tabla 113. Actividad F2.E5.A3. Especificación de estructuras de integración y datos.**

### Tabla extraída 113

| Campo | Descripción |
| --- | --- |
| Código | F2.E5.A3 |
| Nombre | Especificación de estructuras de integración y datos |
| Objetivo | Definir las estructuras arquitectónicas transversales que soportan capacidades comunes de la solución, estableciendo componentes, responsabilidades y relaciones que atraviesan múltiples dominios del sistema. |
| Descripción | Los roles designados mode lan las interacciones entre componentes, enfocándose en los mecanismos de integración y los flujos de datos. Se identifican las interfaces necesarias, los puntos de intercambio de información y las dependencias entre componentes. Se presta especial atención a la integración entre elementos clásicos y cuánticos, considerando restricciones como latencia, sincronización y disponibilidad de recursos. Se definen flujos de datos de extremo a extremo, asegurando que cada interacción esté claramente especificada y que no existan inconsistencias o ambigüedades en la comunicación entre componentes. |
| Entradas | DEA: Documento de estructuras arquitectónicas. |
| Salidas | Especificación de estructuras de integración y datos ( EEIA ): Artefacto que describe los mecanismos de integración, las interfaces, los flujos de datos y las relaciones de intercambio entre componentes de la solución. |
| Responsable | AIP: Arquitecto de integración del proceso. ADP: Arquitecto de datos del proceso. ETC: Especialista tecnológico cuántico. |
| Herramientas | Diagramas de secuencia. Diagramas de flujo de datos. Herramientas de modelado arquitectónico. |
| Punto de validación | Los flujos de datos están definidos de extremo a extremo. Se identifican claramente las interfaces. No existen inconsistencias en las interacciones. Se consideran las particularidades del entorno híbrido. |
| Tareas |  |
| Analizar el DEA y el EETS. Identificar interacciones entre componentes. Definir interfaces de integración. Modelar flujos de datos. Analizar dependencias entre componentes. Evaluar restricciones de integración. Documentar el artefacto EEIA. |  |

**Tabla 114. Actividad F2.E5.A4. Especificación de estructuras de seguridad.**

### Tabla extraída 114

| Campo | Descripción |
| --- | --- |
| Código | F2.E5.A4 |
| Nombre | Especificación de estructuras de seguridad. |
| Objetivo | Definir las estructuras arquitectónicas de seguridad que protegen la solución, estableciendo mecanismos, componentes y relaciones que aseguren la confidencialidad, integridad y disponibilidad. |
| Descripción | Los roles designados identifican los riesgos y necesidades de seguridad del sistema. Se definen los componentes de seguridad necesarios (control de acceso, cifrado, monitoreo, protección de datos), así como su ubicación dentro de la arquitectura y sus relaciones con otros componentes. Se modelan los mecanismos de protección aplicables tanto a componentes clásicos como a recursos cuánticos, considerando amenazas específicas del entorno híbrido. Se asegura que las estructuras de seguridad estén integradas de manera transversal en la arquitectura y no como elementos aislados. |
| Entradas | DEA: Documento de estructuras arquitectónicas. |
| Salidas | Especificación de estructuras de seguridad ( EESec ): Artefacto que describe los mecanismos de seguridad, los componentes asociados y su integración dentro de la arquitectura. |
| Responsable | AsecP : Arquitecto de seguridad del proceso. ETC: Especialista tecnológico cuántico. |
| Herramientas | Estándares de seguridad (ISO 27001, NIST). Modelos de amenazas. Herramientas de análisis de riesgos. |
| Punto de validación | Se cubren los requisitos de seguridad del sistema. Los mecanismos están correctamente integrados en la arquitectura. Se consideran riesgos del entorno híbrido. No existen vacíos de seguridad identificables. |
| Tareas |  |
| Analizar el DEA y estructuras previas. Identificar riesgos y amenazas. Definir mecanismos de seguridad. Modelar componentes de seguridad. Establecer relaciones con otros componentes. Validar cobertura de seguridad. Documentar el artefacto EESec . |  |

**Tabla 115. Actividad F3.E5.A5. Consolidación de estructuras arquitectónicas.**

### Tabla extraída 115

| Campo | Descripción |
| --- | --- |
| Código | F3.E5.A5 |
| Nombre | Consolidación de estructuras arquitectónicas. |
| Objetivo | Integrar las estructuras arquitectónicas transversales, de integración y de seguridad en un único modelo coherente, consistente y trazable, asegurando alineación con los atributos de calidad, los drivers arquitectónicos y los artefactos conceptuales definidos en fases anteriores. |
| Descripción | El AEP realiza la integración sistemática de los artefactos generados en las actividades previas (EETS, EEIA, EESec ), consolidándolos en una única representación estructural de la arquitectura. Este proceso implica la unificación de componentes, la validación de relaciones entre estructuras, la eliminación de redundancias y la resolución de inconsistencias entre vistas. Se verifica que los flujos definidos en EEIA sean coherentes con los componentes definidos en EETS y que los mecanismos de seguridad definidos en EESec estén correctamente integrados en todos los niveles de la arquitectura. Asimismo, se asegura la trazabilidad entre las estructuras y los atributos de calidad definidos en el MAC, validando que cada decisión estructural responda a un driver arquitectónico identificado. Como resultado de esta consolidación, se actualiza el DEA como artefacto integral de estructuras arquitectónicas y se actualiza el MTA incorporando las decisiones estructurales adoptadas, sus justificaciones y su relación con los fundamentos conceptuales definidos en fases anteriores. |
| Entradas | EDA: Especificación de drivers de arquitectura. EETS: Especificación de estructuras arquitectónicas transversales. EEIA: Especificación de estructuras de integración y datos. EESec : Especificación de estructuras de seguridad. |
| Salidas | DEA: Documento de estructuras arquitectónicas. |
| Responsable | AEP : Arquitecto empresarial del proceso. |
| Herramientas | Herramientas de modelado arquitectónico ( ArchiMate , UML). Repositorios de arquitectura. Herramientas de gestión documental. Matrices de trazabilidad (drivers ↔ estructuras ↔ atributos de calidad). |
| Punto de validación | El DEA consolidado es consistente y libre de redundancias. Existe coherencia entre componentes, flujos y mecanismos de seguridad. Todas las estructuras están alineadas con el modelo de atributos de calidad (MAC). Existe trazabilidad completa con los drivers arquitectónicos. |
| Tareas |  |
| Integrar los artefactos EETS, EEIA y EESec en un único modelo. Verificar coherencia entre componentes y relaciones.• Validar consistencia de flujos e interacciones. Integrar mecanismos de seguridad en todas las estructuras. Identificar y eliminar redundancias estructurales. Resolver inconsistencias entre vistas arquitectónicas. Verificar trazabilidad con atributos de calidad (MAC). Consolidar el DEA como artefacto final de estructuras. Documentar justificaciones arquitectónicas. |  |


## Actividades de sincronización y envío al OGA

**Tabla 116. F3.E6.A6 {E5}. Preparación y envío de artefactos al OGA.**

### Tabla extraída 116

| Campo | Descripción |
| --- | --- |
| Código | F3.E6.A6 {E5} |
| Nombre | Preparación y envío de artefactos al OGA |
| Objetivo | Consolidar todos los artefactos producidos por la Fase 3 y remitirlos formalmente al OGA para su revisión y aprobación. |
| Descripción | Una vez cerrados los Elementos E 6 y E 6 , el AEP integra el conjunto completo de artefactos de la fase, verificando su completitud e integridad. Se prepara el paquete de entrega formal incluyendo los actas de cierre de cada elemento y los registros de validación del SE/GPA. El paquete es enviado al OGA mediante el mecanismo de comunicación formal establecido, dando inicio al proceso de revisión institucional de la fase. |
| Entradas | DEA : Documento de estructuras arquitectónicas. MAC: Modelo de atributos de calidad. |
| Salidas | LBA-F 3 inicial: Conjunto de artefactos que conforman la línea base arquitectónica de la Fase 3 . |
| Responsable | AEP : Arquitecto empresarial del proceso. |
| Herramientas | Herramientas de gestión documental Plantilla de lista base de artefactos Canal formal de comunicación con el OGA |
| Punto de validación | Confirmación de recepción de los artefactos correspondientes por parte del OGA y registro de inicio del proceso de revisión. |
| Tareas |  |
| Verificar la completitud e integridad de todos los artefactos de E 6 y 5 4. Consolidar los artefactos en la LBA-F 3 inicial. Adjuntar las actas de cierre y registros de validación del SE/GPA. Remitir formalmente el paquete al OGA. Registrar la fecha y confirmación de recepción por el OGA. |  |

**Tabla 117. Actividad F3.E6.A7 {E6}. Ajuste de artefactos según observaciones del OGA.**

### Tabla extraída 117

| Campo | Descripción |
| --- | --- |
| Código | F 3 .E 6 .A 7 {E6} |
| Nombre | Mapeo de partes interesadas y preocupaciones. |
| Objetivo | Atender las observaciones emitidas por el OGA tras la revisión de la Fase 3 , incorporando los ajustes requeridos en los artefactos afectados para obtener la aprobación definitiva. |
| Descripción | Cuando el OGA emite observaciones sobre los artefactos de la Fase 3 , el AEP analiza cada observación, identifica los artefactos afectados y planifica los ajustes necesarios. Los cambios se realizan de manera controlada, manteniendo la trazabilidad entre versiones y verificando que las modificaciones no introduzcan nuevas inconsistencias entre los artefactos de los elementos. Una vez incorporados los ajustes, el AEP actualiza los artefactos y la somete nuevamente al OGA para aprobación. Si los artefactos son aprobados, se considera que el flujo finaliza correctamente. |
| Entradas | LBA-F 3 inicial: Conjunto de artefactos que conforman la línea base arquitectónica de la Fase 3 con aprobado o con observaciones realizadas por el OGA. |
| Salidas | LBA-F 3 probado: Conjunto de artefactos que conforman la línea base arquitectónica de la Fase 3 aprobados o listos para su envío al OGA para una nueva revisión. |
| Responsable | AEP : Arquitecto empresarial del proceso. |
| Herramientas | Herramientas de gestión documental y control de versiones Matriz de trazabilidad de observaciones |
| Punto de validación | Verificación del AEP de que todas las observaciones del OGA han sido atendidas antes del reenvío del paquete. |
| Tareas |  |
| Analizar el acta de revisión del OGA e identificar los artefactos afectados. Clasificar las observaciones por elemento (E6, E5 o transversales). Incorporar los ajustes requeridos en cada artefacto afectado. Verificar que los ajustes no generan inconsistencias entre artefactos de E6 y E5. Actualizar la LBA-F3 con las versiones revisadas. Remitir el paquete ajustado al OGA para aprobación definitiva. |  |


## Fase 4: Materialización arquitectónica

La Fase F4 tiene como objetivo materializar la arquitectura empresarial híbrida a través de la definición de los componentes estructurales y los elementos reutilizables que la conforman. Esta fase transforma las estructuras arquitectónicas y los atributos de calidad definidos en las fases anteriores en catálogos técnicos concretos, estableciendo la base para el diseño detallado e implementación de la arquitectura. El resultado de esta fase es un conjunto de artefactos que permiten guiar la construcción del sistema de manera coherente, trazable y orientada a la reutilización.
En la Tabla 118 se presenta la información general que describe esta etapa:
**Tabla 118. Documentación de la Fase 4.**

### Tabla extraída 118

| Campo | Descripción |
| --- | --- |
| Nombre | Materialización arquitectónica |
| Código | F4 |
| Subconjunto estructural asociado | S4 |
| Elementos incluidos | E9: Componentes estructurales. E10: Elementos reutilizables. |
| Propósito | Materializar la arquitectura empresarial híbrida mediante la definición de los componentes estructurales y los elementos reutilizables que la conforman, proporcionando los catálogos técnicos que permitan concretar el diseño arquitectónico de manera coherente, trazable y orientada a la reutilización. |
| Entradas | LBA-F3: Línea base arquitectónica correspondiente a la Fase 3 . |
| Salidas | LBA-F 4 : Línea base arquitectónica establecida para la Fase 4 , que incluye: DCO: Documento de componentes estructurales. BER: Biblioteca de elementos reutilizables |
| Punto de control | Consolidación de artefactos realizada por el arquitecto empresarial del proceso, quien determina que los entregables de cada elemento son coherentes y consistentes con las necesidades de la organización. |
| Indicadores de cumplimiento | IC-F4-01. Completitud de artefactos de F4: Los documentos entregados al final de la fase se encuentran correctamente versionados y registrados en la LBA-F4. Umbral: 100 % de artefactos presentes antes de su envío al OGA. IC-F4-02. Coherencia entre componentes y elementos reutilizables: Los componentes definidos en el DCO son consistentes con los elementos reutilizables del BER. Umbral: 0 inconsistencias detectadas durante la revisión del OGA. IC-F4-03. Trazabilidad de componentes y elementos: Cada componente y elemento reutilizable cuenta con trazabilidad establecida con los artefactos de F3. Umbral: 100 % de ítems trazables documentados. |


## Definición de elementos

En la Tabla 119 y en la Tabla 120, respectivamente se describen los elementos que conforman la Fase 3 del proceso:
**Tabla 119. Documentación del elemento E9: Componentes estructurales.**

### Tabla extraída 119

| Campo | Descripción |
| --- | --- |
| Código | E9 |
| Fase asociada | F4 |
| Categoría | Dimensión de Diseño y Operaciones (DO) |
| Propósito del elemento | Definir, estructurar y formalizar los componentes estructurales que conforman la arquitectura empresarial híbrida, organizando los elementos de solución, integración, datos y seguridad en un catálogo técnico que soporte el diseño, la implementación y la operación del sistema. |
| Objetivos específicos | O1: Identificar los componentes estructurales relevantes para la arquitectura. O2: Especificar las responsabilidades y capacidades de cada componente. O3: Establecer las relaciones e interdependencias entre componentes. O4: Documentar los componentes con criterios de trazabilidad respecto a los artefactos de fases anteriores. O5: Consolidar el catálogo de componentes como base para el diseño detallado. |
| Productos generados | Documento de componentes estructurales (DCO): Artefacto que describe los componentes que conforman la arquitectura, sus responsabilidades, relaciones y criterios de integración, sirviendo como referencia técnica para el diseño e implementación. |
| Criterios de aceptación | Los componentes definidos cubren todas las capacidades arquitectónicas identificadas en fases anteriores. Cada componente cuenta con responsabilidades claramente definidas y trazabilidad establecida. Las relaciones entre componentes son coherentes con las estructuras definidas en F3. El OGA valida que el DCO es completo, consistente y alineado con los objetivos estratégicos. |
| Dependencias estructurales | E5, E6: Los componentes se derivan de las estructuras arquitectónicas y los atributos de calidad definidos en F3. |

**Tabla 120. Documentación del elemento E10: Elementos reutilizables.**

### Tabla extraída 120

| Campo | Descripción |
| --- | --- |
| Código | E10 |
| Fase asociada | F4 |
| Categoría | Dimensión de Diseño y Operaciones (DO) |
| Propósito del elemento | Identificar, catalogar y formalizar los elementos reutilizables de la arquitectura empresarial híbrida, estableciendo una biblioteca de componentes, patrones y servicios que puedan ser aprovechados en múltiples contextos de implementación, favoreciendo la coherencia, eficiencia y sostenibilidad del diseño arquitectónico. |
| Objetivos específicos | O1: Identificar los elementos con potencial de reutilización en la arquitectura. O2: Clasificar los elementos reutilizables por tipo, dominio y nivel de aplicación. O3: Definir las interfaces y contratos de los elementos reutilizables. O4: Establecer criterios de variabilidad y configurabilidad para cada elemento. O5: Consolidar la biblioteca de elementos reutilizables como referencia para futuras implementaciones. |
| Productos generados | Biblioteca de elementos reutilizables (BER): Artefacto que cataloga los elementos arquitectónicos con potencial de reutilización, sus interfaces, condiciones de uso, variabilidad y criterios de integración, constituyendo un activo de conocimiento arquitectónico. |
| Criterios de aceptación | Los elementos catalogados tienen potencial real de reutilización en la arquitectura. Cada elemento cuenta con interfaces y contratos claramente definidos. Se establecen criterios de variabilidad y configurabilidad. La biblioteca es coherente con el DCO definido en E9. El OGA valida que el BER es completo y alineado con los objetivos de reutilización. |
| Dependencias estructurales | E9: Los elementos reutilizables se derivan y complementan los componentes estructurales definidos en E9. |


## Flujo general de actividades

**Figura 35. Flujo general de actividades que conforman la Fase 4.**

## Actividades asociadas con el elemento E9

En la Figura 30 se presenta el flujo de actividades correspondientes al subproceso F4.E9:
**Figura 36. Flujo de actividades que conforman el elemento E9.**
Las tablas presentadas a continuación describen el desglose de cada una de las actividades que componen el elemento E6 y su referencia directa en el documento:
- Tabla 121. Actividad F4.E9.A1. Definición del marco de componentes estructurales.
- Tabla 122. Actividad F4.E9.A2. Especificación de componentes transversales de la solución.
- Tabla 123. Actividad F4.E9.A3. Especificación de componentes de integración y datos.
- Tabla 124. Actividad F4.E6.E4. Especificación de componentes de seguridad clásicos y cuánticos.
- Tabla 125. Actividad F4.E9.A5. Consolidación del catálogo de componentes.
**Tabla 121. Actividad F4.E9.A1. Definición del marco de componentes estructurales.**

### Tabla extraída 121

| Campo | Descripción |
| --- | --- |
| Código | F4.E9.A1 |
| Nombre | Definición del marco de componentes estructurales. |
| Objetivo | Establecer el marco conceptual y metodológico para la identificación, clasificación y documentación de los componentes estructurales de la arquitectura empresarial híbrida, partiendo de las estructuras y atributos definidos en F3. |
| Descripción | El AEP analiza los artefactos de la Fase 3 con el propósito de establecer los criterios de identificación y clasificación de componentes. Se definen las categorías de componentes (clásicos, cuánticos, híbridos, de integración, de datos y de seguridad), los criterios de granularidad, las convenciones de nomenclatura y la plantilla de documentación que se utilizará durante todo el elemento E9. Este marco garantiza la coherencia del catálogo resultante. |
| Entradas | LBA-F3: Línea base de artefactos de la Fase 3 |
| Salidas | Marco de referencia de componentes (MRC): Artefacto que establece las categorías, criterios de clasificación, convenciones de nomenclatura y plantillas para la documentación de componentes estructurales. |
| Responsable | AEP : Arquitecto empresarial del proceso. |
| Herramientas | Herramientas de modelado arquitectónico ( ArchiMate , C4 Model). Marcos de referencia (TOGAF, ISO/IEC/IEEE 42010). Plantillas de documentación de componentes. Herramientas de gestión documental. |
| Punto de validación | El marco cubre todas las categorías de componentes necesarias para la arquitectura híbrida. Los criterios de clasificación son claros, no ambiguos y aplicables de forma consistente. Existe alineación con los artefactos de F3 y con los objetivos estratégicos de la organización. |
| Tareas |  |
| Identificar las categorías de componentes necesarias para la arquitectura. Definir criterios de granularidad y límites de responsabilidad. Establecer convenciones de nomenclatura para los componentes. Crear la plantilla de documentación de componentes. Validar el marco con las estructuras y atributos definidos en F3. Documentar el MRC. |  |

**Tabla 122. Actividad F4.E9.A2. Especificación de componentes transversales de la solución.**

### Tabla extraída 122

| Campo | Descripción |
| --- | --- |
| Código | F4.E9.A2 |
| Nombre | Especificación de componentes transversales de la solución. |
| Objetivo | Definir y documentar los componentes estructurales de carácter transversal que aplican a toda la solución, estableciendo sus responsabilidades, interfaces, dependencias y criterios de integración. |
| Descripción | El ASP, a partir del MRC y los artefactos de F3, identifica y especifica los componentes que tienen impacto transversal en la solución. Para cada componente se documenta: propósito, responsabilidades, interfaces expuestas y consumidas, dependencias con otros componentes, tecnologías aplicables, restricciones de implementación y criterios de integración. Se prioriza la cobertura de los casos de uso arquitectónicos más críticos y se garantiza la coherencia con las estructuras definidas en F3. |
| Entradas | MRC: Marco de referencia de componentes. |
| Salidas | Catálogo de componentes transversales de la solución (CCTS): Artefacto que describe los componentes con responsabilidades transversales, sus interfaces y criterios de integración. |
| Responsable | ASP: Arquitecto de software del proceso. |
| Herramientas | Herramientas de modelado arquitectónico ( ArchiMate , UML, C4 Model). Repositorio de arquitectura empresarial. Plantillas de documentación de componentes. Marcos de referencia (TOGAF, SAFe). |
| Punto de validación | Los componentes cubren las responsabilidades transversales identificadas en F3. Cada componente tiene interfaces y dependencias claramente definidas. No existen solapamientos de responsabilidades entre componentes. Los componentes son coherentes con las estructuras arquitectónicas de F3. |
| Tareas |  |
| Identificar los componentes transversales a partir del DEA y el MRC. Especificar el propósito y las responsabilidades de cada componente. Definir las interfaces expuestas y consumidas. Establecer las dependencias con otros componentes. Documentar las tecnologías aplicables y las restricciones de implementación. Validar la coherencia con las estructuras de F3. Registrar los componentes en el CCTS. |  |

**Tabla 123. Actividad F4.E9.A3. Especificación de componentes de integración y datos.**

### Tabla extraída 123

| Campo | Descripción |
| --- | --- |
| Código | F4.E9.A3 |
| Nombre | Especificación de componentes de integración y datos. |
| Objetivo | Definir y documentar los componentes estructurales responsables de la integración entre sistemas y la gestión de datos, abordando tanto las capacidades clásicas como las interacciones propias de la arquitectura híbrida. |
| Descripción | El AIP y el ADP especifican, en colaboración, los componentes de integración y de datos de la arquitectura. Para los componentes de integración se documentan los mecanismos de comunicación ( APIs , colas de mensajes, buses de eventos, interfaces cuántico-clásicas), los protocolos, los patrones de integración y los criterios de orquestación. Para los componentes de datos se especifican los modelos de datos, los repositorios, las políticas de acceso y los flujos de transformación. Se atiende de manera especial a los desafíos de interoperabilidad entre componentes clásicos y cuánticos, incluyendo aspectos como la codificación de información y las restricciones de latencia. |
| Entradas | MRC: Marco de referencia de componentes. |
| Salidas | Catálogo de componentes de integración y datos (CCID): Artefacto que describe los componentes de integración y gestión de datos, sus mecanismos, protocolos y criterios de interoperabilidad híbrida. |
| Responsable | AIP: Arquitecto de integración del proceso. ADP: Arquitecto de datos del proceso. |
| Herramientas | Herramientas de modelado de integración ( ArchiMate , UML). Catálogos de patrones de integración (EIP, API Gateway). Herramientas de modelado de datos (ERD, BPMN). Especificaciones de interfaces cuántico-clásicas. Herramientas de gestión documental. |
| Punto de validación | Los componentes de integración cubren todos los mecanismos de comunicación necesarios para la arquitectura híbrida. Los componentes de datos aseguran la coherencia, disponibilidad y trazabilidad de la información. Existe consistencia entre los componentes de integración y datos con los transversales del CCTS. Se documentan explícitamente las restricciones de interoperabilidad híbrida. |
| Tareas |  |
| Identificar los componentes de integración a partir del DEA, MRC y CCTS. Especificar los mecanismos de comunicación y los patrones de integración. Documentar las interfaces cuántico-clásicas y sus restricciones. Identificar los componentes de datos: repositorios, modelos y flujos de transformación. Definir las políticas de acceso y gestión de datos. Validar la coherencia e interoperabilidad con los componentes transversales. Registrar los componentes en el CCID. |  |

**Tabla 124. Actividad F4.E6.E4. Especificación de componentes de seguridad clásicos y cuánticos.**

### Tabla extraída 124

| Código | F4.E9.A4 |
| --- | --- |
| Nombre | Especificación de componentes de seguridad clásicos y cuánticos. |
| Objetivo | Definir y documentar los componentes estructurales responsables de la seguridad de la arquitectura empresarial híbrida, considerando tanto los mecanismos clásicos como las implicaciones del cómputo cuántico en la criptografía y la protección de la información. |
| Descripción | El ASecP y el ETC especifican los componentes de seguridad de la arquitectura. Para los componentes clásicos se documentan los mecanismos de autenticación, autorización, cifrado, auditoría y control de acceso. Para los componentes cuánticos o postcuánticos se abordan los algoritmos de criptografía resistentes a ataques cuánticos (NIST PQC), los mecanismos de distribución cuántica de claves (QKD) cuando aplique, y las estrategias de transición criptográfica. Se identifican además los componentes responsables de la gestión de identidades en contextos híbridos y los mecanismos de monitoreo de seguridad adaptados al entorno. |
| Entradas | MRC: Marco de referencia de componentes. |
| Salidas | Catálogo de componentes de seguridad clásicos y cuánticos (CCSE): Artefacto que describe los componentes de seguridad, sus mecanismos, algoritmos, políticas y criterios de protección en el contexto híbrido. |
| Responsable | ASecP : Arquitecto de seguridad del proceso. ETC: Especialista tecnológico cuántic o . |
| Herramientas | Marcos de seguridad (ISO/IEC 27001, NIST Cybersecurity Framework). Catálogos de algoritmos postcuánticos (NIST PQC). Especificaciones de QKD y criptografía híbrida. Herramientas de modelado de amenazas (STRIDE, LINDDUN). Plantillas de documentación de componentes de seguridad. |
| Punto de validación | Los componentes cubren todos los mecanismos de seguridad necesarios para el entorno híbrido. Se documentan explícitamente las estrategias de transición criptográfica. Los componentes de seguridad son coherentes con los atributos de calidad de seguridad definidos en F3. El ASecP y el ETC validan conjuntamente la completitud y viabilidad técnica del CCSE. |
| Tareas |  |
| Identificar los requisitos de seguridad a partir del MAC y los artefactos de F3. Especificar los componentes de seguridad clásicos (autenticación, autorización, cifrado, auditoría). Identificar los algoritmos postcuánticos aplicables y los mecanismos de transición criptográfica. Documentar los componentes de gestión de identidades en contextos híbridos. Especificar los mecanismos de monitoreo y respuesta ante incidentes. Validar la coherencia con los atributos de seguridad definidos en F3. Registrar los componentes en el CCSE. |  |

**Tabla 125. Actividad F4.E9.A5. Consolidación del catálogo de componentes.**

### Tabla extraída 125

| Campo | Descripción |
| --- | --- |
| Código | F4.E9.A5 |
| Nombre | Consolidación del catálogo de componentes estructurales. |
| Objetivo | Integrar y consolidar todos los catálogos de componentes producidos durante el elemento E9 en un documento unificado (DCO), verificando la coherencia interna, eliminando redundancias y estableciendo la trazabilidad completa. |
| Descripción | El AEP revisa y consolida los catálogos CCTS, CCID y CCSE producidos en las actividades anteriores, integrándolos en el documento de componentes estructurales (DCO). Durante la consolidación se verifica la coherencia entre los componentes de distintas categorías, se eliminan solapamientos y redundancias, se establecen las relaciones cruzadas entre componentes. El DCO constituye el artefacto principal de salida del elemento E9. |
| Entradas | CCTS: Catálogo de componentes transversales de la solución. CCID: Catálogo de componentes de integración y datos. CCSE: Catálogo de componentes de seguridad clásicos y cuánticos. |
| Salidas | DCO: Documento de componentes estructurales consolidado |
| Responsable | AEP: Arquitecto empresarial de la solución. |
| Herramientas | Herramientas de modelado arquitectónico. Plantillas de consolidación. Herramientas de gestión documental. Matriz de trazabilidad arquitectónica. |
| Punto de validación | No existen inconsistencias ni solapamientos entre los catálogos de componentes. Existe trazabilidad completa entre componentes y los artefactos de F3. El DCO es coherente, completo y está correctamente versionado. |
| Tareas |  |
| Revisar y comparar los catálogos CCTS, CCID y CCSE. Eliminar redundancias y solapamientos identificados. Establecer las relaciones cruzadas entre componentes de distintas categorías. Consolidar todos los catálogos en el DCO. Verificar la completitud e integridad del documento resultante. Versionar y registrar el DCO en la línea base. |  |


## Actividades asociadas con el elemento E10

En la Figura 30 se presenta el flujo de actividades correspondientes al subproceso F4.E10:
**Figura 37. Flujo de actividades que conforman el elemento E6.**
Las tablas presentadas a continuación describen el desglose de cada una de las actividades que componen el elemento E5 y su referencia directa en el documento:
- Tabla 126. Actividad F4.E10.A1. Definición del marco de elementos reutilizables.
- Tabla 127. Actividad F4.E10.A2. Especificación de elementos reutilizables de la solución.
- Tabla 128. Actividad F4.E10.A3. Especificación de elementos reutilizables de integración y datos.
- Tabla 129. Actividad F4.E10.A4. Especificación de elementos reutilizables de seguridad.
- Tabla 130. Actividad F4.E10.A5. Consolidación de la biblioteca de elementos reutilizables.
**Tabla 126. Actividad F4.E10.A1. Definición del marco de elementos reutilizables.**

### Tabla extraída 126

| Nombre | Definición del marco de elementos reutilizables. |
| --- | --- |
| Objetivo | Establecer el marco conceptual y metodológico para la identificación, clasificación y documentación de los elementos reutilizables de la arquitectura empresarial híbrida, a partir del DCO y los artefactos previos. |
| Descripción | El AEP analiza el DCO y los artefactos de F3 con el propósito de identificar los criterios que determinan el potencial de reutilización de un elemento arquitectónico. Se definen las categorías de elementos reutilizables (patrones, servicios, módulos, frameworks , componentes de integración cuántico-clásica, entre otros), los criterios de granularidad, las convenciones de nomenclatura y la plantilla de documentación. Se establece además la política de variabilidad y configurabilidad que regirá la biblioteca resultante. |
| Entradas | DCO: Documento de componentes estructurales. |
| Salidas | Marco de referencia de elementos reutilizables (MRR): Artefacto que establece las categorías, criterios de clasificación, convenciones de nomenclatura y plantillas para la documentación de elementos reutilizables. |
| Responsable | AEP: Arquitecto empresarial de la solución. |
| Herramientas | Herramientas de modelado arquitectónico ( ArchiMate , C4 Model). Catálogos de patrones arquitectónicos (POSA, GoF , EIP). Plantillas de documentación de elementos reutilizables. Marcos de referencia de reutilización (TOGAF, SAFe). |
| Punto de validación | El marco cubre todas las categorías de elementos reutilizables pertinentes para la arquitectura híbrida. Los criterios de reutilización son claros y aplicables de forma consistente. Existe coherencia con el DCO y con los objetivos estratégicos de la organización. |
| Tareas |  |
| Revisar el DCO e identificar los elementos con potencial de reutilización. Definir las categorías de elementos reutilizables para la arquitectura híbrida. Establecer los criterios de granularidad y los límites de variabilidad. Definir las convenciones de nomenclatura para la biblioteca. Crear la plantilla de documentación de elementos reutilizables. Establecer la política de variabilidad y configurabilidad. Documentar el MRR. |  |

**Tabla 127. Actividad F4.E10.A2. Especificación de elementos reutilizables de la solución.**

### Tabla extraída 127

| Campo | Descripción |
| --- | --- |
| Código | F4.E10.A2 |
| Nombre | Especificación de elementos reutilizables de la solución. |
| Objetivo | Identificar y documentar los elementos reutilizables de carácter transversal derivados de los componentes de solución, especificando sus interfaces, condiciones de uso, variabilidad y criterios de integración. |
| Descripción | El ASP identifica los elementos de los componentes transversales de la solución que presentan potencial de reutilización. Para cada elemento se documenta: propósito, interfaces expuestas, parámetros de configuración, condiciones y restricciones de uso, variantes de implementación y ejemplos de aplicación. Se busca maximizar la cobertura de casos de uso recurrentes en la organización, reduciendo la duplicación de esfuerzos en futuras implementaciones. |
| Entradas | MRR: Marco de referencia de elementos reutilizables. CCTS: Catálogo de componentes transversales de la solución. |
| Salidas | Elementos reutilizables de la solución (ERTS): Catálogo de elementos reutilizables derivados de los componentes de solución, con sus interfaces, condiciones de uso y parámetros de variabilidad. |
| Responsable | ASP : Arquitecto de solución del proceso. |
| Herramientas | Herramientas de modelado arquitectónico ( ArchiMate , UML). Catálogos de patrones arquitectónicos. Repositorio de arquitectura empresarial. Plantillas de documentación de elementos reutilizables. |
| Punto de validación | Los elementos catalogados representan capacidades con potencial real de reutilización. Cada elemento cuenta con interfaces y condiciones de uso claramente definidas. Se documentan las variantes de implementación relevantes. Los elementos son coherentes con los componentes del CCTS. |
| Tareas |  |
| Revisar el CCTS y el MRR para identificar elementos con potencial de reutilización. Especificar el propósito y las interfaces de cada elemento. Documentar los parámetros de configuración y las variantes de implementación. Establecer las condiciones y restricciones de uso. Proporcionar ejemplos de aplicación para los elementos más relevantes. Validar la coherencia con los componentes del CCTS. Registrar los elementos en el ERTS. |  |

**Tabla 128. Actividad F4.E10.A3. Especificación de elementos reutilizables de integración y datos.**

### Tabla extraída 128

| Campo | Descripción |
| --- | --- |
| Código | F4.E10.A3 |
| Nombre | Especificación de elementos reutilizables de integración y datos. |
| Objetivo | Identificar y documentar los elementos reutilizables derivados de los componentes de integración y datos, con especial atención a los patrones y mecanismos aplicables en contextos de arquitectura híbrida. |
| Descripción | El AIP y el ADP identifican los elementos de los componentes de integración y datos que presentan potencial de reutilización. Se documentan patrones de integración reutilizables (adaptadores, conectores, transformadores), servicios de datos comunes (repositorios de referencia, servicios de consulta, transformaciones de datos) y los mecanismos de comunicación cuántico-clásica susceptibles de ser encapsulados como elementos reutilizables. Para cada elemento se especifican sus interfaces, protocolos, restricciones de interoperabilidad y criterios de aplicabilidad. |
| Entradas | MRR: Marco de referencia de elementos reutilizables. CCID: Catálogo de componentes de integración y datos. |
| Salidas | Elementos reutilizables de integración y datos (ERID): Catálogo de elementos reutilizables derivados de los componentes de integración y datos, con sus patrones, interfaces y criterios de aplicabilidad híbrida. |
| Responsable | AIP: Arquitecto de integración del proceso. ADP: Arquitecto de datos del proceso. |
| Herramientas | Catálogos de patrones de integración empresarial (EIP). Herramientas de modelado de integración ( ArchiMate , UML). Especificaciones de interfaces cuántico-clásicas. Plantillas de documentación de elementos reutilizables. |
| Punto de validación | Los elementos cubren los patrones de integración y datos más frecuentes en la arquitectura híbrida. Se documentan explícitamente los elementos reutilizables para la integración cuántico-clásica. Cada elemento tiene interfaces y restricciones de interoperabilidad claramente definidas. Los elementos son coherentes con el CCID y el ERTS. |
| Tareas |  |
| Revisar el CCID y el MRR para identificar patrones y mecanismos reutilizables. Especificar los adaptadores, conectores y transformadores de integración. Documentar los servicios de datos comunes y sus interfaces. Identificar y documentar los mecanismos de comunicación cuántico-clásica reutilizables. Establecer los protocolos y las restricciones de interoperabilidad. Validar la coherencia con el CCID y el ERTS. Registrar los elementos en el ERID. |  |

**Tabla 129. Actividad F4.E10.A4. Especificación de elementos reutilizables de seguridad.**

### Tabla extraída 129

| Campo | Descripción |
| --- | --- |
| Código | F4.E10.A4 |
| Nombre | Especificación de elementos reutilizables de seguridad. |
| Objetivo | Identificar y documentar los elementos reutilizables derivados de los componentes de seguridad, abordando tanto los mecanismos clásicos como los controles adaptados al contexto de la computación cuántica. |
| Descripción | El ASecP y el ETC los elementos de los componentes de seguridad que presentan potencial de reutilización. Se documentan módulos de autenticación y autorización reutilizables, políticas de cifrado encapsuladas, bibliotecas de algoritmos postcuánticos , mecanismos de auditoría y monitoreo, y componentes de gestión de identidades adaptables a distintos contextos de la organización. Para cada elemento se especifican las condiciones de uso, las dependencias criptográficas, las políticas de actualización y los criterios de validación. |
| Entradas | MRR: Marco de referencia de elementos reutilizables. CCSE: Catálogo de componentes de seguridad clásicos y cuánticos. |
| Salidas | Elementos reutilizables de seguridad (ERSE): Catálogo de elementos reutilizables derivados de los componentes de seguridad, con sus interfaces, políticas y criterios de aplicación en contextos híbridos. |
| Responsable | ASecP : Arquitecto de seguridad del proceso. ETC: Especialista tecnológico cuántico. |
| Herramientas | Marcos de seguridad (ISO/IEC 27001, NIST PQC). Catálogos de controles de seguridad reutilizables. Bibliotecas de algoritmos postcuánticos . Plantillas de documentación de elementos de seguridad. |
| Punto de validación | Los elementos cubren los mecanismos de seguridad más relevantes para la arquitectura híbrida. Se documentan explícitamente las dependencias criptográficas y las condiciones de actualización. Los elementos son coherentes con el CCSE y los atributos de seguridad de F3. El ASecP y el ETC validan conjuntamente la completitud y aplicabilidad del ERSE. |
| Tareas |  |
| Revisar el CCSE y el MRR para identificar mecanismos de seguridad reutilizables. Especificar los módulos de autenticación y autorización encapsulados. Documentar las políticas de cifrado y los algoritmos postcuánticos aplicables. Identificar los componentes de auditoría y monitoreo reutilizables. Establecer las condiciones de uso y las políticas de actualización criptográfica. Validar la coherencia con el CCSE y los atributos de seguridad de F3. Registrar los elementos en el ERSE. |  |

**Tabla 130. Actividad F4.E10.A5. Consolidación de la biblioteca de elementos reutilizables.**

### Tabla extraída 130

| Campo | Descripción |
| --- | --- |
| Código | F4.E10.A5 |
| Nombre | Consolidación de la biblioteca de elementos reutilizables. |
| Objetivo | Integrar y consolidar todos los catálogos de elementos reutilizables producidos durante el elemento E10 en la Biblioteca de elementos reutilizables (BER), verificando la coherencia interna, estableciendo la trazabilidad con el DCO. |
| Descripción | El AEP revisa y consolida los catálogos ERTS, ERID y ERSE, integrándolos en la biblioteca de elementos reutilizables (BER). Durante la consolidación se verifica la coherencia entre los elementos de distintas categorías, se eliminan duplicidades, se establecen las relaciones cruzadas entre elementos y su correspondencia con los componentes del DCO. |
| Entradas | ERTS: Elementos reutilizables de la solución. ERID: Elementos reutilizables de integración y datos. ERSE: Elementos reutilizables de seguridad. DCO: Documento de componentes estructurales. |
| Salidas | BER: Biblioteca de elementos reutilizables consolidada. |
| Responsable | AEP : Arquitecto empresarial del proceso. |
| Herramientas | Herramientas de modelado arquitectónico. Plantillas de consolidación de bibliotecas. Herramientas de gestión documental. Matriz de trazabilidad arquitectónica. |
| Punto de validación | No existen inconsistencias ni duplicidades entre los catálogos de elementos reutilizables. Existe trazabilidad completa entre elementos reutilizables y los componentes del DCO. El BER es coherente, completo y correctamente versionado. |
| Tareas |  |
| Revisar y comparar los catálogos ERTS, ERID y ERSE. Eliminar duplicidades e inconsistencias identificadas. Establecer las relaciones cruzadas entre elementos de distintas categorías. Verificar la correspondencia entre elementos reutilizables y componentes del DCO. Consolidar todos los catálogos en el BER. Versionar y registrar el BER en la línea base. |  |


## Actividades de sincronización y envío al OGA

**Tabla 131. Actividad F4.E9.A6 {E10}. Preparación y envío de artefactos al OGA.**

### Tabla extraída 131

| Campo | Descripción |
| --- | --- |
| Código | F4.E9.A6 {E10} |
| Nombre | Preparación y envío de artefactos al OGA. |
| Objetivo | Consolidar todos los artefactos producidos por la Fase 4 y remitirlos formalmente al OGA para su revisión y aprobación. |
| Descripción | Una vez cerrados los elementos E9 y E10, el AEP integra el conjunto completo de artefactos de la fase, verificando su completitud e integridad. Se prepara el paquete de entrega formal incluyendo el DCO y el BER, junto con los registros de validación interna. El paquete es revisado por el AEP antes de su envío al OGA, asegurando que todos los artefactos estén correctamente versionados y documentados. Se notifica formalmente al OGA el inicio del proceso de revisión de la Fase 4. |
| Entradas | DCO: Documento de componentes estructurales. BER: Biblioteca de elementos reutilizables. |
| Salidas | LBA-F4 inicial: Conjunto de artefactos que conforman la línea base arquitectónica de la Fase 4. |
| Responsable | AEP: Arquitecto empresarial del proceso. |
| Herramientas | Herramientas de gestión documental. Plantilla de lista base de artefactos. Canal formal de comunicación con el OGA. |
| Punto de validación | Confirmación de recepción de los artefactos correspondientes por parte del OGA y registro de inicio del proceso de revisión. |
| Tareas |  |
| Verificar la completitud e integridad de todos los artefactos de E9 y E10. Consolidar el DCO y el BER en el paquete de entrega. Revisar la correcta versión y nomenclatura de cada artefacto. Preparar la lista base de artefactos de la Fase 4. Enviar formalmente el paquete al OGA. Registrar la fecha y los datos de envío al OGA. |  |

**Tabla 132. Actividad F4.E9.A7 {E10}. Ajuste de artefactos según observaciones del OGA.**

### Tabla extraída 132

| Campo | Descripción |
| --- | --- |
| Código | F4.E9.A7 {E10} |
| Nombre | Ajuste de artefactos según observaciones del OGA. |
| Objetivo | Atender las observaciones emitidas por el OGA tras la revisión de la Fase 4, incorporando los ajustes requeridos en los artefactos afectados para obtener la aprobación definitiva. |
| Descripción | Cuando el OGA emite observaciones sobre los artefactos de la Fase 4, el AEP analiza cada observación, identifica los artefactos afectados y planifica los ajustes necesarios. Los cambios se realizan de manera controlada, manteniendo la trazabilidad entre versiones y verificando que las modificaciones sean consistentes con el resto de la arquitectura. Una vez realizados los ajustes, los artefactos son revisados internamente antes de ser reenviados al OGA para una nueva revisión. El proceso puede iterarse hasta obtener la aprobación definitiva. |
| Entradas | LBA-F4 inicial: Conjunto de artefactos que conforman la línea base arquitectónica de la Fase 4 con la revisión del OGA. |
| Salidas | LBA-F4 aprobada: Conjunto de artefactos que conforman la línea base arquitectónica de la Fase 4 aprobados o listos para su envío al OGA para una nueva revisión. |
| Responsable | AEP: Arquitecto empresarial del proceso. |
| Herramientas | Herramientas de gestión documental y control de versiones. Matriz de trazabilidad de observaciones. |
| Punto de validación | Verificación del AEP de que todas las observaciones del OGA han sido atendidas antes del reenvío del paquete. |
| Tareas |  |
| Analizar el acta de revisión del OGA e identificar los artefactos afectados. Priorizar y planificar los ajustes según el impacto arquitectónico. Realizar los cambios controlados en los artefactos afectados. Revisar internamente los artefactos ajustados. Preparar el paquete de re-entrega y enviarlo al OGA. Registrar las observaciones atendidas y el historial de cambios. |  |


## Fase 5: Sistematización del diseño

La Fase F5 cierra el proceso mediante la sistematización de las decisiones de diseño adoptadas a las necesitades de los proyectos en la organización. Su propósito es transformar las prácticas y decisiones de organización estructural, muchas de ellas implícitas en los artefactos de las fases anteriores, en catálogos explícitos, documentados y reutilizables de estilos arquitectónicos y patrones de diseño. Esta fase reconoce una de las principales brechas identificadas en la literatura: la ausencia sistemática de formalización de los estilos y patrones en propuestas de arquitectura híbrida cuántico-clásica. Al abordar esta brecha, el proceso proporciona un activo de conocimiento arquitectónico que trasciende el proyecto inmediato y orienta la evolución futura del sistema.
En la Tabla 133 se describe la información general que describe esta etapa:
**Tabla 133. Documentación de la Fase 5.**

### Tabla extraída 133

| Campo | Descripción |
| --- | --- |
| Nombre | Sistematización del diseño |
| Código | F5 |
| Subconjunto estructural asociado | S5 |
| Elementos incluidos | E7: Estilos y patrones arquitectónicos. E8: Patrones de diseño. |
| Propósito | Sistematizar las decisiones de diseño de la arquitectura empresarial híbrida mediante la selección, documentación y estandarización de los estilos arquitectónicos y los patrones de diseño aplicables, estableciendo un catálogo de soluciones reutilizables que consolide el conocimiento arquitectónico y oriente la implementación coherente del sistema. |
| Entradas | LBA-F3: Línea base arquitectónica correspondiente a la Fase 3. LBA-F4: Línea base arquitectónica correspondiente a la Fase 4. |
| Salidas | LBA-F5: Línea base arquitectónica establecida para la Fase 4, que incluye: CEP: Catálogo de estilos y patrones arquitectónicos. CPD: Catálogo de patrones de diseño. |
| Punto de control | Consolidación de artefactos realizada por el arquitecto empresarial del proceso, quien determina que los catálogos producidos en los elementos E7 y E8 son coherentes entre sí, están alineados con los artefactos de las fases anteriores y satisfacen los criterios de completitud establecidos. |
| Indicadores de cumplimiento | IC-F5-01. Completitud de artefactos de F5: Los catálogos CEP y CPD están correctamente documentados, versionados y registrados en la LBA-F5. Umbral: 100 % de artefactos presentes antes del envío al OGA. IC-F5-02. Cobertura de estilos y patrones: Los estilos y patrones documentados cubren los principales contextos de aplicación de la arquitectura híbrida. Umbral: cobertura validada por el OGA sin brechas significativas. IC-F5-03. Trazabilidad de decisiones de diseño: Los estilos y patrones catalogados están vinculados con los componentes y estructuras de las fases previas. Umbral: 100 % de ítems con trazabilidad establecida. |


## Definición de elementos

En la Tabla 134 y en la Tabla 135, respectivamente se describen los elementos que conforman la Fase 3 del proceso:
**Tabla 134. Documentación del elemento E7: Estilos y patrones arquitectónicos.**

### Tabla extraída 134

| Campo | Descripción |
| --- | --- |
| Código | E7 |
| Fase asociada | F5 |
| Categoría | Dimensión de Diseño y Calidad (DCD) |
| Propósito del elemento | Identificar, seleccionar y documentar los estilos arquitectónicos y los patrones de alto nivel aplicables a la arquitectura empresarial híbrida, estableciendo un catálogo que estandarice las decisiones de organización estructural para los contextos clásico, cuántico y cuántico-clásico. La definición reconoce que, en el dominio híbrido, los estilos emergen frecuentemente de forma implícita a partir de prácticas recurrentes, por lo que el catálogo admite estilos inferidos y en evolución. |
| Objetivos específicos | O1: Analizar las estructuras, los componentes y los atributos de calidad de fases previas para identificar patrones de organización recurrentes. O2: Clasificar los estilos arquitectónicos aplicables según los dominios de la arquitectura (solución, integración, datos, seguridad). O3: Documentar cada estilo con sus principios, ventajas, restricciones y criterios de aplicabilidad en contextos híbridos. O4: Establecer relaciones de trazabilidad entre los estilos catalogados y los componentes y estructuras definidos en F3 y F4. O5: Consolidar el catálogo de estilos y patrones arquitectónicos como referencia normativa para el diseño y la evolución de la arquitectura. |
| Productos generados | Catálogo de estilos y patrones arquitectónicos (CEP): Artefacto que documenta los estilos arquitectónicos seleccionados para la arquitectura empresarial híbrida, incluyendo su descripción, principios de aplicación, variantes para el dominio cuántico-clásico, restricciones de uso y trazabilidad con los artefactos de fases anteriores. |
| Criterios de aceptación | Los estilos documentados son coherentes con las estructuras y componentes definidos en F3 y F4. El catálogo cubre los contextos clásico, cuántico y cuántico-clásico de forma diferenciada. Cada estilo cuenta con criterios de aplicabilidad y restricciones claramente documentados. Existe trazabilidad entre los estilos y los artefactos de fases anteriores. El OGA valida que el CEP es consistente con los objetivos y las decisiones arquitectónicas previas. |
| Dependencias estructurales | E5: Los estilos se derivan de las estructuras arquitectónicas definidas en F3. E6: Los estilos deben ser coherentes con los atributos de calidad establecidos en F3. E9 : Los patrones de diseño se especifican sobre los componentes estructurales formalizados en F4. E10 : Los patrones de diseño incorporan y extienden los elementos reutilizables identificados en F4. |

**Tabla 135. Documentación del elemento E8: Patrones de diseño.**

### Tabla extraída 135

| Campo | Descripción |
| --- | --- |
| Código | E8 |
| Fase asociada | F5 |
| Categoría | Dimensión de Diseño y Calidad (DCD) |
| Propósito del elemento | Identificar, seleccionar y documentar los patrones de diseño aplicables a los componentes e interacciones de la arquitectura empresarial híbrida, estableciendo un catálogo de plantillas reutilizables que sistematice las soluciones a problemas recurrentes de implementación. El elemento reconoce la ausencia de patrones de diseño cuánticos formalizados en la literatura, por lo que establece este componente como un área abierta orientada a la sistematización progresiva de soluciones en arquitecturas híbridas. |
| Objetivos específicos | O1: Analizar los componentes estructurales (DCO) y la biblioteca de elementos reutilizables (BER) para identificar problemas de diseño recurrentes que admitan solución mediante patrones. O2: Clasificar los patrones de diseño identificados por tipo (creacionales, estructurales, de comportamiento) y dominio de aplicación. O3: Documentar cada patrón con su intención, estructura, aplicabilidad y consecuencias en el contexto de la arquitectura híbrida. O4: Proponer extensiones o adaptaciones de patrones clásicos para abordar los desafíos específicos de los componentes cuánticos y cuántico-clásicos. O5: Consolidar el catálogo de patrones de diseño como complemento del CEP y como activo de conocimiento para futuras implementaciones. |
| Productos generados | Catálogo de patrones de diseño (CPD): Artefacto que documenta los patrones de diseño aplicables a la arquitectura empresarial híbrida, incluyendo su intención, estructura, variantes para el dominio cuántico-clásico, criterios de aplicabilidad y trazabilidad con los componentes y elementos reutilizables de F4. |
| Criterios de aceptación | Los patrones documentados son aplicables a los componentes y elementos reutilizables de F4. El catálogo aborda explícitamente las particularidades del dominio cuántico-clásico. Cada patrón cuenta con criterios de aplicabilidad y consecuencias claramente documentados. El CPD es coherente con el CEP definido en E7. El OGA valida que el CPD es completo y consistente con las decisiones arquitectónicas previas. |
| Dependencias estructurales | E9: Los patrones se aplican sobre los componentes estructurales definidos en F4. |


## Flujo general de actividades

**Figura 38. Flujo general de actividades que conforman la Fase 5.**

## Actividades asociadas con el elemento E7

En la Figura 30 se presenta el flujo de actividades correspondientes al subproceso F5.E7:
**Figura 39. Flujo de actividades que conforman el elemento E7.**
Las tablas presentadas a continuación describen el desglose de cada una de las actividades que componen el elemento E7 y su referencia directa en el documento:
- Tabla 136. Actividad F5.E7.A1. Definición del marco de estilos arquitectónicos.
- Tabla 137. Actividad F5.E7.A2. Especificación de estilos transversales de la solución.
- Tabla 138. Actividad F5.E7.A3. Especificación de estilos de integración.
- Tabla 139. Actividad F5.E7.A4. Especificación de estilos de seguridad clasicos y poscuanticos.
- Tabla 140. Actividad F5.E7.A5. Consolidación del catálogo de estilos y patrones arquitectónicos.
**Tabla 136. Actividad F5.E7.A1. Definición del marco de estilos arquitectónicos.**

### Tabla extraída 136

| Campo | Descripción |
| --- | --- |
| Código | F5.E7.A1 |
| Nombre | Definición del marco de estilos arquitectónicos |
| Objetivo | Establecer el marco conceptual y metodológico para la identificación, clasificación y documentación de los estilos arquitectónicos aplicables a la arquitectura empresarial híbrida cuántico-clásica, partiendo de las estructuras y componentes definidos en F3 y F4. |
| Descripción | El AEP analiza los artefactos de las fases previas (MAQ-v1, DEA-v1, DCO-v1, BER-v1) para identificar los patrones de organización estructural recurrentes. Define el catálogo de estilos aplicables: clásicos (capas, microservicios, orientado a eventos, pipes-and- filters ) e híbridos (orquestación clásico-cuántica, circuito- backend ). Establece el esquema de documentación de cada estilo: descripción, principios, variantes, restricciones y criterios de aplicabilidad. El resultado es un marco que garantiza la coherencia del catálogo resultante. |
| Entradas | LBA-F3: Línea base arquitectónica de la Fase 3. LBA-F4: Línea base arquitectónica de la Fase 4. |
| Salidas | Definición del marco de estilos arquitectónicos |
| Responsable | AEP: Arquitecto empresarial del proceso. |
| Herramientas | Catálogos de estilos arquitectónicos de referencia. Herramientas de modelado arquitectónico ( ArchiMate , C4 Model). Marcos de referencia (TOGAF, ISO/IEC/IEEE 42010). Herramientas de gestión documental. |
| Punto de validación | El marco cubre los contextos clásico, cuántico y cuántico-clásico. Los criterios de clasificación son claros y aplicables de forma consistente. Existe alineación con las estructuras y componentes de F3 y F4. |
| Tareas |  |
| Analizar MAQ-v1, DEA-v1, DCO-v1 y BER-v1 para identificar patrones de organización recurrentes. Definir las categorías de estilos aplicables (clásicos, cuánticos, híbridos). |  |

**Tabla 137. Actividad F5.E7.A2. Especificación de estilos transversales de la solución.**

### Tabla extraída 137

| Campo | Descripción |
| --- | --- |
| Código | F5.E7.A2 |
| Nombre | Especificación de estilos transversales de la solución |
| Objetivo | Identificar y documentar los estilos arquitectónicos que gobiernan la organización global de la solución híbrida, cubriendo los dominios clásico y cuántico-clásico. |
| Descripción | El ASP identifica y documenta los estilos arquitectónicos que gobiernan la organización global de la solución, tanto en el dominio clásico como en el dominio híbrido cuántico-clásico. Incluye estilos como: arquitectura en capas, microservicios, orientado a eventos, serverless y variantes híbridas de orquestación de circuitos cuánticos. Para cada estilo documenta: descripción, principios de composición, ventajas, restricciones de uso y trazabilidad con estructuras de F3 y componentes de F4. |
| Entradas | MAQ: Modelo de atributos y estructuras de calidad. DCO-v1: Documento de componentes organizacionales . |
| Salidas | ESTA: Estilos transversales de solución y qrquitectura , que documentan los estilos aplicables a la solución clásica e híbrida. |
| Responsable | ASP: Arquitecto de solución del proceso. |
| Herramientas | Catálogos de estilos de referencia (microservicios, orientado a eventos, serverless ). Herramientas de modelado arquitectónico. Herramientas de gestión documental. |
| Punto de validación | Todos los estilos transversales identificados están documentados. Existe trazabilidad con estructuras de F3 y componentes de F4. Los estilos cubren los dominios clásico y cuántico-clásico. |
| Tareas |  |
| Revisar el MEP y los artefactos de referencia. Identificar los estilos transversales aplicables a la solución híbrida. Documentar cada estilo conforme a la plantilla del MEP. Establecer la trazabilidad con MAQ y DCO. Validar la especificación con el AEP. |  |

**Tabla 138. Actividad F5.E7.A3. Especificación de estilos de integración.**

### Tabla extraída 138

| Campo | Descripción |
| --- | --- |
| Código | F5.E7.A3 |
| Nombre | Especificación de estilos de integración cuántico-clásicos |
| Objetivo | Identificar y documentar los estilos arquitectónicos que rigen la integración entre componentes clásicos y cuánticos, y la gestión de datos en contextos híbridos. |
| Descripción | El AIP y el ADP identifican y documentan los estilos que rigen la integración entre componentes clásicos y cuánticos, y la gestión de datos en contextos híbridos. Incluye estilos como: API Gateway cuántico, mediador clásico-cuántico, pub/sub híbrido, pipeline de datos clásico-cuántico. Para cada estilo documenta: mecanismo de integración, restricciones de latencia y coherencia, y trazabilidad con estructuras de integración de F3 y componentes de integración de F4. |
| Entradas | MEP: Marco de Estilos y Patrones generado en A1. MAQ: Estructuras de integración y datos de la Fase 3. DCO: Componentes de integración y datos de la Fase 4. |
| Salidas | ECIA: Estilos de integración y datos híbridos documentados con mecanismos, restricciones y trazabilidad. |
| Responsable | AIP: Arquitecto de integración del proceso. ADP: Arquitecto de datos del proceso. |
| Herramientas | Catálogos de estilos de integración y middleware híbrido. Frameworks de integración cuántico-clásica. Herramientas de modelado arquitectónico. |
| Punto de validación | Los estilos cubren los principales mecanismos de integración cuántico-clásica. Restricciones de latencia y coherencia están documentadas para cada estilo. Existe trazabilidad con artefactos de integración de F3 y F4. |
| Tareas |  |
| Revisar estructuras de integración de MAQ y componentes de integración de DCO. Identificar los estilos de integración cuántico-clásicos aplicables. Documentar cada estilo con mecanismo, restricciones y trazabilidad. Validar la especificación con el AEP. |  |

**Tabla 139. Actividad F5.E7.A4. Especificación de estilos de seguridad clasicos y poscuanticos.**

### Tabla extraída 139

| Campo | Descripción |
| --- | --- |
| Código | F5.E7.A4 |
| Nombre | Especificación de estilos de seguridad clásicos y poscuánticos |
| Objetivo | Identificar y documentar los estilos arquitectónicos que gobiernan la seguridad en sistemas híbridos, con énfasis en los requisitos de criptografía poscuántica y protección de canales cuánticos. |
| Descripción | El ASecP y el ETC identifican y documentan los estilos arquitectónicos que gobiernan la seguridad en sistemas híbridos, con énfasis en los requisitos de criptografía poscuántica y protección de canales cuánticos. Incluye estilos como: Zero-Trust híbrido, cifrado poscuántico por capas, autenticación cuántica, aislamiento de backends cuánticos. Para cada estilo documenta: mecanismo de seguridad, amenazas mitigadas, restricciones de aplicabilidad y trazabilidad con atributos de seguridad de F3 y componentes de seguridad de F4. |
| Entradas | MEP: Marco de Estilos y Patrones generado en A1. MAQ: Atributos y estructuras de seguridad de la Fase 3. DCO: Componentes de seguridad de la Fase 4. |
| Salidas | ESPA: Estilos de s eguridad c lásicos y p oscuánticos documentados con mecanismos, amenazas mitigadas y criterios de aplicabilidad. |
| Responsable | ASecP : Arquitecto de seguridad del proceso. ETC: Especialista tecnológico cuántico. |
| Herramientas | Estándares de seguridad poscuántica (NIST PQC). Catálogos de patrones de seguridad arquitectónica. Herramientas de análisis de amenazas. |
| Punto de validación | Los estilos de seguridad cubren los dominios clásico y poscuántico . Amenazas mitigadas y restricciones están documentadas para cada estilo. Existe trazabilidad con atributos de seguridad de F3 y componentes de F4. |
| Tareas |  |
| Revisar atributos de seguridad de MAQ y componentes de seguridad de DCO. Identificar los estilos de seguridad clásicos y poscuánticos aplicables. Documentar cada estilo con mecanismo, amenazas y criterios de aplicabilidad. Validar la especificación con el AEP. |  |

**Tabla 140. Actividad F5.E7.A5. Consolidación del catálogo de estilos y patrones arquitectónicos.**

### Tabla extraída 140

| Campo | Descripción |
| --- | --- |
| Código | F5.E7.A5 |
| Nombre | Consolidación del catálogo de estilos arquitectónicos. |
| Objetivo | Integrar y versionar el catálogo de estilos y oatrones arquitectónicos como referencia normativa de la arquitectura híbrida, verificando la coherencia entre estilos y actualizando la MTA. |
| Descripción | El AEP integra los estilos especificados por todos los roles (ESTA, ECIA, ESPA) en el catálogo de estilos y Patrones arquitectónicos (CEP). Verifica la coherencia entre estilos, elimina redundancias y establece relaciones de trazabilidad con los artefactos de F3 y F4. |
| Entradas | ESTA: Estilos transversales de solución y arquitectura. ECIA: Estilos de integración y datos híbridos ESPA: Estilos de seguridad clásicos y poscuánticos . |
| Salidas | CEP: Catálogo de estilos y patrones arquitectónicos consolidado, versionado y con trazabilidad completa. |
| Responsable | AEP: Arquitecto empresarial del proceso. |
| Herramientas | Herramientas de gestión documental y control de versiones. Herramientas de trazabilidad arquitectónica. |
| Punto de validación | El CEP cubre los dominios clásico, cuántico y cuántico-clásico sin redundancias. El 100 % de los estilos tienen trazabilidad con artefactos de F3 y F4. El catálogo está versionado. |
| Tareas |  |
| Integrar ESTA, ECIA y ESPA en el CEP. Verificar la coherencia entre estilos y eliminar redundancias. Establecer la trazabilidad completa con F3 y F4. Documentar el CEP. |  |


## Actividades asociadas con el elemento E8

En la Figura 30 se presenta el flujo de actividades correspondientes al subproceso F5.E8:
**Figura 40. Flujo de actividades que conforman el elemento E8.**
Las tablas presentadas a continuación describen el desglose de cada una de las actividades que componen el elemento E8 y su referencia directa en el documento:
- Tabla 141. Actividad F5.E8.A1. Definición del marco de patrones de diseño.
- Tabla 142. Actividad F5.E8.A2. Especificación de patrones de diseño transversales de la solución.
- Tabla 143. Actividad F5.E7.A3. Especificación de patrones de integración y datos clásico-cuánticos
- Tabla 144. Actividad F5.E7.A4. Especificación de patrones de diseño de seguridad clásicos y cuánticos.
- Tabla 145. Actividad F5.E7.A5. Consolidación del catálogo de patrones de diseño.
**Tabla 141. Actividad F5.E8.A1. Definición del marco de patrones de diseño.**

### Tabla extraída 141

| Campo | Descripción |
| --- | --- |
| Código | F5.E8.A1 |
| Nombre | Definición del marco de patrones de diseño |
| Objetivo | Establecer el marco conceptual y metodológico para la identificación, clasificación y documentación de los patrones de diseño aplicables a la arquitectura empresarial híbrida, partiendo de los componentes de F4 y del CEP generado en E7. |
| Descripción | El AEP analiza los componentes identificados en de la Fase 4 para identificar problemas de diseño recurrentes susceptibles de sistematización. Establece el esquema de clasificación de patrones: creacionales, estructurales y de comportamiento; diferenciando entre patrones clásicos ( GoF y similares), patrones híbridos (clásico-cuántico) y patrones emergentes cuánticos, y define el esquema de documentación: intención, estructura, participantes, aplicabilidad, consecuencias y trazabilidad con CEP y F4. |
| Entradas | CEP-v1: Catálogo de Estilos y Patrones arquitectónicos generado en E7. DCO-v1: Documento de Componentes Organizacionales de la Fase 4. |
| Salidas | MPD: Marco de Patrones de Diseño que establece la clasificación, criterios y esquema de documentación. |
| Responsable | AEP: Arquitecto empresarial del proceso. |
| Herramientas | Catálogos de patrones de diseño ( GoF , POSA, P-EAA). Catálogos emergentes de patrones cuánticos. Herramientas de modelado y gestión documental. |
| Punto de validación | El marco cubre los tipos creacionales, estructurales y de comportamiento en contextos clásico, cuántico e híbrido. El esquema de documentación es completo y aplicable. Existe alineación con el CEP y los artefactos de F4. |
| Tareas |  |
| Definir la clasificación de patrones por tipo y dominio de aplicación. Establecer el esquema de documentación de patrones. Alinear el marco con el CEP. Documentar el MPD. |  |

**Tabla 142. Actividad F5.E8.A2. Especificación de patrones de diseño transversales de la solución.**

### Tabla extraída 142

| Campo | Descripción |
| --- | --- |
| Código | F5.E8.A2 |
| Nombre | Especificación de patrones de diseño transversales de la solución |
| Objetivo | Identificar y documentar los patrones de diseño transversales aplicables a los componentes clásicos y a los puntos de integración de alto nivel con el backend cuántico. |
| Descripción | El ASP identifica y documenta los patrones de diseño aplicables a los componentes clásicos y a los puntos de integración de alto nivel con el backend cuántico. Incluye patrones como: Factory Method (para creación de circuitos cuánticos), Facade (para simplificar la interfaz del backend cuántico), Strategy (para selección dinámica de algoritmos clásicos vs. cuánticos), Observer (para monitorización de resultados cuánticos). Para cada patrón documenta: intención, estructura, participantes, aplicabilidad, consecuencias y trazabilidad con DCO y CEP. |
| Entradas | CEP : Catálogo de e stilos y p atrones arquitectónicos. DCO: Componentes transversales de la Fase 4. |
| Salidas | PDTS: Patrones de d iseño t ransversales de s olución documentados con intención, estructura y trazabilidad. |
| Responsable | ASP: Arquitecto de solución del proceso. |
| Herramientas | Catálogos de patrones GoF y POSA . Herramientas de modelado UML. Herramientas de gestión documental. |
| Punto de validación | Todos los patrones transversales están documentados conforme al esquema del MPD. Existe trazabilidad con DCO y CEP. Los patrones abordan explícitamente el contexto híbrido. |
| Tareas |  |
| Identificar los patrones transversales aplicables a la solución híbrida. Documentar cada patrón conforme al esquema del MPD. Establecer la trazabilidad con DCO y CEP. Validar la especificación con el AEP. |  |

**Tabla 143. Actividad F5.E7.A3. Especificación de patrones de integración y datos clásico-cuánticos**

### Tabla extraída 143

| Campo | Descripción |
| --- | --- |
| Código | F5.E8.A3 |
| Nombre | Especificación de patrones de integración y datos clásico-cuánticos |
| Objetivo | Identificar y documentar los patrones de diseño que resuelven los problemas recurrentes de integración entre sistemas clásicos y backends cuánticos, y de gestión de datos en entornos híbridos. |
| Descripción | El AIP y el ADP identifican y documentan los patrones que abordan los problemas recurrentes en la integración entre sistemas clásicos y backends cuánticos, y en la gestión de datos híbridos. Incluye patrones como: Adapter (para homogenizar interfaces de proveedores cuánticos), Mediator (para orquestación de llamadas híbridas), Retry with Backoff (para gestión de errores probabilísticos cuánticos), Data Mapper (para transformar representaciones clásicas en formatos procesables por circuitos cuánticos). Para cada patrón documenta: intención, estructura, aplicabilidad, consecuencias y trazabilidad con DCO-v1 y BER-v1. |
| Entradas | CEP: Catálogo de estilos y patrones arquitectónicos. DCO: Componentes de integración de la Fase 4. |
| Salidas | PDID: Patrones de diseño de integración y datos documentados con mecanismos y trazabilidad. |
| Responsable | AIP: Arquitecto de integración del proceso. ADP: Arquitecto de datos del proceso. |
| Herramientas | Catálogos de patrones de integración (Enterprise Integration Patterns ). Frameworks de middleware cuántico. Herramientas de modelado arquitectónico. |
| Punto de validación | Los patrones cubren los principales problemas de integración clásico-cuántica. Los patrones abordan los desafíos de latencia y coherencia del dominio cuántico. |
| Tareas |  |
| Identificar los patrones de integración cuántico-clásicos aplicables. Documentar cada patr ón con mecanismo, restricciones y trazabilidad. Validar la especificación con el AEP. |  |

**Tabla 144. Actividad F5.E7.A4. Especificación de patrones de diseño de seguridad clásicos y cuánticos.**

### Tabla extraída 144

| Campo | Descripción |
| --- | --- |
| Código | F5.E8.A4 |
| Nombre | Especificación de patrones de diseño de seguridad clásicos y cuánticos |
| Objetivo | Identificar y documentar los patrones de diseño que resuelven los problemas de seguridad recurrentes en la arquitectura híbrida, con énfasis en los requisitos de criptografía poscuántica . |
| Descripción | El ASecP y el ETC identifican y documentan los patrones que abordan los problemas de seguridad recurrentes, con énfasis en los requisitos poscuánticos . Incluye patrones como: Secure Channel (para comunicación segura entre nodo clásico y QPU), Key Manager (para gestión de claves poscuánticas ), Circuit Validator (para validación de integridad de circuitos cuánticos antes de ejecución), Noise-Aware Decorator (para aplicación transparente de corrección de errores cuánticos). Para cada patrón documenta: intención, estructura, amenazas mitigadas, consecuencias y trazabilidad con DCO-v1 y CEP-v1. |
| Entradas | CEP-v1: Estilos de seguridad del Catálogo de Estilos y Patrones. DCO: Componentes de seguridad de la Fase 4. |
| Salidas | PDSC: Patrones de diseño de seguridad clásicos y cuánticos documentados con amenazas mitigadas y criterios de aplicabilidad. |
| Responsable | ASecP : Arquitecto de seguridad del proceso. ETC: Especialista tecnológico cuántico. |
| Herramientas | Estándares NIST PQC y catálogos de seguridad. Herramientas de análisis y modelado de amenazas. |
| Punto de validación | Los patrones abordan amenazas del dominio clásico y poscuántico . Trazabilidad con DCO y CEP está establecida para cada patrón. Las amenazas mitigadas están claramente documentadas. |
| Tareas |  |
| Identificar problemas de seguridad recurrentes en la arquitectura híbrida. Documentar cada patrón conforme al esquema del MPD. Validar la especificación con el AEP. |  |

**Tabla 145. Actividad F5.E7.A5. Consolidación del catálogo de patrones de diseño.**

### Tabla extraída 145

| Campo | Descripción |
| --- | --- |
| Código | F5.E8.A5 |
| Nombre | Consolidación del catálogo de patrones de diseño |
| Objetivo | Integrar y versionar el catálogo de patrones de diseño como complemento del CEP y cierre del proceso. |
| Descripción | El AEP integra los patrones especificados por todos los roles (PDTS, PDID, PDSC) en el catálogo de patrones de Diseño (CPD), complemento del CEP generado en E7. Verifica la coherencia entre patrones y entre el CPD y el CEP, elimina redundancias, establece relaciones de trazabilidad con los artefactos de F4 (DCO, BER). |
| Entradas | PDTS: Patrones de diseño transversales de solución. PDID: Patrones de diseño de integración y datos. PDSC: Patrones de siseño de seguridad clásicos y cuánticos. CEP: Catálogo de estilos y patrones arquitectónicos. |
| Salidas | CPD: Catálogo de patrones de diseño consolidado, versionado y con trazabilidad completa. |
| Responsable | AEP: Arquitecto empresarial del proceso. |
| Herramientas | Herramientas de gestión documental y control de versiones. Herramientas de trazabilidad arquitectónica. |
| Punto de validación | El CPD cubre los tres tipos de patrones y las variantes híbridas y cuánticas. El 100 % de los patrones tienen trazabilidad con artefactos de F4. |
| Tareas |  |
| Integrar PDTS, PDID y PDSC en el CPD. Verificar la coherencia entre CPD y CEP y eliminar redundancias. Versionar el catálogo como CPD-v1. Documentar el CPD. |  |


## Actividades de sincronización y envío al OGA

**Tabla 146. Actividad F5.E7.A6 {E8}. Preparación y envío de artefactos al OGA.**

### Tabla extraída 146

| Campo | Descripción |
| --- | --- |
| Código | F5.E7.A6 {E8} |
| Nombre | Preparación y envío de artefactos al OGA |
| Objetivo | Consolidar los artefactos de F5 en la LBA-F5 y remitirlos formalmente al OGA para su revisión y aprobación. |
| Descripción | El AEP consolida los artefactos generados en los elementos E7 y E8 en la línea base arquitectónica de la fase 5 y los envía al OGA para revisión formal. El envío incluye: (1) el paquete de artefactos LBA-F5, (2) la solicitud formal de revisión y (3) el resumen ejecutivo de las decisiones adoptadas en F5. El OGA acusa recibo e inicia el proceso de revisión definido en el flujo transversal del proceso. |
| Entradas | CEP: Catálogo de estilos y patrones arquitectónicos. CPD: Catálogo de patrones de siseño . |
| Salidas | LBA-F5 (inicial): Paquete de artefactos de la Fase 5 enviado al OGA para revisión formal. |
| Responsable | AEP: Arquitecto empresarial del proceso. |
| Herramientas | Sistema de gestión de artefactos arquitectónicos. Plantillas de solicitud de revisión del OGA. Herramientas de gestión documental. |
| Punto de validación | El paquete de envío está completo y el OGA acusa recibo. |
| Tareas |  |
| Verificar la completitud e integridad de todos los artefactos de E 7 y E 8 . Revisar la correcta versión y nomenclatura de cada artefacto. Preparar la lista base de artefactos de la Fase 5 . Enviar formalmente el paquete al OGA. Registrar la fecha y los datos de envío al OGA. |  |

**Tabla 147. Actividad F5.E7.A7 {E8}. Ajuste de artefactos según observaciones del OGA.**

### Tabla extraída 147

| Campo | Descripción |
| --- | --- |
| Código | F 5 .E 7 .A7 {E 8 } |
| Nombre | Ajuste de artefactos según observaciones del OGA. |
| Objetivo | Atender las observaciones emitidas por el OGA tras la revisión de la Fase 5 , incorporando los ajustes requeridos en los artefactos afectados para obtener la aprobación definitiva. |
| Descripción | Cuando el OGA emite observaciones sobre los artefactos de la Fase 7 , el AEP analiza cada observación, identifica los artefactos afectados y planifica los ajustes necesarios. Los cambios se realizan de manera controlada, manteniendo la trazabilidad entre versiones y verificando que las modificaciones sean consistentes con el resto de la arquitectura. Una vez realizados los ajustes, los artefactos son revisados internamente antes de ser reenviados al OGA para una nueva revisión. El proceso puede iterarse hasta obtener la aprobación definitiva. |
| Entradas | LBA-F 5 inicial: Conjunto de artefactos que conforman la línea base arquitectónica de la Fase 5 con la revisión del OGA. |
| Salidas | LBA-F 5 aprobada: Conjunto de artefactos que conforman la línea base arquitectónica de la Fase 5 aprobados o listos para su envío al OGA para una nueva revisión. |
| Responsable | AEP: Arquitecto empresarial del proceso. |
| Herramientas | Herramientas de gestión documental y control de versiones. Matriz de trazabilidad de observaciones. |
| Punto de validación | Verificación del AEP de que todas las observaciones del OGA han sido atendidas antes del reenvío del paquete. |
| Tareas |  |
| Analizar el acta de revisión del OGA e identificar los artefactos afectados. Priorizar y planificar los ajustes según el impacto arquitectónico. Realizar los cambios controlados en los artefactos afectados. Revisar internamente los artefactos ajustados. Preparar el paquete de re-entrega y enviarlo al OGA. Registrar las observaciones atendidas y el historial de cambios. |  |


## Cierre del proceso

Una vez finalizada la Fase 5 y obtenida la aprobación del OGA, el proceso concluye con el establecimiento de la línea base arquitectónica consolidada, conformado por el conjunto integrado de artefactos validados producidos a lo largo de las cinco fases, asegurando la trazabilidad de todas las decisiones arquitectónicas adoptadas.
En la Tabla 148 se presenta el resumen de todos los artefactos que conforman la línea base, y su correspondencia con cada fase que fue ejecutada durante el proceso:
**Tabla 148. Artefactos que constituyen la línea base arquitectónica.**

### Tabla extraída 148

| Fase | Línea base | Artefactos |
| --- | --- | --- |
| F1: Definición estratégica | LBA-F1 | DOE: Documento de objetivos estratégicos. MTA: Matriz de trazabilidad objetivos-arquitectura. DCA: Declaración de contexto y alcance arquitectónico. MSP: Mapa de partes interesadas y preocupaciones. |
| F2: Formalización conceptual | LBA-F2 | DPV: Documento de perspectivas y vistas arquitectónicas. DNA: Documento de niveles arquitectónicos. MTA: Marco teórico arquitectónico actualizado. ITA: Inventario de términos arquitectónicos. DVA: Diccionario de vocabulario arquitectónico. |
| F3: Diseño estructural | LBA-F3 | MAC: Modelo de atributos de calidad. DEA: Documento de estructuras arquitectónicas. |
| F4: Materialización arquitectónica | LBA-F4 | DCO: Documento de componentes estructurales. BER: Biblioteca de elementos reutilizables. |
| F5: Sistematización del diseño | LBA-F5 | CEP: Catálogo de estilos y patrones arquitectónicos. CPD: Catálogo de patrones de diseño. |


## Limitaciones identificadas durante la definición y el desarrollo del proceso

Al igual que cualquier propuesta metodológica desarrollada en un dominio emergente y en condiciones de incertidumbre tecnológica, el proceso PDAEH presenta un conjunto de limitaciones que deben ser reconocidas explícitamente para facilitar su evaluación crítica, orientar su evolución futura y fortalecer la credibilidad de la propuesta. Las limitaciones descritas en esta sección se clasifican en cinco categorías: (i) limitaciones metodológicas, (ii) limitaciones estructurales, (iii) sesgos identificados en el proceso de investigación, (iv) limitaciones derivadas del estudio de un área emergente y (v) limitaciones asociadas con la segmentación por tipo de empresa y por rol.

## Limitaciones metodológicas

Las limitaciones metodológicas se refieren a las restricciones inherentes a los métodos y procedimientos adoptados para el diseño del proceso PDAEH. Estas limitaciones delimitan el alcance de los resultados obtenidos y sirven como punto de partida para el desarrollo de nuevos análisis y adaptaciones en el futuro. En la Tabla 149 se presentan las limitaciones metodológicas identificadas, su impacto potencial y las estrategias de mitigación aplicadas para abordarlas:
**Tabla 149. Limitaciones metodológicas del proceso.**

### Tabla extraída 149

| No | Limitación identificada | Descripción | Impacto potencial | Estrategia de mitigación |
| --- | --- | --- | --- | --- |
| 1 | Dependencia del método DSM | La derivación de las fases del proceso se fundamentó exclusivamente en el método Design Structure Matrix (DSM), el cual representa las relaciones mediante dependencias binarias. | Simplificación de las interacciones entre elementos, sin capturar dependencias condicionales, grados de influencia o relaciones emergentes. | Complemento del análisis DSM con la validación frente a marcos reconocidos (TOGAF, BPMN, PMBOK) y revisión conceptual de coherencia estructural. |
| 2 | Derivación basada en un único ciclo de análisis | El análisis topológico se ejecutó en un único ciclo sobre el conjunto completo de elementos E1–E10, sin iteraciones empíricas en contextos reales. | Posible sesgo en el orden de fases y agrupación de elementos, limitando su generalización a distintos contextos organizacionales. | Validación teórica cruzada con marcos de referencia y definición explícita del proceso como propuesta susceptible de refinamiento empírico futuro. |
| 3 | Operacionalización de actividades sin validación piloto | Las actividades fueron derivadas mediante análisis documental sin ejecución en entornos reales. Su validación se limitó a los métodos de evaluación aplicados para el alcance de esta investigación . | Riesgo de desajustes en la granularidad, secuencia o completitud de actividades en contextos organizacionales específicos. | Diseño de actividades alineadas con buenas prácticas reconocidas y definición del proceso como adaptable según restricciones organizacionales. |
| 4 | Ausencia de métricas validadas empíricamente | Los indicadores de desempeño fueron definidos conceptualmente sin calibración con datos reales. | Dificultad para establecer umbrales de evaluación precisos en la práctica. | Definición de métricas como referencia inicial y recomendación de ajuste iterativo durante la implementación del proceso. |
| Acrónimos: No. Número. |  |  |  |  |


## Limitaciones estructurales

Las limitaciones estructurales son aquellas inherentes al diseño y la composición del proceso que son independientes de los métodos utilizados para su derivación. En la Tabla 150 se presenta el conjunto de limitaciones identificadas para el alcance de este trabajo y su estrategia de mitigación correspondiente:
**Tabla 150. Limitaciones estructurales del proceso.**

### Tabla extraída 150

| No | Limitación identificada | Descripción | Impacto potencial | Estrategia de mitigación |
| --- | --- | --- | --- | --- |
| 1 | Linearización de una estructura parcialmente iterativa | El proceso se presenta de forma secuencial, aunque existen dependencias iterativas más amplias no modeladas explícitamente. | Dificultad de aplicación en entornos ágiles o altamente iterativos donde se requieren ciclos de retroalimentación frecuentes. | Inclusión de mecanismos de retroalimentación controlada y reconocimiento explícito de la naturaleza iterativa del proceso en la discusión metodológica. |
| 2 | Alcance limitado a la definición de la arquitectura | El proceso cubre únicamente la definición inicial de la arquitectura, excluyendo su gobierno y evolución continua. | Limitación en la aplicabilidad del proceso a largo plazo dentro del ciclo de vida arquitectónico. | Delimitación explícita del alcance y propuesta de extensión futura hacia fases de gobierno y evolución arquitectónica. |
| 3 | Granularidad uniforme en la descripción de actividades | Las actividades se documentan con un nivel de detalle homogéneo, sin considerar la complejidad diferencial entre elementos. | Posible insuficiencia de detalle en elementos complejos o sobre-especificación en elementos simples. | Definición de la estructura base del proceso con posibilidad de refinamiento y descomposición adicional según necesidades del contexto. |
| Acrónimos: No. Número. |  |  |  |  |


## Sesgos identificados

Adicionalmente a los sesgos documentados en secciones anteriores, se identificaron sesgos específicos la caracterización y documentación del proceso que complementan el análisis de amenazas a la validez de la propuesta, los cuales son presentados en la Tabla 151, junto con su descripción y estrategia de mitigación asociada:
**Tabla 151. Sesgos identificados durante el desarrollo del proceso.**

### Tabla extraída 151

| No | Sesgo identificado | Descripción | Impacto potencial | Estrategia de mitigación |
| --- | --- | --- | --- | --- |
| 1 | Sesgo de formalización prematura | Tendencia a documentar actividades y tareas con un nivel de detalle mayor al soportado por la evidencia empírica disponible, dado el carácter teórico del proceso derivado. | Sobreestimación de la madurez operativa del proceso y posibles dificultades de adaptación al momento de la implementación. | Uso de ejemplos ilustrativos en lugar de prescriptivos, y delimitación explícita del alcance de la caracterización como primera versión del proceso. |
| 2 | Sesgo de completitud aparente | La definición de plantillas, tablas y flujos para las cinco fases puede generar la percepción de que el proceso está completamente especificado, cuando en realidad existen actividades, tareas y criterios que requieren ajuste empírico. | Expectativas de aplicabilidad inmediata sin adaptación contextual. | Inclusión explícita de la presente sección de limitaciones y documentación de los aspectos que requieren validación piloto. |
| 3 | Sesgo de alineación forzada con marcos externos | La correspondencia entre las fases del proceso y los marcos TOGAF, BPMN y PMBOK pudo inducir denominaciones y estructuras que reflejan más la lógica de dichos marcos que la lógica emergente del dominio cuántico-clásico. | Adopción de terminología no completamente coherente con las particularidades de las arquitecturas híbridas. | Diferenciación explícita entre correspondencia conceptual (orientativa) y replicación estructural, mediante los criterios C4-C6 del DSM. |
| 4 | Sesgo de rol-centralidad | La definición de roles y responsabilidades se concentró en los perfiles identificados en la literatura y en marcos consolidados, lo que puede subestimar roles emergentes propios del paradigma cuántico que aún no están formalizados en la industria. | Omisión de roles clave que emergen en implementaciones reales de arquitecturas híbridas. | Inclusión de un mecanismo de extensión de roles en la clasificación por tipo de empresa y reconocimiento explícito de la naturaleza emergente del dominio de roles cuánticos. |
| Acrónimos: No. Número. |  |  |  |  |


## Limitaciones propias del estudio de un área emergente

La Ingeniería de software cuántica y la arquitectura de software para sistemas híbridos clásico-cuánticos, constituyen un área de investigación en etapa temprana de madurez. Esta condición impone limitaciones fundamentales sobre cualquier propuesta metodológica desarrollada en el presente momento del desarrollo tecnológico:
- Ausencia de estándares consolidados en el dominio cuántico: A diferencia de la arquitectura de software clásica, donde existen estándares internacionales ampliamente adoptados (ISO/IEC 42010, TOGAF, SWEBOK), el dominio cuántico carece de marcos normativos equivalentes de aplicación general. Esto implica que los elementos del proceso relacionados con componentes cuánticos (E9), estilos híbridos (E7) y patrones de diseño cuánticos (E8) se construyeron sobre evidencia académica emergente e iniciativas industriales incipientes, cuya estabilidad normativa no puede garantizarse en el mediano plazo.
- Rápida evolución del hardware y software cuántico: Las plataformas de computación cuántica disponibles en el momento de la investigación (dispositivos NISQ, simuladores cuánticos, SDKs como Qiskit, Cirq y PennyLane) presentan una tasa de cambio tecnológico significativamente mayor a la de la infraestructura clásica. Lo que exige realizar revisiones periódicas del proceso que no están contempladas en su versión actual.
- Escasez de casos de estudio y proyectos de adopción real. La revisión sistemática de la literatura y el estudio exploratorio de la industria evidenciaron que los casos de adopción empresarial de arquitecturas híbridas clásico-cuánticas son aún escasos y predominantemente experimentales. Esta situación limitó la posibilidad de validar el proceso PDAEH frente a experiencias reales de implementación, reduciendo la capacidad de ajustar el proceso a los retos concretos que emergen durante la adopción práctica.
- Por otro lado, los proyectos y empresas que trabajan activamente en el desarrollo de nuevas iniciativas relacionadas con este campo comparten sus hallazgos y/o resultados de forma parcial, limitando la definición a la información disponible de estos actores activos en la industria.
- Incertidumbre sobre la viabilidad de la computación cuántica a escala empresarial: El proceso PDAEH asume la viabilidad técnica de integrar componentes cuánticos en ecosistemas empresariales en el horizonte temporal al que se orienta la propuesta. Sin embargo, la computación cuántica tolerante a fallas (fault-tolerant quantum computing) aún no es una realidad comercialmente disponible. Por esta razón, algunas de las capacidades cuánticas descritas en el modelo pueden corresponder a proyecciones basadas en el ritmo de progreso tecnológico actual, más que a capacidades plenamente operativas en el momento de implementación del proceso.
- Ausencia de perfiles profesionales estandarizados en el dominio cuántico: La caracterización de roles cuánticos e híbridos se fundamentó en una revisión de iniciativas industriales y académicas, motivado por la ausencia de marcos de competencias o certificaciones profesionales estandarizadas en el dominio cuántico. Esto implica que la asignación de responsabilidades a roles como el Especialista Tecnológico Cuántico (ETC) o el Arquitecto de Integración del Proceso (AIP) puede requerir adaptaciones en función de la disponibilidad real de talento humano en cada organización en el mediano y largo plazo.

## Limitaciones en la segmentación por tipo de empresa

La clasificación de roles según el tipo de empresa (microempresa/startup, PyME y gran empresa/corporación) que fue propuesta en este capítulo parte de una segmentación basada en criterios de la OCDE y la Comisión Europea. Sin embargo, aunque esta base ofrece consistencia internacional, presenta las siguientes limitaciones en el contexto específico de la adopción de arquitecturas híbridas:
- Heterogeneidad interna de los segmentos empresariales: Los umbrales cuantitativos utilizados para definir cada tipo de empresa (número de empleados, facturación anual, inversión en I+D) no capturan adecuadamente la variabilidad interna de cada segmento, por ejemplo: una startup tecnológica de 8 empleados con acceso a capital de riesgo y talento cuántico especializado puede tener una capacidad de adopción muy superior a la de una microempresa tradicional del mismo tamaño, lo que puede hacer que la configuración de roles propuesta para startups resulte inadecuada en ciertos casos.
- Criterios de clasificación no ajustados al contexto latinoamericano: Los criterios de segmentación utilizados fueron diseñados principalmente para economías desarrolladas. En el contexto latinoamericano y colombiano en particular, los umbrales de facturación y número de empleados correspondientes a cada categoría pueden no reflejar con precisión la capacidad tecnológica real de las organizaciones, dado que los ecosistemas de innovación cuántica en esta región se encuentran en etapas aún más tempranas de desarrollo respecto a los contextos donde se originaron los marcos de referencia adoptados.
- Fusión de roles y riesgos asociados a la sobrecarga funcional: La propuesta de fusionar múltiples roles en una misma persona en el caso de microempresas y startups, aunque está metodológicamente justificada por razones de viabilidad económica, representa un riesgo operativo que el proceso no aborda en profundidad. La combinación de funciones estratégicas, técnicas y de gobierno en un único perfil puede comprometer la calidad de las decisiones arquitectónicas y generar conflictos de interés que afecten la objetividad del proceso.
- Ausencia de mecanismo de escalado gradual. La segmentación propuesta define configuraciones discretas para tres tipos de empresa, pero no especifica un mecanismo de transición gradual que guíe a una organización en proceso de crecimiento (por ejemplo, de PyME a gran empresa) para ajustar progresivamente su modelo de roles. Esta limitación puede generar discontinuidades en el proceso arquitectónico durante los periodos de transformación organizacional.

## Limitaciones en la definiciones de roles activos

- Más allá de la segmentación por tipo de empresa, la definición de roles del proceso PDAEH presenta limitaciones específicas vinculadas a la naturaleza del dominio y al estado actual del mercado laboral en arquitectura híbrida:
- Escasez de profesionales con competencias híbridas cuántico-clásicas: El mercado de talento humano especializado en arquitecturas híbridas es extremadamente reducido en el momento de la investigación. La coexistencia de competencias en arquitectura empresarial clásica, computación cuántica, seguridad poscuántica e integración de sistemas en un único profesional o equipo cohesionado es excepcional. Esta escasez implica que, en la práctica, la conformación de los equipos de roles definidos en el proceso PDAEH puede requerir programas de formación específicos cuya duración y costo no están contemplados en la propuesta.
- Roles con fronteras de responsabilidad difusas en el dominio híbrido. Roles como el Arquitecto de Integración del Proceso (AIP) y el Arquitecto de Solución del Proceso (ASP) presentan fronteras de responsabilidad que pueden solaparse en contextos donde la diferenciación entre diseño de solución e integración no es evidente, por ejemplo: en la especificación de interfaces entre componentes clásicos y backends cuánticos. La ausencia de una matriz RACI detallada para cada actividad del proceso representa una limitación operativa que puede generar ambigüedades en la asignación de responsabilidades.
- Roles externos no contractualmente formalizados: Los roles clasificados como externos (Especialista Tecnológico Cuántico, ETC, y Stakeholder Empresarial, SE) son incorporados al proceso bajo modalidades de participación puntual. Sin embargo, el proceso no especifica mecanismos formales de contratación, transferencia de conocimiento ni gestión de la dependencia respecto a proveedores externos de experticia cuántica, lo que puede generar vulnerabilidades en la continuidad del proceso arquitectónico.
- Ausencia de perfiles de competencias detallados: La descripción de roles en el proceso PDAEH se limita a las responsabilidades y el nivel de intervención de cada rol, sin incluir perfiles de competencias detallados que especifiquen los conocimientos, habilidades y certificaciones requeridos para cada función. Esta omisión, justificada por la ausencia de marcos de competencias estándar en el dominio cuántico, representa una limitación para la selección, evaluación y formación del talento humano necesario para ejecutar el proceso.
- Dinamismo de los roles en entornos de innovación emergente: El proceso PDAEH define roles con responsabilidades estáticas, mientras que los equipos de arquitectura en entornos de innovación cuántica tienden a adoptar estructuras dinámicas, con roles que evolucionan rápidamente conforme avanza el conocimiento tecnológico disponible. Esta tensión entre la formalización necesaria para el gobierno arquitectónico y la flexibilidad requerida por el dinamismo del dominio representa una limitación inherente a cualquier propuesta normativa en áreas emergentes.
- Teniendo en cuenta lo anterior, el desarrollo de esta propuesta tiene como objetivo establecer un estado ordenado y formal del conocimiento teórico y operativo que permita estructurar la definición de arquitecturas empresariales híbridas bajo un enfoque sistemático, trazable y reproducible. En este sentido, el propósito de este trabajo de investigación debe entenderse como un esfuerzo hacía la definición de un marco metodológico fundamentado que sirva como base para la implementación, validación y evolución progresiva en distintos contextos organizacionales. De esta manera, la propuesta se concibe como un punto de partida para la consolidación de prácticas arquitectónicas híbridas, susceptible de ser refinada a medida que se disponga de evidencia empírica y madure el ecosistema tecnológico asociado; y asimismo, abrir la puerta a trabajos de investigación teórica y aplicada llevada a cabo por nuevos grupos de investigación en el futuro.

# Capítulo V. Validación de la propuesta mediante la técnica de juicio de expertos


## Introducción

Los desarrollos presentados a lo largo de todo el documento resultaron en un proceso conformado por cinco fases (F1-F5), diez elementos estructurales (E1-E10), un conjunto de nueve roles y las plantillas necesarias para su documentación y gobierno. Sin embargo, la validez de una propuesta metodológica de esta naturaleza no puede sustentarse exclusivamente en el rigor del proceso de derivación teórica aplicado durante los Capítulos III y IV. Para que la propuesta cuente con una base sólida, es necesario contrastar el proceso con el juicio de especialistas que, desde su experiencia práctica y académica, valoren su pertinencia, coherencia interna, completitud y aplicabilidad.
El propósito de este capítulo es presentar el protocolo, el diseño metodológico, los instrumentos definidos y los resultados obtenidos tras llevar a cabo la validación de la propuesta descrita en este proyecto de investigación luego de aplicar la técnica de evaluación por juicio de expertos. A diferencia de la validación de un instrumento de medición, como un cuestionario o una escala psicométrica, el objeto de evaluación en este capítulo corresponde a un proceso metodológico completo, compuesto por múltiples niveles de abstracción: un macroproceso, cinco fases, diez elementos estructurales, nueve roles y un conjunto de plantillas y mecanismos de gobierno. Por esta razón, el protocolo, el instrumento y la estrategia de análisis presentados en este capítulo fueron adaptados para responder a los aspectos específicos de la propuesta, conservando al mismo tiempo el rigor metodológico propuesto por la técnica de juicio de expertos .

## Protocolo de validación mediante juicio de expertos

Con el objetivo de operacionalizar las etapas definidas en el Ciclo 3 (ver Capítulo I), el método siguió un protocolo conformado por seis etapas , que se describen a continuación:
- Diseño del instrumento de evaluación: Se elaboraron los artefactos que fueron utilizados para documentar cada una de las etapas del proceso (documento de contextualización, criterios de calidad e instrumento de validación del contenido).
- Perfilamiento y selección de los expertos: Se establecieron los criterios que debía cumplir cada participante y se definió la estrategia a seguir para conformar el panel de evaluadores.
- Diseño del instrumento de evaluación: Se elaboraron los artefactos que fueron utilizados para documentar cada una de las etapas del proceso (documento de contextualización, criterios de calidad e instrumento de validación del contenido)
- Sesión de contextualización: Se socializó la propuesta con los expertos convocados, presentando el propósito, alcance y estructura del proceso que fue desarrollado en este trabajo de investigación.
- Aplicación del instrumento: Se entregó el instrumento de evaluación a los expertos seleccionados y se recopiló cada una de las respuestas dentro del plazo definido por el equipo investigador.
- Análisis de la información y reflexión: Se procesaron los resultados obtenidos, se identificaron ajustes y se documentaron las lecciones aprendidas durante el proceso de validación.

## Objetivo de la evaluación

El objetivo de la evaluación mediante juicio de expertos es valorar la calidad de contenido del proceso PDAEH en términos de su suficiencia, claridad, coherencia, relevancia y pertinencia (aplicabilidad), considerando de manera diferenciada el proceso a nivel macro, las cinco fases que lo componen, los diez elementos estructurales, el modelo de nueve roles y las plantillas de documentación y gobierno definidas en el Capítulo IV.
Para lograrlo, el proceso de evaluación se centró en responder cuatro (4) preguntas que delimitan el alcance del juicio (ver la Tabla 152):
**Tabla 152. Preguntas que orientan la evaluación.**

### Tabla extraída 152

| Pregunta | Descripción | Motivación |
| --- | --- | --- |
| ¿El proceso representa de manera suficiente y completa los elementos necesarios para definir una arquitectura empresarial híbrida clásico-cuántica? | Busca determinar si el conjunto de fases, elementos estructurales (E1-E10), roles y artefactos definidos en el proceso PDAEH cubre, sin omisiones relevantes, todo lo que una organización necesitaría para diseñar una arquitectura empresarial híbrida. | Funciona como criterio de cierre del objetivo general de la investigación: si el proceso no fuera suficiente y completo, el aporte doctoral quedaría incompleto independientemente de la calidad de cada componente evaluado por separado. |
| ¿La secuencia de fases, actividades y mecanismos de control propuestos es coherente y aplicable en contextos organizacionales reales? | Evalúa si el orden F1→F2→F3→F4→F5, derivado mediante el análisis DSM (Capítulo IV), y los puntos de control ejercidos por el OGA, funcionan como un flujo de trabajo ejecutable por una organización real, y no solo como una construcción teóricamente consistente. | La evaluación de cada fase por separado no garantiza que la secuencia completa, como flujo articulado de principio a fin, sea coherente y aplicable; esta pregunta captura esa propiedad de conjunto. |
| ¿El modelo de roles definido, y su segmentación por tipo de empresa, es pertinente y viable desde la perspectiva de la práctica profesional? | Indaga si los nueve roles y las tres configuraciones organizacionales (microempresa/ startup , PyME , gran empresa) propuestas en el Capítulo IV corresponden a estructuras de talento humano que existen o son alcanzables en la práctica, y no únicamente a una construcción académica. | Evaluar cada rol y cada configuración de forma individual no asegura que el modelo completo sea viable como esquema organizacional; esta pregunta demanda un juicio integral de viabilidad profesional, propio de expertos con experiencia directa en la conformación de equipos de arquitectura. |
| ¿Qué ajustes, omisiones o mejoras deberían incorporarse a la propuesta antes de avanzar hacia su evaluación mediante escenarios hipotéticos? | Es una pregunta abierta orientada a recopilar recomendaciones concretas de mejora sobre el proceso PDAEH en su conjunto, antes de someterlo a la validación complementaria mediante escenarios hipotéticos (SAAM). | Las calificaciones cuantitativas por sí solas permiten identificar qué componentes obtuvieron puntuaciones bajas, pero no explican qué cambio específico corregiría cada debilidad; esta pregunta cierra ese vacío y alimenta directamente el ajuste del proceso previo al Ciclo 4. |

La evaluación se aplicó sobre la primera versión del proceso, cuyo detalle se puede consultar en el ANEXO: Proceso para la definición de arquitecturas empresariales híbridas (v1). Con base en los ajustes, precisiones y mejoras derivados del análisis de los resultados, el proceso se actualizó a una nueva versión, designada como v2, la cual fue sometida a una evaluación práctica mediante la ejecución de escenarios hipotéticos, descrita con detalle en el Capítulo VII.

## Perfilamiento de los evaluadores expertos

A diferencia de otros temas emergentes que son objeto de estudio en el campo de la ingeniería de software, las ingenierías de software híbrida y cuántica son disciplinas que a la fecha de publicación y socialización de este proyecto aún se encuentran en constante discusión y evolución. En particular, el desarrollo realizado en este trabajo de investigación integra conocimientos y experiencia de al menos tres dominios (arquitectura empresarial, ingeniería de software cuántica y gobierno de TI), los cuales frecuentemente operan de forma independiente. Con el propósito de abarcar todos los perfiles profesionales posibles y mantener un grado de generalidad aceptable para el desarrollo de la validación, se definió un conjunto de criterios mínimos que fueron utilizados como base para filtrar los perfiles tentativos a participar durante la sesión de validación. La Tabla 153 presenta los criterios definidos tomando como base los lineamientos generales propuestos por :
**Tabla 153. Criterios de selección de los evaluadores expertos.**

### Tabla extraída 153

| Criterio | Descripción |
| --- | --- |
| Formación académica | Título de posgrado (maestría o doctorado) en áreas afines a arquitectura de software, arquitectura empresarial, ingeniería de software o computación cuántica. |
| Experiencia profesional | Trayectoria mínima de tres (3) años en roles de arquitectura de software/empresarial, consultoría de TI, gobierno de TI, o investigación y desarrollo en computación cuántica. |
| Conocimiento del dominio | Familiaridad demostrable con al menos uno de los siguientes dominios: arquitecturas de referencia, marcos de arquitectura empresarial (TOGAF, Zachman, ArchiMate ), o fundamentos de computación/ingeniería de software cuántica. |
| Disponibilidad y motivación | Disposición para dedicar el tiempo necesario a la sesión de contextualización y al diligenciamiento del instrumento de evaluación. |
| Imparcialidad | Ausencia de vínculo directo con el desarrollo de la propuesta que pudiera comprometer la objetividad del juicio emitido. |

A partir de estos criterios, y considerando la naturaleza multidominio del proceso, el perfil esperado durante la evaluación se dividió en dos categorías complementarias:
- Perfil 1. Arquitectura empresarial y gobierno de TI: Profesionales con experiencia en el diseño, implementación o gobierno de arquitecturas empresariales, familiarizados con marcos como TOGAF, ArchiMate o Zachman.
- Perfil 2. Computación e ingeniería de software híbrida y/o cuántica: Profesionales o investigadores con experiencia en el desarrollo de software cuántico, algoritmos cuánticos, o plataformas como Qiskit, Cirq o PennyLane.

## Selección de los participantes

**De acuerdo con las recomendaciones metodológicas propuestas en , el número óptimo de participantes debe estar en el rango delimitado entre tres (3) y nueve (9) expertos por evaluación. Para lograrlo, fue necesario llevar a cabo un estudio exploratorio para identificar un conjunto de al menos 20 candidatos tentativos, quienes recibieron una invitación formal a participar durante el proceso de validación. La Tabla 154 describe la estrategia aplicada para identificar los perfiles de interés:**
**Tabla 154. Estrategia de conformación del panel de expertos.**

### Tabla extraída 154

| Perfil | Número mínimo esperado | Número deseable | Aporta principalmente a |
| --- | --- | --- | --- |
| Perfil 1 | 3 | 5 | Macroproceso, fases, elementos E1-E6, E9 y E10, modelo de roles y plantillas de gobierno (OGA). |
| Perfil 2 | 3 | 4 | Elementos E7-E 8 (estilos, patrones y componentes cuánticos), rol de Especialista Tecnológico Cuántico (ETC) y aplicabilidad tecnológica. |
| Total | 6 | 9 | Evaluación global e integral del proceso PDAEH. |

Inicialmente, la selección de los candidatos asumió que la cantidad total de participantes se podía distribuir de manera equitativa entre los dos perfiles definidos, de forma que ambos dominios de conocimiento (arquitectura empresarial/gobierno de TI y computación cuántica) quedaran representados con un peso comparable dentro del panel. Sin embargo, la cantidad de profesionales que reúnen actualmente los conocimientos y la experiencia esperados para el Perfil 2 es escasa, dado el carácter emergente y la etapa temprana de madurez organizacional en el dominio de la ingeniería de software cuántica (ver Capítulo IV), lo cual limita de manera natural el número de candidatos idóneos disponibles para este perfil frente a los del Perfil 1.
Por esta razón, la distribución del panel se ajustó a una proporción que privilegiara la inclusión de todos los expertos disponibles con conocimiento genuino del dominio cuántico, aun a costa de una representación numéricamente menor frente al Perfil 1, priorizando así la validez del juicio emitido sobre la paridad numérica entre los grupos.

## Definición del instrumento de validación de contenido

La validación de contenido del proceso se llevó a cabo mediante una plantilla de evaluación estructurada en torno a cinco criterios de calidad, que se describen en la Tabla 155. Esta plantilla incorpora, además de los cuatro criterios habituales en procesos de validación de contenido (suficiencia, claridad, coherencia y relevancia) propuestos en , el criterio de pertinencia, que busca valorar de manera explícita la aplicabilidad organizacional del proceso, de acuerdo con las percepciones identificadas durante el juicio de expertos:
**Tabla 155. Criterios de calidad para la validación del contenido.**

### Tabla extraída 155

| Indicador | Descripción |
| --- | --- |
| Suficiencia | Determina si los elementos, fases, roles y artefactos que componen el componente evaluado son suficientes para representarlo de manera completa, sin omisiones relevantes. |
| Claridad | Establece si la redacción, la terminología y la estructura del componente evaluado se comprenden fácilmente, evitando ambigüedades semánticas o sintácticas. |
| Coherencia | Evalúa si existe una relación lógica entre el componente evaluado (fase, elemento, rol o plantilla) y el propósito general del proceso, así como con el modelo de referencia del que se deriva (Capítulo III). |
| Relevancia | Indica si el componente evaluado es esencial y aporta valor dentro del proceso, o si por el contrario podría eliminarse sin afectar su propósito. |
| Pertinencia | Determina si el componente evaluado es adecuado, viable y aplicable en el contexto real de una organización de desarrollo de software que busque adoptar arquitecturas empresariales híbridas clásico-cuánticas. |

Cada uno de estos criterios fue evaluado mediante una escala ordinal de cuatro niveles que sigue los lineamientos propuestos en  (ver la Tabla 156). Esta escala se aplicó de manera transversal a todos los ítems del instrumento. De este modo, la evaluación garantizó que cada ítem fue calificado simultáneamente en los cinco criterios de calidad definidos en la Tabla 155:
**Tabla 156. Escala de valoración empleada para calificar los criterios de calidad.**

### Tabla extraída 156

| Valor | Nivel | Descripción | Justificación |
| --- | --- | --- | --- |
| 1 | No cumple | El componente evaluado (ítem, elemento, fase, rol o plantilla) no satisface el criterio de calidad correspondiente; el experto no encuentra evidencia de que la definición cumpla con lo esperado. | Permite al experto rechazar de manera explícita un componente que considera inadecuado, sin verse forzado a otorgar una calificación mínima positiva que distorsionaría el promedio y ocultaría un desacuerdo real con la propuesta. |
| 2 | Bajo | El componente evaluado satisface el criterio de manera parcial e insuficiente, presentando vacíos, ambigüedades o inconsistencias que requieren ajustes sustanciales antes de considerarse válido. | Distingue entre un componente que "no cumple en absoluto" (valor 1) y uno que tiene una base aprovechable, pero requiere una revisión considerable, orientando de manera más precisa el tipo de ajuste que debe priorizarse en la versión depurada del proceso. |
| 3 | Moderado | El componente evaluado satisface el criterio de manera aceptable, aunque persisten oportunidades de mejora menores que no comprometen su validez general. | Habilita un punto intermedio de aceptación condicionada, sin exigir que un componente sea percibido como perfecto para ser retenido en la propuesta. |
| 4 | Alto | El componente evaluado satisface plenamente el criterio de calidad, sin observaciones que sugieran la necesidad de ajustes. | Permite capturar el consenso más favorable del panel y diferenciar los componentes que no requieren ninguna intervención de aquellos que requieren mejoras. |


## Instrumento de evaluación

El proceso se encuentra estructurado en múltiples niveles de abstracción (macroproceso, fases, elementos, roles y plantillas) que se deben evaluar de forma individual para determinar su grado de correspondencia con los criterios de evaluación.
Teniendo en cuenta lo anterior, se diseñó un instrumento de evaluación conformado por siete secciones que buscan delimitar la evaluación a cada aspecto de interés de acuerdo con las características de la propuesta (ver la Tabla 157). Al final de cada sección se incluye un componente designado como “observaciones y comentarios adicionales”, donde se anima a los participantes a reportar cualquier sugerencia y/o mejora que consideren pertinente durante el proceso de evaluación:
**Tabla 157. Estructura del instrumento de validación por juicio de expertos.**

### Tabla extraída 157

| Sección | Componente evaluado | Aplica a | Número de ítems |
| --- | --- | --- | --- |
| I | Datos generales y perfil del experto (formación, cargo actual, años de experiencia, área de especialización, consentimiento informado) | Todos | 5 (no puntuados) |
| II | Evaluación del proceso a nivel macro (nombre, propósito, alcance, dimensiones, entradas/salidas, criterios de inicio y cierre, indicadores, autoridad de aprobación) | Todos | 10 |
| III | Evaluación de las fases del proceso (F1-F5) y de la secuencia general | Todos | 7 |
| IV | Evaluación de los elementos estructurales (E1-E10) | Diferenciado por perfil | 1 2 |
| V | Evaluación del modelo de roles (9 roles) y de su segmentación por tipo de empresa | Todos | 1 3 |
| VI | Evaluación de las plantillas de documentación, el glosario y las actividades de gobierno del OGA | Todos | 9 |
| VII | Evaluación global de aplicabilidad y contribución del proceso PDAEH | Todos | 6 |

El instrumento final estuvo conformado por 55 preguntas puntuables, distribuidas en las seis secciones temáticas del instrumento y evaluadas mediante la escala ordinal de cuatro niveles descrita en la Tabla 156. Cada sección incluyó también un campo abierto de observaciones y comentarios que se utilizó para registrar las apreciaciones cualitativas complementarias realizadas por cada participante.
Como resultado, el artefacto tiene un total de 61 preguntas (55 puntuables y 6 abiertas), que se describen de forma resumida en la Tabla 158:
**Tabla 158. Resumen de cantidad de preguntas por sección.**

### Tabla extraída 158

| Sección | Referencia | Preguntas puntuables | Observaciones | Cantidad total de preguntas |
| --- | --- | --- | --- | --- |
| II | Tabla 159 | 11 | 1 | 12 |
| III | Tabla 160 | 8 | 1 | 9 |
| IV | Tabla 161 | 11 | 1 | 12 |
| V | Tabla 162 | 12 | 1 | 13 |
| VI | Tabla 163 | 8 | 1 | 9 |
| VII | Tabla 164 | 5 | 1 | 6 |
| Total | 55 | 6 | 61 |  |

Las tablas presentadas a continuación describen el detalle con todas las preguntas puntuables y abiertas por sección:
**Tabla 159. Elementos evaluados en la Sección II.**

### Tabla extraída 159

| No | Descripción |
| --- | --- |
| 1 | ¿El nombre asignado al proceso (“ Proceso para la Definición de Arquitecturas Empresariales Híbridas”, PDAEH) refleja su propósito? |
| 2 | ¿El nombre asignado al proceso (“ Proceso para la Definición de Arquitecturas Empresariales Híbridas”, PDAEH) refleja su alcance? |
| 3 | ¿El propósito formulado para el proceso (proveer a las organizaciones de software un mecanismo sistemático y gobernable para definir, formalizar e implementar una arquitectura empresarial híbrida clásico-cuántica) especifica la finalidad del proceso? |
| 4 | ¿El alcance definido para el proceso (aplicable a unidades de TI, oficinas de arquitectura empresarial y equipos de transformación tecnológica, y que excluye explícitamente la implementación de algoritmos cuánticos y la programación directa sobre hardware cuántico) delimita lo que la propuesta pretende cubrir? |
| 5 | ¿La organización del proceso en tres dimensiones (DC: Dimensión Conceptual; DO: Dimensión de Diseño y Operaciones; DCD: Dimensión de Calidad y Diseño) tienen correspondencia directa con la naturaleza de los diez elementos estructurales (E1-E10) que las componen? |
| 6 | ¿Las entradas globales definidas para el proceso (plan estratégico institucional, inventario del estado actual AS-IS, catálogo de objetivos y capacidades organizacionales, marcos de referencia aplicables) permiten iniciar su ejecución? |
| 7 | ¿La Línea Base Arquitectónica (LBA), definida como salida global del proceso, representa el resultado del proceso? |
| 8 | ¿Los criterios de inicio definidos para el proceso (decisión formal del comité directivo, disponibilidad del equipo de arquitectura, acceso a documentación estratégica, presupuesto y tiempo asignados) permiten determinar de manera verificable el momento en que el proceso puede iniciar? |
| 9 | ¿Los criterios de cierre definidos para el proceso (validación y aprobación de la Línea Base Arquitectónica (LBA) por el Órgano de Gobierno Arquitectónico (OGA), publicación oficial de la arquitectura) permiten determinar de manera verificable el momento en que el proceso puede darse por concluido? |
| 10 | ¿Los indicadores globales definidos para el proceso (porcentaje de elementos E1-E10 formalizados y validados, número de artefactos aprobados por el Órgano de Gobierno Arquitectónico (OGA), porcentaje de fases con punto de control aprobado, grado de trazabilidad entre objetivos estratégicos y componentes técnicos) permiten medir su desempeño? |
| 11 | ¿La asignación del Órgano de Gobierno Arquitectónico (OGA) como autoridad de aprobación del proceso es consistente con el esquema de gobierno propuesto? |
| Acrónimos. No: Número. |  |

**Tabla 160. Elementos evaluados en la Sección III.**

### Tabla extraída 160

| No | Descripción |
| --- | --- |
| 1 | ¿La Fase 1 (Definición estratégica), orientada a delimitar el alcance estratégico, los objetivos arquitectónicos y el contexto organizacional mediante los elementos E1 (Objetivo de la arquitectura) y E2 (Contexto de la arquitectura), constituye el punto de partida del proceso? |
| 2 | ¿La Fase 2 (Formalización conceptual) se relaciona con los resultados obtenidos en la Fase 1? |
| 3 | ¿La Fase 2 (Formalización conceptual), mediante los niveles de abstracción (E3) y el vocabulario arquitectónico unificado (E4), consolida el marco conceptual del proceso? |
| 4 | ¿La Fase 3 (Configuración estructural), mediante los atributos de calidad (E6) y las estructuras arquitectónicas (E5), articula las restricciones normativas con el modelado estructural del sistema? |
| 5 | ¿La Fase 4 (Materialización arquitectónica), mediante los componentes estructurales (E9) y los elementos reutilizables (E10), traduce las decisiones tomadas en las fases previas en componentes implementables? |
| 6 | ¿La Fase 5 (Sistematización del diseño), mediante los estilos y patrones arquitectónicos (E7) y los patrones de diseño (E8), sistematiza las decisiones de diseño derivadas de las fases anteriores? |
| 7 | ¿La secuencia F1→F2→F3→F4→F5 definida para el proceso es aplicable en un contexto organizacional real? |
| 8 | ¿Los puntos de control ejercidos por el Órgano de Gobierno Arquitectónico (OGA) al cierre de cada fase garantizan la trazabilidad y la calidad de los artefactos generados en un contexto organizacional real? |
| 9 | Observaciones y comentarios adicionales. |
| Acrónimos. No: Número. |  |

**Tabla 161. Elementos evaluados en la Sección IV.**

### Tabla extraída 161

| No | Elemento | Descripción | Perfil | Justificación |
| --- | --- | --- | --- | --- |
| 1 | E1 | ¿La definición del elemento E1 (Objetivo de la arquitectura) y sus productos asociados : Documento de Objetivos Estratégicos ( DOE ) y Matriz de Trazabilidad Objetivos-Arquitectura, ( MTA) c orresponden con el propósito de la Fase 1? | 1 | E1 pertenece a la Dimensión Conceptual (DC) y se resuelve mediante prácticas de definición de objetivos estratégicos y trazabilidad objetivos-arquitectura, propias de la disciplina de arquitectura empresarial (marcos como TOGAF), dominio de especialización del Perfil 1. No involucra conocimiento técnico cuántico. |
| 2 | E2 | ¿La definición del elemento E2 (Contexto de la arquitectura) y sus productos asociados : Documento de Contexto Arquitectónico, ( DCA ) y Matriz de Stakeholders y Preocupaciones ( MSP) delimitan las restricciones que condicionan las decisiones arquitectónicas? | 1 | Caracterizar el contexto organizacional, regulatorio y de partes interesadas es una competencia central del gobierno de TI y la arquitectura empresarial (levantamiento AS-IS, gestión de stakeholders ), no requiere experticia en computación cuántica. |
| 3 | E3 | ¿La definición del elemento E3 (Grado de abstracción), orientado a establecer la jerarquía de niveles de abstracción (estratégico, táctico y operativo) y sus perspectivas y vistas asociadas, corresponde con los objetivos y el contexto definidos en la Fase 1? | 1 | La definición de niveles de abstracción y vistas arquitectónicas es un concepto normativo de la arquitectura empresarial (por ejemplo: ISO/IEC/IEEE 42010, TOGAF), evaluable por especialistas en ese marco sin necesidad de conocimiento cuántico específico. |
| 4 | E4 | ¿La definición del elemento E4 (Glosario de términos y definiciones), mediante el Inventario de Términos Arquitectónicos (ITA) y el Diccionario de Vocabulario Arquitectónico (DVA), garantiza una comunicación unívoca entre los actores del proceso? | 1 | La normalización terminológica de un proceso de arquitectura empresarial es una práctica de gobierno documental y gestión del conocimiento, dominio del Perfil 1; el vocabulario evaluado en E4 es el del proceso en general, no terminología algorítmica cuántica. |
| 5 | E5 | ¿La definición del elemento E5 (Estructuras arquitectónicas), orientado a establecer vistas, componentes, relaciones y flujos de interacción, incluyendo mecanismos explícitos de integración híbrida, corresponde con los atributos de calidad definidos en el elemento E6 (Atributos de calidad)? | 1 | El modelado estructural (vistas, componentes, relaciones, flujos) es una competencia propia del arquitecto de soluciones/integración clásico; aunque menciona integración híbrida, la evaluación se centra en la coherencia estructural general, no en el diseño de algoritmos cuánticos. |
| 6 | E6 | ¿La definición del elemento E6 (Atributos de calidad), orientado a establecer métricas, escenarios de evaluación y criterios de aceptación para desempeño, seguridad, escalabilidad, resiliencia y eficiencia en entornos clásico-cuánticos, orienta la evaluación de la arquitectura? | 1 | La definición de atributos de calidad, métricas y escenarios de evaluación (estilo ATAM/SAAM) es una práctica estándar de arquitectura de software empresarial, dominio consolidado del Perfil 1, aun cuando los atributos se apliquen a un contexto híbrido. |
| 7 | E7 | ¿La definición del elemento E7 (Estilos y patrones arquitectónicos), orientado a catalogar estilos aplicables a los contextos clásico, cuántico y cuántico-clásico, es aplicable admitiendo estilos inferidos y en evolución dada la madurez temprana del dominio cuántico? | 1 y 2 | Evaluar la pertinencia de estilos arquitectónicos específicamente cuánticos y cuántico-clásicos exige conocimiento técnico actualizado de plataformas y prácticas de computación cuántica (por ejemplo: Qiskit , Cirq, Azure Quantum), competencia propia del Perfil 2. |
| 8 | E8 | ¿La definición del elemento E8 (Patrones de diseño), orientado a catalogar patrones aplicables a los componentes e interacciones de la arquitectura híbrida, reconoce la ausencia de patrones cuánticos formalizados en la literatura como un área abierta? | 2 | Juzgar la validez de patrones de diseño para componentes cuánticos y la vigencia de la brecha señalada en la literatura requiere experticia técnica en ingeniería de software cuántica, que el Perfil 1 no necesariamente posee. |
| 9 | E9 | ¿La definición del elemento E9 (Componentes estructurales), orientado a organizar los componentes de solución, integración, datos y seguridad en un catálogo técnico, se corresponde con las estructuras arquitectónicas definidas en el elemento E5 (Estructuras arquitectónicas)? | 1 y 2 | E9 actúa como elemento puente: incluye componentes clásicos de solución/integración/datos (evaluables por el Perfil 1) y componentes específicamente cuánticos dentro del mismo catálogo (evaluables por el Perfil 2); se requiere el juicio combinado para validar su coherencia integral. |
| 10 | E10 | ¿La definición del elemento E10 (Elementos reutilizables), orientado a catalogar componentes, patrones y servicios reutilizables mediante la Biblioteca de Elementos Reutilizables (BER), favorece la eficiencia y la sostenibilidad del diseño arquitectónico? | 1 | La gestión de activos reutilizables (bibliotecas de componentes, gobierno de reutilización) es una práctica de arquitectura empresarial clásica; el elemento se deriva y complementa a E9 desde la perspectiva organizacional, no desde el diseño técnico cuántico. |
| 11 | — | ¿Las dependencias estructurales establecidas entre los elementos (E1→E2→E3→E4→E5/E6→E9/E10→E7/E8) reflejan el orden topológico obtenido mediante el análisis DSM presentado en el Capítulo IV? | 1 y 2 | La coherencia de la secuencia completa solo puede juzgarse con una visión de extremo a extremo del proceso: el Perfil 1 valida la lógica desde los elementos conceptuales y organizacionales (E1-E6, E9, E10), y el Perfil 2 valida que la ubicación de E7-E9 al final de la cadena sea consistente con las dependencias técnicas del dominio cuántico. |
| 12 | — | Observaciones y comentarios adicionales. | 1 y 2 | — |
| Acrónimos. No: Número. |  |  |  |  |

**Tabla 162. Elementos evaluados en la Sección V.**

### Tabla extraída 162

| No | Descripción |
| --- | --- |
| 1 | ¿El rol de Arquitecto(a) Empresarial del Proceso (AEP), responsable de definir lineamientos, asegurar la alineación estratégica y gobernar la evolución arquitectónica, está delimitado dentro del proceso? |
| 2 | ¿El rol de Arquitecto(a) de Solución del Proceso (ASP), responsable de diseñar soluciones que integren componentes clásicos y cuánticos, está delimitado dentro del proceso? |
| 3 | ¿El rol de Arquitecto(a) de Integración del Proceso (AIP), responsable de garantizar la interoperabilidad y la orquestación híbrida, se corresponde con las actividades de integración descritas en las Fases 3 y 4? |
| 4 | ¿El rol de Arquitecto(a) de Datos del Proceso (ADP), responsable de asegurar el gobierno, la calidad y la trazabilidad de los datos en entornos híbridos, está delimitado dentro del modelo de roles? |
| 5 | ¿El rol de Arquitecto(a) de Seguridad del Proceso ( ASecP ), responsable de gestionar riesgos clásicos y poscuánticos , refleja el carácter transversal de la seguridad dentro del proceso PDAEH? |
| 6 | ¿El Órgano de Gobierno Arquitectónico (OGA), responsable de supervisar la conformidad arquitectónica y validar la evolución de la Línea Base Arquitectónica al cierre de cada fase, cuenta con autoridad definida dentro del proceso? |
| 7 | ¿El rol complementario de Gestor(a) de Portafolio Arquitectónico (GPA), responsable de priorizar iniciativas y alinear inversiones con la hoja de ruta arquitectónica, está delimitado dentro del proceso? |
| 8 | ¿El rol externo de Especialista Tecnológico Cuántico (ETC), incorporado bajo demanda para proporcionar conocimiento técnico avanzado en hardware, SDK y algoritmos cuánticos, está caracterizado dentro del proceso? |
| 9 | ¿El rol externo de Stakeholder Empresarial (SE), que representa intereses de negocio, regulatorios o de mercado, está delimitado dentro del esquema de gobierno del proceso? |
| 10 | ¿La configuración de roles propuesta para microempresas/startups (fusión del Arquitecto(a) de Solución del Proceso (ASP), el Arquitecto(a) de Integración del Proceso (AIP), el Órgano de Gobierno Arquitectónico (OGA), el Arquitecto(a) de Seguridad del Proceso ( ASecP ) y el Gestor(a) de Portafolio Arquitectónico (GPA) en el rol de Arquitecto(a) Empresarial del Proceso (AEP), manteniendo al Arquitecto(a) de Datos del Proceso (ADP) y al Especialista Tecnológico Cuántico (ETC) como funciones compartidas o externas) es aplicable en ese contexto organizacional? |
| 11 | ¿La configuración de roles propuesta para pequeñas y medianas empresas (diferenciación entre el Arquitecto(a) Empresarial del Proceso (AEP) y el Arquitecto(a) de Integración del Proceso (AIP), que puede absorber las funciones del Arquitecto(a) de Seguridad del Proceso ( ASecP ) y del Arquitecto(a) de Datos del Proceso (ADP), el Gestor(a) de Portafolio Arquitectónico (GPA) y un Órgano de Gobierno Arquitectónico (OGA) simplificado, manteniendo al Especialista Tecnológico Cuántico (ETC) y al Stakeholder Empresarial (SE) como funciones externas) se corresponde con la capacidad organizacional típica de este segmento? |
| 12 | ¿La configuración de roles propuesta para grandes empresas o corporaciones (mantenimiento de los nueve roles definidos por el proceso, entre ellos el Arquitecto(a) Empresarial del Proceso (AEP), el Arquitecto(a) de Solución del Proceso (ASP), el Arquitecto(a) de Integración del Proceso (AIP), el Arquitecto(a) de Datos del Proceso (ADP), el Arquitecto(a) de Seguridad del Proceso ( ASecP ), el Órgano de Gobierno Arquitectónico (OGA), el Gestor(a) de Portafolio Arquitectónico (GPA), el Especialista Tecnológico Cuántico (ETC) y el Stakeholder Empresarial (SE), como funciones especializadas e independientes, sin fusión entre ellas) es aplicable en ese contexto organizacional? |
| 13 | Observaciones y comentarios adicionales. |
| Acrónimos. No: Número. |  |

**Tabla 163. Elementos evaluados en la Sección VI.**

### Tabla extraída 163

| No | Descripción |
| --- | --- |
| 1 | ¿La plantilla definida para documentar el proceso a nivel macro (nombre, identificador, propósito, alcance, dimensiones involucradas, entradas/salidas globales, criterios de inicio y cierre, indicadores globales, autoridad de aprobación) permite caracterizar el proceso en su conjunto? |
| 2 | ¿La plantilla definida para documentar cada fase (nombre, código, subconjunto estructural asociado, elementos incluidos, propósito, entradas, salidas, punto de control, indicadores de cumplimiento) es aplicable a las cinco fases del proceso? |
| 3 | ¿La plantilla definida para documentar cada elemento (código, fase asociada, categoría, propósito, objetivos específicos, productos generados, criterios de aceptación, dependencias estructurales) permite caracterizar los diez elementos E1-E10? |
| 4 | ¿La plantilla definida para documentar las actividades (código Fase. Elemento. Actividad , nombre, objetivo, descripción, entradas, salidas, responsable, herramientas, punto de validación) permite formalizar el nivel operativo del proceso? |
| 5 | ¿Las actividades transversales de verificación realizadas por el Órgano de Gobierno Arquitectónico (OGA) al cierre de cada fase (recepción y registro de artefactos, convocatoria y agenda, revisión individual, sesión de deliberación y votación, emisión del acta de aprobación, documentación de observaciones, consolidación de resultados) constituyen un mecanismo de control aplicable? |
| 6 | ¿El glosario de términos genéricos asociados a la definición de procesos (proceso, actividad, tarea, subtarea, rol, recurso, herramienta, producto de trabajo), adoptado a partir de COMPETISOFT, ISO/IEC 12207 e ISO/IEC 29110, se corresponde con el propósito del proceso? |
| 7 | ¿El glosario de términos específicos del dominio metodológico propuesto (fase, elemento, dimensión, subconjunto estructural, punto de control, Línea Base Arquitectónica) se corresponde con la terminología empleada a lo largo del proceso? |
| 8 | ¿La adopción del patrón de procesos propuesto por COMPETISOFT como marco general de documentación del proceso se corresponde con los fines de esta investigación? |
| 9 | Observaciones y comentarios adicionales. |
| Acrónimos. No: Número. |  |

**Tabla 164. Elementos evaluados en la Sección VII.**

### Tabla extraída 164

| No | Descripción |
| --- | --- |
| 1 | ¿El proceso, en su conjunto, incluye los elementos necesarios para definir una arquitectura empresarial híbrida clásico-cuántica? |
| 2 | ¿El proceso es aplicable en contextos organizacionales reales, considerando la segmentación de roles propuesta por tipo de empresa? |
| 3 | ¿El proceso constituye un aporte frente a los marcos de arquitectura empresarial existentes (por ejemplo, TOGAF), al incorporar de manera explícita la dimensión cuántica dentro de un esquema de gobierno empresarial? |
| 4 | En términos generales, ¿el proceso orienta a una organización de desarrollo de software en la definición, implementación y evolución de una arquitectura empresarial híbrida? |
| 5 | ¿Recomendaría usted la adopción del proceso, con los ajustes que considere pertinentes, en una organización real que busque incorporar capacidades cuánticas dentro de su arquitectura empresarial? |
| 6 | Observaciones y comentarios adicionales. |
| Acrónimos. No: Número. |  |

El instrumento completo se documentó en un formulario de Google Forms, donde cada participante registró sus respuestas mediante matrices de opción múltiple (una fila por ítem y una columna por cada uno de los cinco criterios de calidad: suficiencia, claridad, coherencia, relevancia y pertinencia), calificadas en la escala de cuatro niveles que propone el método de evaluación, y un campo de texto al final de cada sección para el registro de comentarios y observaciones.

## Documento de contextualización para los expertos

Previo a la aplicación del instrumento, se elaboró un documento de contextualización que fue compartido con los expertos seleccionados, que incluyó los siguientes apartados:
- Presentación de la problemática y la pregunta de investigación que orienta la propuesta doctoral (ver Capítulo I).
- Descripción general del modelo de referencia obtenido en el Capítulo III y de los diez elementos estructurales (E1-E10).
- Descripción detallada del proceso: fases, actividades, roles, plantillas y mecanismos de gobierno (Capítulo IV).
- Instrucciones para el diligenciamiento del instrumento de evaluación, incluyendo la descripción de la escala de calificación y de los criterios de calidad.
- Información de contacto del equipo investigador para resolver dudas durante el proceso de evaluación.
- Adicionalmente, se realizó una sesión de contextualización sincrónica de carácter virtual con los expertos convocados, donde se presentó la propuesta y se resolvió cualquier duda antes de llevar a cabo la evaluación. El documento de contextualización, el formulario entregado a los participantes y la evidencia de la sesión de contextualización virtual se puede consultar en los anexos presentados a continuación:
- ANEXO: Documento de contextualización.
- ANEXO: Formulario de evaluación.
- ANEXO: Evidencia de sesión de contextualización virtual.

## Proceso de evaluación mediante juicio de expertos

El proceso de evaluación realizado por los expertos seleccionados se dividió en cinco momentos, que son descritos continuación:
- Contacto inicial: Se envió una invitación formal a los candidatos identificados, describiendo el propósito general de la investigación y solicitando su participación voluntaria en el proceso de validación.
- Sesión de contextualización: Se llevó a cabo una reunión con los expertos que confirmaron su participación, en la cual se presentó el documento de contextualización descrito en la sección anterior y se explicaron los criterios de calificación del instrumento.
- Envío del instrumento: El instrumento de evaluación, documentado en un formulario de Google Forms, se envió a cada experto. El formulario incorporó un mecanismo de ramificación por sección: una vez que el experto declaraba su perfil (Perfil 1 o Perfil 2) al inicio del formulario, este lo direccionaba automáticamente a los ítems de la Sección IV correspondientes a su perfil, mientras que los ítems marcados para ambos perfiles se presentaron a la totalidad de los participantes.
- Plazo de respuesta: Se estableció un plazo de tres semanas para la aplicación y recolección de las respuestas. Al cumplirse la segunda semana se envió un recordatorio intermedio a los expertos que aún no habían completado la evaluación.
- Manejo de la no respuesta: Los expertos que no remitieron su calificación al cierre del plazo se excluyeron del análisis estadístico de esa ronda, sin que ello comprometiera la validez del proceso, dado que el panel conservó una representación mínima de tres expertos por perfil evaluador.
- Consolidación de las respuestas: Después de cerrar el plazo, las respuestas registradas en el formulario se exportaron y organizaron para su análisis estadístico posterior. Los expertos que no remitieron su calificación se excluyeron del análisis de esa ronda, sin que ello comprometiera la validez del proceso, ya que el panel conservó una representación mínima de tres expertos por perfil evaluador. Las respuestas incompletas se conservaron para los ítems efectivamente calificados y se excluyeron únicamente en el cálculo de los indicadores correspondientes a los ítems no diligenciados por ese experto. Las deserciones ocurridas después de la sesión de contextualización se documentaron como bajas del panel y no fueron reemplazadas, ya que la composición final de expertos se mantuvo dentro del rango metodológico recomendado.

## Análisis de la información y cálculo de los indicadores

Una vez recolectadas las respuestas del panel de expertos, la información se analizó aplicando cuatro criterios, los cuales se describen a continuación.

## Estadística descriptiva por ítem y criterio

- Para cada ítem  y cada criterio de calidad (suficiencia, claridad, coherencia, relevancia, pertinencia), se calcularon la mediana, la moda y la desviación estándar de las calificaciones otorgadas por los  expertos que evaluaron dicho ítem, donde:
- La mediana: Corresponde al valor central de las calificaciones una vez ordenadas de menor a mayor, incorporada como medida de tendencia ante la naturaleza ordinal de la escala, al no asumir distancias iguales entre categorías:
- La moda: Corresponde a la categoría con mayor frecuencia de aparición entre las respuestas del panel, y se utiliza para identificar el nivel de mayor consenso entre los expertos:
- La desviación estándar: Determina la dispersión de las calificaciones respecto a la media, y se emplea para identificar los ítems que generaron mayor discrepancia entre los evaluadores:
- Los resultados obtenidos luego de medir los indicadores fueron utilizados como criterio para determinar el nivel de granularidad de los análisis cuantitativos y cualitativos posteriores, tomando como base los criterios descritos a continuación:
- Si la mediana asociada con un ítem fue igual o superior a 3.0 (equivalente a un nivel de cumplimiento "Moderado" o "Alto") en los cinco criterios de calidad, el resultado se consideró aceptado y su análisis fue totalmente cuantitativo.
- Si la moda de las calificaciones de un ítem, en cualquiera de los cinco criterios de calidad, no coincidió con su mediana, esta discrepancia se interpretó como un indicio de dispersión o asimetría en las respuestas del panel, frecuentemente asociado a la presencia de opiniones divididas entre los expertos, y el ítem se remitió a un análisis cualitativo adicional de los comentarios asociados, en lugar de aceptarse o descartarse con base en el estadístico de tendencia central.

## Coeficiente Kappa marginal libre

De acuerdo con  y su generalización a múltiples evaluadores propuesta por , el coeficiente de Kappa marginal libre mide el nivel de acuerdo entre varios evaluadores que califican un conjunto de elementos en categorías discretas, asumiendo que el acuerdo esperado por azar corresponde a la probabilidad de que dos evaluadores coincidan si eligieran una categoría al azar entre las opciones disponibles.
Para cada ítem , calificado por  expertos en  categorías posibles (, correspondientes a la escala definida), se calculó el grado de acuerdo observado, designado como :
Finalmente:
Donde:
- Representa el número total de expertos.
- Representa el número de expertos que asignaron la categoría  al ítem .
- Representa el grado de acuerdo observado para el ítem ; es decir, la proporción de pares de expertos que coincidieron en la misma categoría luego de calificar dicho ítem.
- Representa el grado de acuerdo observado promedio, calculado sobre el conjunto de  ítems que conforman el instrumento o una de sus secciones.
- Representa la probabilidad de acuerdo esperado por azar bajo el supuesto de marginales libres; es decir, la probabilidad de que dos expertos coincidan en una misma categoría si asignaran sus calificaciones de manera aleatoria entre las  categorías disponibles.
La interpretación cualitativa de cada coeficiente se llevó a cabo utilizando la escala propuesta por , presentada en la Tabla 165:
**Tabla 165. Valoración del coeficiente Kappa.**

### Tabla extraída 165

| Coeficiente de Kappa | Fuerza de la concordancia |
| --- | --- |
| 0.00 | Pobre (Poor) |
| 0.01 - 0.20 | Leve (Slight) |
| 0.21 - 0.40 | Aceptable (Fair) |
| 0.41 - 0.60 | Moderada ( Moderate ) |
| 0.61 - 0.80 | Considerable ( Substantial ) |
| 0.81 - 1.00 | Casi perfecta ( Almost perfect ) |

Sin embargo, el coeficiente de Kappa marginal libre también admite valores negativos, que ocurren cuando el acuerdo observado entre los expertos queda por debajo del nivel de acuerdo esperado por azar. En el contexto de esta investigación, un valor negativo indica que existe un desacuerdo sistemático entre los participantes y es necesario realizar un análisis cualitativo apoyado en los comentarios adicionales.

## Concordancia por pareja de expertos

De acuerdo con , el coeficiente de Kappa marginal libre también puede calcularse de manera restringida entre dos evaluadores específicos y se utiliza para identificar el grado de acuerdo particular entre cada pareja de jueces del panel. En el contexto de esta investigación, esta cantidad sirve para identificar discrepancias sistemáticas que un coeficiente global (calculado sobre la totalidad de los expertos) podría ocultar, por ejemplo: diferencias de criterio asociadas al perfil de especialización de cada evaluador.
Sin embargo, este tipo de evaluación es sensible a la heterogeneidad del panel de expertos, particularmente cuando este se compone, como en este estudio, de perfiles con formación y experiencia distintas (Perfil 1 y Perfil 2). Esta heterogeneidad puede dar lugar a que un experto presente un patrón de calificación consistentemente distinto al del resto del panel en la mayoría de los ítems. Con el propósito de evitar que esta situación se interpretara de manera arbitraria, la evaluación de los resultados consideró tres aspectos:
- Reporte: Se calculó y reportó el coeficiente de Kappa marginal libre para todas las parejas de expertos del panel, sin excluir ninguna pareja del análisis, independientemente del nivel de acuerdo obtenido.
- Criterio de detección: Se consideró que un experto presentó un patrón de discrepancia sistemática cuando su coeficiente de Kappa marginal libre resultó "Aceptable" o inferior (≤ 0.40 según la Tabla 165, incluyendo valores negativos) frente a más de la mitad de los demás miembros del panel.
- Tratamiento: Ningún experto se excluyó del panel ni de los indicadores globales del instrumento con base en este patrón. La discrepancia sistemática identificada se examinó de manera cualitativa a la luz de los comentarios registrados por el experto y de su perfil de especialización, para distinguir si respondía a una diferencia legítima de criterio técnico, por ejemplo: asociada al Perfil 2 en ítems de naturaleza cuántica, o a una posible dificultad de interpretación del instrumento.
Para cada pareja de expertos , se calculó la proporción de ítems en los que ambos jueces coincidieron en la misma categoría de calificación, restringiendo el análisis a los  ítems que fueron respondidos en conjunto por los dos evaluadores, y a partir de esta se obtuvo el coeficiente de Kappa marginal libre para dicha pareja:
Donde:
- y : Representan las calificaciones otorgadas por los expertos  y , respectivamente, al ítem .
- : Es la función indicadora que toma el valor 1 cuando ambos expertos asignaron la misma categoría al ítem  y 0 en caso contrario.
- : Representa la proporción de acuerdo observado entre cada pareja de jueces .
- Corresponde al número de categorías de la escala ().
Este cálculo se realizó para cada una de las parejas posibles dentro del panel de expertos, de manera independiente para cada uno de los cinco criterios de calidad, y se organizó en una matriz de concordancia por criterio que permitió visualizar el nivel de acuerdo entre cada par de evaluadores.

## Análisis cualitativo de comentarios

Los comentarios y observaciones abiertas registradas por los expertos en cada sección del instrumento se analizaron mediante un proceso de codificación cualitativa (identificación de unidades de significado, agrupación por categorías temáticas y conteo de frecuencia de mención), con el fin de identificar sugerencias recurrentes de mejora y aspectos no contemplados en la versión inicial del proceso. A continuación, se describe cada uno de los aspectos que fueron objeto de análisis durante esta etapa:
- Codificación: El autor principal de la investigación codificó la totalidad de los comentarios registrados en el instrumento.
- Doble codificación y verificación del acuerdo: Un segundo miembro del equipo investigador codificó de manera independiente una submuestra de los comentarios, con el fin de verificar el acuerdo entre codificadores mediante el porcentaje de coincidencia en la categoría asignada a cada unidad de significado.
- Trazabilidad: Cada categoría temática se registró junto con el código del experto (E1-E8), la sección y el ítem de origen del comentario, lo que permitió trazar cada categoría hasta el comentario original del que se derivó.
- Paquete de replicación: Los datos anonimizados recolectados mediante el formulario, así como los artefactos empleados para calcular los indicadores descriptivos y los coeficientes de Kappa presentados en este capítulo, se comparten como anexos que quedan a disposición de la comunidad científica como material de reproducibilidad de los resultados.

## Consideraciones éticas del proceso de evaluación

La naturaleza de este tipo de estudios, que involucró la participación directa de profesionales identificables y sus juicios de valor sobre una propuesta en desarrollo, exigió que el proceso de evaluación se condujera bajo principios éticos claros que protegieran tanto a los participantes como la integridad de los resultados obtenidos. Para mantener la transparencia y la confidencialidad de la información suministrada, durante todas las etapas de la validación (desde la invitación de los candidatos hasta la presentación de los resultados consolidados) todo el proceso se alineó con los principios de participación voluntaria, consentimiento informado y anonimización de las respuestas individuales, de manera que ningún resultado permitiera identificar públicamente el juicio emitido por un experto en particular.
- Participación voluntaria y sin remuneración: Los expertos invitados aceptaron participar libremente en el proceso de evaluación, sin recibir ninguna forma de compensación económica, y con la posibilidad de retirarse en cualquier momento sin que ello representara consecuencia alguna.
- Consentimiento informado: Cada participante recibió un documento de contextualización en el que se explicaron el propósito del estudio, el uso que se daría a la información recolectada y las condiciones de confidencialidad bajo las cuales se trataría su participación, y manifestó su aceptación de manera explícita.
- Anonimización de la identidad de los expertos: Las respuestas individuales fueron identificadas mediante códigos numéricos asignados a cada participante), de forma que ni en el análisis ni en la presentación de los resultados se relacionara una calificación específica con el nombre del experto que la emitió. En la Tabla 166 se presentan las garantías que se aplicaron para garantizar el tratamiento de la información en materia de custodia, conservación, acceso y tratamiento legal de los datos personales de los expertos:
**Tabla 166. Garantías aplicadas al tratamiento de los datos**

### Tabla extraída 166

| Aspecto | Garantía aplicada |
| --- | --- |
| Alojamiento del instrumento | El instrumento se aplicó a través de Google Forms , un servicio de un tercero (Google LLC), sujeto a las políticas de privacidad y a los términos de servicio de dicho proveedor, y no a un sistema propio de la Universidad del Cauca. |
| Custodia de los datos | Las respuestas se descargaron desde la plataforma y se almacenaron en un archivo bajo custodia exclusiva del investigador principal, en un medio con acceso restringido por contraseña, y no permanecieron como única copia en el servicio del tercero. |
| Tiempo de conservación | Los datos se conservarán durante el periodo que establezcan los lineamientos institucionales de gestión de datos de investigación de la Universidad del Cauca, contado a partir de la sustentación del presente documento, tras el cual se eliminará la versión identificada y se conservará únicamente la versión anonimizada incluida en el paquete de replicación. |
| Acceso a los datos | El acceso a las respuestas identificadas (previas a la anonimización) se restringió al investigador principal y al director de tesis, sin que terceros distintos a estos hayan tenido acceso a la información con nombres o datos de contacto de los expertos. |
| Base legal del tratamiento | El tratamiento de los datos personales se realizó con fundamento en el consentimiento previo, expreso e informado del titular, otorgado durante la sesión de contextualización, conforme a la Ley 1581 de 2012 y al Decreto 1377 de 2013 de Colombia, y con fines exclusivamente académicos y de investigación. |

- Confidencialidad de la información suministrada: Los datos recolectados a través del formulario de evaluación se emplearon exclusivamente para los fines del presente estudio, sin ser compartidos con terceros ni utilizados para propósitos distintos a la validación de la propuesta.
- Reporte agregado y no identificativo del perfil profesional: La caracterización de los expertos participantes se presentó de manera agregada (por perfil, formación y años de experiencia), evitando la publicación de datos que permitieran su identificación individual.

## Cronograma de evaluación

De acuerdo con el marco metodológico descrito en el Capítulo I, la evaluación teórica de la propuesta mediante juicio de expertos tuvo una duración de cuatro (4) meses, distribuidos en las actividades que se presentan en la Tabla 167.
**Tabla 167. Cronograma de ejecución del juicio de expertos.**

### Tabla extraída 167

| Actividad | Duración |
| --- | --- |
| Identificación y contacto de candidatos | 3 semanas |
| Diseño y validación interna del instrumento y del documento de contextualización | 3 semanas |
| Sesión de contextualización con los expertos | 2 semanas |
| Aplicación del instrumento y recolección de respuestas | 3 semanas |
| Análisis estadístico y cualitativo de los resultados | 3 semanas |
| Consolidación de ajustes y documentación de la versión refinada del proceso PDAEH | 2 semanas |
| Seguimiento a expertos pendientes e imprevistos | 2 semanas |
| Duración total | 4 meses |


## Reporte y análisis de los resultados

// TODO completar cuando tengamos los resultados

## Sesgos, limitaciones y amenazas a la validez identificados durante el proceso de validación

El juicio por expertos es una técnica ampliamente reconocida en la literatura metodológica para determinar la validez de contenido de propuestas e instrumentos en investigación aplicada. Sin embargo, su naturaleza se sustenta en la apreciación subjetiva de un grupo reducido de especialistas, lo cual conduce a que el método esté sujeto a una serie de amenazas a la validez que se deben declarar de forma explícita para que la interpretación de los resultados sea rigurosa y no se sobreestime su alcance.

## Sesgos identificados

En la Tabla 168 se describen los sesgos identificados durante la ejecución del proceso de validación, así como las estrategias definidas para mitigar su efecto sobre los resultados obtenidos.
**Tabla 168. Sesgos identificados durante la validación mediante juicio de expertos.**

### Tabla extraída 168

| No | Sesgo identificado | Descripción | Impacto potencial | Estrategia de mitigación |
| --- | --- | --- | --- | --- |
| 1 | Sesgo de deseabilidad social | La sesión de contextualización que precedió la aplicación del instrumento fue dictada por el mismo equipo investigador responsable de la propuesta, lo que pudo inclinar a los expertos, de manera consciente o no, a calificar de forma más favorable una propuesta presentada directamente por sus autores. | Sobreestimación de las calificaciones otorgadas en los criterios de suficiencia, coherencia y pertinencia, en detrimento de la objetividad del juicio emitido. | El instrumento se documentó de forma anónima mediante códigos numéricos (E1 a E8), separando la identidad del evaluador de su calificación, y los criterios de calificación se definieron de manera explícita antes de la sesión de contextualización. |
| 2 | Sesgo de aquiescencia | La escala ordinal de cuatro niveles empleada en el instrumento pudo inducir a los expertos a seleccionar de manera sistemática los niveles superiores de la escala, con independencia del contenido evaluado, como tendencia general de respuesta propia de las escalas tipo Likert. | Reducción de la variabilidad real de las calificaciones y subestimación de las discrepancias entre expertos, afectando la sensibilidad del coeficiente Kappa calculado. | Se incluyó en el instrumento un campo abierto de observaciones por ítem, que permitió contrastar cualitativamente las calificaciones numéricas con los comentarios registrados por cada experto. |
| 3 | Sesgo de autoridad/halo | Como el panel se conformó a partir de las redes profesionales y académicas del equipo investigador, la trayectoria de algunos participantes pudo generar una influencia implícita sobre la percepción el resto de los integrantes. | Convergencia artificial de las calificaciones hacia valores más altos, no atribuible al contenido evaluado sino a la composición del panel. | Cada experto respondió el instrumento de manera individual e independiente, sin conocer en ningún momento las calificaciones otorgadas por los demás participantes. |
| Acrónimos: No. Número. |  |  |  |  |


## Limitaciones del estudio

A continuación, se describen las limitaciones operativas adicionales que condicionaron la ejecución del proceso de validación:
- Tamaño y composición del panel: El panel estuvo conformado por ocho (X) expertos (X del Perfil 1 y X del Perfil 2), un número que se ubicó dentro del rango recomendado por la literatura metodológica sobre juicio de expertos, pero que sigue siendo reducido en términos absolutos.
- Escasez de expertos del dominio cuántico: El número de profesionales con conocimiento y experiencia consolidada en computación e ingeniería de software cuántica (Perfil 2) fue considerablemente menor que el de profesionales en arquitectura empresarial y gobierno de TI (Perfil 1), lo que restringió el universo de candidatos disponibles para ese perfil.
- Ausencia de una segunda ronda de consulta: El protocolo aplicado contempló una única ronda de evaluación por parte de cada experto, sin un mecanismo de retroalimentación iterativa del tipo empleado en técnicas como Delphi, por lo que no fue posible que los expertos revisaran su calificación a la luz de las respuestas del resto del panel.
- Dependencia de la calidad del material entregado: La evaluación de cada ítem dependió de la claridad y suficiencia con la que se documentó el proceso en el documento de contextualización entregado a los expertos, lo que introdujo una fuente de variabilidad externa a la propuesta misma.

## Amenazas a la validez

En el contexto de esta investigación, las amenazas a la validez se refieren a cualquier factor capaz de comprometer la exactitud, la generalización o la correcta interpretación de los resultados obtenidos mediante el juicio de expertos. En la Tabla 169se presentan las amenazas identificadas, clasificadas según el tipo de validez que comprometieron.
**Tabla 169. Amenazas a la validez de la evaluación.**

### Tabla extraída 169

| No | Amenaza identificada | Descripción | Impacto potencial | Estrategia de mitigación |
| --- | --- | --- | --- | --- |
| 1 | Validez de constructo | La evaluación de cada ítem dependió de la claridad y suficiencia con que se documentó el proceso en el material de contextualización entregado a los expertos. | Riesgo de que la calificación otorgada reflejara la calidad de la documentación entregada y no la calidad intrínseca del elemento evaluado. | El documento de contextualización se estructuró siguiendo los mismos ocho componentes evaluados en el instrumento y se sometió a una revisión previa por parte del equipo investigador antes de su entrega. |
| 2 | Validez externa | El tamaño reducido del panel y la escasez de especialistas del Perfil 2 limitaron la posibilidad de generalizar los resultados obtenidos más allá del contexto específico de los perfiles convocados. | Restricción del alcance de las conclusiones derivadas de la validación a la muestra de expertos participante, sin garantía de representatividad poblacional. | La selección de expertos se realizó a partir de criterios explícitos de perfil, formación y experiencia, buscando maximizar la representatividad dentro del tamaño de panel disponible. |
| 3 | Validez de conclusión | La ausencia de una segunda ronda de consulta impidió que los expertos revisaran su calificación a la luz de las respuestas del resto del panel. | Posible persistencia de discrepancias entre expertos que una ronda adicional de retroalimentación habría permitido resolver. | Se aplicó un análisis de concordancia inter-experto mediante el coeficiente Kappa marginal libre, que permitió cuantificar el nivel de acuerdo alcanzado en una única ronda. |
| 4 | Validez interna | La sesión de contextualización fue dictada por el equipo investigador responsable de la propuesta evaluada. | Riesgo de que la percepción inicial de los expertos sobre la propuesta estuviera influenciada por el facilitador, afectando la independencia del juicio emitido. | Los criterios de calificación se documentaron de forma explícita y anticipada, y las respuestas se recolectaron de manera anónima e individual. |
| Acrónimos: No. Número. |  |  |  |  |


# Referencias bibliográficas


# ANEXO: Proceso para la definición de arquitecturas empresariales híbridas (v1)


# ANEXO: Documento de contextualización


# ANEXO: Formulario de evaluación


# ANEXO: Evidencia de sesión de contextualización virtual
