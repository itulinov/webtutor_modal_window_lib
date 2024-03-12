const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const BsSync = require('browser-sync');
const browserSync = BsSync.create();

// берем конфиги для вебпака и для запуска BrowserSync
const webpackConfig = require('./webpack.config.js');
const bundler = webpack(webpackConfig);

// куки нужны для того что бы подключиться к порталу без ввода пароля и тд
const config = require('./config.js');
const { cookieString, url } = config;

// RegExp по которому BrowserSync будет подменять html
const htmlStringReplacementRegExp = /<div.*?id.*?="app_root">([\s\S]*?)<\/div>/i;


/**
 * Reload all devices when bundle is complete
 * or send a fullscreen error message to the browser instead
 */
bundler.hooks.done.tap('browserSync', function (stats) {
    if (stats.hasErrors() || stats.hasWarnings()) {
        return browserSync.sockets.emit('fullscreen:message', {
            title: 'Webpack Error:',
            body: stats.toString(),
            timeout: 100000,
        });
    }
    browserSync.reload();
});


/**
 * Run Browsersync and use middleware for Hot Module Replacement
 */
browserSync.init({
    proxy: {
        target: url,
        proxyReq: [
            function (proxyReq) {
                proxyReq.setHeader('cookie', cookieString);
            },
        ],
    },
    serveStatic: ['.', `./dist/`],
    port: 3003,
    rewriteRules: [{
        match: htmlStringReplacementRegExp,
        fn: (req, res, match) => {
            return `
                <script src="main.bundle.js"></script>
                <pre id ="app_root"></pre>
            `;
        },
    }],
    plugins: ['bs-fullscreen-message'],
    logFileChanges: false,
    middleware: [
        webpackDevMiddleware(bundler, {
            publicPath: webpackConfig.output.publicPath,
            stats: {
                colors: true
            },
        }),
        webpackHotMiddleware(bundler),
    ],
    files: ['./public/index.html', './src/*.js'],
});
