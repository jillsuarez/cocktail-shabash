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
 let allInfoArr = []
 let cocktailName2 = ""
 let movieName2 =""

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
     cocktailName2 = saveObjectCocktail.drinkName;
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
         movieName2 = saveObject.randomMovie
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
   let obj = {}
   obj.cocktail= cocktailName2;
   obj.movie= movieName2;
    allInfoArr.push(obj)
    localStorage.setItem("allInfo", JSON.stringify(allInfoArr))
    console.log(JSON.parse(localStorage.getItem("allInfo")), 'this is all of our info')
    let localStorageArr=JSON.parse(localStorage.getItem("allInfo"))
    if(localStorageArr.length > 1){
    let itemPosition = localStorageArr.length-1
 
    let item = localStorageArr[itemPosition]
       console.log("this is item",item)
    saveComboEl.innerHTML += `<li> ${item.cocktail} - ${item.movie} </li>`
    }   
    else{
     JSON.parse(localStorage.getItem("allInfo")).map(singleObj => (saveComboEl.innerHTML += `<li> ${singleObj.cocktail} - ${singleObj.movie} </li>`));

    } 
    
}

function clearLocalStorage () {
    localStorage.clear();
    location.reload(true);
}



document.getElementById('save-btn').addEventListener('click', saveShabash)
document.getElementById('myshabash').addEventListener('click', getRandomDrink)
document.getElementById('myshabash').addEventListener('click', getRandomMovie)
document.getElementById('clear-btn').addEventListener
('click', clearLocalStorage)
