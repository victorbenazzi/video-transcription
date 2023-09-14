import axios from "axios";

export const server = axios.create ({
    baserURL: "http://localhost:3333"
})