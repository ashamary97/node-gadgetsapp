var mongoose=require("mongoose")
const gadgetSchema= new mongoose.Schema(
    {
        brand:{type:String},
        mobilename:{type:String},
        sellingprice:{type:String},
        mrp:{type:String}
    }
)
var gadgetModel= mongoose.model("gadgets", gadgetSchema)
module.exports={gadgetModel}