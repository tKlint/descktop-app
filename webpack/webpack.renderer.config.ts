import type { Configuration } from 'webpack';
import path from 'path';
import fs from 'fs'
import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

const appDirectory = fs.realpathSync(process.cwd());

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    alias: {
      '@': path.resolve(appDirectory, 'src'),
    }
  },
};
