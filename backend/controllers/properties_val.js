import { CONNECTION } from "../config/db_config.js"



const conn = CONNECTION()



// ======================================
// CREATING A PROPERTY RECORD
// ======================================

export async function Properties(req ,res){
    const user_id = req.user.user_id
    const {body} = req
    const {
        property_name,
        address,
        property_type
    } = body

try{
    if(
       typeof property_name !== "string" ||
       typeof address !== "string" ||
       typeof property_type !== "string"
    ){
        return res.status(400).send("Invalid input type")
    }

    const prop_name = property_name.trim()
    const prop_address = address.trim()
    const prop_type = property_type.trim()


    if(
        prop_name.length === 0 ||
        prop_address.length === 0 ||
        prop_type.length === 0
    ){
       return res.status(400).send("Fields must not be empty")
    }

    const prop_list = ["Land","House","Commercial Space","Warehouse", "Shop" , "Guest house" , "Retail" , "Beach House" , "Hotel"]

    if(!prop_list.includes(prop_type)){
       return res.status(400).send("Invalid property type")
    }



    const [prop_val] =  await conn.query(`INSERT INTO 
                                        properties(user_id,property_name,address,property_type) 
                                        VALUES(?,?,?,?)`,[user_id,prop_name,prop_address,prop_type])


   return res.status(201).send("Property record inserted successfully")




    }

    catch(error){
        console.log(error)
        return res.status(500).send("Internal Server Error")
    }


}



// ======================================
// FETCHING ALL PROPERTIES
// ======================================
export  async function getProperties(req,res){

      const user_id = req.user.user_id
    try{
        const [show_property_record] = await conn.query(`SELECT * FROM Properties WHERE user_id = ?`,[user_id])
        return res.status(200).send(show_property_record)
    }
    catch(error){
        console.log(error)
       return res.status(500).send("Internal Server Error")
    }
    }



// ======================================
// FETCHING A PROPERTY RECORD BY ID
// ======================================

export async function getPropId(req,res){
    try{
        
        return res.status(200).send( req.property)


    }

    catch(error){
        console.log(error)
       return res.status(500).send("Internal Server Error")
    }
}



// ======================================
// UPDATING PROPERTY RECORD BY ID
// ======================================
export async function updateProperty(req,res){
    const property_id = req.property_id
    const {body} = req
    const {
            property_name,
            address,
            property_type
        } = body
try{

     if(
       typeof property_name !== "string" ||
       typeof address !== "string" ||
       typeof property_type !== "string"
    ){
      return res.status(400).send("Invalid input type")
    }


    const prop_name = property_name.trim()
    const prop_address = address.trim()
    const prop_type = property_type.trim()


     if(
        prop_name.length === 0 ||
        prop_address.length === 0 ||
        prop_type.length === 0
    ){
        return res.status(400).send("Fields must not be empty")
    }

    const prop_list = ["Land" , "House","Commercial Space","Warehouse", "Shop" , "Guest house" , "Retail" , "Beach House" , "Hotel"]

    if(!prop_list.includes(prop_type)){
       return res.status(400).send("Invalid property type")
    }
    const  [update_record] = await conn.query(`UPDATE Properties SET  property_name = ?  , address = ? , property_type = ? WHERE property_id = ?`,[ prop_name,prop_address,prop_type,property_id])

    return res.status(200).send("Property updated successfully ")
}
catch(error){
    console.log(error)
    return res.status(500).send("Internal Server Error")
}
}


// ======================================
// DELETING A PROPERTY RECORD BY ID
// ======================================

export async function deleteProperty(req,res){
    const property_id = req.property_id

try{

    const [del_record] = await conn.query(`DELETE  FROM Properties WHERE property_id = ?`,[property_id])

    return res.status(200).send("Record deleted successfully")
}
catch(error){
    console.log(error)
    return res.status(500).send("Internal Server Error")
}

}




// ======================================
// DELETING ALL PROPERTY RECORD
// ======================================
export async function  del_all_properties(req,res){

    const user_id = req.user.user_id
    
try{
    const [del_properties] = await conn.query(`DELETE FROM properties WHERE user_id = ?`,[user_id])
    if(del_properties.affectedRows === 0){
        return res.status(404).send("There is no properties to delete")
    }

    return res.status(200).send("Property deleted successfully")
}
catch(error){
    console.log(error)
   return res.status(500).send("Internal Server Error")
}
}



























