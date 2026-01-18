import pluginQuery from "@tanstack/eslint-plugin-query";

const queryConfig = [
  {
    plugins: {
      "@tanstack/query": pluginQuery,
    },
    rules: {
      "@tanstack/query/exhaustive-deps": "error",
      "@tanstack/query/no-rest-destructuring": "warn",
      "@tanstack/query/stable-query-client": "error",
    },
  },
];

export default queryConfig;
