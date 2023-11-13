const { statusClean } = require("../../services/statusClean.services");
const { averageOrder } = require("../../utils/averageOrder");
const { dataCleanOrder } = require("../../utils/cleanGetDataOrder");
const { dataStructureToSendAverage } = require("../../utils/dataStructureToSendAverage");
const { structureDataToAverage } = require("../../utils/structureDataToAverage");
const { dataStructureToSend } = require("./playerDTO");
const { creates, deleteS, gets, getIds, updates } = require("./playerDao");

const get = async (req, res) => {
    try {

        const dataReturn = await gets()
        const data = await statusClean(dataReturn)
        return res.status(200).json({
            data
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


const getId = async (req, res) => {
    try {
        const dataBody = req.params;

        const dataReturn = await getIds(dataBody)
        const data = await statusClean(dataReturn)

        return res.status(200).json({
            data
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const post = async (req, res) => {
    try {
        const data = req.params.data;
        const dataBody = req.body;


        const dataReturn = await creates(dataBody)


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
