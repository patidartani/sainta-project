import "./Home1.css"
import HomeImg from "../../assets/home_banner.png"

const Home1 = () => {
  return (
    <div className='Home1-main'>
      <div className="Home1">
        <div className="Home1-left">
          <h5>サインタで業務の最適化を実現</h5>
          <p>あなたのビジネスに合わせたカスタマイズ可能なERPソリューションで、効率と顧客満足を同時に向上させます。</p>
          <div className="home1-btns">
            <button className='learn-btn'>
              すぐに始める
            </button>
            <button className='join-btn'>
              資料請求
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