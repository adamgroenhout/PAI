# PAI Quick Start Guide

Get your Personal AI Infrastructure up and running in minutes!

## Prerequisites

- **macOS** 11+ (primary platform)
- **Gemini CLI** or Gemini API access
- **Bun runtime**
- **Git** (for version control)

## Installation

### 1. Clone or Create PAI Directory

```bash
# Option A: Clone from repository
git clone https://github.com/yourusername/PAI.git
cd PAI

# Option B: Create new PAI installation
mkdir -p ~/PAI
cd ~/PAI
```

### 2. Set Environment Variables

```bash
# Add to your shell profile (~/.bashrc)
export PAI_DIR="$HOME/.gemini"  # PAI infrastructure directory
export PATH="$HOME/bin:$PATH"

# Reload shell
source ~/.bashrc
```

### 3. Create Directory Structure

```bash
# Create essential directories
mkdir -p "${PAI_DIR}/context"
mkdir -p "${PAI_DIR}/commands"
mkdir -p "$HOME/Projects"
mkdir -p "$HOME/Library/Logs"
mkdir -p "$HOME/Documentation"
```

### 4. Configure Environment File

Create `~/.env` with your settings:

```bash
# Essential Configuration
PAI_DIR=$HOME/.gemini

# Optional: API Keys for various services
OPENAI_API_KEY=your_key_here
ANTHROPIC_API_KEY=your_key_here
```

## Core Setup

### 1. Create Main Context File

Create `${PAI_DIR}/context/GEMINI.md`:

```markdown
# PAI System Context

## System Information
- PAI_DIR: ${PAI_DIR}
- Platform: macOS
- User: ${USER}

## Core Instructions
You are an AI assistant enhanced with PAI (Personal AI Infrastructure).

## Available Features
- Dynamic context loading
- Multi-agent support

## Project Contexts
[Your project-specific information here]
```



## Basic Usage

### 1. Context Management

Create project-specific contexts:

```bash
# Create a project context
mkdir -p "${PAI_DIR}/context/projects/myproject"
cat > "${PAI_DIR}/context/projects/myproject/GEMINI.md" << EOF
# My Project Context

## Project Details
- Name: My Project
- Path: ${HOME}/Projects/myproject
- Type: Web Application

## Technical Stack
- Frontend: React
- Backend: Node.js
- Database: PostgreSQL

## Current Tasks
- [ ] Implement user authentication
- [ ] Add dashboard features
EOF
```


### 3. Custom Commands

Create custom command `${PAI_DIR}/commands/status.sh`:

```bash
#!/bin/bash
# Show PAI system status

echo "PAI System Status"
echo "================="
echo "PAI_DIR: ${PAI_DIR}"
echo "Contexts: $(find ${PAI_DIR}/context -name "*.md" | wc -l)"
echo "Projects: $(ls -1 ${HOME}/Projects 2>/dev/null | wc -l)"
```

## Testing Your Installation

### 1. Test Context Loading

In Gemini CLI, try:
```
"Help me with my website"
# Should load website context

"Research AI trends"
# Should launch researcher agent
```


## Common Tasks

### Adding a New Project Context

```bash
# 1. Create project directory
mkdir -p "${HOME}/Projects/newproject"

# 2. Create context file
cat > "${PAI_DIR}/context/projects/newproject/GEMINI.md" << EOF
# New Project Context
[Project specific information]
EOF
```

### Creating Agent-Specific Contexts

```bash
# Research agent context
cat > "${PAI_DIR}/context/agents/researcher.md" << EOF
# Researcher Agent Context
Focus on finding accurate, recent information
Cite sources when possible
EOF
```


## Troubleshooting

### Context Not Loading

```bash
# Check PAI_DIR is set
echo $PAI_DIR
```



## Next Steps

1. **Explore Documentation**
   - [System Architecture](./architecture.md)
   - [UFC Context System](./ufc-context-system.md)

2. **Customize Your Setup**
   - Add project-specific contexts

3. **Advanced Features**
   - Set up multiple agents
   - Create command shortcuts
   - Integrate with external services

## Quick Reference

### Essential Commands

```bash
# Check system status
"${PAI_DIR}/commands/status.sh"

# Reload context
source ~/.bashrc

# View logs
tail -f "${HOME}/Library/Logs/"*.log
```

### File Locations

| Component | Location |
|-----------|----------|
| Main Context | `${PAI_DIR}/context/GEMINI.md` |
| Commands | `${PAI_DIR}/commands/` |
| Projects | `${HOME}/Projects/` |
| Logs | `${HOME}/Library/Logs/` |

### Environment Variables

| Variable | Purpose | Default |
|----------|---------|---------|
| `PAI_DIR` | PAI configuration directory | `$HOME/.gemini` |

## Getting Help

- Check the [Documentation](./README.md)
- Review [Troubleshooting Guide](#troubleshooting)
- File issues on GitHub
- Check logs in `${HOME}/Library/Logs/`

---

*Welcome to PAI! Your personal AI infrastructure is ready to enhance your workflow.*