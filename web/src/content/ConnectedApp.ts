import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { push } from 'react-router-redux'
import App from './App'
import { IAppState } from '../redux/store/templates/appState'

export interface IMapStateToPropsApp {
    appState: IAppState;
}

export interface IMapDispatchToPropsApp {
    
}

const mapStateToProps = (state: IMapStateToPropsApp, ownProps) =>  {
    return {
        appState: state.appState
    }
}

const mapDispatchToProps = (dispatch, ownProps): IMapDispatchToPropsApp => {
    return {

    }
}

const ConnectedApp = withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

export default ConnectedApp