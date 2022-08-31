import express, { Express, Request, Response } from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import 'dotenv/config'
import { PrayerReqHandler } from './controller/PrayerReqController';
import { FrontEndHandler } from './controller/FrontEndHandler';
import { YTDataHandler } from './controller/YTDataController';
import { getRecentData,getAllData, getPlayistData } from './api/Requests';

import schedule from 'node-schedule'

const app:Express = express();

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname + "/public")))

mongoose.connect('mongodb://localhost:27017/beersheba-YTData')

schedule.scheduleJob('0 * * * *',()=>{
    YTDataHandler();
})

// app.get('/api/v1/ytrecentdata',getRecentData)

// app.get('/api/v1/getAllData',getAllData)

// app.get('/api/v1/getplaylistdata',getPlayistData)

// app.post('/api/v1/sendPrayerRequest',PrayerReqHandler)

app.get('/api/hello',(req:Request,res:Response)=>{
    res.send('hello')
})

// app.get('*',FrontEndHandler)



app.listen(1337,()=>{
    console.log('app started at 1337')
})
//hi
