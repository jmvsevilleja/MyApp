module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    "plugins": [
      [
        "module-resolver",
        {
          "root": ["./"],
          "alias": {
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@lib": "./src/lib",
            "@services": "./src/services",
            "@assets": "./assets",
            "@constants": "./src/constants"
          }
        },
      ],
    ],
  };
};
