import axios from "axios";
import { post } from "jquery";
import React, {Component} from "react";
import { Route } from "react-router";

class Contact extends Component {
    state = {
        name: '',
        workTitle: '',
        email: '',
        message: '',
        alertShow: false,
        alertMess: null
    }
    inputChangeHandler = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    submitHandler = e =>{
        e.preventDefault();
        axios.post('addcontact',this.state)
        .then(resposne => {
            console.log(resposne);
            if (resposne.status === 200) {
                this.setState({
                    alertShow:true,
                    alertMess: 'Your message has been submitted! We’ll get back to you soon.',
                    name: '',
                    workTitle: '',
                    email: '',
                    message: '',
                })
                setTimeout(() => {
                    this.setState({
                        alertShow:false
                    })
                }, 2000);
            }
        })
    }
    render() {
        let alert = (
            <div className="lert-success">
                        <i className="fas fa-check"></i>
                        <p>Your message has been submitted!
                          We’ll get back to you soon.</p>
                    </div>
        );
        return(
            <div>
                <section id="contact-banner"> 
                 <div className="container">
                     <div className="row">
                         <div className="col-lg-12">
                             <h3>Contact Info</h3>
                             <ol>
                                 <li>34A Frithville Gardens, London, W12 7JN</li>
                                 <li>+44 7491265055</li>
                                 <li>support@biostealth.ai</li>
                             </ol>
                         </div>
                     </div>
                 </div>
                </section>

                <section id="contact-form">
                <div className="container">
                <div className="row m-0 pl-5 pr-5">
                    <div className="col-lg-10 offset-lg-1">
                      {this.state.alertShow? alert:<div></div>}
                    <form onSubmit={e => this.submitHandler(e)}>
                       <h3>Contact Us</h3>
                      <input type="text" placeholder="Name" name='name' value={this.state.name} className="form-control" onChange={e => this.inputChangeHandler(e)}/>
                      <input type="text" placeholder="Company/Work Title" name="workTitle" value={this.state.workTitle} className="form-control" onChange={e => this.inputChangeHandler(e)}/>
                      <input type="email" placeholder="Email" name="email" value={this.state.email} className="form-control" onChange={e => this.inputChangeHandler(e)}/>
                      <textarea name="message" placeholder="Message" id="" value={this.state.message} cols="30" onChange={e => this.inputChangeHandler(e)} rows="8" className="form-control"></textarea>
                      <button className="btn">Submit</button>
                  </form>
                    </div>
                </div>
            </div>
                </section>
            </div>
        )
    }
}

export default Contact;