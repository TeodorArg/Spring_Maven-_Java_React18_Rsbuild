const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents }) {
  addComponents({
    '.card': {
      '@apply shadow-md rounded-md shadow-slate-200 border-0 mb-5 border-transparent bg-white shadow-sm border border-slate-200 shadow-lg !shadow-slate-100 border':
        {},

      '.card-body': {
        '@apply p-5': {},
      },
    },
  });
});
