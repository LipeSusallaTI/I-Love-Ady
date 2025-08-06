function abrirPergaminho() {
  const pergaminho = document.querySelector(".pergaminho");
  pergaminho.classList.toggle("aberto");
}
 const imagens = document.getElementById('imagens');
    const total = imagens.children.length;
    let indice = 0;

    function atualizarCarrossel() {
      imagens.style.transform = `translateX(-${indice * 400}px)`;
    }

    function avancar() {
      indice = (indice + 1) % total;
      atualizarCarrossel();
    }

    function voltar() {
      indice = (indice - 1 + total) % total;
      atualizarCarrossel();
    }