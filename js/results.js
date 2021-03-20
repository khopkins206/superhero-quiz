var giphyURL = 'api.giphy.com/v1/gifs/search?q=';
var apiKey = '&api_key=AWwznVdkteMbede08IgpvYKtgcQztryP'; 
var superhero = "Black Widow";
var imgEl = document.getElementById("Gif")



    var getSuperHero = function (superhero) {
        var apiUrl = 'https://api.giphy.com/v1/gifs/search?q=' + superhero + apiKey;
      
        fetch(apiUrl).then(function (response) {
          if (response.ok) {
            response.json().then(function (data) {
              var useThis = data.data[0].images.original.url
                console.log(response)
                imgEl.setAttribute("src", useThis);
            });
          } else {
            alert('Error: ' + response.statusText);
          }
        });
      };

      getSuperHero(superhero);