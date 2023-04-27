function fetchProduct(id) {
	return fetch(`https://dummyjson.com/products/${id}`)
	  .then((res) => res.json());
  }
  
  function updateProduct(product, idPrefix) {
	const titleEl = document.getElementById(`${idPrefix}-product-title`);
	const priceEl = document.getElementById(`${idPrefix}-product-price`);
	const imageEl = document.getElementById(`${idPrefix}-product-image`);
  
	titleEl.textContent = product.title;
	priceEl.textContent = product.price.toFixed(2) + '€';
	imageEl.src = product.thumbnail;
  }
  
  fetchProduct(1)
	.then((product) => {
	  updateProduct(product, '1');
	})
	.catch((error) => {
	  console.error('Fehler beim Abrufen des Produkts:', error);
	});
  