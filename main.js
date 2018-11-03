createGrid(4);
const item = document.getElementsByClassName("item);
item.addEventListener("mouseenter", changeItemColor);



function createGrid(squares){
	const grid = document.querySelector('.grid-container');
	let total = squares*squares;
	for (let i = 0; i < total; i++){
		const div = document.createElement('div');
		div.classList.add('item');
		grid.appendChild(div);
	}
}

function changeItemColor(){
}
