// Base de dados dos jogos em um objeto JSON
const jogos = {
    "god-of-war": {
        titulo: "God of War Ragnarök",
        estudio: "Santa Monica Studio",
        ano: "2024",
        capa: "Imagens/God_of_War_Ragnarök_capa.jpg",
        video: "videos/god.mp4",
        plataformas: ["PC", "PS5", "Xbox"],
        generos: ["RPG", "Ação", "Mundo Aberto"],
        nota: "★ 4.8 / 5.0",
        sinopse: "Em um mundo devastado por forças desconhecidas, você assume o papel de um herói em uma jornada épica para descobrir a verdade por trás de um antigo poder. Com um mundo aberto vasto e cheio de segredos, o jogo combina ação intensa, exploração livre e uma história envolvente."
    },
    "spiderman": {
        titulo: "Marvel's Spider-Man 2",
        estudio: "Insomniac Games",
        ano: "2023",
        capa: "Imagens/spiderman2.jpg",
        video: "videos/god.mp4", // Altere para o vídeo do Spider-Man se tiver
        plataformas: ["PS5", "PC"],
        generos: ["Ação", "Aventura", "Mundo Aberto"],
        nota: "★ 4.2 / 5.0",
        sinopse: "Os Spider-Men Peter Parker e Miles Morales retornam para uma nova e épica aventura na franquia aclamada pela crítica. Balance, salte e utilize as novas Asas de Teia para percorrer a cidade de Nova York da Marvel."
    }
};

// Função para pegar os parâmetros da URL (ex: ?jogo=spiderman)
function carregarDetalhesDoJogo() {
    const urlParams = new URLSearchParams(window.location.search);
    const idJogo = urlParams.get('jogo') || 'god-of-war'; // Se não tiver nada na URL, abre o God of War por padrão

    const jogoAtual = jogos[idJogo];

    if (jogoAtual) {
        // Atualiza a página com os dados do jogo selecionado
        document.title = `${jogoAtual.titulo} - Playr`;
        document.getElementById('game-title').innerText = jogoAtual.titulo;
        document.getElementById('game-studio-year').innerText = `Desenvolvedora: ${jogoAtual.estudio} | Ano: ${jogoAtual.ano}`;
        document.getElementById('game-cover-img').src = jogoAtual.capa;
        document.getElementById('game-cover-img').alt = jogoAtual.titulo;
        document.getElementById('game-video').src = jogoAtual.video;
        document.getElementById('game-rating').innerText = jogoAtual.nota;
        document.getElementById('game-synopsis-text').innerText = jogoAtual.sinopse;

        // Renderiza Plataformas
        const platformsContainer = document.getElementById('platforms-list');
        platformsContainer.innerHTML = jogoAtual.plataformas
            .map(p => `<span class="tag">${p}</span> `)
            .join('');

        // Renderiza Gêneros
        const genresContainer = document.getElementById('genres-list');
        genresContainer.innerHTML = jogoAtual.generos
            .map(g => `<span class="tag">${g}</span> `)
            .join('');
    }
}

// Interatividade dos botões com JavaScript
document.getElementById('btn-add-library')?.addEventListener('click', () => {
    alert('Jogo adicionado à sua Biblioteca!');
});

document.getElementById('btn-wishlist')?.addEventListener('click', () => {
    alert('Jogo adicionado à sua Wishlist!');
});

// Executa a função assim que a página carregar
window.addEventListener('DOMContentLoaded', carregarDetalhesDoJogo);