const	svg1 = document.getElementById("hamburger");
const	nav = document.getElementsByTagName("nav");
const	body = document.getElementsByTagName("body");

svg1.addEventListener("click", () => {
	if (nav[0].classList.contains("cover_1") === false)
	{
		nav[0].style.display = "flex";
		if (nav[0].classList.contains("cover_1-reverse"))
			nav[0].classList.remove("cover_1-reverse");
		nav[0].classList.add("cover_1");
		body[0].style.overflow = "hidden";
	}
	else
	{
		nav[0].classList.remove("cover_1");
		nav[0].classList.add("cover_1-reverse");
		body[0].style.overflow = "visible";
		window.setTimeout( () => {
			nav[0].style.display = "none";		
		}, 1000);

	}
});
