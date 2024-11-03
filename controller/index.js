
const AppService = require('../service/index');
const service = require ('../service/index');

const Service = new AppService();
class AppController {

    createUser(req, res) {
        // db.model.save(id)
        /* Using Service */
        // return Service.createData(req.body);
        const user = Service.createUser(req.body)
        .then(data => {res.status(200).json(data);})
        .catch(err => {res.status(500).send(err);});
    }


    getUsers(req, res) {
        // db.model.findAll()
        return Service.getUsers()
        .then(data => {res.status(200).json(data);})
        .catch(err => {res.status(500).send(err);});
    //res.status(200).json({"message" : "ok"});
    }

    getUserByEmail(req, res) {
        // db.model.findOne(id)
        return Service.getUserByEmail(req.params.email)
        .then(data => {res.status(200).json(data);})
        .catch(err => {res.status(500).send(err);});
        //res.status(200).json({"message" : "ok"});
    }


    removeUserByEmail(req, res) {
       return Service.removeUserByEmail(req.params.email)
       .then(data => {res.status(200).send({
        'message' : 'User Deleted',
        data,
       });
    })
       .catch(err => {res.status(500).send(err)})
        //res.status(200).json(data);
    }

    deleteData(req, res) {
        res.status(200).json({});
    }

    updateUserNameByEmail(req, res) {

        return Service.updateUserNameByEmail(req.params.email, req.body)
        .then(data => {res.status(200).json(data)})
        .catch(err => {res.status(500).send(err)})

        //const data = Service.updateUserNameByEmail(req.params.email, req.body);
        //res.status(200).json(data);
    }
}

module.exports = AppController;