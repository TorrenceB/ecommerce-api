import pg from 'pg'

const { Client } = pg

const client = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    port: parseInt(process.env.POSTGRES_PORT, 10),
    ssl: {
        rejectUnauthorized: false
    }
})

client.connect()

export default client