"use strict";

function addListenersToFilm() {
  const allFilms = document.querySelectorAll(".js-boxNewItem");
  for (const film of allFilms) {
    film.addEventListener("click", handleClickFilm);
  }
}

function handleClickFilm(event) {
  const whereUClicked = event.target;
  const whereIAddedTheEvent = event.currentTarget;

  console.log(allData);
  console.log(whereIAddedTheEvent);

  const selectedId = whereIAddedTheEvent.id;

  const filmInfo = allData.find((film) => film.id === selectedId);
  const filmFav = favoriteFilms.find((eachFilm) => eachFilm.id === selectedId);

  /* if (filmFav === undefined) {
    // No es ya favorita
    // La añado
    favoriteFilms.push(filmInfo);
  } else {
    // Ya era una favorita
    // La quito de favoritas
    favoriteFilms = favoriteFilms.filter((film) => film.id !== selectedId);
  }
  console.log(favoriteFilms);
  const filteredFilms = filterFilms();

  // render
  renderFilms(filteredFilms);
  //whereIAddedTheEvent.classList.toggle('favorite');*/
}
