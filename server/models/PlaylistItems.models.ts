import mongoose from "mongoose";

const PlaylistItemsModel = new mongoose.Schema(
        {
            PlaylistId:{type:String},
            PlaylistTitle:{type:String},
            publishedAt:{type:String},
            items:[{
                snippet:{
                    publishedAt:{type:String},
                    title:{type:String},
                    videoId:{type:String},
                    thumbnails: {
                        default: {
                            url: {type:String},
                            width: {type:Number},
                            height: {type:Number}
                        }
                    }
                }
            }]
        },
        {
            collection:'PlaylistItems'
        }
    )
const model = mongoose.model('PlaylistItemsModel',PlaylistItemsModel);

export default model;

