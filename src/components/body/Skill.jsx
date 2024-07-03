import React from 'react';

function Skill() {
  return (
    <div>
        <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-4 custom-border">
            <div className="card-body">
              <h5 className="card-title">Framework Development</h5>
              <p className="card-text">Django, Laravel, React, Bootstrap</p>
            </div>
          </div>
          <div className="card mb-4 custom-border">
            <div className="card-body">
              <h5 className="card-title">Programming Language</h5>
              <p className="card-text">Python, PHP, C#, Java, C++</p>
            </div>
          </div>
          <div className="card mb-4 custom-border">
            <div className="card-body">
              <h5 className="card-title">Frontend Development</h5>
              <p className="card-text">HTML, CSS, JavaScript, React, Bootstrap</p>
            </div>
          </div>
          <div className="card mb-4 custom-border">
            <div className="card-body">
              <h5 className="card-title">Backend Development</h5>
              <p className="card-text">Node.js, Express, MongoDB, RESTful APIs</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4 custom-border">
            <div className="card-body">
              <h5 className="card-title">Database</h5>
              <p className="card-text">SQL, MySQL, PostgreSQL, NoSQL</p>
            </div>
          </div>
          <div className="card mb-4 custom-border">
            <div className="card-body">
              <h5 className="card-title">Version Control</h5>
              <p className="card-text">Git, GitHub, GitLab</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Skill;
