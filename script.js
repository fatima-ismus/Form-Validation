/*1. Create a form with an email input field.
2. Add an event listener for the 'submit' event.
3. Use setCustomValidity( ) to display a custom error message for invalid email formats.*/

const inputValue = document.getElementById("inputField");
inputValue.addEventListener("input", () => {
  if (inputValue.validity.typeMismatch) {
    inputValue.setCustomValidity("Please enter a valid email address");
  } else {
    inputValue.setCustomValidity("");
  }
});

// 1. Create a <ul> element in your HTML.
// 2. Add a button that, when clicked, adds new <li> elements to the <ul>.
// 3. Use event delegation to handle clicks on all <li> elements, including the newly added ones

let itemIndex = 0;
const itemList = document.getElementById("itemList");
const addItemButton = document.getElementById("addBtn");
const myExistingItems = itemList.querySelectorAll("li");
itemIndex = myExistingItems.length;
function createItem() {
  itemIndex++;
  const newItem = `<li>this is my item {(itemIndex}</li>`;
  return newItem;
}

addItemButton.addEventListener("click", () => {
  const addNewItem = createItem();
  itemList.innerHTML += addNewItem;
});
