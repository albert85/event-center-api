import express from 'express';
import user from '.';
import Validators from '../middlewares/Validators';

const route = express.Router();

route.get('/users', user.getAllUsers);
route.post('/user', Validators.createUser);

export default route;
