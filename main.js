function tocaaaaaaa(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

//document.querySelector('.tecla_acaba').onclick = tocaaaaaaa;

const listaDeTeclas = document.querySelectorAll('.tecla');

let i = 0;

while (i < listaDeTeclas.length) {
  listaDeTeclas[i].onclick = function () {
    tocaaaaaaa();
  };
  i += 1;
}
