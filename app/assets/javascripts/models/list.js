TrelloClone.Models.List = Backbone.Model.extend ({
  urlRoot: "api/lists/",

  _cards: function () {
  if (!this.cards){
     this.cards = new TrelloClone.Collections.Lists({list: this});
  }
    return this.cards;
  },

  initialize: function(options)

})
