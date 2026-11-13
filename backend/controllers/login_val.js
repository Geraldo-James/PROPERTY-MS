import { CONNECTION } from "../config/db_config.js"
import { verifyPassword } from "../utils/password_harsh.js"
import { createToken } from "../utils/token.js"

const conn = CONNECTION()


// ======================================
// CREATING A LOGIN ACCOUNT
// ======================================
export async function LogIn(req,res){
    const {body} = req
    const {
            email,
            user_password
        }  = body

try{

    if(
        typeof email !== "string" ||
        typeof user_password !== "string" 
     ){
            return res.status(400).send("Invalid input type")
        }

    const user_email = email.trim()
    const password = user_password.trim()


     if( 
        user_email.length === 0 ||
        password.length === 0
    ){
        return res.status(400).send("All fields are required")
    }


    if(!user_email.includes("@")){
            return res.status(400).send("Invalid email format")
    }

   
    const [existingUser] = await conn.query(`SELECT * FROM User_account WHERE email = ?`,[user_email] )
    if(existingUser.length===0){
        return res.status(401).send("Invalid credentials")
    }
    const user = existingUser[0]
    const isMatch = await verifyPassword(password , user.user_password)
    if(!isMatch){
        return res.status(401).send("Invalid credentials")
    }
   
    const token = createToken(user.user_id)
    return res.status(200).send({
        message:"Token Generated",
        token,
        user_id:user.user_id,
        msg:"Login Successful"
    })

    
}

catch(error){
    console.log(error)
    return res.status(500).send("Internal Server Error")
}


}





