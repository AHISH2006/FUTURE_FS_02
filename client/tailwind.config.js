/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🎮 Gaming Theme Colors
        gamingDark: 'var(--color-gaming-dark)',
        gamingGray: 'var(--color-gaming-gray)',
        gamingLightGray: 'var(--color-gaming-light-gray)',

        // 🌈 Neon Theme Colors
        neonPurple: 'var(--color-neon-purple)',
        neonPink: 'var(--color-neon-pink)',
        neonCyan: 'var(--color-neon-cyan)',
      },

      boxShadow: {
        // 🌟 Neon Shadows
        'neon-blue': '0 0 10px var(--color-neon-cyan), inset 0 0 10px var(--color-neon-cyan)',
        'neon-purple': '0 0 10px var(--color-neon-purple), inset 0 0 10px var(--color-neon-purple)',
      },

      dropShadow: {
        // 💡 Neon Glow for Icons
        'neon': '0 0 8px var(--color-neon-cyan), 0 0 16px var(--color-neon-cyan), 0 0 24px var(--color-neon-cyan)',
      },

      keyframes: {
        // 🎬 Animations
        'navbar-fade-in': {
          '0%': { opacity: '0', transform: 'translateY(-100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fadeIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slideUp': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'bounceIn': {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '60%': { transform: 'scale(1.1)', opacity: '1' },
          '80%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        'pulse': {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
      },

      animation: {
        // 🎞️ Animation Utilities
        'navbar-fade-in': 'navbar-fade-in 1s ease-out forwards',
        'fadeIn': 'fadeIn 1.5s ease-out',
        'slideUp': 'slideUp 1s ease-out 0.5s both',
        'bounceIn': 'bounceIn 0.8s ease-out 1s both',
        'spin-slow': 'spin 5s linear infinite', // custom slow spin
        'pulse': 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
