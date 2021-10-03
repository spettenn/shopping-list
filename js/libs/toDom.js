import { saveTo } from './localStorage.js';

export default function writeToDOM(
	domElementIAmGoingToPutHTMLInto,
	theArrayIAmGoingToCreateHTMLFrom
) {
	console.log(theArrayIAmGoingToCreateHTMLFrom);
	domElementIAmGoingToPutHTMLInto.innerHTML = '';

	theArrayIAmGoingToCreateHTMLFrom.forEach(function (groceryItem, iteration) {
		let ischecked = '';
		if (groceryItem.checked) {
			ischecked = 'checked';
		}

		domElementIAmGoingToPutHTMLInto.innerHTML += `<li class="${ischecked}">
					<label>${groceryItem.name}</label>
					<input ${ischecked} type="checkbox" class="checkbox" data-id=${groceryItem.id}>
				</li>`;
	});

	const checkboxes = document.querySelectorAll('.checkbox');
	console.log(checkboxes);
	checkboxes.forEach(function (checkbox) {
		checkbox.onclick = function () {
			let indexOfItem = theArrayIAmGoingToCreateHTMLFrom.findIndex(function (
				groceryObject
			) {
				return groceryObject.id === parseInt(checkbox.dataset.id);
			});

			console.log(indexOfItem);
			console.log(theArrayIAmGoingToCreateHTMLFrom[indexOfItem]);

			if (theArrayIAmGoingToCreateHTMLFrom[indexOfItem].checked) {
				theArrayIAmGoingToCreateHTMLFrom[indexOfItem].checked = '';
			} else {
				theArrayIAmGoingToCreateHTMLFrom[indexOfItem].checked = 'checked';
			}

			saveTo('groceryArrayKey', theArrayIAmGoingToCreateHTMLFrom);

			writeToDOM(
				domElementIAmGoingToPutHTMLInto,
				theArrayIAmGoingToCreateHTMLFrom
			);
		};
	});
}
