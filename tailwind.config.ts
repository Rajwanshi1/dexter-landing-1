import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        black: {
          1000: '#FFFFFF',
          900: '#BBC9E2',
        },
        green: {
          100: '#e6f3ed',
          200: '#93FF05',
          500: '#041600',
        },
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '100',
          },
        },
        'fade-out': {
          '0%': {
            opacity: '100',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
      animation: {
        fadeIn: 'fade-in 0.5s ease-in-out',
        fadeOut: 'fade-out 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
} satisfies Config;
