import "./style.css";
import loadHome from "./pages/home.js";
import loadMenu from "./pages/menu.js";

const headerBtns = document.querySelectorAll(".btn");
const menuBtn = document.querySelector("#menu-btn");
const homeBtn = document.querySelector("#home-btn");

headerBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		headerBtns.forEach((button) => button.classList.remove("active"));
		btn.classList.add("active");
	});
});

loadHome();

homeBtn.addEventListener("click", () => loadHome());
menuBtn.addEventListener("click", () => loadMenu());

console.log("Webpack funcionando!");
