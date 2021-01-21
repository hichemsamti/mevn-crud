const express = require('express')
const bodyParser=require('body-Parser')
const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://hichem:1-hichemmarwa@cluster0.mkmvc.mongodb.net/<dbname>?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true });
//'mongodb://localhost/test'
var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});
const cors=require('cors')
const app =express()
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use('/api',require('./routes/resto.route'))
app.use(express.static('./client/crud/public'))

const port=process.env.PORT |80
app.listen(port)