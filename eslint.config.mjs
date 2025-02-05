import pluginJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import globals from 'globals';
import { config, configs as typescriptConfigs } from 'typescript-eslint';

const javascriptPluginConfig = config({
  extends: [pluginJs.configs.recommended],
  rules: normalizeRules({
    'no-useless-rename': 'error',
    'object-shorthand': 'error',
    'prefer-template': 'error',
    'no-useless-concat': 'error',
  }),
});

const stylisticPluginConfig = config({
  extends: [
    stylistic.configs.customize({
      quotes: 'single',
      indent: 2,
      semi: true,
      arrowParens: true,
      quoteProps: 'as-needed',
      braceStyle: '1tbs',
    }),
  ],
  rules: normalizeRules('@stylistic', {
    'linebreak-style': 'unix',
    'no-extra-parens': 'all',
    'no-extra-semi': 'error',
    'padded-blocks': 'off',
  }),
});

const typescriptPluginConfig = config({
  files: ['**/*.ts'],
  extends: [
    typescriptConfigs.strictTypeChecked,
    typescriptConfigs.stylisticTypeChecked,
  ],
  languageOptions: { parserOptions: { projectService: true, tsconfigRootDir: process.cwd() } },
  rules: normalizeRules('@typescript-eslint', {
    'no-explicit-any': 'off',
  }),
});

export default config(
  {
    files: ['**/*.{js,cjs,mjs,ts}'],
    ignores: ['dist', 'coverage'],
    extends: [
      javascriptPluginConfig,
      stylisticPluginConfig,
    ],
    languageOptions: { globals: { ...globals.node, ...globals.browser } },
  },
  typescriptPluginConfig,
);

function normalizeRuleEntry(entry) {
  if (Array.isArray(entry)) return entry;
  if (['error', 'warn', 'off'].includes(entry)) return entry;
  return ['error', entry];
}

function createPluginRuleNameNormalizer(pluginName) {
  const pluginPrefix = `${pluginName}/`;
  return (ruleName) => {
    if (ruleName.startsWith(pluginPrefix)) return ruleName;
    return `${pluginPrefix}${ruleName}`;
  };
}

function createEntryNormalizer(pluginName) {
  if (!pluginName) return ([ruleName, ruleEntry]) => [ruleName, normalizeRuleEntry(ruleEntry)];
  const normalizeRuleName = createPluginRuleNameNormalizer(pluginName);
  return ([ruleName, ruleEntry]) => [normalizeRuleName(ruleName), normalizeRuleEntry(ruleEntry)];
}

function normalizeRules(pluginName, rules) {
  if (!rules && pluginName) return normalizeRules(null, pluginName);
  const normalizeEntry = createEntryNormalizer(pluginName);
  return Object.fromEntries(Object.entries(rules).map(normalizeEntry));
}
