import axios from 'axios'
import $ from 'jquery'

    // Mostrar todos los posts.
export const FETCH_POSTS = 'FETCH_POSTS'

    // Mostrar un post por su ID.
export const FETCH_POST = 'FETCH_POST'

var allPublications = []

export function fetchPosts() {
  return (dispatch, getState) => {
    $.get('http://localhost:8080/api/publications/publications.json')
      .then((response) => {
          response.publications.map((publication) => {

              if(publication.havethemes) {
                $.get(`${url}/${publication.namefolder}/themes.json`)
                .then((response) => {
                    publication.themes = response.themes
                    publication.content = null
                })
              } else {
                $.get(`${url}/${publication.namefolder}/post.md`)
                .then((response) => {
                  publication.content = response
                  publication.themes = null
                })
              }

              allPublications.push(publication)
          })

          dispatch({ type:FETCH_POSTS, payload:response })
      })
  }
 
}


const url = 'http://localhost:8080/api/publications'

export function fetchPost(name_folder) {
  return (dispatch, getState) => {
      allPublications.map((publication) => {
        if(publication.namefolder == name_folder) {

          // console.log(publication)
          dispatch({ type:FETCH_POST, payload:publication })
        }
        
      })
  }
}

