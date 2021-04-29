
const container = document.querySelector(".container");
const loader = document.querySelector(".loader");
const url = "https://www.balldontlie.io/api/v1/players";

container.innerHTML = "";

  async function apiCall () {

    try {
    
    const result = await fetch(url)
  
    const data = await result.json();

    const stats = data.data;
    
    console.log(data);


    
    for (let i = 1; i < stats.length; i++) {

      if (i === 15) {
        break
      }


    container.innerHTML += `<a class="card" href="details.html?id=${i}"> <div class="teams"> ${stats[i].team.full_name} (${stats[i].team.abbreviation}),${stats[i].team.conference} ${stats[i].team.division} </div> </a> `;
 }

  } catch (error) {
    
    console.log("error");

    }

}

apiCall();
