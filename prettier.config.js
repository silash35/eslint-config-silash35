/** @type {import("prettier").Config} */

const prettierConfig = {
  printWidth: 100,

  plugins: ["prettier-plugin-css-order", "prettier-plugin-tailwindcss"],
  tailwindFunctions: ["tv"],

  overrides: [
    {
      files: ["pnpm-lock.yaml"],
      options: { requirePragma: true },
    },
  ],
};

export default prettierConfig;
