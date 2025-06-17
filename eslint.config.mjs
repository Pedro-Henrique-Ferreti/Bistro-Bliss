// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    'vue/block-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
    'vue/no-v-html': 'off',
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
});
