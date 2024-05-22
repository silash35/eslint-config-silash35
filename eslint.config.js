import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";
import tseslint from "typescript-eslint";

import nextConfig from "./configs/next.js";
import reactConfig from "./configs/react.js";
import reactQueryConfig from "./configs/react-query.js";
import simpleImportSortConfig from "./configs/simple-import-sort.js";

export default [
  {
    ignores: ["**/node_modules/", "**/.next/", "**/.dist/", ".git/"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...reactConfig,
  ...nextConfig,
  reactQueryConfig,
  simpleImportSortConfig,
  prettierConfig,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "spaced-comment": "error",
    },
  },
];
