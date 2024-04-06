import { useState, useEffect } from 'react';
import '../styles/App.css';
import AllTimePlayerStats from './AllTimePlayerStats';
import AllTimeGoalieStats from './AllTimeGoalieStats';

function PlayerStats() {
  const [activeTab, setActiveTab] = useState([]);

  useEffect(() => {
    setActiveTab("playerStats");
  }, []);

  function playerStats() {
    setActiveTab("playerStats");
  }

  function goalieStats() {
    setActiveTab("goalieStats");
  }

  return (
    <div className="card">
      <div className='PlayerStats'>
        <div className='container'>
          <div className={`stats-nav ${activeTab === 'playerStats' ? 'active-nav' : 'inactive' }`} onClick={playerStats}>
              <h2 className='display-5 text-center'>Player Stats</h2>
          </div>
          <div className={`stats-nav ${activeTab === 'goalieStats' ? 'active-nav' : 'inactive' }`} onClick={goalieStats}>
              <h2 className='display-5 text-center'>Goalie Stats</h2>
          </div>
          <div className="card">
            { activeTab === 'goalieStats' ? <AllTimeGoalieStats /> : <AllTimePlayerStats /> }
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerStats;