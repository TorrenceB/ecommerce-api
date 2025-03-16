import client from "../plugins/database";

// Get operations
const getSchema = async (column: string, value: string) => {
    console.log(`[mh-api]: @getSchema: column: ${column}, value: ${value}`);

    try {
        const response = await client.query(`SELECT * FROM "schema_registry" WHERE ${column} = ${value.toString()}`);
        const schema = response.rows[0];

        return schema;
    } catch (error) {
        console.error(`[mh-api]: @getSchema: ${error.message}`);
    }
}

export { getSchema };