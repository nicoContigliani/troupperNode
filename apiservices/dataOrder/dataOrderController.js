const { dataOrderMax, dataOrderMin } = require("../../services/orderData.services");
const { creates, updateS, deleteS, gets } = require("./dataOrderDao");

const get = async (req, res) => {
    try {
        const data = req.params.data;
        const dataBody = req.body;

        console.log("hola")
        const insurance = await gets()

        return res.status(200).json({
            insurance
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
const post = async (req, res) => {
    try {
        const data = req.params.data;
        const dataBody = req.body;
        const dataOrderMaxReturn = dataOrderMax(dataBody)
        const dataOrderMinReturn = dataOrderMin(dataBody)

        const dataInsert = {
            list: dataBody.toString(),
            min_numbers: dataOrderMaxReturn,
            max_numbers: dataOrderMinReturn
        }
        const insurance = await creates(dataInsert)


        return res.status(200).json({

        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
const put = async (req, res) => {
    try {
        const dataId = req.params.data;
        const dataBody = req.body;

        const insurance = await insuranceModel.updateS(dataBody, dataId)


        return res.status(200).json({
            insurance
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
const deletes = async (req, res) => {
    try {
        const data = req.params.data;
        const dataBody = req.body;

        const dataReturn = await deleteS(data)


        return res.status(200).json({
            dataReturn
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
module.exports = {
    get,
    post,
    put,
    deletes
}
