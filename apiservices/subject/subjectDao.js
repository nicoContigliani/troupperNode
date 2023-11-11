const { Subject,Student, } = require("../../models");



const gets = async () => {
    try {
        return await Subject.findAll({

        });

        return data;
    } catch (error) {
        console.log(error);
    }
    return data
};


const getIds = async ({ id }) => {
    console.log("🚀 ~ file: dataOrderDao.js:20 ~ getIds ~ id:", id)
    return await Subject.findAll({
        where: {
            id: id
        }
    });
}


const creates = async (data) => {
    return await Subject.create(data)
}


//updatedAt = new Date(),

const updates = async (data, { id }) => {

    try {
        return await Subject.update(
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
       return  await Subject.update(
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
    // return await Subject.destroy(
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