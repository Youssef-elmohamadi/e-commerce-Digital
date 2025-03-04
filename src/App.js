import { Routes, Route } from "react-router-dom";
import { ShopByCategoriesProvider } from "./components/ShopByCategoriesContext";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Shop from "./components/shop";
import Blogs from "./components/Blogs";
import { Provider } from "react-redux";
import store from "./components/Redux/Store";
import { PopupProvider } from "./components/CartPopupContext";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Register from "./components/Register";
import Login from "./components/Login";
import ProductDetails from "./components/ProductDetails";
import WishList from "./components/WishList";
import Profile from "./components/Profile";
import Account from "./components/Account";
import Cart from "./components/Cart";
function App() {
  return (
    <Provider store={store}>
      <ShopByCategoriesProvider>
        <PopupProvider>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/profile" element={<Profile />}>
              <Route path="/profile/account" element={<Account />} />
              <Route path="/profile/wishlist" element={<WishList />} />
              <Route path="/profile/orders" element={<Cart />} />
            </Route>
          </Routes>
        </PopupProvider>
      </ShopByCategoriesProvider>
    </Provider>
  );
}

export default App;
