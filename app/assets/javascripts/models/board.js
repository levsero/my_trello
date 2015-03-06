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

// want to initiate each list model with it's corresponding cards collection 
//   var listData = payload.lists;
//   var listDist;
//   if (listData) {
//     var cardData = listData.cards;
//     if(cardData) {
//       delete listData.cardData;
//     }
//     this._lists().add(listData {cards: cardData});
//     delete payload.list;
//   }
//   return payload
// },


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
