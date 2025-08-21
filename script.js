// ===== SCROLL PARA MUDAR A NAVBAR =====
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

// ===== MENU HAMBURGER =====
// Seleciona o hamburger e o menu
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".Menu");

// Função para alternar a classe 'show' no menu
function toggleMenu() {
  menu.classList.toggle("show");
}

// Adiciona o evento de clique ao hamburger
hamburger.addEventListener("click", toggleMenu);

