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
    });
}

searchBtn.addEventListener("click", handleSearch);
