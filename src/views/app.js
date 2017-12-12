var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    // this.listenTo(this.videos, 'all', this.render);
    console.log(this);
    this.render();
  },

  render: function() {

    this.$el.html(this.template());
    
    // RENDERS A VIDEOLIST VIEW
    new VideoListView({el: this.$('.list'), collection: this.videos}).render(); 

    // this.$el.append(videoListView.render());
    
    // RENDERS A VIDEOPLAYER VIEW
    new VideoPlayerView({el: this.$('.player'), model: this.videos.at(0), collection: this.videos}).render(); 

    // RENDERS A NEW SEARCHVIEW
    new SearchView().render(); 
    
    return this;
  },

  template: templateURL('src/templates/app.html'),

});
