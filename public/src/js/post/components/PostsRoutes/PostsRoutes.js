import React, { Component }  from 'react'
import { Switch, Route } from 'react-router-dom'

import routes from './routes'


class PostsRoutes extends Component {

	render() {
		return <main>

			<Switch>
				{ 
					routes.map(({path, exact, component: C, ...rest}) => {
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
		</main>
	}
}

export default PostsRoutes