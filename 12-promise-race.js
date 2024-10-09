async function getProducts(id) {
	const res = await fetch('https://dummyjson.com/products/' + id);
	const data = await res.json();
	return data;
};

function race(promises) {
	return new Promise((resolve, reject) => {
		if (!Array.isArray(promises)) {
			return reject(new Error('Argument must be an array'));
		}

		promises.forEach(promise => {
			promise
				.then(resolve)
				.catch(reject)
		});
	})
}


race([getProducts(1), getProducts(2), getProducts(3)])
	.then(response => console.log(response));