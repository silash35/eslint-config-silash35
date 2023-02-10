module.exports = {
  tabWidth: 2,
  useTabs: false,
  printWidth: 100,
  semi: true,
  singleQuote: false,

  plugins: ["prettier-plugin-css-order"],

  overrides: [
    {
      files: ["_document.js"],
      options: {
        printWidth: 200,
      },
    },
  ],
};
