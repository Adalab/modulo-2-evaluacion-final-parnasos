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
  const objSerieData = allData.find(
    (serieData) => serieData.show.id === filmId
  );
  if (idExist === undefined) {
    favoriteFilms.push(objSerieData);
  } else {
    favoriteFilms = favoriteFilms.filter(
      (favoriteData) => favoriteData.show.id !== filmId
    );
  }
  localStorage.setItem("favData", JSON.stringify(favoriteFilms));
  renderFilms(allData);
  renderFavorites(favoriteFilms);
  console.log(objSerieData.show.name);
}
