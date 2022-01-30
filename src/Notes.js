import React, { Component } from 'react';
import $ from 'jquery';

export default class Notes extends Component{
  jQuerycode=() => {
    $(".btn-outline-searchbtn").on("click",function(){
      $(".resultN").css("display","block");
      $(".BigN").css("display","none");
    });
  }
      
  componentDidMount(){
    this.jQuerycode()
  }

  render(){
    return(
      <div className="container-fluid">
        <div className="row pt-2">
          <div className="col-12 ml-5">
            <h1 className="text-light text-lg-left">NOTES</h1>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-12 col-md-5 text-lg-right text-center">
            <div className="search_field">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="magnifying-glass" class="svg-inline--fa fa-magnifying-glass" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"></path></svg>
              <input type="text" className="input" placeholder="Search Notes" />
            </div>
          </div>
          <div className="col-12 col-md-3 text-center">
            <select name="Options" id="opt">
              <option className="placeholder" value="" disabled selected>Semester</option>
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
              <option value="3">Semester 3</option>
              <option value="4">Semester 4</option>
              <option value="5">Semester 5</option>
              <option value="6">Semester 6</option>
              <option value="7">Semester 7</option>
              <option value="8">Semester 8</option>
            </select>
          </div>
          <div className="col-12 col-md-4 text-lg-left text-center">
            <button className="btn btn-outline-searchbtn btn-lg mb-2" > Search </button>
          </div>
        </div>
        <div className="BigN row pt-2">
          <div className="col-12 d-flex justify-content-center">
            <img id="Search" className="img-fluid"
                  alt="searching"
                  src={require("./Assets/Searching.jpg")}/>
          </div>
        </div>
        <section class="resultN">
          <div className="row">
            <div className="col-12 col-md-6 pt-5 d-flex justify-content-center">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Data Structures</h5>
                  <p className="card-text">26th Jan 2022</p>
                  <a href="#" >Download</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 pt-5 d-flex justify-content-center">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Data Structures</h5>
                  <p className="card-text">26th Jan 2022</p>
                  <a href="#" >Download</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 pt-5 d-flex justify-content-center">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Data Structures</h5>
                  <p className="card-text">26th Jan 2022</p>
                  <a href="#" >Download</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 pt-5 d-flex justify-content-center">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Data Structures</h5>
                  <p className="card-text">26th Jan 2022</p>
                  <a href="#" >Download</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 pt-5 d-flex justify-content-center">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Data Structures</h5>
                  <p className="card-text">26th Jan 2022</p>
                  <a href="#" >Download</a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 pt-5 d-flex justify-content-center">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Data Structures</h5>
                  <p className="card-text">26th Jan 2022</p>
                  <a href="#" >Download</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}