module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "babel-plugin-transform-imports",
      {
        "@vicons/fluent": {
          transform: "@vicons/fluent/lib/${member}",
          preventFullImport: true,
        },
      },
    ],
  ],
};
