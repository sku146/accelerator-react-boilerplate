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
      actions: sysPath.resolve(`${process.cwd()}`, 'src/actions'),
      assets: sysPath.resolve(`${process.cwd()}`, 'src/assets'),
      constants: sysPath.resolve(`${process.cwd()}`, 'src/constants'),
      containers: sysPath.resolve(`${process.cwd()}`, 'src/containers'),
      components: sysPath.resolve(`${process.cwd()}`, 'src/components'),
      journeys: sysPath.resolve(`${process.cwd()}`, 'src/journeys'),
      reducers: sysPath.resolve(`${process.cwd()}`, 'src/reducers'),
      resources: sysPath.resolve(`${process.cwd()}`, 'src/resources'),
      sass: sysPath.resolve(`${process.cwd()}`, 'src/sass'),
      utils: sysPath.resolve(`${process.cwd()}`, 'src/utils'),
    },
  },
  module: {
    rules: [],
  },
  plugins: [],
};
