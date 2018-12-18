import React, { Component } from 'react'


import HelmetShow from '../components/HelmetShow'

import Activity from '../components/Activity'
import LastProject from '../components/LastProject'
import ListProjects from '../../project/components/ListProjects'
import InfoFreelance from '../../app/components/InfoFreelance'


class HomePage extends Component {
	render() {
		return <div>				
			<InfoFreelance/>
						
			<Activity/>

			<ListProjects/>
						
		</div>
	}
}

export default HomePage
