// aduagam in HTML formularul de adaugare produs
mainPage.innerHTML += `
<div class="addMovie">
    <p><i class="fas fa-film fa-2x"></i> Adaugă chiar acum un film nou</p>
    <form id="addMovie">
      <div class="cInput"><input type="text" name="movieName" placeholder="Nume"></div>
      <div class="cInput"><input type="text" name="movieDescription" placeholder="Descriere"></div>
      <div class="cInput"><input type="number" name="movieRating" placeholder="Rating"></div>
      <div class="cInput"><input type="number" name="movieYear" placeholder="An apariție"></div>
      <div class="cInput"><input type="text" name="phoneImg" placeholder="Link-ul imaginii"></div>
      <div><input type="submit" value="Adaugă Filmul"></div>
    </form>
  </div>
`;
// <div>Agauga</div>

function addFormFunctionality() {
  const form = document.querySelector('#addMovie');

  // functia se va executa la submiterea formului
  form.onsubmit = function(event) {
    // trebuie sa prevenim reincarcare paginii, comportamentul default de la submit
    event.preventDefault();
    // luam numele si restul celor introduse de utilizator
    const phoneImg = event.target.phoneImg.value;
    const movieName = event.target.movieName.value;
    const movieDescription = event.target.movieDescription.value;
    const movieRating = Number(event.target.movieRating.value);
    const movieYear = Number(event.target.movieYear.value);
    const movieDateAdd = moment().format("YYYY-MM-DD");
  
    // targetul este elementul de HTML care a declansat evenimentul (formularul)
    // creem un nou obiect si il introducem in vectorul de produse
    const newMovie = {
      photo: phoneImg,
      name: movieName,
      description: movieDescription,
		  rating: movieRating,
      year: movieYear,
      dateAdd: movieDateAdd
    };
   
    // preluam produsele din localStorage
    const localStorageProducts = getProducts();

    localStorageProducts.push(newMovie);

     // adaugam vectorul in localStorage
     addProducts(localStorageProducts);

     // reafisam produsele, trb sa replicam functia de afisare pt s se observa modificarile
     APP.renderProductList(localStorageProducts);
     location.reload();
  }
}

// la momentul incarcarii fisierului addItemsForm.js
// inca nu stim cine e APP.renderProductList.
// asadar, inainte ca respectiv functie sa fie apelata,
// vrem sa incarcam celelalte fisiere
window.addEventListener('load', addFormFunctionality);

