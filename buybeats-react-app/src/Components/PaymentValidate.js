import '../CSS/Payment.css'
import React from 'react';
import logo from '../Images/payment-logo.jpg';

import { useHistory } from 'react-router-dom';

const Payment = (props) => {
    const history = useHistory();

    const handlePayemnt = () => {
      alert("Your payment is successful");      
      history.push('/');
    }

    const redirect = () => {
      history.push('/thank');
    }

    return (
      <div className="payment" >
  
      
      <div className="container py-5 mt-4">
        
        <div className="row mb-4">
          <div className="col-lg-8 mx-auto text-center">
            
          </div>
        </div>

        <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card ">
          <div className="card-header">
          <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
          <div className="tab-content">
            <div className="tab-pane fade show active pt-3">

              <div className="container">
                <h4 align="center">Payment Form</h4>
                <br />

                <form onSubmit={handlePayemnt}>
                  <div className="row">
                    <div className="col-md-6">
                      <span><h6>CREDIT/DEBIT CARD</h6></span>
                    </div>
                    <div className="col-lg-6 text-right" style={{ marginTop: "-5px" }} >
                      
                      <img src={logo} height="40px" alt="Visa /MasterCard"/>
                    </div>
                  </div>
                  <br></br>
                  <div className="form-group">
                    <label for="cc-number" className="control-label">CARD NUMBER</label>
                    <input id="cc-number" type="mobile" className="form-control"
                     placeholder="•••• •••• •••• ••••" pattern="[0-9]{16}" max="16" required />
                  </div>
                  <br></br>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="cc-exp" className="control-label">CARD EXPIRY</label>
                        <input id="cc-exp" type="month" className="form-control" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group"> <label for="cc-cvc" className="control-label">CARD CVV</label>
                        <input id="cc-cvc" type="mobile" className="form-control" placeholder="•••"
                         pattern="[0-9]{3}" max="3" required />
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div className="form-group">
                    <label for="holder-name" className="control-label">CARD HOLDER NAME</label>
                    <input type="text" className="form-control" required pattern="[A-Za-z]{4,}" />
                  </div>
                  <br></br>
                  
                  <br></br>
                  <div className="card-footer">
                    <div className="col-md-12 text-center">
                      <button type="submit" className="subscribe btn btn-primary btn-block shadow-sm"> Make Payment </button>
                    </div>
                  </div>
                  
                </form>
              </div>

            </div>
            </div>
            </div>
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      
    );
}

export default Payment;
