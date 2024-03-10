import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import StandingsModule from "./StandingsModule";

function Standings() {
  return (
    <div className="card">
      <StandingsModule />
    </div>
  )
}

export default Standings;