const Encore = require('@symfony/webpack-encore');
const dotenv = require('dotenv');

// webpack.config.js
const isProduction = process.env.NODE_ENV === "production";

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or subdirectory deploy
    //.setManifestKeyPrefix('build/')

       .copyFiles({
        from: './assets/images',
        
       to: 'images/[path][name].[ext]',
       })

    /*
     * ENTRY CONFIG
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */
    .addEntry('js/app', './assets/js/app.js')

    .addStyleEntry('css/login', './assets/styles/login.css')
    .addStyleEntry('css/accueil', './assets/styles/accueil.css')
    .addStyleEntry('css/materiel', './assets/styles/materiel.css')
    .addStyleEntry('css/global', './assets/styles/global.css')

    .addStyleEntry('css/header', './assets/components/css/header.css')
    .addStyleEntry('css/navbar', './assets/components/css/navbar.css')
    .addStyleEntry('css/itemStats', './assets/components/css/itemStats.css')

    // enables the Symfony UX Stimulus bridge (used in assets/bootstrap.js)
    .enableStimulusBridge('./assets/controllers.json')

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // configure Babel
    // .configureBabel((config) => {
    //     config.plugins.push('@babel/a-babel-plugin');
    // })

    // enables and configure @babel/preset-env polyfills
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = '3.23';
    })

    // enables Sass/SCSS support
    //.enableSassLoader()

    // uncomment if you use TypeScript
    // .enableTypeScriptLoader()

    // uncomment if you use React
    .enableReactPreset()
    
    .enablePostCssLoader()
    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    //.enableIntegrityHashes(Encore.isProduction())

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()

    // define the environment variables
    .configureDefinePlugin(options => {
        const env = dotenv.config();
          
        if (env.error) {
          throw env.error;
        }
      
        // options['process.env.REACT_APP_CALENDAR_ID'] = JSON.stringify(env.parsed.REACT_APP_CALENDAR_ID);
        // options['process.env.REACT_APP_GOOGLE_API_KEY'] = JSON.stringify(env.parsed.REACT_APP_GOOGLE_API_KEY);
        // options['process.env.REACT_APP_GOOGLE_ACCESS_TOKEN'] = JSON.stringify(env.parsed.REACT_APP_GOOGLE_ACCESS_TOKEN);

      });
;

module.exports = Encore.getWebpackConfig();