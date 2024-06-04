import React from 'react';
import '../style/header/header.css';
import Logo from '/Users/seb-tech/Documents/DEVELOPPEMENT/PROJETS-REACT/vite-project/src/assets/images/Kumul974.png';

const Header = () => {
    return (
       <>
         <div className='header'>
         <div className='logo'>
         <img src={Logo}></img>
         

         </div>
            
        </div>
       </>
    );
};

export default Header;