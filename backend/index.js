const express = require("express");
const app=express();
const mainRouter="./routes/index"
const cors=require("cors");
app.use(cors());



app.use("/api/v1",mainRouter);
app.listen(3000)


