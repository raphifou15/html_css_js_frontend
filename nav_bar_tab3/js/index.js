const	menu = document.getElementById("menu");
const	svg1 = document.getElementById("hamburger");
const	svg2 = document.getElementById("cross");

svg1.addEventListener("click", () => {
	if (menu.classList.contains("animation-flow-reverse"))
		menu.classList.remove("animation-flow-reverse");
	menu.classList.add("animation-flow");
	menu.style.display = "block";
	svg1.style.display = "none";
	svg2.style.display = "block";
});

svg2.addEventListener("click", () => {
	menu.classList.remove("animation-flow");
	menu.classList.add("animation-flow-reverse");
	svg1.style.display = "block";
	svg2.style.display = "none";
	window.setTimeout( () => {
		menu.style.display = "none";
	},600);
});