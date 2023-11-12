const { statusClean } = require("../../services/statusClean.services");
const { averageOrder } = require("../../utils/averageOrder");
const { dataCleanOrder } = require("../../utils/cleanGetDataOrder");
const { dataStructureToSendAverage } = require("../../utils/dataStructureToSendAverage");
const { structureDataToAverage } = require("../../utils/structureDataToAverage");
const { dataStructureToSend } = require("./studentSubjectDTO");
const { creates, deleteS, gets, getIds, updates } = require("./studentSubjectDao");

const get = async (req, res) => {
    try {

        const dataReturn = await gets()
        const dataCleanReturn = await statusClean(dataReturn)

        const dataR = await structureDataToAverage(dataCleanReturn)
        const dataReturnAverageOrder = await averageOrder(dataR)

        const dataToSend = await dataStructureToSend(dataReturnAverageOrder)


        return res.status(200).json({
            ...dataToSend
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}


const getId = async (req, res) => {
    try {
        const data = req.params;

        const dataReturn = await getIds(data)
        const dataCleanReturn = await statusClean(dataReturn)


        const dataR = await structureDataToAverage(dataCleanReturn)
        const average = await dataStructureToSendAverage(dataR)



        return res.status(200).json({
            average
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
