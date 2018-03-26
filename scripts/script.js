var previousElement = null;
[...document.getElementsByClassName('species')]
.forEach((element) => element.onclick = (() => {
	
	if (previousElement) {		
		previousElement.className = 'species';
		previousElement.nextElementSibling.style.height = '0';		
	}
	element.className = 'species species-current';

	let wrapper = element.nextElementSibling;
	let aboutCat = wrapper.firstElementChild;

	aboutCat.className = 'about-cat about-cat-current';
	wrapper.style.height = aboutCat.offsetHeight  + 'px';
	previousElement = element;

}));

