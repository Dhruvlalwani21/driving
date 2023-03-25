const getTeachersByEmail= "SELECT * FROM teacher WHERE email=$1";
const getStudentsByEmail= "SELECT * FROM student WHERE email=$1";
const LoginStudents= "SELECT * FROM student WHERE email=$1 AND password=$2";
const LoginTeachers= "SELECT * FROM teacher WHERE email=$1 AND password=$2";
const createStudent= "INSERT INTO student (email,password,fname,lname,byear,dob) VALUES($1,$2,$3,$4,$5,$6)";
const createTeacher= "INSERT INTO teacher (email,password,fname,lname,byear,dob) VALUES($1,$2,$3,$4,$5,$6)";
const getTeachers= "SELECT * FROM teacher";
const getTeachersByName= "SELECT * FROM teacher";
const getTeachersByArea= "SELECT * FROM teacher WHERE area=$1";
const getRatings= "SELECT * FROM ratings WHERE tid=$1";
const getteachersBookings= "SELECT * FROM bookings WHERE tid=$1";
const getstudentsBookings= "SELECT * FROM bookings WHERE sid=$1";
const getSPoints= "SELECT POINTS FROM STUDENTS";
const getTPoints= "SELECT POINTS FROM TEACHERS";
const getPurchases= "SELECT * FROM purchases WHERE uid=$1";
const createBooking= "INSERT INTO bookings (tid,sid,tname,sname,price,date,location,status) VALUES($1,$2,$3,$4,$5,$6,$7,$8)";
const createRating= "INSERT INTO ratings (tid,sid,tname,sname,date,stars,review) VALUES($1,$2,$3,$4,$5,$6,$7)";
const createPurchase= "INSERT INTO purchases (uid,name,points,price,utype,date) VALUES($1,$2,$3,$4,$5,$6)";
const UpdateStudent= "";
const UpdateTeachers= "";
const UpdatePurchase= "";
const UpdateBooking= "";



module.exports = {

    LoginStudents,
    LoginTeachers,
    getStudentsByEmail,
    getTeachersByEmail,
    createStudent,
    createTeacher,
    getTeachers,
    getTeachersById,
    getTeachersByName,
    getTeachersByArea,
    getRatings,
    getteachersBookings,
    getstudentsBookings,
    getSPoints,
    getTPoints,
    getPurchases,
    createBooking,
    createRating,
    createPurchase,
    UpdateStudent,
    UpdateTeachers,
    UpdatePurchase,
    UpdateBooking,
};
