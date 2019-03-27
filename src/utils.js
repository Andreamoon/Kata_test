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

    if (checkImported(label)) {
      let rate = 0.15;
      let taxes = price * rate;
      let subtotal = price + taxes;
      receiveObj.categories = label;
      receiveObj.taxes = taxes.toFixed(2);
      receiveObj.subtotal = subtotal.toFixed(2);
    } else {
      let rate = 0.1;
      let taxes = price * rate;
      let subtotal = price + taxes;
      receiveObj.categories = label;
      receiveObj.taxes = taxes.toFixed(2);
      receiveObj.subtotal = subtotal.toFixed(2);
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
      receiveObj.importedTax = taxes.toFixed(2);
      receiveObj.subtotal = (Math.ceil(subtotal * 20 - 0.5) / 20).toFixed(2);
    } else {
      receiveObj.categories = label;
      //receiveObj.taxFree = true;
      receiveObj.subtotal = price;
    }

    return receiveObj;
  }
};

export const getTitle = htmlClass => {
  let title = document
    .querySelector(`${htmlClass}`)
    .textContent.toLocaleLowerCase()
    .trim();
  return title;
};

export const buildReceive = obj => {
  console.log(obj);

  obj.map((el, i) => {
    $(".categoria").append(`<li>${el.categories}</li>`);

    $(".price").append(`<li>${el.subtotal}</li>`);
    if (el.taxes === undefined) {
      $(".tax").append(`<li>Tax free</li>`);
    } else {
      $(".tax").append(`<li>${el.taxes}</li>`);
    }
  });
  $(".modal").on("hidden.bs.modal", function() {
    $(".categoria").html("");
    $(".price").html("");
    $(".tax").html("");
    
  });
};
