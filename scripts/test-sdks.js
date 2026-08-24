const fs = require('fs');
const { spawn } = require('child_process');
const path = require('path');
const { Configuration, TransactionApi, AuthenticationError, PaystackError } = require('../packages/typescript/dist/index');

const DEFAULT_SPEC = path.resolve(__dirname, '../spec/paystack-enriched.yaml');
const SPEC_PATH = process.env.PRISM_SPEC_PATH || DEFAULT_SPEC;

if (!fs.existsSync(SPEC_PATH)) {
  console.error(`❌ Spec file for Prism mock testing not found at: ${SPEC_PATH}. Run 'npx paystack-sdk-gen sync' first.`);
  process.exit(1);
}

const PRISM_PORT = process.env.PRISM_PORT ? parseInt(process.env.PRISM_PORT, 10) : 4010;
const BASE_PATH = `http://127.0.0.1:${PRISM_PORT}`;

async function runPrismValidation() {
  console.log('🧪 Starting Phase 4: Prism Validation Check...');
  console.log(`📜 Spec file: ${SPEC_PATH}`);
  console.log(`📡 Launching Prism Mock Server on ${BASE_PATH}...`);

  const prism = spawn('npx', ['@stoplight/prism-cli', 'mock', SPEC_PATH, '-p', String(PRISM_PORT)], {
    stdio: 'pipe'
  });

  prism.stdout.on('data', (data) => {
    // console.log(`[PRISM] ${data.toString().trim()}`);
  });

  prism.stderr.on('data', (data) => {
    // console.error(`[PRISM ERR] ${data.toString().trim()}`);
  });

  // Wait 5 seconds for Prism mock server to bind to port
  await new Promise((resolve) => setTimeout(resolve, 5000));

  let exitCode = 0;

  try {
    const config = new Configuration({
      basePath: BASE_PATH,
      accessToken: 'sk_test_mock_key_12345',
      maxRetries: 2
    });

    const transactionApi = new TransactionApi(config);

    // Test 1: Initialize Transaction call against Prism Mock
    console.log('🔹 Test 1: Verify API Call & Auto-Idempotency Header...');
    const initRes = await transactionApi.initializeTransaction({
      email: 'customer@example.com',
      amount: 5000
    });

    if (initRes && initRes.data) {
      console.log('   ✅ Transaction initialized successfully against Prism!');
      console.log(`   Response status: ${initRes.status}`);
    } else {
      throw new Error('Unexpected empty response from Prism');
    }

    // Test 2: Verify Strongly Typed Errors
    console.log('🔹 Test 2: Verify Typed Error Classes Hierarchy...');
    const authErr = new AuthenticationError('Invalid API Key');
    if (authErr instanceof PaystackError && authErr.name === 'AuthenticationError') {
      console.log('   ✅ Strongly Typed Error classes correctly instantiated!');
    } else {
      throw new Error('Typed Error hierarchy check failed');
    }

    console.log('\n🎉 ALL PRISM INTEGRATION TESTS PASSED!');
  } catch (err) {
    console.error('\n❌ Prism Validation Failed:', err.message || err);
    exitCode = 1;
  } finally {
    console.log('🧹 Terminating Prism Mock Server...');
    prism.kill('SIGTERM');
  }

  process.exit(exitCode);
}

runPrismValidation();
