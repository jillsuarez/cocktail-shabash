var mainDiv = document.getElementById("main")

mainDiv.setAttribute("class", "container");

document.getElementById("myshabash").addEventListener("click", getRandomDrink)

/*Need to test button to know what comes up
Make a div in the cocktail container
(In the html)
Get the description data from the API
Use document.getElementByID(“name”).innerHTML = description
*/

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

document.getElementById("myshabash").addEventListener("click", getLatestMovie)

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

function storageAct() {
    var usercomment=[document.getElementById("inserttextboxname").value[0],"user57821"]
    window.localStorage.setItem('user', JSON.stringify(usercomment));
}
/*Storing the comment*/

function displayComment() {
    const list=[]
    for (var i = 0; i < localStorage.length; i++){
        list.push(localStorage.getItem(localStorage.key(i)))
    }
    document.getElementById("insertlistelementname").innerHTML=list
    document.getElementById("insertlistelementname").style.display ='block'

}
/*Retrieving the comment. Field where comment will pop up will be hidden at first, then appear once comment is submitted*/
/*An unordered list element needs to be created in html, when ul is defined, say list will be hidden*/