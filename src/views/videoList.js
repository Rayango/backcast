var VideoListView = Backbone.View.extend({
  
  el: '.list',
  
  render: function() {
    new VideoListEntryView();
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
