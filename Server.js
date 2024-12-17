const express=require("express");
const { dbconnect } = require("./config/database");
const { router } = require("./routes/routes");

const app=express()
app.use(express.json())
app.use("/api/v1",router)
const PORT=8000;
dbconnect()
app.listen(PORT,()=>{
    console.log(`app is running at port ${PORT}`)
})

