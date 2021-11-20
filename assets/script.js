var mainDiv = document.getElementById("cocktail-i");

var field = document.querySelector('.comment-box'); // comment Section textarea
console.log(field)
var backUp = field.getAttribute('placeholder'); // comment Section
var commentBtn = document.querySelector('.comment-btn'); // comment Section
var clear = document.getElementById('clear');  ///clear textarea 
var cocktailNameDiv = document.getElementById("cocktail-d");
var movieNameDiv = document.getElementById("movie-d");
var movieImageDiv = document.getElementById("movie-lives");
var moviePlaceholder = document.createElement("img");
moviePlaceholder.setAttribute("src","https://files.123freevectors.com/wp-content/uploads/freevectorimage/hand-drawn-movie-time-free-vector-3448.jpg") 
movieImageDiv.appendChild(moviePlaceholder)
var cocktailPlaceholder = document.createElement("img");
cocktailPlaceholder.setAttribute("src", "https://media.istockphoto.com/vectors/vector-set-of-cocktails-hand-drawn-vector-illustration-is-sketch-on-vector-id1131305100?k=20&m=1131305100&s=612x612&w=0&h=vbkXDs9g5wL108CY8jyK1IqRDnLIWXNxNsrLq5y2TQ0=")
mainDiv.appendChild(cocktailPlaceholder)
var img = document.createElement("img");
var imgTwo = document.createElement("img");
var cocktailName = document.createElement("h1")
var cocktailNameTwo = document.createElement("h1")
var movieName = document.createElement("h1")
var movieNameTwo = document.createElement("h1")
var movieImage = document.createElement("img");
var movieImageTwo = document.createElement("img");
var savedMovies = JSON.parse(localStorage.getItem("savedMovies"))||[]
var savedCocktail = JSON.parse(localStorage.getItem("savedCocktails"))||[]

/*field.onfocus = function() {     /// textarea 
    this.setAttribute('placeholder', '');
    this.style.borderColor = "hotpink";
};

field.onblur = function(){     
    this.setAttribute('placeholder', backUp);
    this.style.borderColor = "hotpink"
};

field.onclick = function() {     //// comment text area clear 
    commentBtn.style.display = "none";
    field.value = "";
}
*/



mainDiv.setAttribute("class", "container");

function getRandomDrink () {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then(function(response){
        return response.json()
    }).then(data => {
        console.log(data);
        var drinkId = data.drinks[0].idDrink
        console.log(drinkId);

       img.setAttribute("src",data.drinks[0].strDrinkThumb)
       console.log(img)
       cocktailPlaceholder.replaceWith(img)
       //mainDiv.replaceWith(img, cocktailPlaceholder)
       
       imgTwo.setAttribute("src",data.drinks[0].strDrinkThumb)
       console.log(imgTwo)
       img.replaceWith(imgTwo)
       //mainDiv.replaceChild(imgTwo,img)

       cocktailName.innerHTML = data.drinks[0].strDrink
       cocktailNameTwo.innerHTML = data.drinks[0].strDrink
       console.log(cocktailName)
       cocktailNameDiv.appendChild(cocktailName)
       cocktailName.replaceWith(cocktailNameTwo)
       //cocktailNameDiv.replaceChild(cocktailNameTwo, cocktailName)

       var saveObjectCocktail = {drinkId, cocktailNameTwo,}
        
        savedCocktail.push(saveObjectCocktail)
        localStorage.setItem("savedCocktail", JSON.stringify(savedCocktail))
        console.log(savedCocktail)
    
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
            console.log(movieId)
            
            movieName.innerHTML = randomMovie
            movieNameTwo.innerHTML = randomMovie
            movieNameDiv.appendChild(movieName)
            movieNameDiv.replaceChild(movieNameTwo, movieName)
            var posterPath = popularMovies.poster_path
            console.log(posterPath)
            configuration(posterPath);
        var saveObject = {movieId, randomMovie}
        
        savedMovies.push(saveObject)
        localStorage.setItem("savedMovies", JSON.stringify(savedMovies))
        console.log(savedMovies)

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
        
        movieImage.setAttribute("src",  baseUrl + "/" + posterSize + posterPath)
        movieImageTwo.setAttribute("src",  baseUrl + "/" + posterSize + posterPath)
        moviePlaceholder.replaceWith(movieImage)
        movieImage.replaceWith(movieImageTwo)
        //movieImageDiv.replaceChild(movieImage, moviePlaceholder)
        //movieImageDiv.replaceChild(movieImageTwo, movieImage)
        console.log(movieImage)

    })
}


const commentSaveBtn = document.getElementById("comment-save")
commentSaveBtn.addEventListener("click", function() {
    var commentText= field.value;
    
})
/*
const form = document.querySelector('form');
const ul = document.getElementById('unordered');
const button = document.getElementById('buttonClear');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));



const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
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

/**https://www.taniarascia.com/how-to-use-local-storage-with-javascript/ */

document.getElementById('myshabash').addEventListener('click', getRandomDrink)
document.getElementById('myshabash').addEventListener('click', getRandomMovie)
