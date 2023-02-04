const routes = require("./routes");

const http = require("http");
const server = http.createServer(routes);

server.listen(3000);
