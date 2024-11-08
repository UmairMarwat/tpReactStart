import Navbar from "./components/Navbar";
import About from "./pages/About";
import Services from "./pages/services";
import ContactUs from "./pages/contactus";
import Home from "./pages/Home"
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"




function App() {
  return (
  //  <>
  //  {/* <Navbar />
  //  <Home />  */}
   
  //  </>
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contactus" element={<ContactUs />} />
    </Routes>
  </Router>
  );
}

export default App;
