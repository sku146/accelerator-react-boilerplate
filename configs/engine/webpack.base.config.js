import sysPath from 'path';

export default {
  performance: {
    hints: false,
  },
  resolve: {
    modules: [
      'node_modules',
    ],
    extensions: ['*', '.js', '.jsx', '.json'],
    alias: {
      assets: sysPath.resolve(`${process.cwd()}`, 'src/assets'),
      components: sysPath.resolve(`${process.cwd()}`, 'src/components'),
      journeys: sysPath.resolve(`${process.cwd()}`, 'src/journeys'),
      copies: sysPath.resolve(`${process.cwd()}`, 'src/copies'),
      styles: sysPath.resolve(`${process.cwd()}`, 'src/styles'),
      utils: sysPath.resolve(`${process.cwd()}`, 'src/utils'),
    },
  },
  module: {
    rules: [],
  },
  plugins: [],
};
