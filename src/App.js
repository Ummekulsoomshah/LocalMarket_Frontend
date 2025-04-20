

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Home,
  Shop,
  Cart,
  Contact,
 
  NotFoundPage,
  Header,
  Footer,
  Login,
 
} from "./pages/index";
import SellerDashboard from "./pages/SellerDashboard";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel"
import AddProducts from "./pages/AddProduct";
import AddReview from "./pages/AddReview";
import CatagoryAd from "./pages/CatagoryAd";
import Adminlogin from "./pages/Adminlogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdmincatagoryAdd from "./pages/AdmincatagoryAdd";
import ItemaddPage from "./pages/ItemaddPage";
import ProductDisplay from "./pages/ProductDisplay";
import SpecificCategoryProduct from "./pages/SpecificCategoryProduct";
import ProductDetails from "./pages/ProductDetails";
import {ToastContainer ,toast} from 'react-toastify'
import Signup from './pages/Signup'
function App() {
  return (
    <div>
      <ToastContainer />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sellerdashboard" element={<SellerDashboard />} />
          <Route path="/addproducts" element={<AddProducts />} />
          <Route path="/addreview" element={<AddReview />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/*" element={<NotFoundPage />} />
          <Route path='/CatagoryAd' element={<CatagoryAd/>}/>
          <Route path="/adminlogin" element={<Adminlogin/>}/>
          <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
          <Route path="/catagAddadmin" element={<AdmincatagoryAdd/>}/>
          <Route path="/add-product/:catagory/:categId" element={<ItemaddPage/>}/>
          <Route path="/ProductDisplay/:insertId" element={<ProductDisplay/>}/>
          <Route path="/ProductDetails/:prodId" element={<ProductDetails/>}/>
          <Route path='/SpecificCategoryProduct/:categId' element={<SpecificCategoryProduct/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='/cancel' element={<Cancel/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
