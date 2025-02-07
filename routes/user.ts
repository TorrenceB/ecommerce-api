import express from 'express';

const router = express.Router();

router.get('/user/:id', (req, res, next) => {
    console.log('[user id:]', req.params.id)
})

export default router;


