// next.config.js
const withTM = require('next-transpile-modules')([
  // pass the modules you would like to see transpiled
  'ui--my-button',
  'util--get-message'
]);

module.exports = withTM();
