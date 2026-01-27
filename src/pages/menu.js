import dish1 from "../assets/dishes/dish1.jpeg";
import dish2 from "../assets/dishes/dish2.jpeg";
import dish3 from "../assets/dishes/dish3.jpeg";
import dish4 from "../assets/dishes/dish4.jpg";
import dish5 from "../assets/dishes/dish5.jpg";
import dish6 from "../assets/dishes/dish6.jpg";
import dish7 from "../assets/dishes/dish7.jpg";
import dish8 from "../assets/dishes/dish8.jpg";

export default function loadMenu() {
	const content = document.getElementById("content");
	content.innerHTML = "";

	const menuDiv = document.createElement("div");
	menuDiv.className = "menu-page";

	const dishes = [
		{ name: "Plato 1", img: dish1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sagittis arcu vitae enim bibendum dignissim. Morbi ut justo vel diam interdum tristique." },
        { name: "Plato 2", img: dish2, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sagittis arcu vitae enim bibendum dignissim. Morbi ut justo vel diam interdum tristique." },
        { name: "Plato 3", img: dish3, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sagittis arcu vitae enim bibendum dignissim. Morbi ut justo vel diam interdum tristique." },
        { name: "Plato 4", img: dish4, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sagittis arcu vitae enim bibendum dignissim. Morbi ut justo vel diam interdum tristique." },
        { name: "Plato 5", img: dish5, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sagittis arcu vitae enim bibendum dignissim. Morbi ut justo vel diam interdum tristique." },
        { name: "Plato 6", img: dish6, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sagittis arcu vitae enim bibendum dignissim. Morbi ut justo vel diam interdum tristique." },
        { name: "Plato 7", img: dish7, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sagittis arcu vitae enim bibendum dignissim. Morbi ut justo vel diam interdum tristique." },
        { name: "Plato 8", img: dish8, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sagittis arcu vitae enim bibendum dignissim. Morbi ut justo vel diam interdum tristique." },
        { name: "Plato 9", img: dish2, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sagittis arcu vitae enim bibendum dignissim. Morbi ut justo vel diam interdum tristique." },
	];

    dishes.forEach((dish) => {
        const dishCard = document.createElement("div");
        dishCard.classList.add("dish-card");

        const imgDiv = document.createElement("div");
        imgDiv.classList.add("dish-img");

        const dishImg = document.createElement("img");
        dishImg.src = dish.img;
        dishImg.alt = dish.name;

        imgDiv.appendChild(dishImg);

        const dishName = document.createElement("h3");
        dishName.textContent = dish.name;

        const dishDescription = document.createElement("p");
        dishDescription.textContent = dish.description;

        dishCard.appendChild(imgDiv);
        dishCard.appendChild(dishName);
        dishCard.appendChild(dishDescription);

        menuDiv.appendChild(dishCard);
    });

    content.appendChild(menuDiv);
}