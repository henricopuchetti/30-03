//importar o pacote multer
const multer = require("multer")

//configurar o armazenamento
const armazenamento = multer.diskStorage(
    {
        destination:(req,file,cb)=>{
            cb(null,'./uploads/')
        },
        filename:(req,file,cb)=>{
            cb(null,Date.now()+file.originalname)
        }
    }
)

var upload = multer(
    {
        storage:armazenamento,
        limits:{fileSize:100000},
        fileFilter:(req,file,cb)=>{
            if(
                file.mimetype == "images/png" ||
                file.mimetype == "images/jpg" ||
                file.mimetype == "images/jpeg"
                ){
                    cb(null,true)
                }else{
                    cb(null,false)
                    return cb(new Error('Tipo de aqrquivo inválido'))
                }
        }
    }).single('imagem')
    
module.exports = upload

