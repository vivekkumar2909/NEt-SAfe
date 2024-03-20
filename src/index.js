import dotenv from 'dotenv';
import DB_Connection from './mongoDB.js';

dotenv.config({path : './env'});

// const app = express();

DB_Connection();