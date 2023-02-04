const routes = require("./routes");
const http = require("http");

// start the server
const server = http.createServer(routes);

// listen request on hitting port 3000
server.listen(3000);
