$(document).ready(function (){
  $.ajax({
        url: 'https://api.giphy.com/v1/gifs/search', 
        dataType: 'json',
        data: {
            api_key: 'eb1e26943a32445898b2524d4d9877db', 
            q: input, 
            limit: 3, 
            rating: 'PG-13'
        }
});


