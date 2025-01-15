import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import securityPlugin from "eslint-plugin-security";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      globals: globals.node,
    },
    plugins: {
      security: securityPlugin,
    },
    rules: {
      "security/detect-object-injection": "warn", // Warn about object injection
      "no-console": "off", // Allow console statements for debugging
      "no-process-exit": "warn", // Discourage process.exit usage
      "prefer-const": "error", // Enforce const usage for non-reassignable variables
      "no-unused-vars": "warn", // Ignore unused variables prefixed with _
      "consistent-return": "error", // Ensure consistent return statements
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
