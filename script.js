// Seleciona o elemento <header> com id="navbar"
const header = document.getElementById("navbar");

// Escuta o evento de rolagem da página
window.addEventListener("scroll", () => {
  // Se o scroll vertical for maior que 50px
  if (window.scrollY > 50) {
    // Adiciona a classe "scrolled" ao header
    header.classList.add("scrolled");
  } else {
    // Remove a classe "scrolled" quando volta ao topo
    header.classList.remove("scrolled"); 
  }

  
});
