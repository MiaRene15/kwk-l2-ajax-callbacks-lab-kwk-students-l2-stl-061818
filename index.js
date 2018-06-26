$(document).ready(function (){ 
  
});

$('#searchRep').click() {
  
}
$.ajax({
        url: 'https://api.github.com', 
        dataType: 'json',
        data: {
            api_key: '', 
            q: input, 
            limit: 1, 
            rating: 'PG-13'
        }



