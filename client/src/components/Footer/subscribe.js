import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdbreact';

const Subscribe = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="8">
          <form>
            <div className="grey-text">
              <MDBInput
                placeHolder="Your name"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
               placeHolder="Your email"
                group
                type="email"
                validate
                error="wrong"
                success="right"/>
                <button type="button" className="btn btn-success">Subscribe</button>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Subscribe;