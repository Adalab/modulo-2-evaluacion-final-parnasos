"use strict";

let allData = [];
let favoriteFilms = [];

function handleSearch(event) {
  event.preventDefault();
  fetch(`http://api.tvmaze.com/search/shows?q=${searchInput.value}`)
    .then((response) => response.json())
    .then((data) => {
      const allData = data;
      renderFilms(allData);
    });
}

searchBtn.addEventListener("click", handleSearch);
