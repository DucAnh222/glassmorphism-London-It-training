const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");

document.addEventListener("mousemove", (e) => {
	boxMove(e, box1, 3);
	boxMove(e, box2, -2);
});

function boxMove(e, box, speed) {
	let x = (window.innerWidth - e.pageX * speed) / 100;
	let y = (window.innerHeight - e.pageY * speed) / 100;

	box.style.transform = `translateX(${x}px) translateY(${y}px)`;
}