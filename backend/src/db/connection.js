import mysql from "mysql2/promise.js"

export function connectToDb()
{
    return mysql.createConnection({
        host: "db",
        user: "productsmanagement",
        password: "productsmanagement",
        database: "productsmanagement"
    })
}