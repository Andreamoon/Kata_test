import {
  checkCategories,
  calCulatePrice,
  
  buildReceive
} from "./utils";
import { getObj } from "./price&quantity";
import "./style/style.css";
document.getElementById("button").addEventListener("click", printReceive, false);
document.getElementById("close").addEventListener("click", clearArray, false);

let receipt = [];

function printReceive() {
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

export default { printReceive, clearArray };
