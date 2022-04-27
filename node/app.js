const express = require('express')
const bodyParser = require('body-parser')
const sequelize = require('./infra/db')
const app = express();
const { getProduct, getProductById, addProduct , deleteProduct, updateProduct } = require('./controller');
const { getUser, getUserById, addUser, updateUser, deleteUser, login, logIn } = require('./usuario.controller');
const multer = require('multer');
const upload = multer({ dest: "uploads/"});

function cors(req, res, next){
       res.header('Access-Control-Allow-Origin', '*');
       res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
       res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
       res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
       next();
   
} 

//middlewares  -- metodo que se ejecuta antes de que llegue a un controlador
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); //Cuando reciba algun tipo de dato en un peticion la convierto en json, en cada peticion


app.use(cors);

app.get('/test',async(req,res)=>{
   try {
       await sequelize.authenticate();
       console.log('La conexión se realizó correctamente.');
       res.sendStatus(200)

     } catch (error) {
       console.error('No se puede conectar a la base de datos:', error);
       res.sendStatus(510)
     }
})



app.get('/product', getProduct);
app.get('/product/:id', getProductById);
app.post('/product', upload.single("image"), addProduct);
app.delete('/product/:id', deleteProduct);
app.post('/product/:id', updateProduct);

app.get('/usuario', getUser);
app.get('/usuario/:id', getUserById);
app.post('/signup', addUser);
app.post('/usuario/:id', updateUser);
app.delete('/usuario/:id', deleteUser);
app.post('/login',logIn);



app.listen(5000,async ()=> {
    await sequelize.sync({force:false})
    console.log("App está escuchando en el puerto 5000")
})