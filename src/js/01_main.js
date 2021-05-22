"use strict";

let allData = [];
let favoriteFilms = [];

function handleSearch(event) {
  event.preventDefault();
  fetch(`http://api.tvmaze.com/search/shows?q=${searchInput.value}`)
    .then((response) => response.json())
    .then((data) => {
      const allData = data;
      //todas las pelis encontradas
      console.log(allData);

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

function renderFilms(data) {
  let filmsListContent = filmsList.innerHTML;
  filmsListContent = "";
  for (const eachData of data) {
    const showAllData = eachData.show;
    //console.log(showAllData); // cada una de las pelis dentro del objeto
    //console.log(showAllData.name);
    //console.log(showAllData.image);
    const newItem = document.createElement("li");
    const picFilm = document.createElement("img");
    filmsList.appendChild(newItem);
    filmsList.appendChild(picFilm);
    const newContent = document.createTextNode(`${showAllData.name}`);
    newItem.appendChild(newContent);
    if (showAllData.image === null) {
      picFilm.setAttribute(
        "src",
        `https://via.placeholder.com/210x295/ffffff/666666/?text=${showAllData.name}`
      );
    } else {
      picFilm.setAttribute("src", `${showAllData.image.medium}`);
    }
  }
}

/* const paletteFav = favoritePalettes.find((eachPalette) => eachPalette.id === palette.id );
  
      const classFavorite = paletteFav === undefined ? '' : 'favorite';
  
      
}*/
searchBtn.addEventListener("click", handleSearch);
