#!/bin/bash

# PAI Wrapper Script for Gemini CLI

# Determine the absolute path to the .gemini directory
export PAI_DIR="$(cd "$(dirname "$0")" && pwd)"

# Get the user's prompt from the command-line arguments
prompt="$@"

# Run the context manager to set the GEMINI.md file
bun "$PAI_DIR/commands/context-manager.ts" "$prompt"

# Execute the actual Gemini CLI command with all arguments
bun x @google/gemini-cli "$@"