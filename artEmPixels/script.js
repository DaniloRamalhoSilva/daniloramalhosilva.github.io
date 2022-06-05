window.onload = function () {
    let larguraDoQuadro = 30;
    let auturaDoQuadro = 30;       
    let tagPaletaCores = document.getElementsByClassName('color');       
    let tagCores = document.getElementById('color-palette');
    let tagBtnD = document.getElementById('btD');
    let tagBtnE = document.getElementById('btE');
    let tagImg = document.getElementById('imag');
    let tagTextOdesafio = document.getElementById('desafio');
    let cores = []  
    let coresProntas = ['Black', '#c2ffe84d', 'White', 'Beige', 'Yellow', 'Orange', 'Red', 'Pink', 'Purple', 'Blue', 'Green', 'Brown', 'Grey']
    let n = 0;
    let imagens = [
        {
            url: 'desenhos/emojo.png',
            quant: '19'
        },
        {
            url: 'desenhos/estrela.png',
            quant: '19'                       
        },
        {
            url: 'desenhos/charmandes.jpg',
            quant: '21'          
        },
        {
            url: 'desenhos/pikachu.jpeg',
            quant: '41'            
        },
    ];
    
    for (i = 0; i <= 22; i += 1) {
        cores.push(gerarCor());
    }    

    cores.sort((a, b) => a[0] - b[0] > 0 ? 1 : -1 );
    criaPaletaDeCoresP()
    criaPaletaDeCores();
    
    mudaImagem(n);
   

    //seleciona a primeira cor
    tagPaletaCores[0].className = 'color selected';

    tagBtnD.addEventListener('click', function(){ 
        mudaImagem(n+=1);        
    });

    tagBtnE.addEventListener('click', function(){
        mudaImagem(n-=1);        
    });
   
    //------------------------------------------------- Funçoes -----------------------------------------------

    function mudaImagem(n){
        tagTextOdesafio.innerText = `Desafio ${n+1}`;
        tagBtnD.style.display = 'block';
        tagBtnE.style.display = 'block';        
        if(n === 0){                  
            tagBtnE.style.display = 'none';            
        }
        if(n === imagens.length - 1 ){               
            tagBtnD.style.display = 'none';            
        }
        
        tagImg.src = imagens[n].url;        
        removeQuadro()
        linePixelBoard(imagens[n].quant );
        preenchePixelBoard(imagens[n].quant );
    }

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
        let clicado = false;
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
                    if (clicado === true) {
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