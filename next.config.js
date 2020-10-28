const withSass = require('@zeit/next-sass')

module.exports = withSass({
    cssModules: true,
    target: 'serverless',
    webpack: function (config) {
        config.module.rules.push({test:  /\.md$/, use: 'raw-loader'})
        config.module.rules.push({test: /\.yml$/, use: 'raw-loader'})
        return config
    }
})