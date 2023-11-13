const {  Game,Player,GamePlayer } = require("../../models");
const { Op,literal } = require("sequelize");


const gets = async () => {
    try {
        return await GamePlayer.findAll({
            // include: [
            //     {
            //         model: Subject,
            //         attributes: {
            //             exclude: ['id', 'createdAt', 'updatedAt', 'subject_status']
            //         },
            //         through: {
            //             model: GamePlayerSubject,
            //             attributes: {
            //                 exclude: ['id', 'createdAt', 'updatedAt', "GamePlayerId", "SubjectId"]
            //             }
            //         }
            //     }
            // ],
            // attributes: {
            //     exclude: ['createdAt', 'updatedAt']
            // },
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

        return await GamePlayer.findAll({

            include: [
                {
                    model: Subject,
                    attributes: {
                        exclude: ['id', 'createdAt', 'updatedAt', 'subject_status']
                    },
                    through: {
                        model: GamePlayerSubject,
                        attributes: {
                            exclude: ['id', 'createdAt', 'updatedAt', "GamePlayerId", "SubjectId"]
                        }
                    }
                }
            ],
            attributes: {
                exclude: ['createdAt', 'updatedAt','average']
            },
            where: whereClause

        });
    } catch (error) {
        console.log("🚀 ~ file: GamePlayerDao.js:40 ~ getIds ~ error:", error)

    }
}


const creates = async (data) => {
    console.log("🚀 ~ file: GamePlayerDao.js:30 ~ creates ~ data:", data)
    return await GamePlayer.create(data)
}



const updates = async (data, { id }) => {

    try {
        return await GamePlayer.update(
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
        return await GamePlayer.update(
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
    // return await GamePlayer.destroy(
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


// "GamePlayerId","SubjectId"