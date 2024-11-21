/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      boxShadow: {
        "soft-lg": "0 1px 16px rgba(0, 0, 0, 0.06)",
        "outline-green": "0 0 0 2px rgba(0, 177, 79, 0.3)",
      },
      colors: {
        bsblue: "#0d6efd",
        bsindigo: "#6610f2",
        bspurple: "#6f42c1",
        bspink: "#d63384",
        bsRed: "#dc3545",
        bsorange: "#fd7e14",
        bsyellow: "#ffc107",
        bsgreen: "#198754",
        bsteal: "#20c997",
        bscyan: "#0dcaf0",
        bswhite: "#fff",
        gray: {
          DEFAULT: "#6c757d",
          100: "#f8f9fa",
          200: "#e9ecef",
          300: "#dee2e6",
          400: "#ced4da",
          500: "#adb5bd",
          600: "#6c757d",
          700: "#495057",
          800: "#343a40",
          900: "#212529",
        },
        primary: "rgb(13,110,253)",
        secondary: "rgb(108,117,125)",
        success: "rgb( 0, 177, 79)",
        info: "rgb( 13, 202, 240)",
        warning: "rgb( 255, 119, 0)",
        danger: "rgb( 220, 47, 47)",
        light: "rgb( 248, 249, 250)",
        dark: "rgb( 33, 47, 63)",
        white: "rgb( 255, 255, 255)",
        black: "rgb( 0, 0, 0)",
        bodyColor: "rgb( 33, 37, 41)",
        bodyBg: "rgb( 255, 255, 255)",
      },
      backgroundImage: {
        "auth-bg-image":
          "url('https://static.topcv.vn/v4/image/auth/auth_bg_desktop.png')",
        "auth-arrow":
          "url('https://static.topcv.vn/v4/image/auth/auth_arrow.png')",
      },
    },
  },
  plugins: [],
};
