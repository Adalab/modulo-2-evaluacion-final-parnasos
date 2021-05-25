"use strict";

function renderFilms(data) {
  filmsList.innerHTML = "";
  for (const eachData of data) {
    const showAllData = eachData.show;

    const idExist = favoriteFilms.find(
      (favoriteId) => favoriteId.show.id === showAllData.id
    );

    if (idExist === undefined) {
      filmsList.innerHTML += `<li class="liElement js-liElement" data-id="${showAllData.id}"><h3 class="liTitle js-titleItem">${showAllData.name}</h3><img class="js-liPic${showAllData.id} liPic"></img></li>`;
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
      filmsList.innerHTML += `<li class="js-liElement liFavorite" data-id="${showAllData.id}"><h3 class="liTitleFav js-titleItem">${showAllData.name}</h3><img class="js-liPicFav${showAllData.id} liPicFav"></img></li>`;
      const itemPic = document.querySelector(`.js-liPicFav${showAllData.id}`);
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

function renderFavorites(data) {
  filmsList.innerHTML = "";
  for (const item of data) {
    if (item === null) {
      favoriteSection.innerHTML += "<h3>Hola</h3>";
    }
    favoriteSection.innerHTML += `<li class="liFav js-liFav" data-id="${item.show.id}"><h3 class="titleFav js-titleFav">${item.show.name}</h3><img class="js-picFav${item.show.id} picFav"></img></li><div class= "line"></div>`;
    const picFav = document.querySelector(`.js-picFav${item.show.id}`);

    if (item.show.image === null) {
      picFav.setAttribute(
        "src",
        `https://via.placeholder.com/210x295/ffffff/666666/?text=???`
      );
    } else {
      picFav.setAttribute("src", `${item.show.image.medium}`);
    }
  }
}
