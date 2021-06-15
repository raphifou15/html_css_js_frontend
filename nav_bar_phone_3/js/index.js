const	svg1 = document.getElementById("hamburger");
const	menu = document.getElementById("menu");

svg1.addEventListener("click", () => {
	if (menu.classList.contains("move_des-reverse"))
		menu.classList.remove("move_des-reverse");

	if (menu.classList.contains("move_des") === false){
		menu.classList.add("move_des");
		menu.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
	}
	else{
		menu.classList.remove("move_des");
		menu.classList.add("move_des-reverse");
		menu.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)";
	}
});