import React from 'react'
import {Router, Switch, Route} from 'react-router'
import DashBoard from '../component/DashBoard'
import Login from '../component/Login/Login'
import PrivateRoute from '../routes/PrivateRoute'

import {history} from '../history'

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route component={Login} exact path="/"/>
            <PrivateRoute component={DashBoard} exact path="/dashboard"/>
        </Switch>
    </Router>
)

export default Routes