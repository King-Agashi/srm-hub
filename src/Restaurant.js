import React, { Component } from 'react';
import $ from 'jquery';

export default function Restaurant(){
  return(
    <div className="container-fluid">
      <div className="row pt-2">
        <div className="col-12">
          <h2 className="text-light text-lg-left text-center pt-2">Notes</h2>
        </div>
      </div>
      <div className="row pt-4">
        <div className="col-12 col-md-5 text-lg-right text-center">
          <div className="search_field">
            <input type="text" className="input" placeholder="Search Restaurants" />
          </div>
        </div>
        <div className="col-12 col-md-3 text-center">
          <select name="Options" id="opt">
            <option value="1">1 km</option>
            <option value="2">5 km</option>
            <option value="3">10 km</option>
          </select>
        </div>
        <div className="col-12 col-md-4 text-lg-left text-center">
          <button className="btn btn-outline-Notes btn-lg mb-2" > Search </button>
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
                <h5 className="card-title">Kent's Cafe</h5>
                <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page...</p>
                <a href="#" >READ MORE</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 pt-5 d-flex justify-content-center">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Kent's Cafe</h5>
                <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page...</p>
                <a href="#" >READ MORE</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 pt-5 d-flex justify-content-center">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Kent's Cafe</h5>
                <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page...</p>
                <a href="#" >READ MORE</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 pt-5 d-flex justify-content-center">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Kent's Cafe</h5>
                <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page...</p>
                <a href="#" >READ MORE</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 pt-5 d-flex justify-content-center">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Kent's Cafe</h5>
                <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page...</p>
                <a href="#" >READ MORE</a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 pt-5 d-flex justify-content-center">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Kent's Cafe</h5>
                <p className="card-text">It is a long established fact that a reader will be distracted by the readable content of a page...</p>
                <a href="#" >READ MORE</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}