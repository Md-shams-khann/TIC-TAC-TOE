let btns = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".resetbtn");
let winnerText = document.querySelector(".w")
let count = 0;
let num = 0;
let turn = true;
let player1 = "X";
let player2 = "O";
let winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];



btns.forEach((btn) => {
    btn.addEventListener("click",() => {
        if(turn){
            btn.innerText = player1;
            turn = false;
            
        }else{
            btn.innerText = player2;
            turn = true;
            
        }
          
        Winner(); 
        
        let isWinner = Winner();
        btn.disabled = true;
        count++;

        if(count === 9 && !isWinner){
            winnerText.innerText = "Draw!";
        }
        
        
    })
})






const Winner = () =>{
    for(let pattern of winningPattern){
        let pos1 = btns[pattern[0]].innerText;
        let pos2 = btns[pattern[1]].innerText;
        let pos3 = btns[pattern[2]].innerText;
    
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                
                if(pos1 === player1){
                    winnerText.innerText = `Winner is ${player1}`;
                    
                }else{
                    winnerText.innerText = `Winner is ${player2}`;
                }
                
                btns.forEach((btns) =>{
                    btns.disabled = true;
                });
                return true;
                
                
            }
            
            
        }
        
        
    }
    return false;
    
}


resetbtn.addEventListener("click", () => {
    btns.forEach(btn => {
        btn.innerText = "";
        btn.disabled = false;
        if(num ===0){
            turn = false;
            num++;
        }else{
            turn = true;
            num--;
        }
    });
    
    count = 0;
    winnerText.innerText = "";
    
});





