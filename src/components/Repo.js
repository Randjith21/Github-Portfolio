import React from 'react'

const Repo = ({ repo }) => (
  <a href={repo.html_url} rel="noreferrer" target="_blank">
    <section>
        <div className="section_title">{repo.full_name}</div>
        <div className="about_section">
            <span>{repo.description}</span>
        </div>
        <div className="bottom_section">
            <span>
                <i className="fas fa-code"></i>&nbsp; {repo.language}
            </span>
            <span>
                <i className="fas fa-star"></i>&nbsp; {repo.stargazers_count}
            </span>
            <span>
                <i className="fas fa-code-branch"></i>&nbsp; {repo.forks_count}
            </span>
        </div>
    </section>
  </a>
)

export default Repo