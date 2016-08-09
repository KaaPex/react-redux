/**
 * Created on 09.08.16.
 * configureStore.js of react-redux project
 */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}
