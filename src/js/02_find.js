"use strict";

function renderFilms(data) {
  filmsList.innerHTML = "";

  for (const eachData of data) {
    const showAllData = eachData.show;
    const boxNewItem = document.createElement("div");
    boxNewItem.classList.add("boxNewItem");
    filmsList.appendChild(boxNewItem);
    const newItem = document.createElement("li");
    boxNewItem.appendChild(newItem);
    newItem.classList.add("liElement");
    newItem.setAttribute("id", `${showAllData.id}`);
    const itemName = document.createElement("h3");
    newItem.appendChild(itemName);
    itemName.classList.add("titleItem");
    const titleItem = document.createTextNode(`${showAllData.name}`);
    itemName.appendChild(titleItem);
    const itemPic = document.createElement("img");
    itemPic.classList.add("liPic");
    newItem.appendChild(itemPic);
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
