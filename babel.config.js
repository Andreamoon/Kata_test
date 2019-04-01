module.exports = {
  presets: [
    '@babel/preset-env',

  ],
  env: {
    test: {
      presets: [
        '@babel/preset-env',

      ],
      plugins: [

        'transform-es2015-modules-commonjs',
        'babel-plugin-dynamic-import-node',
      ],
    },
  },
};