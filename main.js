"use strict"
import express from 'express';
import bodyParser from 'body-parser';
import supplierRoutes from "./routes/supplier.js";

// const uri = "mongodb+srv://pranitashah17:PranitaShah17@cluster0.yipyyvq.mongodb.net/jsonData?retryWrites=true&w=majority";
// const data = new MongoClient(uri);

const app = express();
const port = 4444;

app.use(bodyParser.json())
app.use("/supplier", supplierRoutes);

app.get("/", (req, res) => {
    res.send('hello homepage')
})

app.listen(port, err => {
    if(err) {
        return console.log('ERROR', err)
    }
    console.log(`Listening on port http://localhost:${port}`)
})



