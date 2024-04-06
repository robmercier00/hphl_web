import '../styles/App.css';

function Media() {
  return (
    <div className="card">
      <div className='Media'>
        <div className='col-md-12'>
          <h2 className='display-5 text-center'>Media</h2>
        </div>
        <div>
          <div className="container mb-5">
            <h4>HPHL Documentary</h4>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/videoseries?si=ip-bGz9SfXM2PTqF&amp;list=PLiRHqM8VVUiIqCImABdGPt_yhgY1ywVgJ"
              title="HPHL Documentary"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen></iframe>              
          </div>
          <div className="container">
            <div className="row">
              <h4>Pics (Coming Soon!)</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Media;