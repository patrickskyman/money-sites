import React from 'react';
import { Divider } from '@mui/material';

import NavigationBar from './NavigationBar'

import Footer2 from './Footer/Footer2';

//import './Layout.scss'
const MainLayout = ({ children } ) => {
    return (
        <>
<NavigationBar/>

      
        <div className="true">{children}</div>
<Divider/>

        <Footer2/>
        
        </>
    )
}

export default MainLayout;