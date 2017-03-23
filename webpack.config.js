var  HTMLWebpackPlugin = require('html-webpack-plugin');
            var HTMLWebpackPLuginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});
module.exports = {
    entry: __dirname + '/app/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.png$/,
                loader: "url-loader?limit=10000"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            },
            {
      			 test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
        		loader: 'url?limit=10000&mimetype=application/font-woff'
      		},
      		{
        		test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        		loader: 'url?limit=10000&mimetype=application/octet-stream'
      		},
      		{
        		test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        		loader: 'file'
      		},
      		{
        		test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
        		loader: 'url?limit=10000&mimetype=image/svg+xml'
      		}
        ]
    },
    output: {
        filename: 'transformed.js' ,
        path: __dirname + '/build'
    },
    plugins: [HTMLWebpackPLuginConfig]
};
