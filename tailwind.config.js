const settingsScreens = require("./tailwind.settings.screens");
const settingsFontSizes = require("./tailwind.settings.fontSizes");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: settingsScreens,
    fontSize: settingsFontSizes,
    fontFamily: {
      Calibre: ["Calibre", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
    },
    backgroundImage: {
      "learn-bg":
        "linear-gradient(rgba(49, 49, 49, 0.9), rgba(69, 67, 70, 0.9)), url('./assets/images/collaborate.jpeg')",
      "learn-bg-hover": "url('./assets/images/collaborate.jpeg')",
      "collaborate-bg":
        "linear-gradient(rgba(49, 49, 49, 0.9), rgba(69, 67, 70, 0.9)),url('./assets/images/learn.jpeg')",
      "collaborate-bg-hover": "url('./assets/images/learn.jpeg')",
      "recent-1": "url('./assets/images/recent-1.jpeg')",
      "recent-2": "url('./assets/images/recent-2.jpeg')",
      "recent-3": "url('./assets/images/recent-3.jpg')",
      "recent-4": "url('./assets/images/recent-4.jpeg')",
      "recent-5": "url('./assets/images/recent-5.jpg')",
      "business-1": "url('./assets/images/business-1.jpg')",
      "business-2": "url('./assets/images/business-2.jpg')",
      "business-3": "url('./assets/images/business-3.jpg')",
      "business-4": "url('./assets/images/business-4.jpg')",
      "business-5": "url('./assets/images/business-5.jpg')",
      "design-1": "url('./assets/images/design-1.jpg')",
      "design-2": "url('./assets/images/design-2.jpg')",
      "design-3": "url('./assets/images/design-3.jpg')",
      "design-4": "url('./assets/images/design-4.jpg')",
      "design-5": "url('./assets/images/design-5.jpeg')",
      "podcast-1": "url('./assets/images/podcast-1.jpeg')",
      "podcast-2": "url('./assets/images/podcast-2.jpeg')",
      "podcast-3": "url('./assets/images/podcast-3.jpeg')",
      "podcast-4": "url('./assets/images/podcast-4.jpeg')",
      "podcast-5": "url('./assets/images/podcast-5.jpeg')",
      "blog-1": "url('./assets/images/blog-1.jpg')",
      "blog-2": "url('./assets/images/blog-2.jpg')",
      "blog-3": "url('./assets/images/blog-3.jpg')",
      "blog-4": "url('./assets/images/blog-4.jpg')",
      "blog-5": "url('./assets/images/blog-5.jpg')",
    },
    // height: {
    //   '128': '36rem',
    // }
  },
  plugins: [],
};
