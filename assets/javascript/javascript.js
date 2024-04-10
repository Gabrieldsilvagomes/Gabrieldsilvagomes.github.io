// Captura o elemento de link "Ver Projeto"
var verVideo = document.getElementById("verVideo");

// Adiciona um ouvinte de evento de clique ao link
verVideo.addEventListener("click", function(event) {
    // Previne o comportamento padrão do link (abrir o link no href)
    event.preventDefault();

    // Obtém o URL do vídeo
    var videoURL = document.getElementById("verVideo").querySelector("source").src;

    // Abre uma nova aba com o vídeo
    var novaAba = window.open(videoURL, "_blank");
});
