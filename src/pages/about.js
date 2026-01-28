import bannerImg from "../assets/dishes/dish2.jpeg";
import media1 from "../assets/icons/facebook.png";
import media2 from "../assets/icons/instagram.png";
import media3 from "../assets/icons/youtube.png";
import media4 from "../assets/icons/x.png";

export default function loadAbout() {
	const content = document.getElementById("content");
	content.innerHTML = "";

	const aboutDiv = document.createElement("div");
	aboutDiv.classList.add("about-page");

	const bannerDiv = document.createElement("div");
	bannerDiv.classList.add("about-img");

	const aboutImg = document.createElement("img");
	aboutImg.src = bannerImg;
	aboutImg.alt = "A fresh plate of sushi";

	bannerDiv.append(aboutImg);

	const contentAbout = document.createElement("div");
	contentAbout.classList.add("about-content");

	const heading = document.createElement("h2");
	heading.classList.add("heading");

	const text1 = document.createTextNode("About ");
	const span = document.createElement("span");
	span.textContent = "us";
	span.classList.add("highlight");

	heading.appendChild(text1);
	heading.appendChild(span);

	const description = document.createElement("p");
	description.textContent =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean blandit  scelerisque erat nec aliquam. Morbi eget diam volutpat ipsum molestie  consectetur. Nulla sed lacus ac justo venenatis maximus non eget quam.  Donec a felis at lacus ullamcorper interdum. Mauris varius semper felis. Nam scelerisque elit non libero egestas, in molestie sapien ultrices.  Fusce placerat, nisi nec tristique ultrices, justo velit tincidunt  lorem, sed condimentum ligula quam a enim. Nulla interdum sollicitudin  sem, nec faucibus augue pellentesque ut. Nulla a tempor lectus.";

	const mediaResources = document.createElement("div");
	mediaResources.classList.add("about-media");

	const socialIcons = [
		{ name: "Facebook", src: media1 },
		{ name: "Instagram", src: media2 },
		{ name: "YouTube", src: media3 },
		{ name: "X", src: media4 },
	];

	socialIcons.forEach((socialMedia) => {
		const mediaLink = document.createElement("a");
		mediaLink.classList.add("social-media-link");
		mediaLink.href = "#";

		const mediaIcon = document.createElement("img");
		mediaIcon.src = socialMedia.src;
		mediaIcon.alt = socialMedia.name;
		mediaLink.appendChild(mediaIcon);

		mediaResources.appendChild(mediaLink);
	});

	contentAbout.appendChild(heading);
	contentAbout.appendChild(description);
	contentAbout.appendChild(mediaResources);

	aboutDiv.appendChild(bannerDiv);
	aboutDiv.appendChild(contentAbout);

	content.appendChild(aboutDiv);
}
