TrelloClone.Collections.Lists = Backbone.Collection.extend ({

  initialize: function (option) {
    this.board = option.board
  },

  model: TrelloClone.Models.Card,
})
