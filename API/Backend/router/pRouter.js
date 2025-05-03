const express = require('express');
const p = require('../controller/pController');

const router = express.Router();

router.get("/",p.getProd);
router.post("/add",p.addProd);
router.put("/update/:id",p.updateProd);
router.delete("/delete/:id",p.deleteProd)
router.get("/single/:id",p.getOneProd)


module.exports = router;