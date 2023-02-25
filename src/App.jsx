import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./main.scss";
import NotFound from "./Pages/NotFound";
import SearchAnswer from "./Pages/SearchAnswer";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/answer-question/" element={<SearchAnswer />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
