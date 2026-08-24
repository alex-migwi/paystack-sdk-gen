# Paystack Multi-Language Thick-Client SDK Generator (`paystack-sdk-gen`)

> **High-Performance SDK Generation Pipeline for Paystack APIs**  
> Consumes an enriched OpenAPI 3.0 specification (`paystack-spec-enriched`) and produces enterprise-grade, thick-client SDKs for **TypeScript**, **Python**, **Go**, **Java**, **PHP**, **C#**, **Ruby**, **Flutter**, **Android (Kotlin)**, and **iOS (Swift)**.

---

### Proof of Concept

This project was created as part of the DevEx Lead technical assessment at Paystack.

It demonstrates the proposed approach, developer experience, and technical thinking behind the solution. The implementation is intentionally open to further refinement and iteration.

---

## Architecture & Local Spec Model

Standard OpenAPI generators output thin API wrappers that lack enterprise resilience patterns. `paystack-sdk-gen` bridges this gap by combining **OpenAPI 3.0 vendor extensions** (`x-idempotency`, `x-retry-safe`, `x-pagination`) with **custom Mustache engine templates**.

### Decoupled Spec Storage Principles
- **Local Spec Copy**: `paystack-sdk-gen` maintains its own local copy of the spec in `spec/paystack-enriched.yaml`.
- **Zero Script Network Calls**: Internal Node.js scripts (`sync-spec.js`, `build-sdks.js`, `test-sdks.js`, CLI) operate exclusively on `spec/paystack-enriched.yaml` with zero network requests.
- **Automated GitHub Action Runner**: The `.github/workflows/auto-build-sdks.yml` workflow step is the sole runner that fetches new spec releases over HTTPS via `curl` and updates `spec/paystack-enriched.yaml`.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        paystack-spec-enriched (Remote Repo)                           │
│                        • Injects x-idempotency, x-retry-safe, x-pagination              │
└───────────────────────────┬────────────────────────────────────────────┘
                                            │
                                            │ (GitHub Action step ONLY downloads via curl)
                                            ▼
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                              paystack-sdk-gen (This Repository)                       │
│                                                               subterranean             │
│   ┌─────────────────────┐   ┌───────────────────────────┐   ┌──────────────────────┐   │
│   │ Local Spec Copy     │   │ Custom Mustache Templates │   │ Generator Engine     │   │
│   │ spec/               │ + │ templates/typescript/     │ = │ openapi-generator-cli│   │
│   │ paystack-enriched   │   │ • Retry Loops & Backoff   │   │                      │   │
│   │ .yaml               │   │ • Auto-UUID Idempotency   │   │                      │   │
│   └─────────────────────┘   │ • Typed Error Classes     │   └──────────┬───────────┘   │
│                             └───────────────────────────┘              │               │
└────────────────────────────────────────────────────────────────────────┼───────────────┘
                                                                         │
                  ┌──────────────────────────────────────────────────────┴──────────────────────────────────────────────────────┐
                  │                                                                                                             │
                  ▼                                                     ▼                                                       ▼
      ┌──────────────────────┐                              ┌──────────────────────┐                                ┌──────────────────────┐
      │ packages/typescript  │                              │   packages/python    │                                │    packages/go       │
      │ (@alex-paystack/sdk) │                              │   (py-paystack-sdk)  │                                │  (paystack-go-sdk)   │
      └──────────┬───────────┘                              └──────────────────────┘                                └──────────────────────┘
                 │
                 ▼
      ┌──────────────────────┐
      │  Prism Mock Server   │ ◄── Automated Contract & Integration Validation Matrix
      │  (http://127.0.0.1)  │
      └──────────────────────┘
```

---

## Stripe-Quality Thick-Client Features

| Pillar | Mechanism | Implementation Details |
| :--- | :--- | :--- |
| **Exponential Backoff Retries** | Automatic retry loop for transient failures | Catches `500`, `502`, `503`, `504`, `429`, `ECONNRESET`, `ETIMEDOUT`. Applies exponential backoff + jitter: $\text{delayMs} = \min(300 \times 2^{\text{attempt}} + \text{jitter}, 4000)$. Configurable via `maxRetries`. |
| **Auto-UUID Idempotency** | Vendor Tag: `x-idempotency: true` | Automatically injects unique `X-Idempotency-Key` UUID v4 headers on POST endpoints marked idempotent if omitted by caller. |
| **Strongly Typed Errors** | Status Code $\rightarrow$ Class Mapping | Transpiles API responses into custom error hierarchy: `PaystackError` (base), `AuthenticationError` (401), `RateLimitError` (429), `InvalidRequestError` (400/422), `IdempotencyError` (409), `ApiConnectionError` (5xx/Network). |
| **Enterprise Transport** | `Configuration.axiosInstance` | Allows consumers to inject custom HTTP clients for proxying, connection pooling, request logging, or unit test mocking. |
| **Decoupled GitHub Auto-Sync** | Webhook: `repository_dispatch` | Subscribes to `enriched-spec-updated` release events from `paystack-spec-enriched` and runs automated 6-hour cron checks. |
| **Prism Mock Validation** | Integrated Test Matrix | Boots `@stoplight/prism-cli` mock server on port 4010 and executes live integration contract tests before code publishing. |

---

## GitHub Actions Automation (`auto-build-sdks.yml`)

Spec acquisition and SDK generation are controlled automatically or manually via GitHub Actions:

- **Automatic Release Trigger (`repository_dispatch`)**: Fires when a new release is published in `paystack-spec-enriched`. Downloads the spec via `curl` into `spec/paystack-enriched.yaml` and rebuilds all SDKs.
- **Manual Workflow Trigger (`workflow_dispatch`)**:
  - `auto_generate` (`boolean`): Automatically generate & compile SDK packages after spec acquisition.
  - `target_languages` (`string`): Target language SDKs (`typescript`, `python`, `go`, `all`).
  - `spec_url` (`string`): Remote enriched spec URL.

---

## Fully Specified CLI Command Reference

The repository provides a global binary tool `paystack-sdk-gen` for internal engineering workflows and automated scripts.

```bash
# Global CLI Invocation (when linked or installed)
npx paystack-sdk-gen <command> [options]
```

### 1. `paystack-sdk-gen sync`
Verifies the local spec copy (`spec/paystack-enriched.yaml`) and triggers SDK generation & Prism contract test validation.

```bash
paystack-sdk-gen sync [options]
```
**Options:**
- `--skip-generate` : Verify local spec copy only without triggering SDK generation.

---

### 2. `paystack-sdk-gen generate`
Executes `openapi-generator-cli` using `spec/paystack-enriched.yaml` and custom Mustache engine templates to produce thick-client SDK packages.

```bash
paystack-sdk-gen generate [options]
```
**Options:**
- `-l, --lang <languages>` : Target language SDKs (`typescript`, `python`, `go`, `all`) (Default: `typescript`).
- `-s, --spec <path>` : Override input OpenAPI spec file path (Default: `spec/paystack-enriched.yaml`).
- `-o, --output <path>` : Override target SDK output directory (Default: `packages/typescript`).
- `--skip-build` : Skip compiling generated SDK packages after generation.

---

### 3. `paystack-sdk-gen test`
Launches an in-memory `@stoplight/prism-cli` mock server against `spec/paystack-enriched.yaml` and executes contract integration tests.

```bash
paystack-sdk-gen test [options]
```
**Options:**
- `-p, --port <port>` : Override Prism mock server listening port (Default: `4010`).
- `-s, --spec <path>` : Override OpenAPI spec file used for Prism mock server.

---

### 4. `paystack-sdk-gen extract-templates`
Extracts default OpenAPI Generator Mustache templates so engineers can customize generators for new target languages.

```bash
paystack-sdk-gen extract-templates [options]
```
**Options:**
- `-g, --generator <name>` : OpenAPI Generator generator name (`typescript-axios`, `python`, `go`, `java`, etc.) (Default: `typescript-axios`).
- `-o, --output <path>` : Target directory to extract templates into (Default: `./templates/custom`).

---

## Supported Language Output Matrix

| Language / Target | Generator Flag | Output Directory | Status |
| :--- | :--- | :--- | :--- |
| **TypeScript / JS** | `typescript-axios` | `packages/typescript` | Production Ready & Prism Verified |
| **Python** | `python` | `packages/python` | Template Configured |
| **Go** | `go` | `packages/go` | Template Configured |
| **Java** | `java` | `packages/java` | Template Configured |
| **PHP** | `php` | `packages/php` | Template Configured |
| **C# (.NET)** | `csharp` | `packages/csharp` | Template Configured |
| **Ruby** | `ruby` | `packages/ruby` | Template Configured |
| **Flutter / Dart** | `dart-dio` | `packages/flutter` | Template Configured |
| **Android (Kotlin)**| `kotlin` | `packages/android` | Template Configured |
| **iOS (Swift)** | `swift5` | `packages/ios` | Template Configured |

---

## Internal Engineering & Documentation Guides

- **[INTERNAL_WORKFLOW.md](file:///home/alex-muturi/alex/alex-paystack/paystack-sdk-gen/INTERNAL_WORKFLOW.md)**: Guide for Paystack API engineers on automated cross-repo release webhooks, workflow dispatch options, and registry publishing.
- **[USAGE.md](file:///home/alex-muturi/alex/alex-paystack/paystack-sdk-gen/USAGE.md)**: Comprehensive Developer Integration Guide with code samples, configuration reference, and typed error handling.

---

## License & Assessment Notice

This project was created as part of the DevEx Lead technical assessment at Paystack. It is a proof of concept provided for evaluation purposes.

See [LICENSE](LICENSE) for the assessment terms.
