import fs from 'fs';
import path from 'path';

const deleteFile = async (filePath: string) => {
    
    const absolutePath = path.join(process.cwd(),"public" ,filePath);
    //console.log(absolutePath)
    fs.unlinkSync(absolutePath)
}
export default deleteFile