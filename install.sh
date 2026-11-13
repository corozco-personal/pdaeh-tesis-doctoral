#!/usr/bin/env bash
# Universal PDAEH skill installer for Agent Skills-compatible assistants.
set -eu

REPO_RAW="${PDAEH_REPO_RAW:-https://raw.githubusercontent.com/corozco-personal/pdaeh-tesis-doctoral/main}"
SKILL_NAME="pdaeh-advisor"
SCOPE="local"

usage() {
  cat <<'EOF'
Usage: install.sh [--global|-g]

  (no option)  Install in .agents/skills for the current workspace.
  --global     Install for every supported agent detected on this computer.

Supported global locations: Codex, Claude Code, Gemini CLI, Antigravity,
Cursor, OpenCode, and the portable Agent Skills directory (~/.agents/skills).
EOF
}

for arg in "$@"; do
  case "$arg" in
    --global|-g) SCOPE="global" ;;
    --help|-h) usage; exit 0 ;;
    *) echo "Opción desconocida: $arg" >&2; usage >&2; exit 2 ;;
  esac
done

download_skill() {
  target_dir="$1"
  echo "Instalando PDAEH Advisor en: $target_dir"
  mkdir -p "$target_dir"
  curl -fsSL "$REPO_RAW/agente-pdaeh-consultor/PDAEH_SPECIFICATION_V1.md" -o "$target_dir/SKILL.md"
  curl -fsSL "$REPO_RAW/agente-pdaeh-consultor/PDAEH_SPECIFICATION_V1.json" -o "$target_dir/PDAEH_SPECIFICATION_V1.json"
  curl -fsSL "$REPO_RAW/agente-pdaeh-consultor/knowledge_base_pdaeh.json" -o "$target_dir/knowledge_base_pdaeh.json"
}

add_target() {
  candidate="$1"
  case "
$TARGETS
" in
    *"
$candidate
"*) return ;;
  esac
  TARGETS="${TARGETS}${candidate}
"
}

TARGETS=""

if [ "$SCOPE" = "local" ]; then
  add_target "${PWD}/.agents/skills/${SKILL_NAME}"
else
  # The portable Agent Skills location is always installed as a fallback.
  add_target "${HOME}/.agents/skills/${SKILL_NAME}"

  # Environment variables take precedence when an agent provides them.
  if [ -n "${CODEX_HOME:-}" ]; then
    add_target "${CODEX_HOME}/skills/${SKILL_NAME}"
  elif [ -d "${HOME}/.codex" ]; then
    add_target "${HOME}/.codex/skills/${SKILL_NAME}"
  fi

  if [ -n "${CLAUDE_CONFIG_DIR:-}" ]; then
    add_target "${CLAUDE_CONFIG_DIR}/skills/${SKILL_NAME}"
  elif [ -d "${HOME}/.claude" ]; then
    add_target "${HOME}/.claude/skills/${SKILL_NAME}"
  fi

  if [ -d "${HOME}/.gemini" ]; then
    add_target "${HOME}/.gemini/skills/${SKILL_NAME}"
  fi
  if [ -d "${HOME}/.gemini/antigravity" ]; then
    add_target "${HOME}/.gemini/antigravity/skills/${SKILL_NAME}"
  fi
  if [ -d "${HOME}/.cursor" ]; then
    add_target "${HOME}/.cursor/skills/${SKILL_NAME}"
  fi
  if [ -d "${HOME}/.config/opencode" ]; then
    add_target "${HOME}/.config/opencode/skills/${SKILL_NAME}"
  fi
fi

printf '%s' "$TARGETS" | while IFS= read -r target_dir; do
  [ -n "$target_dir" ] || continue
  download_skill "$target_dir"
done

echo "PDAEH Advisor se instaló correctamente. Reinicia o abre una nueva sesión del agente para activarlo."
