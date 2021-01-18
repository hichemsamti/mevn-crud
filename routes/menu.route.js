const express =require ('express')
const Menu= require('../models/menu.model')
const router = express.Router()
router.get('/',(req,res)=>{
    Menu.find({},(err,menus)=>{
        res.json(menus)
    })
})
router.post('/',(req,res)=>{
    menu= new Menu({
        cathegory:req.body.cathegory,
        name:req.body.name,
        description:req.body.description,
        picture:req.body.picture,
        price:req.body.price
    

    })
    menu.save(()=>{
        res.json(menu)
     })
})

router.put('/:id',async(req,res)=>{
   var menu= await Menu.findById(req.params.id)
   menu.catthegory=req.body.cathegory,
   menu.name=req.body.name,
   menu.description=req.body.description,
   menu.picture=req.body.picture,
   menu.price=req.body.price
   menu.save(()=>{
     res.json(menu)
   })
})

router.delete('/:id',(req,res)=>{
    Menu.findByIdAndDelete(req.params.id,(err)=>{
        res.json({message:'deleted'})
    })

})

module.exports=router