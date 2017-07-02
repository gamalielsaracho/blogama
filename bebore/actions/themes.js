import $ from 'jquery'

export const FETCH_THEMES = 'FETCH_THEMES'

export const FETCH_THEME = 'FETCH_THEME'

const urlBase = 'http://localhost:8080/api/publications'

export function fetchThemes(nameFolderThemes) {
  return (dispatch, getState) => {
    $.get(`${urlBase}/${nameFolderThemes}/themes.json`)
    .then((response) => {
      // console.log(response)
      dispatch({ type:FETCH_THEMES, payload:response })
    })
    .catch((error) => {
      console.log(error)
    })
  }
}

export function fetchTheme(nameFolderPost, namefolderTheme) {
  console.log(nameFolderPost +' <-> '+namefolderTheme)

  return (dispatch, getState) => {
    console.log(`${urlBase}/${nameFolderPost}/themes.json`)

    $.get(`${urlBase}/${nameFolderPost}/themes.json`)
    .then((response) => {
      response.themes.map((theme) => {
        if(theme.namefoldertheme == namefolderTheme && theme.namefolderpost == nameFolderPost) {

          console.log(`${urlBase}/${nameFolderPost}/${namefolderTheme}/theme.md`)
          
          $.get(`${urlBase}/${nameFolderPost}/${namefolderTheme}/theme.md`)
          .then((t) => {
            theme.content = t
            dispatch({ type:FETCH_THEME, payload:theme })
          })
          
        }
      })
    })

  }
}
