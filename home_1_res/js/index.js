const ratio_h = (largeur) =>{
	largeur /= 100;
	largeur *= 89,31;
	return (largeur);
}

const section1 = document.getElementById("section1");
const article1_1 = document.getElementsByClassName("article1-1");
const article1_2 = document.getElementsByClassName("article1-2");
const article2_1 = document.getElementsByClassName("article2-1");
const article2_2 = document.getElementsByClassName("article2-2");
let   largeur = window.innerWidth;
let   inter;
nou = article1_1[0].getBoundingClientRect();
nou_2 = article2_1[0].getBoundingClientRect();
if (nou.top < window.innerHeight){
	section1.style.visibility = "visible";
	if (window.innerWidth > 600)
		article1_1[0].classList.add("move-in");
}
if (nou_2.top < window.innerHeight){
	section2.style.visibility = "visible";
	if (window.innerWidth > 600)
		article2_1[0].classList.add("move-in");
}


largeur = (window.innerWidth > 600) ? largeur / 2 : largeur;
largeur = ratio_h(largeur);
article1_1[0].style.height = largeur + "px";
article1_2[0].style.height = largeur + "px";
article2_1[0].style.height = largeur + "px";
article2_2[0].style.height = largeur + "px";


window.addEventListener('resize', () =>{
	largeur = window.innerWidth;
	largeur = (window.innerWidth > 600) ? largeur / 2 : largeur;
	largeur = ratio_h(largeur);
	article1_1[0].style.height = largeur + "px";
	article1_2[0].style.height = largeur + "px";
	article2_1[0].style.height = largeur + "px";
	article2_2[0].style.height = largeur + "px";
});

window.addEventListener("scroll", () => {
	nou = article1_1[0].getBoundingClientRect();
	nou_2 = article2_1[0].getBoundingClientRect();
	if (nou.top < window.innerHeight){
		section1.style.visibility = "visible";
		if (window.innerWidth > 600)
			article1_1[0].classList.add("move-in");
	}
	if (nou_2.top < window.innerHeight){
		section2.style.visibility = "visible";
		if (window.innerWidth > 600)
			article2_1[0].classList.add("move-in");
	}
});

/*window.addEventListener('scroll', () => {
	console.log(window.scrollY);
	if (article1_1[0].classList.contains("move-in") === false)
	{
		if (window.scrollY >= 1500)
		{	
			section1.style.visibility = "visible";
			if (window.innerWidth > 600)
				article1_1[0].classList.add("move-in");
		}
	}
	if (article2_1[0].classList.contains("move-in") === false)
	{
		if (window.scrollY >= 1900)
		{	
			section1.style.visibility = "visible";
			if (window.innerWidth > 600)
				article2_1[0].classList.add("move-in");
		}
	}
});
*/