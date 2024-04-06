import '../styles/App.css'

function Footer() {
  return (
    <>
      <div className="card">
        <div className="Rules">
          <div className="section">
            <h6>Off-sides:</h6>
            <span>There will be no off-sides during play. Off-sides only applies during faceoffs.</span>
          </div>
          <div className="section">
            <h6>Line Changes:</h6>
            <span>Line changes or substitutions can be made at any point in time (during stoppages or active play); however, they must always be done through the door to limit disruption of play and potential injury.</span>
          </div>
          <div className="section">
            <h6>Faceoffs:</h6>
            Both halves will begin with a faceoff.<br />
            There will be faceoffs at center court after a goal.<br />
            In the event of a penalty a faceoff will be held in the zone of the offending team.<br />
            The ball must hit the ground on the drop for a faceoff to count as legal.<br />
            If the ball is played before it hits the ground, play will be blown dead immediately, and the faceoff will be attempted again.
          </div>
          <div className="section">
            <h6>Penalties:</h6>
            All penalties will be 1 minute in length, unless an injury occurs, in which case it will be 2 minutes (double minor).<br />
            Penalties that will be called:
            <ul>
              <li>Roughing</li>
              <li>Tripping</li>
              <li>Elbowing</li>
              <li>Kneeing</li>
              <li>Slashing</li>
              <li>Hooking</li>
              <li>Goaltender interference</li>
              <li>Highsticking</li>
              <ul>
                <li>any time a stick is raised over crossbar height while in the vicinity of other players, it will result in a highsticking penalty</li>
              </ul>
              <li>Delay of game</li>
              <ul>
                <li>A goalie will be called for delay of game for covering the ball outside of the crease</li>
              </ul>
              <li>Unsportsmanlike conduct</li>
              <ul>
                <li>Unsportsmanlike conduct includes</li>
                  <ul>
                    <li>Abuse of officials</li>
                    <li>Excessive taunting</li>
                    <li>Complaining</li>
                    <li>Yelling</li>
                    <li>Throwing equipment</li>
                  </ul>
                <li>Repeated unsportsmanlike actions can result in ejections or suspensions at the discretion of the game officials and commissioners</li>
              </ul>
            </ul>
          </div>
          <div className="section">
            <h6>Contact:</h6>
            This is a no-checking league, however, minor contact is expected.<br />
            It will be at the discretion of the officials to determine what constitutes incidental contact and what is a check.
          </div>
          <div className="section">
            <h6>Fighting:</h6>
            Any fighting will result in an ejection for the rest of the night.<br />
            2 fights will result in a 2 week suspension.<br />
            A player who is involved in 3 fights will be suspended for the season, and reinstatement will be determined by the Commissioner.
          </div>
          <div className="section">
            <h6>Roster Rules:</h6>
            A team can consist of 1 goalie and up to 7 skaters. Games will be played 3 on 3, plus goalies.<br />
            To avoid a forfeit a team must have at least 2 skaters and a goalie dressed at game time.<br />
            There will be no unapproved out of league substitutions allowed.<br />
            If a team is short players, they may pick up subs after confirming with the opposing team's captain.<br />
            Due to the pandemic, games-played requirements for playoff eligibility have been waived.
          </div>
          <div className="section">
            <h6>Game Times and Rules:</h6>
            There will be 6 games a night, starting at 6:00, 6:30, 7:00, 7:30, 8:00, and 8:30.<br />
            Games will consist of 2 12 minute halves, with a 2 minute break in between halves.<br />
            Games will be running time.<br />
            A game will be played stop-time if it is within 2 goals or tied in the final 2 minutes.<br />
            Each team will be granted one 60 second timeout, to be used during any stoppage of play during the game.<br />
            Games in the regular season that end in a tie will remain a tie (no OT or Shootout).<br />
            Playoff games will go to sudden death OT.<br />
            Games will be held for up to 5 minutes to allow for players to arrive.<br />
            If a team does not have the minimum number of players after the 5 minutes, that team will forfeit the game.
          </div>
          <div className="section">
            <h6>Tie Breaking Procedure:</h6>
            In the event of a tie in the standings, the higher position will be given to the the team that holds the tiebreaker.<br />
            Tiebreakers, in order are: Wins, Goals For, Goals Against.<br />
            If teams are still tied, the tie will be broken by a coin flip.
          </div>
          <div className="section">
            <h6>Odds and Ends:</h6>
            <ul>
              <li>Players must wear a shirt or jersey that is the same as their team color.</li>
              <li>Hand pass will be allowed in the defensive zone; if it occurs in the offensive zone, it will result in the play being blown dead, and possession changing.</li>
              <li>Goals cannot be kicked in or gloved in.</li>
              <li>Goals cannot be knocked in with a stick over the crossbar.  This will result in a stoppage of play and a faceoff at center.</li>
              <li>A ball shot out of the rink will result in a change of possession.</li>
              <li>A ball blown dead after a goalie covers it will result in a stop in play.</li>
              <li>Each change of possession or stoppage in play that does not require a faceoff will start up again with the ball behind the goal line.  The team that is taking possession has 5 seconds to take the ball from behind their own goal line before the opposing team can fore check into the zone.</li>
              <li>A ball shot into the netting behind either goal that falls back to the rink will be a live ball. </li>
              <li>Scorekeepers are considered game officials.  It is the responsibility of the players to insure that they are appropriately credited for any points on scoring plays.  Once the game is over, no post-game stat adjustments are allowed.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer