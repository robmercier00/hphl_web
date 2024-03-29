import React, { useState, useEffect } from 'react';
import '../styles/App.css';

function AboutLeague() {
  return(
    <div className='container about-league'>
      <div className='col-md-12'>
          <h2 className='display-5 text-center'>The League</h2>
      </div>
      
      <div className="table">
        <div className="history">
          <img src="public/history.jpeg" alt="Hockey team wins Teemu Cup"/>
        </div>
        <div>
          <p>
            The Hood Park Hockey League was born like so many other great ideas, as a conversation between a couple of drunk guys in a bar. Josh Robert, the legendary goalie, said, "Man, I wish someone would just start up a roller hockey league around here", and Mike Grages took the idea and ran with it. The first league ran from July through September of 2007 and was comprised of four teams. Over the years, more players joined and the league has grown to six teams and occasionally two nights. Now in it's 14th year, the Hood Park Hockey League continues to grow.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutLeague;