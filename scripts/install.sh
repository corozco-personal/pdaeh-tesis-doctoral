#!/usr/bin/env bash
# PDAEH Skill Installer for Antigravity, Claude Code, and Agent Workspaces
set -e

REPO_RAW="https://raw.githubusercontent.com/corozco-personal/pdaeh-tesis-doctoral/main"
TARGET_DIR=""

if [ "$1" = "--global" ] || [ "$1" = "-g" ]; then
  TARGET_DIR="$HOME/.gemini/antigravity/skills/pdaeh-advisor"
elif [ -d "$HOME/.gemini/antigravity" ] && [ ! -d ".git" ]; then
  TARGET_DIR="$HOME/.gemini/antigravity/skills/pdaeh-advisor"
else
  TARGET_DIR=".agents/skills/pdaeh-advisor"
fi

echo "Instalando skill PDAEH en: $TARGET_DIR"
mkdir -p "$TARGET_DIR"

curl -fsSL "$REPO_RAW/agente-pdaeh-consultor/PDAEH_SPECIFICATION_V1.md" -o "$TARGET_DIR/SKILL.md"
curl -fsSL "$REPO_RAW/agente-pdaeh-consultor/PDAEH_SPECIFICATION_V1.json" -o "$TARGET_DIR/PDAEH_SPECIFICATION_V1.json"
curl -fsSL "$REPO_RAW/agente-pdaeh-consultor/knowledge_base_pdaeh.json" -o "$TARGET_DIR/knowledge_base_pdaeh.json"

echo "Skill PDAEH instalado exitosamente en $TARGET_DIR."
echo "Ahora puedes invocar a tu agente para diagnosticar o solicitar el mapa paso a paso de adopción."
