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

/* function filterFilms() {
    // Coger el valor actual
    const searchText = searchInput.value.toLowerCase();

    // Filtrar las paletas que inluyen el campo de búsqueda
    const filteredFilms = allData.filter((film) =>
      film.name.toLowerCase().includes(searchText)
    );

    return filteredFilms;
  }*/

//const filteredFilms = filterFilms();

// render
// renderFilms(filteredFilms);

/* const paletteFav = favoritePalettes.find((eachPalette) => eachPalette.id === palette.id );
  
      const classFavorite = paletteFav === undefined ? '' : 'favorite';
  
      
}*/
searchBtn.addEventListener("click", handleSearch);
