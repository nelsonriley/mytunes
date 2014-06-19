// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>) <%= title %></td>'),

  initialize: function(){
    this.render();
  },

  events: {
    //listener on its element
    'click': function(){
      //calls dequeue on its model
      this.model.dequeue();
    }
  },

  render: function(){
    // render HTML by passing data to a template
    var html = this.template(this.model.attributes);
    // append result to this view's DOM element
    return this.$el.html(html);
  }

});
