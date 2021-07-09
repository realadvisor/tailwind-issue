/* eslint-disable */

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './src/**/*.svelte',
      './src/**/*.html',
      './src/**/*.svg',
      // may also want to include base index.html
    ],
    enabled: true, // disable purge in dev
    options: {
      defaultExtractor: content => [
        ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
        ...(content.match(/(?<=class:)[^=>\/\s]*/g) || []),
      ],
      keyframes: true,
    },
  },

  darkMode: false, // or 'media' or 'class'
};
