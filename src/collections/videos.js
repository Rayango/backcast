var Videos = Backbone.Collection.extend({

  model: Video,
  
  newItems: [],

  search: function(query) {
    // console.log(this);
    Backbone.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
        q: query,
        part: 'snippet',
        order: 'rating',
        type: 'video',
        videoEmbeddable: 'true',
        key: window.YOUTUBE_API_KEY,
        maxResults: 5
      },
      success: function(data) {
        console.log('search success', data);
        return data.items;
      },
      error: function(error) {
        console.log('this is the error we are getting', error);
      } 
    });
  }
});

