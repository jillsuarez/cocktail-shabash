var mainDiv = document.getElementById("cocktail-i");
var felid = document.querySelector('textarea'); // comment Section textarea
var backUp = felid.getAttribute('placeholder'); // comment Section
var commentBtn = document.querySelector('.comment-btn'); // comment Section
var clear = document.getElementById('clear');  ///clear textarea 
var cocktailNameDiv = document.getElementById("cocktail-d");
var movieNameDiv = document.getElementById("movie-d");
var movieImageDiv = document.getElementById("movie-lives");

felid.onfocus = function() {     /// textarea 
    this.setAttribute('placeholder', '');
    this.style.borderColor = "hotpink";
    commentBtn.style.display = "block"
};

felid.onblur = function(){     
    this.setAttribute('placeholder', backUp);
    this.style.borderColor = "hotpink"
};

clear.onclick = function() {     //// comment text area clear 
    commentBtn.style.display = "none";
    felid.value = "";
}




mainDiv.setAttribute("class", "container");

function getRandomDrink () {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then(function(response){
        return response.json()
    }).then(data => {
        console.log(data);
        var drinkId = data.drinks[0].idDrink
        console.log(drinkId);
       var img = document.createElement("img");
       img.setAttribute("src",data.drinks[0].strDrinkThumb)
       console.log(img)
       mainDiv.appendChild(img)
       var cocktailName = document.createElement("h1")
       cocktailName.innerHTML = data.drinks[0].strDrink
       console.log(cocktailName)
       cocktailNameDiv.appendChild(cocktailName)
       })
    }

function getRandomMovie () {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=b61f9e5cd6af472f99fe271ee07c0fcb&language=en-US&page=1").then(function(response){
        return response.json()
    }).then(data => {
        console.log(data);
        var findRandomMovie = Math.floor(Math.random() * 20)
        var popularMovies = data.results[findRandomMovie]
        console.log(popularMovies)
        var randomMovie = popularMovies.original_title
        console.log(randomMovie)
        var movieId = popularMovies.id
        console.log(movieId, "this is our first first api")
        var movieName = document.createElement("h1")
        movieName.innerHTML = randomMovie
        movieNameDiv.appendChild(movieName)
        var posterPath = popularMovies.poster_path
        console.log(posterPath)
        configuration(posterPath);

    }) 
}


function configuration(posterPath) {
    fetch("https://api.themoviedb.org/3/configuration?api_key=b61f9e5cd6af472f99fe271ee07c0fcb").then(function(response){
        return response.json()
    }).then(data => {
        console.log(data, "this is the configuration api");
        var baseUrl = data.images.base_url
        console.log(baseUrl)
        var posterSize = data.images.poster_sizes[1]
        console.log(posterSize)
        var movieImage = document.createElement("img");
        movieImage.setAttribute("src",  baseUrl + "/" + posterSize + posterPath)
        movieImageDiv.appendChild(movieImage)
        console.log(movieImage)

    })
}

getRandomMovie();
getRandomDrink();


const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('comment');
let itemsArray = localStorage.getItem('comment') ? JSON.parse(localStorage.getItem('comment')) : [];

localStorage.setItem('comment', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('comment'));

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  itemsArray.push(input.value);
  localStorage.setItem('comment', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = "";
});

data.forEach(item => {
  liMaker(item);
});

button.addEventListener('click', function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  itemsArray = [];
});


liMaker();

/*https://www.taniarascia.com/how-to-use-local-storage-with-javascript/ */

document.getElementById('myshabash').addEventListener('click', getRandomDrink)
document.getElementById('myshabash').addEventListener('click', getRandomMovie)
