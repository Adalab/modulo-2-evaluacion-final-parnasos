"use strict";

function addListenersToFilm() {
  const allFilms = document.querySelectorAll(".js-liElement");
  for (const film of allFilms) {
    film.addEventListener("click", handleClickFilm);
  }
}

function handleClickFilm(event) {
  const filmSelected = event.currentTarget;

  const filmId = parseInt(filmSelected.dataset.id);
  const idExist = favoriteFilms.find(
    (favoriteData) => favoriteData.show.id === filmId
  );
  if (idExist === undefined) {
    const objSerieData = allData.find(
      (serieData) => serieData.show.id === filmId
    );
    favoriteFilms.push(objSerieData);
  } else {
    favoriteFilms = favoriteFilms.filter(
      (favoriteData) => favoriteData.show.id !== filmId
    );
  }
  localStorage.setItem("favData", JSON.stringify(favoriteFilms));
  renderFilms(allData);
  renderFavorites(favoriteFilms);
}
