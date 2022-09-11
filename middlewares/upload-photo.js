const aws = require("aws-sdk")
const multer = require("multer")
const multers3 = require("multer-s3")

aws.config.update({
    secretAccessKey: process.env.AWSAccessKeyId,
    accessKeyId: process.env.AWSSecretKey
});

const s3 = new aws.s3();

const upload = multer({
    storage: multers3({
        s3: s3,
        bucket:'amazon-clone-v1',
        acl:'public-read',
        metadata:(req, file, cb)=>{
            cb(null, {fieldName: file.fieldName });
        },
        key: (req, file, cb)=>{
            cb(null, date.now().toString())
        }
    })
})
