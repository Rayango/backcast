var VideoPlayerView = Backbone.View.extend({

  // initialize: function() {
  //   // this.videos = new Videos(exampleVideoData);
  // },
  initialize: function() {
    // console.log(this.videos);
    this.listenTo(this.collection, 'select', this.selectItem);
  },
  
  selectItem: function(selectedItem) {
    this.model = selectedItem;
    this.render();
  },
  
  render: function() {
    // console.log(this);
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
