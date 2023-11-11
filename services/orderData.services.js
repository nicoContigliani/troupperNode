const dataOrderMax = ( data ) => {
    return data.sort().reverse()[0]
}
const dataOrderMin = (data) => {
    return data.sort()[0]
}
module.exports = {
    dataOrderMax,
    dataOrderMin
}