import express from 'express';
import { center } from '../controllers';

const route = express.Router();

route.get('/centers', center.getAllCenters);

export default route;
