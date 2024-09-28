const express = require('express');
const app = express();

app.use(express.json());

const db = require("./models");


//Routers
const postRouter = require('./routes/Posts');
app.use("/posts", postRouter);

const Port = 3001;
db.sequelize.sync().then(()=>{

    app.listen(Port, () =>{
        console.log(`Server Running on Port ${Port} `);
    });
});




