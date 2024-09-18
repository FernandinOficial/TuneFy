const audio = document.getElementById('currentAudio');
const progressBar = document.getElementById('progressBar');
const currentTimeDisplay = document.getElementById('currentTime');
const totalTimeDisplay = document.getElementById('totalTime');

const playlist = [
    "music/PromQueen-BeachBunny.mp3",
    "music/BrooklynBloodPop-Syko.mp3",
    "music/idfc-blackbear.mp3",
    "music/TekIt-Cafune(SpeedUp).mp3",
    "music/DisparateYouth-Santigold.mp3",
    "music/Musica6.mp3",
    "music/Musica7.mp3",
    "music/Musica8.mp3",
    "music/Musica9.mp3",
    "music/Musica10.mp3",
    "music/Musica11.mp3",
    "music/Musica12.mp3",
    "music/Musica13.mp3"
];

let currentIndex = 0;

// Atualiza a barra de progresso enquanto a música toca
audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
});

// Permite o controle da barra de progresso pelo usuário
progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
});

// Atualiza a duração total da música e o máximo da barra de progresso
audio.addEventListener('loadedmetadata', () => {
    totalTimeDisplay.textContent = formatTime(audio.duration);
    progressBar.max = audio.duration;
});

// Reproduz ou pausa a música
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

// Formata o tempo em minutos e segundos
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Marca ou desmarca uma música como favorita
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
    playMusic();
}

// Seleciona a próxima música
function fowardMusic() {
    currentIndex = (currentIndex < playlist.length - 1) ? currentIndex + 1 : 0;
    playMusic();
}

// Reproduz a música selecionada
function playMusic() {
    audio.src = playlist[currentIndex];
    audio.play();
    const element = document.getElementById("play");
    element.classList.remove("fa-play");
    element.classList.add("fa-pause");
}

// Função para selecionar a música da playlist
function selectMusic(index) {
    currentIndex = index;
    playMusic();
}
