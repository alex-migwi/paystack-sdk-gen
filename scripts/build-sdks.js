const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const LANGUAGE_CONFIGS = {
  typescript: {
    generator: 'typescript-axios',
    defaultOutput: 'packages/typescript',
    templateDir: 'templates/typescript',
    additionalProperties: 'supportsES6=true,withInterfaces=true,npmName=@alex-paystack/sdk,modelPropertyNaming=camelCase',
    buildCmd: (outDir) => `npm --prefix "${outDir}" run build`,
    buildName: 'TypeScript'
  },
  ts: { alias: 'typescript' },
  python: {
    generator: 'python',
    defaultOutput: 'packages/python',
    templateDir: 'templates/python',
    additionalProperties: 'packageName=paystack_sdk,projectName=paystack-sdk',
    buildCmd: null,
    buildName: 'Python'
  },
  py: { alias: 'python' },
  go: {
    generator: 'go',
    defaultOutput: 'packages/go',
    templateDir: 'templates/go',
    additionalProperties: 'packageName=paystack',
    buildCmd: (outDir) => `cd "${outDir}" && go build ./...`,
    buildName: 'Go'
  },
  java: {
    generator: 'java',
    defaultOutput: 'packages/java',
    templateDir: 'templates/java',
    additionalProperties: 'groupId=com.paystack,artifactId=paystack-sdk',
    buildCmd: null,
    buildName: 'Java'
  },
  php: {
    generator: 'php',
    defaultOutput: 'packages/php',
    templateDir: 'templates/php',
    additionalProperties: 'invokerPackage=Paystack\\SDK,packageName=PaystackSDK',
    buildCmd: null,
    buildName: 'PHP'
  },
  csharp: {
    generator: 'csharp',
    defaultOutput: 'packages/csharp',
    templateDir: 'templates/csharp',
    additionalProperties: 'packageName=Paystack.SDK',
    buildCmd: (outDir) => `cd "${outDir}" && dotnet build`,
    buildName: 'C#'
  },
  dotnet: { alias: 'csharp' },
  ruby: {
    generator: 'ruby',
    defaultOutput: 'packages/ruby',
    templateDir: 'templates/ruby',
    additionalProperties: 'gemName=paystack_sdk',
    buildCmd: null,
    buildName: 'Ruby'
  },
  flutter: {
    generator: 'dart-dio',
    defaultOutput: 'packages/flutter',
    templateDir: 'templates/flutter',
    additionalProperties: 'pubName=paystack_sdk',
    buildCmd: null,
    buildName: 'Flutter (Dart)'
  },
  dart: { alias: 'flutter' },
  android: {
    generator: 'kotlin',
    defaultOutput: 'packages/android',
    templateDir: 'templates/android',
    additionalProperties: 'groupId=com.paystack,artifactId=paystack-android-sdk',
    buildCmd: null,
    buildName: 'Android (Kotlin)'
  },
  kotlin: { alias: 'android' },
  ios: {
    generator: 'swift5',
    defaultOutput: 'packages/ios',
    templateDir: 'templates/ios',
    additionalProperties: 'projectName=PaystackSDK',
    buildCmd: null,
    buildName: 'iOS (Swift)'
  },
  swift: { alias: 'ios' }
};

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

function resolveLangConfig(langArg) {
  const key = (langArg || 'typescript').toLowerCase();
  const entry = LANGUAGE_CONFIGS[key];
  if (!entry) return null;
  if (entry.alias) return LANGUAGE_CONFIGS[entry.alias];
  return entry;
}

function generateSDK(langKey, opts, specPath) {
  const langConfig = resolveLangConfig(langKey);
  if (!langConfig) {
    console.error(`❌ Unsupported language: '${langKey}'. Supported: ${Object.keys(LANGUAGE_CONFIGS).join(', ')}`);
    process.exit(1);
  }

  const outputDir = opts.output ? path.resolve(opts.output) : path.resolve(__dirname, `../${langConfig.defaultOutput}`);
  
  let templateFlag = '';
  const customTemplateDir = path.resolve(__dirname, `../${langConfig.templateDir}`);
  if (fs.existsSync(customTemplateDir)) {
    templateFlag = `-t "${customTemplateDir}" `;
  }

  console.log(`\n==================================================`);
  console.log(`🌐 Building SDK for ${langConfig.buildName} (${langConfig.generator})`);
  console.log(`📦 Spec source: ${specPath}`);
  console.log(`🛠  Templates dir: ${fs.existsSync(customTemplateDir) ? customTemplateDir : 'Default OpenAPI Generator Templates'}`);
  console.log(`🎯 Output target: ${outputDir}`);
  console.log(`==================================================`);

  const command = `npx @openapitools/openapi-generator-cli generate ` +
    `-i "${specPath}" ` +
    `-g ${langConfig.generator} ` +
    `-o "${outputDir}" ` +
    templateFlag +
    `--additional-properties=${langConfig.additionalProperties}`;

  console.log(`\nExecuting Generator Command:\n${command}\n`);

  try {
    execSync(command, { stdio: 'inherit' });
    console.log(`\n✅ ${langConfig.buildName} SDK Generation Completed Successfully!`);

    if (!opts.skipBuild && langConfig.buildCmd) {
      console.log(`🔨 Compiling generated ${langConfig.buildName} SDK...`);
      try {
        execSync(langConfig.buildCmd(outputDir), { stdio: 'inherit' });
        console.log(`✅ Generated ${langConfig.buildName} package compiled successfully!`);
      } catch (buildErr) {
        console.warn(`⚠️ Warning: ${langConfig.buildName} compilation check failed or toolchain not installed.`);
      }
    } else {
      console.log(`⏩ Skipping package compilation for ${langConfig.buildName}.`);
    }
  } catch (err) {
    console.error(`❌ SDK Generation failed for ${langConfig.buildName}:`, err.message);
    process.exit(1);
  }
}

function buildSDKs() {
  const opts = parseArgs();
  console.log('🚀 Starting SDK Generation Pipeline...');

  const DEFAULT_LOCAL_SPEC = path.resolve(__dirname, '../spec/paystack-enriched.yaml');
  let specPath = opts.spec || DEFAULT_LOCAL_SPEC;

  if (!fs.existsSync(specPath)) {
    console.error(`❌ Enriched spec file not found at: ${specPath}. Run 'npx paystack-sdk-gen sync' to retrieve the latest spec.`);
    process.exit(1);
  }

  if (opts.lang.toLowerCase() === 'all') {
    const targets = ['typescript', 'python', 'go', 'java', 'php', 'csharp', 'ruby', 'flutter', 'android', 'ios'];
    for (const target of targets) {
      generateSDK(target, opts, specPath);
    }
  } else {
    generateSDK(opts.lang, opts, specPath);
  }
}

buildSDKs();

