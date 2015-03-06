TrelloClone.Models.List = Backbone.Model.extend ({
  urlRoot: "api/lists/",

  parse: function (payload) {
    var data = payload.card;
    var card;
    if (data) {
      delete payload.card
      this.cards().set(data);
    }
    return payload
  },

  _cards: function () {
  if (!this.cards){
     this.cards = new TrelloClone.Collections.Lists({list: this});
  }
    return this.cards;
  }

})
