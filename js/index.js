
const url = "https://free-nba.p.rapidapi.com/players?page=0&per_page=25";

const apiKey =  {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "623b2d79a6msh38ce6bc44c7bb1ap1aaf80jsn6fca4a0052bc",
		"x-rapidapi-host": "free-nba.p.rapidapi.com"
	}};

const container = document.querySelector(".container");

async function apiCall () {

    try {

        const response = await fetch(url, apiKey);
        const basket = await response.json();

        const results = basket.data;
        console.log(basket);

        
        container.innerHTML = "";

        for (let i = 0; i < results.length; i++) {
           
            container.innerHTML += `<a href="details.html?id=${results[i].id}" class="card"> <div class="container"> basket league:${results[i].team.full_name} <div> </a> `;
        }
 }      catch (error) {
     console.log("error");
     container.innerHTML = "An error has occured :("
 }



        
}

apiCall();