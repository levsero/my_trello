TrelloClone.Views.BoardsIndexItem = Backbone.View.extend ({
  tagName: "li",

  template:JST["boards_index_item"],

  render: function () {
    this.$el.addClass("board");
    this.$el.html(this.template({board: this.model}))

    return this;
  },

  events: {
    "click button": "deleteBoard"
  },

  deleteBoard: function (event) {
    this.model.destroy()
  }

})
