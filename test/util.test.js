import {
  checkCategories,
  checkImported,
  getClassValue
} from "../src/utils";

//Expected value to be (using ===): function return === somenthing
test("should return a boolean", () => {
  expect(checkCategories("food") === false).toBe(true);
  expect(checkCategories("medical") === false).toBe(true);
  expect(checkCategories("book") === false).toBe(true);
  expect(checkCategories("") === true).toBe(true);
});

test("should return a boolean", () => {
  expect(checkImported("string") === false).toBe(true);
  expect(checkImported("imported") === true).toBe(true);

});

// test("should return an Html Class", () => {
//   expect(getClassValue('modal') === "modal").toBe(false);

// });