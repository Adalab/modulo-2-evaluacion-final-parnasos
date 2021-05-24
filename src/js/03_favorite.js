"use strict";

function addListenersToFilm() {
  const allFilms = document.querySelectorAll(".js-liElement");
  for (const film of allFilms) {
    film.addEventListener("click", handleClickFilm);
  }
}

function handleClickFilm(event) {
  //const whereUClicked = event.target;
  const filmSelected = event.currentTarget;

  console.log(allData);
  console.log(filmSelected);

  const filmId = filmSelected.dataset.id;
  const idExist = favoriteFilms.find((favoriteId) => favoriteId === filmId);
  console.log(filmId);
  if (idExist === undefined) {
    favoriteFilms.push(filmId);
  } else {
    favoriteFilms = favoriteFilms.filter((favoriteId) => favoriteId !== filmId);
  }
  renderFilms(allData);
}
console.log(favoriteFilms);
console.log(allData);
/*if (boxSelected.classList.contains("boxNewItem")) {
    boxSelected.classList.remove("boxNewItem");
    boxSelected.classList.add("boxFav");
    const titleSelected = document.querySelector(".js-titleItem");
    titleSelected.classList.remove("titleItem");
    titleSelected.classList.add("titleFav");
  } else {
    const titleSelected = document.querySelector(".js-titleItem");
    titleSelected.classList.add("titleItem");
    titleSelected.classList.remove("titleFav");
    boxSelected.classList.add("boxNewItem");
    boxSelected.classList.remove("boxFav");
  }
  const filmInfo = allData.find((film) => film.id === boxId);

  const filmFav = favoriteFilms.find((eachFilm) => eachFilm.id === boxId);

  if (filmFav === undefined) {
    // No es ya favorita
    // La añado
    favoriteFilms.push(boxSelected);
  } else {
    // Ya era una favorita
    // La quito de favoritas
    favoriteFilms = favoriteFilms.filter((film) => film.id !== boxId);
  }
  console.log(favoriteFilms);*/
//const filteredFilms = filterFilms();

/*// render
  renderFilms(favoriteFilms);
  //whereIAddedTheEvent.classList.toggle('favorite');*/
