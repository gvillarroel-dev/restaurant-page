import "./style.css";
import loadHome from "./pages/home.js";
import loadMenu from "./pages/menu.js";
import loadAbout from "./pages/about.js";
import loadContact from "./pages/contact.js";

const headerBtns = document.querySelectorAll(".btn");
const menuBtn = document.querySelector("#menu-btn");
const homeBtn = document.querySelector("#home-btn");
const aboutBtn = document.querySelector("#about-btn");
const contactBtn = document.querySelector("#contact-btn");

headerBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		headerBtns.forEach((button) => button.classList.remove("active"));
		btn.classList.add("active");
	});
});

loadHome();

homeBtn.addEventListener("click", () => loadHome());
menuBtn.addEventListener("click", () => loadMenu());
aboutBtn.addEventListener("click", () => loadAbout());
contactBtn.addEventListener("click", () => loadContact());

console.log("Webpack funcionando!");
