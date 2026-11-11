# Security Policy: PDAEH Repository

## Supported Versions

| Project / Component | Supported | Status |
| ------------------- | --------- | ------ |
| PDAEH Framework     | v1.0.x    | Active |
| PDAEH Web Portal    | v1.0.x    | Active |
| PDAEH Advisor Agent | v1.0.x    | Active |

## Reporting a Vulnerability

We take the security of the PDAEH framework, its deployment assets, and its AI consultation tools seriously.

If you discover a security vulnerability, sensitive data leakage, or credential exposure within this repository, please do **NOT** open a public issue.

### Reporting Procedure:
1. Contact the primary researcher directly via email:
   - **Carlos Orozco**: `carlosorozco@unicauca.edu.co`
2. Include in your report:
   - Detailed description of the vulnerability.
   - Affected file, component, or endpoint.
   - Steps or proof-of-concept (PoC) to reproduce the issue.
   - Potential impact on quantum or classical enterprise infrastructure.

## Security Constraints & Best Practices for PDAEH Deployments

1. **Post-Quantum Cryptography (PQC) Readiness:**
   - Architectural decisions must consider NIST-standardized post-quantum algorithms (ML-KEM / Crystals-Kyber, ML-DSA / Crystals-Dilithium, SLH-DSA / SPHINCS+) when classical-quantum communication channels are exposed.
2. **Access Control & API Tokens:**
   - Quantum Processing Unit (QPU) provider API keys (IBM Quantum, AWS Braket, Azure Quantum) must **never** be hardcoded into configuration repositories, web portal frontends, or client-side JavaScript.
   - Always inject QPU tokens via secure secret managers and backend proxies.
3. **Model & Agent Guardrails:**
   - Implementations of the PDAEH Advisor Agent must adhere strictly to `agente-pdaeh-consultor/PDAEH_SPECIFICATION_V1.md` to prevent architectural hallucination, unauthorized scope creep, or bypassing of Architecture Governance Body (OGA) checkpoints.
