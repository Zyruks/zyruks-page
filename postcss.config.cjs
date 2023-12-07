const postcssJitProps = require('postcss-jit-props');
const OpenProps = require('open-props');
const autoprefixer = require('autoprefixer');
const postcssCustomMedia = require('postcss-custom-media');

// const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  // only vars used are in build output
  syntax: 'postcss-scss',
  plugins: [
    postcssJitProps(OpenProps),
    autoprefixer(),
    postcssCustomMedia(),

    // NOTE: Uncomment when building final
    //   purgecss({
    //   content: ["./**/*.{astro,ts,tsx,html}"],
    // })
  ],
};
