# PAI System Documentation

Welcome to the Personal AI Infrastructure (PAI) documentation. PAI is a comprehensive system for integrating AI assistants into your personal workflow with advanced context management, automation, and extensibility.

## 📚 Documentation Index

### Getting Started
- [Quick Start Guide](./quick-start.md) - Get up and running in minutes
- [Installation Guide](./installation.md) - Detailed installation instructions
- [Configuration Guide](./configuration.md) - System configuration options

### Core Concepts
- [System Architecture](./architecture.md) - Overview of PAI components
- [UFC Context System](./ufc-context-system.md) - Universal Flexible Context management
- [Agent System](./agent-system.md) - Specialized AI agents

### Components
- [Context Management](./context-management.md) - Dynamic context loading
- [Command System](./command-system.md) - Custom commands and scripts

### Development
- [API Reference](./api-reference.md) - HTTP APIs and interfaces
- [Security Guide](./security.md) - Security best practices
- [Contributing](./contributing.md) - How to contribute to PAI

## 🚀 What is PAI?

PAI (Personal AI Infrastructure) is a powerful framework that enhances AI assistants with:

- **Dynamic Context Loading**: Automatically loads relevant context based on conversation intent
- **Universal Flexible Context (UFC)**: Intelligent context management system
- **Multi-Agent Architecture**: Specialized agents for different tasks
- **Security First**: Built with security best practices

## 🎯 Key Features

### 1. Context Intelligence
- Semantic understanding of user intent
- Automatic context loading
- Project-specific knowledge bases
- Dynamic agent selection

### 2. Automation
- Custom command integration
- Workflow automation
- Event-driven responses

### 3. Security
- Input validation and sanitization
- Rate limiting
- CORS protection
- No hardcoded secrets

## 🏗️ System Components

```
PAI/
├── .gemini/                 # Gemini-specific configuration
│   ├── context/            # UFC context files
│   ├── commands/           # Custom commands
├── Documentation/          # System documentation
├── Projects/               # Project-specific contexts
└── Library/               # System libraries and logs
```

## 🔧 Environment Variables

PAI uses environment variables for configuration:

- `PAI_DIR`: PAI configuration directory
- `GEMINI_CONFIG_DIR`: Gemini configuration directory

## 📖 Quick Links

- [System Requirements](#system-requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage Examples](#usage-examples)
- [Troubleshooting](#troubleshooting)

## System Requirements

- Linux/Unix-like environment
- Bun runtime
- Gemini CLI or API access

## Installation

```bash
# Clone PAI repository
git clone https://github.com/yourusername/PAI.git
cd PAI

# Set PAI_DIR
export PAI_DIR="$HOME/.gemini"

# Configure environment
cp .env.example ~/.env
# Edit ~/.env with your settings
```

## Configuration

PAI is configured through:
1. Environment variables in `~/.env`
2. Context files in `.gemini/context/`
3. Project-specific configurations

## Usage Examples

### Basic Context Loading
```bash
# Context automatically loads based on conversation
"Help me with my website" → Loads website context
"Research AI trends" → Loads research agent
```



## Troubleshooting

Common issues and solutions:

| Issue | Solution |
|-------|----------|
| Context not loading | Check `${PAI_DIR}/context/` |
| Port conflicts | Change PORT in `~/.env` |

## Contributing

PAI is open for contributions. See [Contributing Guide](./contributing.md) for:
- Code style guidelines
- Pull request process
- Issue reporting
- Feature requests

## Support

- GitHub Issues: Report bugs and request features
- Documentation: This directory contains all documentation
- Community: Join discussions in the repository

## License

PAI is part of the Personal AI Infrastructure project.

---

*Last updated: [Current Date]*
*Version: 1.0.0*