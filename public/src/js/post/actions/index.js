import axios from 'axios'
import 'isomorphic-fetch';


// const url = 'http://localhost:8080/api/publications'
const url = 'https://gamalielsaracho.github.io/api/publications'

var allPublications = []

var allPublicationsFechPost


export function fetchPosts() {
  // body...
  return fetch('http://localhost:3000/api/news')
    .then(response => response.json())
    .catch(err => console.log(err));
}

// const requestNews = () => ({ type: FETCH_POSTS_REQUEST });

// export function fetchPosts() {
//   return (dispatch) => {
//     dispatch({ type: FETCH_POSTS_REQUEST })

//     axios.get(`${url}/publications.json`)
//       .then((response) => {
//         let publications = response.data.publications
//         // console.log(response.data)

//           // publications.map((publication) => {

//           //     axios.get(`${url}/${publication.namefolder}/post.md`)
//           //     .then((response) => {
//           //       let mkdContent = response.data
//           //       publication.content = mkdContent
//           //     })

//           //     allPublications.push(publication)
//           // })

//         // console.log(publications)

//           dispatch({ type:FETCH_POSTS_SUCCESS, payload:publications })
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   }
 
// }


export function fetchPost(name_folder) {
  return (dispatch) => {

      dispatch({ type: FETCH_POST_REQUEST })
      

      axios.get(`${url}/publications.json`)
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

