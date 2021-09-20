const express = require ('express');
const app = express();
const fs= require('fs');
const { getAllUsers } = require('../after-section-06/controllers/userController');
app.use(express.json());

const tours = JSON.parse(
    fs.readFileSync(`${__dirname}/dev-data/tours-simple.json`)
    );

app.get('app/v1/tours',(req,res)=>{
    res.status(200).json({
        status:'success',
        results:tours.length,
        data:{
            tours
        }
    });
});

app.get('app/v1/users',(req,res)=>{
    res.status(200).json({
        status:'success',
        results:users.length,
        data:{
            users
        }
    })
})

app.get('app/v1/userLogin',(req,res)=>{
    res.status(200).json({
        status:'success',
        results:users.length
    })
})
app.get('')
const port =3000;
app.listen(port,()=>{
    console.log(`APP RUNNING ON PORT ${port}`);
});
