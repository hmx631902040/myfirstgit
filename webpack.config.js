module.exports = {
    entry: {
        //独立行情
        "index": "./view/home.jsx",
        "iScroll": "./view/iScroll.jsx"
    },
    output: {
        path: './dist/scripts',
        filename: '[name].js' // Template based on keys in entry above
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {test: /\.(less)$/, exclude: /node_modules/,  loader: "style!css!less"},
            {test: /.(svg|png|jpg|otf)$/, exclude: /node_modules/, loader: 'url-loader'}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.less', '.css']
    }
};
