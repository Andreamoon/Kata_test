import { getTitle, getElementbyId } from "./utils";

/** ========================================================
      GET  del prezzo  e quantità di ogni categoria di prodotti
    ===========================================================*/

export const getObj = () => {
  const obj = [];
  let music = {};
  let book = {};
  let chocholate = {};
  let importedChocolatebar = {};
  let importedParfum = {};
  let importedParfBis = {};
  let bottleOfParfum = {};
  let pills = {};
  let importedChock = {};

  /**music */
  music.title = getTitle(".musicCd");
  music.price = $("#music").val();
  music.quantity = $("#musicQnt").val();
  music.category = "music";

  /**book */
  book.title = getTitle(".bookTitle");
  book.price = $("#book").val();
  book.quantity = $("#bookQnt").val();
  book.category = document.querySelector(".book").textContent;

  /**chocolate */
  chocholate.title = getTitle(".chocolateBar");
  chocholate.price = $("#chocolate").val();
  chocholate.quantity = $("#chocQnt").val();
  chocholate.category = document.querySelector(".food").textContent;

  /**importedchocolateBar */
  importedChocolatebar.title = getTitle(".importedChock");
  importedChocolatebar.price = $("#importedChock").val();
  importedChocolatebar.quantity = $("#importedChocQnt").val();
  importedChocolatebar.category = document.querySelector(".food").textContent;

  /**importedParfum */
  importedParfum.title = getTitle(".importedParfum");
  importedParfum.price = $("#importedParfum").val();
  importedParfum.quantity = $("#importedParfQnt").val();
  importedParfum.category = "cosmetics";

  /** importedParfmBis*/
  importedParfBis.title = getTitle(".importedParfumBis");
  importedParfBis.price = $("#importedParfumBis").val();
  importedParfBis.quantity = $("#importedParfQntBis").val();
  importedParfBis.category = "cosmetics";

  /** bottle of parfum */
  bottleOfParfum.title = getTitle(".bottleParf");
  bottleOfParfum.price = $("#bottleParfum").val();
  bottleOfParfum.quantity =  $("#bottleParfQnt").val();
  bottleOfParfum.category = "cosmetics";

  /**pills */
  pills.title = getTitle(".pills");
  pills.price = $("#pills").val();
  pills.quantity = $("#pillsQnt").val();
  pills.category = document.querySelector(".medical").textContent;

  /**importedChock */
  importedChock.title = getTitle(".importedBoxChock");
  importedChock.price = $("#importedBoxChock").val();
  importedChock.quantity = $("#importedBoxChockQnt").val();
  importedChock.category = document.querySelector(".food").textContent;

  obj.push(
    music,
    book,
    chocholate,
    importedChocolatebar,
    importedParfum,
    importedParfBis,
    bottleOfParfum,
    pills,
    importedChock
  );
  return obj;
};
