module.exports = async ({ config }) => {
    // const fileLoaderRule = config.module.rules.find(rule => rule.test.test('.svg'));
    // fileLoaderRule.exclude = /\.svg$/;

    // // rules.push({
    // //     test: /\.svg$/,
    // //     ...
    // //     }],
    // // });
    // // Add SVGR Loader
    // // ========================================================
    // const assetRule = config.module.rules.find(({ test }) => test.test(".svg"));

    // const assetLoader = {
    //     loader: assetRule.loader,
    //     options: assetRule.options || assetRule.query
    // };
    // console.log("LOGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG")
    // // Merge our rule with existing assetLoader rules
    // config.module.rules.unshift({
    //     test: /\.svg$/,
    //     use: ["@svgr/webpack", assetLoader]
    // });

    config.module.rules = [
        ...config.module.rules.map(rule => {
          if (/svg/.test(rule.test)) {
            // Silence the Storybook loaders for SVG files
            return { ...rule, exclude: /\.svg$/i }
          }
      
          return rule
        }),
        // Add your custom SVG loader
        {
          test: /\.svg$/i,
          use: ["@svgr/webpack"]
        }
      ]
    return config;
}