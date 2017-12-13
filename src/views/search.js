var SearchView = Backbone.View.extend({

  el: '.search',
  
  events: {
    'click .btn': 'handleClick',
    'keyup .form-control': 'handleKeyPress',
  },
  
  handleClick: function(e) {
    this.collection.search(e.target.previousElementSibling.value);
    console.log(e.target.previousElementSibling.value);          
    // this.collection.sync();
  },

  handleKeyPress: function(e) {
    if (e.keyCode === 13) {
      this.collection.search(e.target.value);
      console.log(e.target.value);
      // this.collection.sync();
    }
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});

