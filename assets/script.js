var mainDiv = document.getElementById("main");
var felid = document.querySelector('textarea'); // comment Section textarea
var backUp = felid.getAttribute('placeholder'); // comment Section
var commentBtn = document.querySelector('.comment-btn'); // comment Section
var clear = document.getElementById('clear');  ///clear textarea 

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
       /*var img = document.createElement("img");
       img.style.css = "width:500px; height:auto";
       img.setAttribute("src",data.drinks[0].strDrinkThumb)
       console.log(img)
       mainDiv.appendChild(img)*/
    })
}

function getLatestMovie () {
    fetch("https://api.themoviedb.org/3/movie/897693?api_key=b61f9e5cd6af472f99fe271ee07c0fcb&language=en-US").then(function(response){
        return response.json()
    }).then(data => {
        console.log(data);
       /* var drinkId = data.drinks[0].idDrink
        console.log(drinkId);
       // getDrinkDetails(drinkId)
       var img = document.createElement("img");
       img.style.css = "width:500px; height:auto";
       img.setAttribute("src",data.drinks[0].strDrinkThumb)
       console.log(img)
       mainDiv.appendChild(img)*/
    })
}

/*function getRandomMovie () {
    fetch("https://api.themoviedb.org/3/movie/897693?api_key=b61f9e5cd6af472f99fe271ee07c0fcb&language=en-US").then(function(response){
        return response.json()
    }).then(data => {
        console.log(data);
        var drinkId = data.drinks[0].idDrink
        console.log(drinkId);
       // getDrinkDetails(drinkId)
       var img = document.createElement("img");
       img.style.css = "width:500px; height:auto";
       img.setAttribute("src",data.drinks[0].strDrinkThumb)
       console.log(img)
       mainDiv.appendChild(img)
    })*/


getLatestMovie();
getRandomDrink();