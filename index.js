const express = require('express');
const approutes = require('./db/routes');
const client = require('./db/database');
const { Client } = require('pg');
const app = express();
const port = 3000;
const studentstable = 'CREATE TABLE students(ID INT PRIMARY KEY NOT NULL,FNAME TEXT,LNAME TEXT,EMAIL CHAR(100),PASSWORD REAL,BYEAR INT,DOB CHAR(10),LOCATION TEXT,PAREA INT,HOUSE CHAR(50),LANDMARK CHAR(100),ADDRESS TEXT,EIRCODE CHAR(100),LICENSE CHAR(100),GENDER INT,TRANSMISSTION INT,POINTS INT,PHOTO CHAR(1000),DOCUMENT CHAR(1000),STATUS INT);';
const teacherstable = 'CREATE TABLE teachers(ID INT PRIMARY KEY NOT NULL,FNAME TEXT,LNAME TEXT,EMAIL CHAR(100),PASSWORD REAL,BYEAR INT,DOB CHAR(10),LOCATION TEXT,AREAS CHAR(1000),HOUSE CHAR(50),LANDMARK CHAR(100),ADDRESS TEXT,EIRCODE CHAR(100),LICENSE CHAR(100),GENDER INT,TRANSMISSTION INT,POINTS INT,PHOTO CHAR(1000),DOCUMENT CHAR(1000),STATUS INT);';
const bookings = 'CREATE TABLE bookings(ID INT PRIMARY KEY,TID INT,SID INT,TNAME TEXT,SNAME TEXT,PRICE INT,DATE CHAR(10),LOCATION TEXT,STATUS INT)';
const ratings = 'CREATE TABLE ratings(ID INT PRIMARY KEY,TID INT,SID INT,TNAME TEXT,SNAME TEXT,DATE CHAR(10),STARS INT,REVIEW CHAR(500))';
const purchases = 'CREATE TABLE purchases(ID INT PRIMARY KEY,UID INT, NAME TEXT,POINTS INT,PRICE INT,UTYPE INT,DATE CHAR(10),PURCHASEID CHAR(500))';
const plans = 'CREATE TABLE plans(ID INT PRIMARY KEY,NAME TEXT,POINTS INT,PRICE INT,UTYPE INT)';
const areas = 'CREATE TABLE areas(ID INT PRIMARY KEY,TOWN TEXT,COUNTRY TEXT)';
app.get('/', (req, res) => {
  res.send('Driving Learning Portal')
});

app.use('/api/v1', approutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});


client.connect((err)=>{
  if(err){
      console.log('error',err)
  }
  else{
      console.log('connected')
  }
})