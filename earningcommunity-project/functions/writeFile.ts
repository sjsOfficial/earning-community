import { writeFile } from "fs/promises"
import {v1} from "uuid"
const writeFileSystem = async (file: File) => {
    const byteData = await file.arrayBuffer()
    const buffer = Buffer.from(byteData)
    const id = v1()
    const path = `./public/upload/${id}-${file.name}`
    await writeFile(path, buffer)
    return `/upload/${id}-${file.name}`
}
export default writeFileSystem