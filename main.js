function tocaaaaaaa(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

//document.querySelector('.tecla_acaba').onclick = tocaaaaaaa;

//Aqui crio o acesso a todos os elementos com a classe tecla
const listaDeTeclas = document.querySelectorAll('.tecla');
//document.querySelector retorna todos os elementos de um seletor especifico 


for (let i = 0; i < listaDeTeclas.length; i++) { //Este for faz um percurso do tamanho da lista de teclas
  const tecla = listaDeTeclas[i]; //Esta variavel esta aqui para que consiga se acessar o elemento de uma determinada posição
  const instrumento = tecla.classList[1]; //Aqui acessamos a segunda classe que difere da primeira
  const idAudio = `#som_${instrumento}`; //template string Criamos o seletor com o id vindo da variavel instrumento

  tecla.onclick = function () { //Quando o elemento tecla tiver a ação de clique
    tocaaaaaaa(idAudio); //chamamos a função toca passando para ela o seletor fonecido pela variavel const idAudio
  };
}
