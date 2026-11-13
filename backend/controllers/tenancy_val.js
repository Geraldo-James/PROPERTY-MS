import { CONNECTION } from "../config/db_config.js";


const conn = CONNECTION()

// ======================================
// CREATING TENNCY RECORD 
// ======================================

export async function Tenancy(req , res){
    const user_id = req.user.user_id
    const {body} = req
    const {
        tenant_id,
        unit_id,
        start_date,
        end_date,
        deposit_amount,
        lease_status
    } = body    

try{


    if(
        typeof tenant_id !== "number" ||
        typeof unit_id !== "number" ||
        typeof start_date !== "string" ||
        typeof end_date !== "string" ||
        typeof deposit_amount !== "number" ||
        typeof lease_status !== "string"
    ){
        return res.status(400).send("Invalid input type")
    }

    const starting_date = start_date.trim()
    const ending_date = end_date.trim()
    const lease_stat = lease_status.trim()


    if(
        
        starting_date.length === 0 ||
        ending_date.length === 0 ||
        lease_stat.length === 0
    ){
        return res.status(400).send("Fields must not be empty")
    }


    const  regex_date = /^\d{4}-\d{2}-\d{2}$/
    if(
    !regex_date.test(starting_date) ||
    !regex_date.test(ending_date)
){
   return res.status(400).send("Date must be in YYYY-MM-DD format")
}

   if(new Date(ending_date) <= new Date(starting_date)){
    return res.status(400).send("End date must be greater than start date")
}


    if(deposit_amount < 0){
       return res.status(400).send("Deposit amount must be positive")
    }

    const [existing_tenant] = await conn.query(`SELECT * FROM  User_account WHERE user_id = ?`,[tenant_id])
    const [existing_unit] = await conn.query(
                                                `SELECT Units.* FROM Units
                                                INNER JOIN Properties ON
                                                Units.property_id = Properties.property_id 
                                                WHERE Units.unit_id = ? AND Properties.user_id = ? `,[unit_id, user_id])
    if(existing_tenant.length === 0){
    return res.status(404).send("Tenant not found")
}

    if(existing_tenant[0].user_role !== "tenant"){
    return res.status(400).send("Selected user is not a tenant")
}

    if(existing_unit.length === 0){
        return res.status(404).send("Unit not found")
    }

    const stat = ["Active","Expired","Terminated"]
    if(!stat.includes(lease_stat)){
        return res.status(400).send("Invalid lease status")
    }
    
    const [activeTenancy] = await conn.query(
    `SELECT * FROM Tenancies
    WHERE unit_id = ?
    AND lease_status = ?`,
    [unit_id , "Active"]
)

    if(activeTenancy.length > 0){
        return res.status(409).send(
            "Unit already has an active tenancy"
        )
    }

     

    const [tenancy_record] = await conn.query(`INSERT INTO
                                       tenancies(tenant_id,unit_id,start_date,end_date ,deposit_amount,lease_status)
                                       VALUES(?,?,?,?,?,?)`,[tenant_id,unit_id,starting_date,ending_date,deposit_amount,lease_stat])

    const [update_unit_status] = await conn.query(`UPDATE units SET unit_status = ? WHERE unit_id = ?`,["Occupied",unit_id])
    if(update_unit_status.affectedRows === 0){
        return res.status(400).send("unit not affected")
    }

    return res.status(201).send({
    message:"Tenancy created successfully",
    tenancy_id: tenancy_record.insertId

}) 
   
   

   


   
    

}

catch(error){
    console.log(error)
    return res.status(500).send("Internal Server Error")
}

}


// ======================================
// VIEWING ALL TENENACY RECORD
// ======================================

export async function View_tenant_records(req , res){
    const user_id = req.user.user_id


    try{
    const [view_record] = await conn.query(
                                    `SELECT Tenancies.* FROM Tenancies 
                                     INNER JOIN Units ON
                                     Tenancies.unit_id = Units.unit_id
                                     INNER JOIN Properties ON
                                     Units.property_id = Properties.property_id
                                     WHERE Properties.user_id = ?
                                     `,[user_id]
    )

    if(view_record.length===0){
        return res.status(200).send([])
    }

    return res.status(200).send(view_record)
}

catch(error){
    console.log(error)
    return res.status(500).send("Internal Server Error")
}
}


// ======================================
// DISPLAYING ONE TENEANCY RECORD
// ======================================
export async function tenantRecord(req,res){
    const tenancy_record = req.tenancy


try{
   
    return res.status(200).send(tenancy_record)


}
catch(error){
    console.log(error)
    return res.status(500).send("Internal Server Error")
}
}



