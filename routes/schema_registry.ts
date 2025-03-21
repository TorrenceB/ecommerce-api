import express from 'express';
import { validateData } from '../plugins';
import { getSchema, getLatestSchema, updateSchema } from '../services/schema_registry'

const router = express.Router();

/**
 * @get
 * @description Get schema by id
 * @param {string} id
 * 
 * @response {object} schema
 */
router.get('/schema-registry/:id', async (req, res, next) => {
    const schema = await getSchema("id", req.params.id)

    res.json(schema)
})
/**
 * @get
 * @description Get latest version of schema by type
 * @param {string} schema_type
 * 
 * @response {object} schema
 */
router.get('/schema-registry/:schema_type/latest', async (req, res, next) => {
    const schema = await getLatestSchema(req.params.schema_type)

    res.json(schema)
})

/**
 * @put
 * @description Update schema properties
 * @param {string} id
 * 
 * @response {object} schema
 */
router.put('/schema-registry/:id', async (req, res, next) => {
    const schema = await updateSchema(req.params.id, req.body)

    // console.debug(`[mh-api]: Updated Schema named ${schema.name}, id: ${schema.id}`)
    res.send(`Updated Schema:`, schema)
})

export default router;