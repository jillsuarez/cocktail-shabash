var mainDiv = document.getElementById("main")

mainDiv.setAttribute("class", "container");

function getRandomDrink () {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then(function(response){
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
    })
}

getRandomDrink();