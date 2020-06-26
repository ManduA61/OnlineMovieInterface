class Product {
	// un produs este creat cu o clasa cu urmtorul constructor:
	constructor(photo, name, description, rating, year, dateAdd) {
		this.photo = photo;
		this.name = name;
		this.description = description;
		this.rating = rating;
		this.year = year;
		this.dateAdd = dateAdd;
	}
	// metoda renderProduct adauga produse in interiorul listei de produse
	renderProduct() {
		const productList = document.querySelector('#product-list');
		productList.innerHTML += `
			<li class="product">
				<img src="${this.photo}" alt="img/noPh0.jpg"></img>
				<div class="descriptionProduct">
					<p class = "pName" >Nume: ${this.name}</p>
					<p>Descriere: ${this.description}</p>
					<p>Rating: ${this.rating}/10 <i class="fas fa-star"></i></p>
					<p>An apariție: ${this.year}</p>
					<p>Adăugat pe: ${this.dateAdd}</p>
					<p>Posted ${moment([this.dateAdd]).fromNow("YYYY-MM-DD")} ago</p>
				</div>
			</li>
		`;
	}

}

    // O alta varianta de afisare a datei unei postari
    var start = moment([2018, 06, 21]);
		var end   = moment([2018, 06, 26]);
		// console.log(end.to(start));       // "5 days ago"
