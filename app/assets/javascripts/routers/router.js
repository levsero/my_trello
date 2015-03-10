TrelloClone.Routers.Router = Backbone.Router.extend ({
  initialize: function (options) {
    this.$container = options.container;
    this.boards = new TrelloClone.Collections.Boards()
  },

  routes: {
    "": "boardsIndex",
    "boards/new": "boardsNew",
    "boards/:id": "boardsShow"
  },

  boardsIndex: function () {
    this.boards.fetch();
    var view = new TrelloClone.Views.BoardsIndex({collection: this.boards})
    this.$container.html(view.$el)
  },

  boardsShow: function (id) {
    var board = this.boards.getOrFetch(id); // getOrFetch
    board.fetch()
    var view = new TrelloClone.Views.BoardShow({model: board})
    this.$container.html(view.$el)
  },

  boardsNew: function (id) {
    var view = new TrelloClone.Views.NewBoard({collection: this.boards})
    this._swapViews(view);
  },

  _swapViews: function (view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;
    this.$container.html(view.render().$el)
  }
})
