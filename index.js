import express from "express";
import UserController from "./src/controller/user.controller.js";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";
import Jobs from "./src/controller/job.controller.js";
import validateForm from "./src/middleware/validateForm.js";

const port = 3000;

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views"));
app.use(expressEjsLayouts);

const userController = new UserController();
const jobController = new Jobs();

// const signupvalidator

app.get("/signup", userController.getSignUp);
app.post("/userdata", validateForm, userController.postUserSignup);
app.get("/login", userController.loginUser);
app.get("/userdata", userController.userData);
app.get("/", jobController.getJobsview);
app.get("/jobs", jobController.getAllJobs);
app.get("/addjobs", jobController.postAddJob);
app.post("/addjobs", jobController.postAddJob);

app.listen(port, () => {
  console.log("Server start at port:", port);
});
