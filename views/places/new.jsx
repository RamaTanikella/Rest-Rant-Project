
const React = require('react')
const Wrapper = require('../wrapper')
var express = require('express');
var router = express.Router();
let data = require("../../models/places_model")

function newplace (data) {
    return (
        <Wrapper>
          <main>
            <h1>Add a New Place</h1>
              {   
                    data.error ?
                    data.error
                    :
                    null
              }
            <form method="POST" action="/places">
              <div className="row">
                <div className="form-group col-sm-6">
                  <label htmlFor="name">Place Name</label>
                  <input className="form-control" id="name" name="name" required />
                </div>
                <div className="form-group col-sm-6">
                  <label htmlFor="pic">Place Picture</label>
                  <input className="form-control" id="pic" name="pic" />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-sm-6">
                  <label htmlFor="city">City</label>
                  <input className="form-control" id="city" name="city" />
                </div>
                <div className="form-group col-sm-6">
                  <label htmlFor="state">State</label>
                  <input className="form-control" id="state" name="state" />
                </div>
                
              </div>
              <div className="form-group">
                <label htmlFor="cuisines">Cuisines</label>
                <input className="form-control" id="cuisines" name="cuisines" required />
              </div>
              <input className="btn btn-primary" type="submit" value="Add Place" />
              
            </form>
          </main>
        </Wrapper>
    )
}



module.exports = newplace