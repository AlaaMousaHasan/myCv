import React from 'react';
import NavBar from './NavBar';
import MobileNavbar from './MobileNavbar';
import useMediaQuery from './useMediaQuery';

function Layout({ children }) {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <div>
            {/* Dynamically Render NavBar or MobileNavbar */}
            {isMobile ? <MobileNavbar /> : <NavBar />}
            
            {/* Main Content */}
            <main>{children}</main>
        </div>
    );
}

export default Layout;
