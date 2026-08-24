# 🏢 Paystack Internal Engineering Guide: SDK Generation Pipeline

This document explains how internal engineering teams at Paystack consume, run, and automate `paystack-sdk-gen` to generate production-ready SDKs on the go.

---

## 🎯 Decoupled Spec Storage Architecture

`paystack-sdk-gen` strictly maintains its own local copy of the spec in `spec/paystack-enriched.yaml`.

- **Zero In-Script Network Calls**: No Node.js script inside `paystack-sdk-gen` (`sync-spec.js`, `build-sdks.js`, `test-sdks.js`, CLI) makes HTTP calls or references remote GitHub repositories.
- **Single Remote Retrieval Runner**: The GitHub Actions runner (`.github/workflows/auto-build-sdks.yml`) is the sole component that retrieves spec updates over HTTPS via `curl` and updates `spec/paystack-enriched.yaml`.

```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│                            DECOUPLED CI/CD RELEASE WORKFLOW                           │
└──────────────────────────────────────────────────────────────────────────────────────┘

  1. New Spec Release Tag           2. Remote Webhook Event          3. Workflow Execution
 ┌───────────────────────────┐       ┌───────────────────────┐       ┌───────────────────────┐
 │ paystack-spec-enriched    │  ───► │ repository_dispatch   │  ───► │ .github/workflows/    │
 │ publishes a spec release  │       │ enriched-spec-updated │       │ auto-build-sdks.yml   │
 └───────────────────────────┘       └───────────────────────┘       │ downloads via curl    │
                                                                     └───────────┬───────────┘
                                                                                 │ Saves to spec/
                                                                                 ▼
                                                                     ┌───────────────────────┐
                                                                     │ Local Spec Copy       │
                                                                     │ spec/paystack-        │
                                                                     │ enriched.yaml         │
                                                                     └───────────┬───────────┘
                                                                                 │ Reads locally
                                                                                 ▼
                                                                     ┌───────────────────────┐
                                                                     │ paystack-sdk-gen      │
                                                                     │ generates & compiles  │
                                                                     │ thick-client SDKs     │
                                                                     └───────────┬───────────┘
                                                                                 │
                                                               4. Package Release│
                                                                                 ▼
                                                           ┌─────────────────────────┐
                                                           │ • NPM: @paystack/sdk    │
                                                           │ • PyPI: paystack-sdk    │
                                                           │ • Go: github.com/pay... │
                                                           └─────────────────────────┘
```

---

## 🤖 1. Automated Spec Acquisition & Build Pipeline

When a new release of `paystack-spec-enriched` occurs:

1. **GitHub Dispatch Trigger (`repository_dispatch`)**:
   - `paystack-spec-enriched` emits a `repository_dispatch` event named `enriched-spec-updated`.

2. **Automated Spec Retrieval & Generation**:
   - GitHub Action step downloads `paystack-enriched.yaml` over HTTPS into `spec/paystack-enriched.yaml`.
   - Node.js generator engine reads `spec/paystack-enriched.yaml` and re-generates SDK packages.
   - Executes Prism Mock Server validation tests (`npx paystack-sdk-gen test`).
   - Auto-commits updated spec files and generated packages.

---

## 🎛 2. Manual Workflow Dispatch & Options

Internal engineers can manually trigger spec acquisition and SDK generation via GitHub Actions UI (`workflow_dispatch`) with custom options:

| Input Parameter | Type | Default | Description |
| :--- | :---: | :---: | :--- |
| **`auto_generate`** | `boolean` | `true` | When set to `false`, downloads and updates `spec/paystack-enriched.yaml` without compiling new SDKs. |
| **`target_languages`**| `string` | `typescript` | Comma-separated target languages (`typescript`, `python`, `go`, `all`). |
| **`spec_url`** | `string` | *(GitHub Raw URL)* | Remote URL override for downloading spec release. |

---

## 💻 3. Local On-Demand Development Workflow

Internal developers can also run the generator CLI locally operating strictly on `spec/paystack-enriched.yaml`:

```bash
# 1. Verify local spec copy and trigger generation + Prism testing
npx paystack-sdk-gen sync

# 2. Generate specific target language SDKs from local spec copy
npx paystack-sdk-gen generate --lang typescript,python

# 3. Verify generated SDKs against local Prism Mock Server
npx paystack-sdk-gen test
```
