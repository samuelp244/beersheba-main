import React from 'react';
// import { useLoadScript,  } from "@react-google-maps/api";
// import {Link} from "react-router-dom";
// import churhDetails from '../Components/mapComponents/churchMapParams.json'
import Navbar from '../Components/HomeComponents/Navbar';
// import ChurchMap from '../Components/mapComponents/ChurchMap';
import Footer from '../Components/HomeComponents/Footer';
import UnderConstructionPage from '../Components/HomeComponents/underConstructionPage';

export default function Locations(){
    // const { isLoaded } = useLoadScript({
    //     googleMapsApiKey: 'AIzaSyA7x5WGa7bQglJS_aGw7fK4GtLzlCdFLww',
    // });

    // if(!isLoaded) return <div>Loading..</div>
    // console.log(isLoaded)
    return (
        <>
        <div className='grid grid-cols-1'>
            <Navbar />
            <UnderConstructionPage/>
            {/* <main className='w-full h-screen'>
                <div className=''>
                    <div className=''>
                        {isLoaded ? <ChurchMap /> : null}
                        
                    </div>
                    <div className='col-span-1'>
                        <div>
                            <h2 className='mb-0'>Our Locations</h2>
                        </div>
                        <div>
                            {churhDetails.map(church=>{
                                    const { id, church_name,address,path} = church;
                                    return(
                                        <ul className='border mb-0 pt-3'>
                                        <Link to={path}> <div key={id} >
                                            <h5>{church_name}</h5>
                                            <p>{address}</p>
                                        </div></Link>
                                        </ul>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </main> */}
            <Footer />
        </div>
        </>
        
    );
}


