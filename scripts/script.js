const catApp = {
	species: null,
	about-cat: null,
	state: [],

	init() {
		this.species = document.getElementById('species');
		this.about-cat = document.getElementById('about-cat');

		this.handlers();

	},

	handlers() {
		this.species.addEventListener('click', () => catApp.onClick(););

	},

	onClick() {
		
	},

}

this.init();