import client from '../plugins/database'

const getUser = async (id: string) => {
    try {
        const response = await client.query(`SELECT * FROM "user" WHERE id = ${id}`)
        const user = response.rows[0]

        console.log(`User retreived successfully`)

        return user
    } catch (error) {
        console.error(`[mh-api]: @getUser: ${error.message}`)
    }
}

export { getUser }