import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}", "./node_modules/@packages/ui/**/*.{html,js,svelte,ts}",
	],
	safelist: ["dark"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},  
		extend: {

			colors: {
				gray: {
					50: '#F8FAF9',
					100: '#E5ECEA',
					200: '#C7D3D1',
					300: '#A8B9B8',
					400: '#8A9F9E',
					500: '#6B8584',
					600: '#4D6B6A',
					700: '#2E5150',
					800: '#103736',
					900: '#001D1C',
					950: '#001010'
				},
				border: "hsl(var(--border) / <alpha-value>)",
				input: "hsl(var(--input) / <alpha-value>)",
				ring: "hsl(var(--ring) / <alpha-value>)",
				background: "hsl(var(--background) / <alpha-value>)",
				foreground: "hsl(var(--foreground) / <alpha-value>)",
				primary: {
					DEFAULT: "hsl(var(--primary) / <alpha-value>)",
					foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
					foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
					foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
				},
				muted: {
					DEFAULT: "hsl(var(--muted) / <alpha-value>)",
					foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
				},
				accent: {
					DEFAULT: "hsl(var(--accent) / <alpha-value>)",
					foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
				},
				popover: {
					DEFAULT: "hsl(var(--popover) / <alpha-value>)",
					foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
				},
				card: {
					DEFAULT: "hsl(var(--card) / <alpha-value>)",
					foreground: "hsl(var(--card-foreground) / <alpha-value>)"
				},
				inverted: {
					DEFAULT: "hsl(var(--inverted) / <alpha-value> )",
					foreground: "hsl(var(--inverted-foreground) / <alpha-value>)"
				},
				elevated: {
					DEFAULT: "hsl(var(--elevated) / <alpha-value>)",
					foreground: "hsl(var(--elevated-foreground) / <alpha-value>)"
				}
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			fontFamily: {
				serif: ['Lora Variable', 'sans-serif'],
				sans: [
					"Nunito",
					...fontFamily.sans
				],

			}
		}
	}, plugins: [tailwindcssAnimate]
};

export default config;
