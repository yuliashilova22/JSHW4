let previousElement = null;
[...document.getElementsByClassName('species')]
.forEach((element) => element.onclick = (() => {
	hideContent(previousElement);
	showContent(element);
	previousElement = element;
}));

function changeBorder(element) {
	let listener = () => { 
		element.className = 'species';
		element.nextElementSibling.removeEventListener('transitionend', listener);
	};
	element.nextElementSibling.addEventListener('transitionend', listener);
}

function hideContent(element) {
	if (element) {		
		changeBorder(element);
		element.nextElementSibling.style.height = '0';
	}
}

function showContent(element) {
	let wrapper = element.nextElementSibling;
	let aboutCat = wrapper.firstElementChild;

	element.className = 'species species-current';
	aboutCat.className = 'about-cat about-cat-current';
	wrapper.style.height = aboutCat.offsetHeight  + 'px';
}
