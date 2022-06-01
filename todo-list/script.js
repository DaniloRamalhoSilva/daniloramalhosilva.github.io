window.onload = function () {

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> VARIAVEIS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    let tagLista = document.getElementById('lista-tarefas');
    let tagButoonCriaTarefa = document.getElementById('criar-tarefa');
    let tagInput = document.getElementById('texto-tarefa');
    let tagButoonApagaTudo = document.getElementById('apaga-tudo');
    let tagButoonRemoverFinalizados = document.getElementById('remover-finalizados');
    let tagButoonSalvarTarefas = document.getElementById('salvar-tarefas');
    let itensDaLista = document.getElementsByClassName('intemLista');
    let tagButoonMoverCima = document.getElementById('mover-cima');
    let tagButoonMoverBaixo = document.getElementById('mover-baixo');
    let tagButoonRemoverSelecionado = document.getElementById('remover-selecionado');

    let tagSelecionada = '';

    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> INICIO <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    tagButoonCriaTarefa.addEventListener('click', function () { criarItemList(tagInput.value, "intemLista") });
    tagButoonApagaTudo.addEventListener('click', apagarLista);
    tagButoonRemoverFinalizados.addEventListener('click', apagarFinalizados);
    tagButoonSalvarTarefas.addEventListener('click', salvarTarefas);
    tagButoonMoverCima.addEventListener('click', moverParaCima);
    tagButoonMoverBaixo.addEventListener('click', moverParaBaixo);
    tagButoonRemoverSelecionado.addEventListener('click', removerSelecionado);
    carregarTarefasSalvas();


    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FUNÇOES <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    //função axiliar cria as tags
    function criarTeg(tag) {
        return document.createElement(tag);
    };

    //cria item na lista
    function criarItemList(iten, clas) {
        let tagItemList = criarTeg('li');
        tagItemList.innerText = iten;
        tagItemList.className = clas;
        tagLista.appendChild(tagItemList);
        tagItemList.addEventListener('click', selecionarAoClicar);
        tagItemList.addEventListener('dblclick', completarTarefaDobleClick);
        tagInput.value = '';
    }

    //seleciona o item muda cor de fundo ao clicar no item da lista
    function selecionarAoClicar(event) {

        for (let iten of itensDaLista) {
            iten.style.backgroundColor = '';
        }
        event.target.style.backgroundColor = 'gray';
        tagSelecionada = event.target;
    }

    //adiciona a classe 'completed' ao clicar duas vezes
    function completarTarefaDobleClick(event) {
        console.log(event.target.className);
        if (event.target.className === 'intemLista completed') {
            event.target.classList.remove('completed');
        } else {
            event.target.className = 'intemLista completed';
        }
    }

    //apaga os itens da lista
    function apagarLista() {
        let quant = tagLista.childElementCount;
        for (let i = 0; i < quant; i += 1) {
            tagLista.removeChild(tagLista.firstElementChild)
        }
    }

    //apaga os itens finalizados
    function apagarFinalizados() {
        let cont = itensDaLista.length;
        for (let i = cont - 1; i >= 0; i -= 1) {
            if (itensDaLista[i].className === 'intemLista completed') {
                itensDaLista[i].remove();
            }
        }
    }

    //salva lista de itens no localStorage
    function salvarTarefas() {
        let listaItens = [];

        for (let iten of itensDaLista) {
            let objIten = {
                text: '',
                class: '',
            }
            objIten.text = iten.innerText;
            objIten.class = iten.className;
            listaItens.push(objIten);
        }
        localStorage.setItem('itens', JSON.stringify(listaItens));
        alert('Lista de tarefas salva com sucesso!');
    }

    //Carrega os itens salvos no localStorage
    function carregarTarefasSalvas() {
        const recoveredObject = JSON.parse(localStorage.getItem('itens'));        
        if (recoveredObject !== null) {
            for (i = 0; i < recoveredObject.length; i += 1) {
                criarItemList(recoveredObject[i].text, recoveredObject[i].class);
            }
        }
    }

    //Move elemento (item da lista) para cima
    function moverParaCima() {
        if (tagSelecionada === undefined || tagSelecionada === null || tagSelecionada === '') {
            alert('Selecione o inten da lista!');
            return
        }
        if (tagSelecionada !== tagLista.firstChild) {
            tagLista.insertBefore(tagSelecionada, tagSelecionada.previousSibling);
        }
    }

    //Move elemento (item da lista) para baixo
    function moverParaBaixo() {
        if (tagSelecionada === undefined || tagSelecionada === null || tagSelecionada === '') {
            alert('Selecione o inten da lista!');
            return
        }
        if (tagSelecionada !== tagLista.lastChild) {
            tagSelecionada.nextSibling.insertAdjacentElement('afterend', tagSelecionada);
        }
    }

    function removerSelecionado(){
        if (tagSelecionada === undefined || tagSelecionada === null || tagSelecionada === '') {
            alert('Selecione o inten da lista!');
            return
        }else{
            tagSelecionada.remove();
        }

    }




}