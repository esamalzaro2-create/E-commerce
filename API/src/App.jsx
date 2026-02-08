import TopHeader from "./Components/header/TopHeader";
import BtmHeader from "./Components/header/BtmHeader";
import Home from "./page/Home/Home";
import { Route, Routes } from "react-router-dom";
import PDetails from "./page/PDetails/PDetails";
import Cart from "./page/cart/Cart";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./Components/slideProduct/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import CategoryPage from "./page/Category/CategoryPage";

function App() {
  return (
    <>
      <header>
        <TopHeader />
        <BtmHeader />
      </header>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "e9e9e9",
            borderRadius: "5px",
            padding: "14px",
          },
        }}
      />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<PDetails />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
