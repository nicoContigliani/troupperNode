const list = require('../../models/list')



const gets = async () => {
    try {
        return await list.findAll({

        });

        return data;
    } catch (error) {
        console.log(error);
    }
    return data
};


const getId = async (data) => {
    const idBranch = data
    return await list.findAll({

        where: {
            BranchId: id
        }
    });






}


const creates = async (data) => {
    return await list.create(data)
}


//updatedAt = new Date(),

const updateS = async (data, id) => {

    try {
        const product = list.update(
            {
                data
            },
            {
                returning: true,
                where: {
                    id: parseInt(id),
                },
            }
        );
        return product
    } catch (error) {
        console.log(error);
    }
    return product
}


const deleteS = async ({ data }) => {
    // return await list.destroy(
    //     {
    //       where: { id: id }
    //     }
    //   );

    return list.update(
        {

            status: "desactive",

        },
        {
            returning: true,
            where: {
                id: parseInt(data),
            },
        }
    );

}


module.exports = {
    gets,
    getId,
    creates,
    updateS,
    deleteS,
};