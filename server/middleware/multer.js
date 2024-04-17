const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) { cb(null, "upload/products") },
    filename:
        function (req, file, cb) {
            const prefix = Date.now()
            const fileName = prefix + "-" + file.originalname
            cb(null, fileName)
        }
})

const upload = multer({ storage: storage })

module.exports = upload