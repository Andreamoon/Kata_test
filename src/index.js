import {
  checkCategories,
  calCulatePrice,
  getTitle,
  buildReceive
} from "./utils";
import "./style/style.css";
document.getElementById("button").addEventListener("click", getValue, false);
document.getElementById("close").addEventListener("click", clearArray, false);

let receipt = [];


function getValue() {
  /** ========================================================
      GET  del prezzo  e quantità di ogni categoria di prodotti
    ===========================================================*/
  const musicPrice = $("#music").val();
  let musicQnt = $("#musicQnt").val();
  const bookPrice = $("#book").val();
  let bookQnt = $("#bookQnt").val();
  const chocolatePrice = $("#chocolate").val();
  let chocQnt = $("#chocQnt").val();
  const importedChockPrice = $("#importedChock").val();
  let importedChocQnt = $("#importedChocQnt").val();
  const importedParfumPrice = $("#importedParfum").val();
  let importedParfumQnt = $("#importedParfQnt").val();
  const importedParfBisPrice = $("#importedParfumBis").val();
  let importedParfBisQnt = $("#importedParfQntBis").val();
  const bottleParfumPrice = $("#bottleParfum").val();
  let bottleParfumQnt = $("#bottleParfQnt").val();
  const pillsPrice = $("#pills").val();
  let pillsQnt = $("#pillsQnt").val();
  const boxImportedChockPrice = $("#importedBoxChock").val();
  let boxImpChockQnt = $("#importedBoxChockQnt").val();

  /**==================================
      GET  delle categorie 
    ==================================*/
  // const music = document.querySelector(".music").textContent;
  const book = document.querySelector(".book").textContent;
  const food = document.querySelector(".food").textContent;
  // const cosmetics = document.querySelector(".cosmetics").textContent;
  const medical = document.querySelector(".medical").textContent;

  /**===============================0
   *            Titoli
   * ================================*/

  const musicCdTitle = getTitle(".musicCd");
  const bookTitle = getTitle(".bookTitle");
  const chockBarTitle = getTitle(".chocolateBar");
  const chockImportTitle = getTitle(".importedChock");
  const parfumImpTitle = getTitle(".importedParfum");
  const parfBisTitle = getTitle(".importedParfumBis");
  const bottleParfTitle = getTitle(".bottleParf");
  const pillsTitle = getTitle(".pills");
  const boxChockTitle = getTitle(".importedBoxChock");
  /**==================================
        stampa ricevuta
    ==================================*/

  

  const musicSum = calCulatePrice(
    checkCategories(music),
    musicPrice,
    musicQnt,
    musicCdTitle
  );

  const bookSum = calCulatePrice(
    checkCategories(book),
    bookPrice,
    bookQnt,
    bookTitle
  );

  const chocoSum = calCulatePrice(
    checkCategories(food),
    chocolatePrice,
    chocQnt,
    chockBarTitle
  );

  const importedChocoSum = calCulatePrice(
    checkCategories(food),
    importedChockPrice,
    importedChocQnt,
    chockImportTitle
  );

  const importedParfumSum = calCulatePrice(
    checkCategories("cosmetics"),
    importedParfumPrice,
    importedParfumQnt,
    parfumImpTitle
  );

  const importedParfBisSum = calCulatePrice(
    checkCategories("cosmetics"),
    importedParfBisPrice,
    importedParfBisQnt,
    parfBisTitle
  );

  const bottleParfSum = calCulatePrice(
    checkCategories("cosmetics"),
    bottleParfumPrice,
    bottleParfumQnt,
    bottleParfTitle
  );

  const pillSum = calCulatePrice(
    checkCategories(medical),
    pillsPrice,
    pillsQnt,
    pillsTitle
  );

  const importedBoxChock = calCulatePrice(
    checkCategories(food),
    boxImportedChockPrice,
    boxImpChockQnt,
    boxChockTitle
  );
  
  receipt.push(
    musicSum,
    bookSum,
    chocoSum,
    importedChocoSum,
    importedParfumSum,
    importedParfBisSum,
    bottleParfSum,
    pillSum,
    importedBoxChock
  );

  buildReceive(receipt);
  
}

function clearArray(){
  receipt = []
  return receipt;
}