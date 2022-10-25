const {Router} = require('express');
const router = Router();
const pool = require('../conexion');

router.get('/', async(req,res)=>{
    try {
        const area = await pool.query('SELECT * FROM area;');
        res.send(area.rows);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;