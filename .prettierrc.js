/** @type {import("prettier").Config} */

export default {
  tabWidth: 2,
  useTabs: false,
  printWidth: 100,
  semi: true,
  singleQuote: false,

  plugins: ["prettier-plugin-css-order", "prettier-plugin-tailwindcss"],
  tailwindFunctions: ["tv"],

  overrides: [
    {
      files: ["_document.js"],
      options: {
        printWidth: 200,
      },
    },
  ],
};
