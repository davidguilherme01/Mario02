const mario = document.querySelector('.mario');
const enemy = document.querySelector('.enemy');

// Função para verificar a colisão
function checkCollision() {
    const marioRect = mario.getBoundingClientRect();
    const enemyRect = enemy.getBoundingClientRect();
    
    // Verifica se houve colisão
    if (
        marioRect.bottom >= enemyRect.top &&
        marioRect.right >= enemyRect.left &&
        marioRect.left <= enemyRect.right
    ) {
        // Colisão detectada, altera a imagem do Mario para a imagem de morte
        mario.src = "Imagens/game-over.png";
        
        
        // Você pode adicionar outras ações aqui, como reiniciar o jogo, diminuir a pontuação, etc.
    }
}

// Adiciona um listener para cada frame da animação
const loop = setInterval(() => {
    // Verifica a colisão a cada frame
    checkCollision();
}, 10);

document.addEventListener('keydown', function(event) {
    if (event.code === 'Enter') { // Mudança feita aqui, de 'Space' para 'Enter'
        var mario = document.querySelector('.mario');
        mario.classList.add('jump');
        setTimeout(function() {
            mario.classList.remove('jump');
        }, 4500); // Remova a classe de salto após 0.5 segundos (ajustado para uma resposta mais rápida)
    }
});