import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <main>
        <section className="py-2 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">iNoteBook</h1>
              <p className="lead text-muted">iNoteBook Notes is one stop for all your notes. You can store your notes, edit them, delete them whenever you want. All these functionality while being securely stored on the cloud.</p>
              <p>
                <Link to="/login" className="btn btn-primary my-2">Login</Link>
                <Link to="/signup" className="btn btn-success my-2 mx-2">Signup</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
