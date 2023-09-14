import { server } from "./server.js";


const form = document.querySelector("#form");
const input = document.querySelector("#url");
const content = document.querySelector("#content");
form.addEventListener("submit", async (event) => {
    event.preventDefault()

    const videoURL = input.value
    
    if (!videoURL.includes("shorts")){
        content.style.color = "#dc2626"
        return content.textContent = "Esse não é um vídeo válido. Cole um link do YoutubeShorts"
    }

    const [_, params] = videoURL.split("/shorts/")
    const [videoID] = params.split("?si")
    
    content.textContent = "obtendo o texto do áudio..."

    const transcription = await server.get("/summary/" + videoID)

    content.textContent = transcription.data.result
})