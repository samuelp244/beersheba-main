import { getRecentData } from "../apiCalls"
import RecentDataModel from '../../models/RecentData.models'

const RecentDatadbHandler = async()=>{
    const currRecentData = await getRecentData();
    // console.log(currRecentData?.items)

    try{
        await RecentDataModel.deleteMany({})
        currRecentData?.map(async i=>{
            try{
                await RecentDataModel.create({
                    videoId:i.id.videoId,
                    snippet:{
                        title: i.snippet.title,
                        description: i.snippet.description,
                        thumbnails: {
                            default: {
                                url:i.snippet.thumbnails.default.url,
                                width: i.snippet.thumbnails.default.width,
                                height: i.snippet.thumbnails.default.height
                            }
                        },
                        liveBroadcastContent: i.snippet.liveBroadcastContent,
                        publishTime: i.snippet.publishTime
                    }
                });
            } catch (err){
                console.log(err)
            }
        });
        console.log('updated Recent Data Items')

    } catch (err){
        console.log(err)
    }
}
export default RecentDatadbHandler;