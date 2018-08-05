import React, { Component } from 'react'

import HelmetShow from '../components/HelmetShow'

import Activity from '../components/Activity'
import LastProject from '../components/LastProject'
import ListProjects from '../../project/components/ListProjects'
import ShowProjectContainer from '../../project/components/ShowProject'
import InfoFreelance from '../../app/components/InfoFreelance'


class HomePage extends Component {
	render() {
		return <div>
			{/*  */}
			<HelmetShow title="Programador"
				description="npm install gamaliel jeje"
				image_facebook="image_facebook_home.jpg"
				image_twitter="image_twitter_home.jpg"
				image_google="image_google_home.jpg"
				urlData={this.props.location.pathname}/>
				
			<br/>
			<InfoFreelance/>
			
			<h1>HomePage</h1>
			
			{/*
				<Activity/>
			    <LastProject/>
			    <ShowProjectContainer/>
			    <ListProjects/>
			*/}
			
		</div>
	}
}

export default HomePage
