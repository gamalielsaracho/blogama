import { connect } from 'react-redux'
import { fetchTheme } from '../../actions/themes'

// El componente que quiero conectar.
import ThemeDetails from '../../components/blog/themes/ThemeDetails'

function mapStateToProps(globalState, ownProps) {
  return {
    activeTheme:globalState.themes.activeTheme,
    nameFolderTheme:ownProps.folderT,
    nameFolderPost:ownProps.folderP
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTheme: (nameFolderPost, nameFolderTheme) => {
      dispatch(fetchTheme(nameFolderPost, nameFolderTheme))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeDetails)
