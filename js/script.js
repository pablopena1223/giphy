// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

var giphy_api_url = 'https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC'

$("#search-button").click(function(){

  $.ajax({
        url: giphy_api_url,
        method: "GET",
        success: function(response) {
            var originalImage = response.data[0].images.fixed_width.url;
            $('body').append('<img src="' +  originalImage + '"/>');
            // YOUR CODE GOES HERE
        }
    });


});

