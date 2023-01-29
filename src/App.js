import "./App.css";
// import "./components/login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// login
import Login from "./components/Login"
// Home
import Home from "./components/Home"





function App() {
  
  return (
    <Router>
      <Routes>
        {/* login */}
        <Route path='/' element={<Login />} />
        {/* home */}
      <Route path='/home' element={<Home />} />
    
      </Routes>
    </Router>
  );
}

export default App;
