import React from 'react'
import Profil from './Profil'
import Repos from './Repos'

const Page = ({ user, repos }) => (
  <React.Fragment>
    <Profil user={user} />
    <Repos repos={repos} />
  </React.Fragment>
)

export default Page