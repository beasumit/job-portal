import express from "express";
import UserController from "./src/controller/user.controller.js";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";
import Jobs from "./src/controller/job.controller.js";
import userValidate from "./src/middleware/user.validmiddleware.js";

const port = 3000;

const app = express();

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }));


app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views")); // Corrected setting for views directory
app.use(expressEjsLayouts);




const userController = new UserController();
const jobController = new Jobs();

app.get("/signup",userValidate, userController.getSignUp);
app.post("/userdata", userController.postUserSignup);
//login page
app.get("/login", userController.loginUser);
app.get("/userdata", userController.userData);
app.get("/", jobController.getJobsview);
app.get("/jobs", jobController.getAllJobs);

app.listen(port, () => {
  console.log("Server start at port:", port);
});

