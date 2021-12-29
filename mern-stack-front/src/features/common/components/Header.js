import React from 'react';
import { Navi } from 'features/common';
import { Link } from 'react-router-dom';




const Header = () => {
  return (
    <header className="rg-header" >
      <img type="but" class='logo' src={require("features/common/images/plan.gif").default}/>
      <Navi />
      <div class="search"><input type="search" placeholder="Search"></input></div>
    </header>
    
  )
}

export default Header