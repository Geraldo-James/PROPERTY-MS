
import { CONNECTION } from "../config/db_config.js"



const conn = CONNECTION()

export function Unit_Id_Validation(req,res,next){
    const {params:{unitsId}} = req
    const unit_id = Number(unitsId)

     if(isNaN(unit_id) || unit_id <= 0){
    return res.status(400).send(
        "Unit ID must be a positive numbers"
    )
}
     req.unit_id = unit_id

    next()
}


export async function Unit_Ownership_val(req,res,next){
try{
    const unit_id = req.unit_id
    const property_id = req.property_id

    const [unit_record] = await conn.query(
                                    `SELECT * FROM Units
                                     WHERE
                                     unit_id = ? AND  property_id = ?
    `,[unit_id,property_id])
    
    if(unit_record.length === 0){
       return res.status(404).send(
    "Selected unit not found"
)
    }


    req.unit = unit_record[0]

    next()
}

catch(error){
        console.log(error)
        return res.status(500).send("Server failure")
    }
    
}