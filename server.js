const express = require('express');

const app=express();
app.use(express.json());

const PORT=process.env.PORT || 5000;
app.use('/',(req,res)=>{
    res.send('Hello World');

})

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));