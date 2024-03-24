const mario = document.querySelector('.mario');
const enemy = document.querySelector('.enemy');



// Dimensões da caixa de colisão do Mario (valores ajustáveis conforme necessário)
const marioCollisionBox = {
    top: mario.offsetTop + 20, // Topo da caixa de colisão (20 pixels acima do topo da imagem)
    bottom: mario.offsetTop + mario.offsetHeight - 20, // Base da caixa de colisão (20 pixels abaixo da base da imagem)
    left: mario.offsetLeft + 20, // Lado esquerdo da caixa de colisão (20 pixels à direita do lado esquerdo da imagem)
    right: mario.offsetLeft + mario.offsetWidth - 20 // Lado direito da caixa de colisão (20 pixels à esquerda do lado direito da imagem)
};

// Dimensões da caixa de colisão do inimigo (valores ajustáveis conforme necessário)
const enemyCollisionBox = {
    top: enemy.offsetTop + 10, // Topo da caixa de colisão (20 pixels acima do topo da imagem)
    bottom: enemy.offsetTop + enemy.offsetHeight - 20, // Base da caixa de colisão (20 pixels abaixo da base da imagem)
    left: enemy.offsetLeft + 20, // Lado esquerdo da caixa de colisão (20 pixels à direita do lado esquerdo da imagem)
    right: enemy.offsetLeft + enemy.offsetWidth - 20 // Lado direito da caixa de colisão (20 pixels à esquerda do lado direito da imagem)
};


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
        
          // Diminui o tamanho do Mario
          mario.style.width = "100px"; // Ajuste o tamanho conforme necessário
          
        // Colisão detectada, pare a animação do inimigo
        enemy.style.animationPlayState = "paused";

        // Finalizar o jogo (ou outras ações necessárias)
        gameOver();
    } 
}

// Função para finalizar o jogo
function gameOver() {
    // Adicione aqui a lógica para finalizar o jogo
    // Por exemplo, você pode exibir uma mensagem de game over, reiniciar o jogo, etc.
    // Neste exemplo, mostramos uma mensagem de game over no console
    console.log("Game Over!");
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
        }, 3700); // Remova a classe de salto após 0.5 segundos (ajustado para uma resposta mais rápida)
    }
});

