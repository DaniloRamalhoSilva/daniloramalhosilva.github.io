window.onload = function () {

    let tagTextoRGB = document.getElementById('rgb-color');
    let TagBalls = document.getElementsByClassName('ball');
    let tagResposta = document.getElementById('answer');
    let tagBtnReset = document.getElementById('reset-game');
    let tagScore = document.getElementById('score');
    let score = 0;

    colorBall();
    tagBtnReset.addEventListener('click', colorBall);

    function colorBall() {
        let corSorteada = parseInt(Math.random() * 6);
        let cor = '';

        for (let i = 0; i < TagBalls.length; i += 1) {
            cor = gerarCor();
            TagBalls[i].style.backgroundColor = `rgb${cor}`;

            if (corSorteada === i) {
                tagTextoRGB.innerText = cor;
            }
            TagBalls[i].addEventListener('click', ferificadora);
        }
        tagResposta.innerText = 'Escolha uma cor';
    }

    function ferificadora(event) {
        if (event.target.style.backgroundColor === `rgb${tagTextoRGB.innerText}`) {
            tagResposta.innerText = 'Acertou!';
            score += 3;
            //colorBall()
        } else {
            tagResposta.innerText = 'Errou! Tente novamente!';
            score -= 1;
        }
        tagScore.innerText ='Placar: ' + score;
    }

    function gerarCor() {
        let r = parseInt(Math.random() * 255);
        let g = parseInt(Math.random() * 255);
        let b = parseInt(Math.random() * 255);

        return `(${r}, ${g}, ${b})`;
    }

}