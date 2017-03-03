import React from 'react'

export const WhoAmI = ({ user, logout }) => (
  <div className="whoami">
    <span color="white" className="whoami-user-name">{`I"M HERE!!!!!!!${user && user.name}`}</span>
    <button className="logout" onClick={logout}>Logout</button>
  </div>
)

import {logout} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  ({ auth }) => ({ user: auth }),
  {logout},
) (WhoAmI)
