const btnReset = document.querySelector(".js-btnReset");
btnReset.addEventListener("click", resetFav);

function resetFav(event) {
  // event.preventDefault();
  //vaciamos el array de favoritos
  favoriteFilms = [];
  //limpiamos el ls
  localStorage.clear();
  //recargar la página después de borrar
  // location.reload();
}
