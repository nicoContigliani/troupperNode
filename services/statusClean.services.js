const statusClean = async (data) => {

    return await data.filter(item => {
        let { dataValues } = item
        return Object.keys(dataValues).some((key) => {
            return (key.endsWith("_status") && dataValues[key] === true) || key.startsWith("status") && dataValues[key] === true;
        });
    })

}


module.exports = {
    statusClean
}



