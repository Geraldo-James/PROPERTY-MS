import bcrypt from "bcryptjs"

export const hashPassword = async (password)=>{
    const hash_password = await bcrypt.hash(password , 10)
    return hash_password
}


export async function  verifyPassword(password , harshPassword){
    const verify = await bcrypt.compare(password , harshPassword)
    return verify
}


