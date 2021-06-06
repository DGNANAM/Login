const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const userController = require("./controller/userController");
const auth = require("../middleware/auth");

/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 */

router.post(
  "/register",
  [
    check("username", "Please Enter a Valid Username").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6,
    }),
  ],
  userController.register
);

router.post(
  "/login",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter a valid password").isLength({
      min: 6,
    }),
  ],
  userController.login
);

router.get("/me", auth, userController.userlogin);
router.put("/forgetpassword", userController.fotgetpassword);
router.put("/updatepassword", auth, userController.updatePassword);
module.exports = router;
