TrelloClone.Views.BoardShowList = Backbone.View.extend ({
  template:JST["board_show_item"],

  render: function () {
    this.$el.html(this.template({list: this.model}))
    if(this.model && this.model.cards) {

      console.log("test")
      this.model.cards.each( function (card) {
        var cardView = new TrelloClone.Views.BoardShowCard({ model: card });
        this.$el.find("ul.list").append(cardView.render().$el)
      }.bind(this))
    }
    return this;
  },

  initialize: function () {
    this.listenTo( this.model, "sync", this.render)
  },

  tagName: "li"
})
