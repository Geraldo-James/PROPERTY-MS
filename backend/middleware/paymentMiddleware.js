


export async function Payment_ID_Verification(req,res,next){
    const property_id = req.property_id
    const {params : {paymentId}} = req
    const payment_id = Number(paymentId)

    if(isNaN(payment_id) || payment_id <= 0){
    return res.status(400).send(
        "Payment id must be a positive number"
    )
}

    req.payment_id = payment_id


    next()

}