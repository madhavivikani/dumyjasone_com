import React from 'react';
import { Container, Row, Col, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import jsPDF from 'jspdf';

function Place_holder() {

    const dispatch = useDispatch();
    const item_pre = useSelector((state) => state.counter.item_pre);
    const arr = useSelector((state) => state.counter.value) // value [] array vali badhi ahi aave che

    const strike_price = arr.reduce((total, item) => total + item.price * (item.discountPercentage / 100) + item.price, 0);
    const total_sum = arr.reduce((total, item) => total + item.price * item.qty, 0);
    const discount = arr.reduce((total, item) => total + (item.discountPercentage / 100) * item.price * item.qty, 0);
    const d_charge = item_pre * 40;

    const generatePDF = () => {
        const pdf = new jsPDF();

        // Add content to the PDF
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(18);
        pdf.text("Order Summary", 20, 20);

        pdf.setFontSize(14);
        // pdf.setFont("helvetica", "normal");
        pdf.text(`Price (${item_pre} items): ₹${strike_price.toFixed(0)}`, 20, 40);
        pdf.text(`Delivery Charges: ₹${d_charge.toFixed(0)} (Free)`, 20, 50);
        pdf.text(`Total Payable: ₹${total_sum.toFixed(0)}`, 20, 60);
        pdf.text(`Your Total Savings on this order: ₹${discount.toFixed(0)}`, 20, 70);

        // Save the PDF
        pdf.save("bill.pdf");
    };

    return (
        <div>
            {/* header */}
            <div>
                <Navbar expand="lg" className="bg_h fixed-top">
                    <Container>
                        <Navbar.Brand href="#home">
                            <Link to="/main_page">
                                <div className='img_logo'>
                                    <img src={require('./image/f_logo.png')} className='img' alt="Logo"></img>
                                </div>
                            </Link>
                            <div className='d-flex'>
                                <p className='Explore'>Explore</p>
                                <p className='Plus'> Plus<img src={require('./image/2_logo.png')} alt="Plus logo"></img></p>
                            </div>
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </div>

            <div>
                <Container>
                    <div className="main_top2">
                        <Row>
                            <Col lg={8}>
                                <div className="left_p">
                                    <div>
                                        <Accordion defaultActiveKey={['0']} alwaysOpen>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header><span className="p_1">1</span><span className="del_p">LOGIN ✅</span></Accordion.Header>
                                                <Accordion.Body>
                                                    <div>
                                                        <div className="ms-3">
                                                            <span>Phone</span>
                                                            <span className="fw-bold"> +919099739442</span>
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header><span className="p_1">2</span><span className="del_p">DELIVERY ADDRESS ✅</span></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="main_sub">
                                                        <div className="main_name">
                                                            <input type="text" placeholder="Name" size={40}></input>
                                                            <input type="text" placeholder="10-digit mobile number" size={40}></input>
                                                        </div>
                                                        <div className="main_name">
                                                            <input type="text" placeholder="Pincode"  size={40}></input>
                                                            <input type="text" placeholder="Locality"  size={40}></input>
                                                        </div>
                                                        <div className="main_name">
                                                            <input type="text" placeholder="Address" size={88}></input>
                                                        </div>
                                                        <div className="main_name">
                                                            <input type="text" placeholder="City/Distric/Town"  size={40}></input>
                                                            <select className="main_select">
                                                                <option disabled>--Select State--</option>
                                                                <option >Asama</option>
                                                                <option >Bihar</option>
                                                                <option >Delhi</option>
                                                                <option >Goa</option>
                                                                <option >Gujrat</option>
                                                                <option >Haryana</option>
                                                            </select>
                                                        </div>
                                                        <div className="main_name">
                                                            <input type="text" placeholder="Landmark(Optional)"  size={40}></input>
                                                            <input type="text" placeholder="Alternate Phone(Optional)"  size={40}></input>
                                                        </div>
                                                        <div className="main_name1">
                                                            <p className="address_p">Address Type</p>
                                                            <input type="radio"></input><span>Home (All day delivery)</span>
                                                            <input type="radio"></input><span>Work (Delivery between 10 AM - 5 PM)</span>
                                                        </div>
                                                        <div>
                                                            <input type="button" className="submit_btn_p" value="SAVE AND DELIVER HERE" onClick={generatePDF} />
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="3">
                                                <Accordion.Header><span className="p_1">3</span><span className="del_p">PAYMENT OPTIONS ✅</span></Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="ms-3">
                                                        <input type="radio" checked></input><span className="cash"> Cash On Delivery</span>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div>
                                    <div className="details sticky_details">
                                        <p className="c_PRICE">PRICE DETAILS</p>
                                        <div className="prent_c">
                                            <p className="c_priced">Price ({item_pre} items)</p>
                                            <span className="c_priced">₹{strike_price.toFixed(0)}</span>
                                        </div>
                                        <div className="prent_c">
                                            <p className="c_priced spce_d">Delivery Charges</p>
                                            <span style={{ textDecoration: "line-through" }} className="c_priced">₹{d_charge.toFixed(0)}<font color={{ color: "green" }}> Free</font></span>
                                        </div>
                                        <div className="prent_c_1">
                                            <p className="t_total">Total Payable</p>
                                            <span className="t_total">₹{total_sum.toFixed(0)}</span>
                                        </div>

                                        <p className="c_will">Your Total Savings on this order ₹{discount.toFixed(0)}</p>

                                    </div>
                                    <div className="safe_div safe_div1">
                                        <i><AiOutlineSafetyCertificate></AiOutlineSafetyCertificate></i>
                                        <p className="safe">Safe and Secure Payments.Easy returns.100% Authentic products.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                </Container>
            </div>


        </div>
    );
}
export default Place_holder;
