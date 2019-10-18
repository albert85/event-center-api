import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import helper from './response';

dotenv.config();

class Auth {
  /**
   * @description
   * @param {object} req
   * @param {object} res
   * @param {function} next
   */
  static authenticate(req, res, next) {
    const auth = req.headers.token;

    const decoded = jwt.verify(auth, process.env.SECRET);

    if (!decoded) {
      return helper(res, 'Unauthorized Operation', 401, {});
    }

    return next();
  }

  static generateToken(req, res) {
    const { isAdmin, firstName } = req.body;
    return jwt.sign({ isAdmin, firstName }, process.env.SECRET, (err, decode) => {
      if (err) console.log('error while creating token');
      return decode;
    });
  }
}

export default Auth;
