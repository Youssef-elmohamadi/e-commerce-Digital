import { Routes, Route } from "react-router-dom";
import ShopByCategoriesContext, {
  ShopByCategoriesProvider,
} from "./components/ShopByCategoriesContext";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Signup from "./components/Signup";

function App() {
  return (
    <ShopByCategoriesProvider>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Signup />
            </>
          }
        />
      </Routes>
    </ShopByCategoriesProvider>
  );
}

export default App;
