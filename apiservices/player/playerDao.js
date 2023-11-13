const { Game,Player,GamePlayer } = require("../../models");
const { Op,literal } = require("sequelize");


const gets = async () => {
    try {
        return await Player.findAll({
             include: [
                 {
                     model: Game,
                     attributes: {
                         exclude: ['id', 'createdAt', 'updatedAt', 'subject_status']
                     },
                     through: {
                         model: GamePlayer,
                         attributes: {
                             exclude: [, 'createdAt', 'updatedAt', "PlayerId", "GameId"]
                         }
                     }
                 }
             ],
             attributes: {
                 exclude: ['createdAt', 'updatedAt']
             },
        });

    } catch (error) {
        console.log(error);
    }
    return data
};


const getIds = async ({ data }) => {

    try {
        const idAsInt = parseInt(data);
        const whereClause = idAsInt
            ? { id: idAsInt }
            : literal(`LOWER("fullname") LIKE LOWER('%${data}%')`);

        return await Player.findAll({
            include: [
                {
                    model: Game,
                    attributes: {
                        exclude: [ 'createdAt', 'updatedAt', 'subject_status']
                    },
                    through: {
                        model: GamePlayer,
                        attributes: {
                            exclude: ['createdAt', 'updatedAt', "PlayerId", "GameId"]
                        }
                    }
                }
            ],
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            where: whereClause

        });
    } catch (error) {
        console.log("🚀 ~ file: PlayerDao.js:40 ~ getIds ~ error:", error)

    }
}


const creates = async (data) => {
    console.log("🚀 ~ file: PlayerDao.js:30 ~ creates ~ data:", data)
    return await Player.create(data)
}



const updates = async (data, { id }) => {

    try {
        return await Player.update(
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


const deleteS = async ({ id }, data) => {
    data.status = false
    try {
        return await Player.update(
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
    // return await Player.destroy(
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


// attributes[
//     namesubject,
//     subject_status
// ]


// "PlayerId","SubjectId"