import React from 'react'
import "./Home1.css"
import HomeImg from "../../assets/homeimg.jpg"

const Home1 = () => {
  return (
    <div className='Home1-main'>
          <div className="Home1">
                   <div className="Home1-left">
                       <h5>Welcome To Sainta</h5>
                       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos expedita blanditiis autem odio, sit magni laborum temporibus delectus doloremque aspernatur magnam voluptatem.</p>
                       <div className="home1-btns">
                              <button className='learn-btn'>
                                   Learn More     
                              </button>
                              <button className='join-btn'>
                                     Join Us
                              </button>
                       </div>
                    </div> 
                    <div className="Home1-right">
                             <img src={HomeImg} alt="" /> 
                    </div>  
          </div> 
    </div>
  )
}

export default Home1