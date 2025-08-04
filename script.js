function verificarSenha() {
  const senha = document.getElementById("senha").value;
  const senhaCorreta = "oi"; // <- você pode trocar essa senha

  if (senha === senhaCorreta) {
    document.getElementById("envelope").classList.add("open");
    setTimeout(() => {
      window.location.href = "outra-pagina.html";
    }, 700);
  } else {
    document.querySelector("P").innerText = "Senha incorreta! Tenta de novo 😉";
  }
}
