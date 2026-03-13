module.exports = {
  // ...

  theme: {
    extend: {
      colors: {
        brand: {
          50: "rgb(250 250 250)",
          100: "rgb(245 245 245)",
          200: "rgb(235 235 235)",
          300: "rgb(212 212 212)",
          400: "rgb(163 163 163)",
          500: "rgb(115 115 115)",
          600: "rgb(82 82 82)",
          700: "rgb(64 64 64)",
          800: "rgb(38 38 38)",
          900: "rgb(23 23 23)",
        },
        neutral: {
          0: "rgb(255 255 255)",
          50: "rgb(250 250 250)",
          100: "rgb(245 245 245)",
          200: "rgb(229 229 229)",
          300: "rgb(212 212 212)",
          400: "rgb(163 163 163)",
          500: "rgb(115 115 115)",
          600: "rgb(82 82 82)",
          700: "rgb(64 64 64)",
          800: "rgb(38 38 38)",
          900: "rgb(23 23 23)",
          950: "rgb(10 10 10)",
        },
        error: {
          50: "rgb(250 245 245)",
          100: "rgb(245 237 237)",
          200: "rgb(235 220 220)",
          300: "rgb(220 195 195)",
          400: "rgb(200 165 165)",
          500: "rgb(180 135 135)",
          600: "rgb(160 110 110)",
          700: "rgb(140 90 90)",
          800: "rgb(120 75 75)",
          900: "rgb(100 60 60)",
        },
        warning: {
          50: "rgb(252 251 248)",
          100: "rgb(248 246 240)",
          200: "rgb(240 236 225)",
          300: "rgb(225 218 200)",
          400: "rgb(205 195 170)",
          500: "rgb(185 172 140)",
          600: "rgb(160 145 115)",
          700: "rgb(135 120 95)",
          800: "rgb(110 98 80)",
          900: "rgb(90 80 65)",
        },
        success: {
          50: "rgb(248 251 249)",
          100: "rgb(242 247 243)",
          200: "rgb(230 240 233)",
          300: "rgb(210 225 215)",
          400: "rgb(185 205 190)",
          500: "rgb(160 185 165)",
          600: "rgb(135 160 140)",
          700: "rgb(110 135 115)",
          800: "rgb(90 110 95)",
          900: "rgb(75 90 80)",
        },
        "brand-primary": "rgb(82 82 82)",
        "default-font": "rgb(23 23 23)",
        "subtext-color": "rgb(115 115 115)",
        "neutral-border": "rgb(229 229 229)",
        white: "rgb(255 255 255)",
        "default-background": "rgb(255 255 255)",
      },
      fontSize: {
        caption: [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "400",
            letterSpacing: "0em",
          },
        ],
        "caption-bold": [
          "12px",
          {
            lineHeight: "16px",
            fontWeight: "500",
            letterSpacing: "0em",
          },
        ],
        body: [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400",
            letterSpacing: "0em",
          },
        ],
        "body-bold": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "500",
            letterSpacing: "0em",
          },
        ],
        "heading-3": [
          "16px",
          {
            lineHeight: "20px",
            fontWeight: "600",
            letterSpacing: "0em",
          },
        ],
        "heading-2": [
          "20px",
          {
            lineHeight: "24px",
            fontWeight: "600",
            letterSpacing: "0em",
          },
        ],
        "heading-1": [
          "30px",
          {
            lineHeight: "36px",
            fontWeight: "500",
            letterSpacing: "0em",
          },
        ],
        "monospace-body": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "400",
            letterSpacing: "0em",
          },
        ],
      },
      fontFamily: {
        caption: "Inter",
        "caption-bold": "Inter",
        body: "Inter",
        "body-bold": "Inter",
        "heading-3": "Inter",
        "heading-2": "Inter",
        "heading-1": "Inter",
        "monospace-body": "monospace",
      },
      boxShadow: {
        sm: "0px 1px 2px 0px rgb(0 0 0 / 0.04)",
        default: "0px 1px 2px 0px rgb(0 0 0 / 0.04)",
        md: "0px 2px 8px -2px rgb(0 0 0 / 0.06), 0px 1px 3px -1px rgb(0 0 0 / 0.04)",
        lg: "0px 8px 24px -4px rgb(0 0 0 / 0.08), 0px 3px 6px -2px rgb(0 0 0 / 0.05)",
        overlay:
          "0px 8px 24px -4px rgb(0 0 0 / 0.08), 0px 3px 6px -2px rgb(0 0 0 / 0.05)",
      },
      borderRadius: {
        sm: "2px",
        md: "4px",
        DEFAULT: "4px",
        lg: "8px",
        full: "9999px",
      },
      container: {
        padding: {
          DEFAULT: "16px",
          sm: "calc((100vw + 16px - 640px) / 2)",
          md: "calc((100vw + 16px - 768px) / 2)",
          lg: "calc((100vw + 16px - 1024px) / 2)",
          xl: "calc((100vw + 16px - 1280px) / 2)",
          "2xl": "calc((100vw + 16px - 1536px) / 2)",
        },
      },
      spacing: {
        112: "28rem",
        144: "36rem",
        192: "48rem",
        256: "64rem",
        320: "80rem",
      },
      screens: {
        mobile: {
          max: "767px",
        },
      },
    },
  },
};
