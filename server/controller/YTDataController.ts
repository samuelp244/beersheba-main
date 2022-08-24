import AlldatadbHandler from '../api/dbHandlers/AllDatadbHandler';
import PlaylistItemsdbHandler from '../api/dbHandlers/PlaylistItemsdbHandler';
import RecentDatadbHandler from '../api/dbHandlers/RecentDatadbHandler';
import PlaylistItemsModel from '../models/PlaylistItems'

export const YTDataHandler = async ()=>{
    // await RecentDatadbHandler();
    // await AlldatadbHandler();
    await PlaylistItemsdbHandler();
    // const data = await PlaylistItemsModel.find()
    // console.log(data)

}
