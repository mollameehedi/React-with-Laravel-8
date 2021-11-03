import React from "react";
import Contact from "./Home/Contact";

const Home = () =>{
    return(
        <div>
            <section id="index-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3>We are a London based Medical Technology startup focusing on prevention and management of chronic respiratory diseases.</h3>
          </div>
        </div>
      </div>
    </section>

    <section id="management">
        <div className="copd-Content">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <h3>A breath of fresh air.</h3>
                    <h2>COPD Management Platform</h2>
                    <p className="p12">The Sree Platform is an intelligent system comprising hardware and software for the management and prevention of Chronic Obstructive Pulmonary Disease (COPD).
                   </p>
                   <br/>
                   <p className="p12">
                      The platform provides easy readout and reporting, a community for socialising with experts and other people managing COPD, a doctor - both human and AI-backed, providing prompt responses to COPD management queries, interactive digital consultations and much more still.</p>
                  </div>
                </div>
              </div>
        </div>
        <div className="copd-video">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="video-img">
                  {/* <img src="images/videoimg.png" className="img-fluid" alt="videoimg.png"> */}
                  <a className="venobox" data-autoplay="true" data-vbtype="video" href="https://youtu.be/WOwwlzwJBro"> <i className="fas fa-play-circle"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
        </div>
    )
}

export default Home;