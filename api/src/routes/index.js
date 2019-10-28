import express from 'express';
import user from '../users/routes';
import event from '../events/routes';
import center from '../centers/routes';

const app = express();

app.use(user);
app.use(event);
app.use(center);

export default app;
