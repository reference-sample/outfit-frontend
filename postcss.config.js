import autoprefixer from "autoprefixer";
import pxToViewport from "postcss-px-to-viewport-8-plugin";

export default {
  plugins: [
    autoprefixer,
    pxToViewport({
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 5,
      viewportUnit: "vw",
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
    }),
  ],
};
