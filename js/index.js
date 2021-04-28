
const container = document.querySelector(".container");
const url = "https://www.balldontlie.io/api/v1/players";

 container.innerHTML = "";

  async function apiCall () {

    try {
    
    const result = await fetch(url)
  
    const data = await result.json();

    const hoy = data.data;
    
    console.log(data);

    
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
