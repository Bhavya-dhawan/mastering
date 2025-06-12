const container = document.querySelector('.container')
const box = document.querySelectorAll('.player')
result = document.querySelector('#result')

const item_list = Array.from(box)
const selected_list = []
let player = 'X'
function start(){
document.querySelector('#open').classList.toggle('hidden')
document.body.removeEventListener('click' , start )
}
function checkwin()
{
     const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for(let pattern of winPatterns){
        const[a, b, c] = pattern;
        if(selected_list[a] &&
            selected_list[a] === selected_list[b] &&
            selected_list[b] === selected_list[c])
            {
                console.log(`${selected_list[a]} wins!`);
                if(selected_list[a] === 'X'){
                    document.querySelector('#result').classList.add('result1')
                }
                else{
                    document.querySelector('#result').classList.add('result2')
                }
            return true;
            }
    }
    return false;
}



function handle(e){

const index = item_list.indexOf(e.currentTarget)
Player1(index)

}


function Player1(index){
    if(selected_list[index] === 'X' || selected_list[index] === 'O'){
        console.log("Already clicked")
    }
    else{
    if(player === 'X'){
        document.querySelectorAll('.player').forEach(item => 
            {
                item.classList.add('player1')
                item.classList.remove('player2')
                document.querySelector('#heading').textContent = "Player: O"
                document.querySelector('#heading').classList.replace('heading1', 'heading2');

            }
        )
    }
    else{
         document.querySelectorAll('.player').forEach(item => 
            {
                item.classList.add('player2')
                item.classList.remove('player1')
                document.querySelector('#heading').textContent = "Player: X"
                document.querySelector('#heading').classList.replace('heading2', 'heading1');

            }
        )
    }
    console.log(index)
    const selected = container.children[index]
    selected.textContent = player
    
    selected_list[index] = player
    selected_list.forEach(item => console.log(item))
    

    if(checkwin()){
        box.forEach(item => item.removeEventListener('click' , handle))
        console.log(`${player} won`)
        result.classList.toggle('hidden')
        result.textContent = `Player: ${player} Won!!`
    }
    else{
    player = (player === 'X' ? 'O' : 'X')
    }
    
    }
    
}

box.forEach( (item) => item.addEventListener('click' , handle ))


document.body.addEventListener('click' , start )


          














