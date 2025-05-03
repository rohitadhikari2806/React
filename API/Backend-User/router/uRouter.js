const express = require('express');
const p = require('../controller/uController');

const router = express.Router();

router.get("/",p.getUser);
router.post("/add",p.addUser);
router.put("/update/:id",p.updateUser);
router.delete("/delete/:id",p.deleteUser)
router.get("/single/:id",p.getOneUser)


module.exports = router;