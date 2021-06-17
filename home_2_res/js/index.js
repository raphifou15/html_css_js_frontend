const ratio_h = (largeur) =>{
	largeur /= 100;
	largeur *= 70;
	return (largeur);
}

const	article1 = document.getElementsByClassName("article1");
const	article2 = document.getElementsByClassName("article2");
const  	section4 = document.getElementById("section4");
const  	section4_a = document.querySelector("#section4 a");
const  	section5 = document.getElementById("section5");
const  	section5_a = document.querySelector("#section5 a");
const  	section6 = document.getElementById("section6");
const  	section6_a = document.querySelector("#section6 a");

let  	largeur = window.innerWidth;
let  	nou;
let  	nou_2;
let  	nou_3;
let 	bound;


largeur = (window.innerWidth > 600) ? largeur / 2 : largeur;
largeur = ratio_h(largeur);
article1[0].style.height = largeur + "px";
article1[1].style.height = largeur + "px";
article2[0].style.height = largeur + "px";
article2[1].style.height = largeur + "px";
article1[2].style.height = largeur + "px";
article1[3].style.height = largeur + "px";

nou = article1[1].getBoundingClientRect();
nou_2 = article2[0].getBoundingClientRect();
nou_3 = article1[3].getBoundingClientRect();
if (nou.top < window.innerHeight)
	article1[1].classList.add("animation-1");
if (nou_2.top < window.innerHeight)
	article2[0].classList.add("animation-1");
if (nou_3.top < window.innerHeight)
	article1[3].classList.add("animation-1");



bound = section4.getBoundingClientRect();
if (bound.top < window.innerHeight){
	section4.classList.add("open");
	section4_a.style.display = "block";
	section4.style.width = "90%";
}
bound = section5.getBoundingClientRect();
if (bound.top < window.innerHeight){
	section5.classList.add("open");
	section5_a.style.display = "block";
	section5.style.width = "90%";
}
bound = section6.getBoundingClientRect();
if (bound.top < window.innerHeight){
	section6.classList.add("open");
	section6_a.style.display = "block";
	section6.style.width = "90%";
}


window.addEventListener('resize', () =>{
	largeur = window.innerWidth;
	largeur = (window.innerWidth > 600) ? largeur / 2 : largeur;
	largeur = ratio_h(largeur);
	article1[0].style.height = largeur + "px";
	article1[1].style.height = largeur + "px";
	article2[0].style.height = largeur + "px";
	article2[1].style.height = largeur + "px";
	article1[2].style.height = largeur + "px";
	article1[3].style.height = largeur + "px";
});

window.addEventListener('scroll', () => {
	nou = article1[1].getBoundingClientRect();
	nou_2 = article2[0].getBoundingClientRect();
	nou_3 = article1[3].getBoundingClientRect();
	bound = section4.getBoundingClientRect();
	if (nou.top < window.innerHeight)
		article1[1].classList.add("animation-1");
	if (nou_2.top < window.innerHeight)open
		article2[0].classList.add("animation-1");
	if (nou_3.top < window.innerHeight)
	article1[3].classList.add("animation-1");
	
	if (bound.top < window.innerHeight){
		section4.classList.add("open");
		section4_a.style.display = "block";
		section4.style.width = "90%";
	}
	bound = section5.getBoundingClientRect();
	if (bound.top < window.innerHeight){
		section5.classList.add("open");
		section5_a.style.display = "block";
		section5.style.width = "90%";
	}
	bound = section6.getBoundingClientRect();
	if (bound.top < window.innerHeight){
		section6.classList.add("open");
		section6_a.style.display = "block";
		section6.style.width = "90%";
	}
});