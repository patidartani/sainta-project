import "./Features.css"
import Feature1 from "../../assets/feature1.jpeg"
import Feature2 from "../../assets/feature2.jpeg"
import Feature3 from "../../assets/feature3.jpeg"
import Feature4 from "../../assets/feature4.jpeg"
import Feature5 from "../../assets/feature5.jpeg"

const Features = () => {
  return (
    <div className='Features-main'>
    <div className="features-page">
                  
                  <div className="features-header">
                        <h6>FEATURES</h6>
                        <h4>Key features of the product</h4>
                        <p>It will be a simple as occidental in fact, it will be Occidental.</p>
                  </div>

                  <div className="features-bottom">
                             <div className="feature1">
                                <div className="f-left">
                                    <img src={Feature1} alt="" />
                                </div>
                                <div className="f-right">
                                    <h6>Welcome to Feature one</h6>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti amet quisquam nisi cum placeat, harum quasi eveniet unde ea aliquid! Rerum ipsum labore incidunt cumque fuga hic architecto. Voluptas corporis voluptatem molestiae similique. Quibusdam magnam possimus doloremque excepturi animi error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, odit. </p>
                                </div>
                             </div>

                             <div  className="feature2">
                                <div className="f-left">
                                    <img src={Feature2} alt="" />
                                </div>
                                <div className="f-right">
                                    <h6>Welcome to Feature Two</h6>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti amet quisquam nisi cum placeat, harum quasi eveniet unde ea aliquid! Rerum ipsum labore incidunt cumque fuga hic architecto. Voluptas corporis voluptatem molestiae similique. Quibusdam magnam possimus doloremque excepturi animi error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, odit. </p>
                                </div>
                             </div>

                             <div className="feature1">
                                <div className="f-left">
                                    <img src={Feature3} alt="" />
                                </div>
                                <div className="f-right">
                                    <h6>Welcome to Feature Three</h6>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti amet quisquam nisi cum placeat, harum quasi eveniet unde ea aliquid! Rerum ipsum labore incidunt cumque fuga hic architecto. Voluptas corporis voluptatem molestiae similique. Quibusdam magnam possimus doloremque excepturi animi error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, odit. </p>
                                </div>
                             </div>

                             <div  className="feature2">
                                <div className="f-left">
                                    <img src={Feature4} alt="" />
                                </div>
                                <div className="f-right">
                                    <h6>Welcome to Feature Four</h6>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti amet quisquam nisi cum placeat, harum quasi eveniet unde ea aliquid! Rerum ipsum labore incidunt cumque fuga hic architecto. Voluptas corporis voluptatem molestiae similique. Quibusdam magnam possimus doloremque excepturi animi error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, odit. </p>
                                </div>
                             </div>

                             <div className="feature1">
                                <div className="f-left">
                                    <img src={Feature5} alt="" />
                                </div>
                                <div className="f-right">
                                    <h6>Welcome to Feature Five</h6>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti amet quisquam nisi cum placeat, harum quasi eveniet unde ea aliquid! Rerum ipsum labore incidunt cumque fuga hic architecto. Voluptas corporis voluptatem molestiae similique. Quibusdam magnam possimus doloremque excepturi animi error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, odit. </p>
                                </div>
                             </div>

                  </div>

</div>
</div>
  )
}

export default Features