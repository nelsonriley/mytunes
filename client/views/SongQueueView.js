// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  //tagname table
  tagName: 'table',

  //template - not necessary while so simple

  //initialize
  initialize: function(){
    //render
    this.render();
    this.collection.on('add', function(){
      this.render();
    }, this);
    this.collection.on('remove', function(){
      this.render();
    }, this);
  },

  //render
  render: function(){
    this.$el.children().detach();
    // map collection of this view to render each model within collection
    // add result of map to this view's DOM element
    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
