const averageOrder = async (data) => {
    return data.sort((a, b) => b.average - a.average)
}
module.exports = {
    averageOrder
}
