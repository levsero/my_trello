TrelloClone.Views.EditCard = Backbone.View.extend ({
  template: JST["edit_card"],

  initialize: function (options) {
    this.element = options.element;

  },

  render: function () {
    this.$el.html(this.template({model: this.model}))
    return this;
  },

  tagName: "form",

  events: {
    "click .add": "createCard",
    "click #delete": "removeForm"
  },

  tagName: "form",

  createCard: function (event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON();
    this.model.save(attrs, {
      success: function () {
        this.remove();
      }.bind(this)
    })
  },

  removeForm: function (event) {
    event.preventDefault();
    this.model.destroy();
    this.remove();
  }
})
