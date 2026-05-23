/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Palette chaude et accueillante
        warm: {
          50: '#fdfbf7',
          100: '#faf6ed',
          200: '#f3ebda',
          300: '#e8dcc2',
          400: '#d4c4a1',
          500: '#c2ad84',
          600: '#b09968',
          700: '#96794d',
          800: '#7a6241',
          900: '#5c4a33',
          950: '#3d3022',
        },
        // Accent cuivré/bronze pour la chaleur
        copper: {
          50: '#fdf8f6',
          100: '#f9ebe5',
          200: '#f3d5c8',
          300: '#e8b8a3',
          400: '#d9927a',
          500: '#c97b5d',
          600: '#b5624a',
          700: '#97503d',
          800: '#7c4336',
          900: '#673a30',
          950: '#381c17',
        },
        cream: '#fdfbf7',
        sand: '#f5f0e6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'warm': '0 4px 20px -2px rgba(185, 150, 100, 0.15)',
        'warm-lg': '0 10px 40px -5px rgba(185, 150, 100, 0.2)',
        'warm-xl': '0 20px 50px -10px rgba(185, 150, 100, 0.25)',
        'warm-2xl': '0 25px 60px -12px rgba(185, 150, 100, 0.3)',
        'glow': '0 0 30px rgba(201, 123, 93, 0.15)',
        'glow-lg': '0 0 50px rgba(201, 123, 93, 0.2)',
        'inner-warm': 'inset 0 2px 4px 0 rgba(185, 150, 100, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.7s ease-out forwards',
        'slide-in-right': 'slideInRight 0.7s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      typography: ({ theme }) => ({
        warm: {
          css: {
            '--tw-prose-body': theme('colors.warm[800]'),
            '--tw-prose-headings': theme('colors.warm[900]'),
            '--tw-prose-lead': theme('colors.warm[700]'),
            '--tw-prose-links': theme('colors.copper[600]'),
            '--tw-prose-bold': theme('colors.warm[900]'),
            '--tw-prose-counters': theme('colors.warm[600]'),
            '--tw-prose-bullets': theme('colors.copper[400]'),
            '--tw-prose-hr': theme('colors.warm[200]'),
            '--tw-prose-quotes': theme('colors.warm[900]'),
            '--tw-prose-quote-borders': theme('colors.copper[400]'),
            '--tw-prose-captions': theme('colors.warm[600]'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
