import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { LiaGreaterThanSolid } from "react-icons/lia";
import axios from 'axios';
import { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import Spinner from 'react-bootstrap/Spinner';
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { cartdata, storeData } from "./app/reducer/CartSlice";

function Main_page() {

    let [get, setget] = useState([]);
    let [get1, setget1] = useState([]);
    let [loader, setloader] = useState(true);
    let [searchbar, setsearchbar] = useState('');
    let [reset, setreset] = useState([]);

    const Searchbtn = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/search?q=${searchbar}`);
            setget1(response.data.products);
        } catch (error) {
            setget1("Error fetching search results:", error);
        }
        setsearchbar("");
    }

    const allbtn = () => {
        setget1(reset);
        console.log("one=",setget1);
    }

    const catbtn = (item) => {
        var demo = get1.filter((ele, index) => {
            return ele.category.toLowerCase() === item.toLowerCase();
        })
        setget1(demo);
    }

    // const catbtn = async (item) => {
    //     try {
    //         const response = await axios.get(`https://dummyjson.com/products/category/${item}`);
    //         setget1(response.data.products);
    //     } catch (error) {
    //         console.error("Error fetching category products:", error);
    //     }
    // }

    const dispatch = useDispatch();

    const btnadd = (ele) => {
        dispatch(cartdata(ele));
    }

    const item_pre = useSelector((state) => state.counter.item_pre);

    const categories = useSelector(state=>state.counter.data.categories);
    const products = useSelector(state=>state.counter.data.products);


    useEffect(() => {
        axios.get('https://dummyjson.com/products/category-list')
            .then(function (response) {
                console.log("Categories data:", response.data);
                setget(response.data);
                dispatch(storeData({url:'categories',data:response.data}));
                setloader(false);
            })
            .catch(function (error) {
                console.log(error);
                setloader(false);
            })

        axios.get('https://dummyjson.com/products?limit=100&skip=0')
            .then(function (response) {
                setget1(response.data.products);
                dispatch(storeData({url:'products',data:response.data.products}));
                setreset(response.data.products);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    return (
        <div>
            <div>
                <Navbar expand="lg" className="bg_h fixed-top">
                    <Container>
                        <Navbar.Brand href="#home">
                            <div className='img_logo'>
                                <img src={require('./image/f_logo.png')} className='img'></img>
                            </div>
                            <div className='d-flex'>
                                <p className='Explore'>Explore</p>
                                <p className='Plus'> Plus<img src={require('./image/2_logo.png')}></img></p>
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="m-auto">
                                <div className='h_input'>
                                    <input type='text' value={searchbar} onChange={(e) => { setsearchbar(e.target.value) }} placeholder='Search for products, brands and more'size={90}></input>
                                    <i className='h_icon'><FaSearch></FaSearch></i>
                                </div>
                                <div>
                                    <input type='button' value={"Search"} className='h_btn' onClick={() => Searchbtn()}></input>
                                    <input type="button" value={"ALL"} className="h_btn" onClick={() => allbtn()}></input>
                                </div>
                                <div className='cart'>
                                    <i><FaShoppingCart></FaShoppingCart></i>
                                    <Link to="/cart">
                                        <p className="h_cart">Cart({item_pre})</p>
                                    </Link>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className="main_side_c">
                {
                    loader ? (
                        <div className="center_load">
                            <Spinner animation="border" className="text-center" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    ) : (
                        <Container fluid>
                            <Row className="g-0">
                                <Col lg={2}>

                                    <div className="img1_main sticky-category">
                                        <div className="one">
                                            <div className="img1">
                                                <img src={require('./image/img1.png')}></img>
                                            </div>
                                            <div className="con_img1">
                                                <p className="USB">USB Gadgets</p>
                                                <p className="up">Up to 80% Off,Sale Is Live<i><LiaGreaterThanSolid></LiaGreaterThanSolid></i></p>
                                            </div>
                                        </div>
                                        <div className="two">
                                            <p className="CATEGORIES">CATEGORIES</p>
                                            <div className="cat_main">
                                                {
                                                    get.map((item, index) => {
                                                        return (
                                                            <p key={index} className="cat" onClick={() =>
                                                                catbtn(item)}><i><FaAngleLeft></FaAngleLeft></i>{item}</p>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={10}>
                                    <div className="main">
                                        <div className="praf home">
                                            <span>Home</span>
                                            <i> <FaAngleRight></FaAngleRight> </i>
                                            <span>Computers</span>
                                            <i> <FaAngleRight></FaAngleRight> </i>
                                            <span>Computer PeriPherals</span>
                                        </div>
                                        <div>
                                            <p className="praf py-2">A projector has become a necessity in schools, at home, or in an office. You can browse through the various compact and smart-looking products that are available online. There are certain features that you must definitely check out and compare before making a studied choice. You need to choose between a DLP (Digital Light Processing), LCD (Liquid Crystal Display), and LED. You also need to check out the light source for the piece, whether a lamp, LED, or laser. The light output of a projector also needs to be considered. Also to be kept in mind are the contrast ratio, pixel density, and resolution. If you require portability, that is another feature you must check out before making a purchase. Some of the available brands include Livato, Boss, Zebronics, ZuZu, Borsso, and more. They are esteem quality products from trusted brands that ensure your experience becomes smoother. You can also read user reviews and check ratings to make a well-informed decision. You can shop for the right model of the product that you require. Make the payment for the same from the convenience of your home through secure gateways and get delivery at a location of your choice</p>
                                            {/* <p>Projectors<span>(Showing 1 – 8 products of 8 products)</span></p> */}
                                        </div>
                                        <div className="main_product">
                                            <div>
                                                {
                                                    get1.map((item, index) => {
                                                        return (
                                                            <div key={index} className="main_item">
                                                                <div className="img_item">
                                                                    <img src={item.images[0]} className="img" loading="lazy"></img>
                                                                </div>
                                                                <div className="item_c">
                                                                    <p className="description">{item.description}</p>
                                                                    <div className="rate">
                                                                        <span className="p4">{item.rating}<i><IoIosStar></IoIosStar></i></span>
                                                                        <p className="ms-2 rating"> Ratings & </p>
                                                                        <p className="ms-2 rating">{item.stock} stock</p>
                                                                        <p className="ms-2 rating">{item.title} stock</p>
                                                                    </div>
                                                                    <p className="title_p pt-1">Special price</p>
                                                                    <div>
                                                                        <span className="price">₹{item.price}</span>
                                                                        <span className="strike_p">₹ {(item.price * item.discountPercentage / 100 + item.price).toFixed(0)}</span>
                                                                        <span className="dis">{item.discountPercentage}% OFF</span>
                                                                    </div>
                                                                    <input type="button" className="addbtn addbtn_c" value={"ADD TO CART"} onClick={() => btnadd(item)}></input>
                                                                    <Link key={index} to={`/single_item/${item.id}`} target="_blank">
                                                                        <input type="button" className="addbtn addbtn_c" value={"VIEW DETAILS"}></input></Link>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    )}
            </div>
        </div>
    )
}

export default Main_page;
