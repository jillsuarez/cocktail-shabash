var mainDiv = document.getElementById("cocktail-i");
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
//local storage variables
var savedMovies = JSON.parse(localStorage.getItem("savedMovies"))||[]
var savedCocktails = JSON.parse(localStorage.getItem("savedCocktails"))||[]

console.log("local storage movies:", savedMovies)
console.log("local storage cocktails:", savedCocktails)

var latestMovie = savedMovies[savedMovies.length - 1];
var latestCocktail = savedCocktails[savedCocktails.length - 1];
console.log("this is the latestMovie:", latestMovie)
console.log("this is the latestCocktail:", latestCocktail)

var savedCombo = JSON.parse(localStorage.getItem("savedCombo"))||[]
console.log("the is the parsed saved combo:", savedCombo)

var savedComboNames = JSON.parse(localStorage.getItem("savedComboNames"))||[]
console.log("this is the parsed saved combo names:", savedComboNames)

var savedShabashDiv = document.getElementById("comment");

var saveComboEl = document.getElementById("combo-save");




mainDiv.setAttribute("class", "container");

function getRandomDrink () {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then(function(response){
        return response.json()
    }).then(data => {
        //console.log(data);
        var drinkId = data.drinks[0].idDrink
        // console.log("this is the drinkId:", drinkId);

       img.setAttribute("src",data.drinks[0].strDrinkThumb)
       //console.log(img)
       cocktailPlaceholder.replaceWith(img)
       
       
       imgTwo.setAttribute("src",data.drinks[0].strDrinkThumb)
       //console.log(imgTwo)
       img.replaceWith(imgTwo)
       

       cocktailName.innerHTML = data.drinks[0].strDrink
       cocktailNameTwo.textContent = data.drinks[0].strDrink
       var drinkName = data.drinks[0].strDrink
       //console.log("this is the cocktail name:", cocktailName)
    //    console.log("this is the cocktailNameTwo:", cocktailNameTwo)
       cocktailNameDiv.appendChild(cocktailName)
       cocktailName.replaceWith(cocktailNameTwo)
    //    console.log(cocktailNameTwo)
       

       var saveObjectCocktail = {drinkId, drinkName}
        
        savedCocktails.push(saveObjectCocktail)
        localStorage.setItem("savedCocktails", JSON.stringify(savedCocktails))
        console.log(savedCocktails)
    
       })
    }

    function getRandomMovie () {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=b61f9e5cd6af472f99fe271ee07c0fcb&language=en-US&page=1").then(function(response){
            return response.json()
        }).then(data => {
            // console.log(data);
            var findRandomMovie = Math.floor(Math.random() * 20)
            var popularMovies = data.results[findRandomMovie]
            // console.log(popularMovies)
            var randomMovie = popularMovies.original_title
            // console.log(randomMovie)
            var movieId = popularMovies.id
            // console.log(movieId)
            
            movieName.innerHTML = randomMovie
            movieNameTwo.innerHTML = randomMovie
            movieNameDiv.appendChild(movieName)
            movieNameDiv.replaceChild(movieNameTwo, movieName)
            var posterPath = popularMovies.poster_path
            // console.log(posterPath)
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
        // console.log(data);
        var baseUrl = data.images.base_url
        // console.log(baseUrl)
        var posterSize = data.images.poster_sizes[1]
        // console.log(posterSize)
        
        movieImage.setAttribute("src",  baseUrl + "/" + posterSize + posterPath)
        movieImageTwo.setAttribute("src",  baseUrl + "/" + posterSize + posterPath)
        moviePlaceholder.replaceWith(movieImage)
        movieImage.replaceWith(movieImageTwo)
        // console.log(movieImage)

    })
}


function saveShabash() {
    var latestMovieName= latestMovie.randomMovie
    var latestCocktailName = latestCocktail.drinkName
    console.log("this is the latest Movie Name:", latestMovieName)
    var shabashCombo = {latestCocktailName, latestMovieName}
    savedComboNames+=(shabashCombo)
        localStorage.setItem("savedComboNames", JSON.stringify(shabashCombo))
        console.log("this is the shabash combo:", shabashCombo)

        var comboList = document.createElement("li");
        comboList.textContent = JSON.stringify(shabashCombo)
        saveComboEl.appendChild(comboList)

}



document.getElementById('save-btn').addEventListener('click', saveShabash)
document.getElementById('myshabash').addEventListener('click', getRandomDrink)
document.getElementById('myshabash').addEventListener('click', getRandomMovie)