// ======================================
// UPDATING TENANCY RECORD
// ======================================

export async function update_ten_rec(req ,res){
    const user_id = req.user.user_id
    const tenancy_id = req.tenancy_id
    const {body} = req
    const {
            start_date,
            end_date,
            deposit_amount,
            lease_status
    } = body
try{
    if(
        typeof start_date !== "string" ||
        typeof end_date !== "string" ||
        typeof deposit_amount !== "number" ||
        typeof lease_status !== "string"
    ){
        return res.status(400).send("Invalid input type")
    }

    const starting_date = start_date.trim()
    const ending_date = end_date.trim()
    const lease_stat = lease_status.trim()

     if(
        
        starting_date.length === 0 ||
        ending_date.length === 0 ||
        lease_stat.length === 0
    ){
        return res.status(400).send("Fields must not be empty")
    }

     const  regex_date = /^\d{4}-\d{2}-\d{2}$/
    if(
    !regex_date.test(starting_date) ||
    !regex_date.test(ending_date)
){
    return res.status(400).send("Date must be in YYYY-MM-DD format")
}

   if(new Date(ending_date) <= new Date(starting_date)){
    return res.status(400).send("End date must be greater than start date")
}


    if(deposit_amount < 0){
        return res.status(400).send("Deposit amount must be positive")
    }

    const stat = ["Active","Expired","Terminated"]
    if(!stat.includes(lease_stat)){
       return res.status(400).send("Invalid lease status")
    }


    const [update_ten_rec] =  await conn.query(
                                            `UPDATE Tenancies
                                            INNER JOIN Units ON
                                            Tenancies.unit_id = Units.unit_id
                                            INNER JOIN Properties ON
                                            Units.property_id = Properties.property_id
                                            SET Tenancies.start_date = ?,
                                            Tenancies.end_date = ?,
                                            Tenancies.deposit_amount = ?,
                                            Tenancies.lease_status = ?
                                            WHERE Properties.user_id = ? AND Tenancies.tenancy_id = ? 
                                            `,
                                            [starting_date,ending_date,deposit_amount,lease_stat,user_id,tenancy_id]
                                        )
        if(update_ten_rec.affectedRows === 0){
            return res.status(404).send("Tenancy not found")
}

// ======================================
// TERMINATED → UNIT BECOMES VACANT 
// ======================================

        if(lease_stat === "Terminated"){ 
            await conn.query( 
                `UPDATE Units 
                INNER JOIN Tenancies ON 
                Units.unit_id = Tenancies.unit_id
                INNER JOIN Properties ON
                Units.property_id = Properties.property_id
                SET Units.unit_status = ?
                WHERE Tenancies.tenancy_id = ?  AND Properties.user_id = ?`, 
                ["Vacant", tenancy_id,user_id] ) }


// ======================================
// ACTIVE → UNIT BECOMES OCCUPIED 
// ======================================

        if(lease_stat === "Active" ){ 
            await conn.query( 
                 `UPDATE Units 
                INNER JOIN Tenancies ON 
                Units.unit_id = Tenancies.unit_id
                INNER JOIN Properties ON
                Units.property_id = Properties.property_id
                SET Units.unit_status = ?
                WHERE Tenancies.tenancy_id = ?  AND Properties.user_id = ?`, 
                ["Occupied", tenancy_id,user_id] ) }

// ======================================
// Expired → UNIT BECOMES VACANT 
// ======================================

        if(lease_stat === "Expired"){ 
            await conn.query( 
                 `UPDATE Units 
                INNER JOIN Tenancies ON 
                Units.unit_id = Tenancies.unit_id
                INNER JOIN Properties ON
                Units.property_id = Properties.property_id
                SET Units.unit_status = ?
                WHERE Tenancies.tenancy_id = ?  AND Properties.user_id = ?`, 
                ["Vacant", tenancy_id,user_id] ) }

        return res.status(200).send("Update made successfuly")




}


catch(error){
    console.log(error)
    return res.status(500).send("Internal Server Error")
}

}



// ======================================
// ALL TENACY RECORD IN ALL UNIT
// ======================================

export async function All_tenant_unit(req,res){
    const property_id = req.property_id

try{

    const [get_records] = await conn.query(
                                        `SELECT Tenancies.* FROM Tenancies
                                        INNER JOIN Units ON
                                        Units.unit_id  = Tenancies.unit_id
                                        WHERE Units.property_id = ?
                                        `,[property_id]
                                        )

    if(get_records.length === 0){
        return res.status(200).send([])
    }

    return res.status(200).send(get_records)


}
catch(error){
    console.log(error)
    return res.status(500).send("Internal Server Error")
}
}




