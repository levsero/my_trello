TrelloClone.Views.BoardShowCard = Backbone.View.extend ({
  template: JST["board_show_card"],

  render: function () {
    this.$el.html(this.template({card: this.model}))
    return this;
  },

  initialize: function () {
    this.listenTo(this.model, "change sync", this.render);
    this.$el.addClass("card")
    this.$el.data("card", this.model)    
  },

  events: {
    "dblclick": "displayModal",
    "click edit": "displayForm",
    "mouseenter": "toggleEdit",
    "mouseleave": "toggleEdit"
  },

  displayForm: function (event) {
    event.preventDefault();
    if(this.view) {
      this.view.remove();
      this.view = null;
      return;
    }
    this.view = new TrelloClone.Views.EditCard({model: this.model, element: this});
    this.$el.append(this.view.render().$el);
    this.$el.find("textarea").focus()
  },

  displayModal: function (event) {
    $("div")
  },

  toggleEdit: function (event) {
    this.$el.find("edit").toggleClass("none")
  },

  tagName: "li"
})
