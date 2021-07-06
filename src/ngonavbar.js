import React from "react";
import Jumbotron from "./jumbotron"
function Ngonavbar() {
    return <>

        <div>

            <nav class="navbar navbar-expand-xl navbar-light bg-light">
                <div className="icon" style={{marginLeft:'3%'}}><i class="fas fa-home fa-4x"></i></div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent"style={{marginLeft:'60%'}}>
                    <ul className="navbar-nav" >
                        <li className="t active">
                            <a className="nav-link" href="#Home" ><p className="pt-1 active" style={{ color: 'black' }}>HOME </p></a>
                        </li>
                        <li className="t">
                            <a className="nav-link" href="#Services"><p className="pt-1" style={{ color: 'black' }}>Services</p></a>
                        </li>
                        <li className="t">
                            <a className="nav-link" href="#About"><p className="pt-1">About Us</p></a>
                        </li>
                        <li className="t">
                            <a className="nav-link" Link="Contact" href="#Contact"><p className="pt-1" >Get Intouch</p></a>
                        </li>
                    </ul>
                </div>
            </nav>
            <Jumbotron />
        </div>







    </>
}
export default Ngonavbar
