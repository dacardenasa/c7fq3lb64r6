const { environment } = require('@rails/webpacker')
const erb             = require('./loaders/erb')
const webpack         = require('webpack')

environment.loaders.append('erb', erb)

/*
environment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery'
  })
)
*/

environment.plugins.append(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    Popper: ['popper.js', 'default']
  })
)

module.exports = environment
