const { List } = require("../../models");



const gets = async () => {
    try {
        return await List.findAll({

        });

        return data;
    } catch (error) {
        console.log(error);
    }
    return data
};


const getIds = async ({ id }) => {
    console.log("🚀 ~ file: dataOrderDao.js:20 ~ getIds ~ id:", id)
    return await List.findAll({
        where: {
            id: id
        }
    });
}


const creates = async (data) => {
    return await List.create(data)
}


//updatedAt = new Date(),

const updates = async (data, { id }) => {

    try {
        return await List.update(
            {
                ...data,
            },
            {
                where: {
                    id: parseInt(id),
                },
            }
        );

    } catch (error) {
        console.log(error);
    }

}


const deleteS = async ({id}, data) => {
    data.status = false
    try {
        await List.update(
            data,
            {
                where: {
                    id: parseInt(id),
                },
            }
        );
    } catch (error) {
        console.log("🚀 ~ file: dataOrderDao.js:63 ~ deleteS ~ error:", error)

    }
    // return await List.destroy(
    //     {
    //       where: { id: id }
    //     }
    //   );



}


module.exports = {
    gets,
    getIds,
    creates,
    updates,
    deleteS,
};