

const Pool = require('pg').Pool;
const pool = new Pool({
    user:'postgres',
    host:'0.0.0.0',
    database:'base-datos-docker',
    password:'12345',
    port:5432,
})

pool.connect((error,connection)=>{
    if(error){
        console.log(error);
    }
    if(connection){
       connection.release(); 
    }
    console.log('Base de Datos piola');
    return;

})

module.exports = pool;