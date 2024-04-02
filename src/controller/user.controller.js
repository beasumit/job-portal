import UserModel from "../models/user.model.js";

export default class User {
  getSignUp(req, res) {
    res.render("sign-up",{errorsMessage:null});
  }
  
  async postUserSignup(req, res) {
    
    try {
      console.log(req.body);
      // Add user to the database
      UserModel.addUser(req.body);

      // Redirect to the user data page
      let users = UserModel.get();
      res.render('user-data',{users})
    } catch (error) {
      console.error("Error adding user:", error);
      // Set error message in session or query parameter

      res.redirect("/signup");
    }
  }

  // Login page
  loginUser(req, res) {
    
    return res.render("login-page");
  }

  // User data
  async userData(req, res) {
    try {
      let users = await UserModel.get(); // Add await here

      return res.render("user-data", { users });
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).send("Internal Server Error");
    }
  }
}
