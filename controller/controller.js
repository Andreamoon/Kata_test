function getValue() {
  /** ==================================
      GET  dei value e quantità di ogni categoria di prodotti
    ==================================*/
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
  const music = document.querySelector(".music").textContent;
  const book = document.querySelector(".book").textContent;
  const food = document.querySelector(".food").textContent;
  const cosmetics = document.querySelector(".cosmetics").textContent;
  const medical = document.querySelector(".medical").textContent;

  /**===============================0
   *            Titoli
   * ================================*/
  const chockImporded = document
    .querySelector(".importedChock")
    .textContent.toLocaleLowerCase()
    .trim();

  const parfumImported = document
    .querySelector(".importedParfum")
    .textContent.toLocaleLowerCase()
    .trim();

  const impBottleParfBis = document
    .querySelector(".importedParfumBtt")
    .textContent.toLocaleLowerCase()
    .trim();

  const bottleParfum = document
    .querySelector(".bottleParf")
    .textContent.toLocaleLowerCase()
    .trim();
  const pillsTitle = document
    .querySelector(".pills")
    .textContent.toLocaleLowerCase()
    .trim();

  const boxChockTitle = document
    .querySelector(".importedBoxChock")
    .textContent.toLocaleLowerCase()
    .trim();
  /**==================================
        stampa ricevuta
    ==================================*/

  var musicSum = calCulatePrice(
    checkCategories(music),
    musicPrice,
    musicQnt,
    music
  );
  var bookSum = calCulatePrice(checkCategories(book), bookPrice, bookQnt, book);

  var chocoSum = calCulatePrice(
    checkCategories(food),
    chocolatePrice,
    chocQnt,
    food
  );

  var importedChocoSum = calCulatePrice(
    checkCategories(food),
    importedChockPrice,
    importedChocQnt,
    chockImporded
  );
  var importedParfumSum = calCulatePrice(
    checkCategories(cosmetics),
    importedParfumPrice,
    importedParfumQnt,
    parfumImported
  );

  var impBottleParfBisSum = calCulatePrice(
    checkCategories(impBottleParfBis),
    importedParfBisPrice,
    importedParfBisQnt,
    impBottleParfBis
  );

  var bottleParfSum = calCulatePrice(
    checkCategories(cosmetics),
    bottleParfumPrice,
    bottleParfumQnt,
    bottleParfum
  );

  var pillSum = calCulatePrice(
    checkCategories(medical),
    pillsPrice,
    pillsQnt,
    pillsTitle
  );

  var importedBoxChock = calCulatePrice(
    checkCategories(food),
    boxImportedChockPrice,
    boxImpChockQnt,
    boxChockTitle
  );

  let obj = [];
  obj.push(
    musicSum,
    bookSum,
    chocoSum,
    importedChocoSum,
    importedParfumSum,
    impBottleParfBisSum,
    bottleParfSum,
    pillSum,
    importedBoxChock
  );

  console.log(obj);
}

function calCulatePrice(check, prezzo, quantity, label) {
  receiveObj = {};

  if (check) {
    let price = prezzo * quantity;

    if (checkImported(label)) {
      //se importato
      // console.log(checkImported(label));
      rate = 0.15;
      taxes = price * rate;
      subtotal = price + taxes;
      receiveObj.categories = label;
      receiveObj.taxes = taxes.toFixed(2);
      receiveObj.subtotal = subtotal.toFixed(2);
    } else {
      rate = 0.1;
      taxes = price * rate;
      subtotal = price + taxes;
      receiveObj.categories = label;
      receiveObj.taxes = taxes.toFixed(2);
      receiveObj.subtotal = subtotal.toFixed(2);
    }

    return receiveObj;
  } else {
    let price = prezzo * quantity;

    if (checkImported(label)) {
      let rate = 0.05;
      taxes = price * rate;
      console.log(taxes);
      subtotal = price + taxes;
      receiveObj.categories = label;
      receiveObj.importedTax = taxes.toFixed(2);
      receiveObj.subtotal = (Math.ceil(subtotal * 20 - 0.5) / 20).toFixed(2);
    } else {
      receiveObj.categories = label;
      //receiveObj.taxFree = true;
      receiveObj.subtotal = price;
    }

    return receiveObj;
  }
}

function checkImported(product) {
  var imported = product.match(/imported/g);

  if (imported) {
    return true;
  } else {
    return false;
  }
}

function checkCategories(categories) {
  //console.log(categories);
  switch (categories) {
    case "book":
      return false;

    case "medical":
      return false;

    case "food":
      return false;
    default:
      return true;
  }
}
