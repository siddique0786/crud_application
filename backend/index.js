import express from 'express';
import Connection from './database/db.js';
import Routes from './routes/route.js';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

dotenv.config();

app.use(cors());

app.use(bodyParser.json({ extended:true}));
app.use(bodyParser.urlencoded({ extended:true}));

app.use('/',Routes);

const PORT= process.env.PORT || 8000;


Connection();

app.listen(PORT , () => console.log(`Server is running successfully on Port ${PORT}`))