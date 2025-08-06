function verificarSenha() {
  const senha = document.getElementById("senha").value;
  const senhaCorreta = "14/05/2025"; // <- troque para a senha real (ex: "14/05/2025")

  if (senha === senhaCorreta) {
    document.getElementById("envelope").classList.add("open");

    // Solta os corações na tela 💖
    soltarCoracoes();

    // Redireciona para outra página depois de 700ms
    setTimeout(() => {
      window.location.href = "outra-pagina.html";
    }, 700);
  } else {
    document.querySelector("p").innerText = "Senha incorreta! Tenta de novo 😉";
  }
}

function soltarCoracoes() {
  const container = document.getElementById("coracoes-container");

  for (let i = 0; i < 30; i++) {
    const coracao = document.createElement("div");
    coracao.classList.add("coracao");
    coracao.innerText = "💖";

    coracao.style.left = Math.random() * 100 + "vw";
    coracao.style.fontSize = Math.random() * 20 + 20 + "px";
    coracao.style.animationDuration = (Math.random() * 2 + 2) + "s";

    container.appendChild(coracao);

    setTimeout(() => {
      coracao.remove();
    }, 4000);
  }
}
