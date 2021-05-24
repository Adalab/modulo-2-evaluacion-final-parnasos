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

if (localStorage.getItem("favData") !== null) {
  const favSaved = JSON.parse(localStorage.getItem("favData"));
  // const allSaved = JSON.parse(localStorage.getItem("allData"));
  console.log(favSaved);
  renderFavorites(favSaved);
}

function renderFavorites(data) {
  console.log(`entro ahora`, data);
  for (const item of data) {
    console.log(`entro en el for`);
    if (item === null) {
      favoriteSection.innerHTML += "<h3>Hola</h3>";
    }
    favoriteSection.innerHTML += `<li class="liFav js-liFav" data-id="${item.show.id}"><h3 class="titleFav js-titleFav">${item.show.name}</h3><img class="js-picFav${item.show.id} picFav"></img></li>`;
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
