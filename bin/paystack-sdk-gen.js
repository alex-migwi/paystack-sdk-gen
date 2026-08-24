#!/usr/bin/env node

const { Command } = require('commander');
const { execSync } = require('child_process');
const path = require('path');

const program = new Command();

program
  .name('paystack-sdk-gen')
  .description('Paystack Internal Multi-Language Thick-Client SDK Generator CLI')
  .version('1.0.0');

/**
 * COMMAND: sync
 * Verifies local spec copy spec/paystack-enriched.yaml and triggers SDK build & tests.
 */
program
  .command('sync')
  .description('Verify local spec copy (spec/paystack-enriched.yaml) and trigger SDK build & test matrix')
  .option('--skip-generate', 'Verify local spec copy only without triggering SDK generation')
  .action((options) => {
    let cmd = 'node scripts/sync-spec.js';
    if (options.skipGenerate) process.env.SKIP_GENERATE = 'true';

    console.log('🔄 Executing Local Spec Verification & Sync Pipeline...');
    execSync(cmd, { cwd: path.resolve(__dirname, '..'), stdio: 'inherit', env: process.env });
  });

/**
 * COMMAND: generate
 * Generates thick-client SDK packages for target languages using local spec copy.
 */
program
  .command('generate')
  .description('Generate thick-client SDK packages for target languages using local spec copy')
  .option('-l, --lang <languages>', 'Target language SDKs (e.g. typescript, python, go, all)', 'typescript')
  .option('-s, --spec <path>', 'Override input OpenAPI spec file path')
  .option('-o, --output <path>', 'Override target SDK output directory')
  .option('--skip-build', 'Skip compiling generated SDK packages after generation')
  .action((options) => {
    let cmd = `node scripts/build-sdks.js --lang "${options.lang}"`;
    if (options.spec) cmd += ` --spec "${options.spec}"`;
    if (options.output) cmd += ` --output "${options.output}"`;
    if (options.skipBuild) cmd += ' --skip-build';

    console.log(`🚀 Triggering SDK Generator pipeline [Language: ${options.lang}]...`);
    execSync(cmd, { cwd: path.resolve(__dirname, '..'), stdio: 'inherit' });
  });

/**
 * COMMAND: test
 * Runs Prism Mock Server contract validation test matrix against local spec copy.
 */
program
  .command('test')
  .description('Run Prism Mock Server integration test validation suite against local spec copy')
  .option('-p, --port <port>', 'Override Prism mock server listening port', '4010')
  .option('-s, --spec <path>', 'Override OpenAPI spec file used for Prism mock server')
  .action((options) => {
    let cmd = `node scripts/test-sdks.js`;
    if (options.port) process.env.PRISM_PORT = options.port;
    if (options.spec) process.env.PRISM_SPEC_PATH = options.spec;

    console.log('🧪 Executing Prism Mock Validation Matrix...');
    execSync(cmd, { cwd: path.resolve(__dirname, '..'), stdio: 'inherit', env: process.env });
  });

/**
 * COMMAND: extract-templates
 * Extracts default OpenAPI Generator templates for customizing a target language.
 */
program
  .command('extract-templates')
  .description('Extract default OpenAPI Generator Mustache templates for customizing target language SDKs')
  .option('-g, --generator <name>', 'OpenAPI Generator generator name (typescript-axios, python, go, etc.)', 'typescript-axios')
  .option('-o, --output <path>', 'Target directory to extract templates into', './templates/custom')
  .action((options) => {
    const cmd = `npx @openapitools/openapi-generator-cli author template -g "${options.generator}" -o "${options.output}"`;
    console.log(`📦 Extracting templates for generator '${options.generator}' to '${options.output}'...`);
    execSync(cmd, { cwd: path.resolve(__dirname, '..'), stdio: 'inherit' });
    console.log('✅ Templates extracted successfully!');
  });

program.parse(process.argv);
