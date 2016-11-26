# An Introduction to Webpack

**Webpack** is a bundler for javascript, and related resources.
All resources are treated as modules, and with various *loaders*,
webpack can handle modules of CommonJs, AMD, ES6, CSS, Image, JSON, Coffeescript, LESS, etc.


```
// what a webpack configure file looks like
module: {
  loaders: [
    { test: /\.css$/, loader: 'style!css' },
    { test: /\.js$/, loader: 'jsx?harmony!babel', exclude: /node_modules/ }
    // loaders can be written like 'jsx-loader' or 'jsx'
    // loaders can take parameters as a querystring
  ]
}
```
