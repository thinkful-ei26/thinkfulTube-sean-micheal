/* eslint-env jquery */
'use strict';

// eslint-disable-next-line no-unused-vars
const api = (function() {
  const API_KEY = 'AIzaSyDDVkbWFYCM-JBILCu4Qb7xmbkMz8tA6Rw';
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

  function fetchVideos(searchTerm, callback) {
    const query = {'part' : 'snippet', 'maxResults' : '5', 'q' : searchTerm, key: API_KEY};
    $.getJSON(BASE_URL, query, callback);
  }

  return {BASE_URL, fetchVideos};
}());