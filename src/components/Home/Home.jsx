import "./Home.css"
import Navbar from "../Navbar/Navbar"
import Home1 from "./Home1"
import Features from "./Features"
// import Footer from "../Footer/Footer"
import Testmonials from "../Home/Testmonials"
import Faq from "../Home/Faq"


const Home = () => {
  return (
    <div className='Home'>
         <Navbar />
         <Home1 />
         <Testmonials />
         <Features />
         <Faq />
         {/* <Footer /> */}
    </div>
  )
}
export default Home