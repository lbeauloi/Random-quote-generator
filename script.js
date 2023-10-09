//creation du btn
const quoteBtn = document.createElement("button");
quoteBtn.textContent = "Generate a quote";
document.body.appendChild(quoteBtn);

//event listener sur le btn
quoteBtn.addEventListener("click", () => {
  fetch("https://thatsthespir.it/api") //appelle l'API
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let quoteDiv = document.createElement("div"); //creation div
      let quoteP = document.createElement("p"); // creation d'un p pour la quote
      let authorP = document.createElement("p"); // creation d'un p pour l'auteur
      let quoteImg = document.createElement("img"); // creation d'une img pour la photo

      quoteP.textContent = `${data.quote}`; // valeur de la quote
      authorP.textContent = `${data.author}`; // auteur
      quoteImg.src = `${data.photo}`; //photo

      quoteDiv.appendChild(quoteP);
      quoteDiv.appendChild(authorP);
      quoteDiv.appendChild(quoteImg);
      document.body.appendChild(quoteDiv);
    })
    .catch((error) => {
      console.log("There was an error!", error);
    });
});
