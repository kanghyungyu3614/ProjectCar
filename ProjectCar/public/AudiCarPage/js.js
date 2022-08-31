

let containerTitle = document.querySelector('#containerTitle');

containerTitle.style.display = 'none';

window.addEventListener('scroll', () => { 
	containerTitle.style.display = 'block';
  containerTitle.style.position = 'fixed';
  containerTitle.style.top = '0px';
  containerTitle.style.zIndex = 1000;
});