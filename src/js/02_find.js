"use strict";

function renderFilms(data) {
  filmsList.innerHTML = "";
  for (const eachData of data) {
    const showAllData = eachData.show;

    const idExist = favoriteFilms.find(
      (favoriteId) => favoriteId.show.id === showAllData.id
    );

    if (idExist === undefined) {
      filmsList.innerHTML += `<li class="liElement js-liElement" data-id="${showAllData.id}"><h3 class="titleItem js-titleItem">${showAllData.name}</h3><img class="js-liPic${showAllData.id} liPic"></img></li>`;
      const itemPic = document.querySelector(`.js-liPic${showAllData.id}`);

      if (showAllData.image === null) {
        itemPic.setAttribute(
          "src",
          `https://via.placeholder.com/210x295/ffffff/666666/?text=???`
        );
      } else {
        itemPic.setAttribute("src", `${showAllData.image.medium}`);
      }
    } else {
      filmsList.innerHTML += `<li class="js-liElement liFavorite" data-id="${showAllData.id}"><h3 class="titleFav js-titleItem">${showAllData.name}</h3><img class="js-liPic${showAllData.id} liPic"></img></li>`;
      const itemPic = document.querySelector(`.js-liPic${showAllData.id}`);
      if (showAllData.image === null) {
        itemPic.setAttribute(
          "src",
          `https://via.placeholder.com/210x295/ffffff/666666/?text=???`
        );
      } else {
        itemPic.setAttribute("src", `${showAllData.image.medium}`);
      }
    }
  }
  addListenersToFilm();
}

/*function filterFilms() {
  // Coger el valor actual
  const searchInputText = searchInput.value.toLowerCase();

  // Filtrar las paletas que inluyen el campo de búsqueda
  const filteredFilms = allData.filter((film) =>
    film.name.toLowerCase().includes(searchInputText)
  );

  return filteredFilms;
}*/
