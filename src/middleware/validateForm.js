import { body, validationResult } from "express-validator";

const validateForm = async (req, res, next) => {
  // 1. Setup rules for validation
  const rules = [
    body("name").notEmpty().withMessage("Please provide a name."),
    body("email").isEmail().withMessage("Enter correct email format."),
    body("password").isStrongPassword().withMessage("Password should be strong."),
  ];

  // 2. Run those rules
  await Promise.all(rules.map((rule) => rule.run(req)));

  // 3. Check if there are any errors after running the rules
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.render("sign-up", { errorsMessage: errors.array()[0].msg});
  }

  next();
};

export default validateForm;
