// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  initialize: function() {
    this.model.on('change', function() {
      console.log('libraryEntryView listener');
      this.render();
    }, this);
  },

  tagName: 'tr',

  template: _.template('<td><%= artist %></td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    //if model is playing
    if( this.model.get('isPlaying') === true ){
      //add a highlight class to model's container element
      this.$el.addClass('success');
    }else{
      this.$el.removeClass('success');
    }
    return this.$el.html(this.template(this.model.attributes));
  }

});
