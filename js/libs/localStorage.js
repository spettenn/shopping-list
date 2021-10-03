export const saveTo = function (keyName, arrayList) {
	localStorage.setItem(keyName, JSON.stringify(arrayList));
};

export const getInputInfo = function (keyName) {
	if (localStorage.getItem(keyName) !== null) {
		return JSON.parse(localStorage.getItem(keyName));
	} else {
		return [];
	}
};
