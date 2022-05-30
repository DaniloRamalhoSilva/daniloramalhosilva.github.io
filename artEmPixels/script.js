window.onload = function () {
    let larguraDoQuadro = 50;
    let auturaDoQuadro = 50;
    let tamanhoDoPixel = 5;
    let totalDoQuado = larguraDoQuadro * auturaDoQuadro;
    let tagQuadro = document.getElementById('pixel-board');
    let tagPaletaCores = document.getElementsByClassName('color');
    let tagBotao = document.getElementById('clear-board');
    let tagPixels = document.getElementsByClassName('pixel');
    let tagtext = document.getElementById('board-size');
    let tagbtnVqv = document.getElementById('generate-board');
    let tagCores = document.getElementById('color-palette');

    //cria cores aleatorias
    let coresProntas = ['Black', 'White', 'Beige', 'Yellow', 'Orange', 'Red', 'Pink', 'Purple', 'Blue', 'Green', 'Brown', 'Grey']
    let cores = []
    for (i = 0; i <= 23; i += 1) {
        cores.push(gerarCor());
    }    
    cores.sort((a, b) => a[0] - b[0] > 0 ? 1 : -1 );
    criaPaletaDeCoresP()
    criaPaletaDeCores();
    linePixelBoard(larguraDoQuadro);
    preenchePixelBoard(auturaDoQuadro);

    //limpa o quadro 
    tagBotao.addEventListener('click', function () {
        for (i = 0; i < totalDoQuado; i += 1) {
            tagPixels[i].style.backgroundColor = 'transparent';
        }
    });

    //cria o quadro de acordo com a quantidade 
    tagbtnVqv.addEventListener('click', function () {
        let qunt = tagtext.value;
        if (qunt === '') {
            alert('Board inválido!');
        } else {
            if (qunt > 100) {
                qunt = 100;
            } else if (qunt < 5) {
                qunt = 5;
            }
            totalDoQuado = qunt * qunt;
            removeQuadro()
            linePixelBoard(qunt);
            preenchePixelBoard(qunt);
        }
    });

    //seleciona a primeira cor
    tagPaletaCores[0].className = 'color selected';


    //------------------------------------------------- Funçoes -----------------------------------------------


    //remove o quadro 
    function removeQuadro() {
        let tags = document.getElementById('pixel-board').childElementCount;
        for (let i = 0; i < tags; i += 1) {
            document.getElementById('pixel-board').removeChild(document.getElementById('pixel-board').firstElementChild)
        }
    }

    //cria paleta de cores
    function criaPaletaDeCores() {
        for (let cor of cores) {
            let tagCor = criaTeg('div');
            tagCor.className = 'color';
            tagCor.style.backgroundColor = `rgba(${cor[0]}, ${cor[1]}, ${cor[2]})`;
            tagCores.appendChild(tagCor);
            tagCor.addEventListener('click', selecionaCor);
            console.log(cor);
        }
    }
    //cria paleta de cores
    function criaPaletaDeCoresP() {
        for (let cor of coresProntas) {
            let tagCor = criaTeg('div');
            tagCor.className = 'color';
            tagCor.style.backgroundColor = cor;
            tagCores.appendChild(tagCor);
            tagCor.addEventListener('click', selecionaCor);
            console.log(cor);
        }
    }

    //Seleciona a cor na paleta
    function selecionaCor(event) {
        limpaSelecao();
        event.target.className = 'color selected';
    }

    //Limpa o quadro
    function limpaSelecao() {
        for (let cor of tagPaletaCores) {
            cor.className = 'color';
        }
    }

    //função axiliar cria as tags
    function criaTeg(tag) {
        return document.createElement(tag);
    };

    // Cria as linhas da altura
    function linePixelBoard(altura) {
        let pixelBoard = document.querySelector('#pixel-board')
        for (let i = 0; i < altura; i += 1) {
            let line = criaTeg('div')
            line.className = 'line';
            pixelBoard.appendChild(line);
        }
    }

    //cria as linhas da largura
    function preenchePixelBoard(largura) {
        let linhas = document.getElementsByClassName('line');
        for (let linha of linhas) {
            for (let i = 0; i < largura; i += 1) {
                let divPixel = criaTeg('div');
                divPixel.className = 'pixel';
                linha.appendChild(divPixel)
                divPixel.addEventListener('click', pintar)
                divPixel.addEventListener('mousedown', function () { //Referência do stackoVerflow, perdi o link
                    clicado = true;
                });

                divPixel.addEventListener('mouseup', function () { //Referência do stackoVerflow,  perdi o link
                    clicado = false;
                });

                divPixel.addEventListener('mouseover', function () { //Referência do stackoVerflow,  perdi o link
                    if (clicado == true) {
                        this.style.backgroundColor = window.getComputedStyle(document.getElementsByClassName('selected')[0]).backgroundColor;
                    }
                });
            }
        }
    }

    //pinta no quadro
    function pintar(event) {
        let corSelecionada = document.getElementsByClassName('selected')[0];
        event.target.style.backgroundColor = window.getComputedStyle(corSelecionada).backgroundColor;
    };

    function gerarCor() {
        let r = parseInt(Math.random() * 255);
        let g = parseInt(Math.random() * 255);
        let b = parseInt(Math.random() * 255);

        return [r, g, b];
    }
}