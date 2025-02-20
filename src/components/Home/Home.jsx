import "./Home.css"
import Navbar from "../Navbar/Navbar"
import Home1 from "./Home1"
// import Footer from "../Footer/Footer"

const Home = () => {
  return (
    <div className='Home'>
         <Navbar />
         <Home1 />
         {/* <Footer /> */}
    </div>
  )
}
export default Home