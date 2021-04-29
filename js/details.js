
const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");


const url = "https://www.balldontlie.io/api/v1/players/" + id;

const detailsResults = document.querySelector(".details-results");
const idContainer = document.querySelector(".id");
idContainer.innerHTML = id;


detailsResults.innerHTML = "";


async function fetchBook () {
    try {

        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHTML(details);

    }
    
    catch (error) {
     console.log("error");
     detailsResults.innerHTML = "An error has occured :("
 }
}

fetchBook ();


function createHTML (details) {

    document.title = `${details.first_name} ${details.last_name} `;

    detailsResults.innerHTML = `<div class="player-stats"> Full name: ${details.first_name} ${details.last_name} Position: ${details.position} Height:${details.height_feet} ${details.height_inches} Weight:${details.weight_pounds}  </div>` ;
    
}





