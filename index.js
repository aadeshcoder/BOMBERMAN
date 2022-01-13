const bombs = [];
let gamePoints = 0;
let canPlay = true;
function updateGamePoints(){
    const gamePointsElement = document.getElementById('gamePoints');
    gamePointsElement.innerHTML = 'Game Points' + ' ' +gamePoints;
}

function addGrid(){
    const appElement = document.getElementById('app');
    for(let i = 0; i < 9; i++){
        const row = document.createElement('div');
        row.style.display = 'flex';
        row.style.justifyContent = 'center';
        for(let j = 0; j < 9; j++){
            const index = i * 9 +j;
            const column = document.createElement('div');
            column.style.display = 'inline-block';
            column.style.width = '60px'
            column.style.height = '60px'
            column.style.border = '2px solid black'
            // column.style.textAlign = 'center';
            // column.style.verticalAlign = 'middle';
            column.setAttribute('index', index);

            column.addEventListener('click', function(){
                if(canPlay){
                    if(bombs.includes(index)){
                        column.innerHTML = '&#x1F4A3';  
                        column.style.background = 'red';
                        canPlay = false;
                    }
                    else{
                        column.style.background = 'green';
                        gamePoints++;
                        updateGamePoints();
                    }
                }
            })

            row.appendChild(column);
        }
        appElement.appendChild(row);
    }
}

function generateBomb(){
   while(bombs.length < 11){
    const randomNum = Math.floor(Math.random() * 100);
    if(randomNum < 81 && !bombs.includes(randomNum)){
        bombs.push(randomNum);
    }
   }
}


addGrid();
generateBomb();
console.log(bombs);


// show all the bombs once a bomb is clicked
// give a button to start the game again
// every column should be only chlickable only once.
// if all 