import { Express, Request, Response } from 'express'
import path from 'path';

export const FrontEndHandler = (req:Request,res:Response)=>{
    res.sendFile(path.join(__dirname,'../public/index.html'))
}