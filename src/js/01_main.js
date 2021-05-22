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
}

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
    picFilm.setAttribute("src", `${showAllData.image.medium}`);
    //picFilm.src = `${showAllData.image}`;
    //const newPic = document.createTextNode(`${showAllData.image}`);
    newItem.appendChild(newContent);
    //picFilm.appendChild(picFilm);
  }
  /*for (const film of allData) {
    let htmlName = "";
    for (let i = 0; i < film.name.length; i++) {
      htmlName += `<li class="item__film-each" style="background-color:#${film.name[i]};"></li>`;
    }
  }*/

  /* const paletteFav = favoritePalettes.find((eachPalette) => eachPalette.id === palette.id );
  
      const classFavorite = paletteFav === undefined ? '' : 'favorite';
  
      paletteList.innerHTML += `
        <li id="${palette.id}" class="palette__list--item js-card ${classFavorite}">
          <h3 class="item__name">${palette.name}</h3>
          <p>Origen:${palette.from}</p>
          <div class="item__colors-box">
            <span>Colores:</span>
            <ul class="item__colors-list">
              ${htmlColors}
            </ul>
          </div>
        </li>`;
    } */
}
searchBtn.addEventListener("click", handleSearch);
