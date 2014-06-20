// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  ended: function(){
    this.trigger('dequeue', this);
  },

  enqueue: function(){
    // trigger an enqueue event from this song
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

  isPlaying: false

});
