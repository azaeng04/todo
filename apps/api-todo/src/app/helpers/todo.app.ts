import express = require('express');
import * as cors from 'cors';

const app = express();

const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));

export default app;
