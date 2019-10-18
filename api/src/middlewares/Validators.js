import helper from '../helpers/response';

class Validators {
  static createUser(req, res, next) {
    req.checkBody('email', 'please provide a validate email address')
      .notEmpty()
      .isEmail();
    req.checkBody('password', 'please provide a valid password')
      .isLength({ min: 6, max: 255 });

    if (!req.validationErrors()) {
      next();
    }

    return helper(res, 'Please check your supplied credential', 400, req.validationErrors());
  }
}
export default Validators;
