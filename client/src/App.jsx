import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Login } from "./pages/login";
import { Signup } from "./pages/registration";
import { Error } from "./pages/error";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Signup/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
