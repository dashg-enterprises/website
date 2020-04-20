import * as React from 'react'
import { IMapStateToPropsApp, IMapDispatchToPropsApp } from './ConnectedApp'


interface IApp extends IMapStateToPropsApp, IMapDispatchToPropsApp {}

const App = (props: IApp) => {
    return (
        <div className='App'>
            <div className='App-splash-logo'>
               
                <h2 className='header-text'>Developer Club</h2>
           
            </div>
        </div>
    )
}

export default App
