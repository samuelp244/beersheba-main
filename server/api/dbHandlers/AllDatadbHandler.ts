import AllDataModel from '../../models/AllDataHandler.models';
import { getAllData } from '../apiCalls';
import axios from 'axios';

const AlldatadbHandler = async()=>{
    
    try{
        let Alldata = await getAllData();
        await AllDataModel.deleteMany({});
        await AllDataModel.create({
            index:0,
            nextPageToken:Alldata?.nextPageToken,
            prevPageToken:Alldata?.prevPageToken,
            pageInfo:{
                totalResults:Alldata?.pageInfo.totalResults,
                resultsPerPage:Alldata?.pageInfo.resultsPerPage
            },
            items:[{
                publishedAt:Alldata?.items[0].snippet.publishedAt,
                snippet:{
                    title:Alldata?.items[0].snippet.title,
                    thumbnails:{
                        default:{
                            url:Alldata?.items[0].snippet.thumbnails.default.url,
                            width:Alldata?.items[0].snippet.thumbnails.default.width,
                            height:Alldata?.items[0].snippet.thumbnails.default.height
                        }
                    },
                    resourceId:{
                        kind:Alldata?.items[0].snippet.resourceId.kind,
                        videoId:Alldata?.items[0].snippet.resourceId.videoId
                    }
                }
            }]
        })
        Alldata?.items.slice(1).map(async i=>{
            try{
                await AllDataModel.updateOne(
                    {index:0},
                    {$push:{items:{
                        snippet:{
                            publishedAt:i.snippet.publishedAt,
                            title:i.snippet.title,
                            thumbnails:{
                                default:{
                                    url:i.snippet.thumbnails.default.url,
                                    width:i.snippet.thumbnails.default.width,
                                    height:i.snippet.thumbnails.default.height
                                }
                            },
                            resourceId:{
                                kind:i.snippet.resourceId.kind,
                                videoId:i.snippet.resourceId.videoId
                            }
                        }
                    }}}
                
                )
            }catch (err){
                console.log(err)
            }
        })
        
        if(Alldata && Alldata.pageInfo.totalResults){
            const maxPages =  Math.floor((Alldata.pageInfo.totalResults/30)+1)
            for(let i=0;i<maxPages;i++){
                let tempPageToken = Alldata.nextPageToken
                
                tempPageToken && await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUjm1A-rBB_6nbP-fuqyIrow&maxResults=30&pageToken=${tempPageToken}&key=${process.env.GOOGLE_API_KEY}`)
                    .then(res=>{
                        Alldata = res.data;
                    })
               
                    await AllDataModel.create({
                        
                        nextPageToken:Alldata?.nextPageToken,
                        prevPageToken:Alldata?.prevPageToken,
                        pageInfo:{
                            totalResults:Alldata?.pageInfo.totalResults,
                            resultsPerPage:Alldata?.pageInfo.resultsPerPage
                        },
                        items:[{
                            snippet:{
                                publishedAt:Alldata.items[0].snippet.publishedAt,
                                title:Alldata.items[0].snippet.title,
                                thumbnails:{
                                    default:{
                                        url:Alldata.items[0].snippet.thumbnails.default.url,
                                        width:Alldata.items[0].snippet.thumbnails.default.width,
                                        height:Alldata.items[0].snippet.thumbnails.default.height
                                    }
                                },
                                resourceId:{
                                    kind:Alldata.items[0].snippet.resourceId.kind,
                                    videoId:Alldata.items[0].snippet.resourceId.videoId
                                }
                            }
                        }]
                    })
                    Alldata.items.slice(1).map(async i=>{
                        try{
                            await AllDataModel.updateOne(
                                {nextPageToken:Alldata?.nextPageToken},
                                {$push:{items:{
                                    snippet:{
                                        publishedAt:i.snippet.publishedAt,
                                        title:i.snippet.title,
                                        thumbnails:{
                                            default:{
                                                url:i.snippet.thumbnails.default.url,
                                                width:i.snippet.thumbnails.default.width,
                                                height:i.snippet.thumbnails.default.height
                                            }
                                        },
                                        resourceId:{
                                            kind:i.snippet.resourceId.kind,
                                            videoId:i.snippet.resourceId.videoId
                                        }
                                    }
                                    
                                }
                            }}
                            )
                        } catch (err){
                            console.log(err)
                        }
                    })
               
                
            }
        } 
        
        console.log('updated All Data Items')

       }catch(err){
        console.log(err)
       }
}

export default AlldatadbHandler;