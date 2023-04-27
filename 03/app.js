function fetchProduct(id) {
	return fetch(`https://dummyjson.com/products/${id}`)
	  .then((res) => res.json());
  }
  
  function fetchProduct(id) {
	return fetch(`https://dummyjson.com/products/${id}`)
	  .then((res) => res.json());
  }
  
  function updateProduct(product, idPrefix) {
	const titleEl = document.getElementById(`${idPrefix}-title`);
	const priceEl = document.getElementById(`${idPrefix}-price`);
	const imageEl = document.getElementById(`${idPrefix}-image`);
  
	titleEl.textContent = product.title;
	priceEl.textContent = product.price.toFixed(2) + '€';
	imageEl.src = product.thumbnail;
  }
  
  fetchProduct(1)
	.then((product) => {
	  updateProduct(product, 'product-1');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});
  
	fetchProduct(2)
	.then((product) => {
	  updateProduct(product, 'product-2');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});