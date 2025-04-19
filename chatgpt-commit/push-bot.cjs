#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

function run(command) {
  return execSync(command, { encoding: 'utf-8' }).trim();
}

try {
  // Get a list of staged files
  const diff = run('git diff --cached --name-only');

  if (!diff) {
    console.log('❌ No staged changes to commit.');
    process.exit(0);
  }

  // Run git diff on staged files for context
  const diffContent = run('git diff --cached');

  // AI prompt for commit message
  const prompt = `Write a concise Git commit message summarizing the following staged code changes:\n\n${diffContent}`;

  // Call OpenAI or placeholder logic
  const commitMessage = 'Update game board UI and interactions'; // Replace this with AI call if needed

  // Make the commit
  run(`git commit -m "${commitMessage}"`);

  // Push the commit
  run('git push origin main');

  console.log(`✅ Committed and pushed: "${commitMessage}"`);
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}

