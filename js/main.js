let boxes = Array.from(document.querySelectorAll(".skills-box"));
setInterval(() => {
	let rand = Math.floor(Math.random() * boxes.length);
	boxes.forEach(function (b) {
		b.classList.remove("active");
	});
	boxes[rand].classList.add("active");
}, 2000);

// // // // // // // // // // // // // // // // // // //
let span = document.querySelector(".scroll-btn");
window.onscroll = function () {
	let features = document.querySelector(".about");
	let about = document.querySelector(".services");
	let skills = document.querySelector(".skills");
	let work = document.querySelector(".portfolio");
	////////////////////////////////////////
	let landingH2 = document.querySelector(".intro-text h2");
	let landingP = document.querySelector(".intro-text p");
	if (this.scrollY >= features.offsetTop - 800) {
		features.classList.add("active-section");
	}
	if (this.scrollY >= about.offsetTop - 800) {
		about.classList.add("active-section");
	}
	if (this.scrollY >= skills.offsetTop - 800) {
		skills.classList.add("active-section");
	}
	if (this.scrollY >= work.offsetTop - 800) {
		work.classList.add("active-section");
	}
	if (window.scrollY >= 600) {
		span.style.cssText = "opacity: 1;";
	}
	if (window.scrollY >= 200) {
		landingH2.style.transform = "translateX(1000px)";
		landingP.style.transform = "translateX(-1000px)";
	} else {
		span.style.cssText = "opacity: 0;";
		landingH2.style.transform = "translateX(0px)";
		landingP.style.transform = "translateX(0px)";
	}
};
function scrollToTop() {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
}
span.addEventListener("click", scrollToTop);
