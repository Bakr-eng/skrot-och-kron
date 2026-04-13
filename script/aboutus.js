const url = "https://randomuser.me/api/?results=15"
const personalDiv = document.getElementById("personal")

fetch(url)
  .then(response => response.json())
    .then(function(data) {
        console.log(data)
        data.results.forEach(person => {
          let card = document.createElement("div")
          card.classList.add("card") 
          
          
      card.innerHTML = `
        <img src="${person.picture.large}">
        <h3>${person.name.first} ${person.name.last}</h3>
        <p>${person.email}</p>
        <p>${person.location.city}, ${person.location.country}</p>
      `
      personalDiv.appendChild(card)
        });
    })
  .catch(error => console.log("något gick fel: " + error));
