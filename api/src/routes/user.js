import express from 'express';
import { user } from '../controllers';

const route = express.Router();

route.get('/users', user.getAllUsers);

export default route;
