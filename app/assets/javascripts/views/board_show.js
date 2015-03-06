TrelloClone.Views.BoardShow = Backbone.CompositeView.extend ({
  template:JST["boards_show"],

  render: function () {
    this.$el.html(this.template({board: this.model}))

    this.model.lists.each( function(list) {
      var itemView = new TrelloClone.Views.BoardShowList({ model: list });
      this.addSubview("ul", itemView)
    }.bind(this))

    return this;
  },

  initialize: function () {
    this.listenTo( this.model, "sync", this.render)
  }
})
