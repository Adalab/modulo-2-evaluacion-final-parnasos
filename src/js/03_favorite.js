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

  console.log(globalData);
  console.log(whereIAddedTheEvent);

  const selectedId = whereIAddedTheEvent.id;

  const paletteInfo = globalData.find((palette) => palette.id === selectedId);
  const paletteFav = favoritePalettes.find(
    (eachPalette) => eachPalette.id === selectedId
  );

  if (paletteFav === undefined) {
    // No es ya favorita
    // La añado
    favoritePalettes.push(paletteInfo);
  } else {
    // Ya era una favorita
    // La quito de favoritas
    favoritePalettes = favoritePalettes.filter(
      (palette) => palette.id !== selectedId
    );
  }

  const filteredPalettes = filterPalettes();

  // render
  renderPalettes(filteredPalettes);
  //whereIAddedTheEvent.classList.toggle('favorite');
}
