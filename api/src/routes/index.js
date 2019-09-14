import express from 'express';
import user from './user';
import event from './event';
import center from './center';

const app = express();

app.use(user);
app.use(event);
app.use(center);

export default app;
