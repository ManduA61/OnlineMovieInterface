// functia de sortare
function addSortFunctionalyty() {
  const sortByNameButtonUp = document.querySelector('#sortByNameUp');
  const sortByNameButtonDown = document.querySelector('#sortByNameDown');
  const sortByYearButtonUp = document.querySelector('#sortByYearUp');
  const sortByYearButtonDown = document.querySelector('#sortByYearDown');
  const sortByRatingButtonUp = document.querySelector('#sortByRatingUp');
  const sortByRatingButtonDown = document.querySelector('#sortByRatingDown');
  const sortByRecentButton = document.querySelector('#sortByRecent');

  // Sortare dupa nume
  function sortProductsNameUp() {
    const localStorageProducts = getProducts();

    localStorageProducts.sort(function(product1, product2) {
      var nameA = product1.name.toUpperCase(); // Ignora daca este litera mare sau mica
      var nameB = product2.name.toUpperCase(); // Ignora daca este litera mare sau mica
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    addProducts(localStorageProducts);
    APP.renderProductList(localStorageProducts);
  }
  sortByNameButtonUp.addEventListener('click', sortProductsNameUp);

  function sortProductsNameDown() {
    const localStorageProducts = getProducts();

    localStorageProducts.sort(function(product1, product2) {
      var nameA = product1.name.toUpperCase();
      var nameB = product2.name.toUpperCase(); 
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      return 0;
    });
    addProducts(localStorageProducts);
    APP.renderProductList(localStorageProducts);
  }
  sortByNameButtonDown.addEventListener('click', sortProductsNameDown);


  // sortare dupa an
  function sortProductsYearUp() {
    const localStorageProducts = getProducts();

    function compareYearUp(product1, product2) {
      if (product1.year > product2.year){
        return -1;
      }
      if (product1.year < product2.year){
        return 1;
      }
      return 0;
    }
    localStorageProducts.sort(compareYearUp)
    addProducts(localStorageProducts);
    APP.renderProductList(localStorageProducts);
  }
  sortByYearButtonUp.addEventListener('click', sortProductsYearUp);

  function sortProductsYearDown() {
    const localStorageProducts = getProducts();

    function compareFunctionYearDown(product1, product2) {
      if (product1.year < product2.year){
        return -1;
      }
      if (product1.year > product2.year){
        return 1;
      }
      return 0;
    }
    localStorageProducts.sort(compareFunctionYearDown)
    addProducts(localStorageProducts);
    APP.renderProductList(localStorageProducts);
  }
  sortByYearButtonDown.addEventListener('click', sortProductsYearDown);


  // sortare dupa rating
  function sortProductsRatingUp() {
    const localStorageProducts = getProducts();

    function compareFunction(product1, product2) {
      if (product1.rating > product2.rating){
        return -1;
      }
      if (product1.rating < product2.rating){
        return 1;
      }
    
      return 0;
    }
    localStorageProducts.sort(compareFunction)
    addProducts(localStorageProducts);
    APP.renderProductList(localStorageProducts);
  }
  sortByRatingButtonUp.addEventListener('click', sortProductsRatingUp);

  function sortProductsRatingDown() {
    const localStorageProducts = getProducts();

    function compareFunction(product1, product2) {
      if (product1.rating < product2.rating){
        return -1;
      }
      if (product1.rating > product2.rating){
        return 1;
      }
    
      return 0;
    }
    localStorageProducts.sort(compareFunction)
    addProducts(localStorageProducts);
    APP.renderProductList(localStorageProducts);
  }
  sortByRatingButtonDown.addEventListener('click', sortProductsRatingDown);


  // Sortare dupa data adaugare produs
  function sortProductsDateAdd() {
    console.log("S-a apasat pe 'Cel mai recent adaugat'");
    const localStorageProducts = getProducts();

    function compareFunction3(product1, product2) {
      var dateAdd1 = product1.dateAdd;
      var dateAdd2 = product2.dateAdd;
      if (dateAdd1 > dateAdd2) {
        return -1;
      }
      if (dateAdd1 < dateAdd2) {
        return 1;
      }
      return 0;
    }
    localStorageProducts.sort(compareFunction3)
    addProducts(localStorageProducts);
    APP.renderProductList(localStorageProducts);
  }
  sortByRecentButton.addEventListener('click', sortProductsDateAdd);  


}

window.addEventListener('load', addSortFunctionalyty)