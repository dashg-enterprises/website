import * as React from 'react'
import Header from './Header/Header'
import AboutUs from './AboutUs/AboutUs'
import Join from './Join/Join'
import Footer from './Footer/Footer'

const App = () => {
    return (
        <div className='App'>
            <Header />
            <div style={{display: 'block', width: `100vw`}}>
                <AboutUs />
                <Join 
                    submitJsonPayload={console.log}
                />
                <Footer />
            </div>
           
        </div>
    )
}

export default App
