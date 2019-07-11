// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";

function VendorForm(props){

    return (
        <div className="row">
          <div className="form-group mb-8">
            <label for="example-text">Product Name</label>
            <input type="text" {...props} id="example-text" className="form-control" aria-describedby="example-text"
              placeholder="Enter Product Name"></input>
          </div>
          <br />
          <div className="form-group mb-8">
            <label for="example-price">Product Price</label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">$</span>
              </div>
              <input type="text" {...props} className="form-control" id="example-price" placeholder="" required=""/>
              {/* <div className="invalid-feedback" style="width: 100%;">
                Your username is required.
              </div> */}
            </div>
           </div>
           <div className="form-group mb-8">
            <label for="example-quantity">Quantity</label>
            <input type="text" {...props}  id="example-quantity" className="form-control" aria-describedby="example-quantity"
              placeholder="Enter Product Quantity"/>
           </div>
          <div className="form-group mb-8">
            <label for="example-quantity">Product Image</label>
            <div className="input-group">
              <div className="custom-file">
                <input type="file" {...props}  className="custom-file-input" id="example-image"
                  aria-describedby="inputGroupFileAddon08"/>
                <label className="custom-file-label" for="inputGroupFile08">Choose file</label>
              </div>
            </div>
          </div>
        {/* //   <div className="form-groupmb-8">
        //     <label for="example-description">Product Description</label>
        //     <textarea className="form-control" id="example-description" aria-describedby="example-description"
        //       placeholder="Enter Product Description"></textarea>
        //   </div> */}
        <button type="submit" className="btn btn-primary">Submit</button>          </div>
    )

}

export default VendorForm;