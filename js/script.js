// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */


$("#search-button").click(function(){

    var searchTerm = $("input").val();
    var newUrl = `https://api.giphy.com/v1/stickers/search?q=${searchTerm}&rating=pg&api_key=dc6zaTOxFJmzC`;

  $.ajax({
        url: newUrl,
        method: "GET",
        success: function(response) {
            var randomPic = Math.random()*response.data.length
            var picIndex = Math.floor(randomPic);
            var originalImage = response.data[picIndex].images.fixed_width.url;
            $('#display').html(`<img src=${originalImage}>`);
        }
    });


});

