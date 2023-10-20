const start = 0;

function checkLogin() {
  const email = document.querySelector('#email').value;
  const senha = document.querySelector('#senha').value;

  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

const validateCheckbox = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');

const checkAgreement = () => {
  if (validateCheckbox.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
};

validateCheckbox.addEventListener('click', checkAgreement);

if (!start === 0) {
  checkLogin();
}
