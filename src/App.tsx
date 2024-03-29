import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Location from "./components/Location";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {

  return (
    <>
      <Navbar/>
      <div className="w-full mx-auto my-container ">
        <Home/>
        <Location/>
        <About/>
        <Footer/>
      </div>
    </>
  )
}

export default App
