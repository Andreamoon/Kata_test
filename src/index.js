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

function printReceive() {
  let obj = getObj();
  let boolean = false;


  

  /**==================================
        stampa ricevuta
    ==================================*/

  obj.map(el => {

    
    receipt.push(
      calCulatePrice(
        checkCategories(el.category),
        el.price,
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