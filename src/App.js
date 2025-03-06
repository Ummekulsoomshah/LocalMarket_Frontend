

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Home,
  Shop,
  Cart,
  Contact,
  Checkout,
  NotFoundPage,
  Header,
  Footer,
  Login,
  Signup,
} from "./pages/index";
import LoginSignupPage from "./components/loginSignup";
import SellerDashboard from "./pages/SellerDashboard";
import AddProducts from "./pages/AddProduct";
import AddReview from "./pages/AddReview";
import Payment from "./pages/Payment"; // New Payment Page
import CatagoryAd from "./pages/CatagoryAd";
import Adminlogin from "./pages/Adminlogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdmincatagoryAdd from "./pages/AdmincatagoryAdd";
import ItemaddPage from "./pages/ItemaddPage";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sellerdashboard" element={<SellerDashboard />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/addproducts" element={<AddProducts />} />
          <Route path="/addreview" element={<AddReview />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/payment" element={<Payment />} /> {/* Payment Route */}
          <Route path="/*" element={<NotFoundPage />} />
          <Route path='CatagoryAd' element={<CatagoryAd/>}/>
          <Route path="/adminlogin" element={<Adminlogin/>}/>
          <Route path="AdminDashboard" element={<AdminDashboard/>}/>
          <Route path="/catagAddadmin" element={<AdmincatagoryAdd/>}/>
          <Route path="/add-product/:catagory" element={<ItemaddPage/>}/>
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
