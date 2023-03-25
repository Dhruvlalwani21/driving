const { query, request } = require('express');
const client = require('./database')

const runquery = (req,res)=>{
    const sqlquery=res.body
    client.query(sqlquery,(data,err));{
       if(!err){
        res.status(200).json(data.rows);  
       }
       else{
        res.status(400).json('');  
       }
        
    }
  };


  



const LoginStudents = (req,res)=>{
    const email = parseInt(res.params.email)
    const password = parseInt(res.params.password)
    client.query (`SELECT * FROM students WHERE email=$1 AND password=$2`,[email,password],(err,data)=>{
    if(!err){
        res.status(200).json(data.rows);
    } else{ 
        console.log("err");
    }
    client.end;
  })};
const GLoginStudents = (req,res)=>{
    const email = parseInt(res.params.email)
    client.query (`SELECT * FROM students WHERE email=$1`,[email],(err,data)=>{
    if(!err){
        res.status(200).json(data.rows);
    } else{ 
        console.log("err");
    }
    client.end;
  })};

const getStudents = (req,res)=>{
    client.query (`Select * from students`,(err,data)=>{
    if(!err){
        res.status(200).json(data.rows);
    } else{ 
        console.log("err");
    }
    client.end;
  })};

  const getStudentsById = (req,res)=>{
      const id = parseInt(res.params.id)
      client.query (`Select * from students WHERE id=$1`,[id],(err,data)=>{
    if(!err){
        res.status(200).json(data.rows);
    } else{ 
        console.log("err");
    }
    client.end;
  })};
  
  const createStudent = (req,res)=>{
    const{email,password,fname,lname,dob,byear}=req.body
  client.query (`INSERT INTO students (email,password,fname,lname,dob,byear) VALUES ($1,$2,$3,$4,$5,$6)`,[email,password,fname,lname,dob,byear],(err,data)=>{
  if(!err){
      res.status(200).json(data.rows);
  } else{ 
      console.log("err");
  }
  client.end;
})};

const UpdateStudent = (req,res)=>{
    const id = parseInt(res.params.id)
    const{name,email}=req.body
    client.query (`UPDATE student SET name=$1,email=$2 WHERE id=$3`,[name,email,id],(err,data)=>{
  if(!err){
      res.status(200).json(data.rows);
  } else{ 
      console.log("err");
  }
  client.end;
})};


const LoginTeachers = (req,res)=>{
    const email = parseInt(res.params.email)
    const password = parseInt(res.params.password)
    client.query (`SELECT * FROM teachers WHERE email=$1 AND password=$2`,[email,password],(err,data)=>{
    if(!err){
        res.status(200).json(data.rows);
    } else{ 
        console.log("err");
    }
    client.end;
  })};
const GLoginTeachers= (req,res)=>{
    const email = parseInt(res.params.email)
    client.query (`SELECT * FROM teachers WHERE email=$1`,[email],(err,data)=>{
    if(!err){
        res.status(200).json(data.rows);
    } else{ 
        console.log("err");
    }
    client.end;
  })};



const getTeachers = (req,res)=>{
    client.query (`Select * from teachers`,(err,data)=>{
    if(!err){
        res.status(200).json(data.rows);
    } else{ 
        console.log("err");
    }
    client.end;
  })};



  const getTeachersById = (req,res)=>{
    const id = parseInt(res.params.id)
    client.query (`Select * from teachers WHERE id=$1`,[id],(err,data)=>{
  if(!err){
      res.status(200).json(data.rows);
  } else{ 
      console.log("err");
  }
  client.end;
})};
  const getTeachersByArea = (req,res)=>{
    const area = parseInt(res.params.area)
    client.query (`Select * from teachers WHERE area=$1`,[area],(err,data)=>{
  if(!err){
      res.status(200).json(data.rows);
  } else{ 
      console.log("err");
  }
  client.end;
})};

const createTeachers = (req,res)=>{
    const{email,password,fname,lname,dob,byear}=req.body
  client.query (`INSERT INTO teachers (email,password,fname,lname,dob,byear) VALUES ($1,$2,$3,$4,$5,$6)`,[email,password,fname,lname,dob,byear],(err,data)=>{
  if(!err){
      res.status(200).json(data.rows);
  } else{ 
      console.log("err");
  }
  client.end;
})};
const UpdateTeachers = (req,res)=>{
  const id = parseInt(res.params.id)
  const{name,email}=req.body
  client.query (`UPDATE teachers SET parea=$1,house=$2,landmark=$3,address=$4,eircode=$5,license=$6,gender=$7,transmition=$8,points=$9,photo=$10,documents=$11`,[parea,house,landmark,address,eircode,license,gender,transmition,points,photo,documents],(err,data)=>{
if(!err){
    res.status(200).json(data.rows);
} else{ 
    console.log("err");
}
client.end;
})};


  const deleteUser = (req,res)=>{
      const id = parseInt(res.params.id)
      client.query (`DELETE FROM demo WHERE id=$1`,[id],(err,data)=>{
    if(!err){
        res.status(200).json(data.rows);
    } else{ 
        console.log("err");
    }
    client.end;

  })};

const createbooking = (req,res)=>{
    const{sid,tid,sname,tname,price,area,date}=req.body
  client.query (`INSERT INTO bookings (sid,tid,sname,tname,price,area,date) VALUES ($1,$2,$3,$4,$5,$6,$7)`,[sid,tid,sname,tname,price,area,date],(err,data)=>{
  if(!err){
      res.status(200).json(data.rows);
  } else{ 
      console.log("err");
  }
  client.end;
})};
const createrating = (req,res)=>{
    const{sid,tid,sname,tname,price,area,date,stars,review}=req.body
  client.query (`INSERT INTO ratings (sid,tid,sname,tname,price,area,date,stars,review) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,[sid,tid,sname,tname,price,area,date,stars,review],(err,data)=>{
  if(!err){
      res.status(200).json(data.rows);
  } else{ 
      console.log("err");
  }
  client.end;
})};
const createpurchase = (req,res)=>{
    const{uid,name,plan,price,utype,date,points}=req.body
  client.query (`INSERT INTO ratings (uid,name,plan,price,utype,date,points) VALUES ($1,$2,$3,$4,$5,$6,$7)`,[uid,name,plan,price,utype,date,points],(err,data)=>{
  if(!err){
      res.status(200).json(data.rows);
  } else{ 
      console.log("err");
  }
  client.end;
})};



module.exports={

    LoginStudents,
    GLoginStudents,
    LoginTeachers,
    GLoginTeachers,
    getStudents,
    getStudentsById,
    createStudent,
    UpdateStudent,
    createTeachers,
    getTeachers,
    getTeachersById,
    getTeachersByArea,
    UpdateTeachers,
    createbooking,
    createrating,
    createpurchase,
}