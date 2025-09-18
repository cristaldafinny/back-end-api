import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();         // Carrega e processa o arquivo .env
console.log("O valor de URL_BD é:", process.env.URL_BD); 
const { Pool } = pkg;    // Utiliza a Classe Pool do Postgres
import express from "express";      // Requisição do pacote do express
const app = express();              // Instancia o Express
const port = 3000;                  // Define a porta

app.get("/", async (req, res) => {        // Cria endpoint na rota da raiz do projeto
  console.log("Rota GET / solicitada");
  
  const db = new Pool({  
  connectionString: process.env.URL_BD,
});

let dbStatus = "ok";
try {
  await db.query("SELECT 1");
} catch (e) {
  dbStatus = e.message;
}
  res.json({
		message: "API para coisas",      // Substitua pelo conteúdo da sua API
    author: "Cristal Dafinny Sousa de Oliveira",    // Substitua pelo seu nome
      statusBD: dbStatus   // Verifica o BD
  });
});

app.listen(port, () => {            // Um socket para "escutar" as requisições
  console.log(`Serviço rodando na porta:  ${port}`);
});