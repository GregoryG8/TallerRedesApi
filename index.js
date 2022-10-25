const express = require('express');
const res = require('express/lib/response');
const cors = require('cors');
const app = express();
const morgan = require('morgan');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(require('./router/area_rout'));


app.listen(5432,(req,res)=>{
    console.log('El server esta piola en el puerto ' + 5432);

});