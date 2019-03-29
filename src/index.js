import {
  checkCategories,
  calCulatePrice,
  buildReceive
} from "./utils";
import {
  getObj
} from "./getProduct";
import {
  buildHtml
} from "./buildHtml";


import "./style/style.css";

buildHtml();

$("#button").bind("click", () => {
  printReceive();
});

$(".closeMod ").bind("click", () => {
  clearArray();
});




let receipt = [];
let price;
function printReceive() {
  let obj = getObj();
  let boolean = false;


  

  /**==================================
        stampa ricevuta
    ==================================*/

  obj.map(el => {
  
    price = el.price.replace(/€/g,'');

    receipt.push(
      calCulatePrice(
        checkCategories(el.category),
        price,
        el.quantity,
        el.title
      )
    );
  });
  
  buildReceive(receipt);
}

function clearArray() {
  receipt = [];
  return receipt;
}

export default {
  printReceive,
  clearArray
};