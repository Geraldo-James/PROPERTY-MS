import { CONNECTION } from "../config/db_config.js"



const conn = CONNECTION()

export  function tenancy_id_validation(req,res,next){
    const {params : {tenancyId}} = req
    const tenancy_id = Number(tenancyId)


    if(isNaN(tenancy_id) || tenancy_id <= 0){
    return res.status(400).send(
        "Tenancy id must be a positive number"
    )
}
    req.tenancy_id = tenancy_id

    next()

}

export async function tenancy_ownership_val(req,res,next){
    const user_id = req.user.user_id
    const tenancy_id = req.tenancy_id


try{
    const [tenancy_record] = await conn.query(
                                    `SELECT Tenancies.* FROM Tenancies 
                                     INNER JOIN Units ON
                                     Tenancies.unit_id = Units.unit_id
                                     INNER JOIN Properties ON
                                     Units.property_id = Properties.property_id
                                     WHERE Properties.user_id = ? AND Tenancies.tenancy_id = ?
                                     ` ,[user_id,tenancy_id])


     if(tenancy_record.length === 0){
       return res.status(404).send("Selected tenancy not found")
    }


    req.tenancy = tenancy_record[0]

    next()

    }



   
catch(error){
    console.log(error)
    return res.status(500).send("Server Failure")
}

}



export async function property_tenancy_ownership(req,res,next){
    const property_id = req.property_id
    const tenancy_id = req.tenancy_id

    try{

        const [tenancy_record] = await conn.query(
        `SELECT Tenancies.*
         FROM Tenancies
         INNER JOIN Units
         ON Tenancies.unit_id = Units.unit_id
         WHERE Units.property_id = ?
         AND Tenancies.tenancy_id = ?`,
        [property_id, tenancy_id])

        if(tenancy_record.length === 0){
            return res.status(404).send("Selected tenancy not found")
        }

        req.tenancy = tenancy_record[0]

        next()

    }
    catch(error){
        console.log(error)
        return res.status(500).send("Server Failure")
    }
}


export async function unit_tenancy_ownership(req,res,next){
    const property_id = req.property_id
    const unit_id = req.unit_id
    const tenancy_id = req.tenancy_id

    try{

        const [tenancy_record] = await conn.query(
        `SELECT Tenancies.*
         FROM Tenancies
         INNER JOIN Units
         ON Tenancies.unit_id = Units.unit_id
         WHERE Units.property_id = ?
         AND Units.unit_id = ?
         AND Tenancies.tenancy_id = ?`,
        [property_id, unit_id, tenancy_id])

        if(tenancy_record.length === 0){
            return res.status(404).send("Selected tenancy not found")
        }

        req.tenancy = tenancy_record[0]

        next()

    }
    catch(error){
        console.log(error)
        return res.status(500).send("Server failure")
    }
}