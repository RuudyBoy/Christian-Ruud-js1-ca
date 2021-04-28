

const queryString = document.location.search;

console.log(queryString);

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);


const detailsContainer = document.querySelector(".details-container");

const idContainer = document.querySelector(".id");
idContainer.innerHTML = id;

const url = "https://free-nba.p.rapidapi.com/players?page=0&per_page=25" + id;

const apiKey =  {"headers": {
    "x-rapidapi-key": "623b2d79a6msh38ce6bc44c7bb1ap1aaf80jsn6fca4a0052bc",
    "x-rapidapi-host": "free-nba.p.rapidapi.com"
}};

async function gameStats () {
    try {

        const response = await fetch(url, apiKey);
        const details = await response.json();

        console.log(details);

        createHTML(details);


    }
    
    catch (error) {
     console.log("error");
     detailsContainer.innerHTML = "An error has occured :("
 }
}

gameStats ();

function createHTML(details){



}




