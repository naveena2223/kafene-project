import {React,useState} from "react";
import "../css/navigation.css";
// import Order from "./order";
// import Product from "./product";
// import User from "./user";
// import Login from './login';

function Navigation(){
    // const [Active,setActive]=useState( "login");
    return(
        <div className="navigation">
            <nav id="nav">
                <div id="log-wrapper">
                    <img
                        id="logo-img"
                        src="https://edu-web-fundamentals.web.app/static/media/logo.58169365.png"
                        alt="stylist k"
                    />
                    <p id="logo-text">Kafene</p>
                </div>
                <a className="nav-link active" href="" >Orders</a>
                <a className="nav-link" href="" >Products</a>
                <a className="nav-link" href="">Users</a>
                <a className="nav-link" id="logout-btn" href="index.html">Log Out</a>
            </nav>
            {/* <div className="login"> {Active==="login" && <Login />}</div>
            <div className="order">{Active==="order" && <Order />}</div>
            <div className="product">{Active==="product" && <Product />}</div>
            <div className="user">{Active==="user" && <User />} </div> */}
        </div>
    );
}
export default Navigation;