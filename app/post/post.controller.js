import publications from '../../api/publications/publications'
import 'isomorphic-fetch';

import axios  from 'axios' 

exports.posts = function (req, res) {
	res.json(publications)
}


exports.post = function (req, res) {
	var namefolderParam = req.params.namefolder

	const url = 'https://gamalielsaracho.github.io/api/publications'
	
	// console.log('namefolderParam-...............')
	// console.log(namefolderParam)

	publications.map((publication) => {
		
		if(publication.namefolder == namefolderParam) {
			axios.get(`${url}/${namefolderParam}/post.md`)
			.then((response) => {
				publication.content = response.data

				// console.log(response.data)

				res.send(publication)
			})
			.catch(err => console.log(err));					
		}

	})
}