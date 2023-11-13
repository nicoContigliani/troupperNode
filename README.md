# troupperNode
Repositorio para el desafío Trouper

Presentación
Soy Nicolás Contigliani, programador FullStack con experiencia en desarrollo web, mobile y backend. En este repositorio se encuentra el código para el desafío Trouper.

Instalación
Para instalar las dependencias del proyecto, ejecutar el siguiente comando:

npm install
Rutas
El proyecto cuenta con las siguientes rutas:

/ - Página principal


//crear la DB
sudo -u postgres psql
create database troupper WITH OWNER 'root';
grant all privileges on database troupper to root;





//insert Student 
INSERT INTO public."Subjects" (id, namesubject, subject_status, "createdAt", "updatedAt") VALUES(1, 'matematica', true, '2023-11-11 00:00:00.000', '2023-11-11 00:00:00.000');
INSERT INTO public."Subjects" (id, namesubject, subject_status, "createdAt", "updatedAt") VALUES(2, 'fisica', true, '2023-11-11 00:00:00.000', '2023-11-11 00:00:00.000');
INSERT INTO public."Subjects" (id, namesubject, subject_status, "createdAt", "updatedAt") VALUES(3, 'literatura', true, '2023-11-11 00:00:00.000', '2023-11-11 00:00:00.000');
INSERT INTO public."Subjects" (id, namesubject, subject_status, "createdAt", "updatedAt") VALUES(4, 'historia', true, '2023-11-11 00:00:00.000', '2023-11-11 00:00:00.000');
INSERT INTO public."Subjects" (id, namesubject, subject_status, "createdAt", "updatedAt") VALUES(5, 'quimica', true, '2023-11-11 00:00:00.000', '2023-11-11 00:00:00.000');


Insertar datos /Student/
INSERT INTO public."Students" (id, fullname, student_status, average, "createdAt", "updatedAt") VALUES(1, 'Juan Perez', true, 81.8, '2023-11-11 10:22:10.016', '2023-11-11 10:22:10.016');
INSERT INTO public."Students" (id, fullname, student_status, average, "createdAt", "updatedAt") VALUES(2, 'Maria Gomez', true, 81.8, '2023-11-11 10:22:10.016', '2023-11-11 10:22:10.016');
INSERT INTO public."Students" (id, fullname, student_status, average, "createdAt", "updatedAt") VALUES(3, 'Carlos Rodríguez', true, 81.8, '2023-11-11 10:22:10.016', '2023-11-11 10:22:10.016');
INSERT INTO public."Students" (id, fullname, student_status, average, "createdAt", "updatedAt") VALUES(4, 'Laura Martínez', true, 81.8, '2023-11-11 10:22:10.016', '2023-11-11 10:22:10.016');
INSERT INTO public."Students" (id, fullname, student_status, average, "createdAt", "updatedAt") VALUES(5, 'Andrés López', true, 81.8, '2023-11-11 10:22:10.016', '2023-11-11 10:22:10.016');


