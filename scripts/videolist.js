/* global api,store */
'use strict';

const videolist = (function () {
    
    function generateListItem(video) {
        return `
        <li data-video-id="${video.id}">
          <h3>${video.title}</h3>
          <img src=${video.thumbnail} />
        </li>`;
    }

    function render() {
        $('.results').html(store.videos.map( video => generateListItem(video)));
    }

    function handleFormSubmit() {
        $('.submission-form').submit( event => {
            event.preventDefault();
            console.log($('.submission-form input').val());
            api.fetchVideos($('.submission-form input').val(), (response) => {
                store.setVideos(api.decorateResponse(response));
                render();
            });
            $('#search-term').val(''); 
        })
    } 

    function bindEventListeners() {
        handleFormSubmit();
    }

    return {bindEventListeners,render}

})();