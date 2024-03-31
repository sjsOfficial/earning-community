import prisma from "@/libs/prisma"
import userTypes from "@/types/userTypes"

const getUser=async(stringValue:string)=>{
    const user = JSON.parse(stringValue) as userTypes
    return await prisma.users.findUnique({
        where:{id:user.id}
    })
}
export default getUser