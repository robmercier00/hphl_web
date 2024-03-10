import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import axios from 'axios';
import AboutLeague from "./AboutLeague.jsx";
import AboutCup from "./AboutCup.jsx";
import AboutCommishes from "./AboutCommishes.jsx"

function About() {
	return (
		<div className="card">
      <div className='About'>
        <AboutLeague />

				<AboutCup />

				<AboutCommishes />
			</div>
		</div>
	);

}

export default About;