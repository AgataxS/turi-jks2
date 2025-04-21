module.exports = {
    env: { browser: true, es2021: true },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "prettier"
    ],
    parserOptions: { ecmaVersion: 2021, sourceType: "module" },
    settings: { react: { version: "detect" } },
    rules: { "react/prop-types": "off" }
  };
  