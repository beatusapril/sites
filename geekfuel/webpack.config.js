const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/js/script.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ],
    devServer: {
        port: 3030,
        // historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
            {

                test: /\.scss$/,
                //exclude: '/node_modules',
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1,
                        modules: {
                            auto: true,
                            localIdentName: "[path][name]__[local]",
                            // production css
                            //  localIdentName: "[hash:base64]"
                        },
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }]
            },
            {
                // Match `.js`, `.jsx`, `.ts` or `.tsx` files
                test: /\.js$/,
                loader: 'esbuild-loader',
                options: {
                    // JavaScript version to compile to
                    target: 'es2015'
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg)$/i,
                type: 'asset/resource',
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css', '.html', '.jpg', '.svg']
    }
};