// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);
  },

  render: function(){
    return this.$el.html([
      $('<div class="well"></div>')
        .append(this.playerView.$el),
      $('<div class="panel panel-default"></div>')
        .append('<div class="panel-heading">Song Queue</div>')
        .append($('<table class="table table-hover"></table>')
          .append(this.songQueueView.$el)),
      $('<div class="panel panel-default"></div>')
        .append('<div class="panel-heading">Library</div>')
        .append($('<table class="table table-hover"></table>')
          .append('<thead><th>Artist</th><th>Song</th></thead>')
          .append(this.libraryView.$el))
    ]);
  }

});
