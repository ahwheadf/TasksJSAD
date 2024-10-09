document.addEventListener('DOMContentLoaded', () => {
	const wrapper = document.querySelector('.wrapper');
	const body = document.querySelector('.body');

	// Создание кнопок 

	function addButton(wrapper) {
		for (let i = 0; i < 5; i++) {
			const button = document.createElement('button');
			button.classList.add('b');
			button.setAttribute(`id`, i);
			button.innerText = `Нажми на меня`
			wrapper.append(button);
		}
	}
	addButton(wrapper);

	// Создание счетчика 

	const counter = document.createElement('div');
	counter.classList.add('p');
	counter.innerText = '0';
	body.append(counter);

	// Обработка нажатий (делегирование) 

	function click (wrapper, counter) {
		let i = 0;
		wrapper.addEventListener('click', (e) => {
			if (e.target) {
				i++;
				counter.innerText = `${i}`;
			}
			[...wrapper.children].forEach((button, i) => {
				if (button.id === e.target.id) {
					button.innerText = 'Нажата';
				} else {
					button.innerText = 'Нажми на меня';
				}
			});
		})
	}
	click(wrapper, counter);
});