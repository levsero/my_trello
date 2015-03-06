TrelloClone.Views.BoardShowList = Backbone.View.extend ({
  template:JST["board_show_item"],

  render: function () {
    this.$el.html(this.template({list: this.model}))
    return this;
  },

  initialize: function () {
    this.listenTo( this.model, "sync", this.render)
  },

  tagName: "li"
})
