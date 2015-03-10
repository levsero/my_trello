TrelloClone.Collections.Cards = Backbone.Collection.extend ({

  initialize: function (option) {
  },

  model: TrelloClone.Models.Card,

  comparator: "ord"
})
