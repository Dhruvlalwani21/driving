const queries = require('./queries');
const client = require('./database');

const getTeachers =(request,res)=>{
    client.query(queries.getTeachers, (error,data)=>{
        if (error){
            res.status(404).json('error');
        }
        else{
            res.status(200).json(data.rows);
        }
    })
}
const GLogin =(request,res)=>{
  const  email= request.params.email
    client.query(queries.getStudentsByEmail,[email],(error,sdata)=>{

        if(error){
            res.status(404).json('error');
        }
        else{
           if(!sdata.rows.length){
            client.query(queries.getTeachersByEmail,[email],(error,tdata)=>{
                if(error){
                    res.status(404).json('error');
                }else{
                    if(!tdata.rows.length){
                        res.status(100).json("Email does'nt exist");
                    }else{
                        res.status(200).json(tdata.rows);
                    }
                }
            })
           }else{
            res.status(200).json(sdata.rows);
           }
        }
     } )
   
}
const Login =(request,res)=>{
  const  email= request.params.email
  const  password= request.params.password
    client.query(queries.LoginStudents,[email,password],(error,sdata)=>{
        if(error){
            res.status(404).json('error');
        }
        else{
           if(!sdata.rows.length){
            client.query(queries.LoginTeachers,[email,password],(error,tdata)=>{
                if(error){
                    res.status(404).json('error');
                }else{
                    if(!tdata.rows.length){
                        res.status(100).json("Email doesnt exist");
                    }else{
                        res.status(200).json(tdata.rows);
                    }
                }
            })
           }else{
            res.status(200).json(sdata.rows);
           }
        }
     } )
   
}


const getStudents =(request,res)=>{
    client.query(queries.getStudents,(error,data)=>{
        if(error){
        res.status(400).json('error');
    }else{
    res.status(200).json(data.rows);
}}
    )

}
const getStudentsById =(request,res)=>{
  const  email= request.params.email
    client.query(queries.getStudentsById,[email],(error,data)=>{
        if(error){
        res.status(400).json('error');
    }else{
    res.status(200).json(data.rows);
}}
    )
}
const getTeachersById =(request,res)=>{
   const id= request.params.id
    client.query(queries.getTeachersById,[id],(error,data)=>{
        if(error){
        res.status(400).json('error');
    }else{
    res.status(200).json(data.rows);
}}
    )
}
const getTeachersByArea =(request,res)=>{
    const area= request.params.area
    client.query(queries.getTeachersByArea,[area],(error,data)=>{
        if(error){
        res.status(400).json('error');
    }else{
    res.status(200).json(data.rows);
}}
    )
}
const getStudentsBookings =(request,res)=>{
    const email= request.params.email
    client.query(queries.getstudentsBookings,[email],(error,data)=>{
        if(error){
        res.status(400).json('error');
    }else{
    res.status(200).json(data.rows);
}}
    )
}
const getTeachersBookings =(request,res)=>{
    const email= request.params.email
    client.query(queries.getteachersBookings,[email],(error,data)=>{
        if(error){
        res.status(400).json('error');
    }else{
    res.status(200).json(data.rows);
}}
    )
}
const getPurchases =(request,res)=>{
    const email= request.params.email
    client.query(queries.getPurchases,[email],(error,data)=>{
        if(error){
        res.status(400).json('error');
    }else{
    res.status(200).json(data.rows);
}}
    )
}
const getTPoints =(request,res)=>{
    const email= request.params.email
    client.query(queries.getTPoints,[email],(error,data)=>{
        if(error){
        res.status(400).json('error');
    }else{
    res.status(200).json(data.rows);
}}
    )
}               
const getSPoints =(request,res)=>{
    const email= request.params.email
    client.query(queries.getSPoints,[email],(error,data)=>{
        if(error){
        res.status(400).json('error');
    }else{
    res.status(200).json(data.rows);
}}
    )
}
const getRatings =(request,res)=>{
    const email= request.params.email
    client.query(queries.getRatings,[email],(error,data)=>{
        if(error){
        res.status(400).json('error');
    }else{
    res.status(200).json(data.rows);
}}
    )
}
const createStudent =(request,res)=>{
    const email= request.params.email
    const password= request.params.password
    const fname= request.params.fname
    const lname= request.params.lname
    const byear= request.params.byear
    const dob= request.params.dob
    client.query(queries.createStudent,[email,password,fname,lname,byear,dob],(error,data)=>{
        if(error){
        res.status(400).json('error');
    }else{
    res.status(200).json(data.rows);
}}
    )
}
const createTeachers =(request,res)=>{
    const email= request.params.email
    const password= request.params.password
    const fname= request.params.fname
    const lname= request.params.lname
    const byear= request.params.byear
    const dob= request.params.dob
    client.query(queries.createTeacher,[email,password,fname,lname,byear,dob],(error,data)=>{
        if(error){
        res.status(400).json('error');
    }else{
    res.status(200).json(data.rows);
}}
    )
}
const createBooking =(request,res)=>{
    const tid= request.params.tid
    const sid= request.params.sid
    const tname= request.params.tname
    const sname= request.params.sname
    const price= request.params.price
    const date= request.params.date
    const location= request.params.location
    const code= request.params.status
    client.query(queries.createBooking,[tid,sid,tname,sname,price,date,location,code],(error,data)=>{
        if(error){
        res.status(400).json('error');
    }else{
    res.status(200).json(data.rows);
}}
    )
}
const createPurchase =(request,res)=>{
  
    const uid= request.params.sid
    const uname= request.params.uname 
    const points = request.params.points
    const price= request.params.price
    const utype= request.params.utype
    const date= request.params.date
    const purchaseid= request.params.purchaseid
    client.query(queries.createPurchase,[uid,uname,points,price,utype,date,purchaseid],(error,data)=>{
        if(error){
        res.status(400).json('error');
    }else{
    res.status(200).json(data.rows);
}}
    )
}
const createRating =(request,res)=>{
    const tid= request.params.tid
    const sid= request.params.sid
    const tname= request.params.tname
    const sname= request.params.sname
    const date= request.params.date
    const stars= request.params.stars
    const review= request.params.review
    
    client.query(queries.createRating,[tid,sid,tname,sname,date,stars,review],(error,data)=>{
        if(error){
        res.status(400).json('error');
    }else{
    res.status(200).json(data.rows);
}}
    )
}
const UpdateStudent =(request,res)=>{}
const UpdateTeachers =(request,res)=>{}
const UpdateBooking =(request,res)=>{}
const UpdatePurchase =(request,res)=>{}



module.exports={

   Login,
   GLogin,
    getStudents,
    getStudentsById,
    createStudent,
    createTeachers,
    getTeachers,
    getTeachersById,
    getTeachersByArea,
    getRatings,
    getStudentsBookings,
    getTeachersBookings,
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
}
