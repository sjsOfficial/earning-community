import { SignJWT, jwtVerify } from 'jose'
import userTypes from '@/types/userTypes'
const secretKey = process.env.SECRET || "cluster0"
const encodedKey = new TextEncoder().encode(secretKey)

export async function encrypt(id: string, isAdmin: boolean ) {
    return new SignJWT({id:id,isAdmin:isAdmin})
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(encodedKey)
}

export async function decrypt(session: string | undefined = '') {
    const { payload } = await jwtVerify(session, encodedKey, {
        algorithms: ['HS256'],
    })
    return payload

}