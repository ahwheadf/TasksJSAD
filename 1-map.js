const array = [
    {id: 1, name: 'Вася'},
    {id: 2, name: 'Петя'},
    {id: 1, name: 'Вася'},
    {id: 2, name: 'Петя'},
    {id: 3, name: 'Alex'},
    {id: 4, name: 'John'},
    {id: 5, name: 'Alex'},
];

const uniqueById = (arr) => {
    const set = new Set();
	const uniqueSet = new Set();

	arr.forEach(element => {
		if (!set.has(element.id)) {
			set.add(element.id);
			uniqueSet.add({id: element.id, name: element.name, ...element});
		}
	});

	return uniqueSet;
}
console.log(uniqueById(array));