Insertar SubjectStudents
INSERT INTO public."StudentSubjects" (id, "StudentId", "SubjectId", qualification, student_subject_status, "createdAt", "updatedAt") VALUES(2, 1, 1, 85.0, true, '2023-11-11 00:00:00.000', '2023-11-11 00:00:00.000');
INSERT INTO public."StudentSubjects" (id, "StudentId", "SubjectId", qualification, student_subject_status, "createdAt", "updatedAt") VALUES(3, 1, 2, 76.0, true, '2023-11-11 00:00:00.000', '2023-11-11 00:00:00.000');
INSERT INTO public."StudentSubjects" (id, "StudentId", "SubjectId", qualification, student_subject_status, "createdAt", "updatedAt") VALUES(4, 1, 3, 90.0, true, '2023-11-11 00:00:00.000', '2023-11-11 00:00:00.000');
INSERT INTO public."StudentSubjects" (id, "StudentId", "SubjectId", qualification, student_subject_status, "createdAt", "updatedAt") VALUES(5, 1, 4, 88.0, true, '2023-11-11 00:00:00.000', '2023-11-11 00:00:00.000');
INSERT INTO public."StudentSubjects" (id, "StudentId", "SubjectId", qualification, student_subject_status, "createdAt", "updatedAt") VALUES(6, 1, 5, 70.0, true, '2023-11-11 00:00:00.000', '2023-11-11 00:00:00.000');
INSERT INTO public."StudentSubjects" (id, "StudentId", "SubjectId", qualification, student_subject_status, "createdAt", "updatedAt") VALUES(7, 2, 1, 92.0, true, '2023-11-11 00:00:00.000', '2023-11-11 00:00:00.000');
INSERT INTO public."StudentSubjects" (id, "StudentId", "SubjectId", qualification, student_subject_status, "createdAt", "updatedAt") VALUES(8, 2, 2, 88.0, true, '2023-11-11 00:00:00.000', '2023-11-11 00:00:00.000');
INSERT INTO public."StudentSubjects" (id, "StudentId", "SubjectId", qualification, student_subject_status, "createdAt", "updatedAt") VALUES(9, 2, 3, 78.0, true, '2023-11-11 00:00:00.000', '2023-11-11 00:00:00.000');
INSERT INTO public."StudentSubjects" (id, "StudentId", "SubjectId", qualification, student_subject_status, "createdAt", "updatedAt") VALUES(10, 2, 4, 85.0, true, '2023-11-11 00:00:00.000', '2023-11-11 00:00:00.000');
INSERT INTO public."StudentSubjects" (id, "StudentId", "SubjectId", qualification, student_subject_status, "createdAt", "updatedAt") VALUES(11, 2, 5, 90.0, true, '2023-11-11 00:00:00.000', '2023-11-11 00:00:00.000');
INSERT INTO public."StudentSubjects" (id, "StudentId", "SubjectId", qualification, student_subject_status, "createdAt", "updatedAt") VALUES(12, 3, 1, 80.0, true, '2023-11-11 00:00:00.000', '2023-11-11 00:00:00.000');
INSERT INTO public."StudentSubjects" (id, "StudentId", "SubjectId", qualification, student_subject_status, "createdAt", "updatedAt") VALUES(13, 3, 2, 75.0, true, '2023-11-11 00:00:00.000', '2023-11-11 00:00:00.000');
INSERT INTO public."StudentSubjects" (id, "StudentId", "SubjectId", qualification, student_subject_status, "createdAt", "updatedAt") VALUES(14, 3, 3, 60.0, true, '2023-11-11 00:00:00.000', '2023-11-11 00:00:00.000');
INSERT INTO public."StudentSubjects" (id, "StudentId", "SubjectId", qualification, student_subject_status, "createdAt", "updatedAt") VALUES(15, 3, 4, 70.0, true, '2023-11-11 00:00:00.000', '2023-11-11 00:00:00.000');
INSERT INTO public."StudentSubjects" (id, "StudentId", "SubjectId", qualification, student_subject_status, "createdAt", "updatedAt") VALUES(16, 3, 5, 80.0, true, '2023-11-11 00:00:00.000', '2023-11-11 00:00:00.000');
INSERT INTO public."StudentSubjects" (id, "StudentId", "SubjectId", qualification, student_subject_status, "createdAt", "updatedAt") VALUES(17, 4, 1, 78.0, true, '2023-11-11 00:00:00.000', '2023-11-11 00:00:00.000');
INSERT INTO public."StudentSubjects" (id, "StudentId", "SubjectId", qualification, student_subject_status, "createdAt", "updatedAt") VALUES(18, 4, 2, 85.0, true, '2023-11-11 00:00:00.000', '2023-11-11 00:00:00.000');
INSERT INTO public."StudentSubjects" (id, "StudentId", "SubjectId", qualification, student_subject_status, "createdAt", "updatedAt") VALUES(19, 4, 3, 92.0, true, '2023-11-11 00:00:00.000', '2023-11-11 00:00:00.000');
INSERT INTO public."StudentSubjects" (id, "StudentId", "SubjectId", qualification, student_subject_status, "createdAt", "updatedAt") VALUES(20, 4, 4, 88.0, true, '2023-11-11 00:00:00.000', '2023-11-11 00:00:00.000');
INSERT INTO public."StudentSubjects" (id, "StudentId", "SubjectId", qualification, student_subject_status, "createdAt", "updatedAt") VALUES(21, 4, 5, 75.0, true, '2023-11-11 00:00:00.000', '2023-11-11 00:00:00.000');
INSERT INTO public."StudentSubjects" (id, "StudentId", "SubjectId", qualification, student_subject_status, "createdAt", "updatedAt") VALUES(22, 5, 1, 88.0, true, '2023-11-11 00:00:00.000', '2023-11-11 00:00:00.000');
INSERT INTO public."StudentSubjects" (id, "StudentId", "SubjectId", qualification, student_subject_status, "createdAt", "updatedAt") VALUES(23, 5, 2, 92.0, true, '2023-11-11 00:00:00.000', '2023-11-11 00:00:00.000');
INSERT INTO public."StudentSubjects" (id, "StudentId", "SubjectId", qualification, student_subject_status, "createdAt", "updatedAt") VALUES(24, 5, 3, 84.0, true, '2023-11-11 00:00:00.000', '2023-11-11 00:00:00.000');
INSERT INTO public."StudentSubjects" (id, "StudentId", "SubjectId", qualification, student_subject_status, "createdAt", "updatedAt") VALUES(25, 5, 4, 90.0, true, '2023-11-11 00:00:00.000', '2023-11-11 00:00:00.000');
INSERT INTO public."StudentSubjects" (id, "StudentId", "SubjectId", qualification, student_subject_status, "createdAt", "updatedAt") VALUES(26, 5, 5, 86.0, true, '2023-11-11 00:00:00.000', '2023-11-11 00:00:00.000');





//orderData//

Get:     http://localhost:3000/dataOrder/order
GetId:   http://localhost:3000/dataOrder/order/1
Post:    localhost:3000/dataOrder/order             ->[1,2,3,4,5,6,7,8,9]
Put:     http://localhost:3000/dataOrder/order/1
Delete:  http://localhost:3000/dataOrder/order/1


---------------

//Student//

Get:   http://localhost:3000/student/student
GetId: http://localhost:3000/student/student/López
Post:  http://localhost:3000/student/student     -> {"fullname":"Juan Perez","student_status":true,"average":81.8}
Put:   
Delete:



//Subject

Get:   http://localhost:3000/subject/subject
GetId: 
Post:  
Put:   
Delete:





/dataOrder/
/student/
/subject/
/studentSubject/



Contribuir
Para contribuir al proyecto, seguir los siguientes pasos:

Clonar el repositorio:
git clone https://github.com/nicoContigliani/troupperNode.git
Instalar las dependencias:
npm install
Hacer los cambios necesarios

Probar los cambios

Realizar un commit y un push de los cambios

Contacto
Para cualquier consulta, contactar a Nicolás Contigliani a través de su correo electrónico:

nico.contigliani@gmail.com
Licencia
El proyecto está licenciado bajo la licencia MIT.