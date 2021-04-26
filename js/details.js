const detailsContainer = document.querySelector(".details-container");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if (id === null) {
    location.href = "/";
}

console.log(id);

const url = "https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699" + id;

const idContainer = document.querySelector(".id");


idContainer.innerHTML = id;


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
    detailsContainer.innerHTML = `<h1> ${details.title} </h1>`;
}