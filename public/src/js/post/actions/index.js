import axios from 'axios'
import 'isomorphic-fetch';


// const url = 'http://localhost:8080/api/publications'
const url = 'https://gamalielsaracho.github.io/api/publications'

var allPublications = []

var allPublicationsFechPost


export function fetchPosts() {
  // body...
  return fetch(`http://localhost:3000/api/posts`)
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


export function fetchPost(paramsUrl) {
  console.log('params actions kkkkkkkkkkk')
  console.log(paramsUrl)

  // response.json()
    return fetch(`http://localhost:3000/api/posts/${paramsUrl.namefolderPost}`)
    .then(response => response.json())
    .catch(err => console.log(err));
}

