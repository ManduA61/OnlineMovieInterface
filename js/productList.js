// adaugam lista de produse in html
mainPage.innerHTML += `
	<div class="sortBtnAll">
		<div class="sortBtn"> 
			<p>Sort după nume</p> 
			<i class="fas fa-2x fa-sort-alpha-down" id="sortByNameUp"></i> 
			<i class="fas fa-2x fa-sort-alpha-up" id="sortByNameDown"></i> 
		</div>
		<div class="sortBtn">
			<p>Sort după an apariție</p>
			<i class="fas fa-2x fa-sort-up" id="sortByYearUp"></i> 
			<i class="fas fa-sort-down fa-2x" id="sortByYearDown"></i> 
		</div>
		<div class="sortBtn">
			<p>Sort după rating</p> 
			<i class="fas fa-2x fa-sort-up" id="sortByRatingUp"></i> 
			<i class="fas fa-sort-down fa-2x" id="sortByRatingDown"></i> 
		</div>
		<div class="sortBtn" id="sortByRecent">
			<p>Cele mai recente adăugate</p>
		</div>
	</div>
	<h2>Lista tuturor filmelor</h2>
	<ul id="product-list">
	</div>
`;

APP.renderProductList = (productArray) => {
	// golim lista in care se vor afisa produsele
	const productList = document.querySelector('#product-list');
	productList.innerHTML = '';
	// pentru fiecare element din vectorul primit ca parametru
	productArray.forEach( (elem) => {
		// cream un produs
		product = new Product(elem.photo, elem.name, elem.description, elem.rating, elem.year, elem.dateAdd);
		// il afisam in pagina web
		product.renderProduct();
	});
}
