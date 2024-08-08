import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from 'react';


function Top_header() {

    // let [searchbar,setsearchbar] = useState("");
    // const Searchbtn = () =>{
    //     alert();
    // }


    return (
        // <div>
        //     <Navbar expand="lg" className="bg_h fixed-top">
        //         <Container>
        //             <Navbar.Brand href="#home">
        //                 <div className='img_logo'>
        //                     <img src={require('./image/f_logo.png')} className='img'></img>
        //                 </div>
        //                 <div className='d-flex'>
        //                     <p className='Explore'>Explore</p>
        //                     <p className='Plus'> Plus<img src={require('./image/2_logo.png')}></img></p>
        //                 </div>

        //             </Navbar.Brand>
        //             <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //             <Navbar.Collapse id="basic-navbar-nav">
        //                 <Nav className="m-auto">
        //                     <div className='h_input'>
        //                         <input type='text' value={"searchbar"} onChange={(e)=>{setsearchbar(e.target.value)}} placeholder='Search for products, brands and more' size={100}></input>
        //                         <i className='h_icon'><FaSearch></FaSearch></i>
        //                     </div>
        //                     <div>
        //                         <input type='button' value={"Search"} className='h_btn' onClick={()=>Searchbtn()}></input>
        //                     </div>
        //                     <div className='cart'>
        //                         <i><FaShoppingCart></FaShoppingCart></i>
        //                         <p>Cart</p>
        //                     </div>
        //                 </Nav>
        //             </Navbar.Collapse>
        //         </Container>
        //     </Navbar>
        // </div>
        <div></div>
    )
}
export default Top_header;