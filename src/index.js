import dotenv from 'dotenv';
import DB_Connection from './mongoDB.js';
import express from 'express';
import bodyParser from 'body-parser';
import { Links } from '../Modals/Links.modals.js';
import axios from 'axios';
import ApiResponse from './api/index.js';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

dotenv.config({path : './env'});

app.get('/', (req, res) =>{
    res.send('Hello World');
})

// app.post('/api', (req, res) =>{
//     axios.post('/api/index', (req, res) =>{)
// })

app.post('/api', async(req, res) =>{
    console.log(req.body);
    const links = await Links.create({
        url:"sdl;fmksdlf",
        title:"Sdfnksdnf",
        SafeVote:2,
        UnSafeVote:3,    
    });

  

    res.status(200).json({
        success: true,
       
    })

    
})

app.listen(process.env.PORT, () =>{
    console.log(`Server is running on port ${process.env.PORT}`);
})



DB_Connection();