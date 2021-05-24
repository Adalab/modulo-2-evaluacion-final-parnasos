"use strict";

let allData = [];
let favoriteFilms = [];

function handleSearch(event) {
  event.preventDefault();
  fetch(`//api.tvmaze.com/search/shows?q=${searchInput.value}`)
    .then((response) => response.json())
    .then((data) => {
      allData = data;
      renderFilms(allData);
      localStorage.setItem("allData", JSON.stringify(allData));
    });
}

searchBtn.addEventListener("click", handleSearch);

/*function handleSearch(event) {
  if (localStorage.getItem("films") === null) {
    // No tiene los datos guardados
    fetch(`http://api.tvmaze.com/search/shows?q=${searchInput.value}`)
      .then((response) => response.json())
      .then((data) => {
        allData = data;

        // setItem

        localStorage.setItem("films", JSON.stringify(allData));

        renderFilms(allData);
      });
  } else {
    // Sí tiene los datos guardados

    allData = JSON.parse(localStorage.getItem("films"));
    renderFilms(allData);
  }
}
searchBtn.addEventListener("click", handleSearch);*/
