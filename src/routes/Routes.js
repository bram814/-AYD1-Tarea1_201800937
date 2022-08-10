const {Router} = require('express');
const router = Router();

// req : request
// res : responseve
router.get('/', (req, res) => {
    console.log("NUESTRO PRIMER ENDPOINT")
    res.status(200).json({
        msg:"todo ok"
    });
});


router.post('/Calculadora-201800937', async(req, res) =>{

    var num1 = req.body.num1;
    var num2 = req.body.num2;
    
    res.status(200).json({
        numero1:num1,
        numero2:num2,
        suma:num1+num2

    });
})

router.get('/info-201800937', async (req, res)=>{

    res.status(200).json({
        Nombre:"José Abraham Solórzano Herrera",
        Carnet:"201800937"
    });

});

module.exports = router;