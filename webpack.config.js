module.exports = {
    entry: ["./src/script.js"],
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/
            },
        ],
    },
}