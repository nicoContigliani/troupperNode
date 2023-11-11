const dataStructureToSend = (data) => {


    return {
        lista: data,
        abanderado: data[0],
        escoltas: data.slice(1, 3)
    }
}


module.exports = {
    dataStructureToSend
}