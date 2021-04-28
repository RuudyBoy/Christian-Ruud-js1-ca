
const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");


const url = "https://www.balldontlie.io/api/v1/players/" + id;

const detailsContainer = document.querySelector(".details-container");
const idContainer = document.querySelector(".id");
idContainer.innerHTML = id;


detailsContainer.innerHTML = "";


async function fetchBook () {
    try {

        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHTML(details);

    }
    
    catch (error) {
     console.log("error");
     detailsContainer.innerHTML = "An error has occured :("
 }
}

fetchBook ();


function createHTML (details) {

    document.title = `${details.type}`;

    detailsContainer.innerHTML = `<div class="details_container"> Full name: ${details.first_name} ${details.last_name} Weight:${details.weight_pounds}  </div>` ;
    
}





