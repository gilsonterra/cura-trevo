(function () {
  function removeExamSection() {
    // Remover a seção de busca de exames
    var examSection = document.getElementById("buscar-exames");
    if (examSection) {
      examSection.style.display = "none";
      console.log("Seção de busca de exames removida!");
    }
  }

  function initialize() {
    removeExamSection();
  }

  // Tentar inserir após o DOM carregar
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    initialize();
  }

  // Tentar novamente após um pequeno delay (para garantir que o React hidratou)
  setTimeout(initialize, 1000);
  setTimeout(initialize, 2000);
})();
