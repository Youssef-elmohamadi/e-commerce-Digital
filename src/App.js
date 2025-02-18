import { Routes, Route } from "react-router-dom";
import { ShopByCategoriesProvider } from "./components/ShopByCategoriesContext";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Shop from "./components/shop";
import Signup from "./components/Signup";
import Blogs from "./components/Blogs";
import { Provider } from "react-redux";
import store from "./components/Redux/Store";
import { PopupProvider } from "./components/CartPopupContext";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
function App() {
  return (
    <Provider store={store}>
      <ShopByCategoriesProvider>
        <PopupProvider>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </PopupProvider>
      </ShopByCategoriesProvider>
    </Provider>
  );
}

export default App;
