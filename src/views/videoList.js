var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.$('.video-list').append(this.collection.map(function(video) {
      // var videoView = new VideoListEntryView({model: video});
      // console.log(videoView);
      // return videoView.render();
      return new VideoListEntryView({model: video}).render();
    }));
    return this.$el;
  },

  template: templateURL('src/templates/videoList.html')

});
