import eslint from "@eslint/js";
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    {
      ignores: [
        "dist/**/*",
        "**/*.mjs",
        "eslint.config.mjs",
        "vite.config.ts",
        "tailwind.config.mjs",
        "postcss.config.cjs",
        "vite-env.d.ts",
      ],
    },
    {
      rules: {
        "@typescript-eslint/no-unnecessary-condition": "warn",
        "@typescript-eslint/no-unnecessary-type-assertion": "warn",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            "varsIgnorePattern": "^_"
          }
        ],
        "@typescript-eslint/no-misused-promises": [
          "error",
          {
            "checksVoidReturn": false
          }
        ]

      },
    },
    {
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir: import.meta.dirname,
        },
      },
    },
);
