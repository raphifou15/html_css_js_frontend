const	svg1 = document.getElementById('hamburger');
const	svg2 = document.getElementById('cross');
const  	log = document.querySelector('header nav  div');
const  	body = document.getElementsByTagName('body');
const  	main = document.getElementsByTagName('main');

svg1.addEventListener('click', () => {
	log.style.display="block";
	svg1.style.display = "none";
	svg2.style.display = "block";
	if (log.classList.contains("animation_3"))
		log.classList.remove("animation_3");
	log.classList.add("animation_2");
	body[0].style.overflow ="hidden";
	main[0].classList.add("opa");
})

svg2.addEventListener('click', () => {
	svg1.style.display = "block";
	svg2.style.display = "none";
	log.classList.remove("animation_2");
	log.classList.add("animation_3");
	window.setTimeout( () => {
		log.style.display="none";
	}, 100);
	body[0].style.overflow ="visible";
	main[0].classList.remove("opa");	
})