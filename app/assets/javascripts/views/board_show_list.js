TrelloClone.Views.BoardShowList = Backbone.View.extend ({
  template:JST["board_show_item"],

  render: function () {
    this.$el.html(this.template({list: this.model}))

    if(this.model && this.model.cards) {
      this.model.cards.each( function (card) {
        var cardView = new TrelloClone.Views.BoardShowCard({ model: card });
        this.$el.find("ul.list").append(cardView.render().$el)
      }.bind(this))
      this.setCardsOrd();
    }

    this.$el.data("list", this.model)
    this.sortable();
    this.$el.find("ul.list").append('<button class="add-card">Add Card</button>')

    return this;
  },

  sortable: function () {
    $(".list").sortable({
      connectWith: ".list"
    }).disableSelection();
  },

  initialize: function () {
    this.listenTo( this.model, "sync", this.render)
    this.listenTo( this.model.cards, "remove add", this.render)
    this.$el.addClass("board-show-list")
  },

  events: {
    "click .add-card": "displayForm",
    "sortupdate .list": "reassignList"
  },

  displayForm: function () {
    var view = new TrelloClone.Views.NewCard({model: this.model, list: this.$el});
    this.$el.find(".add-card").toggleClass("none");
    this.$el.append(view.render().$el);
    this.$el.find("textarea").focus()
  },

  reassignList: function (event, ui) {
    var list = $(event.currentTarget).parent().data("list");
    var card = $(ui.item).data("card");
    var prevList = card.collection;
    var attrs = {list_id: list.id, ord:$(ui.item).index()-.1};

    card.save(attrs, { success: function() {
      prevList.remove(card.id)
      list.cards.add(card)

      this.setCardsOrd();
      }.bind(this)
    })
  },

  setCardsOrd: function () {
    _.each(this.$el.find("ul").children(), function (card) {
      var $card = $(card)
      if($card.hasClass("card")){
        $card.data("card").save({"ord": $card.index()})
      }
    })
  },

  tagName: "li"
})
