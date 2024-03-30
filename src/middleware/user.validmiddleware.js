const userValidate = (req, res, next) => {
    const { name, email, password } = req.body;
    const errors = [];
  
    if (!name || name.trim() === "") {
      errors.push("Name is required");
    }
    if (!email || !isValidEmail(email)) {
      errors.push("Email is required");
    }
    if (!password) {
      errors.push("Please enter your password.");
    }
  
    if (errors.length > 0) {
      return res.render('user-data', {
        errorMessage: errors[0], // Render the first error message
      });
    }
  
    next(); // Call next middleware if no errors
  };
  
  export default userValidate;
  