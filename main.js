function tocaaaaaaa(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

//document.querySelector('.tecla_acaba').onclick = tocaaaaaaa;

const listaDeTeclas = document.querySelectorAll('.tecla');

let i = 0;

while (i < listaDeTeclas.length) {
  const tecla = listaDeTeclas[i];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`; //template string

  tecla.onclick = function () {
    tocaaaaaaa(idAudio);
  };

  i += 1;
}
