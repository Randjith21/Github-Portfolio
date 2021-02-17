import React from 'react'
import Repo from './Repo'

const Repos = ({ repos }) => (
  <div id="display">
      <div id="work">
          <h1>Work.</h1>
          <div className="projects" id="work_section">
            {repos.map(repo => <Repo key={repo.id} repo={repo} />)}
          </div>
      </div>
  </div>
)

export default Repos