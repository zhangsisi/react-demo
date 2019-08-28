import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Home from '../pages/home'
import App from '../pages/app/app'
import Test01 from '../pages/welcome/test01'
import Test02 from '../pages/welcome/test02'

const Routes = () => (
  <Router>
    <App>
      <Home>
        <Router>
          <Route exact path="/test01" component={Test01} />
          <Route exact path="/test02" component={Test02} />
          {/* <Redirect exact to='/test01' /> */}
        </Router>
      </Home>
    </App>
  </Router >
)
export default Routes