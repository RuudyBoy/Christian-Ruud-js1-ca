
const url = "https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699";

const container = document.querySelector(".container");

async function apiCall () {

    try {

   


    

        const response = await fetch(url);

        const data = await response.json();
        
        const array = data.items;

        console.log(array);

        container.innerHTML = "";

        for (let i = 0; i < array.length; i++) {
            
            if (i === 3) {
                break
            }

            container.innerHTML += `<div class="container">  Name:${array[i].volumeInfo.title}  Release date:${array[i].volumeInfo.publishedDate}  Pagecount:${array[i].volumeInfo.pageCount} <div> `;
        }
 }      catch (error) {
     console.log("error");
     container.innerHTML = "An error has occured :("
 }



        
}

apiCall();