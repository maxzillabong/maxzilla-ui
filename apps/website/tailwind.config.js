/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'hsl(180, 100%, 97%)',
          100: 'hsl(180, 84%, 92%)',
          200: 'hsl(180, 83%, 84%)',
          300: 'hsl(180, 82%, 72%)',
          400: 'hsl(180, 76%, 58%)',
          500: 'hsl(180, 70%, 45%)',
          600: 'hsl(180, 75%, 37%)',
          700: 'hsl(180, 79%, 30%)',
          800: 'hsl(180, 82%, 25%)',
          900: 'hsl(180, 86%, 20%)',
          950: 'hsl(180, 92%, 12%)',
        },
        neutral: {
          0: 'hsl(0, 0%, 100%)',
          50: 'hsl(210, 20%, 98%)',
          100: 'hsl(220, 14%, 96%)',
          200: 'hsl(220, 13%, 91%)',
          300: 'hsl(216, 12%, 84%)',
          400: 'hsl(218, 11%, 65%)',
          500: 'hsl(220, 9%, 46%)',
          600: 'hsl(215, 14%, 34%)',
          700: 'hsl(217, 19%, 27%)',
          800: 'hsl(215, 28%, 17%)',
          900: 'hsl(221, 39%, 11%)',
          950: 'hsl(224, 71%, 4%)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow': {
          '0%': { boxShadow: '0 0 5px rgb(6 182 212 / 0.5)' },
          '100%': { boxShadow: '0 0 20px rgb(6 182 212 / 0.8), 0 0 30px rgb(6 182 212 / 0.4)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': "url(\"data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%239C92AC' fill-opacity='0.05'%3e%3ccircle cx='30' cy='30' r='4'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e\")",
      },
    },
  },
  plugins: [],
}