const  mongoose= require('mongoose')
const Schema = mongoose.Schema
restoSchema= new Schema({
   
    name:{
        type:String,
        required:true
    },
    restaurantName:{
        type:String,
        required:true

    },
    picture:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true

    },
    partner:{
        type:String,
        default:'none'
    },

    password:{
        type:String,
    }



    
    
})

module.exports=mongoose.model('Resto',restoSchema)