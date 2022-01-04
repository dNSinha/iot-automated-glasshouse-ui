import webpack from 'webpack';
import path from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import CleanPlugin from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import dotenv from 'dotenv';

const outputDirectory = path.resolve(__dirname, 'dist');
const env = process.env.NODE_ENV || 'development';
const sourceMap = env !== 'production';

if (env === 'development') {
    dotenv.config({
        path: path.resolve(__dirname, ".env.local"),
        silent: true
    });
} else {
    dotenv.config({
        path: path.resolve(__dirname, ".env"),
        silent: true
    });
}

module.exports = {
    mode: sourceMap ? 'development' : 'production',
    entry: {
        main: ['@babel/polyfill/noConflict', './src/index.jsx']
    },
    output: {
        path: outputDirectory,
        publicPath: '/',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.jsx', '.js', '.json', '.scss'],
        modules: [
            path.resolve(__dirname, "src"),
            path.resolve(__dirname, "node_modules"),
            'node_modules'
        ],
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            'Components': path.resolve(__dirname, 'src/components/'),
            'Store': path.resolve(__dirname, 'src/components/app-store'),
            'Api': path.resolve(__dirname, 'src/api/')
        }
    },
    module: {
        rules: [{
                test: /\.(less|scss)$/,
                include: [path.resolve(__dirname, 'src')],
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: sourceMap,
                            minimize: true,
                            localIdentName: '[local]',
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: sourceMap
                        },
                    },
                ]
            },
            {
                test: /\.css$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: sourceMap,
                            minimize: true,
                            localIdentName: '[local]',
                        },
                    },
                ]
            },
            {
                test: /\.(pdf|jpg|png|gif|svg|ico)$/,
                use: [{
                    loader: 'url-loader'
                }]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        sourceMap: sourceMap
                    }
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader"
                }]
            },
            {
                test: /\.(png|jpg|gif|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            },
            {
                test: /\.(svg)$/,
                loader: 'raw-loader'
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: sourceMap
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
    },
    devServer: {
        contentBase: outputDirectory,
        historyApiFallback: true,
        compress: true,
        port: 9000,
        watchContentBase: true,
        proxy: {
            '/api': {
                target: process.env.API_ROUTE,
                secure: false
            }
        }
    },
    performance: {
        maxEntrypointSize: 400000,
        maxAssetSize: 400000
    },
    plugins: [
        new CleanPlugin(['dist'], {}),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "styles.css"
        }),
        new CopyPlugin([{
                from: './src/assets/images',
                to: outputDirectory + '/images'
            }
        ]),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV || "development")
            }
        }),
        new webpack.EnvironmentPlugin([
            'GOOGLE_URL'
        ])
    ]
};
