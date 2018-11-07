/* eslint-env jquery */
'use strict';

// eslint-disable-next-line no-unused-vars
const api = (function() {
  const API_KEY = 'AIzaSyDDVkbWFYCM-JBILCu4Qb7xmbkMz8tA6Rw';
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

  function fetchVideos(searchTerm, callback) {
    setTimeout(() => {
      const query = {'part' : 'snippet', 'maxResults' : '5', 'q' : searchTerm, key: API_KEY};
      $.getJSON(BASE_URL, query, callback);
    }, 5000);
    
  }
  function decorateResponse(response) {
    return response.items.map(item => {return{id: item.id.videoId, thumbnail: item.snippet.thumbnails.default.url , title: item.snippet.title};});
  }

  return {fetchVideos, decorateResponse};
}());