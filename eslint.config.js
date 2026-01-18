import eslint from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import prettier from "eslint-config-prettier/flat";
import tseslint from "typescript-eslint";

import nextConfig from "./configs/next.js";
import queryConfig from "./configs/query.js";
import reactConfig from "./configs/react.js";
import simpleImportSortConfig from "./configs/simple-import-sort.js";

export default defineConfig([
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  ...reactConfig,
  ...queryConfig,
  ...nextConfig,
  ...simpleImportSortConfig,
  prettier,
  {
    rules: {
      "spaced-comment": "error",
    },
  },
  globalIgnores(["node_modules/", ".next/", "out/", "build/", "next-env.d.ts", "dist/", ".git/"]),
]);
