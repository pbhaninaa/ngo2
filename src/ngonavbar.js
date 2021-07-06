import React from "react";
import Jumbotron from "./jumbotron"
function Ngonavbar() {
    return <>

        <div>

            <nav class="navbar navbar-expand-xxl navbar-light bg-light ml-5">
                <div className="icon"><i class="fas fa-home fa-3x"></i></div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-lg-auto" >
                        <li className="t active" >
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
