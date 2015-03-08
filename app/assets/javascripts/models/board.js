TrelloClone.Models.Board = Backbone.Model.extend ({
  urlRoot: "api/boards/",

  parse: function (payload) {
    var listData = payload.lists;
    var listDist;
    if (listData) {
      delete payload.list
    }
    this._lists().set(listData);
    return payload
  },

  _lists: function () {
  if (!this.lists){
     this.lists = new TrelloClone.Collections.Lists({board: this});
  }
    return this.lists;
  },

  // initialize: function () {
  //   if (!this.lists){
  //      this.lists = new TrelloClone.Collections.Lists({board: this});
  //   }
  // }
})
