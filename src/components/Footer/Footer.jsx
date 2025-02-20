import React from 'react'
import "./Footer.css"
import mainLogo from '../../assets/black1.png';


const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
<div className='Footer-main'>
<div className="footer-page">
{/* ------------------------------------------------------------ */}
              <div className="fLeft">
              <div className="footer-one">
              <h4><img src={mainLogo} alt="" /></h4>
              <div className="f-btm">
                   <p>Sainta, our mission is to provide top-notch services that add value to the lives of our customers.</p> 
                   <div className="social-media">
    <small>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-youtube-line"></i>
        </a>
    </small>
    <small>
    <a href="https://wa.me/918817507815" target="_blank" rel="noopener noreferrer"> 
    <i className="ri-whatsapp-line"></i>
</a>

    </small>
    <small>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-instagram-line"></i>
        </a>
    </small>
    <small>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-facebook-circle-line"></i>
        </a>
    </small>
</div>

              </div>
               </div>


               <div className="footer-one" id='res' style={{marginTop:"2vmax"}}>
           <h5>Loans</h5>
           <div className="f-btm">
                  <a href="/loan"><i className="ri-arrow-right-s-fill"></i> Home Loan</a>  
                  <a href="/loan"><i className="ri-arrow-right-s-fill"></i>Personal Loan</a>  
                  <a href="/loan"><i className="ri-arrow-right-s-fill"></i>Business Loan</a>  
                  <a href="/loan"><i className="ri-arrow-right-s-fill"></i>Overdraft Loan</a>  
           </div>
           </div>
        
         
              </div>
            <div className="fRight">
           
            <div className="footer-one" style={{marginTop:"2vmax"}}>
           <h5>Home</h5>
           <div className="f-btm">
                  <a href="/"><i className="ri-arrow-right-s-fill"></i> Home</a>  
                  <a href="/"><i className="ri-arrow-right-s-fill"></i> Services</a>  
                  <a href="/"><i className="ri-arrow-right-s-fill"></i> Contact Us</a>   
           </div>
           </div>

           <div className="footer-one" id='cnt' style={{marginTop:"2vmax"}}>
           <h5>Contact</h5>
           <div className="f-btm">
    {/* Email Link */}
    <a href="mailto:info@therightway.in">
        <span><i className="ri-mail-line"></i> info@sainta.com </span>
    </a>

    <a href="https://www.google.com/maps?q=27A+CHANDRA+NA" target="_blank" rel="noopener noreferrer">
        <span><i className="ri-map-pin-line"></i> 27A CHANDRA NA</span>
    </a>

    <a href="tel:+918817507815">
        <span><i className="ri-phone-line"></i>+91 88175 07815</span>
    </a>
</div>


         </div>

            </div>

{/* ------------------------------------------------------------ */}
</div>
<div className="f-last">
      <p>
        ©  {currentYear} <a style={{textDecoration:"none", color:"rgb(254, 155, 41)"}} href="/">Sainta</a>   All Rights Reserved
      </p>
    </div>
</div>
  )
}

export default Footer