import { testLengthOfInput } from './libs/validate.js';
import writeToDOM from './libs/toDom.js';
import { saveTo, getInputInfo } from './libs/localStorage.js';

const itemInput = document.querySelector('.itemInput');
const addItem = document.querySelector('.addItem');
const items = document.querySelector('.items');
let groceryArray = getInputInfo('groceryArrayKey');

writeToDOM(items, groceryArray);

addItem.onclick = function () {
	let valueOfGroceryInputBox = itemInput.value;
	if (testLengthOfInput(valueOfGroceryInputBox, 3)) {
		let groceryItem = {
			id: groceryArray.length,
			name: valueOfGroceryInputBox,
		};
		groceryArray.push(groceryItem);
		saveTo('groceryArrayKey', groceryArray);
		writeToDOM(items, groceryArray);
	} else {
		console.log('Input needs more characters');
	}
	itemInput.value = '';
};
