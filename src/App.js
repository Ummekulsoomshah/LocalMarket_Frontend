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
import CategoryAd from "./pages/CategoryAd";
import Adminlogin from "./pages/Adminlogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdmincategoryAdd from "./pages/AdmincategoryAdd";
import ItemaddPage from "./pages/ItemaddPage";
import AboutPage from "./pages/AboutPage";
import Chatbot from "./components/Chatbot"; 
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
    
        <Route path="/payment/success" element={<Success />} />
        <Route path="/payment/cancel" element={<Cancel />} />
       
           
        <Route path="/contact" element={<Contact />} />
        <Route path="/sellerdashboard" element={<SellerDashboard />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/addProducts" element={<AddProducts />} />
        <Route path="/addreview" element={<AddReview />} />
        <Route path="/SignupLogin" element={<SignupLogin />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/productdetails/:prodId" element={<ProductDetails />} />
        <Route path="/add-product/:categoryName/:categoryId" element={<AddProducts />} />
        <Route path="/CategoryAd" element={<CategoryAd />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/categAddadmin" element={<AdmincategoryAdd />} />
        {/* <Route path="/add-product/:category" element={<ItemaddPage />} /> */}
        <Route path="/*" element={<NotFoundPage />} /> 
      </Routes>
      <Footer />
      
    </Router>
  );
}

export default App;
