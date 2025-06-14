const player = document.getElementById("player");
const block = document.getElementById("block");
const scoreEL = document.getElementById("score"); 
let score = 0;




// function moveLeft(){
//     const playLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
//     console.log(parseInt(window.getComputedStyle(player).getPropertyValue('left')));
//     if(playLeft <= 0) return ;
//     const newPlayLeft = playLeft - 100;
//     player.style.left = newPlayLeft + 'px';

// }




// function moveRight(){
//     const playLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
//     console.log(parseInt(window.getComputedStyle(player).getPropertyValue('left')));
//     if(playLeft >= 200) return ;
//     const newPlayLeft = playLeft + 100;
//     player.style.left = newPlayLeft + 'px';
// }



// document.addEventListener('keydown' , event=>{
//     if(event.key == 'ArrowLeft') moveLeft() ;
//     else if(event.key == 'ArrowRight') moveRight() ;
// } )



// block.addEventListener('animationiteration' , ()=>{
//     let element = Math.floor(Math.random() * 3 ) * 100 ; 
//     block.style.left = element + 'px';
// })


// setInterval(()=>{
//     let playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
//     let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
//     let blockTop = parseInt(window.getComputedStyle(block).getPropertyValue('top'));

//     if(playerLeft == blockLeft && blockTop < 450 && blockTop > 310){
//         alert(`Game Over`);
//         block.style.top = -100 + 'px';
//     }

// },1000)












function moveLeft() {
    const curLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    console.log(parseInt(window.getComputedStyle(player).getPropertyValue('left')));
    if(curLeft <= 0) return ;
    const newLeft = curLeft - 100 ;
    player.style.left = newLeft + 'px' ; 
}

function moveRight() {
    const curLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    if(curLeft >= 200) return ;
    const newLeft = curLeft + 100 ;
    player.style.left = newLeft + 'px' ; 
}



document.addEventListener('keydown' , (event)=>{
    if(event.key == 'ArrowLeft') moveLeft();
    else if (event.key == 'ArrowRight') moveRight();
})                                                 


block.addEventListener('animationiteration' , ()=>{
    const randPos = Math.floor((Math.random()* 3)) * 100 ;
    block.style.left = randPos + 'px';
    score++;
})


setInterval(()=>{
    let playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    let blockTop = parseInt(window.getComputedStyle(block).getPropertyValue('top'));

     if(playerLeft == blockLeft  && blockTop < 450 && blockTop > 310){
        alert(`Game Over !!! \n Score: ${score}`);
        blockTop.style.top = -100  + 'px' ;
        score = 0;
     }
}, 1 )





























































// let score = 0 ;
// // function to move left
// function moveLeft(){
//     const one = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
//     if(one <= 0) return ;  // if left position of player = 0
//     const newLeft = one - 100 ;       //left = 100   =>(100 - 100  = 0) 
//     player.style.left =  newLeft + 'px';

// } 
// // function to move right
// function moveRight(){
//     const one = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
//     if(one >= 200) return ;    // if right position of player >= 200
//     const newLeft = one + 100 ;       //left = 100   =>(100 - 100  = 0) 
//     player.style.left =  newLeft + 'px';
// }

// // the direct by click
//   document.addEventListener('keydown' , (event) => {
//     if(event.key == "ArrowLeft") moveLeft();
//     else if (event.key == "ArrowRight") moveRight();
//   })

// //   randomize th block landing
// block.addEventListener('animationiteration' ,()=>{
//     const randomize = Math.floor(Math.random() * 3) * 100 ; 
//     block.style.left = randomize + 'px' ; 
//     score++ ; 
//     scoreEL.innerHTML = `score: ${score}`;
// } )

// //  check of crashing
// setInterval (()=>{
//     let playLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
//    let  blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
//    let blockTop = parseInt(window.getComputedStyle(block).getPropertyValue('top'));

//     if(playLeft == blockLeft && blockTop < 450 && blockTop > 310){
//         alert(`stop \n Your Score : ${score}`);
//         blockTop.style.top = -100 + 'px';
//         score = 0 ; 
//         location.reload();
//     }
// } , 1)


