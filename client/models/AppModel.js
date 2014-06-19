// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue([]));

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    // will call from songqueue!!!
    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    // listen for enqueue event on the library
    params.library.on('enqueue', function(song){
      // add song that triggered event to app's song queue
      this.get('songQueue').add(song);
    }, this);

    this.get('songQueue').on('dequeue', function(song){
      this.get('songQueue').remove(song);
    }, this);

    this.get('songQueue').on('add', function(){
      if (this.get('songQueue').length === 1) {
        this.set('currentSong', this.get('songQueue').at(0));
      }
    }, this);

    this.get('songQueue').on('remove', function(){
      //if queue is empty
      if( this.get('songQueue').length === 0 ){
        // stop playing
        this.set('currentSong', new SongModel({url: ''}));
      //else if currentsong is not song at top of queue
      }else if( this.get('currentSong') !== this.get('songQueue').at(0) ){
        //play top of queue
        this.set('currentSong', this.get('songQueue').at(0));
      }
    }, this);

  }

});
