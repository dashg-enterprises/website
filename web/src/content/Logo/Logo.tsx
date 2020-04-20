import * as React from 'react'

const logo = './assets/images/logo.png'

interface ILogoSize {
    logoSize?: 's' | 'm' | 'l';
}


const Logo = (props: ILogoSize) => {
    const { logoSize } = props

    const logoClass = logoSize && `logo-${logoSize}`

    return (
        <img
            src={logo}
            className={logoClass}
        />
    )
}

export default Logo