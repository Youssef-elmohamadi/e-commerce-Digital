import { Routes, Route } from "react-router-dom";
import ShopByCategoriesContext, {
  ShopByCategoriesProvider,
} from "./components/ShopByCategoriesContext";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import NewArrivals from "./components/NewArrivals";

function App() {
  return (
    <ShopByCategoriesProvider>
      <Navigation />
      <Routes>
        <Route path="/" element={<><Home /> <NewArrivals /></>} />
      </Routes>
    </ShopByCategoriesProvider>
  );
}

export default App;
