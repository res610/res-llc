import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                body: {
                    bg: "var(--color-body-bg)",
                    text: "var(--color-body-text)",
                },
                hero: {
                    bg: "var(--color-hero-bg)",
                    text: "var(--color-hero-text)",
                    sub: "var(--color-hero-sub)",
                },
                section: {
                    bg: "var(--color-section-bg)",
                    "bg-alt": "var(--color-section-bg-alt)",
                    text: "var(--color-section-text)",
                    sub: "var(--color-section-sub)",
                    muted: "var(--color-section-muted)",
                },
                card: {
                    bg: "var(--color-card-bg)",
                    text: "var(--color-card-text)",
                },
                accent: {
                    DEFAULT: "var(--color-accent)",
                    hover: "var(--color-accent-hover)",
                },
                footer: {
                    bg: "var(--color-footer-bg)",
                    text: "var(--color-footer-text)",
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
export default config;
