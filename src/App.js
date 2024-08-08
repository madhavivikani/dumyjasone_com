import logo from './logo.svg';
import './App.css';
// import Top_header from './Top_header';
import Main_page from './Main_page';
import { Routes, Route } from "react-router-dom"
import Single_item from './Single_item';
import Cart from './Cart';
import Place_holder from './Place_holder';

function App() {
  return (
    <div className="App">
      {/* <Top_header/> */}
      
      <Routes>
        <Route path="/" element={ <Main_page/> } />
        <Route path="/main_page" element={ <Main_page/> } />
        <Route path="/single_item/:id" element={ <Single_item/> } />
        <Route path="/cart" element={ <Cart/> } />
        <Route path="/place_holder" element={ <Place_holder    /> } />
      </Routes>
    </div>
  );
}

export default App;

