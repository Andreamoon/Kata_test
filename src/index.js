import {
  checkCategories,
  calCulatePrice,
  
  buildReceive
} from "./utils";
import { getObj } from "./price&quantity";
import "./style/style.css";
document.getElementById("button").addEventListener("click", getValue, false);
document.getElementById("close").addEventListener("click", clearArray, false);

let receipt = [];

function getValue() {
  let obj = getObj();
  console.log(obj);

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

export default { getValue, clearArray };
