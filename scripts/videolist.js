/* global api,store */
/* eslint-env jquery */
'use strict';

// eslint-disable-next-line no-unused-vars
const videolist = (function () {
    
    function generateListItem(video) {
        return `
        <li data-video-id="${video.id}">
          <h3>${video.title}</h3>
          <img src=${video.thumbnail} alt="video thumbnail" />
        </li>`;
    }

    function render() {
        if(store.isLoading){
            $('.results').html('');
            $('.results-heading').text("Loading...");
        }else{
            $('.results').html(store.videos.map( video => generateListItem(video)));
            $('.results-heading').text(`${store.videos.length} results`);
        }
        
    }

    function handleFormSubmit() {
        $('.submission-form').submit( event => {
            event.preventDefault();
            store.isLoading = true;
            render();
            console.log($('.submission-form input').val());
            api.fetchVideos($('.submission-form input').val(), (response) => {
                store.setVideos(api.decorateResponse(response));
                store.isLoading = false;
                render();
            });
            //$('#search-term').val('');
        })
    } 

    function bindEventListeners() {
        handleFormSubmit();
    }

    return {bindEventListeners,render};

})();