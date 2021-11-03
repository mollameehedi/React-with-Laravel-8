import React from "react";

const Employee = () =>{
    return(
        <div>
                <section id="employee_wellness">
        <div className="copd-Content">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <h3>Know every pulse.</h3>
                    <h2>Employee Wellness Platform</h2>
                    <p className="p12">The Sree Employee Wellness platform enables physiological tracking and provides a comprehensive Physio interface for visualising health insights and reports. Additionally, it facilitates online therapy sessions through the Talk interface for pre-booked and on-demand digital consultations.</p>
                  </div>
                </div>
              </div>
        </div>
        <div className="copd-video">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="video-img">
                  {/* <img src="images/employee_video.png" className="img-fluid" alt="videoimg.png"> */}
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

export default Employee;