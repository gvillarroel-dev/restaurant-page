import locationIcon from "../assets/icons/location.png";
import phoneIcon from "../assets/icons/call.png";
import emailIcon from "../assets/icons/mail.png";
import media1 from "../assets/icons/facebook.png";
import media2 from "../assets/icons/instagram.png";
import media3 from "../assets/icons/youtube.png";
import media4 from "../assets/icons/x.png";

export default function loadContact() {
	const content = document.querySelector("#content");
	content.innerHTML = "";

	const contactDiv = document.createElement("div");
	contactDiv.classList.add("contact-page");

	const heading = document.createElement("h1");
	heading.classList.add("contact-heading");
	heading.textContent = "Get in ";

	const span = document.createElement("span");
	span.classList.add("highlight");
	span.textContent = "touch!";

	heading.appendChild(span);

	const paragraph = document.createElement("p");
	paragraph.classList.add("contact-intro");
	paragraph.textContent =
		"Have a question about our menu or want to host an event? Reach out to us directly or visit us at our ";

	const span2 = document.createElement("span");
	span2.classList.add("highlight");
	span2.textContent = "Food District location.";

	paragraph.appendChild(span2);

	const innerContainer = document.createElement("div");
	innerContainer.classList.add("contact-container");

	const infoContainer = document.createElement("div");
	infoContainer.classList.add("contact-information");

	const contact = [
		{
			icon: locationIcon,
			heading: "Visit Us",
			info: "123 Random Address in the world",
		},
		{ icon: phoneIcon, heading: "Call Us", info: "(111)-222-8888" },
		{
			icon: emailIcon,
			heading: "Email Us",
			info: "example@foodExperience.com",
		},
	];

	contact.forEach((item) => {
		const itemCard = document.createElement("div");
		itemCard.classList.add("contact-item");

		const itemImg = document.createElement("div");
		itemImg.classList.add("contact-icon");

		const img = document.createElement("img");
		img.src = item.icon;
		img.alt = item.heading;
		itemImg.appendChild(img);

		const itemDescription = document.createElement("div");
		itemDescription.classList.add("contact-item-description");

		const subheading = document.createElement("h3");
		subheading.classList.add("contact-item-heading");
		subheading.textContent = item.heading;

		const infoP = document.createElement("p");
		infoP.classList.add("contact-item-info");
		infoP.textContent = item.info;

		itemDescription.appendChild(subheading);
		itemDescription.appendChild(infoP);

		itemCard.appendChild(itemImg);
		itemCard.appendChild(itemDescription);

		infoContainer.appendChild(itemCard);
	});

	const openingHours = [
		{ item: "01", heading: "Monday - Thursday", hours: "09am - 10pm" },
		{ item: "02", heading: "Friday - Saturday", hours: "09am - 11pm" },
		{ item: "03", heading: "Sunday", hours: "09am - 09pm" },
	];

	const scheduleContainer = document.createElement("div");
	scheduleContainer.classList.add("schedule-container");

	openingHours.forEach((schedule) => {
		const itemCard = document.createElement("div");
		itemCard.classList.add("schedule-item");

		const itemIcon = document.createElement("div");
		itemIcon.classList.add("schedule-number");
		itemIcon.textContent = schedule.item;

		const innerItem = document.createElement("div");
		innerItem.classList.add("schedule-info");

		const itemHeading = document.createElement("h3");
		itemHeading.classList.add("schedule-heading");
		itemHeading.textContent = schedule.heading;

		const itemP = document.createElement("p");
		itemP.classList.add("schedule-hours");
		itemP.textContent = schedule.hours;

		innerItem.appendChild(itemHeading);
		innerItem.appendChild(itemP);

		itemCard.appendChild(itemIcon);
		itemCard.appendChild(innerItem);
		scheduleContainer.appendChild(itemCard);
	});

	const mapsContainer = document.createElement("div");
	mapsContainer.classList.add("contact-map-location");

	const mapBtn = document.createElement("button");
	mapBtn.classList.add("map-btn");
	mapBtn.textContent = "Open in ";

	const span3 = document.createElement("span");
	span3.classList.add("highlight");
	span3.textContent = "Maps";
	mapBtn.appendChild(span3);

	mapBtn.addEventListener("click", () => {
		window.open("https://maps.google.com/?q=123+Random+Address", "_blank");
	});

	mapsContainer.appendChild(mapBtn);

	const mediaContainer = document.createElement("div");
	mediaContainer.classList.add("contact-media-items");

	const socialIcons = [
		{ name: "Facebook", src: media1, url: "#" },
		{ name: "Instagram", src: media2, url: "#" },
		{ name: "YouTube", src: media3, url: "#" },
		{ name: "X", src: media4, url: "#" },
	];

	socialIcons.forEach((socialMedia) => {
		const mediaLink = document.createElement("a");
		mediaLink.classList.add("social-media-link");
		mediaLink.href = socialMedia.url;
		mediaLink.target = "_blank";
		mediaLink.rel = "noopener noreferrer";

		const mediaIcon = document.createElement("img");
		mediaIcon.src = socialMedia.src;
		mediaIcon.alt = socialMedia.name;
		mediaLink.appendChild(mediaIcon);

		mediaContainer.appendChild(mediaLink);
	});

	innerContainer.appendChild(infoContainer);
	innerContainer.appendChild(scheduleContainer);
	innerContainer.appendChild(mapsContainer);
	innerContainer.appendChild(mediaContainer);

	contactDiv.appendChild(heading);
	contactDiv.appendChild(paragraph);
	contactDiv.appendChild(innerContainer);
	content.appendChild(contactDiv);
}
