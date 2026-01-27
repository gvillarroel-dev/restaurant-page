export default function loadHome() {
	const content = document.getElementById("content");
	content.innerHTML = "";

	const homeDiv = document.createElement("div");
	homeDiv.className = "home-page";

	const title = document.createElement("h1");
	title.className = "home-title";
	title.textContent = "Food Experience";

	const banner = document.createElement("p");
	banner.className = "home-banner";

	const text1 = document.createTextNode("Making ");
	const span = document.createElement("span");
	span.classList.add("highlight");
	span.textContent = "good sh*t";
	const text2 = document.createTextNode(" since 2003");

	banner.appendChild(text1);
	banner.appendChild(span);
	banner.appendChild(text2);

	homeDiv.appendChild(title);
	homeDiv.appendChild(banner);

	content.appendChild(homeDiv);
}
