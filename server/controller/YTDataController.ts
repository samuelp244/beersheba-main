import AlldatadbHandler from '../api/dbHandlers/AllDatadbHandler';
import PlaylistItemsdbHandler from '../api/dbHandlers/PlaylistItemsdbHandler';
import RecentDatadbHandler from '../api/dbHandlers/RecentDatadbHandler';

export const YTDataHandler = async ()=>{
    await RecentDatadbHandler();
    await AlldatadbHandler();
    await PlaylistItemsdbHandler();


}
