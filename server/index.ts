import express, { Express, Request, Response } from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import 'dotenv/config'
import { PrayerReqHandler } from './controller/PrayerReqController';
import { FrontEndHandler } from './controller/FrontEndHandler';
import { YTDataHandler } from './controller/yTDataController';
// import { RecentData } from './api/apiCalls';
import { getRecentData,getAllData, getPlayistData } from './api/Requests';
// import {  } from './api/Requests/AllData';


const app:Express = express();

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname + "/public")))

mongoose.connect('mongodb://localhost:27017/beersheba-YTData')

const something = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            YTDataHandler();
            
        }
    };
})();

// something();


// app.get('/*',FrontEndHandler)

app.get('/ytrecentdata',getRecentData)

app.get('/getAllData',getAllData)

app.get('/getplaylistdata',getPlayistData)

app.post('/api/v1/sendPrayerRequest',PrayerReqHandler)

app.listen(1337,()=>{
    console.log('app started at 1337')
})