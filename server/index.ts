import express, { Express, Request, Response } from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import 'dotenv/config'
import { PrayerReqHandler } from './controller/PrayerReqController';
import { YTDataHandler } from './controller/YTDataController';
import { getRecentData,getAllData, getPlayistData } from './api/Requests';

import schedule from 'node-schedule'

const app:Express = express();

app.use(express.json())
app.use(cors())


mongoose.connect('mongodb://localhost:27017/beersheba-YTData')

schedule.scheduleJob('0 * * * *',()=>{
    YTDataHandler();
})
// schedule.scheduleJob('30 10 * * 7',()=>{
//     YTDataHandler();
// })

app.get('/v1/ytrecentdata',getRecentData)

app.get('/v1/getAllData',getAllData)

app.get('/v1/getplaylistdata',getPlayistData)

app.post('/v1/sendPrayerRequest',PrayerReqHandler)

app.get('/v1/test',(req:Request,res:Response)=>{
    res.send('test success')
})

app.listen(1337,()=>{
    console.log('app started at 1337')
})
