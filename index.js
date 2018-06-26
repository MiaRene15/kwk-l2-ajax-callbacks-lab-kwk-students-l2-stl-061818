$(document).ready(function (){
  $.ajax({
        url: 'https://api.github.com', 
        dataType: 'json',
        data: {
            api_key: 'eb1e26943a32445898b2524d4d9877db', 
            q: input, 
            limit: 3, 
            rating: 'PG-13'
        }
});


