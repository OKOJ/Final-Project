import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBtn, MDBBtnGroup, MDBIcon } from "mdbreact";
import Footer from '../components/Footer/footer'

const Team = () => {
  return (
    <MDBCard className="pb-4 text-center">
      <MDBCardBody style={{margin:'0',height:'auto', paddingTop:'0'}}>
     
        <h2 className="h1-responsive font-weight-bold mb-0 mt-0 pt-0"> 
        <MDBBtn style={{position:'fixed', left:'0', margin:'20px'}} outline color="warning" href="/">Home</MDBBtn>
        <svg xmlns="http://www.w3.org/2500/svg" x="0px" y="0px" width="60" height="350" viewBox="0 0 192 192"
            style={{fill:'rgb(14, 13, 13)'}}>
            <g transform="translate(38.4,38.4) scale(0.6,0.6)">
              <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="none" strokeLinecap="butt"
                strokeLinejoin="miter" strokeliterlimit="10" strokeDasharray="" strokeDashoffset="0"
                fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"
                style={{mixBlendMode:' normal'}}>
                <path d="M0,192v-192h192v192z" fill="none" stroke="none" strokeWidth="1"></path>
                <g fill="#000000" stroke="none" strokeWidth="1">
                  <g id="surface1">
                    <path
                      d="M123.25,0c-3.1875,0 -5.5625,2.5 -8.75,6.5c-3.1875,4 5.5625,9.4375 4.75,18.25c4.8125,-4.8125 6.34375,-11.25 4.75,-19.25c4.8125,8.8125 6.40625,16.15625 0,21.75c-4,8.8125 -0.6875,18.3125 2.5,25.5c3.1875,8 6.3125,8.75 9.5,20.75c1.59375,7.1875 4,20.1875 12,21c0,2.40625 4,1.5 4,1.5c0,0 2.375,0.53125 3.5,-0.25c-1.34375,2.375 -3.28125,3.9375 -6,4.25c-17.59375,3.1875 -20.75,-12.6875 -24.75,-25.5c-3.1875,-10.40625 -12.8125,-18.5625 -12,-37.75c-9.59375,9.59375 -16.8125,11.25 -28,11.25c-9.59375,0 -29.5,-8 -41.5,-8c-6.84375,0 -12,1.46875 -16,4c-6.46875,-4.21875 -11.25,-11.40625 -11.25,-20c0.0625,-2.46875 -1.03125,-4.8125 -2.9375,-6.375c-1.875,-1.5625 -4.40626,-2.15625 -6.8125,-1.625c-3.71875,0.84375 -6.34375,4.1875 -6.25,8c0,14.0625 7.1875,25.9375 17.5,33c-1.125,3.6875 -1.5,7.59375 -1.5,11.75c0,28.8125 3.90625,50.4375 -2.5,67.25l0.25,0.5c-0.78125,1.40625 -1.53125,2.84375 -2.25,4.25c-1.6875,3.3125 -3.5,6.59375 -3.5,11.25c0,7.875 2.8125,14.46875 4.25,21c0,0.09375 0,0.15625 0,0.25c0.8125,3.1875 1.5625,6.375 2.75,9.5c0.59375,1.5625 1.21875,3.28125 2.5,5c1.28125,1.71875 3.84375,4.25 8,4.25c3.59375,0.09375 6.8125,-2.21875 7.875,-5.65625c1.03125,-3.4375 -0.34375,-7.15625 -3.375,-9.09375c-0.59375,-1.625 -1.46875,-4.65625 -2.25,-7.75c-0.03125,-0.09375 0.03125,-0.15625 0,-0.25c-1.71875,-7.71875 -3.75,-13.96875 -3.75,-17.25c12,-22.40625 22.34375,-27.25 28.75,-35.25c1.59375,2.40625 1.6875,9.5625 -1.5,16.75c-1.59375,3.09375 -3.25,6.15625 -3.25,10.5c0,7.875 2.8125,14.46875 4.25,21c0,0.09375 0,0.15625 0,0.25c0.8125,3.1875 1.5625,6.375 2.75,9.5c0.59375,1.5625 1.21875,3.28125 2.5,5c1.28125,1.71875 3.84375,4.25 8,4.25c3.59375,0.09375 6.8125,-2.21875 7.875,-5.65625c1.03125,-3.4375 -0.34375,-7.15625 -3.375,-9.09375c-0.59375,-1.625 -1.46875,-4.65625 -2.25,-7.75c-0.03125,-0.09375 0.03125,-0.15625 0,-0.25c-1.71875,-7.71875 -3.75,-13.96875 -3.75,-17.25c0,0.65625 0.1875,-1.1875 1.5,-3.75c1.03125,-2 2.625,-4.75 4.25,-7.5c6.625,-8.75 16.15625,-14.34375 18.25,-26.25c24,0.8125 23.25,16.75 23.25,60.75l0.75,0.25v12.5c0,4.65625 3.59375,9.28125 6.5,10.75c2.90625,1.46875 5.5,1.25 5.5,1.25c3.65625,0.0625 6.90625,-2.40625 7.84375,-5.9375c0.96875,-3.5625 -0.625,-7.28126 -3.84375,-9.0625v-25c1.53125,-21.375 5.40625,-38.5 12,-38.5c1.59375,0 3.25,10.5 3.25,58.5c0,1.3125 0.3125,2.34375 0.75,3.25v4.75c0,4.65625 3.59375,9.28125 6.5,10.75c2.90625,1.46875 5.5,1.25 5.5,1.25c3.65625,0.0625 6.90625,-2.40625 7.84375,-5.9375c0.96875,-3.5625 -0.625,-7.28126 -3.84375,-9.0625v-24c2,-26.6875 7.25,-41.625 7.25,-61.75c0,-3.09375 -0.3125,-7.1875 -0.75,-11.5c0.5625,-2.21875 1.09375,-4.4375 1.5,-6.25c2.40625,-12 5.5,-13.5625 9.5,-20.75c3.1875,-7.1875 6.5,-15.90625 2.5,-25.5c-6.40625,-5.59375 -4,-12.9375 0,-21.75c-1.59375,8 -0.0625,14.4375 4.75,19.25c-0.8125,-8.8125 7.9375,-13.5 4.75,-17.5c-3.1875,-4.8125 -5.5625,-7.25 -8.75,-7.25c-8.8125,0 -16.75,17.5 -16.75,17.5c-4,-0.8125 -9.59375,-1.5 -12,-1.5c-2.40625,0 -8,-0.09375 -12,1.5c0,0 -7.9375,-17.5 -16.75,-17.5z">
                    </path>
                  </g>
                </g>
                <g fill="#000000" stroke="none" strokeWidth="1">
                  <path
                    d="M14.43976,180.42571h6.5v33.35c-0.02667,4.62667 -1.48333,8.41 -4.37,11.35c-2.88,2.94667 -6.79333,4.6 -11.74,4.96v0l-1.72,0.06c-5.36667,0 -9.64333,-1.44667 -12.83,-4.34c-3.19333,-2.9 -4.81,-6.88667 -4.85,-11.96v0v-33.42h6.4v33.22c0,3.54667 0.97667,6.30333 2.93,8.27c1.95333,1.96 4.73667,2.94 8.35,2.94v0c3.66667,0 6.47,-0.97667 8.41,-2.93c1.94667,-1.95333 2.92,-4.70333 2.92,-8.25v0zM68.84976,180.42571v49.05h-6.51l-24.69,-37.8v37.8h-6.5v-49.05h6.5l24.76,37.97v-37.97zM93.90976,229.47571h-13.57v-49.05h13.84c4.26667,0 8.04,0.94333 11.32,2.83c3.28,1.88667 5.81333,4.57 7.6,8.05c1.78667,3.48 2.69,7.47667 2.71,11.99v0v3.14c0,4.62667 -0.89333,8.68 -2.68,12.16c-1.78,3.48 -4.32667,6.15333 -7.64,8.02c-3.31333,1.86 -7.17333,2.81333 -11.58,2.86zM94.34976,185.74571h-7.55v38.44h6.81c4.98667,0 8.86667,-1.55 11.64,-4.65c2.77333,-3.1 4.16,-7.51333 4.16,-13.24v0v-2.86c0,-5.57333 -1.30667,-9.90333 -3.92,-12.99c-2.62,-3.08667 -6.33333,-4.65333 -11.14,-4.7zM153.30976,201.51571v5.29h-21.26v17.38h24.7v5.29h-31.17v-49.05h30.83v5.32h-24.36v15.77zM193.43976,229.47571l-10.65,-19.84h-11.52v19.84h-6.5v-49.05h16.24c5.52,0 9.77,1.25667 12.75,3.77c2.97333,2.51333 4.46,6.17333 4.46,10.98v0c0,3.05333 -0.82333,5.71667 -2.47,7.99c-1.65333,2.26667 -3.95,3.96 -6.89,5.08v0l11.52,20.83v0.4zM171.26976,185.74571v18.6h9.94c3.21333,0 5.76667,-0.83333 7.66,-2.5c1.9,-1.66 2.85,-3.88333 2.85,-6.67v0c0,-3.03333 -0.90333,-5.35667 -2.71,-6.97c-1.81333,-1.62 -4.42667,-2.44 -7.84,-2.46v0z">
                  </path>
                </g>
                <path d="M-24.57024,240.14571v-69.72h234.95v69.72z" fill="#ff0000" stroke="#50e3c2" strokeWidth="3"
                  opacity="0"></path>
              </g>
            </g>
          </svg>  DA _ Underdogz team.
        </h2>
        <MDBRow className="text-md-left">
          <MDBCol lg="6" md="12" className="mb-5">
            <MDBCol md="4" lg="6" className="float-left"   >
          
              <MDBCardImage
              style={{width:'200px', height:'200px'}}
              src="https://avatars3.githubusercontent.com/u/44297884?s=460&v=4"
              className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
              tag="img"
              />
            </MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3">Corbin Brockbank</h4>
              <h6 className="font-weight-bold grey-text mb-3">
                Full Stack Web Developer
              </h6>
             
              <a href="https://github.com/Corbin520" target="_blank" rel="noopener noreferrer" className="p-2 fa-lg fb-ic">
              <img src="https://img.icons8.com/material/36/000000/github.png" alt='' />
              </a>
              <a href="https://www.linkedin.com/in/corbin-brockbank-173459168/" target="_blank" rel="noopener noreferrer" className="p-2 fa-lg tw-ic">
              <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="" />
              </a>
            
            </MDBCol>
          </MDBCol>

          <MDBCol lg="6" md="12" className="mb-5">
            <MDBCol md="4" lg="6" className="float-left">
            <MDBCardImage
            style={{width:'200px', height:'200px'}}
              src="https://avatars0.githubusercontent.com/u/46852589?s=460&v=4"
              className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
              tag="img"
              />
            </MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3">Emily Jonaitis</h4>
              <h6 className="font-weight-bold grey-text mb-3">
              Full Stack Web Developer
              </h6>
             
              <a href="https://github.com/emilyfjonaitis" target="_blank" rel="noopener noreferrer" className="p-2 fa-lg fb-ic">
              <img src="https://img.icons8.com/material/36/000000/github.png" alt='' />
              </a>
              <a href="#!" target="_blank" rel="noopener noreferrer" className="p-2 fa-lg yt-ic">
              <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="" />
              </a>
             
            </MDBCol>
          </MDBCol>

          <MDBCol lg="6" md="12" className="mb-5">
            <MDBCol md="4" lg="6" className="float-left">
            <MDBCardImage
            style={{width:'200px', height:'200px'}}
              src="https://avatars3.githubusercontent.com/u/46357369?s=460&v=4"
              className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
              tag="img"
              />
            </MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3">Marco Johns</h4>
              <h6 className="font-weight-bold grey-text mb-3">
              Full Stack Web Developer
              </h6>
             
              <a href="https://github.com/MarcoJohns" target="_blank" rel="noopener noreferrer" className="p-2 fa-lg fb-ic">
              <img src="https://img.icons8.com/material/36/000000/github.png" alt='' />
              </a>
              <a href="https://www.linkedin.com/in/marco-johns/" target="_blank" rel="noopener noreferrer" className="p-2 fa-lg tw-ic">
              <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="" />
              </a>
             
            </MDBCol>
          </MDBCol>

          <MDBCol lg="6" md="12" className="mb-5">
            <MDBCol md="4" lg="6" className="float-left">
            <MDBCardImage
            style={{width:'200px', height:'200px'}}
              src="https://avatars1.githubusercontent.com/u/43624894?s=460&v=4"
              className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
              tag="img"
              />
            </MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3">Oksana Jacoby</h4>
              <h6 className="font-weight-bold grey-text mb-3">
              Full Stack Web Developer
              </h6>
             
              <a href="https://github.com/OKOJ" target="_blank" rel="noopener noreferrer" className="p-2 fa-lg gplus-ic">
              <img src="https://img.icons8.com/material/36/000000/github.png" alt='' />
              </a>
              <a href="https://www.linkedin.com/in/oksana-jacoby-49190b170/" target="_blank" rel="noopener noreferrer"  className="p-2 fa-lg li-ic">
              <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="" />
              </a>
              
            </MDBCol>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
      <Footer />
    </MDBCard>
  );
}

export default Team;