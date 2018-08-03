// Entry point aplication.
// Entry point aplication.
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import allRoutes from './allRoutes'

class AppRoutes extends Component {

	render() {
		return <div>
			
			<Switch>
				{ 
					allRoutes.map(({path, exact, component: C, ...rest}) => {
						return <Route 
							key={path}
							path={path}
							exact={exact}
							render={(props) => (
								<C {...props} {...rest} />
							)}
						/>
					})
				}
			</Switch>
		</div>
	}
}

export default AppRoutes