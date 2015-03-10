TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend ({
  //this.collection === board collection
  template:JST["boards_index"],

  render: function () {
    this.$el.empty();
    this.$el.append(this.template());

    this.collection.each( function(board) {
      var itemView = new TrelloClone.Views.BoardsIndexItem({ model: board });
      this.addSubview("ul", itemView);
    }.bind(this))

    return this;
  },

  initialize: function () {
    this.listenTo( this.collection, "sync remove sort", this.render)
  },

  events: {
    "click .add-board": "displayForm"
  },

  displayForm: function () {
    var view = new TrelloClone.Views.NewBoard({collection: this.collection});
    this.$el.find(".add-board").toggleClass("none");
    this.$el.append(view.render().$el);
  }
})
