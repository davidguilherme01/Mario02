const mario = document.querySelector('.mario');
const enemy = document.querySelector('.enemy');

document.addEventListener('keydown', function(event) {
  if (event.code === 'Enter') { // Mudança feita aqui, de 'Space' para 'Enter'
      var mario = document.querySelector('.mario');
      mario.classList.add('jump');
      setTimeout(function() {
          mario.classList.remove('jump');
      }, 4500); // Remova a classe de salto após 0.5 segundos (ajustado para uma resposta mais rápida)
  }
});

const loop = setInterval(() => {
  
  const enemyPosition = enemy.offsetRight;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
  
  if (enemyPosition <= 120) {

    enemy.style.animation ='none'
    enemy.style.Right = `${enemyPosition}px`;
  }
}, 10);