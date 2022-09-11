const mongoose = require("mongoose");
const Schema = moongoose.Schema;

const OwnerSchema = new Schema({
    name:String,
    about:String,
    photo:String
});

module.exports = mongoose.model("Owner", OwnerSchema);