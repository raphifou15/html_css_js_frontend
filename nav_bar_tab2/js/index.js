const	svg1 = document.getElementById("hamburger");
const	menu = document.getElementById("menu");

svg1.addEventListener("click", () => {
	if (menu.classList.contains("animation-roll"))
	{
		console.log("choco");
		menu.classList.remove("animation-roll");
		menu.classList.add("animation-roll-reverse");
		window.setTimeout( () => {
			menu.style.display="none";
		}, 500);
		return ;
	}
	if (menu.classList.contains("animation-roll-reverse"))
		menu.classList.remove("animation-roll-reverse");
	menu.classList.add("animation-roll");
	menu.style.display = "flex";
})