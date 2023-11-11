const structureDataToAverage = async (data) => {
    return await data.map(item => {
        let { dataValues: { Subjects }, fullname } = item

        let sum = 0

        Subjects.forEach(element => {
            let {
                dataValues: { StudentSubject: { dataValues: { qualification } } }
            } = element
            sum += qualification
        });
        const average = sum / Subjects.length
        return {
            fullname,
            average,
        };
    })





}
module.exports = {
    structureDataToAverage
}