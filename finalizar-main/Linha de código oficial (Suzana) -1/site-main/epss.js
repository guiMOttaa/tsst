const images = ["castle-1.png", "castle-2.png", "castle-3.png"];
const header = document.querySelector("header");

window.addEventListener("load", () => {
	let rand = Math.floor(Math.random() * images.length);
	let path = `https://www.sicontis.com/codepen/cpc-block-quote/${images[rand]}`;
	header.style.backgroundImage = `url(${path})`;
});