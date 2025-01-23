import express from 'express';
import cors from 'cors';

import './plugins/database'

const app = express();
const port: number = 3000

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})