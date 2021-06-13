const	svg1 = document.getElementById('hamburger');
const	svg2 = document.getElementById('cross');
const  	log = document.querySelector('header nav div');
let  	largeur;
let  	largeur2;

largeur = window.innerWidth;
largeur2 = (largeur / 100);
log.style.marginRight = largeur2 + "%";

svg1.addEventListener('click', () => {
	svg1.style.display = "none";
	svg2.style.display = "block";
	log.style.display = "flex";
	log.classList.add("animation_1");
})

svg2.addEventListener('click', () => {
	svg2.style.display = "none";
	svg1.style.display = "block";
	log.style.display = "none";
})

window.addEventListener('resize', () =>{
	largeur = window.innerWidth;
	console.log(largeur);
	largeur2 = (largeur / 100);
	log.style.marginRight = largeur2 + "%";
});
