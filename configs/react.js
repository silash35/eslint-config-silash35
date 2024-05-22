import { fixupConfigRules } from "@eslint/compat";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";

export default [
  ...fixupConfigRules(reactRecommended),
  {
    rules: {
      "react/prop-types": "error",
      "react/react-in-jsx-scope": "off",
      "react/jsx-fragments": "error",
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      "react/jsx-sort-props": [
        "error",
        {
          shorthandLast: true,
          multiline: "first",
        },
      ],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
