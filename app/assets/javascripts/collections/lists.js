TrelloClone.Collections.Lists = Backbone.Collection.extend ({

  initialize: function (option) {
  },

  model: TrelloClone.Models.List,

  getOrFetch: function (id) {
    var card = this.get(id);
    if (!card) {
      card = new TrelloClone.Models.Card({"id": id});
    }
    return card;
  },

  comparator: "ord"
})
