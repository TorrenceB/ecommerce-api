import express from 'express';
import { getSchema } from '../services/schema_registry'

const router = express.Router();

/**
 * @get
 * @description Get schema by id
 * @param {string} id
 * 
 * @response {object} schema
 */
router.get('/schema-registry/id/:id', async (req, res, next) => {
    const schema = await getSchema("id", req.params.id)

    res.json(schema)
})
/**
 * @get
 * @description Get schema by schema_type
 * @param {string} type
 * 
 * @response {object} schema
 */
router.get('/schema-registry/type/:type', async (req, res, next) => {
    const schema = await getSchema("schema_type", req.params.type)

    res.json(schema)
})

export default router;