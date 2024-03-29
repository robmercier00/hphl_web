import React, { useState, useEffect } from 'react';
import '../styles/App.css';

function AboutCommishes() {
  return (
    <div className='container about-commishes'>
      <div className='col-md-12'>
          <h2 className='display-5 text-center'>The Commissioners</h2>
      </div>
        
      <div className="table">
        <div className="commishes">
          <img src="commishes.jpeg" alt="Mike Grages and James DiSalvo run a dope league" />
        </div>
        <div>
          <p>
            The league has had three commissioners over the years. Founding Commissioner Mike Grages has run the league since inception, with the exception of the 2012 and 2019 seasons. In 2012, Steve Dovich temporarily took over the role of acting Commissioner for the year while Grages was away. In 2018, James DiSalvo became Co-commisioner with Grages, and ran the league entirely in 2019. Now, Grages and DiSalvo work together to keep the league going.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutCommishes;