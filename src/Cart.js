import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Dispatch } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { increment, decrement, removedata } from "./app/reducer/CartSlice";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { Link } from "react-router-dom";

function Cart() {



    const dispatch = useDispatch();
    const item_pre = useSelector((state) => state.counter.item_pre);
    const arr = useSelector((state) => state.counter.value) // value [] array vali badhi ahi aave che




    const btn_incre = (id) => {
        dispatch(increment({ id }));
    }
    const btn_decre = (id) => {
        dispatch(decrement({ id }));
    }
    const remove_btn = (ele) => {
        // alert(ele);
        dispatch(removedata(ele));
    }           

    const strike_price = arr.reduce((total, item) => total + item.price * (item.discountPercentage / 100) + item.price, 0);
    const price = arr.reduce((total, item) => total + strike_price * item.qty, 0);
    const total_sum = arr.reduce((total, item) => total + item.price * item.qty, 0);
    const discount = arr.reduce((total, item) => total + (item.discountPercentage / 100) * item.price * item.qty, 0);
    const d_charge = item_pre * 40;




    return (
        <div>
            <div>
                <Navbar expand="lg" className="bg_h fixed-top">
                    <Container>
                        <Navbar.Brand href="#home">
                            <Link to="/main_page">
                                <div className='img_logo'>
                                    <img src={require('./image/f_logo.png')} className='img'></img>
                                </div>
                            </Link>

                            <div className='d-flex'>
                                <p className='Explore'>Explore</p>
                                <p className='Plus'> Plus<img src={require('./image/2_logo.png')}></img></p>
                            </div>

                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="m-auto">
                                <div className='h_input'>
                                    <input type='text' placeholder='Search for products, brands and more' size={100}></input>
                                    <i className='h_icon'><FaSearch></FaSearch></i>
                                </div>
                                <div>
                                    <input type='button' value={"LOGIN"} className='h_btn' ></input>
                                    {/* <input type="button" value={"ALL"} className="h_btn"></input> */}
                                </div>
                                {/* <div className='cart'>
                                    <i><FaShoppingCart></FaShoppingCart></i>
                                    <p>LOGIN</p>
                                </div> */}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

            <div>
                <Container>
                    {
                        arr.length === 0 ? (
                            <div className="not_add">
                                <div className="addnot_img">
                                    <img src={require('./image/add_not.png')}></img>
                                </div>
                                <p className="miss">Missing Cart items?</p>
                                <p className="miss login">Login to see the items you added previously</p>
                                <Link to="/main_page"><p className="not_loginbtn">SHOP NOW</p></Link>
                            </div>
                        ) : (

                            <div className="main_top">
                                <Row>
                                    <Col lg={8}>
                                        <div>
                                            <div className="top">
                                                <p className="c_form">From Saved Addresses</p>
                                                <p className="c_btn">Enter Delivery Pincode</p>
                                            </div>
                                        </div>
                                        <div>
                                            {
                                                arr.map((item, index) => {
                                                    return (
                                                        <div key={index} className="add_s_item">
                                                            <div className="add_img">
                                                                <img src={item.thumbnail}></img>
                                                                <div className="incre_btn">
                                                                    {/* <input type="button" className="decre_btn" onClick={() => btn_decre(item)} value={"-"}></input><span> {item.qty} </span><input type="button" className="decre_btn" onClick={() => btn_incre(item)} value={"+"}></input> */}
                                                                    <input type="button" className="decre_btn" onClick={() => btn_decre(item.id)} value={"-"}></input><span> {item.qty} </span><input type="button" className="decre_btn" onClick={() => btn_incre(item.id)} value={"+"}></input>
                                                                </div>
                                                            </div>
                                                            <div className="two_part">
                                                                <p className="des">{item.description}</p>
                                                                <div className="sing_price">
                                                                    <span className="price">₹{item.price}</span>
                                                                    <span className="strike_p">₹ {(item.price * item.discountPercentage / 100 + item.price).toFixed(0)}</span>
                                                                    {/* <span className="strike_p">{item_strike.toFixed(2)}</span> */}
                                                                    <span className="dis">{item.discountPercentage}% OFF</span>
                                                                </div>
                                                                <div className="remove_item">
                                                                    {/* <p>SAVE FOR LATER</p> */}
                                                                    <p className="remove_btn" onClick={() => remove_btn(item)}>REMOVE</p>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                            <div className="div_place">
                                                <Link to="/place_holder"><p className="btn_place_o">PLACE ORDER</p></Link>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div>
                                            <div className="details sticky_details">
                                                <p className="c_PRICE">PRICE DETAILS</p>
                                                <div className="prent_c">
                                                    <p className="c_priced">Price ({item_pre}items)</p>
                                                    {/* <span className="c_priced">{price}</span> */}
                                                    <span className="c_priced">₹{strike_price.toFixed(0)}</span>
                                                </div>
                                                <div className="prent_c">
                                                    <p className="c_priced">Discount</p>
                                                    <span className="c_priced">₹{discount.toFixed(0)}</span>
                                                </div>
                                                <div className="prent_c">
                                                    <p className="c_priced spce_d">Delivery Charges</p>
                                                    <span style={{ textDecoration: "line-through" }} className="c_priced">₹{d_charge.toFixed(0)}<font color={{ color: "green" }}> Free</font></span>
                                                </div>
                                                <div className="prent_c_1">
                                                    <p className="t_total">Total Amount</p>
                                                    <span className="t_total">₹{total_sum.toFixed(0)}</span>
                                                </div>

                                                <p className="c_will">You will save ₹ {discount.toFixed(0)} on this order</p>

                                            </div>
                                            <div className="safe_div">
                                                <i><AiOutlineSafetyCertificate></AiOutlineSafetyCertificate></i>
                                                <p className="safe">Safe and Secure Payments.Easy returns.100% Authentic products.</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        )}

                </Container>
            </div>

        </div>
    )
}
export default Cart;