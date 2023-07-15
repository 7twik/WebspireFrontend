import React from "react";



function Header() {

  return (
    <header>
      <h1>
        {/* <HighlightIcon /> */}
        <span className="title">
        Webspire</span>
        <a href="/Post" className="navyh reon"> 
                             All Post </a>
        <a href="/MyPost" className="navyh reon"> 
                My Post </a>
                
      </h1>
      <a href="/" className='reon Logout'>
                           Log out</a>
    </header>
  );
}

export default Header;
