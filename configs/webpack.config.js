const path = require('path');

module.exports = {
    mode : "production",
    entry : './index.js',
    output :{
        filename : "js-async-logger.js",
        path: path.resolve(__dirname, "../dist"),
        library : "JsAsyncLogger"
       
    },
    module: {
        rules : [
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
                
            },
            
        ]
    },
    target: "web",
    plugins: []
}