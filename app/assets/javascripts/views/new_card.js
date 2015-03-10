TrelloClone.Views.NewCard = Backbone.View.extend ({
  template: JST["card_form"],

  initialize: function (options) {
    this.list = options.list
    this.$el.addClass("card")
  },

  render: function () {
    this.$el.html(this.template({model: this.model}))
    return this;
  },

  tagName: "form",

  events: {
    "click .add": "createCard",
    "click .cancel": "removeForm"
  },

  tagName: "form",

  createCard: function (event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON()
    attrs.card.list_id = this.model.id;
    var card = new TrelloClone.Models.Card();
    card.save(attrs, {
      success: function () {
        this.model.cards.add(card, { merge: true })
        $(".add-card").toggleClass("none");
      }.bind(this)
    })
  },

  removeForm: function (event) {
    this.list.find(".add-card").toggleClass("none");
    this.remove();
  }
})
