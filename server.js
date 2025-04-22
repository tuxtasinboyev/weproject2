import router from "./router/index.js";
import express from "express";

const server = express();
const PORT = 3000;
server.use(express.json());
server.use(router)

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);})