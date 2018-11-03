createGrid(10);
initEventListeners();

function createGrid(squares){
	const grid = document.querySelector('.grid-container');
	const gridStyle = grid.style;
	gridStyle.gridTemplateColumns = "repeat(" + squares + ", auto)";
	gridStyle.gridTemplateRows = "repeat(" + squares + ", auto)";
	let total = squares*squares;
	for (let i = 0; i < total; i++){
		const div = document.createElement('div');
		div.classList.add('item');
		grid.appendChild(div);
	}
}

function changeItemColor(e){
	const style = e.target.style;
	style.backgroundColor = "black";
}

function initEventListeners(){
	const items = document.querySelectorAll(".item");
	items.forEach((item)=>{
		item.addEventListener('mouseenter', changeItemColor);
	});
}
