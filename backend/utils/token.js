import JWT from "jsonwebtoken"

export function createToken(user_id){

    const user_token = JWT.sign(
        {
            user_id
        },
        process.env.JWT_SECRET,
        {
            expiresIn:"1d"
        }
    )

    return user_token
}



export function verifyToken(req , res , next){

    const authHeader = req.headers.authorization

    if(!authHeader){
        return res.status(401).send("Access denied")
    }

    const token = authHeader.split(" ")[1]

    JWT.verify(token , process.env.JWT_SECRET , (err , decodedToken)=>{
dc
        if(err){
            return res.status(403).send("Invalid token")
        }

        req.user = decodedToken

        next()
    })

}