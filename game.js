let box = document.querySelectorAll(".btn");
let reset = document.querySelector(".reset");
let message = document.querySelector("#message");
let newgame = document.querySelector("#newgame");
let afterWin = document.querySelector(".afterWin");
let turn = true; // x
let draw = 0,count =0;
let win = [[0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

newgame.addEventListener("click",()=>{
    for (let i of box) {
            i.disabled = false;
            i.innerText = ""; 
    }
    afterWin.classList.add("hide");
    draw = 0;
    count = 0;
})
reset.addEventListener("click",()=>{
    for (let i of box) {
        i.disabled = false;
        i.innerText = ""; 
    }
    draw = 0;
    count = 0;
})
box.forEach((element) => {
    element.addEventListener("click",()=>{
        if (turn) {
            element.innerText = "X";
            turn  =  false;   
        }
        else{
            element.innerText = "O";
            turn =true;   
        }
        element.disabled = true;
        checkWinner();
    })
});
showWinner = (winner)=>{
    message.innerText= `Congratulation Player ${winner}`;
    afterWin.classList.remove("hide");
    for (let i of box) {
        i.disabled = true;
    }
    count = 0;
}

checkWinner = ()=>{
    draw++;
    for (let index of win) {
        let p1 = box[index[0]].innerText;
        let p2 = box[index[1]].innerText;
        let p3 = box[index[2]].innerText;
        if (p1 !="" && p2!= "" && p3!= "") {
            if (p1=== p2 && p2 === p3) {
                // console.log(`Winner ${p1}`); 
                count++;
                showWinner(p1);
            }
        }
        if(draw === 9 && count === 0){
            message.innerText= `Draw`;
            afterWin.classList.remove("hide");
            for (let i of box) {
            i.disabled = true;
            }
            draw = 0, count = 0;
        }
    }
}