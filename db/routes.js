const { Router } = require("express");
const router = Router();
const data= require('./controller');
const bodyParser=require('body-parser')


router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
    extended:true,
})
)

router.get('/' ,(req,res)=>{
    res.send('Api Starts!')
});


router.get('/teachers/:id',data.getTeachersById)
router.get('/students/:id',data.getStudentsById)
router.get('/glogin/:id',data.GLogin)
router.get('/login/:id',data.Login)
router.get('/teachers/:area',data.getTeachersByArea)
router.get('/students/bookings/:id',data.getStudentsBookings)
router.get('/teachers/bookings/:id',data.getTeachersBookings)
router.get('/ratings/:id',data.getRatings)
router.get('/purchases/:id',data.getPurchases)
router.get('/students/points/:id',data.getSPoints)
router.get('/teachers/points/:id',data.getTPoints)
router.post('/students',data.createStudent)
router.post('/teachers',data.createTeachers)
router.post('/bookings',data.createBooking)
router.post('/purchases',data.createPurchase)
router.put('/students/:id',data.UpdateStudent)
router.put('/teachers/:id',data.UpdateTeachers)
router.put('/bookings/:id',data.UpdateBooking)
module.exports = router;