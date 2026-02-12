import type { Config } from 'tailwindcss';

export default {
  theme: {
    extend: {
      colors: {
        gold: 'oklch(0.828 0.189 84.429)',
        primary: 'oklch(0.828 0.189 84.429)', // Gold as primary accent
        accent: 'oklch(0.828 0.189 84.429)', // Gold as accent
      },
    },
  },
} satisfies Config;
