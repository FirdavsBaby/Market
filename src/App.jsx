import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./main.scss";
import NotFound from "./Pages/NotFound";
import More from "./Pages/More";
import CartPage from "./Pages/CartPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/more/:title" element={<More />} />
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
