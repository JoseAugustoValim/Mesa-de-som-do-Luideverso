function toca_acaba() {
  document.querySelector('#tecla_acaba').play();
}

//document.querySelector('.tecla_acaba').onclick = toca_acaba;

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick=toca_acaba();

