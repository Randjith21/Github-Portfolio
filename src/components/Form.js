import React from 'react'

const Form = ({ handleSubmit, error, isLoading }) => (
  <form onSubmit={handleSubmit} className="form-options">
      <i className="fab fa-github"></i>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"></link>
      <div className="form-options__row form-options__row--user">
          <input type="text" name="username" placeholder="Your github username" />
          <button>
              {isLoading ?
                <i className="fas fa-spinner fa-spin" />
              :
                <i className="fas fa-arrow-circle-right" />
              }
          </button>
      </div>
      <div className="form-options__row form-options__row--repo">
          <label htmlFor="ownedRepo">
              Show only owned repositories
              <input type="checkbox" name="ownedRepo" id="ownedRepo" />
          </label>
      </div>
    { error && <p className="error">Github user not found</p>}
  </form>
)

export default Form