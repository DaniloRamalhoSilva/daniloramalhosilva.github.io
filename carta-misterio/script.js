window.onload = function () {
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> VARIAVEIS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    let tagButtonCriaCarta = document.getElementById('criar-carta');
    let tagParagrafoFrase = document.getElementById('carta-gerada');
    let tagInputTexto = document.getElementById('carta-texto');    
    let grupoEstilo = ['newspaper', 'newspaper2', 'magazine1', 'magazine2', 'magazine3', 'magazine4'];
    let grupoTamanho = ['medium', 'big', 'reallybig'];
    let grupoRotacao = ['rotateleft', 'rotateright'];
    let grupoInclinacao = ['skewleft', 'skewright'];
    

    

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> INICIO <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    tagButtonCriaCarta.addEventListener('click', function () { separarFraseEmPalavras(tagInputTexto.value) });


    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FUNÇOES <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    //Separa frase em palavras
    function separarFraseEmPalavras(frase) {
        frase = frase.replace(/\s{2,}/g, ' ');
        if (frase === null || frase === ' ' || frase === undefined || frase === '') {
            tagParagrafoFrase.innerText = 'por favor, digite o conteúdo da carta.';
        } else {
            apagarLista();
            let palavras = frase.split(" ");            
            for (let palavra of palavras) {
                adicionarTexto(palavra);
            }
        }
    }

    //Adicionar texto a tag p 
    function adicionarTexto(palavra) {
        let tagPalavra = criarTeg('span');
        tagPalavra.innerText = palavra;
        let classt = aleatorio();
        tagPalavra.className = classt ;
        tagPalavra.addEventListener('click', alteraClasseDeUmaPalavra );
        tagParagrafoFrase.appendChild(tagPalavra);
    }

    function alteraClasseDeUmaPalavra(event){
        let classt = aleatorio();
        event.target.classList = classt;
    }

    //função axiliar cria as tags
    function criarTeg(tag) {
        return document.createElement(tag);
    };

    //Apaga as tags span para uma nova frase    
    function apagarLista() {
        let quant = tagParagrafoFrase.childElementCount;
        for (let i = 0; i < quant; i += 1) {
            tagParagrafoFrase.removeChild(tagParagrafoFrase.firstElementChild)
        }
        tagParagrafoFrase.innerText = '';
    }

    //cria aleatoriamente 4 classes 1 de cada grupo
    function aleatorio() {
        let quant = '';
        let clsseAleatoria = [];
        let classeAleatoriaPronta = '';
        quant = Math.floor(Math.random() * 6); //aleatorio de 0, 1, 2
        clsseAleatoria.push(grupoEstilo[quant]);

        quant = Math.floor(Math.random() * 3); //aleatorio de 0, 1, 2
        clsseAleatoria.push(grupoTamanho[quant]);

        quant = Math.floor(Math.random() * 2); //aleatorio de 0 a 1
        clsseAleatoria.push(grupoRotacao[quant]);

        quant = Math.floor(Math.random() * 2); //aleatorio de 0 a 1
        clsseAleatoria.push(grupoInclinacao[quant]);
        
        return classeAleatoriaPronta = clsseAleatoria[0] + ' ' + clsseAleatoria[1] + ' ' + clsseAleatoria[2]+ ' ' + clsseAleatoria[3]
    }
}