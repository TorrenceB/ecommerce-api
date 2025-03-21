import Ajv from "ajv";

const ajv = new Ajv();

interface Params {
    schema: Record<string, unknown>;
    data: Record<string, unknown>;
}

const validateData = ({ schema, data }: Params) => {
    const validate = ajv.compile(schema);
    const valid = validate(data);

    if (!valid) {
        throw new Error(`Validation failed: ${JSON.stringify(validate.errors)}`);
    }

    return true;
}

export default validateData;