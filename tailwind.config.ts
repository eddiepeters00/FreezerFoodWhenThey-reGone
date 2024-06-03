import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    //@ts-ignore
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-inset': {
          position: 'relative',
          color: '#8b5cf6',
          'background-clip': 'text',
          'text-shadow': '4px 4px 4px rgba(0, 0, 0, 0.25)',
          '&::before': {
            content: '"Freezer Food when They\'re Gone"',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            color: 'black',
            'background-clip': 'text',
            'text-shadow': 'none',
            filter: 'blur(4px)',
            opacity: '0.4',
            zIndex: '1',
          }
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};

export default config;
