var boxes = document.querySelectorAll('.box');
var resetBtn = document.querySelector('#reset-btn');
var msgContainer = document.querySelector('.msg-container');
var msg = document.getElementById('msg');
newBtn = document.getElementById('new-btn')

var turnO = true;
var winners = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

var disabledntn=()=>{
    for(var box of boxes){
        box.disabled=true;
    }
}

var enabledntn=()=>{
    for(var box of boxes){
        box.disabled=false;
    }
}

var win=(pos1)=>{
    msg.innerText=`congrats winner is ${pos1}`;
    msgContainer.classList.remove('hide');
    disabledntn();     // is liay taa k agr aik jeet gya hy to baki box ko disable krwa diye hai
}
// Function to check the winner
var checkWinner = () => {
    for (var pattern of winners) {
        var pos1 = boxes[pattern[0]].innerHTML;
        var pos2 = boxes[pattern[1]].innerHTML;
        var pos3 = boxes[pattern[2]].innerHTML;
        if (pos1 !== '' && pos2 !== '' && pos3 !== '') {
            if (pos1 === pos2 && pos2 === pos3)
             {
                // console.log('Winner', pos1);

                win(pos1);
            }
        }
    }
}

// Add event listener to each box
boxes.forEach(function (box) {
    box.addEventListener('click', function () {
        if (box.innerHTML === '' && !checkWinner()) {
            if (turnO) {
                box.innerHTML = 'o';
                turnO = false;
            } else {
                box.innerHTML = 'x';
                turnO = true;
            }
            box.disabled = true;
            checkWinner();
        }
    });
});

// Function to reset the game
var resetGame = () => {
    for (var box of boxes) {
        box.innerHTML = ''; 
        box.disabled = false; // Enable box kr do
    }
    msgContainer.classList.add('hide'); 

};


newBtn.addEventListener('click', function () {
    resetGame();
});

resetBtn.addEventListener('click', function () {
    resetGame();
});








