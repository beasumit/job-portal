import express from "express";
const port = 3000;

const app = new express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome to My Page</h1>");
});

app.listen(port, () => {
  console.log("Server start at port:", port);
});
