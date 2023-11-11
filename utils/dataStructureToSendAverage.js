const dataStructureToSendAverage = (data) => {
    try {
        let { average } = data[0]
        return average
    } catch (error) {
        console.log("🚀 ~ file: dataStructureToSendAverage.js:5 ~ dataStructureToSendAverage ~ error:", error)
    }
}
module.exports = {
    dataStructureToSendAverage
}