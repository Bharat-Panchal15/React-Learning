import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

// Optional - Trick to be able to do auto-completions on the config object. Super helpful to have the types available right in VS Code. It's not required.
/** @type {import('eslint').Linter.Config[]} */
export default [
    js.configs.recommended,
    {
        files: ["**/*.js", "**/*.jsx"],
        languageOptions: {
            globals: { ...globals.browser, ...globals.node },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                }
            }
        }
    },
    prettier,
];