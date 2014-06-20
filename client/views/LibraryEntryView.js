// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  initialize: function() {
    this.model.on('change', function() {
      this.render();
    }, this);
  },

  tagName: 'tr',

  template: _.template('<td><%= artist %></td><td><%= title %></td>'),

  // can't do it this way, but it would be nice :)
  // tagName: 'div'    // the extra div breaks the bootstrap styling
  // _.template('<tr <% if (typeof(isPlaying) !== "undefined" && isPlaying === true) { %> class="success" <% } %> ><td><%= artist %></td><td><%= title %></td></tr>'),

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    //render does not edit the container element by default, bc it may already exist in the dom
    //render green if the model is playing
    if( this.model.get('isPlaying') === true ){
      //add a highlight class to model's container element
      this.$el.addClass('success');
    }else{
      this.$el.removeClass('success');
    }
    return this.$el.html(this.template(this.model.attributes));
  }

});
