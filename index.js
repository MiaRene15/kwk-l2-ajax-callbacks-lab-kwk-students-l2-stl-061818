$(document).ready(function (){ 
  
});

let user = $('#searchTerm').val()

$('#searchRep').click(function searchTerms() {
  let user = $('#searchTerm').val()
  
}
)


$.ajax({
        url: 'https://api.github.com', 
        dataType: 'json',
        data: {
            api_key: '', 
            q: input, 
            limit: 1, 
            rating: 'PG-13'
        }



