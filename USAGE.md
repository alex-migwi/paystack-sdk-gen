# 📘 Comprehensive Usage & Integration Guide (`paystack-sdk-gen`)

This guide provides exhaustive documentation on using the generated **Stripe-Quality Paystack SDKs**, configuring advanced client options (retries, custom transports, idempotency), handling strongly-typed errors, and executing generator CLI commands.

---

## 📋 Table of Contents

1. [Quickstart & Installation](#1-quickstart--installation)
2. [Configuring the SDK Client](#2-configuring-the-sdk-client)
3. [Executing API Operations](#3-executing-api-operations)
   - [Initialize Transaction](#initialize-transaction)
   - [Verify Transaction](#verify-transaction)
   - [Charge Authorization](#charge-authorization)
   - [Create & Manage Customers](#create--manage-customers)
4. [Idempotency & Retry Resilience](#4-idempotency--retry-resilience)
5. [Strongly Typed Error Handling](#5-strongly-typed-error-handling)
6. [Enterprise Transport & Proxy Injection](#6-enterprise-transport--proxy-injection)
7. [Local Generator CLI Reference](#7-local-generator-cli-reference)
8. [Testing & Verification with Prism Mock Server](#8-testing--verification-with-prism-mock-server)

---

## 1. Quickstart & Installation

The generated TypeScript SDK is output to `packages/typescript` as an ESM/CommonJS compatible npm package `@alex-paystack/sdk`.

### Installation
```bash
# Install directly from local build package directory
npm install /path/to/paystack-sdk-gen/packages/typescript

# Or install via npm registry (when published)
npm install @alex-paystack/sdk
```

### Basic Setup
```typescript
import { Configuration, TransactionApi } from '@alex-paystack/sdk';

// Initialize configuration with your Paystack Secret Key
const config = new Configuration({
  accessToken: process.env.PAYSTACK_SECRET_KEY || 'sk_test_xxxxxx'
});

const paystack = new TransactionApi(config);
```

---

## 2. Configuring the SDK Client

The `Configuration` class accepts options to tailor client behavior:

```typescript
import { Configuration } from '@alex-paystack/sdk';
import axios from 'axios';

const config = new Configuration({
  /** Paystack Secret Key (Bearer auth header) */
  accessToken: 'sk_test_xxxxxx',

  /** Max exponential backoff retry attempts for 5xx/429 transient errors (Default: 3) */
  maxRetries: 3,

  /** Base URL override (useful for Prism mock testing or local proxies) */
  basePath: 'https://api.paystack.co',

  /** Inject custom Axios Instance for HTTP connection pooling, logging, or proxying */
  axiosInstance: axios.create({
    timeout: 10000,
    headers: { 'X-Custom-Header': 'MyCompanyApp' }
  })
});
```

---

## 3. Executing API Operations

### Initialize Transaction
```typescript
import { TransactionApi, Configuration } from '@alex-paystack/sdk';

const paystack = new TransactionApi(new Configuration({ accessToken: process.env.PAYSTACK_SECRET_KEY }));

async function initializePayment() {
  const response = await paystack.initializeTransaction({
    email: 'customer@example.com',
    amount: 50000, // Amount in kobo (500 NGN)
    currency: 'NGN',
    reference: `ref_${Date.now()}`
  });

  console.log('Redirect URL:', response.data.data.authorization_url);
}
```

### Verify Transaction
```typescript
async function checkPaymentStatus(reference: string) {
  const response = await paystack.verifyTransaction(reference);

  if (response.data.data.status === 'success') {
    console.log('✅ Payment verified! Amount paid:', response.data.data.amount / 100);
  }
}
```

---

## 4. Idempotency & Retry Resilience

### Auto-UUID Idempotency Header Injection
Endpoints tagged with `x-idempotency: true` in `spec/paystack-enriched.yaml` automatically receive a generated UUID v4 `X-Idempotency-Key` header if omitted:

```typescript
// Auto-injects X-Idempotency-Key UUID automatically!
await paystack.initializeTransaction({
  email: 'user@example.com',
  amount: 10000
});
```

### Exponential Backoff Retry Loop
Catches `500`, `502`, `503`, `429` transient errors and retries up to `maxRetries` with exponential backoff and jitter.

---

## 5. Strongly Typed Error Handling

```typescript
import {
  PaystackError,
  AuthenticationError,
  RateLimitError,
  InvalidRequestError
} from '@alex-paystack/sdk';

try {
  await paystack.initializeTransaction({ email: 'invalid-email', amount: -500 });
} catch (error) {
  if (error instanceof AuthenticationError) {
    console.error('🔑 Auth Error:', error.message);
  } else if (error instanceof RateLimitError) {
    console.error('⏳ Rate Limited:', error.message);
  } else if (error instanceof InvalidRequestError) {
    console.error('❌ Invalid Request:', error.message);
  }
}
```

---

## 6. Enterprise Transport & Proxy Injection

```typescript
import axios from 'axios';
import { Configuration, TransactionApi } from '@alex-paystack/sdk';

const customAxios = axios.create({
  proxy: { host: '10.0.0.1', port: 8080 }
});

const paystack = new TransactionApi(new Configuration({
  accessToken: process.env.PAYSTACK_SECRET_KEY,
  axiosInstance: customAxios
}));
```

---

## 7. Local Generator CLI Reference

The repository maintains its own local spec copy at `spec/paystack-enriched.yaml`. Internal Node.js scripts operate exclusively on this local copy with **zero network requests**:

```bash
# 1. Verify local spec copy and run full generation + Prism test pipeline
npx paystack-sdk-gen sync

# 2. Generate thick-client SDK packages for target languages
npx paystack-sdk-gen generate --lang typescript

# 3. Run Prism Mock Server integration test suite against local spec copy
npx paystack-sdk-gen test
```

---

## 8. Testing & Verification with Prism Mock Server

```bash
# Launch Prism Mock Server using local spec copy:
npx paystack-sdk-gen test --port 4010
```
