const dbToUse = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost/politico'
    },
    test: {
        client: 'pg',
        connection: ''
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL
    },
}

export default dbToUse;