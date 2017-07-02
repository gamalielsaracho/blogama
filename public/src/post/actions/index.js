import $ from 'jquery'

import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,

  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS
} from './types'

const url = 'http://localhost:8080/api/publications'

var allPublications = []

export function fetchPosts() {
  return (dispatch) => {
    dispatch({ type: FETCH_POSTS_REQUEST })

    $.get('http://localhost:8080/api/publications/publications.json')
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

      allPublications.map((publication) => {
        if(publication.namefolder == name_folder) {

          // console.log(publication)
          dispatch({ type:FETCH_POST_SUCCESS, payload:publication })
        }
        
      })
  }
}

