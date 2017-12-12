var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    console.log(exampleVideoData);
    console.log(this);
    this.videos = new Videos(exampleVideoData);
    console.log(this.videos);
    this.render();
  },

  render: function() {

    this.$el.html(this.template());
    
    // RENDERS A VIDEOPLAYER VIEW
    new VideoPlayerView({
      collection: this.videos
    }).render(); 
    
    // RENDERS A VIDEOLIST VIEW
    new VideoListView({
      collection: this.videos,
    }).render(); 
    
    // RENDERS A NEW SEARCHVIEW
    new SearchView().render(); 
    
    return this;
  },

  template: templateURL('src/templates/app.html'),

});
