function getApi() {

    let inputField = document.getElementById("input-field");
    let url = `https://restcountries.eu/rest/v2/capital/${inputField.value}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountry(data));
    document.getElementById("input-field").value = "";
    section.removeChild(section.childNodes[section.childNodes.length - 1]);
}
let newDiv = document.createElement("div");
let section = document.getElementById("section");
function displayCountry(country) {
    console.log(country[0]);
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <div class="card w-75 mx-auto" style="width: 18rem;">
  <img src="${country[0].flag}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${country[0].name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Click here for more info</a>
  </div>
</div>
    `;
    section.appendChild(newDiv);




}