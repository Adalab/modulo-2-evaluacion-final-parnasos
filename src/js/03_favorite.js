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
  //console.log(filmId);
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
  renderFilms(allData);
  renderFavorites(favoriteFilms);
}
//console.log(favoriteFilms);
//onsole.log(allData);

function renderFavorites(data) {
  for (const favfilm of favoriteFilms) {
    favoriteSection.innerHTML += `<li class="liFav js-liFav" data-id="${favfilm.show.id}"><h3 class="titleFav js-titleFav">${favfilm.show.name}</h3><img class="js-picFav${favfilm.show.id} picFav"></img></li>`;
    const picFav = document.querySelector(`.js-picFav${favfilm.show.id}`);

    if (favfilm.show.image === null) {
      picFav.setAttribute(
        "src",
        `https://via.placeholder.com/210x295/ffffff/666666/?text=???`
      );
    } else {
      picFav.setAttribute("src", `${favfilm.show.image.medium}`);
    }
  }
}
