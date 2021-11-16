var mainDiv = document.getElementById("cocktail-i");
var felid = document.querySelector('textarea'); // comment Section textarea
var backUp = felid.getAttribute('placeholder'); // comment Section
var commentBtn = document.querySelector('.comment-btn'); // comment Section
var clear = document.getElementById('clear');  ///clear textarea 
var cocktailNameDiv = document.getElementById("cockatil-d");
var movieNameDiv = document.getElementById("movie-d");

felid.onfocus = function() {     /// textarea 
    this.setAttribute('placeholder', '');
    this.style.borderColor = "hotpink";
    commentBtn.style.display = "block"
};

felid.onblur = function(){     
    this.setAttribute('placeholder', backUp);
    this.style.borderColor = "hotpink"
};

clear.onclick = function() {
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
       var cocktailName = document.createElement("div")
       cocktailName.setAttribute("p", data.drinks[0].strDrink)
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
        var movieName = document.createElement("div")
        movieName.setAttribute("p", randomMovie)
        movieNameDiv.appendChild(movieName)
    }) 
}

getRandomMovie();
getRandomDrink();