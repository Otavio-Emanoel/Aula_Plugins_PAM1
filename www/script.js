document.addEventListener("deviceready", onDeviceReady, false)

function vibrar(duracao) {
    try {
        navigator.vibrate(duracao);
        alert("Ele vibrou por " + duracao/1000 + " segundos")
    } catch (error) {
        console.error("Ocorreu um erro" + error)
    }
}