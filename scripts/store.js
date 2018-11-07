/* global */
'use strict';

// eslint-disable-next-line no-unused-vars
const store = (function() {
  const videos = [];

  const isLoading = false;

  
  function setVideos(videos) {
    this.videos = videos;
  }

  return {videos, setVideos, isLoading};
}());