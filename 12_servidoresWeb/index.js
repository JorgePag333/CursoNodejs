const express = require('express');
const Services= require('./src/service.js');


const app = express();

const PORT= 3000;
app.use(express.json())
app.get('/:id', (req, res) => {//filtrado de usuarios por id
    let {
        params: { id },
    }= req;
let user = Services.getUser(id);
  res.json({
    message:`Usuario: ${id}`,
    body: user,
  })
});
app.get('/', function (req, res) {//lista de usuarios
  res.json({
    message:"Lista de Usuarios",
    body: Services.getUsers()
  })
});

app.post("/",(req,res) => { //crear usuario
    let {body: NewUser} = req;
    
    res.status(201).json({
        message:'El usuario creado',
        body: Services.createUser(NewUser),
    })

})

app.put("/:id",(req,res)=>{

})

app.delete("/:id",(req,res)=>{
    
})

app.listen(PORT,() =>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
} );