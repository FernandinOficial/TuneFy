const audio = document.getElementById('currentAudio');
const progressBar = document.getElementById('progressBar');
var currentTimeDisplay = document.getElementById('currentTime');
var totalTimeDisplay = document.getElementById('totalTime');

// precisaa ser revisado
    // Atualizar barra de progresso enquanto a música toca
    // audio.addEventListener('timeupdate', () => {
    //   const progress = (audio.currentTime / audio.duration) * 100;
    //   progressBar.value = progress;
    // });

    // // Permitir o controle da barra de progresso pelo usuário
    // progressBar.addEventListener('input', () => {
    //   const seekTime = (progressBar.value / 100) * audio.duration;
    //   audio.currentTime = seekTime;
    // });


function play() {
    var element = document.getElementById("play");
    var isPlaying = true;

    console.log("Tocando Música");

    // Verifica se o ícone atual é play
    if (element.classList.contains("fa-play")) {
        // Altera para o ícone de pausa
        audio.play();
        element.classList.remove("fa-play");
        element.classList.add("fa-pause");

    } else {
        // Altera para o ícone de play
        audio.pause();
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");
    }
    isPlaying = !isPlaying;
}
// codigo precisa ser revisado
// audio.addEventListener('loadedmetadata', () => {
//     var totalTime = formatTime(audio.duration);
//     totalTimeDisplay.textContent = totalTime;
//     progressBar.max = Math.floor(audio.duration);
// })
// // Atualiza a barra de progresso e o tempo atual conforme a música toca
// audio.addEventListener('timeupdate', () => {
//     const currentTime = formatTime(audio.currentTime);
//     currentTimeDisplay.textContent = currentTime;
//     progressBar.value = Math.floor(audio.currentTime); // Atualiza a barra de progresso
// });

// // Permite que o usuário avance ou volte na música ao arrastar a barra de progresso
// progressBar.addEventListener('input', () => {
//     audio.currentTime = progressBar.value;
// });

// // Função para formatar o tempo de segundos para minutos e segundos (MM:SS)
// function formatTime(time) {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
// }

function favorite(){

}
