//OS SLIDES AUTOMATICOS
const swiper = new Swiper('.swiper',{
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

//SISTEMA DE PESQUISA 
const searchInput = document.getElementById('pesquisar');
const checkboxContainer = document.getElementById('checkbox-container')


function filtrar(){
    const filtroTexto = searchInput.value.toLowerCase();

    // Pegar todos os checkboxes dentro do container
    const checkboxes = checkboxContainer.querySelectorAll('input[type="checkbox"]')

    const tagsSelecionadas = Array.from(checkboxes).filter(chk => chk.checked).map(chk => chk.value.toLowerCase());

    const postagens = document.querySelectorAll('.postagem');

    postagens.forEach(postagem => {
        const title = postagem.querySelector('h2').textContent.toLowerCase();
        const tags = postagem.dataset.tags.toLowerCase().split(' ');

        const bateTitle = title.includes(filtroTexto)
        const bateTags = tagsSelecionadas.length === 0 ? true : tagsSelecionadas.some(tag => tags.includes(tag))

        if(bateTitle && bateTags){
            postagem.style.display = 'flex';
        }else {
            postagem.style.display = 'none';
        }
    })
}

searchInput.addEventListener('input', filtrar)
checkboxContainer.addEventListener('change', filtrar)