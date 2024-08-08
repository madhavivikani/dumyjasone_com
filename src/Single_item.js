import { Col, Container, Row, Navbar, Nav, Spinner } from "react-bootstrap";
import Top_header from "./Top_header";
import { useEffect, useState } from "react";
import axios from 'axios';
import { FaAngleRight } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { cartdata } from "./app/reducer/CartSlice";
import { Link } from "react-router-dom";

function Single_item(props) {

    const { id } = useParams("");

    let [selectimg, setselectimg] = useState(0);
    let [load, setload] = useState(true);

    const imgbtn = (index) => {
        setselectimg(index);
    }

    // const dispatch = useDispatch();


    const addcartbtn = (item) => {
        // alert();
        // dispatch(cartdata(item));
        console.log(item);
    }

    let [get, setget] = useState({});
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then(function (response) {
                // handle success
                console.log(response.data);
                setget(response.data);
                setload(false); 
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        // }
    }, [id]);
    console.log(get);
    // const item_pre = useSelector((state) => state.counter.item_pre);


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
                                    <input type='text' placeholder='Search for products, brands and more' size={90}></input>
                                    <i className='h_icon'><FaSearch></FaSearch></i>
                                </div>
                                <div>
                                    <input type='button' value={"Search"} className='h_btn'></input>
                                    <input type="button" value={"ALL"} className="h_btn"></input>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

            <div className="main_single">
                <Container fluid>
                    {
                        load ? (
                            <div className="center_load">
                                <Spinner animation="border" className="text-center" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                            </div>
                        ) : (
                            <div className="single_item">
                                <Row>
                                    <Col lg={5}>
                                        <div className="img_single">
                                            <div>
                                                <div className="img_sin">
                                                    {/* <img src={get.thumbnail}></img> */}
                                                    <img src={get.images && get.images[selectimg]} />
                                                </div>

                                            </div>
                                            <div>
                                                {
                                                    get.images?.length > 0 && (
                                                        <div className="img_5">
                                                            {
                                                                get.images.map((item, index) => (
                                                                    // <img key={index} src={item} alt={`Image ${index + 1}`} className="img" onClick={()=>imgbtn(index)}></img>
                                                                    <img key={index} src={item} alt={`Image ${index + 1}`} className={`img ${index === selectimg ? 'selected' : ''}`}
                                                                        onClick={() => imgbtn(index)}></img>
                                                                ))
                                                            }
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={7}>
                                        <div className="main_single_item">
                                            <div className="praf home home_space">
                                                <span>Home</span>
                                                <i> <FaAngleRight></FaAngleRight> </i>
                                                <span>Computers</span>
                                                <i> <FaAngleRight></FaAngleRight> </i>
                                                <span>Computer PeriPherals</span>
                                            </div>
                                            <div>
                                                <p className="description des_color">{get.description}</p>
                                                <div className="rate">
                                                    <span className="p4">{get.rating}<i><IoIosStar></IoIosStar></i></span>
                                                    <p className="ms-2 rating"> Ratings & </p>
                                                    <p className="ms-2 rating">{get.stock} stock</p>
                                                </div>
                                                <p className="title_p pt-1">Special price</p>
                                                <div className="sing_price">
                                                    <span className="price">₹{get.price}</span>
                                                    <span className="strike_p">₹10,790</span>
                                                    <span className="dis">{get.discountPercentage}% OFF</span>
                                                </div>
                                                <p className="offer">Available offers</p>
                                                <ul className="extra_c">
                                                    <li><b>Bank Offer</b> 10% off on HDFC Bank Credit Card EMI Transactions, up to ₹1,250 on orders of ₹7,500 and above</li>
                                                    <li><b>Bank Offer</b> 10% off on Bank of Credit Card and EMI Transactions, up to ₹1500 on orders of ₹5000 and above</li>
                                                    <li><b>Bank Offer</b> 10% off on Canara Bank Credit Card Transactions, up to ₹1,500 on orders of ₹5,000 and above</li>
                                                    <li><b>Special Price</b> 10% off on HDFC Bank Card EMI Transactions, up to ₹1,250 on orders of ₹7,500 and above</li>
                                                </ul>
                                                <div>
                                                    <p className="pro">Product Description</p>
                                                    <div className="white_bg">
                                                        <p className="power">Powerful Processor</p>
                                                        <p className="this">This MSI laptop features AMD Ryzen processor so that you can maximise your productivity and creativity. Its sleek and stylish design makes it easy to carry and fits perfectly in your bag.</p>
                                                    </div>
                                                    <div className="white_bg">
                                                        <p className="power">Attractive Design</p>
                                                        <p className="this">This laptop has an attractive design so that you can stand out from the crowd wherever you go. It gives you access to advanced technology that makes life easy.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        )}
                </Container>
            </div>
        </div>
    );
}
export default Single_item;

