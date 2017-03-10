var path = require('path');

const config = {
    entry:'./index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'build')
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                use: ['babel-loader?presets[]=es2015&presets[]=react'],
                exclude: /node_modules/
            },
            {
                test:/.css$/,
                use:['css-loader']
            }
        ]
    },

}

module.exports = config;