const	svg1 = document.getElementById("hamburger");
const	menu = document.getElementById("menu");
let 	i = 0;

svg1.addEventListener("click", (event) => {
	i++;
	if (i > 1)
		return ;
	svg1.classList.add("move");
	if (menu.classList.contains("floww") === false)
	{
		if (menu.classList.contains("floww-reverse"))
			menu.classList.remove("floww-reverse");
		menu.classList.add("floww");
		menu.style.display = "flex";
		i = 0;
	}
	else
	{
		menu.classList.remove("floww");
		menu.classList.add("floww-reverse");
		window.setTimeout( () => {
			menu.style.display = "none";
			i = 0;
		}, 200);
	}
	window.setTimeout( () =>{
		svg1.classList.remove("move");
	}, 200);
});