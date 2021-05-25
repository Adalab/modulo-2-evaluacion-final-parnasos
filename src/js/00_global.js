"use strict";
const form = document.querySelector("js-form");
const searchInput = document.querySelector(".js-searchText");
const searchBtn = document.querySelector(".js-searchBtn");
const filmsList = document.querySelector(".js-filmList");
const favoriteSection = document.querySelector(".js-favoriteItems");

if (localStorage.getItem("favData") !== null) {
  const favSaved = JSON.parse(localStorage.getItem("favData"));
  const allSaved = JSON.parse(localStorage.getItem("allData"));
  console.log(favSaved);
  renderFavorites(favSaved);
}
