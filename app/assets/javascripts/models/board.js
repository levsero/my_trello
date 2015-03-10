TrelloClone.Models.Board = Backbone.Model.extend ({
  urlRoot: "api/boards/",

  parse: function (payload) {
    var listData = payload.lists;
    if (listData) {
      delete payload.list
    }
    this._lists().set(listData, {parse: true});
    return payload
  },

  _lists: function () {
  if (!this.lists){
     this.lists = new TrelloClone.Collections.Lists({board: this});
  }
    return this.lists;
  },
  
})
