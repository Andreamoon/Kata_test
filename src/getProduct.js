import { getClassValue, getElementbyId } from "./utils";

/** ========================================================
      GET  del prezzo  e quantità , categoria e titolo  dei prodotti
    ===========================================================*/

export const getObj = () => {
  const obj = [];
  let music = {};
  let book = {};
  let chocholateBar = {};
  let importedChocolateBox = {};
  let importedParfum = {};
  let importedParfBis = {};
  let bottleOfParfum = {};
  let pills = {};
  let importedChock = {};

  /**music */
  music.title = getClassValue(".cd");
  music.price = $("#musicIdPrice").val();
  music.quantity = $("#musicIdQnt").val();
  music.category = getClassValue(".music");

  /**book */
  book.title = getClassValue(".Book");
  book.price = $("#bookIdPrice").val();
  book.quantity = $("#bookIdQnt").val();
  book.category = getClassValue(".book");

  // /**chocolate */
  chocholateBar.title = getClassValue(".Bar");
  chocholateBar.price = $("#chockBarIdPrice").val();
  chocholateBar.quantity = $("#chockBarIdQnt").val();
  chocholateBar.category = getClassValue(".food");

  /**importedchocolateBar */
  importedChocolateBox.title = getClassValue(".bar");
  importedChocolateBox.price = $("#importedhChockBoxIdPrice").val();
  importedChocolateBox.quantity = $("#importedChockBoxIdQnt").val();
  importedChocolateBox.category = getClassValue(".food");

  // /**importedParfum */
  importedParfum.title = getClassValue(".bottle");
  importedParfum.price = $("#importedhParfumIdPrice").val();
  importedParfum.quantity = $("#importedParfumIdQnt").val();
  importedParfum.category = getClassValue(".cosmetics");
  
  // /** importedParfmBis*/
  importedParfBis.title = getClassValue(".Bis");
  importedParfBis.price = $("#importedParfumBisIdPrice").val();
  importedParfBis.quantity = $("#importedParfumBisIdQnt").val();
  importedParfBis.category = getClassValue(".cosmetics");

  // /** bottle of parfum */
  bottleOfParfum.title = getClassValue(".parfum");
  bottleOfParfum.price = $("#bottleParfIdPrice").val();
  bottleOfParfum.quantity = $("#bottleParfIdQnt").val();
  bottleOfParfum.category = getClassValue(".cosmetics");

  // /**pills */
  pills.title = getClassValue(".pills");
  pills.price = $("#pillsIdPrice").val();
  pills.quantity = $("#pillsIdQnt").val();
  pills.category = getClassValue(".medical");

  // /**importedChock */
  importedChock.title = getClassValue(".chocolates");
  importedChock.price = $("#BoximportedChockIdPrice").val();
  importedChock.quantity = $("#BoximportedChockIdQnt").val();
  importedChock.category = getClassValue(".food");

  obj.push(
    music,
    book,
    chocholateBar,
    importedChocolateBox,
    importedParfum,
    importedParfBis,
    bottleOfParfum,
    pills,
    importedChock
  );
   
  return obj;
};
