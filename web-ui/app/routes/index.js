var App = require('app');

App.IndexRoute = Em.Route.extend({
    model: function() {
      return ['red', 'yellow', 'blue'];
    }
});

module.exports = App.IndexRoute;