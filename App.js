import React from 'react';
import ReactDOM from 'react-dom/client';
import Headerlogo from './Header Components/Headerlogo';
import NavItems from './Header Components/NavBar';
import Cards from './Header Components/Cards';
import FooterItems from './Header Components/Footer';

var htmlRoot = document.getElementById("root");
var rootReact = ReactDOM.createRoot(htmlRoot);

const AppLayout = () => {
    return(
    <div className="header-logo">
        <div className="Header">
        <Headerlogo/>
        <NavItems/>
        </div>
        <Cards/>
        <div className="Footer">
        <FooterItems/>
        </div>
    </div>
)
}
rootReact.render(<AppLayout />)