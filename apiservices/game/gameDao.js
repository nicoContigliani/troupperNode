const { Game,Player, } = require("../../models");



const gets = async () => {
    try {
        return await Game.findAll({

        });

        return data;
    } catch (error) {
        console.log(error);
    }
    return data
};


const getIds = async ({ id }) => {
    console.log("🚀 ~ file: dataOrderDao.js:20 ~ getIds ~ id:", id)
    return await Game.findAll({
        where: {
            id: id
        }
    });
}


const creates = async (data) => {
    return await Game.create(data)
}


//updatedAt = new Date(),

const updates = async (data, { id }) => {

    try {
        return await Game.update(
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
       return  await Game.update(
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
    // return await Game.destroy(
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