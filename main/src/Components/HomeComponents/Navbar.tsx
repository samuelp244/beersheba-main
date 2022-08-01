import React, { useState } from 'react'
import { Burger } from '@mantine/core';

const Navbar = () => {
    const [navbarOpened, setNavbarOpened] = useState(false);
    const title = navbarOpened ? 'Close navigation' : 'Open navigation';

  return (
    <div>
        <header className="flex justify-between   sticky shadow-2xl p-1">
                <div className="p-2">
                    <Burger
                        opened={navbarOpened}
                        onClick={() => setNavbarOpened((o) => !o)}
                        title={title}
                    />
                    
                </div>
               
                <div className="p-2  m-auto">
                    
                </div>
                
                
                
            </header>
    </div>
  )
}

export default Navbar