
setInterval(() => {
	const currentYear = new Date().getFullYear();
	const endOfYear = new Date(`December 31, ${currentYear} 23:59:59`);
	
	const currentTime = new Date();
	const RemainingTime = endOfYear - currentTime;


	const months = currentTime.getMonth() === 11 ? 0 : endOfYear.getMonth() - currentTime.getMonth();
    const days = Math.floor(RemainingTime / (1000 * 60 * 60 * 24)) % 30;
    const hours = Math.floor((RemainingTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((RemainingTime / 1000 / 60) % 60);
    const seconds = Math.floor((RemainingTime / 1000) % 60);

	document.getElementById('date').innerHTML = `${months} месяцев, ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
}, 1000);
