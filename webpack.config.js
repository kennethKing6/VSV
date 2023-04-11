const Dotenv = require('dotenv-webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    plugins: [
        new Dotenv()
    ],
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/plugin-proposal-class-properties',
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-transform-runtime',
                '@babel/preset-env',
                '@babel/preset-react'],
            ignore: ['./node_modules/mapbox-gl/dist/mapbox-gl.js']
        }
    },
    mode: 'production', // enable minification and tree shaking
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'] // use Babel to transpile your code
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all' // automatically split code into smaller chunks
        },
        minimizer: [
            new TerserPlugin(), // enable code minification
            new OptimizeCSSAssetsPlugin() // optimize CSS
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    performance: {
        hints: 'warning', // display warning messages for large bundles
        maxAssetSize: 200000, // limit the size of individual files
        maxEntrypointSize: 400000 // limit the size of entry points
    }
};