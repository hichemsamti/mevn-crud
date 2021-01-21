const express =require ('express')
const Resto= require('../models/resto.model')
const router = express.Router()
router.get('/',(req,res)=>{
    Resto.find({},(err,restos)=>{
        res.json(restos)
    })
})
router.post('/',(req,res)=>{
    resto= new Resto({
        name:req.body.name,
        restaurantName:req.body.restaurantName,
        picture:req.body.picture,
        address:req.body.address,
        email:req.body.email,
        password:req.body.password
    

    })
    resto.save(()=>{
        res.json(resto)
     })
})

router.put('/partnerOk/:id',async(req,res)=>{
   var resto= await Resto.findById(req.params.id)
   
   resto.partner=req.body.partner

   resto.save(()=>{
     res.json(resto)
   })
})

router.delete('/:id',(req,res)=>{
    Resto.findByIdAndDelete(req.params.id,(err)=>{
        res.json({message:'deleted'})
    })

})



module.exports=router