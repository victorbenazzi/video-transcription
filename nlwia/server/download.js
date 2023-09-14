import ytdl from "ytdl-core";
import fs from "fs"

export const download = (videoID) => {
    const videoURL = "https://www.youtube.com/shorts/" + videoID
    console.log("realizando download do vídeo:", videoID)

ytdl (videoURL, {
    quality: "lowestaudio",
    filter: "audioonly"
}).on("info", (info) => {
    const seconds = info.formats[0].approxDurationMs / 1000
    if (seconds > 60) {
        throw new Error("Duração de vídeo maior que 60")
    }
}).on("end", () => {
    console.log("Download do vídeo finalizado.")
})
.on("error", (Error) => {
    console.log(
        "Não foi possível fazer o download do vídeo. Detalhes do erro:", error
    )
})

.pipe(fs.createWriteStream("./tmp/audio.mp4"))

}

