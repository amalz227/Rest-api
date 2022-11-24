import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';


const app = express();
const PORT =5000;

app.get('/',(req,res) => 
    res.json({message: 'docker is Running'})
);

const port = process.env.PORT || 8080;
app.listen(port,() =>console.log(`app listenin on port :http://localhost:${port}`));

app.use(bodyParser.json());

app.use('/users',usersRoutes);

app.get('/',(req,res) => res.send('Hello from Homepage'));

app.listen(PORT,() =>console.log(`server Running on port :http://localhost:${PORT}`));