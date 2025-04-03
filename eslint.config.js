import tseslint from "typescript-eslint";
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  files: ['src/**/*.{ts,tsx}'],
  extends: [
    ...tseslint.configs.recommendedTypeChecked, // use strictTypeChecked if you want max strictness
  ],
  plugins: {
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
  languageOptions: {
    parserOptions: {
      project: true,
      project: ["./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
