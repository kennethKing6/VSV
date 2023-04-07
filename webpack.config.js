const Dotenv = require('dotenv-webpack');

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
    }
};