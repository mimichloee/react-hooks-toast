module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      '@babel/env',
      '@babel/react',
      '@babel/typescript'
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-optional-chaining'
    ],
    env: {
      development: {
        compact: false,
        plugins: [
          'babel-plugin-styled-components'
        ]
      }
    }
  };
};
