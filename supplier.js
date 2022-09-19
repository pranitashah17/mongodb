"use strict"
import express from "express";
const router = express.Router();
import mongoose from 'mongoose';
let mongoClient = require('mongodb').MongoClient;

mongoClient.connect('mongodb+srv://pranitashah17:PranitaShah17@cluster0.yipyyvq.mongodb.net/jsonData?retryWrites=true&w=majority', (error, db) => 
{
    let data = db.db('jsonData');

    data.collection('supplierList') })
// import fs from 'fs';
// import path from 'path';
// let rawdata = fs.readFileSync('jsonData.json');
// let data = JSON.parse(rawdata);
  

let finalarray = []; 
let array = [];
function supplierList(loc, grdNo) {
    for(let i=0; i < data.length; i++) {
        if(data[i].location === loc) {
            for(let j=0; j < data[i].listingsData.length; j++) {
                if(data[i].listingsData[j].gradeNumber === grdNo){
                array.push({name: data[i].name, price: data[i].listingsData[j].price});
                }
            }
        }      
        finalarray = array.sort((x, y) => x.price - y.price)
    }}

router.get('/', (req, res) => { 
    let loc = req.query.loc;
    let grdNo = req.query.grdNo
     
    supplierList(loc, grdNo)

    res.send(finalarray)
})
    
// supplierList('5c08cb6f54851e2170a044f4', 'F18S010UA');

export default router;