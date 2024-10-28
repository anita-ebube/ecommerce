import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Page/Home";
import MobileNavBar from "./Components/MobileNav";
import NavBar from "./Components/Navbar";
import Cart from "./Components/Cart.jsx";
import Contact from "./Page/ContactUs";
import Signup from "./Page/SignUp";
import Shop from "./Page/OurShop";
// import LogIn from "./Page/LogIn";
import Footer from "./Components/Footer.jsx";
// import Account from "./Page/Account";
import Product from "./Page/Products";
import CheckOut from "./Page/CheckOut";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./Components/Store";
import { useEffect, useState } from "react";
import { auth } from "./Components/firebase";

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <Provider store={store}>
      <div className="font-Afacad">
        <Router>
          <NavBar />
          <MobileNavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/shop" element={<Shop />} />
            {/* <Route path="/login" element={<LogIn />} /> */}
            {/* <Route path="/account" element={<Account />} /> */}
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
          <ToastContainer />
          <Footer />
        </Router>
      </div>
    </Provider>
  );
};

export default App;
