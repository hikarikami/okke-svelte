import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
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
				tangerine: {
                    50: '#fff4f1',
                    100: '#ffe7e1',
                    200: '#ffd3c7',
                    300: '#ffb4a0',
                    400: '#ff8c6e',
                    500: '#f8623b',
                    600: '#e5441f',
                    700: '#c23414',
                    800: '#9b2912',
                    900: '#621302',
                },
                lavender: {
                    50: '#f9f5ff',
                    100: '#f2e8ff',
                    200: '#e7d6fe', 
                    300: '#d4b5fd',
                    400: '#b47dfa',
                    500: '#9f57f5',
                    600: '#8836e7',
                    700: '#7424cc',
                    800: '#6323a6',
                    900: '#521d86',
                },
                midnight: {
                    50: '#9283a5',
                    100: '#857a93',
                    200: '#746885',
                    300: '#645875',
                    400: '#554867',
                    500: '#453659',
                    600: '#33214d',
                    700: '#261340',
                    800: '#1b0a32',
                    900: '#120228',
                },
                colbert: {
                    50: '#FCFCFD',
                    100: '#F6F5F9',
                    200: '#ECECF3',
                    300: '#E1E2EA',
                    400: '#C7C8D3',
                    500: '#838498',
                    600: '#575766',
                    700: '#2E2F3D',
                    800: '#232330',
                    900: '#121224',
                },
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)"
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			}
		}
	},
};

export default config;
