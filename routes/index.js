var express = require('express');
var router = express.Router();

const AppController = require('../controller/index');

const controller = new AppController();

router.get('/users', (req, res, next) =>   controller.getUsers(req,res));
router.get('/users/:email', (req, res, next) =>   controller.getUserByEmail(req,res));

router.post('/users', (req, res) =>  controller.createUser(req, res));
router.delete('/users/:email', (req, res) =>  controller.removeUserByEmail(req, res));
router.put('/users/:email', (req, res) =>  controller.updateUserNameByEmail(req, res));


module.exports = router;
