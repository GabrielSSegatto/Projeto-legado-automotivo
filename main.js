const galerias = document.querySelectorAll('.galeria-wrapper');

galerias.forEach(galeria => {
    const container = galeria.querySelector('.galeria-container');
    const prevBtn = galeria.querySelector('.btn-prev');
    const nextBtn = galeria.querySelector('.btn-next');

    const scrollNext = () => {
        const itemWidth = container.querySelector('.galeria-item').offsetWidth;

        container.scrollBy({ left: itemWidth, behavior: 'smooth' });
    }
    const scrollPrev = () => {
        const itemWidth = container.querySelector('.galeria-item').offsetWidth;

        container.scrollBy({ left: -itemWidth, behavior: 'smooth' });

    }

    nextBtn.addEventListener('click', scrollNext)
    prevBtn.addEventListener('click', scrollPrev)


});

// FILTRO DE BUSCA PARA PÁGINA DE MODELOS

const campoBusca = document.getElementById('buscaCarro');
const todosOsCartoes = document.querySelectorAll('.cards-container .car-card');

if (campoBusca) { 
    campoBusca.addEventListener('input', () => {
        const termoBuscado = campoBusca.value.toLowerCase(); 

     
        todosOsCartoes.forEach(cartao => {
           
            const tituloCartao = cartao.querySelector('h3').textContent.toLowerCase();

           
            if (tituloCartao.includes(termoBuscado)) {
                cartao.style.display = 'block'; 
            } else {
                cartao.style.display = 'none'; 
            }
        });
    });
}


// --- LÓGICA PARA O AVISO INICIAL ---
// Espera todo o conteúdo da página carregar
window.addEventListener('load', () => {
    const avisoContainer = document.getElementById('aviso-inicial');
    const fecharAvisoBtn = document.getElementById('fechar-aviso');

    if (avisoContainer) {
        
        // 1. VERIFICA A "MEMÓRIA" DO NAVEGADOR
        // Se o item 'avisoFechado' já existe e é 'true'. Para evitar mostrar o aviso varias vezes na msm seção
        if (sessionStorage.getItem('avisoFechado') === 'true') {
            // ...esconde o aviso imediatamente, sem animação.
            avisoContainer.style.display = 'none';
        }

        // 2. LÓGICA DO BOTÃO DE FECHAR
        fecharAvisoBtn.addEventListener('click', () => {
            console.log("Botão clicado!!!")
            // Adiciona a classe para fazer o aviso sumir com a animação
            avisoContainer.classList.add('escondido');
            
            // GRAVA NA "MEMÓRIA"
            // Salva a informação de que o aviso foi fechado nesta sessão.
            sessionStorage.setItem('avisoFechado', 'true');
        });
    }
});