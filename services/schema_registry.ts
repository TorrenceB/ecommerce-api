import { databaseClient } from "../plugins"

// Get operations
const getSchema = async (column: string, value: string) => {
    try {
        const query = `SELECT * FROM "schema_registry" WHERE ${column} = '${value}'`;
        const response = await databaseClient.query(query);
        const [schema] = response.rows;

        return schema;
    } catch (error) {
        console.error(`[mh-api]: @getSchema: ${error.message}`);
    }
}
const getLatestSchema = async (schemaType: string) => {
    try {
        const query = `SELECT * FROM "schema_registry" WHERE schema_type = '${schemaType}' ORDER BY version DESC LIMIT 1`;
        const response = await databaseClient.query(query);
        const [schema] = response.rows;

        if (schema) {
            return schema;
        } else {
            throw new Error(`Schema not found for type: ${schemaType}`);
        }

    } catch (error) {
        console.error(`[mh-api]: @getLatestSchema: ${error.message}`);
    }
}

// Put operations
const updateSchema = async (id: string, schema: object) => {
    try {
        const updatedSchema = await databaseClient.query(`UPDATE "schema_registry" SET schema = '${JSON.stringify(schema)}' WHERE id = '${id}'`);

        return updatedSchema;
    } catch (error) {
        console.error(`[mh-api]: @updateSchema: ${error.message}`);
    }
}

export { getSchema, getLatestSchema, updateSchema };