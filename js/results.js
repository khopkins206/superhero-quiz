var giphyURL = 'api.giphy.com/v1/gifs/search?q=';
var apiKey = '&api_key=AWwznVdkteMbede08IgpvYKtgcQztryP'; 
var superhero = "Black Widow";
var imgEl = document.getElementById("giphy-1-link")
var resultNameEl = document.getElementById("results-name")


var h1Name = localStorage.getItem("superheroName")
console.log(h1Name);
resultNameEl.innerHTML = h1Name;


var queryString = document.location.search;
var superhero = queryString.split('=')[1];

console.log(superhero);



    var getGiphy = function (superhero) {
        var apiUrl = 'https://api.giphy.com/v1/gifs/search?q=' + superhero + apiKey;
      
        fetch(apiUrl).then(function (response) {
          if (response.ok) {
            response.json().then(function (data) {
              var giphy = data.data[0].images.original.url
                console.log(response)
                imgEl.setAttribute("src", giphy);
            });
          } else {
            alert('Error: ' + response.statusText);
          }
        });
      };

      function getVideo(superhero) {
        $.ajax({
          type: 'GET',
          url: 'https://www.googleapis.com/youtube/v3/search',
          data: {
              key: 'AIzaSyC30CwUT3GBRL3Gc05HvVMVdAc4MmwHgGI',
              q: superhero,
              part: 'snippet',
              maxResults: 2,
              type: 'video', 
              dataType: 'jsonp',
              videoEmbeddable: true,
          },
          success: function(data){
              embedVideo(data)
          },
          error: function(response){
              console.log("Request Failed");
          }
        });
      }
    
      function embedVideo(data) {
        $('#youtube-1-link').attr('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId)
        // $('h3').text(data.items[0].snippet.title)
        // $('.description').text(data.items[0].snippet.description)
    }
    
    getVideo(superhero);
    getGiphy(superhero);

    