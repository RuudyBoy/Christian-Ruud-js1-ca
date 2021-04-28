
const container = document.querySelector(".container");
const url = "https://www.easports.com/fifa/ultimate-team/api/fut/item";
const corsUrl = "https://noroffcors.herokuapp.com/" + url;

 container.innerHTML = "";

  async function apiCall () {

    try {
    
    const result = await fetch(corsUrl)
  
    const data = await result.json();

    const hoy = data.items;

    console.log(hoy);

    
    for (let i = 0; i < hoy.length; i++) {

      if (i === 15) {
        break
      }


    container.innerHTML += `<a class="card" href="details.html?id=${i}">${i} </a> `;
 }

  } catch (error) {
    
    console.log("error");

    }

}

apiCall();
