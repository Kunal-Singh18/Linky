const express = require('express');
const path = require('path');
const {connectto} = require('./mongoose');
const urlRoute = require('./routes/url');
const url = require('./models/url');
const app = express()
const port = 3005

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json()); 

connectto("mongodb+srv://22bec054:<db_password>@cluster0.tf7w3xx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>console.log("Mongodb connected"));
app.use('/url',urlRoute);
app.get('/:var1', async (req,res)=>{
    const shortId = req.params.var1; 
     const entry =  await url.findOneAndUpdate(
        {
           shortId,
        },
        {
            $push:{
                visitHistory:
                {
                    timestamp : Date.now(),// this was always upodate but we were missing to send response.
                },
            }
        },
       
    );
    if (!entry) // if entry is not found.
     {
    return res.status(404).send('Short URL not found');
  }
    res.redirect(entry.redirectURL);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

