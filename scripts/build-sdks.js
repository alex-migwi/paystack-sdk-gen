const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function parseArgs() {
  const args = process.argv.slice(2);
  const options = {
    spec: null,
    output: null,
    lang: 'typescript',
    skipBuild: false
  };

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '-s' || args[i] === '--spec') {
      options.spec = args[++i];
    } else if (args[i] === '-o' || args[i] === '--output') {
      options.output = args[++i];
    } else if (args[i] === '-l' || args[i] === '--lang') {
      options.lang = args[++i];
    } else if (args[i] === '--skip-build') {
      options.skipBuild = true;
    }
  }

  return options;
}

function buildSDKs() {
  const opts = parseArgs();
  console.log('🚀 Starting Stripe-Quality SDK Generation Pipeline...');

  const DEFAULT_LOCAL_SPEC = path.resolve(__dirname, '../spec/paystack-enriched.yaml');
  let specPath = opts.spec || DEFAULT_LOCAL_SPEC;

  if (!fs.existsSync(specPath)) {
    console.error(`❌ Enriched spec file not found at: ${specPath}. Run 'npx paystack-sdk-gen sync' to retrieve the latest spec.`);
    process.exit(1);
  }

  const TEMPLATES_DIR = path.resolve(__dirname, '../templates/typescript');
  const OUTPUT_DIR = opts.output ? path.resolve(opts.output) : path.resolve(__dirname, '../packages/typescript');

  console.log(`📦 Spec source: ${specPath}`);
  console.log(`🛠  Templates dir: ${TEMPLATES_DIR}`);
  console.log(`🎯 Output target: ${OUTPUT_DIR}`);
  console.log(`🌐 Target language: ${opts.lang}`);

  const command = `npx @openapitools/openapi-generator-cli generate ` +
    `-i "${specPath}" ` +
    `-g typescript-axios ` +
    `-o "${OUTPUT_DIR}" ` +
    `-t "${TEMPLATES_DIR}" ` +
    `--additional-properties=supportsES6=true,withInterfaces=true,npmName=@alex-paystack/sdk,modelPropertyNaming=camelCase`;

  console.log(`\nExecuting Generator Command:\n${command}\n`);

  try {
    execSync(command, { stdio: 'inherit' });
    console.log('\n✅ SDK Generation Completed Successfully!');

    if (!opts.skipBuild) {
      console.log('🔨 Compiling generated TypeScript SDK...');
      execSync(`npm --prefix "${OUTPUT_DIR}" run build`, { stdio: 'inherit' });
      console.log('✅ Generated TypeScript package compiled and ready!');
    } else {
      console.log('⏩ Skipping package compilation (--skip-build).');
    }
  } catch (err) {
    console.error('❌ SDK Generation failed:', err.message);
    process.exit(1);
  }
}

buildSDKs();
