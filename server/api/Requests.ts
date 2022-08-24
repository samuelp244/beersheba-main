import { Request, Response } from 'express'
import AllDataModel from '../models/AllDataHandler';
import PlaylistItemsModel from '../models/PlaylistItems';
import RecentDataModel from '../models/RecentData.models'

export const getRecentData = async(req:Request,res:Response)=>{
    try{
        const data = await RecentDataModel.find()
        res.send(data)
    }catch(err){
        console.log(err)
    }
}

export const getPlayistData = async(req:Request,res:Response)=>{
    try{
        const data = await PlaylistItemsModel.find();
        res.send(data)
    }catch(err){
        console.log(err)
    }
    
}

export const getAllData = async(req:Request,res:Response)=>{
    res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    });

    if(Object.keys(req.query).length === 0){
        const data = await AllDataModel.find({index:0})
        res.send(data[0])
    }else{
        if (req.query.prevPageToken){
            const pageToken = 'EAA' + req.query.prevPageToken.toString().slice(3)
            const data = await AllDataModel.find({nextPageToken:pageToken})
            return res.send(data[0])
        }
        if(req.query.nextPageToken){
            const pageToken = 'EAE' + req.query.nextPageToken.toString().slice(3)
            const data = await AllDataModel.find({prevPageToken:pageToken})
            return res.send(data[0])
        }
    }
}

export const getVideoDetails = async (req:Request,res:Response) => {
    
} 