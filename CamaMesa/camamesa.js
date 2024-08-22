// Seleciona os elementos
const categoriasLink = document.querySelector('.categorias');
const menuEscolha = document.querySelector('.escolha');

// Função para alternar a visibilidade do menu
function toggleMenu() {
    menuEscolha.classList.toggle('mostrar');
}

// Função para fechar o menu se o clique for fora dele
function closeMenuOnClickOutside(event) {
    if (!menuEscolha.contains(event.target) && !categoriasLink.contains(event.target)) {
        menuEscolha.classList.remove('mostrar');
    }
}

// Adiciona o evento de clique no link para abrir/fechar o menu
categoriasLink.addEventListener('click', toggleMenu);

// Adiciona o evento de clique no documento para fechar o menu se clicar fora
document.addEventListener('click', closeMenuOnClickOutside);
