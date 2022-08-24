import mongoose from "mongoose";

const AllDataModel = new mongoose.Schema(
    {
        prevPageToken:{type:String},
        nextPageToken: {type:String},
        pageToken: {type:String},
        index:{type:Number},
        items:[{
            snippet:{
                publishedAt:{type:String},
                title: {type:String},
                thumbnails: {
                    default: {
                        url: {type:String},
                        width: {type:Number},
                        height: {type:Number}
                    }
                },
                resourceId: {
                    kind: {type:String},
                    videoId: {type:String}
                }
            }
        }],
        pageInfo: {
            totalResults: {type:String},
            resultsPerPage: {type:String}
        }
    },
    {
        collection:'Alldata'
    }
)

const model = mongoose.model('AlldataModel',AllDataModel);

export default model;