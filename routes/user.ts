import express from 'express';
import db from '../plugins/database'

const router = express.Router();

router.get('/user/:id', (req, res, next) => {
    console.log('[user id:]', req.params.id)
    console.log('[db]:', db)
})

export default router;


