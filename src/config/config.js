// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            name: process.env.DB_NAME,
            dialect: process.env.DB_DIALECT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD //Tirar a senha na hra de subir pro Git, mas coloca-la ao executa-lo
        }
    },
    production:{
        database: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            name: process.env.DB_NAME,
            dialect: process.env.DB_DIALECT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        }
    }
}
