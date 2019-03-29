import Product from "./ProductClass";


let checkQnt = 0;
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
    "BoximportedChockIdPrice",
    "BoximportedChockIdQnt"
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


    $(".card-body").append(` <div class="row">
    <div class="col-sm-2">
      <img
        class="img-responsive"
        src="http://placehold.it/100x70"
      />
    </div>
    <div class="col-sm-6 float:left">
      <h4 class="product-name ${el.title}"><strong>${el.title}</strong></h4>
      <h4><small class="${el.category}" >${el.category}</small></h4>
    </div>
    <div class="col-sm-4">
    
      <div class="col-sm-6 float-right">
     
        <input
          type="text"
          class="form-control input-sm"
          id="${el.priceId}"
          value=" € ${el.price}"
        />
      </div>
      <div class="col-sm-6">

      <select class="form-control input-sm" id="${el.quantityId}">
      <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>    
     
      </div>
      
    </div>
  </div>
  <hr />
  `);



    // if (parseInt($(`#${el.quantityId}`).val()) === 0) {
    //   //console.log($(`#${el.quantityId}`).val());
    //   $("#button").attr("disabled", true);
    // }

    // $(`#${el.quantityId}`).bind("click", () => {


    //   if (checkQnt <= 0) {
    //     checkQnt += parseInt($(`#${el.quantityId}`).val())
    //     localStorage.setItem('quantity', checkQnt)
    //   } else {
    //     checkQnt -= parseInt($(`#${el.quantityId}`).val())
    //     localStorage.setItem('quantity', checkQnt)

    //   }
    //   // checkQnt -= parseInt($(`#${el.quantityId}`).val())
    //   //localStorage.setItem('quantity', checkQnt)

    //   console.log(checkQnt)

    //   if (parseInt($(`#${el.quantityId}`).val()) === 0) {
    //     // console.log(parseInt($(`#${el.quantityId}`).val()))
    //     $("#button").attr("disabled", true);
    //   } else {
    //     $("button").removeAttr("disabled");

    //   }
    // });


  });
};