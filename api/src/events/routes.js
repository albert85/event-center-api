import express from 'express';
import event from '.';

const route = express.Router();

route.get('/events', event.getAllEvents);

export default route;
