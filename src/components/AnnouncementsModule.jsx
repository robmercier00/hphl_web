import { useRef, useEffect } from 'react';
import '../styles/App.css';

function AnnouncementsModule({ announcement }) {
  const aRef = useRef(announcement);

  useEffect(() => {
    aRef.current.innerHTML = announcement.announcement;
  }, [aRef, announcement.announcement]);

  return (
    <>
      <div className="announcements">
        <h5>{new Date(announcement.date).toLocaleDateString()}</h5>
        <p ref={aRef}></p>
      </div>
    </>
  )
}

export default AnnouncementsModule;