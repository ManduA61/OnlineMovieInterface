// cream un obiect global, numit APP
window.APP = {};
// index.js fiind primul fisier care se incarca, mainPage va fi available in toate celelalte fisiere
window.mainPage = document.querySelector('#root');
// tot in APP cream un vector de obiecte, numit products
APP.products = [
	{
		// un telefon are nume si pret
		photo: 'img/p0.JPG',
		name: 'The Avengers',
		description: 'Cei mai puternici eroi ai Pământului trebuie să se reunească și să învețe să lupte în echipă, dacă vor să-l împiedice pe răufăcător să înrobească umanitatea.',
		rating: 8.0,
		year: 2012,
		dateAdd: '2020-05-22'
	},
	{
		photo: 'img/p2.JPG',
		name: 'Serenity',
		description: 'Un căpitan al unei bărci de pescuit jonglează în fața trecutului său misterios și se găsește întruchipat într-o realitate în care nimic nu pare adevărat.',
		rating: 5.3,
		year: 2019,
		dateAdd: '2019-05-15'
	},
	{
		photo: 'img/p1.JPG',
		name: 'The Godfather',
		description: 'Un om influent al unei dinastii celebră pentru crimă organizată transferă toată puterea și controlul imperiului clandestin fiului său reticient.',
		rating: 9.2,
		year: 1972,
		dateAdd: '2020-04-09'
	}
];
// pentru stocare persistenta(sa nu se mai piarda datele la refresh), folosim lacalStorage
// avand in vedere ca vom face de mai multe ori operatiile de introducere a datelor in localStorage
// si de extragere a datelor din localStorage, vom face doua functii

// pentru a adauga vectorul de produse in local storage, trebuie mai intai sa il facem string
// pentru cheia "products", vom avea valoarea corespunzatoare, dar facuta string
 function addProducts(products){
	localStorage.setItem("products", JSON.stringify(products));
}

// pentru a extrage vectorul de produse, luam valoarea corespunzatoare cheii "products"
// apoi o parsam, pentru a deveni iar vector de obiecte, si o returnam 
function getProducts(){
	const returnedProducts = localStorage.getItem("products");
	return JSON.parse(returnedProducts);	
};

// introducem vectorul de produse in localStorage, doar daca nu avem nimic in baza de date
if (getProducts() === null){
		addProducts(APP.products);
}

function startRendering() {
	const localStorageProducts = getProducts();
	// "randam" lista de produse, trimitand ca parametru APP.products (incarcat mai sus)
	APP.renderProductList(localStorageProducts);
}
// DUPA ce s-au incarcat TOATE scripturile, apelam functia startRendering
// facem asta pentru ca la momentul incarcarii lui index.js, nu stim cine renderProductList()
window.addEventListener('load', startRendering);