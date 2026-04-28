import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tselint from 'typescript-eslint';
import nextVitals from 'eslint-config-next/core-web-vitals';
import sanityConfig from '@sanity/eslint-config-studio';
import unusedImports from 'eslint-plugin-unused-imports';

const eslintConfig = tselint.config([
   js.configs.recommended,
   ...tselint.configs.recommended,
    ...nextVitals,
    {
        plugins: {
            'unused-imports': unusedImports,
        }
    },
    {
        files: ['studio/**/*.{ts,tsx,js,jsx}'],
        ...sanityConfig,
    },
    {
        rules: {
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
        }
    },
    {
        ignores: [
            '.next/**',
            'dist/**',
            'build/**',
            'out/**',
            'coverage/**',
            'node_modules/**',
            'public/**',
            'next-env.d.ts',
        ],
    },
])

export default eslintConfig;