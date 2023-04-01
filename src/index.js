import './styles/app.scss';
import './fonts/fonts.scss';

if (process.env.NODE_ENV !== 'production') {
	require('./index.html');
}

document.querySelector('.slider').oninput = function (e) {
	this.style.background =
		'linear-gradient(to right, #FF69B4, #FF69B4 ' + this.value + '%, #5BAAF9 ' + this.value + '%)';
};
