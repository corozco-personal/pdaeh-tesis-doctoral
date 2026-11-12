# Script to prepare the full update of FinNova, presets, index.html and app.js
import re

finnova_use_case = "Caso FinNova (JIISIC 2026): Empresa mediana de servicios financieros (PYME) especializada en gestión de inversiones y análisis de carteras para inversores institucionales y profesionales. La firma busca incorporar capacidad de optimización cuántica asistida para problemas complejos de rebalanceo dinámico de portafolio y optimización combinatoria multiobjetivo con múltiples restricciones de riesgo, preservando el control clásico integral sobre datos financieros, reglas de negocio, cumplimiento normativo y cálculo de riesgo fáctico."

finnova_stack = "Plataforma analítica clásica establecida (As-Is): Servicios de datos de mercado (Market Data Services), servicios de gestión de portafolios (Portfolio Services), motor de análisis y riesgo financiero (Risk & Analytics Services), servicios de cumplimiento normativo (Compliance Services) y generación de reportes (Reporting Services), desplegados en arquitectura de microservicios sobre clúster en la nube privada con bases de datos relacionales y series temporales."

print("FinNova strings defined.")
