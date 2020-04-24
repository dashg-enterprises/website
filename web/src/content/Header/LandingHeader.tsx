import * as React from 'react'
import Logo from '../Logo/Logo'

interface ILandingHeader {
    hide: boolean;
    imageContainer: React.MutableRefObject<any>;
}

const LandingHeader = (props: ILandingHeader) => {
    const { imageContainer, hide} = props

    const style = hide ? {visibility:`hidden`} : {}
  
    return (
        <header id='landing-header' style={style as any}>
            <div ref={imageContainer} style={{zIndex: 10}}>
                <Logo logoSize='l' type='box'/>
            </div>
        </header>
    )
}

export default LandingHeader