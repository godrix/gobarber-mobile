const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: ['.'],
      alias: {
        '@assets': './src/assets',
        '@components': './src/components',
        '@constants': './src/constants',
        '@contexts': './src/contexts',
        '@hooks': './src/hooks',
        '@interfaces': './src/interfaces',
        '@routes': './src/routes',
        '@screens': './src/screens',
        '@services': './src/services',
        '@utils': './src/utils',
      },
    },
  ],
];

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [...plugins],
};
