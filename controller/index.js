
const AppService = require('../service/index');
const service = require ('../service/index');

const Service = new AppService();
class AppController {

    async createUser(req, res) {
        // db.model.save(id)
        /* Using Service */
        try{
            const data = await Service.createUser(req.body);
            res.status(200).json(data);
        } catch(err){
            res.status(500).send(err);
        }
    }


    async getUsers(req, res) {

        try{
            const data = await Service.getUsers();
            res.status(200).json(data);
        } catch(err){
            res.status(500).send(err);
        }

    }

    async getUserByEmail(req, res) {
        // db.model.findOne(id)

        try{
            const data = await Service.getUserByEmail(req.params.email);
            res.status(200).json(data);
        } catch(err){
            res.status(500).send(err);
        }

    }


    async removeUserByEmail(req, res) {
        try{
            const data = await Service.removeUserByEmail(req.params.email);
            res.status(200).json(data);
        } catch(err){
            res.status(500).send(err);
        }
    }


    async updateUserNameByEmail(req, res) {

        try{
            const data = await Service.updateUserNameByEmail(req.params.email, req.body);
            res.status(200).send({
                message: "Updated User",
                data
            });
        } catch(err){
            res.status(500).send(err);
        }

    }
}

module.exports = AppController;