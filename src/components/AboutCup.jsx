import '../styles/App.css';

function AboutCup() {
  return (
    <div className='container about-cup'>
      <div className='col-md-12'>
          <h2 className='display-5 text-center'>The Cup</h2>
      </div>
      
      <div className="table">
        <div className="cup">
          <img src="cup.jpeg" alt="The Teemu Cup, now known as the Blizzy Memorial Cup" />
        </div>
        <div>
          <p>
            The Cup was designed and built by Chris Riley and a group of his friends while they were hanging out, playing with woodworking tools, and drinking. The Cup was created at the request of the commissioner and cost $130.
          </p>
          <p>
            Over the years, the Cup has been known by many names. It was originally dubbed The Teemu Cup, named for Ryan "Teemu" Foye after he broke his ankle in the first round of the playoffs in the League's inagural season. Years after Foye's retirement, the name was changed to the Hood Cup. In 2019, the Cup was officially renamed the Blizzy Memorial Cup in honor of Ryan "Blizzy" Perry.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutCup;