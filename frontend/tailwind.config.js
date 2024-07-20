import colors from 'tailwindcss/colors';

module.exports = {
  content: ['./rsbuild-template/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      public: ['"Nunito Sans", sans-serif'],
      remix: ['remixicon'],
    },
    container: {
      center: true,
    },
    extend: {
      fontSize: {
        sm: '0.8125rem', //13px
        base: '0.875rem', //14px
        15: '0.9375rem', //15px
        16: '1rem', //16px
        'vertical-menu-item-font-size': '0.875rem',
      },
      colors: {
        body: colors.slate[800],
        'body-bg': colors.slate[100],
        'body-bordered': colors.white,

        //sidebar light
        'vertical-menu': colors.white,
        'vertical-menu-border': colors.slate[200],
        'vertical-menu-item': colors.slate[400],
        'vertical-menu-item-hover': colors.blue[500],
        'vertical-menu-item-bg-hover': colors.blue[50],
        'vertical-menu-item-active': colors.blue[500],
        'vertical-menu-item-bg-active': colors.blue[50],
        'vertical-menu-sub-item': colors.slate[400],
        'vertical-menu-sub-item-hover': colors.blue[500],
        'vertical-menu-sub-item-active': colors.blue[500],

        //TOPBAR
        topbar: colors.white,
        'topbar-border': colors.slate[200],
        'topbar-item': colors.slate[700],
        'topbar-item-hover': colors.slate[800],
        'topbar-item-bg-hover': colors.slate[100],

        'topbar-brand': colors.blue[900],
        'topbar-border-brand': colors.blue[800],
        'topbar-item-brand': '#a4bbfd',
        'topbar-item-hover-brand': colors.white,
        'topbar-item-bg-hover-brand': '#224097',

        'topbar-modern': colors.white,

        custom: {
          50: colors.blue[50],
          100: colors.blue[100],
          200: colors.blue[200],
          300: colors.blue[300],
          400: colors.blue[400],
          500: colors.blue[500], // Using Tailwind's color palette
          600: colors.blue[600],
          700: colors.blue[700],
          800: colors.blue[800],
          900: colors.blue[900],
          950: colors.blue[950],
        },
        red: {
          50: colors.red[50],
          100: colors.red[100],
          200: colors.red[200],
          300: colors.red[300],
          400: colors.red[400],
          500: colors.red[500], // Using Tailwind's color palette
          600: colors.red[600],
          700: colors.red[700],
          800: colors.red[800],
          900: colors.red[900],
          950: colors.red[950],
        },
        green: {
          50: '#EAFAF7',
          100: '#D2F4EE',
          200: '#A0E8DB',
          300: '#56D7BF',
          400: '#2DBDA3',
          500: '#249782', // Using Tailwind's color palette
          600: '#208875',
          700: '#1C7767',
          800: '#186355',
          900: '#11463C',
          950: '#0B2D27',
        },

        yellow: {
          50: colors.yellow[50],
          100: colors.yellow[100],
          200: colors.yellow[200],
          300: colors.yellow[300],
          400: colors.yellow[400],
          500: colors.yellow[500], // Using Tailwind's color palette
          600: colors.yellow[600],
          700: colors.yellow[700],
          800: colors.yellow[800],
          900: colors.yellow[900],
          950: colors.yellow[950],
        },

        orange: {
          50: colors.orange[50],
          100: colors.orange[100],
          200: colors.orange[200],
          300: colors.orange[300],
          400: colors.orange[400],
          500: colors.orange[500], // Using Tailwind's color palette
          600: colors.orange[600],
          700: colors.orange[700],
          800: colors.orange[800],
          900: colors.orange[900],
          950: colors.orange[950],
        },

        sky: {
          50: colors.sky[50],
          100: colors.sky[100],
          200: colors.sky[200],
          300: colors.sky[300],
          400: colors.sky[400],
          500: colors.sky[500], // Using Tailwind's color palette
          600: colors.sky[600],
          700: colors.sky[700],
          800: colors.sky[800],
          900: colors.sky[900],
          950: colors.sky[950],
        },

        purple: {
          50: colors.purple[50],
          100: colors.purple[100],
          200: colors.purple[200],
          300: colors.purple[300],
          400: colors.purple[400],
          500: colors.purple[500], // Using Tailwind's color palette
          600: colors.purple[600],
          700: colors.purple[700],
          800: colors.purple[800],
          900: colors.purple[900],
          950: colors.purple[950],
        },
      },
      spacing: {
        header: '4.375rem', // 70px
        'vertical-menu': '16.25rem', // 260px
        'vertical-menu-md': '10.3125rem', // 165px
        'vertical-menu-sm': '4.375rem', // 70px
      },
      maxWidth: {
        boxed: '87.5rem', // 1400px
      },
      minHeight: {
        sm: '1650px', // 1650px
      },
      zIndex: {
        drawer: '1050',
      },
      animation: {
        icons: 'iconsAnimation 50s',
        progress: 'progressAnimation 2s',
      },
      keyframes: {
        iconsAnimation: {
          to: { strokeDashoffset: '500' },
        },
        progressAnimation: {
          '0%': {
            width: '0',
          },
        },
      },
      aspectRatio: {
        '1/1': '1 / 1',
        '4/3': '4 / 3',
        '16/9': '16 / 9',
        '21/9': '21 / 9',
      },
      clipPath: {
        triangle: 'polygon(50% 0%, 0% 100%, 100% 100%)',
      },
    },
  },
  plugins: [require('./plugins/headings.js'), require('./plugins/apps.js')],
};
