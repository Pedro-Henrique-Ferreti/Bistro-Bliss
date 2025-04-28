import { globalIgnores } from 'eslint/config';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import pluginVue from 'eslint-plugin-vue';
import stylistic from '@stylistic/eslint-plugin';

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },
  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),
  vueTsConfigs.recommendedTypeChecked,
  vueTsConfigs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  stylistic.configs.customize({
    semi: true,
  }),
  ...pluginVue.configs['flat/recommended'],
  {
    rules: {
      'vue/block-order': ['error', {
        order: ['template', 'script', 'style'],
      }],
      'vue/html-self-closing': 'error',
      'vue/attributes-order': ['error', {
        order: [
          'LIST_RENDERING',
          'CONDITIONALS',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'CONTENT',
          'RENDER_MODIFIERS',
          ['DEFINITION', 'GLOBAL', 'UNIQUE', 'SLOT', 'OTHER_ATTR'],
          'EVENTS',
        ],
        alphabetical: false,
      }],
    },
  },
);
