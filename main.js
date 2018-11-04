createGrid(4);
initEventListeners();
initButtons();

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

function updateGrid(){
	let dim = prompt("How many squares per side?");
	removeItemListeners();
	resetGrid();
	removeGrid();
	createGrid(dim);
	initEventListeners();
}

function resetGrid(){
	const items = document.querySelectorAll(".item");
	items.forEach((item)=>{
		const style = item.style;
		style.backgroundColor = "white";
	});
}

function removeGrid(){
	const grid = document.querySelector('.grid-container');
	while (grid.hasChildNodes()){
		grid.removeChild(grid.firstChild);
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

function initButtons(){
	const reset = document.getElementById("reset");
	reset.addEventListener('click', resetGrid);
	
	const newGrid = document.getElementById("new-grid");
	newGrid.addEventListener('click', updateGrid);
}

function removeItemListeners(){
	const items = document.querySelectorAll(".item");
	items.forEach((item)=>{
		item.removeEventListener('mouseenter', changeItemColor);
	});
}
