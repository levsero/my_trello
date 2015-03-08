TrelloClone.Views.BoardShowCard = Backbone.View.extend ({
  template:JST["board_show_card"],

  render: function () {
    this.$el.html(this.template({card: this.model}))
    return this;
  },

  initialize: function () {
  },

  tagName: "li"
})
