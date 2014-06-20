// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><%= artist %></td><td><%= title %></td>'),

  initialize: function(){
    this.render();
    this.model.on('change', function(){
      this.render();
    }, this);
  },

  events: {
    //listener on its element
    'click': function(){
      //calls dequeue on its model
      this.model.dequeue();
    }
  },

  render: function(){
    if( this.model.get('isPlaying') === true ){
      this.$el.addClass('success');
    }else{
      this.$el.removeClass('success');
    }
    // render HTML by passing data to a template
    var html = this.template(this.model.attributes);
    // append result to this view's DOM element
    return this.$el.html(html);
  }

});
