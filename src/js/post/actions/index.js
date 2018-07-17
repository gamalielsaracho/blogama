import $ from 'jquery'

import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,

  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS
} from './types'

// const url = 'http://localhost:8080/api/publications'
const url = 'https://gamalielsaracho.github.io/api/publications'

var allPublications = []

var allPublicationsFechPost


export function fetchPosts() {
  return (dispatch) => {
    dispatch({ type: FETCH_POSTS_REQUEST })

    $.get(`${url}/publications.json`)
      .then((response) => {
          response.publications.map((publication) => {

              $.get(`${url}/${publication.namefolder}/post.md`)
              .then((response) => {
                publication.content = response
              })

              allPublications.push(publication)
          })

          dispatch({ type:FETCH_POSTS_SUCCESS, payload:response })
      })
      .catch((error) => {
        console.log(error)
      })
  }
 
}


export function fetchPost(name_folder) {
  return (dispatch) => {

      dispatch({ type: FETCH_POST_REQUEST })
      

      $.get(`${url}/publications.json`)
      .then((response) => {
          response.publications.map((publication) => {

            if(publication.namefolder == name_folder) {

              $.get(`${url}/${publication.namefolder}/post.md`)
              .then((response) => {
                publication.content = response

                dispatch({ type:FETCH_POST_SUCCESS, payload:publication })
              })
            }

          })

      })
      .catch((error) => {
        console.log(error)
      })

  }
}

