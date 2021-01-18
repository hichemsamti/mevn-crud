const  mongoose= require('mongoose')
const Schema = mongoose.Schema
menuSchema= new Schema({
    cathegory:{
        type:String,
        /*enum:['pizzas','sandwiches','snacks','other'],*/
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true

    },
    picture:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true

    }


    
    
})

module.exports=mongoose.model('Menu',menuSchema)