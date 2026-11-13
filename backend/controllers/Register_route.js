import { CONNECTION } from "../config/db_config.js"
import { hashPassword } from "../utils/password_harsh.js"
import { createToken } from "../utils/token.js"
const conn = CONNECTION()

// ======================================
// REGISTRATION ACCOUNT
// ======================================
export async function Registration(req,res){
    console.log("route hit")
    const {body} = req
    const {first_name,
            last_name,
            email,
            phone,
            user_password, 
            user_role
        }  = body


try{

    if(
        typeof first_name !== "string" ||
        typeof last_name !== "string" ||
        typeof email !== "string" ||
        typeof phone !== "string" ||
        typeof user_password !== "string" ||
        typeof user_role !== "string"){
            return res.status(400).send("Invalid input type")
        }

    const fname = first_name.trim()
    const lname = last_name.trim()
    const user_email = email.trim()
    const tele_phone = phone.trim()
    const password = user_password.trim()
    const role = user_role.trim().toLowerCase()

    if( fname.length === 0 || 
        lname.length === 0 ||
        user_email.length === 0 ||
        tele_phone.length === 0 ||
        password.length === 0 ||
        role.length === 0 
    ){
        return res.status(400).send("All fields are required")
    }


    if(!user_email.includes("@")){
            return res.status(400).send("invalid email")
    }

    if(tele_phone.length !== 10){
            return res.status(400).send("phone number must be exactly 10")
    }
    if(!/^\d+$/.test(tele_phone)){
        return res.status(400).send("Phone number must contain only digits")
    }

    if(password.length < 8){
        return res.status(400).send("Password must be at least 8 characters")
    }
    
    const assigned_roles = ["tenant","landlord"]
    if(!assigned_roles.includes(role)){
        return res.status(400).send("Invalid role selected")
    } 



    const [existing_tel_num] = await conn.query(`SELECT * FROM User_account WHERE phone= ?`, [tele_phone])
    const [existingUser] = await conn.query(`SELECT * FROM User_account WHERE email= ?`, [user_email])
    console.log("checking existing user")

    if(existingUser.length > 0){
        return res.status(409).send("Email already exists")
    }

    if(existing_tel_num.length > 0){
        return res.status(409).send("Phone number already exists")
    }

    
    const pass_harsh = await hashPassword(password)
    const [insert_user_data] = await conn.query(`INSERT INTO User_account(first_name , last_name , email ,phone , user_password , user_role)
    VALUES(?,?,?,?,?,?)`,[fname,lname,user_email,tele_phone,pass_harsh,role])

    const token = createToken(insert_user_data.insertId)

    return res.status(201).send({message:"Registration successful",token : token , user_id: insert_user_data.insertId })

}


catch(error){
    console.log(error)
    return res.status(500).send("Internal Server Error")
}
}
