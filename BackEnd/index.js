const config = require("config");
const app = require("./config/express");

const PORT = config.get("port");

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`);
});
