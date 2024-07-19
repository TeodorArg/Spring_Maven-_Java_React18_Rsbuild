const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addComponents }) {
  addComponents({
    '.card': {
      '@apply shadow-md rounded-md shadow-slate-200 border-0 mb-5 border-transparent bg-white group-data-[skin=bordered]:shadow-sm group-data-[skin=bordered]:border group-data-[skin=bordered]:border-slate-200 group-data-[skin=bordered]:shadow-lg group-data-[skin=bordered]:!shadow-slate-100 group-data-[skin=bordered]:border':
        {},

      '.card-body': {
        '@apply p-5': {},
      },
    },
  });
});
