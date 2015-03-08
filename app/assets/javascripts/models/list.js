TrelloClone.Models.List = Backbone.Model.extend ({
  urlRoot: "api/lists/",

  _cards: function () {
  if (!this.cards){
     this.cards = new TrelloClone.Collections.Lists({list: this});
  }
    return this.cards;
  },

  initialize: function(options) {
    this._cards();
    if (this.get("cards")) {
      this._cards().set(this.get("cards"));
      delete this.attributes.cards;
    }
  },

  _cards: function () {
  if (!this.cards){
     this.cards = new TrelloClone.Collections.Cards();
  }
    return this.cards;
  }

})
