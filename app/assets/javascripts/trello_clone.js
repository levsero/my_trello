window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $container = $("#main");
    var router = new TrelloClone.Routers.Router({ container: $container })
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});
