const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const TARGET_SPEC_DIR = path.resolve(__dirname, '../spec');
const TARGET_SPEC_FILE = path.join(TARGET_SPEC_DIR, 'paystack-enriched.yaml');

function checkLocalSpec() {
  console.log('📦 Verifying Local Enriched Spec Copy...');

  if (!fs.existsSync(TARGET_SPEC_FILE)) {
    console.error(`❌ Spec file not found at: ${TARGET_SPEC_FILE}`);
    console.error(`   The spec file must be updated via the GitHub Action sync workflow or placed in spec/paystack-enriched.yaml.`);
    process.exit(1);
  }

  const stats = fs.statSync(TARGET_SPEC_FILE);
  console.log(`✅ Found local spec copy: ${TARGET_SPEC_FILE} (${stats.size} bytes, modified: ${stats.mtime.toISOString()})`);
  return true;
}

function run() {
  checkLocalSpec();

  if (process.env.SKIP_GENERATE === 'true') {
    console.log('⏩ Local spec verified. Skipping SDK generation (SKIP_GENERATE=true).');
    return;
  }

  console.log('🚀 Triggering SDK Generation & Validation Test Matrix from local spec copy...');
  execSync('node scripts/build-sdks.js', { stdio: 'inherit' });
  execSync('node scripts/test-sdks.js', { stdio: 'inherit' });
}

run();
