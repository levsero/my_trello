TrelloClone.Views.BoardShow = Backbone.CompositeView.extend ({
  template:JST["boards_show"],

  render: function () {
    this.$el.html(this.template({board: this.model}))

    this.model.lists.each( function(list) {
      var itemView = new TrelloClone.Views.BoardShowList({ model: list });
      this.addSubview("ul.board", itemView)
    }.bind(this))

    this.$el.data("board", this.model)

    this.sortable();

    return this;
  },

  sortable: function () {
    $(".board").sortable();
    $(".list").sortable({
      connectWith: ".list"
    }).disableSelection();
  },

  setListsOrd: function (event, ui) {
    console.log("list")

    _.each(this.$el.find("ul.board").children(), function (list) {
      var $list = $(list)
      if($list.hasClass("board-show-list")){
        $list.data("list").save({"ord": $list.index()})
      }
    })
  },

  initialize: function () {
    this.listenTo( this.model, "add delete sync", this.render)
  },

  events: {
    "sortupdate .board": "setListsOrd"
  }
})
