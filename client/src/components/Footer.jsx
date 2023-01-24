import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
    
    <footer className="container py-5">
      <div className="row">
        <div className="col-12 col-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="d-block mb-2"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
          <small className="d-block mb-3 text-muted">© 2017-2018</small>
        </div>
        <div className="col-6 col-md">
          <h5>Features</h5>
          <ul className="list-unstyled text-small">
            <li><Link className="text-muted" to="/">Cool stuff</Link></li>
            <li><Link className="text-muted" to="/">Random feature</Link></li>
            <li><Link className="text-muted" to="/">Team feature</Link></li>
            <li><Link className="text-muted" to="/">Stuff for developers</Link></li>
            <li><Link className="text-muted" to="/">Another one</Link></li>
            <li><Link className="text-muted" to="/">Last time</Link></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li><Link className="text-muted" to="/">Resource</Link></li>
            <li><Link className="text-muted" to="/">Resource name</Link></li>
            <li><Link className="text-muted" to="/">Another resource</Link></li>
            <li><Link className="text-muted" to="/">Final resource</Link></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li><Link className="text-muted" to="/">Business</Link></li>
            <li><Link className="text-muted" to="/">Education</Link></li>
            <li><Link className="text-muted" to="/">Government</Link></li>
            <li><Link className="text-muted" to="/">Gaming</Link></li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>About</h5>
          <ul className="list-unstyled text-small">
            <li><Link className="text-muted" to="/">Team</Link></li>
            <li><Link className="text-muted" to="/">Locations</Link></li>
            <li><Link className="text-muted" to="/">Privacy</Link></li>
            <li><Link className="text-muted" to="/">Terms</Link></li>
          </ul>
        </div>
      </div>
    </footer>

    </div>
  )
}

export default Footer