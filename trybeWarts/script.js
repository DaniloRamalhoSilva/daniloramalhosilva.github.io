/* >>>>>>>>>>>>>>>>>>>>>>>> variaveis <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  */
const btnEnviar = document.getElementById('submit-btn');
const checkBoxAgreement = document.getElementById('agreement');
const contadorP = document.getElementById('counter');
const textArea = document.getElementById('textarea');
let contador = 500;
const emailAlert = document.getElementById('email');
const passwordAlert = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const formes = document.getElementById('form');
const nome = document.getElementById('Nome');
const email = document.getElementById('Email');
const casa = document.getElementById('Casa');
const familia = document.getElementById('Família');
const materias = document.getElementById('Materias');
const avaliacao = document.getElementById('Avaliacao');
const Observacoes = document.getElementById('Observacoes');
const formeData = document.getElementById('form-data');
const materiais = document.getElementsByClassName('subject');
const divImg = document.getElementsByClassName('d');
const img = document.getElementsByClassName('i');
const opt = document.getElementsByClassName('opt');
const house = document.getElementById('house');

/* >>>>>>>>>>>>>>>>>>>>>>>> Funçoes <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  */
function alohomora() {
  if (emailAlert.value === 'tryber@teste.com' && passwordAlert.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function contaCaracter(event) {
  contador = 500 - event.target.value.length;
  contadorP.innerText = `${contador}`;
}

function verifivaCheckd() {
  const mat = [];
  for (let i = 0; i < materiais.length; i += 1) {
    if (materiais[i].checked === true) {
      mat.push(materiais[i].value);
    }
  }
  return mat;
}
/* >>>>>>>>>>>>>>>>>>>>>>>> inicio <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  */
/* btnEnviar.disabled = true; */
contadorP.innerText = `${contador}`;
formeData.style.display = 'none';

loginBtn.addEventListener('click', alohomora);
textArea.addEventListener('input', contaCaracter);

/* checkBoxAgreement.addEventListener('change', () => {
  if (checkBoxAgreement.checked === false) {
    btnEnviar.disabled = true;
  } else {
    btnEnviar.disabled = false;
  }  
});
 */

btnEnviar.addEventListener('click', (event) => {
  event.preventDefault();
  if (checkBoxAgreement.checked === true) {
    nome.innerText = `Nome: ${formes.nome.value} ${formes.sobrenome.value}`;
    email.innerText = `Email: ${formes.email.value}`;
    casa.innerText = `Casa: ${formes.house.value}`;
    familia.innerText = `Família: ${formes.family.value}`;
    materias.innerText = `Matérias: ${verifivaCheckd().join(', ')}`;
    avaliacao.innerText = `Avaliação: ${formes.rate.value}`;
    Observacoes.innerText = `Observações: ${formes.comentario.value}`;
    formeData.style.display = 'block';
    formes.style.display = 'none';
  } else {
    alert('É obrigatorio concordar  o uso das informações!');
  }

});

divImg[0].addEventListener('mouseenter', () => img[0].style.opacity = '100%');
divImg[0].addEventListener('mouseout', () => img[0].style.opacity = '0');

divImg[1].addEventListener('mouseenter', () => img[1].style.opacity = '100%');
divImg[1].addEventListener('mouseout', () => img[1].style.opacity = '0');

divImg[3].addEventListener('mouseenter', () => img[2].style.opacity = '100%');
divImg[3].addEventListener('mouseout', () => img[2].style.opacity = '0');

divImg[2].addEventListener('mouseenter', () => img[3].style.opacity = '100%');
divImg[2].addEventListener('mouseout', () => img[3].style.opacity = '0');

divImg[4].addEventListener('mouseenter', () => img[4].style.opacity = '100%');
divImg[4].addEventListener('mouseout', () => img[4].style.opacity = '0');

divImg[5].addEventListener('mouseenter', () => {
  img[5].style.opacity = '50%';
  img[0].style.opacity = '100%';
  img[1].style.opacity = '100%';
  img[2].style.opacity = '100%';
  img[3].style.opacity = '100%';
  img[4].style.opacity = '100%'
});
divImg[5].addEventListener('mouseout', () => {
  img[5].style.opacity = '0';
  img[5].style.opacity = '0';
  img[0].style.opacity = '0';
  img[1].style.opacity = '0';
  img[2].style.opacity = '0';
  img[3].style.opacity = '0';
  img[4].style.opacity = '0';
});

house.addEventListener('click', () => {
  img[0].style.opacity = '0';
  img[1].style.opacity = '0';
  img[3].style.opacity = '0';
  img[2].style.opacity = '0';
  img[house.selectedIndex - 1].style.opacity = '100%';
});
