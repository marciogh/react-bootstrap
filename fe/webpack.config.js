const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader"
                  }
                ]
            },            
            {
                test: /\.(js|jsx)$/,
                use: {
                  loader: "babel-loader"
                }
            },
            {
                test: /\.png|jpg$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      })
    ]    
};