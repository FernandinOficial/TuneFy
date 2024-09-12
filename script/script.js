var isPlaying = false;
var audio = document.getElementById("currentAudio");

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
