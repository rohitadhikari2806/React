const express = require('express');
const emp = require('../empController/controller.js');

const router = express.Router();


router.get("/",emp.getEmps);
router.post("/add",emp.addEmps);
router.put("/update/:id",emp.updateEmps);
router.delete("/delete/:id",emp.deleteEmps);


module.exports=router;

