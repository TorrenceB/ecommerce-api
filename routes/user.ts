import express from 'express';

import { getUser } from '../services/user'

const router = express.Router();

router.get('/user/:id', async (req, res, next) => {
    const user = await getUser(req.params.id)

    res.json(user)
})

export default router;


