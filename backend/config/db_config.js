import dotenv from "dotenv"
dotenv.config()
import mysql from "mysql2"


//Establishing a connection
export function CONNECTION(){
    const conn = mysql.createPool({
        host:process.env.HOST,
        user:process.env.USER_NAME,
        password:process.env.PASSWORD,
        database:process.env.DATABASE
    }).promise()

    return conn
}
