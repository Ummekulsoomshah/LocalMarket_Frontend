import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Home,
  Shop,
  Contact,
  Checkout,
  NotFoundPage,
  Header,
  Footer,
  SignupLogin,
} from "./pages/index";

import SellerDashboard from "./pages/SellerDashboard";
import AddProducts from "./pages/AddProduct";
import AddReview from "./pages/AddReview";
import Payment from "./pages/Payment";
import CatagoryAd from "./pages/CatagoryAd";
import Adminlogin from "./pages/Adminlogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdmincatagoryAdd from "./pages/AdmincatagoryAdd";
import ItemaddPage from "./pages/ItemaddPage";
import AboutPage from "./pages/AboutPage";
import ProductDisplay from "./pages/ProductDisplay";

import Chatbot from "./components/Chatbot"; 



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
         
          <Route path="/contact" element={<Contact />} />
          <Route path="/sellerdashboard" element={<SellerDashboard />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/addproducts" element={<AddProducts />} />
          <Route path="/addreview" element={<AddReview />} />
          
          <Route path="/payment" element={<Payment />} /> {/* Payment Route */}
          <Route path="/*" element={<NotFoundPage />} />
          <Route path='/CatagoryAd' element={<CatagoryAd/>}/>
          <Route path="/adminlogin" element={<Adminlogin/>}/>
          <Route path="AdminDashboard" element={<AdminDashboard/>}/>
          <Route path="/catagAddadmin" element={<AdmincatagoryAdd/>}/>
          <Route path="/add-product/:catagory" element={<ItemaddPage/>}/>
          <Route path="/ProductDisplay/:insertId" element={<ProductDisplay/>}/>

        <Route path="/SignupLogin" element={<SignupLogin />} />
        <Route path="/about" element={<AboutPage />} />
 
      </Routes>
      <Footer />
      
    </Router>
  );
}

export default App;
