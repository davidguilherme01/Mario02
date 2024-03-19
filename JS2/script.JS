const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scoreDisplay = document.getElementById('score');

let isJumping = false;
let marioBottom = 0;
let gravity = 0.9;
let score = 0;

// Objeto para rastrear o estado das teclas
const keys = {
   ArrowUp: false,
   Space: false,
   ArrowLeft: false,
   ArrowRight: false
};

// Função para fazer o Mario pular
const jump = () => {
   if (!isJumping) {
      isJumping = true;
      let upInterval = setInterval(() => {
         if (marioBottom > 250) {
            clearInterval(upInterval);
            let downInterval = setInterval(() => {
               if (marioBottom < 0) {
                  clearInterval(downInterval);
                  isJumping = false;
               } else {
                  marioBottom -= 5;
                  mario.style.bottom = marioBottom + 'px';
               }
            }, 20);
         } else {
            marioBottom += 30;
            mario.style.bottom = marioBottom + 'px';
         }
      }, 20);
   }
}

// Função para movimentar o Mario para a esquerda
const moveLeft = () => {
   const currentPosition = parseInt(window.getComputedStyle(mario).getPropertyValue('left'));
   mario.style.left = currentPosition - 10 + 'px';
}

// Função para movimentar o Mario para a direita
const moveRight = () => {
   const currentPosition = parseInt(window.getComputedStyle(mario).getPropertyValue('left'));
   mario.style.left = currentPosition + 10 + 'px';
}

// Adiciona event listeners para as teclas de espaço e setas
document.addEventListener('keydown', (event) => {
   if (event.code === 'Space') {
      keys.Space = true;
      jump();
   } else if (event.code === 'ArrowLeft') {
      keys.ArrowLeft = true;
      moveLeft();
   } else if (event.code === 'ArrowRight') {
      keys.ArrowRight = true;
      moveRight();
   }
});

document.addEventListener('keyup', (event) => {
   if (event.code === 'Space') {
      keys.Space = false;
   } else if (event.code === 'ArrowLeft') {
      keys.ArrowLeft = false;
   } else if (event.code === 'ArrowRight') {
      keys.ArrowRight = false;
   }
});

// Loop do jogo
const gameTimer = setInterval(() => {
   // Verifica se a barra de espaço está pressionada para pular
   if (keys.Space) {
      jump();
   }
   
   // Verifica se as setas esquerda/direita estão pressionadas para movimentar o Mario
   if (keys.ArrowLeft) {
      moveLeft();
   } else if (keys.ArrowRight) {
      moveRight();
   }

   // Outras verificações do jogo (colisões, etc.)
   // ...
}, 100)
