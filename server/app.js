const express = require('express')
const app = express()
const PORT = 3000 

//middleware
app.use((req,res,next)=>{
    console.log(req.protocol.app.get('host'))
    
})

//static files
app.use(express.static('public'))
app.use( '/main.js', express.static(__dirname + '/public/main.js'))

//Server listening
app.listen(PORT, () =>{
  console.log(`Server started on port ${PORT}`)  
})