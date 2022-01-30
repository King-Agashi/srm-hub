import React from 'react';

export default function Home(){
  return(
    <div class="container-fluid h-100 mb-5 mt-5 pt-5">
      <div class="row top-buffer text-center align-items-center h-100">
        <div class="col-12 col-md-6">
          <img id="quite-town" className="img-fluid"
            alt="Landing Page Background"
            src={require("./Assets/quite-town.png")}
          />
        </div>
        <div className="col-12 col-lg-6">
          <div class="col-12 font-weight-light text-left">
            <h1>Welcome To</h1>
          </div>
          <div class="col-12 text-left">
            <h2> SRM HUB </h2>
          </div>
          <div class="col-12 font-weight-light casual text-left">
            <p>Find the best notes and restaurant reviews</p>
          </div>
          <div class="col-12 Btns d-flex flex-row">
            <div class="text-lg-right text-center">
              <a href="/restaurants"><button class="btn btn-outline-light btn-lg mt-3 mb-2"> Restaurants </button> </a>
            </div>
            <div class="text-lg-left text-center">
              <a href="/notes"><button class="btn btn-outline-light btn-lg mt-3 mb-2"> Notes </button> </a>
            </div>
          </div>  
        </div>
      </div>
    </div>
  )
}