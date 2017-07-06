import React, { Component } from 'react'

import Activity from '../components/Activity'
import LastProject from '../components/LastProject'
import ListProjects from '../../project/components/ListProjects'
import ShowProjectContainer from '../../project/components/ShowProject'
import InfoFreelance from '../../app/components/InfoFreelance'


class HomePage extends Component {
	render() {
		return <div>
			<InfoFreelance/>

			<Activity/>

		    <LastProject/>

		    <ShowProjectContainer/>

		    <ListProjects/>
		</div>
	}
}

export default HomePage