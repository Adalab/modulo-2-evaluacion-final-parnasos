const btn = document.querySelector(".js-btnReset");
btn.addEventListener("click", resetFav);

function resetFav (event);
event.preventDefault();
favoriteFilms = [];
favData