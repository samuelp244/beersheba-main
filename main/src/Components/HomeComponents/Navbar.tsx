import React, { useState } from 'react'
import { Burger } from '@mantine/core';
import { Link } from 'react-router-dom';
import useMediaQuery from '../../Hooks/useMediaQuery';
import logoImage from "../../assets/Logo.png"
const Navbar = () => {
    const [navbarOpened, setNavbarOpened] = useState(false);
    const title = navbarOpened ? 'Close navigation' : 'Open navigation';
    const lg = useMediaQuery("(min-width: 1024px)")
    const md = useMediaQuery("(min-width: 768px)")
  return (
    <div>
        <header className=" sticky shadow-2xl p-1">
          <div className='flex justify-between mx-4'>
                {md?
                  <Link to="/">
                    <img src={logoImage} className="h w-24" alt="Logo.png"/>
                  </Link>
                :<div className="my-auto">
                    <Burger
                        opened={navbarOpened}
                        onClick={() => setNavbarOpened((o) => !o)}
                        title={title}
                    />
                    
                </div>}
               
                
                {lg?
                  <div className=" m-auto">
                      <div className='flex gap-3 '>
                          <div>
                            <Link to="/"><p>A SHORT HISTORY</p></Link>
                          </div>
                          <div>
                            <Link to="/"><p>OUR SOCIETY</p></Link>
                          </div>
                          <div>
                            <Link to="/"><p>LOCATIONS</p></Link>
                          </div>
                          <div>
                            <Link to="/meetings"><p>MEETINGS</p></Link>
                          </div>
                          <div>
                            <Link to="/"><p>GALLERY</p></Link>
                          </div>
                          <div>
                            <Link to="/"><p>LIVE</p></Link>
                          </div>
                          <div>
                            <Link to="/"><p>CONTACT US</p></Link>
                          </div>
                      </div>
                  </div>
                :
                  null}
                {lg?null:
                <div className="my-auto">
                <Burger
                    opened={navbarOpened}
                    onClick={() => setNavbarOpened((o) => !o)}
                    title={title}
                />
                
                </div>}
              </div>
            </header>
    </div>
  )
}

export default Navbar