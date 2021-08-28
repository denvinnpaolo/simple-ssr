const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js')

const config = {
    // Tell webpack the root file of our client application
    entry: "./src/client/client.js",

    // Tell webpack where to put the output file that is going to be generated
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'public')
    }
};

// IMPORTANT TO KEEP BABEL AND CONFIG FILE IDENTICAL FOR A MUCH SMOOTHER TRANSITION BETWEEN
// THE SERVER AND CLIENT

module.exports = merge(baseConfig, config)