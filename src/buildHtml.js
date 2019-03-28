import Product from "./ProductClass";

export const buildHtml = () => {
  let htmlObj = [];

  /**Instanza degli oggetti della classe */
  let musicCd = new Product(
    "Music cd",
    "14.99",
    0,
    "music",
    "musicIdPrice",
    "musicIdQnt"
  );

  let book = new Product(
    "Book",
    "12.49",
    0,
    "book",
    "bookIdPrice",
    "bookIdQnt"
  );
  let chocholateBar = new Product(
    "Chocholate Bar",
    "0.85",
    0,
    "food",
    "chockBarIdPrice",
    "chockBarIdQnt"
  );
  let importedBoxChocolate = new Product(
    "Imported box chocholate bar",
    "10.00",
    0,
    "food",
    "importedhChockBoxIdPrice",
    "importedChockBoxIdQnt"
  );
  let importedParfum = new Product(
    "Imported Parfum bottle",
    "47.50",
    0,
    "cosmetics",
    "importedhParfumIdPrice",
    "importedParfumIdQnt"
  );
  let importedParfBis = new Product(
    "Imported Parfum Bis",
    "27.99",
    0,
    "cosmetics",
    "importedParfumBisIdPrice",
    "importedParfumBisIdQnt"
  );
  let bottleOfParfum = new Product(
    "Bottle of parfum",
    "18.99",
    0,
    "cosmetics",
    "bottleParfIdPrice",
    "bottleParfIdQnt"
  );
  let pills = new Product(
    "packet of headache pills",
    "9.75",
    0,
    "medical",
    "pillsIdPrice",
    "pillsIdQnt"
  );
  let importedChock = new Product(
    "box of imported chocolates",
    "11.25",
    0,
    "food",
    "importedChockBoxIdPrice",
    "importedChockBoxIdQnt"
  );

  htmlObj.push(
    musicCd,
    book,
    chocholateBar,
    importedBoxChocolate,
    importedParfum,
    importedParfBis,
    bottleOfParfum,
    pills,
    importedChock
  );
  htmlObj.map(el => {
    //console.log(el.priceId);
    $(".panel-body").append(` <div class="row">
    <div class="col-xs-2">
      <img
        class="img-responsive"
        src="http://placehold.it/100x70"
      />
    </div>
    <div class="col-xs-4">
      <h4 class="product-name ${el.title}"><strong>${el.title}</strong></h4>
      <h4><small class="${el.category}" >${el.category}</small></h4>
    </div>
    <div class="col-xs-6">
      <div class="col-xs-6 text-right">
        <input
          type="text"
          class="form-control input-sm"
          id="${el.priceId}"
          value="${el.price}"
        />
      </div>
      <div class="col-xs-4">
        <input
          type="text"
          class="form-control input-sm"
          id="${el.quantityId}"
          value=${el.quantity}
        />
      </div>
      <div class="col-xs-2"></div>
    </div>
  </div>
  <hr />
  `);
  });
};
