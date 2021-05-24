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
  addToSection(favoriteFilms);
}
console.log(favoriteFilms);
console.log(allData);

function addToSection(data) {
  for (const eachData of allData) {
    const showAllData = eachData.show.id;
    if (showAllData === filmId) {
      const pickedFilm = pickedFilm.parentElement;
    }
    for (const favfilm of favoriteFilms) {
      const favLi = document.createElement("li");
      //const pickedFilm = allData.find((favoriteId) => favoriteId === filmId);
      //const showPicked = pickedFilm.parentElement;
      const favLicontent = document.createTextNode(
        `${showPicked.name}${showPicked.src}`
      );
      favoriteSection.appendChild(favLi);
      favLi.appendChild(favLicontent);
    }
  }
}
