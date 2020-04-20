import * as React from 'react'
import { IMapStateToPropsApp, IMapDispatchToPropsApp } from './ConnectedApp'
import Header from './Header/Header'


interface IApp extends IMapStateToPropsApp, IMapDispatchToPropsApp {}

const App = (props: IApp) => {
    return (
        <div className='App'>
            <Header />
        </div>
    )
}

export default App
