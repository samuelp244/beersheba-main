import {getAllPlaylistsData, getPlaylistItems} from '../apiCalls';
import PlaylistItemsModel from '../../models/PlaylistItems.models';

const PlaylistItemsdbHandler = async ()=>{
    try{
        
        const data = await getAllPlaylistsData();
        const playlistData = data?.items
       if(!data?.error){ 
        await PlaylistItemsModel.deleteMany()
        playlistData?.map(async i=>{
            const playlistItems = await getPlaylistItems(i.id)
            // console.log(playlistItems)
            try{
                await PlaylistItemsModel.create({
                    PlaylistId:i.id,
                    PlaylistTitle:i.snippet.title,
                    publishedAt:i.snippet.publishedAt,
                    items:[]
                })
                // console.log('items created')
            
                playlistItems?.map(async item=>{
                    try{
                        item.snippet.title!=="Deleted video" && await PlaylistItemsModel.updateOne(
                            {PlaylistId:i.id},
                            {$push:{items:{
                                snippet:{
                                    publishedAt:item.snippet.publishedAt,
                                    title:item.snippet.title,
                                    videoId:item.snippet.resourceId.videoId,
                                    thumbnails: {
                                        default: {
                                            url: item?.snippet.thumbnails.default?.url,
                                            width: item?.snippet.thumbnails.default?.width,
                                            height: item?.snippet.thumbnails.default?.height
                                        }
                                    }
                                }
                            }}}
                        )
                        // console.log('item updated')
                    }catch(err){
                        console.log(err)
                    }
                })
            }catch(err){
                console.log(err)
            }
        })
        console.log('updated Playlist Items')}
        else{
            console.log(`code: ${data.error.code},message: ${data.error.message}`)
        }
    }catch(err){
        console.log(err)
    }
}
export default PlaylistItemsdbHandler;