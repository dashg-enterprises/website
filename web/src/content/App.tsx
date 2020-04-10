import * as React from 'react'
import { IMapStateToPropsApp, IMapDispatchToPropsApp } from './ConnectedApp'

const reactLogo = './assets/images/reactReduxTS.png'

interface IApp extends IMapStateToPropsApp, IMapDispatchToPropsApp {}

const App = (props: IApp) => {
    return (
        <div className='App'>
            <div className='App-splash-logo'>
                <img
                    src={reactLogo}
                    className={`header-logo`}
                />
                <h2 className='header-text'>here goes nothing....</h2>
           
            </div>
        </div>
    )
}

export default App
