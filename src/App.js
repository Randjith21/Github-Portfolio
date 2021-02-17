import React, { Component, Fragment } from 'react'
import Form from './components/Form'
import Page from './components/Page'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      user: false,
      repos: false,
      error: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    
    const data = new FormData(e.target)
    const username = data.get('username')
    const ownedRepo = data.get('ownedRepo')

    this.fetchGithubAPI(username, ownedRepo)
  }

  async fetchGithubAPI(username, ownedRepo) {
    this.setState({
      isLoading: true,
      error: false,
    })
    const res = await fetch(`https://api.github.com/users/${username}`)
    if (!res.ok) {
      this.setState({
        isLoading: false,
        error: true,
      })
    } else {
      const user = await res.json()
      const res2 = await fetch(`https://api.github.com/users/${username}/repos`)
      const allRepos = await res2.json()
      const repos = !ownedRepo ? allRepos : allRepos.filter(repo => !repo.fork)
      this.setState({
        isLoading: false,
        user,
        repos
      })
    }
  }

  render() {
    const { isLoading, user, repos, error } = this.state
    return (
      <Fragment>
        { repos.length ?
          <Page user={user} repos={repos} />
          :
          <Form
            handleSubmit={this.handleSubmit}
            error={error}
            isLoading={isLoading}
          />
        }
      </Fragment>
    )
  }
}

export default App