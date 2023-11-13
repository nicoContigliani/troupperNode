const { dataOrderMax, dataOrderMin } = require("../../services/orderData.services");
const { statusClean } = require("../../services/statusClean.services");
const { dataCleanOrder } = require("../../utils/cleanGetDataOrder");
const { creates, deleteS, gets, getIds, updates } = require("./subjectDao");

const get = async (req, res) => {
    try {

        const dataReturn = await gets()
        const dataCleanReturn = await statusClean(dataReturn)


        return res.status(200).json({
            dataCleanReturn
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


const getId = async (req, res) => {
    try {
        const id = req.params;

        const dataReturn = await getIds(id)
        const dataCleanReturn = await statusClean(dataReturn)


        return res.status(200).json({
            dataCleanReturn
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const post = async (req, res) => {
    try {
        const data = req.params.data;
        const dataBody = req.body;
        const list = dataBody.toString()
        const max_numbers = dataOrderMax(dataBody)
        const min_numbers = dataOrderMin(dataBody)

        let dataInsert = {
            list,
            max_numbers,
            min_numbers,
            status: true
        }

        const dataReturn = await creates(dataInsert)


        return res.status(200).json({
            dataReturn
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
const put = async (req, res) => {
    try {
        const dataId = req.params;
        const dataBody = req.body;
        const dataReturn = await updates(dataBody, dataId)


        return res.status(200).json({
            dataReturn
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
const deletes = async (req, res) => {

    try {
        const id = req.params;
        let dataGet = await getIds(id)
        const dataGetFomater = await dataCleanOrder(dataGet)
        const dataReturn = await deleteS(id, dataGetFomater)



        return res.status(200).json({
            dataReturn
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
module.exports = {
    get,
    getId,
    post,
    put,
    deletes,

}
