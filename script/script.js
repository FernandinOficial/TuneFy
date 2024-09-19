const audio = document.getElementById('currentAudio');  //vai receber do elemento audio como HIDDEN
const progressBar = document.getElementById('progressBar'); //vai receber a barra de progresso
const currentTimeDisplay = document.getElementById('currentTime');  //vai receber o elemento P que é o tempo corrido
const totalTimeDisplay = document.getElementById('totalTime');  //vai receber o elemento P que é o tempo total da musica
const albumArt = document.querySelector('.photo-playlist img'); // Seleciona a imagem do álbum corrente

const playlist = [    //constante onde vai receber a musica da playlist apontada
    "music/PromQueen-BeachBunny.mp3",
    "music/ProfessorAntonio.mp3",
    "music/idfc-blackbear.mp3",
    "music/TekIt-Cafune(SpeedUp).mp3",
    "music/HotGirlBummer-Blackbear.mp3",
    "music/EnoughIsEnough(SpedUp).mp3",
    "music/Monsters.mp3",
];

const albumArtworks = [    //constante onde vai receber as artes das musicas
    "img/promQueen.jpg",
    "img/professorAntonio.jpg",
    "img/idfc.jpg",
    "img/tekit.jpg",
    "img/HotGirlBummer.jpg",
    "img/EnoughIsEnough.jpg",
    "img/Monsters.jpg",
];
const titles = [    //constante onde vai receber o nome dos titulos das musicas
    "Prom Queen",
    "Antonio",
    "Idfc",
    "Tek It",
    "Hot Girl Bummer",
    "Enough Is Enough",
    "Monsters",
];

const artists = [   //constante onde vai receber o nome dos artistas
    "Beach Bunny",
    "Professor Antonio",
    "blackbear",
    "Cafuné",
    "blackbear",
    "Jan Metternich",
    "haitiboy",
];

let currentIndex = 0;   //index ou indexador do item atual

    // atualizar a barra de progresso enquanto a música toca
    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progress;   
        currentTimeDisplay.textContent = formatTime(audio.currentTime);
    });

    // barra de progresso que pode ser alterado a posiçao da musica pelo usuario
    progressBar.addEventListener('input', () => {
        const seekTime = (progressBar.value / 100) * audio.duration;
        audio.currentTime = seekTime;
    });
    audio.addEventListener('loadedmetadata', () => {
        console.log('Duração da música:', audio.duration); // verifica a duração da música TESTE console

        totalTimeDisplay.innerText = formatTime(audio.duration);  //formatação onde o totalTimeDisplay troca o texto
    });
    


// reproduz ou pausa a música
function play() {
    const element = document.getElementById("play");
    if (element.classList.contains("fa-play")) {
        audio.play();
        element.classList.remove("fa-play");
        element.classList.add("fa-pause");
    } else {
        audio.pause();
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");
    }
}
//se a musica chegar ao tempo final vai acionar a função para passar a para proxima musica
audio.addEventListener('ended', () => { 
    fowardMusic();
});

// Formata o tempo em minutos e segundos
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// marca ou desmarca uma música como favorita
//mesma coisa que a função Play()
function favorite() {
    const favoriteHeart = document.getElementById("favorite-heart-icon");
    if (favoriteHeart.classList.contains("fa-regular")) {
        favoriteHeart.classList.remove("fa-regular");
        favoriteHeart.classList.add("fa-solid");
    } else {
        favoriteHeart.classList.remove("fa-solid");
        favoriteHeart.classList.add("fa-regular");
    }
}

// Seleciona a música anterior
function backwardMusic() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : playlist.length - 1;
    playMusic();    //tocar musica
}

// Seleciona a próxima música
function fowardMusic() {
    currentIndex = (currentIndex < playlist.length - 1) ? currentIndex + 1 : 0; //pergunta ternaria onde currentIndex recebe o valor da playlist.length que é o comprimento - 1
    playMusic();    //tocar musica
}

// Reproduz a música selecionada
function playMusic() {
    // Verifica se o áudio e a playlist estão definidos
    if (!playlist[currentIndex] || !albumArtworks[currentIndex]) {
        console.error('Música ou imagem não encontrada.');
        return;
    }

    // Atualiza a fonte do áudio
    audio.src = playlist[currentIndex];
    
    // Atualiza a imagem de arte do álbum
    albumArt.src = albumArtworks[currentIndex];
    
    // Atualiza a imagem de fundo do pseudo-elemento ::before em .card2
    const cardElement = document.querySelector('.card2');
    cardElement.style.backgroundImage = `url(${albumArtworks[currentIndex]})`;

    // Atualiza o título e o artista
    document.querySelector('.info-musica h1').textContent = titles[currentIndex];
    document.querySelector('.info-musica p').textContent = artists[currentIndex];

    // Toca a música
    audio.play();

    // Atualiza o ícone de play/pause
    const playButton = document.getElementById("play");
    playButton.classList.remove("fa-play");
    playButton.classList.add("fa-pause");
}


// Função para configurar a música e o visual quando carregar a pagina
function initializeMusicPlayer() {
    // Atualiza a imagem de fundo para a primeira música ao carregar a página
    document.querySelector('.card2').style.backgroundImage = `url(${albumArtworks[currentIndex]})`;
    
    // Atualiza a arte do álbum, título e artista da primeira música
    albumArt.src = albumArtworks[currentIndex];
    document.querySelector('.info-musica h1').textContent = titles[currentIndex];
    document.querySelector('.info-musica p').textContent = artists[currentIndex];

    // Define o áudio para a primeira música
    audio.src = playlist[currentIndex];
    
    console.log(`Música inicial: ${titles[currentIndex]} - ${artists[currentIndex]}`);
}

// Função para reproduzir a música (pode ser chamada ao mudar de música)
function playMusic() {
    audio.src = playlist[currentIndex];
    albumArt.src = albumArtworks[currentIndex];

    document.querySelector('.card2').style.backgroundImage = `url(${albumArtworks[currentIndex]})`;
    document.querySelector('.info-musica h1').textContent = titles[currentIndex];
    document.querySelector('.info-musica p').textContent = artists[currentIndex];

    audio.play();

    const playButton = document.getElementById("play");
    playButton.classList.remove("fa-play");
    playButton.classList.add("fa-pause");
}

// Chamar a função de inicialização assim que a página carregar
window.addEventListener('load', initializeMusicPlayer);

// Função para selecionar a música da playlist
function selectMusic(index) {
    currentIndex = index;
    playMusic();
}

// Cria ondas de efeito com a música

