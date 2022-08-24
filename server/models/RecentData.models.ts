import mongoose from "mongoose";
// import {youtubeSearchType} from '../types/typesandinterfaces'

const RecentDataModel = new mongoose.Schema(
    {
        // kind: {type: String},
        // etag: {type: String},
        videoId: {type: String},
        snippet: {
            // publishedAt: {type: String},
            // channelId: {type: String},
            title: {type: String},
            description: {type: String},
            thumbnails: {
                default: {
                    url:{type: String},
                    width: {type: Number},
                    height: {type: Number}
                },
                medium: {
                    url:{type: String},
                    width: {type: Number},
                    height: {type: Number}
                },
                high: {
                    url:{type: String},
                    width: {type: Number},
                    height: {type: Number}
                }
            },
            channelTitle: {type: String},
            liveBroadcastContent: {type: String},
            publishTime: {type: String}
        }
    },
    {
        collection:'Recentdata'
    }
)

const model = mongoose.model('RecentDataModel',RecentDataModel);

export default model;