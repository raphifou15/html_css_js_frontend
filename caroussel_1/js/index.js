const	modif_largeur = (largeur) =>{
	largeur /= 1920;
	largeur *= 100
	if (largeur >= 100)
		return 100;
	return largeur;
}

const	slide = document.getElementsByClassName("slide");
const	arrow_right = document.getElementById("arrow-right");
const	arrow_left = document.getElementById("arrow-left");
let  	largeur = window.innerWidth;
const  	tab = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg"];
let  	i = -1;

largeur = modif_largeur(largeur);
slide[0].style.height = largeur + 'vh';
arrow_right.style.height = largeur + 'vh';
arrow_left.style.height = largeur + 'vh';

window.setInterval( () => {
	++i;
		if (i >= tab.length)
			i = 0;
		slide[0].setAttribute("src", tab[i]);
	if (i === tab.length -1)
		i = -1;
}, 5000);


window.addEventListener("resize", () => {
	largeur = window.innerWidth;
	largeur = modif_largeur(largeur);
	console.log(largeur);
	slide[0].style.height = largeur + 'vh';
	arrow_right.style.height = largeur + 'vh';
	arrow_left.style.height = largeur + 'vh';
});

arrow_right.addEventListener("click", () => {
	i = (++i >= tab.length) ? 0 : i;
	slide[0].setAttribute("src", tab[i]);
});

arrow_left.addEventListener("click", () => {
	i = (--i <= -1) ? tab.length - 1 : i;
	slide[0].setAttribute("src", tab[i]);
});