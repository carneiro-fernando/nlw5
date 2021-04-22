import express from "express";
import "./database";
import {Socket, Server} from "socket.io";
import path from "path";
import {routes} from "./routes";
import {createServer} from "http"

const app = express(); //Conexão padrão
const http = createServer(app); //Criando protocolo HTTP
const io = new Server(http); //Criando protocolo Websocket

io.on ("connection",(socket: Socket)=> {console.log("Conectou ", socket.id)})

app.set("views",path.join(__dirname, "../public"));
app.use(express.static(path.join(__dirname, "../public")));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use(express.json());
app.use(routes);


app.get("/pages/client", (req, res) =>{
    return res.render("html/client.html")
})

export { http, io }