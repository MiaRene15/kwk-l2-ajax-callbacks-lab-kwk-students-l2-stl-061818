$(document).ready(function (){
  $.ajax({
        url: 'https://api.github.com', 
        dataType: 'json',
        data: {
            api_key: '', 
            q: input, 
            limit: 3, 
            rating: 'PG-13'
        }
});



