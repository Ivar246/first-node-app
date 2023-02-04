const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("content-type", "tex.html");
    res.write("<html>");
    res.write("<head><title>Enter your message</title></head>");

    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Submit</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];

    // message parsing
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (error) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });

      res.setHeader("content-type", "tex.html");
      res.write("<html>");
      res.write("<head><title>Message3</title></head>");
      res.write("<body><h1>hi from ravi a nodejs</h1></body>");
      res.write("</html>");
      res.end();
    });
  }
};

module.exports = requestHandler;
