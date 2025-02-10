import express from 'express';
import cors from 'cors';

import 'dotenv/config'
import './plugins/database'
import routes from './routes'

const app = express();
const port: number = 3030

app.use(cors());
app.use(...routes);
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})