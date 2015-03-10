TrelloClone.Views.NewBoard = Backbone.View.extend ({
  //this.collection === board collection
  template:JST["new_form"],

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  initialize: function () {
  },

  events: {
    "submit": "createBoard"
  },

  tagName: "form",

  createBoard: function (event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON()
    var board = new TrelloClone.Models.Board();
    board.save(attrs, {
      success: function () {
        this.collection.add(board, { merge: true })
        $(".add-board").toggleClass("none");
      }.bind(this)
    })
  }
})
