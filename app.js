var youtubeSearch = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  var query = {
    q: searchTerm,
    r: 'json',
    key: 'AIzaSyDfR_RyvzZNVQXC3TTAwtUx8a55aWG8rU8',
    part: 'snippet'

  }
  $.getJSON(youtubeSearch, query, callback);
}

function displayYoutubeSearchData(data) {
  var resultElement = '';
  if (data.items) {
    data.items.forEach(function(item) {
     resultElement += '<img src="' + item.snippet.thumbnails.default.url + '"/>';
    });
  }
  //use <a element, open and close in different
  else {
    resultElement += '<p>No results</p>';
  }
  
  $('.js-search-results').html(resultElement);
}

function watchSubmit() {
  $('.js-search-form').submit(function(event) {
    event.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromApi(query, displayYoutubeSearchData);
  });
}

$(function(){watchSubmit();});
