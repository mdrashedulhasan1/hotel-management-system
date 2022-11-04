import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import SingleRooms from './Pages/SingleRooms/SingleRooms';
import DoubleRooms from './Pages/DoubleRooms/DoubleRooms';
import Header from './Pages/Header/Header';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="about" element={<About></About>} />
        <Route path="single-room" element={<SingleRooms></SingleRooms>} />
        <Route path="double-room" element={<DoubleRooms></DoubleRooms>} />
      </Routes>
    </div>
  );
}

export default App;
