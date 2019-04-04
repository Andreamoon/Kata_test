import Product from "./ProductClass";
import $ from "jquery";
import music from "./assets/products/musicCd.jpeg"
import books from "./assets/products/books.jpg"
import chockBarImage from "./assets/products/chocolateBar.jpg"
import chockBox from './assets/products/chockBox.jpg'
import parfumImage from './assets/products/parfum.jpeg'
import pillsImage from './assets/products/pills.jpeg'
let count = 0;
export const buildHtml = () => {
  let htmlObj = [];

  /**Instanza degli oggetti della classe */
  let musicCd = new Product(
    "Music cd",
    "14.99",
    0,
    "music",
    "musicIdPrice",
    "musicIdQnt",
    music
  );

  let book = new Product(
    "Book",
    "12.49",
    0,
    "book",
    "bookIdPrice",
    "bookIdQnt", books
  );
  let chocholateBar = new Product(
    "Chocholate Bar",
    "0.85",
    0,
    "food",
    "chockBarIdPrice",
    "chockBarIdQnt", chockBarImage
  );
  let importedBoxChocolate = new Product(
    "Imported box chocholate bar",
    "10.00",
    0,
    "food",
    "importedhChockBoxIdPrice",
    "importedChockBoxIdQnt", chockBox
  );
  let importedParfum = new Product(
    "Imported Parfum bottle",
    "47.50",
    0,
    "cosmetics",
    "importedhParfumIdPrice",
    "importedParfumIdQnt", parfumImage
  );
  let importedParfBis = new Product(
    "Imported Parfum Bis",
    "27.99",
    0,
    "cosmetics",
    "importedParfumBisIdPrice",
    "importedParfumBisIdQnt", parfumImage
  );
  let bottleOfParfum = new Product(
    "Bottle of parfum",
    "18.99",
    0,
    "cosmetics",
    "bottleParfIdPrice",
    "bottleParfIdQnt", parfumImage
  );
  let pills = new Product(
    "packet of headache pills",
    "9.75",
    0,
    "medical",
    "pillsIdPrice",
    "pillsIdQnt", pillsImage
  );
  let importedChock = new Product(
    "box of imported chocolates",
    "11.25",
    0,
    "food",
    "BoximportedChockIdPrice",
    "BoximportedChockIdQnt", chockBox
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
        src="${el.imageUrl}"
      />
    </div>
    <div class="col-sm-6 float:left">
      <h4 class="product-name ${el.title}"><strong>${el.title}</strong></h4>
      <h4><small class="${el.category}" >${el.category}</small></h4>
    </div>
    <div class="col-sm-4">
    
      <div class="col-sm-6 float-right p-0">
     
        <input
          type="text"
          class="form-control input-sm"
          id="${el.priceId}"
          value=" € ${el.price}"
        />
      </div>
      <div class="col-sm-6 p-0">

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


    $(`#${el.quantityId}`).on('change', function () {
      console.log($(this).val())


      //$("button").prop('disabled', !$(this).val());

    }).trigger('change');
    // $(`#${el.quantityId}`).change(function () {

    //   var optionSelected = $(this).find("option:selected");
    //   var valueSelected = optionSelected.val();
    //   var selectedVal = $(this).val();
    //   console.log(valueSelected)
    //   console.log('valore selezionato  ',selectedVal)


    //   if (parseInt(valueSelected) > 0) {
    //     count += parseInt(valueSelected);
    //     console.log(count)
    //     //localStorage.setItem('quantity', parseInt(valueSelected))
    //   //  $("button").removeAttr("disabled");

    //   } else {
    //     localStorage.setItem('quantity', parseInt(valueSelected))

    //     $("#button").attr("disabled", true);
    //   }

    //   $(`#${el.quantityId}`).click(function () {
    //     var optionSelected = $(this);
    //     var valueSelected = optionSelected.val();
    //     var textSelected = optionSelected.text();
    //     console.log('clicked value ', valueSelected)
    //     count -= parseInt(valueSelected);
    //     console.log(count)
    //     //console.log(parseInt(valueSelected))
    //   });

    // });


  });


};