TrelloClone.Models.List = Backbone.Model.extend ({
  urlRoot: "api/lists/",

  initialize: function(options) {
    this._cards();
  },

  _cards: function () {
  if (!this.cards){
     this.cards = new TrelloClone.Collections.Cards();
  }
    return this.cards;
  },

  parse: function (payload) {
    var cardsData = payload.cards;
    if (cardsData) {  
      this._cards().set(cardsData, {parse: true});
      delete payload.cards
    }
    return payload
  }

})
