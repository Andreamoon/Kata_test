export const checkCategories = categories => {
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
};

export const checkImported = product => {
  var imported = product.match(/imported/g);

  if (imported) {
    return true;
  } else {
    return false;
  }
};

export const calCulatePrice = (checkCategories, prezzo, quantity, label) => {
  var receiveObj = {};
  //check sulla categoria medical food etc..


  if (checkCategories) {
    let price = prezzo * quantity;

    if (checkImported(label.toLowerCase())) {
      let rate = 0.15;
      let taxes = price * rate;
      let subtotal = price + taxes;
      receiveObj.categories = label;
      receiveObj.taxes = taxes.toFixed(2);
      receiveObj.subtotal = subtotal.toFixed(2);
      receiveObj.quantity = quantity;
    } else {
      let rate = 0.1;
      let taxes = price * rate;
      let subtotal = price + taxes;
      receiveObj.categories = label;
      receiveObj.taxes = taxes.toFixed(2);
      receiveObj.subtotal = subtotal.toFixed(2);
      receiveObj.quantity = quantity;
    }

    return receiveObj;
  } else {
    let price = prezzo * quantity;

    if (checkImported(label)) {
      let rate = 0.05;
      let taxes = price * rate;
      //console.log(taxes);
      let subtotal = price + taxes;
      receiveObj.categories = label;
      receiveObj.taxes = taxes.toFixed(2);
      receiveObj.subtotal = (Math.ceil(subtotal * 20 - 0.5) / 20).toFixed(2);
      receiveObj.quantity = quantity;
    } else {
      receiveObj.categories = label;
      //receiveObj.taxFree = true;
      receiveObj.subtotal = price;
      receiveObj.quantity = quantity;
    }

    return receiveObj;
  }
};

export const getClassValue = htmlClass =>
  document
  .querySelector(`${htmlClass}`)
  .textContent.toLowerCase()
  .trim();

export const buildReceive = obj => {
  let total = 0;
  let totTax = 0;

  obj.map((el, i) => {

    //console.log(parseInt(el.quantity))


    if (parseInt(el.quantity) > 0) {
      console.log("maggionre");


      total += parseFloat(el.subtotal);
      $(".categoria").append(`<li>${el.categories}</li>`);

      $(".price").append(`<li>  €  ${el.subtotal.toFixed(2)}</li>`);
      if (el.taxes === undefined) {
        $(".tax").append(`<li>Tax free</li>`);
      } else {
        $(".tax").append(`<li>${el.taxes}</li>`);
        totTax += parseFloat(el.taxes);
      }



    }

  });

  $(".total").append(`<li> € ${total.toFixed(2)}</li>`);
  $(".totalTax").append(`<li> € ${totTax.toFixed(2)}</li>`);

  //on close della Modal
  $(".modal").on("hidden.bs.modal", function () {
    $(".categoria").html("");
    $(".price").html("");
    $(".tax").html("");
    $(".total").html("");
    $(".totalTax").html("");
  });
};