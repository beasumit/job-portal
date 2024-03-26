import express from "express";
import UserController from "./src/controller/user.controller.js";
import expressEjsLayouts from "express-ejs-layouts";
import path from 'path';

const port = 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'src', 'views')); // Corrected setting for views directory
app.use(expressEjsLayouts);

const userController = new UserController();
app.get("/", userController.gethome);

app.listen(port, () => {
  console.log("Server start at port:", port);
});
