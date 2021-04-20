import express from "express";

const app = express();

/**
 * GET =  Busca
 * POST = Cria
 * PUT = Altera
 * DELETE = Deleta
 * PATCH = Altera algo especifico
 
 */

app.get("/",(request,response) => {
    return response.json({
message: "Olá mundo! NLW#05"
    });
})

app.post("/",(request,response) => {
    return response.json({message: "Usuario salvo com sucesso!"})
})

app.listen(3333, () => {console.log("Server running port 3333")})  