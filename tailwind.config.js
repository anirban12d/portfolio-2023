/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;
const hexToRgb = (hex) => {
  hex = hex.replace("#", "");
  hex = hex.length === 3 ? hex.replace(/./g, "$&$&") : hex;
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `${r} ${g} ${b}`;
};

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "class",
  theme: {
    fontSize: {
      xs: ["2.4rem", { lineHeight: "2.2rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
      9: ["0.9rem", { lineHeight: "150%" }],
      11: ["1.1rem", { lineHeight: "150%" }],
      12: ["1.2rem", { lineHeight: "150%" }],
      13: ["1.3rem", { lineHeight: "150%" }],
      15: ["1.5rem", { lineHeight: "150%" }],
      16: ["1.6rem", { lineHeight: "150%" }],
      19: ["1.9rem", { lineHeight: "150%" }],
      21: ["2.1rem", { lineHeight: "150%" }],
      23: ["2.3rem", { lineHeight: "150%" }],
      24: ["2.4rem", { lineHeight: "90%" }],
      27: ["2.7rem", { lineHeight: "120%" }],
      28: ["2.8rem", { lineHeight: "150%" }],
      33: ["3.3rem", { lineHeight: "120%" }],
      36: ["3.6rem", { lineHeight: "120%" }],
      40: ["4rem", { lineHeight: "100%" }],
      47: ["4.7rem", { lineHeight: "90%" }],
      48: ["4.8rem", { lineHeight: "90%" }],
      57: ["5.7rem", { lineHeight: "90%" }],
      61: ["6.1rem", { lineHeight: "90%" }],
      69: ["6.9rem", { lineHeight: "90%" }],
      80: ["8rem", { lineHeight: "90%" }],
      105: ["10.5rem", { lineHeight: "90%" }],
      138: ["13.8rem", { lineHeight: "90%" }],
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      tight: "1.2",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      3: ".75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      90: "90%",
      100: "100%",
      150: "150%",
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em",
      low: "-0.06em",
    },
    screens: {
      sx: "375px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },

    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#ffffff",
        secondary: "#000000",
        bgColor: "#242729",
        textColor: "#3f3f3f",
        backColor: "#E9ECEF",
        backColor2: "#dee2e6",
        blue: "#1771D1",
        grey: "#F4F4F4",
        modal: "#3f3f3f",
        ...defaultTheme.colors,
      },

      typography: () => ({
        DEFAULT: {
          css: {
            'div[data-node-type="callout"]': {
              display: "flex",
              "justify-content": "flex-start",
              "align-items": "flex-start",
              "background-color": "#F8FAFC",
              border: "1px solid #E2E8F0",
              padding: " 1rem 1.5rem",
              gap: "0.5rem",
              "border-radius": "0.5rem",
              margin: "1rem 0",
              "word-break": "break-word",
            },
            'div[data-node-type="callout-emoji"]': {
              background: "#E2E8F0",
              "border-radius": "0.5rem",
              minWidth: "1.75rem",
              width: "1.75rem",
              height: "1.5rem",
              display: "flex",
              "margin-top": "0.3rem",
              "justify-content": "center",
              "align-items": "center",
              "font-size": "1rem",
            },
          },
        },

        "2xl": {
          css: [
            {
              fontSize: rem(28),
              lineHeight: round(40 / 24),
              p: {
                marginTop: em(32, 24),
                marginBottom: em(32, 24),
              },
              '[class~="lead"]': {
                fontSize: em(30, 24),
                lineHeight: round(44 / 30),
                marginTop: em(32, 30),
                marginBottom: em(32, 30),
              },
              blockquote: {
                marginTop: em(64, 36),
                marginBottom: em(64, 36),
                paddingInlineStart: em(40, 36),
              },
              h1: {
                fontSize: em(64, 24),
                marginTop: "0",
                marginBottom: em(56, 64),
                lineHeight: round(64 / 64),
              },
              h2: {
                fontSize: em(48, 24),
                marginTop: em(72, 48),
                marginBottom: em(40, 48),
                lineHeight: round(52 / 48),
              },
              h3: {
                fontSize: em(36, 24),
                marginTop: em(56, 36),
                marginBottom: em(24, 36),
                lineHeight: round(44 / 36),
              },
              h4: {
                marginTop: em(40, 24),
                marginBottom: em(16, 24),
                lineHeight: round(36 / 24),
              },
              img: {
                marginTop: em(48, 24),
                marginBottom: em(48, 24),
              },
              picture: {
                marginTop: em(48, 24),
                marginBottom: em(48, 24),
              },
              "picture > img": {
                marginTop: "0",
                marginBottom: "0",
              },
              video: {
                marginTop: em(48, 24),
                marginBottom: em(48, 24),
              },
              kbd: {
                fontSize: em(20, 24),
                borderRadius: rem(6),
                paddingTop: em(6, 24),
                paddingInlineEnd: em(8, 24),
                paddingBottom: em(6, 24),
                paddingInlineStart: em(8, 24),
              },
              code: {
                fontSize: em(20, 24),
              },
              "h2 code": {
                fontSize: em(42, 48),
              },
              "h3 code": {
                fontSize: em(32, 36),
              },
              pre: {
                fontSize: em(20, 24),
                lineHeight: round(36 / 20),
                marginTop: em(40, 20),
                marginBottom: em(40, 20),
                borderRadius: rem(8),
                paddingTop: em(24, 20),
                paddingInlineEnd: em(32, 20),
                paddingBottom: em(24, 20),
                paddingInlineStart: em(32, 20),
              },
              ol: {
                marginTop: em(32, 24),
                marginBottom: em(32, 24),
                paddingInlineStart: em(38, 24),
              },
              ul: {
                marginTop: em(32, 24),
                marginBottom: em(32, 24),
                paddingInlineStart: em(38, 24),
              },
              li: {
                marginTop: em(12, 24),
                marginBottom: em(12, 24),
              },
              "ol > li": {
                paddingInlineStart: em(10, 24),
              },
              "ul > li": {
                paddingInlineStart: em(10, 24),
              },
              "> ul > li p": {
                marginTop: em(20, 24),
                marginBottom: em(20, 24),
              },
              "> ul > li > p:first-child": {
                marginTop: em(32, 24),
              },
              "> ul > li > p:last-child": {
                marginBottom: em(32, 24),
              },
              "> ol > li > p:first-child": {
                marginTop: em(32, 24),
              },
              "> ol > li > p:last-child": {
                marginBottom: em(32, 24),
              },
              "ul ul, ul ol, ol ul, ol ol": {
                marginTop: em(16, 24),
                marginBottom: em(16, 24),
              },
              dl: {
                marginTop: em(32, 24),
                marginBottom: em(32, 24),
              },
              dt: {
                marginTop: em(32, 24),
              },
              dd: {
                marginTop: em(12, 24),
                paddingInlineStart: em(38, 24),
              },
              hr: {
                marginTop: em(72, 24),
                marginBottom: em(72, 24),
              },
              "hr + *": {
                marginTop: "0",
              },
              "h2 + *": {
                marginTop: "0",
              },
              "h3 + *": {
                marginTop: "0",
              },
              "h4 + *": {
                marginTop: "0",
              },
              table: {
                fontSize: em(20, 24),
                lineHeight: round(28 / 20),
              },
              "thead th": {
                paddingInlineEnd: em(12, 20),
                paddingBottom: em(16, 20),
                paddingInlineStart: em(12, 20),
              },
              "thead th:first-child": {
                paddingInlineStart: "0",
              },
              "thead th:last-child": {
                paddingInlineEnd: "0",
              },
              "tbody td, tfoot td": {
                paddingTop: em(16, 20),
                paddingInlineEnd: em(12, 20),
                paddingBottom: em(16, 20),
                paddingInlineStart: em(12, 20),
              },
              "tbody td:first-child, tfoot td:first-child": {
                paddingInlineStart: "0",
              },
              "tbody td:last-child, tfoot td:last-child": {
                paddingInlineEnd: "0",
              },
              figure: {
                marginTop: em(48, 24),
                marginBottom: em(48, 24),
              },
              "figure > *": {
                marginTop: "0",
                marginBottom: "0",
              },
              figcaption: {
                fontSize: em(20, 24),
                lineHeight: round(32 / 20),
                marginTop: em(20, 20),
              },
            },
            {
              "> :first-child": {
                marginTop: "0",
              },
              "> :last-child": {
                marginBottom: "0",
              },
            },
          ],
        },
        "3xl": {
          css: [
            {
              fontSize: rem(30),
              lineHeight: round(48 / 30),
              p: {
                marginTop: em(40, 30),
                marginBottom: em(40, 30),
              },
              '[class~="lead"]': {
                fontSize: em(37.5, 30),
                lineHeight: round(55 / 37.5),
                marginTop: em(40, 37.5),
                marginBottom: em(40, 37.5),
              },
              blockquote: {
                marginTop: em(80, 45),
                marginBottom: em(80, 45),
                paddingInlineStart: em(50, 45),
              },
              h1: {
                fontSize: em(80, 30),
                marginTop: "0",
                marginBottom: em(70, 80),
                lineHeight: round(80 / 80),
              },
              h2: {
                fontSize: em(60, 30),
                marginTop: em(90, 60),
                marginBottom: em(50, 60),
                lineHeight: round(65 / 60),
              },
              h3: {
                fontSize: em(45, 30),
                marginTop: em(70, 45),
                marginBottom: em(30, 45),
                lineHeight: round(55 / 45),
              },
              h4: {
                marginTop: em(50, 30),
                marginBottom: em(20, 30),
                lineHeight: round(45 / 30),
              },
              img: {
                marginTop: em(60, 30),
                marginBottom: em(60, 30),
              },
              picture: {
                marginTop: em(60, 30),
                marginBottom: em(60, 30),
              },
              "picture > img": {
                marginTop: "0",
                marginBottom: "0",
              },
              video: {
                marginTop: em(60, 30),
                marginBottom: em(60, 30),
              },
              kbd: {
                fontSize: em(25, 30),
                borderRadius: rem(7.5),
                paddingTop: em(7.5, 30),
                paddingInlineEnd: em(10, 30),
                paddingBottom: em(7.5, 30),
                paddingInlineStart: em(10, 30),
              },
              code: {
                fontSize: em(25, 30),
              },
              "h2 code": {
                fontSize: em(52.5, 60),
              },
              "h3 code": {
                fontSize: em(40, 45),
              },
              pre: {
                fontSize: em(25, 30),
                lineHeight: round(45 / 25),
                marginTop: em(50, 25),
                marginBottom: em(50, 25),
                borderRadius: rem(10),
                paddingTop: em(30, 25),
                paddingInlineEnd: em(40, 25),
                paddingBottom: em(30, 25),
                paddingInlineStart: em(40, 25),
              },
              ol: {
                marginTop: em(40, 30),
                marginBottom: em(40, 30),
                paddingInlineStart: em(47.5, 30),
              },
              ul: {
                marginTop: em(40, 30),
                marginBottom: em(40, 30),
                paddingInlineStart: em(47.5, 30),
              },
              li: {
                marginTop: em(15, 30),
                marginBottom: em(15, 30),
              },
              "ol > li": {
                paddingInlineStart: em(12.5, 30),
              },
              "ul > li": {
                paddingInlineStart: em(12.5, 30),
              },
              "> ul > li p": {
                marginTop: em(25, 30),
                marginBottom: em(25, 30),
              },
              "> ul > li > p:first-child": {
                marginTop: em(40, 30),
              },
              "> ul > li > p:last-child": {
                marginBottom: em(40, 30),
              },
              "> ol > li > p:first-child": {
                marginTop: em(40, 30),
              },
              "> ol > li > p:last-child": {
                marginBottom: em(40, 30),
              },
              "ul ul, ul ol, ol ul, ol ol": {
                marginTop: em(20, 30),
                marginBottom: em(20, 30),
              },
              dl: {
                marginTop: em(40, 30),
                marginBottom: em(40, 30),
              },
              dt: {
                marginTop: em(40, 30),
              },
              dd: {
                marginTop: em(15, 30),
                paddingInlineStart: em(47.5, 30),
              },
              hr: {
                marginTop: em(90, 30),
                marginBottom: em(90, 30),
              },
              "hr + *": {
                marginTop: "0",
              },
              "h2 + *": {
                marginTop: "0",
              },
              "h3 + *": {
                marginTop: "0",
              },
              "h4 + *": {
                marginTop: "0",
              },
              table: {
                fontSize: em(25, 30),
                lineHeight: round(35 / 25),
              },
              "thead th": {
                paddingInlineEnd: em(15, 25),
                paddingBottom: em(20, 25),
                paddingInlineStart: em(15, 25),
              },
              "thead th:first-child": {
                paddingInlineStart: "0",
              },
              "thead th:last-child": {
                paddingInlineEnd: "0",
              },
              "tbody td, tfoot td": {
                paddingTop: em(20, 25),
                paddingInlineEnd: em(15, 25),
                paddingBottom: em(20, 25),
                paddingInlineStart: em(15, 25),
              },
              "tbody td:first-child, tfoot td:first-child": {
                paddingInlineStart: "0",
              },
              "tbody td:last-child, tfoot td:last-child": {
                paddingInlineEnd: "0",
              },
              figure: {
                marginTop: em(60, 30),
                marginBottom: em(60, 30),
              },
              "figure > *": {
                marginTop: "0",
                marginBottom: "0",
              },
              figcaption: {
                fontSize: em(25, 30),
                lineHeight: round(40 / 25),
                marginTop: em(25, 25),
              },
            },
            {
              "> :first-child": {
                marginTop: "0",
              },
              "> :last-child": {
                marginBottom: "0",
              },
            },
          ],
        },
        "4xl": {
          css: [
            {
              fontSize: rem(36),
              lineHeight: round(54 / 36),
              p: {
                marginTop: em(48, 36),
                marginBottom: em(48, 36),
              },
              '[class~="lead"]': {
                fontSize: em(45, 36),
                lineHeight: round(66 / 45),
                marginTop: em(48, 45),
                marginBottom: em(48, 45),
              },
              blockquote: {
                marginTop: em(96, 54),
                marginBottom: em(96, 54),
                paddingInlineStart: em(60, 54),
              },
              h1: {
                fontSize: em(96, 36),
                marginTop: "0",
                marginBottom: em(84, 96),
                lineHeight: round(96 / 96),
              },
              h2: {
                fontSize: em(72, 36),
                marginTop: em(108, 72),
                marginBottom: em(60, 72),
                lineHeight: round(78 / 72),
              },
              h3: {
                fontSize: em(54, 36),
                marginTop: em(84, 54),
                marginBottom: em(36, 54),
                lineHeight: round(66 / 54),
              },
              h4: {
                marginTop: em(60, 36),
                marginBottom: em(24, 36),
                lineHeight: round(54 / 36),
              },
              img: {
                marginTop: em(72, 36),
                marginBottom: em(72, 36),
              },
              picture: {
                marginTop: em(72, 36),
                marginBottom: em(72, 36),
              },
              "picture > img": {
                marginTop: "0",
                marginBottom: "0",
              },
              video: {
                marginTop: em(72, 36),
                marginBottom: em(72, 36),
              },
              kbd: {
                fontSize: em(30, 36),
                borderRadius: rem(9),
                paddingTop: em(9, 36),
                paddingInlineEnd: em(12, 36),
                paddingBottom: em(9, 36),
                paddingInlineStart: em(12, 36),
              },
              code: {
                fontSize: em(30, 36),
              },
              "h2 code": {
                fontSize: em(63, 72),
              },
              "h3 code": {
                fontSize: em(48, 54),
              },
              pre: {
                fontSize: em(30, 36),
                lineHeight: round(54 / 30),
                marginTop: em(60, 30),
                marginBottom: em(60, 30),
                borderRadius: rem(12),
                paddingTop: em(36, 30),
                paddingInlineEnd: em(48, 30),
                paddingBottom: em(36, 30),
                paddingInlineStart: em(48, 30),
              },
              ol: {
                marginTop: em(48, 36),
                marginBottom: em(48, 36),
                paddingInlineStart: em(57, 36),
              },
              ul: {
                marginTop: em(48, 36),
                marginBottom: em(48, 36),
                paddingInlineStart: em(57, 36),
              },
              li: {
                marginTop: em(18, 36),
                marginBottom: em(18, 36),
              },
              "ol > li": {
                paddingInlineStart: em(15, 36),
              },
              "ul > li": {
                paddingInlineStart: em(15, 36),
              },
              "> ul > li p": {
                marginTop: em(30, 36),
                marginBottom: em(30, 36),
              },
              "> ul > li > p:first-child": {
                marginTop: em(48, 36),
              },
              "> ul > li > p:last-child": {
                marginBottom: em(48, 36),
              },
              "> ol > li > p:first-child": {
                marginTop: em(48, 36),
              },
              "> ol > li > p:last-child": {
                marginBottom: em(48, 36),
              },
              "ul ul, ul ol, ol ul, ol ol": {
                marginTop: em(24, 36),
                marginBottom: em(24, 36),
              },
              dl: {
                marginTop: em(48, 36),
                marginBottom: em(48, 36),
              },
              dt: {
                marginTop: em(48, 36),
              },
              dd: {
                marginTop: em(18, 36),
                paddingInlineStart: em(57, 36),
              },
              hr: {
                marginTop: em(108, 36),
                marginBottom: em(108, 36),
              },
              "hr + *": {
                marginTop: "0",
              },
              "h2 + *": {
                marginTop: "0",
              },
              "h3 + *": {
                marginTop: "0",
              },
              "h4 + *": {
                marginTop: "0",
              },
              table: {
                fontSize: em(30, 36),
                lineHeight: round(42 / 30),
              },
              "thead th": {
                paddingInlineEnd: em(18, 30),
                paddingBottom: em(24, 30),
                paddingInlineStart: em(18, 30),
              },
              "thead th:first-child": {
                paddingInlineStart: "0",
              },
              "thead th:last-child": {
                paddingInlineEnd: "0",
              },
              "tbody td, tfoot td": {
                paddingTop: em(24, 30),
                paddingInlineEnd: em(18, 30),
                paddingBottom: em(24, 30),
                paddingInlineStart: em(18, 30),
              },
              "tbody td:first-child, tfoot td:first-child": {
                paddingInlineStart: "0",
              },
              "tbody td:last-child, tfoot td:last-child": {
                paddingInlineEnd: "0",
              },
              figure: {
                marginTop: em(72, 36),
                marginBottom: em(72, 36),
              },
              "figure > *": {
                marginTop: "0",
                marginBottom: "0",
              },
              figcaption: {
                fontSize: em(30, 36),
                lineHeight: round(48 / 30),
                marginTop: em(30, 30),
              },
            },
            {
              "> :first-child": {
                marginTop: "0",
              },
              "> :last-child": {
                marginBottom: "0",
              },
            },
          ],
        },
      }),
    },
    spacing: {
      "60%": "60%",
      "78%": "78%",
      "90%": "90%",

      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      6: "6px",
      8: "8px",
      9: "9px",
      10: "10px",
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      24: "24px",
      26: "26px",
      28: "28px",
      30: "30px",
      32: "32px",
      40: "40px",
      44: "44px",
      45: "45px",
      46: "46px",
      47: "47px",
      48: "48px",
      50: "50px",
      56: "56px",
      60: "60px",
      64: "64px",
      72: "72px",
      80: "80px",
      88: "88px",
      93: "93px",
      96: "96px",
      100: "100px",
      104: "104px",
      112: "112px",
      120: "120px",
      128: "128px",
      136: "136px",
      144: "144px",
      152: "152px",
      160: "160px",
      168: "168px",
      176: "176px",
      184: "184px",
      192: "192px",
      200: "200px",
      208: "208px",
      216: "216px",
      224: "224px",
      232: "232px",
      240: "240px",
      248: "248px",
      256: "256px",
      264: "264px",
      272: "272px",
      280: "280px",
      288: "288px",
      296: "296px",
      304: "304px",
      312: "312px",
      320: "320px",
      328: "328px",
      336: "336px",
      344: "344px",
      352: "352px",
      360: "360px",
      368: "368px",
      376: "376px",
      380: "380px",
      384: "384px",
      376: "376px",
      384: "384px",
      392: "392px",
      400: "400px",
      512: "512px",
      624: "624px",
      942: "942px",
      996: "996px",
      1080: "1080px",
      1280: "1280px",
      4000: "4000px",
      "100vw": "100vw",
    },
    borderRadius: {
      "4xl": "32px",
      ...defaultTheme.borderRadius,
    },
    maxWidth: {
      "80%": "80%",
      "90%": "90%",
      prose: "75ch",
      215: "215px",
      200: "200px",
      255: "255px",
      340: "340px",
      380: "380px",
      384: "384px",
      396: "396px",
      416: "416px",
      420: "420px",
      442: "442px",
      448: "448px",
      496: "496px",
      542: "542px",
      633: "633px",
      640: "640px",
      736: "736px",
      512: "512px",
      848: "848px",
      996: "996px",
      1080: "1080px",
      ...defaultTheme.maxWidth,
    },
    minWidth: {
      "20%": "20%",
      96: "96px",
      "70%": "70px",
      "80%": "80px",
      "90%": "90px",
      320: "320px",
      420: "420px",
      448: "448px",
      384: "384px",
      ...defaultTheme.minWidth,
    },
    minHeight: {
      "60%": "60%",
      "96%": "96%",
      96: "96px",
      "65%": "65%",
      "80%": "80%",
      288: "288px",
      256: "256px",
      320: "320px",
      360: "360px",
      160: "160px",
      210: "210px",
      420: "420px",
      512: "512px",
      ...defaultTheme.minHeight,
    },
    maxHeight: {
      "60%": "60%",
      "79%": "79%",
      "80%": "80%",
      "90%": "90%",
      128: "128px",
      210: "210px",
      256: "256px",
      288: "288px",
      312: "312px",
      400: "400px",
      420: "420px",
      640: "640px",
      666: "666px",
      none: "none",
      full: "100%",
      screen: "100vh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
      ...defaultTheme.maxHeight,
    },
  },

  corePlugins: {
    aspectRatio: false,
  },

  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
};