// ======================================
// TENACY RECORD PER IN ALL UNITS
// ======================================


export async function Tenant_unit(req,res){

try{

    return res.status(200).send(req.tenancy)


}
catch(error){
    console.log(error)
    return res.status(500).send("Internal Server Error")
}


}

// ======================================
// TENACY RECORD PER UNITS
// ======================================


export async function Tenant_per_unit(req,res){

try{
                                        
    return res.status(200).send( req.tenancy )


}
catch(error){
    console.log(error)
    return res.status(500).send("Internal Server Error")
}


}




// ======================================
// DELETING TENANCY RECORD
// ======================================

export async function Delete_tenancy(req,res){
    const user_id = req.user.user_id
    const tenancy_id = req.tenancy_id
    
try{
  
    const UnitId = req.tenancy.unit_id


    const [tenancy_record] = await conn.query(
                                    `DELETE Tenancies FROM Tenancies 
                                     INNER JOIN Units ON
                                     Tenancies.unit_id = Units.unit_id
                                     INNER JOIN Properties ON
                                     Units.property_id = Properties.property_id
                                     WHERE Properties.user_id = ? AND Tenancies.tenancy_id = ?
                                     ` ,[user_id,tenancy_id])

    if(tenancy_record.affectedRows === 0){
        return res.status(404).send("Tenancy not found")
    }

    
    
    const [update_unit_stat] = await conn.query(
                                                `
                                                UPDATE Units
                                                SET unit_status = ?
                                                WHERE unit_id = ?
                                                `,
                                                ["Vacant", UnitId]

)
    if(update_unit_stat.affectedRows === 0){
       return res.status(404).send("Unit not found")
    }
  
    return res.status(200).send({
    message: "Tenancy deleted successfully",
    unit_status: "Vacant"
})


}
catch(error){
    console.log(error)
    return res.status(500).send("Internal Server Error")
}
    
    
    

}



// ======================================
// DELETING TENANCY RECORD IN A PROPERTY
// ======================================

export async function Del_tenancy_prop(req,res){
    const property_id = req.property_id
    const tenancy_id = req.tenancy_id
    

try{

    const unitId = req.tenancy.unit_id

    const [get_records] = await conn.query(
                                        `DELETE Tenancies FROM Tenancies
                                        INNER JOIN Units ON
                                        Units.unit_id  = Tenancies.unit_id
                                        WHERE Units.property_id = ? AND Tenancies.tenancy_id = ?
                                        `,[property_id,tenancy_id]
                                        )

    if(get_records.affectedRows === 0){
        return res.status(404).send("Tenancy not found")
    }


    const [update_unit_stat] = await conn.query(
                                                `
                                                UPDATE Units
                                                SET unit_status = ?
                                                WHERE unit_id = ?
                                                `,
                                                ["Vacant", unitId]

)

    
    if(update_unit_stat.affectedRows === 0){
        return res.status(404).send("unit not found")
    }

    return res.status(200).send({
    message: "Tenancy deleted successfully",
    unit_status: "Vacant"
})



}
catch(error){
    console.log(error)
    return res.status(500).send("Internal Server Error")
}


}




// ======================================
// DELETING TENANCY RECORD IN A UNIT
// ======================================

export async function Del_tenancy_unit(req,res){
    const property_id = req.property_id
    const unit_id = req.unit_id
    const tenancy_id = req.tenancy_id

try{
   
    const [get_records] = await conn.query(
                                        `DELETE Tenancies FROM Tenancies
                                        INNER JOIN Units ON
                                        Units.unit_id  = Tenancies.unit_id
                                        WHERE Units.property_id = ? AND  Units.unit_id = ? AND Tenancies.tenancy_id = ?
                                        `,[property_id,unit_id,tenancy_id]
                                        )

    
if(get_records.affectedRows === 0){
    return res.status(404).send("Tenancy not found")
}

    const [update_unit_stat] = await conn.query(
                                                `
                                                UPDATE Units
                                                SET unit_status = ?
                                                WHERE unit_id = ?
                                                `,
                                                ["Vacant",unit_id]

)

    
    if(update_unit_stat.affectedRows === 0){
    return res.status(404).send("Unit not found")
}

   return res.status(200).send({
    message: "Tenancy deleted successfully",
    unit_status: "Vacant"
})


}
catch(error){
    console.log(error)
    return res.status(500).send("Internal Server Error")
}
}


