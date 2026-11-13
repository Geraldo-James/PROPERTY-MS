import { CONNECTION } from "../config/db_config.js";


const conn = CONNECTION()


// ======================================
// CREATING A PROPERTY UNIT
// ======================================

export async function Property_units(req , res){
    const user_id = req.user.user_id
    const {body} = req
    const {
        property_id,
        unit_number,
        bedrooms,
        bathrooms,
        rent_amount
        
        
    } = body


try {

    if(
        typeof property_id !== "number" ||
        typeof unit_number !== "string" ||
        typeof bedrooms !== "number" ||
        typeof bathrooms !== "number" ||
        typeof rent_amount !== "number" 
      
    ){
        return res.status(400).send("Invalid input type")
    }

   
    const unit_num = unit_number.trim()
    


     if(
       
        unit_num.length === 0 
        

    ){
        return res.status(400).send("Fields must not be empty")
    }


    const [property_owner] = await conn.query(
    `SELECT * FROM properties 
     WHERE property_id = ? AND user_id = ?`,
     [property_id , user_id]
)
   if(property_owner.length === 0){
    return res.status(403).send("Unauthorized property access")
}




   const [existing_unit_num] = await conn.query(
                                `SELECT * FROM Units
                                WHERE property_id = ?
                                AND unit_number = ?`,
                                [property_id, unit_num]
                                )

    
    if(existing_unit_num.length !== 0){
        return res.status(409).send("Unit number already exists")
    }

    if(bedrooms <= 0){
       return res.status(400).send("Bedrooms must be greater than 0")
    }

    if(bathrooms <= 0){
       return res.status(400).send("Bathrooms must be greater than 0")
    }

    if(rent_amount <= 0){
       return res.status(400).send("Rent amount must be greater than 0")
    }


    const [Unit_record] = await conn.query(
                                    `INSERT INTO
                                     Units(property_id,unit_number,bedrooms,bathrooms,rent_amount)
                                     VALUES(?,?,?,?,?)`,[property_id,unit_num,bedrooms,bathrooms,rent_amount])

   return res.status(201).send({
    message: "Unit record inserted successfully",
    unit_id: Unit_record.insertId
})
    
}

catch(error){
    console.log(error)
    return res.status(500).send("Internal Server Error")
}

}





// ======================================
//FETCHING ALL UNITS
// ======================================
export  async function getUnits(req,res){
    const {property_id}  = req

    try{
         const [show_unit_record] = await conn.query(
                                    `SELECT * FROM Units
                                    WHERE property_id = ?
                                    `,[property_id]                       
                                )
        return res.status(200).send(show_unit_record)
    }
    catch(error){
        console.log(error)
       return res.status(500).send("Internal Server Error")
    }
    }





// ======================================
// FETCHING A UNIT BY ID
// ======================================
export async function Unit_Id(req,res){
    const unit_record = req.unit
try{

    return res.status(200).send(unit_record)
    }

    catch(error){
        console.log(error)
        return res.status(500).send("Internal Server Error")
    }
}



// ======================================
// DELETING A UNIT BY ID UNDER A PROPERTY
// ======================================
export async function delUnit(req,res){
    const property_id = req.property_id
    const unit_id = req.unit_id
try{

    const [del_unit] = await conn.query(
                                    `DELETE FROM Units                               
                                    WHERE property_id =? 
                                    AND unit_id = ?
                                    `,[property_id , unit_id])

    if(del_unit.affectedRows === 0){
    return res.status(404).send("Unit not found")
}


    return res.status(200).send("Unit deleted successfully")

}
catch(error){
    console.log(error)
    return res.status(500).send("Internal Server Error")
}

}


// ======================================
// DELET ALL UNITS UNDER A PROPERTY
// ======================================
export async function deletePropertyUnits(req,res){
    const user_id = req.user.user_id
    const property_id = req.property_id

try{

    const [del_records] = await conn.query(                                                       
                                            `DELETE Units
                                            FROM Units
                                            INNER JOIN Properties ON
                                            Units.property_id = Properties.property_id
                                            WHERE Units.property_id = ? 
                                            AND Properties.user_id = ?`,
                                            [property_id, user_id]
)

    if(del_records.affectedRows === 0){
        return res.status(404).send("No units found")
    }

    return res.status(200).send("All units deleted successfully")

    }


catch(error){
        console.log(error)
        return res.status(500).send("Internal Server Error")
    }
}



// ======================================
// UPDATE A UNIT UNDER A PROPERTY
// ======================================
export async function updateUnits(req,res){
    const property_id = req.property_id
    const unit_id = req.unit_id
    const {body} = req
   
    const {
        unit_number,
        bedrooms,
        bathrooms,
        rent_amount,
    } =  body



try{
   
    if(

        typeof unit_number !== "string" ||
        typeof bedrooms !== "number" ||
        typeof bathrooms !== "number" ||
        typeof rent_amount !== "number" 
        

    ){
        return res.status(400).send("Invalid input type")
    }

   
    const unit_num = unit_number.trim()



    if(
       
        unit_num.length === 0 


    ){
        return res.status(400).send("Fields must not be empty")
    }

    if(bedrooms <= 0){
        return res.status(400).send("Bedrooms must be greater than 0")
    }

    if(bathrooms <= 0){
        return res.status(400).send("Bathrooms must be greater than 0")
    }

    if(rent_amount <= 0){
         return res.status(400).send("Rent amount must be greater than 0")
    }



    const [existing_unit_duplicate] = await conn.query(
    `SELECT * FROM Units
    WHERE unit_number = ?
    AND property_id = ?
    AND Units.unit_id != ?`,
    [unit_num, property_id, unit_id]
    )

    if(existing_unit_duplicate.length > 0){
        return res.status(409).send("Unit number already exists")
    }

    

    const [update_prop_unit] = await conn.query(
                            `UPDATE Units               
                                SET unit_number = ?,
                                bedrooms = ?,
                                bathrooms = ?,
                                rent_amount = ?
                            WHERE property_id = ?
                            AND unit_id = ?
                           `,
                            [unit_num, bedrooms, bathrooms, rent_amount,property_id,unit_id]

)
    if(update_prop_unit.affectedRows === 0){
    return res.status(404).send("Unit not found")
}


    return res.status(200).send("Unit updated successfully")


}

catch(error){
    console.log(error)
    return res.status(500).send("Internal Server Error")
}


}



