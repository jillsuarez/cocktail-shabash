var mainDiv = document.getElementById("main")

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
    
       })
    }

function getRandomMovie () {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=b61f9e5cd6af472f99fe271ee07c0fcb&language=en-US&page=1").then(function(response){
        return response.json()
    }).then(data => {
        console.log(data);
        var randomMovie = Math.floor(Math.random() * 20)
        var popularMovies = data.results[randomMovie]
        console.log(popularMovies)
    }) 
}

getRandomMovie();
getRandomDrink();