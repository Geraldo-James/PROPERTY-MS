import { CONNECTION } from "../config/db_config.js";


const conn = CONNECTION()



// ======================================
// CREATING A PAYMENT RECORD
// ======================================
export async function Tenant_payment(req,res){
    const user_id = req.user.user_id
    const {body} = req
    const {
        tenancy_id,
        amount_paid,
        payment_date,
        payment_method,
        due_date
    } = body

try{


    if(
        typeof tenancy_id !== "number" ||
        typeof amount_paid !== "number" ||
        typeof payment_date !== "string" ||
        typeof payment_method !== "string" ||
        typeof due_date  !== "string"){
            return res.status(400).send("Invalid input type")
        }


    const paymentDate = payment_date.trim()
    const paymentMethod = payment_method.trim()
    const dueDate = due_date.trim()



    const  regex_date = /^\d{4}-\d{2}-\d{2}$/

   
    if(
        paymentDate.length===0 ||
        dueDate.length===0 ||
        paymentMethod.length===0 
    ){
        return res.status(400).send("Field must not be empty")
    }


    if(amount_paid <= 0){
        return res.status(400).send("amount must be greater than 0")
    }




    if(!regex_date.test(paymentDate)){
        return res.status(400).send("Date must be in this format YYYY-MM-DD")
    }

    if(!regex_date.test(dueDate)){
        return res.status(400).send("Date must be in this format YYYY-MM-DD")
    }


    if(new Date(dueDate) < new Date(paymentDate) ){
        return res.status(400).send("due date must be greater than payment_date")
    }

   const paymentMethods = [
                        "Cash",
                        "Bank",
                        "Transfer",
                        "Mobile Money"
                    ]

   
                        
    if(!paymentMethods.includes(paymentMethod)){
        return res.status(400).send("payment method should be within the list option")
    }

   

    
    const [existing_tenancy] = await conn.query(
                                                `SELECT Tenancies.tenancy_id FROM Tenancies
                                                INNER JOIN Units ON
                                                Tenancies.unit_id = Units.unit_id
                                                INNER JOIN Properties ON
                                                Units.property_id = Properties.property_id
                                                WHERE Properties.user_id  = ? and Tenancies.tenancy_id = ? `,[user_id,tenancy_id])
    if(existing_tenancy.length === 0){
        return res.status(404).send("Tenancy record does not exist")
    }


    const [rent_amnt_status] = await conn.query(
                            `SELECT Units.rent_amount FROM Properties
                            INNER JOIN Units ON
                            Properties.property_id = Units.property_id                           
                            INNER JOIN Tenancies ON
                            Tenancies.unit_id = Units.unit_id
                            WHERE Properties.user_id = ? 
                            AND Tenancies.tenancy_id = ?`,
                            [user_id , tenancy_id]
                            )

    if(rent_amnt_status.length === 0){
        return res.status(404).send("Tenancy record not found")
    }

    const rentAmount = rent_amnt_status[0].rent_amount

    let paymentStatus = ""

    if(amount_paid >= rentAmount){
        paymentStatus = "Fully Paid"
    }
    else if(amount_paid > 0 && amount_paid < rentAmount){
        paymentStatus = "Partially Paid"
    }
   
    const [payment_rec] = await conn.query(
    `INSERT INTO payments
    (tenancy_id,amount_paid,payment_date,payment_method,payment_status,due_date)
    VALUES(?,?,?,?,?,?)`,
    [
        tenancy_id,
        amount_paid,
        paymentDate,
        paymentMethod,
        paymentStatus,
        dueDate
    ]
    )
   
    return res.status(201).send({
    message:"Payment created successfully",
    payment_id: payment_rec.insertId
})
    }

    catch(error){
        console.log(error)
        return res.status(500).send("server failure")
    }
}



// ==========================================
// GET ALL UNITS PAYMENT RECEIPT BY PROPERTY
// ==========================================



export async function All_pay_receipt(req,res){
    const property_id = req.property_id

try{

    // fetch payments
            const [get_receipt] = await conn.query(
            `SELECT Payments.* FROM Payments
            INNER JOIN Tenancies
            ON Payments.tenancy_id = Tenancies.tenancy_id
            INNER JOIN Units
            ON Tenancies.unit_id = Units.unit_id
            WHERE Units.property_id = ?`,
            [property_id]
            )
            return res.status(200).send(get_receipt)
                }

   
catch(error){
    console.log(error)
    return res.status(500).send("Server failure")
}
}





// ==========================================
// GET A PAYMENT RECORD  FROM A PROPERTY
// ==========================================



export async function Payment_all_prop(req,res){
    const property_id = req.property_id
    const {params : {paymentId}} = req
    const payment_id = Number(paymentId)

    try{

        if(isNaN(payment_id)){
            return res.status(400).send("id must be a number not a text")
        }
        
    // fetch payments
            const [get_receipt] = await conn.query(
            `SELECT Payments.* FROM Payments
            INNER JOIN Tenancies ON
            Payments.tenancy_id = Tenancies.tenancy_id
            INNER JOIN Units ON
            Tenancies.unit_id = Units.unit_id
            WHERE Payments.payment_id = ? AND Units.property_id = ?`,
            [payment_id,property_id]
            )


        if(get_receipt.length === 0){
            return res.status(404).send("Payment record not found")
        }

        return res.status(200).send(get_receipt[0])

  


    }

    catch(error){
        console.log(error)
        return res.status(500).send("Server failure")
    }
}





// ==========================================
// GET ALL PAYMENT FOR A UNIT
// ==========================================



export async function Get_unit_payments(req,res){
    const property_id = req.property_id
    const unit_id = req.unit_id
    const tenancy_id = req.tenancy_id

try{
    
// fetch payments by id
            const [get_receipt] = await conn.query(
            `SELECT Payments.* FROM Payments
            INNER JOIN Tenancies ON
            Payments.tenancy_id = Tenancies.tenancy_id
            INNER JOIN Units ON
            Tenancies.unit_id = Units.unit_id
            WHERE Units.property_id = ? AND Units.unit_id = ? AND Payments.tenancy_id = ?`,
            [property_id , unit_id , tenancy_id]
            )


            if(get_receipt.length === 0){
            return res.status(200).send([])
        }
            return res.status(200).send(get_receipt)
                
}
catch(error){
    console.log(error)
    return res.status(500).send("Server failure")
}
}






