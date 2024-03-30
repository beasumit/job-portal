import UserModel from "../models/user.model.js";

export default class User {

  
  
  getSignUp(req, res) {
    res.render("sign-up");
  }
  
  postUserSignup(req, res) {
    try {
      console.log(req.body);
      // Add user to the database
      UserModel.addUser(req.body);
  
      // Redirect to the user data page to display the updated list of users
      res.redirect('/userdata',{users:null});
    } catch (error) {
      console.error("Error adding user:", error);
      res.status(500).send("Internal Server Error");
    }
  }
  
  // Login page
  loginUser(req, res) {
    return res.render('login-page');
  }

  // User data
  async userData(req, res) {
    try {
      let users = UserModel.get();
      return res.render('user-data', { users });
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).send("Internal Server Error");
    }
  }
}
