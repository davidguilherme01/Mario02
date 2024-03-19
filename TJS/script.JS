const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scoreDisplay = document.getElementById('score');
const enemy = document.querySelector('.enemy');

let score = 0;

// Função para fazer o Mario pular
const jump = () => {
   mario.classList.add('jump');
   setTimeout(() => {
      mario.classList.remove('jump');
   }, 500);
}

// Função para movimentar o Mario para a esquerda
function moveLeft() {
   const currentPosition = parseInt(window.getComputedStyle(mario).getPropertyValue('left'));
   mario.style.left = currentPosition - 15 + 'px';
}

// Função para movimentar o Mario para a direita
function moveRight() {
   const currentPosition = parseInt(window.getComputedStyle(mario).getPropertyValue('left'));
   mario.style.left = currentPosition + 15 + 'px';
}

// Adiciona um event listener para a tecla de espaço para fazer o Mario pular
document.addEventListener('keydown', (event) => {
   if (event.code === 'Space') {
      jump();
   }
});


// Adiciona um event listener para as setas esquerda e direita para movimentar o Mario
document.addEventListener('keydown', (event) => {
   if (event.code === 'ArrowLeft') {
      moveLeft();
   } else if (event.code === 'ArrowRight') {
      moveRight();
   }
});


const loop = setInterval(() =>{

  console.log('loop')


const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

console.log(marioPosition);

if (enemyPosition <= 120 && enemyPosition > 0 && marioPosition <= 80) {
     
    enemy.style.animation = 'none';
    enemy.style.left = `${enemyPosition}px`;
     
    enemy.style.animation = 'none';
    enemy.style.bottom = `${marioPosition}px`;
    
    
    mario.src = './imagens/game-over.png';
    mario.style.width = '80px'
    mario.style.marginLeft = '100px'
    mario.style.left =`${enemy}50px`;

    clearInterval(loop);     
  }else {
    score++;
    scoreDisplay.innerHTML = 'Score: ' + score;
 }
  

},100);
