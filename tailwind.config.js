/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
import { tailwindPresets } from '@bloom-ui/configs';

export default {
  content: [
    './src/*.{js,jsx,ts,tsx}',
    './node_modules/@bloom-ui/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [tailwindPresets],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'showItem': 'showItem 0s linear 0.8s forwards'

      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'showItem': {
          "0%": {
            opacity: 0
          },
          "99%": {
            opacity: 0
          },
          "100%": {
            opacity: 1
          }
        },
        'pulseItem': {
          "0%": {
            transform: "scale(1)"
          },
          "50%": {
            transform: "scale(1.35)"
          },
          "100%": {
            transform: "scale(1)"
          }
        },
        'growUp': {
          "0%": {
            transform: "scale(1)"
          },
          "100%": {
            transform: "scale(1.15)"
          }
        },
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 100%)',
      }
    },
  },
};
