import bcrypt from "bcrypt"
import { addData, getDataByField } from "@/lib/firebase/firebase_service"

export async function signUp(userData, callback) {
    const data = await getDataByField("users", "npm", userData.npm)

    if (data.length > 0) {
        callback(false)
    } else {
        if (!userData.role) {
            userData.role = "calon anggota"
        }
        userData.password = await bcrypt.hash(userData.password, 12)
        userData.created_at = new Date()
        userData.updated_at = new Date()
        addData("users", userData, () => {
            callback(true)
        })
    }
}

export async function signIn(npm) {
    const data = await getDataByField("users", "npm", npm)

    if (data) {
        return data[0]
    } else {
        return null
    }
}