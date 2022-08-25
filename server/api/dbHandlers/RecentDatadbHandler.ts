import { getRecentData } from "../apiCalls"
import RecentDataModel from '../../models/RecentData.models'

const RecentDatadbHandler = async()=>{
    const data = await getRecentData();
    const currRecentData = data?.items
    // console.log(currRecentData?.items)

    try{
        if(!data?.error){await RecentDataModel.deleteMany({})
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
        console.log('updated Recent Data Items')}
        else{
            console.log(`code: ${data.error.code},message: ${data.error.message}`)
        }

    } catch (err){
        console.log(err)
    }
}
export default RecentDatadbHandler;