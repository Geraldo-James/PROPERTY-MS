
import { CONNECTION } from "../config/db_config.js"



const conn = CONNECTION()

export function property_Id_Validation(req,res,next){
    const property_id = Number(req.params.id)

     

    if(isNaN(property_id) || property_id <= 0){
        return res.status(400).send("Invalid property ID")
    }

        req.property_id = property_id
        next()
}


export async function verifyPropertyOwnership(req,res,next){
    try{
        const user_id = req.user.user_id
        const property_id = req.property_id

        const [property] = await conn.query(
            `SELECT * FROM properties
             WHERE user_id = ? AND property_id = ?`,
            [user_id, property_id]
        )

        if(property.length === 0){
    return res.status(403).send("Unauthorized property access")
}

        req.property = property[0]
        

        next()

    }catch(error){
        console.log(error)
        return res.status(500).send("Server failure")
    }
}

