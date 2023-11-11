const { Student, Subject, StudentSubject } = require("../../models");



const gets = async () => {
    try {
        return await Student.findAll({
            include: [
                {
                    model: Subject,
                    attributes: {
                        exclude: ['id', 'createdAt', 'updatedAt', 'subject_status']
                    },
                    through: {
                        model: StudentSubject,
                        attributes: {
                            exclude: ['id', 'createdAt', 'updatedAt', "StudentId", "SubjectId"]
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


const getIds = async ({ id }) => {
    return await Student.findAll({
        where: {
            id: id
        }
    });
}


const creates = async (data) => {
    console.log("🚀 ~ file: studentDao.js:30 ~ creates ~ data:", data)
    return await Student.create(data)
}


//updatedAt = new Date(),

const updates = async (data, { id }) => {

    try {
        return await Student.update(
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
        return await Student.update(
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
    // return await Student.destroy(
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


// "StudentId","SubjectId"