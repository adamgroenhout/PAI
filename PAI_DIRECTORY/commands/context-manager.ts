#!/usr/bin/env bun

import * as fs from 'fs';
import * as path from 'path';

const PAI_DIR = process.env.PAI_DIR;

if (!PAI_DIR) {
  console.error("Error: PAI_DIR environment variable is not set.");
  process.exit(1);
}

interface ContextRule {
  keywords: string[];
  contextFile: string;
  agent?: string;
}

const CONTEXT_RULES: ContextRule[] = [
  {
    keywords: ['website', 'site', 'blog'],
    contextFile: 'context/projects/website/GEMINI.md',
  },
  {
    keywords: ['alma'],
    contextFile: 'context/projects/Alma.md',
  },
  {
    keywords: ['conversation', 'meeting', 'talked about'],
    contextFile: 'commands/get-life-log.md',
  },
  {
    keywords: ['philosophical', 'discussion', 'free will', 'consciousness'],
    contextFile: '',
  },
  {
    keywords: ['research', 'information', 'latest updates', 'learn about'],
    contextFile: '',
    agent: 'researcher',
  },
  {
    keywords: ['security', 'vulnerability', 'pentesting', 'audit'],
    contextFile: '',
    agent: 'pentester',
  },
  {
    keywords: ['expenses', 'bills', 'budget', 'spending'],
    contextFile: 'context/life/expenses.md',
  },
  {
    keywords: ['health', 'fitness', 'medical', 'wellness'],
    contextFile: 'Projects/Life/Health/GEMINI.md',
  },
  {
    keywords: ['benefits', 'perks', 'rewards', 'credit card'],
    contextFile: 'context/benefits/GEMINI.md',
  },
  {
    keywords: ['unsupervised learning', 'newsletter', 'business'],
    contextFile: 'context/unsupervised-learning/GEMINI.md',
  },
  {
    keywords: ['screenshot', 'browser', 'visual test', 'ui', 'ux'],
    contextFile: 'context/tools/GEMINI.md',
    agent: 'designer',
  },
  {
    keywords: ['capture learning', 'document solution', 'log this'],
    contextFile: 'commands/capture-learning.ts',
  },
];

function analyzeIntents(prompt: string): ContextRule[] {
  const lowerCasePrompt = prompt.toLowerCase();
  const matchedRules: ContextRule[] = [];
  for (const rule of CONTEXT_RULES) {
    for (const keyword of rule.keywords) {
      if (lowerCasePrompt.includes(keyword)) {
        matchedRules.push(rule);
        break;
      }
    }
  }
  return matchedRules;
}

async function main() {
  const prompt = process.argv.slice(2).join(' ');
  const targetGeminiMdPath = path.join(process.cwd(), 'GEMINI.md');
  const defaultContextPath = path.join(PAI_DIR, 'context/GEMINI.md');

  let fullContext = '';
  const activatedAgents: string[] = [];

  if (prompt) {
    const rules = analyzeIntents(prompt);

    if (rules.length > 0) {
      for (const rule of rules) {
        if (rule.contextFile) {
          const contextFilePath = path.join(PAI_DIR, rule.contextFile);
          if (fs.existsSync(contextFilePath)) {
            fullContext += fs.readFileSync(contextFilePath, 'utf-8') + '\n\n';
            console.log(`Context from '${rule.contextFile}' has been loaded.`);
          }
        }
        if (rule.agent && !activatedAgents.includes(rule.agent)) {
          activatedAgents.push(rule.agent);
        }
      }
    }
  }

  if (fullContext === '') {
    if (fs.existsSync(defaultContextPath)) {
      fullContext = fs.readFileSync(defaultContextPath, 'utf-8');
      console.log(`Default context has been loaded into GEMINI.md`);
    }
  }

  fs.writeFileSync(targetGeminiMdPath, fullContext);
  console.log(`GEMINI.md has been created/updated.`);


  if (activatedAgents.length > 0) {
    console.log(`Activated agent(s): ${activatedAgents.join(', ')}`);
  }
}

main().catch(console.error);